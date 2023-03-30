import React, {useState, useEffect} from 'react';
import "./privacy.css";
import logoUrl from "../../components/Icon/AirbnbPrivacy.jpeg";
function Privacy() {
  return (
    <div className='privacyPage'>
      <h1>Airbnb privacy</h1>
      <h2>PRIVACY Policy</h2>
      Our Privacy Policy explains what personal information we collect, how we use personal information, how personal information is shared, and privacy rights.<br></br>
      <img src={logoUrl} alt="Airbnb"/><br></br>
      North America (Excluding Mexico)<br></br>
      Privacy Policy for the United States<br></br>
      Privacy Policy for Outside the U.S. (English)<br></br>
      Privacy Policy for Outside the U.S. (French)<br></br>
      Latin America (Including Mexico, Central and South America, and the Caribbean)<br></br>
      Privacy Policy for Latin America (English)<br></br>
      Privacy Policy for Latin America (Spanish)<br></br>
      Privacy Policy for Latin America (Portuguese)<br></br>
      Europe, Middle East, and Africa<br></br>
      Privacy Policy for Europe, the Middle East, Africa, and Other Countries<br></br>
      Asia Pacific<br></br>
      Privacy Policy for Asia Pacific (Excluding China)<br></br>
      China<br></br>
      Privacy Policy for China<br></br>
      Please review the supplemental privacy policies linked within the privacy policy documents, such as for certain Airbnb services, that may be applicable to you.<br></br>

      Supplemental Privacy Policy Documents:<br></br>

      Outside the United States<br></br>
      California, Colorado, Connecticut, Utah, Vermont, and Virginia<br></br>
      Cookie Policy<br></br>
      Enterprise Customers and Airbnb for Work<br></br>
      Colombia Only<br></br>
      Non-User DAC7 Privacy Notice<br></br>
    </div>
  );
}

export default Privacy;
