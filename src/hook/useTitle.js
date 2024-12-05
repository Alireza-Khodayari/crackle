import { useEffect } from "react";

export default function useTtile (pageTitle) {
    useEffect ( function () {
        document.title = pageTitle;
    },[])
}