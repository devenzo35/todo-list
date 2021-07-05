import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext({
  isLoggedIn: undefined,
});

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ isLoggedIn: undefined });

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user")) || {
      isLoggedIn: null,
    };
    setUser(storageUser);
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;
