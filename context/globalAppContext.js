import { createContext, useState } from 'react';

const GlobalAppContext = createContext();

function GlobalAppProvider({ children }) {
  const [dummyValue, setDummyValue] = useState('initialize');

  return (
    <GlobalAppContext.Provider value={{ dummyValue, setDummyValue }}>
      {children}
    </GlobalAppContext.Provider>
  );
}

export { GlobalAppProvider, GlobalAppContext };
