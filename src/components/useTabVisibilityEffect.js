import { useEffect } from 'react';

const useTabVisibilityEffect = () => {
    useEffect(() => {
        const originalTitle = document.title;
        const originalFavicon = document.querySelector("link[rel='icon']")?.getAttribute('href');
        const sadFavicon = '/sad-face.ico'; // Add this to your public folder

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "Missing you already 😢";
                changeFavicon(sadFavicon);
            } else {
                document.title = originalTitle;
                changeFavicon(originalFavicon);
            }
        };

        const changeFavicon = (iconURL) => {
            let favicon = document.querySelector("link[rel='icon']");
            if (!favicon) {
                favicon = document.createElement('link');
                favicon.rel = 'icon';
                document.head.appendChild(favicon);
            }
            favicon.href = iconURL;
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
};

export default useTabVisibilityEffect;
