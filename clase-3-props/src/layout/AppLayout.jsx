import { Footer } from "../components/footer/Footer";
import { Logo } from "../components/logo/Logo";
import { Navbar } from "../components/navbar/Navbar";

import "./Layout.css"

export const AppLayout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Logo withTitle />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
