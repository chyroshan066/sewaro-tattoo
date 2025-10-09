'use client';

import { useEffect, ReactNode } from 'react';

interface JQueryProviderProps {
    children: ReactNode;
}

export default function JQueryProvider({ children }: JQueryProviderProps) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const jQuery = require('jquery');
            window.$ = window.jQuery = jQuery;
        }
    }, []);

    return <>{children}</>;
}