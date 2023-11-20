import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react";

export function useToggleClickRef<T extends HTMLElement>(initialVisible: boolean): [RefObject<T>, boolean, Dispatch<SetStateAction<boolean>>] {
    const [isVisible, setVisible] = useState(initialVisible)
    const ref = useRef<T>(null)

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setVisible(false);
            }
        }

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return [
        ref,
        isVisible,
        setVisible,
    ]
}