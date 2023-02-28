import React from "react";

function Footer() {
  return (
    <div className="flex justify-center w-full">
      <p className="font-mono">
        &copy; {new Date().getFullYear()} Mark Landeryou All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
