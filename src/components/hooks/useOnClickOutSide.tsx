import React from 'react';

function useOnClickOutside(
    ref: React.RefObject<HTMLElement>,
    callback: Function
) {
    const handleClickOutside = React.useCallback(
        (e: MouseEvent) => {
            if (!ref.current || ref.current.contains(e.target as HTMLElement))
                return;

            callback();
        },
        [ref, callback]
    );
    React.useEffect(() => {
        window.document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.document.removeEventListener(
                'mousedown',
                handleClickOutside
            );
        };
    }, [handleClickOutside]);
    return [];
}
export default useOnClickOutside;
