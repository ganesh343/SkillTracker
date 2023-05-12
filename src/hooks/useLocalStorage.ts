import { useState } from 'react';
import SecureLS from 'secure-ls';

export function useLocalStorage<S>(keyName: string, defaultValue: S): [S, (value: S) => void] {
  const secureLS = new SecureLS();

  const [storedValue, setStoredValue] = useState<S>(() => {
    try {
      const value = secureLS.get(keyName);
      if (value) {
        return JSON.parse(value) as S;
      } else {
        secureLS.set(keyName, JSON.stringify(defaultValue));
        return defaultValue as S;
      }
    } catch (err) {
      return defaultValue as S;
    }
  });

  const setValue = (newValue: S) => {
    try {
      secureLS.set(keyName, JSON.stringify(newValue));
    } catch (err) {
      return;
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
}
