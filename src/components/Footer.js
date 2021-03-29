import React from "react";
function Footer({ open, setOpen }) {
  return (
    <>
      <div className="footer">
        <button className="rules-btn" onClick={() => setOpen(!open)}>
          rules
        </button>
      </div>
    </>
  );
}
export default Footer;
