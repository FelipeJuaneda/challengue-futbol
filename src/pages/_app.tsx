import React, { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import TeamsProvider from "../context/TeamsContext";
import { Toaster } from "sonner";
import Modal from "react-modal";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#__next"); 
  }, []);
  return (
    <TeamsProvider>
      <Toaster richColors />
      <Component {...pageProps} />
    </TeamsProvider>
  );
}

export default MyApp;
