import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { createContext } from "react";

export const userContext = createContext({
  isLoggedIn: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <userContext.Provider
      value={{
        isLoggedIn: true,
      }}
    >
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;
