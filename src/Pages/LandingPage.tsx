import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Velkommen til det Etiopiske Alfabetspil</h1>
      <p>Vælg en aktivitet for at komme i gang:</p>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "20px"}}>
        <Link 
        to="/flip-game" 
        style={{ 
            fontSize: "20px", 
            padding: "10px 20px", 
            background: "#007BFF", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "5px" }}>

          Vendespil
        </Link>

        <Link 
        to="/connect-the-dots" 
        style={{ 
            fontSize: "20px", 
            padding: "10px 20px", 
            background: "#007BFF", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "5px" }}>

          Connect the dots
        </Link>
      </div>
    </div>

  );
}
