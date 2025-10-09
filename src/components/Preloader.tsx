"use client";

import { memo, useEffect, useState } from "react";

export const Preloader = memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true);
        };

        // "document.readyState" returns a string value indicating the loading state of the document. It has three values "loading", "interactive" and "complete".
        // 1. "loading" - The document is still loading
        // 2. "interactive" - The document has finished loading and been parsed, but sub-resources (images, stylesheets, etc.) are still loading
        // 3. "complete" - The document and all sub-resources have finished loading
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <div id="preloader" className={isLoaded ? "hide-preloader" : ""}>
            <div id="loader"></div>
        </div>
    );
});

Preloader.displayName = "Preloader";