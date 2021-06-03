import { useEffect } from 'react';

const useBlur = (isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen) return;
    const rootDiv = document.getElementById('root');
    if (!rootDiv) return;
    rootDiv.style.filter = 'blur(6px)';

    return () => {
      if (!isOpen) return;
      const rootDiv = document.getElementById('root');
      if (!rootDiv) return;
      rootDiv.style.filter = 'none';
    };
  }, [isOpen]);
};

export default useBlur;
