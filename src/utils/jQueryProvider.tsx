'use client';

import { useEffect, ReactNode } from 'react';

interface JQueryProviderProps {
    children: ReactNode;
}

export default function JQueryProvider({ children }: JQueryProviderProps) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('jquery').then((jQuery) => {
                window.$ = window.jQuery = jQuery.default;
            });
        }
    }, []);

    return <>{children}</>;
}