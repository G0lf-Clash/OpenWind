import { useCallback, useEffect, useRef, useState } from 'react';

export default function useToast() {
  const [message, setMessage] = useState('');
  const timerRef = useRef(null);

  const show = useCallback((msg, ms = 2500) => {
    setMessage(String(msg));
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setMessage(''), ms);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { message, show, clear: () => setMessage('') };
}
