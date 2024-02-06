import { useEffect } from 'react';
import {useLocation } from 'react-router-dom';
export function ScrollToTop() {
    /* Scrollar till element på varje sida vid byt av url-path om id "scrollTo" finns */
    const { pathname } = useLocation();
    useEffect(() => {
            document.getElementById('scrollTo')?.scrollIntoView();
    }, [pathname]);
    return null;
}
