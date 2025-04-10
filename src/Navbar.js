import React from "react";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#1a202c", color: "white", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>My Portfolio</h1>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: "0", padding: "0" }}>
        <li><a href="#home" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
        <li><a href="#projects" style={{ textDecoration: "none", color: "white" }}>Projects</a></li>
        <li><a href="#contact" style={{ textDecoration: "none", color: "white" }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;