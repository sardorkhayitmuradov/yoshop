import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export default function ModalProvider({ children }) {
  const [visible, setVisible] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}