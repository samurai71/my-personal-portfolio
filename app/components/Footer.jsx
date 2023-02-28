import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center w-full">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Mark Landeryou All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
