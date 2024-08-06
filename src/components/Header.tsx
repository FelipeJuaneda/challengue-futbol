import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold">ATC Dream Match</Link>
        <nav>
          <Link href="/" className="mr-4">
            Inicio
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
