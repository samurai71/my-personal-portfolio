import React from "react";

function Footer() {
  return (
    <div className="flex justify-center w-full">
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </div>
  );
}

export default Footer;
