import React from "react";
import "./styles.css";

export default function Footer() {
  //for current year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p> Copyright© {currentYear}</p>
    </footer>
  );
}
