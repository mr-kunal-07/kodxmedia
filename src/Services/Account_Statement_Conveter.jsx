import React, { useState } from "react";

const BankStatementConverter = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [error, setError] = useState("");
    const [isConverting, setIsConverting] = useState(false);

    const handlePdfChange = (e) => {
        setPdfFile(e.target.files[0]);
        setError("");
    };

    const groupByRows = (items, tolerance = 5) => {
        const rows = [];
        items.forEach((item) => {
            let foundRow = rows.find(
                (row) => Math.abs(row.y - item.transform[5]) < tolerance
            );
            if (foundRow) {
                foundRow.items.push(item);
            } else {
                rows.push({ y: item.transform[5], items: [item] });
            }
        });
        rows.forEach((row) => {
            row.items.sort((a, b) => a.transform[4] - b.transform[4]);
        });
        rows.sort((a, b) => b.y - a.y);
        return rows;
    };

    const extractPageText = async (page) => {
        const textContent = await page.getTextContent();
        const items = textContent.items.map((item) => ({
            str: item.str.trim(),
            transform: item.transform,
        }));
        return groupByRows(items);
    };

    const parseBankStatement = (rows) => {
        const data = [];
        for (const row of rows) {
            const rowText = row.items.map((item) => item.str);
            if (rowText.length < 3) continue;
            const dateRegex =
                /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2,4}$/;
            if (!dateRegex.test(rowText[0])) continue;

            const date = rowText[0];
            const debit = rowText[rowText.length - 3];
            const credit = rowText[rowText.length - 2];
            const balance = rowText[rowText.length - 1];
            const description = rowText.slice(1, rowText.length - 3).join(" ");

            data.push([date, description, debit, credit, balance]);
        }
        return data;
    };

    const handleConvert = async () => {
        if (!pdfFile) {
            setError("Please upload a PDF file.");
            return;
        }
        try {
            setIsConverting(true);
            const fileReader = new FileReader();

            fileReader.onload = async (event) => {
                const typedArray = new Uint8Array(event.target.result);
                const pdf = await window.pdfjsLib.getDocument({ data: typedArray }).promise;
                let allData = [];

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const rows = await extractPageText(page);
                    const pageData = parseBankStatement(rows);
                    allData = allData.concat(pageData);
                }

                if (allData.length === 0) {
                    setError("No bank statement data found or PDF format is not supported.");
                    setIsConverting(false);
                    return;
                }

                allData.unshift(["Date", "Description", "Debit", "Credit", "Balance"]);
                const ws = window.XLSX.utils.aoa_to_sheet(allData);
                const wb = window.XLSX.utils.book_new();
                window.XLSX.utils.book_append_sheet(wb, ws, "Bank Statement");
                window.XLSX.writeFile(wb, "bank_statement.xlsx");

                setIsConverting(false);
            };

            fileReader.readAsArrayBuffer(pdfFile);
        } catch (e) {
            console.error(e);
            setError("Failed to convert PDF to Excel.");
            setIsConverting(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Bank Statement PDF to Excel
            </h2>
            <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfChange}
                className="mb-4 w-full"
            />
            <button
                onClick={handleConvert}
                disabled={isConverting}
                className={`w-full py-2 rounded text-white ${isConverting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            >
                {isConverting ? "Converting..." : "Convert"}
            </button>
            {error && <p className="mt-3 text-red-600">{error}</p>}
        </div>
    );
};

export default BankStatementConverter;
