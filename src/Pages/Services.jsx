import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, FileText, Globe, Palette, TrendingUp, ArrowUpRight } from 'lucide-react';

const allServices = [
  {
    title: 'Website Development',
    description: 'We design and build beautiful, user-friendly websites that work for your business.',
    category: 'Web',
    path: '/website-development',
    icon: <Globe className="text-black w-6 h-6" />,
  },
  {
    title: 'Mobile App Development',
    description: 'We create native and cross-platform mobile apps that are fast, secure, and scalable.',
    category: 'Mobile',
    path: '/app-development',
    icon: <Smartphone className="text-black w-6 h-6" />,
  },
  {
    title: 'Account Balance Sheet Converter',
    description: 'We convert your account balance sheets to XML and help you easily migrate your data.',
    category: 'Finance',
    path: '/account-balance-sheet-converter',
    icon: <FileText className="text-black w-6 h-6" />,
  },
  {
    title: 'Portfolio Website',
    description: 'Showcase your work beautifully.',
    category: 'Web',
    path: '/portfolio-website',
    icon: <Code2 className="text-black w-6 h-6" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Create stunning user interfaces.',
    category: 'Design',
    path: '/ui-ux-design',
    icon: <Palette className="text-black w-6 h-6" />,
  },
  {
    title: 'SEO Services',
    description: 'Improve your search engine ranking.',
    category: 'Marketing',
    path: '/seo-services',
    icon: <TrendingUp className="text-black w-6 h-6" />,
  },
];

const Services = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShow(true), 100);
  }, []);

  const filtered = allServices.filter(
    (service) =>
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="bg-white min-h-screen px-6 py-12 max-w-7xl mx-auto">
      <h1
        className={`text-4xl font-bold text-center mb-10 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}
      >
        All Services
      </h1>

      {/* Search and Filter */}
      <div
        className={`mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 max-w-4xl mx-auto transition-opacity duration-1000 delay-200 ${show ? 'opacity-100' : 'opacity-0'}`}
      >
        <input
          type="text"
          placeholder="Search services..."
          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="all">All Categories</option>
          <option value="Web">Web</option>
          <option value="Mobile">Mobile</option>
          <option value="Finance">Finance</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className={`relative group border rounded-xl p-6 shadow bg-white transform transition-all duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Left Icon */}
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>

              <span className="inline-block mt-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {service.category}
              </span>

              {/* Bottom-right arrow icon */}
              <div className="absolute bottom-4 right-4">
                <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
