import React from "react";
import Image from "next/image";
import CdnFlag from "../../public/img/cdn.webp";

function Footer() {
  return (
    <footer className="bg-slate-600 py-2 pb-2 my-2 border-2">
      <div className="flex justify-center">
        <Image src={CdnFlag} alt="Canadian Flag Animation" />
      </div>
      <div className="flex justify-center w-full">
        <p className="font-mono pb-3 text-white">
          &copy; {new Date().getFullYear()} Mark Landeryou All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
