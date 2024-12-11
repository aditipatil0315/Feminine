import { useState } from "react";
import "./Footer.css";

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="footer_container">
      <div className="footer">
        
        <p>All the information provided is for project purpose only.</p>
      </div>

      {isVisible ? (<div className="disclaimer">
      <i class="fa-solid fa-xmark" onClick={() => setIsVisible(false)}></i>
        <ol>
          
         <b> DISCLAIMER - READ THIS CAREFULLY</b> <br /> <br /><li>The content provided on this website, including
          articles, tips, guidance, and resources related to pregnancy, periods,
          and women's health, is intended for general informational purposes
          only. It is not a substitute for professional medical advice,
          diagnosis, or treatment. </li>
          <li>The information here should not be used to
          diagnose or treat any health condition or disease. Always seek the
          advice of your physician, gynecologist, or other qualified healthcare
          providers for questions regarding any medical condition or treatment
          plan. </li>
          <li>We strive to provide accurate and up-to-date information, but we
          make no warranties or representations regarding the accuracy,
          completeness, or suitability of the information contained on this
          website.</li>
          <li>The guidance provided is based on general knowledge and may
          not be applicable to your specific health situation, as every
          individual is different.</li>  
          <li>Do not disregard or delay seeking medical
          advice because of something you have read on this website. Please note
          that the tips, suggestions, and recommendations offered here are not
          designed to replace personalized care from healthcare professionals.</li> 
          <li> are meant to supplement a general understanding of women's health
          topics such as pregnancy and menstruation. </li>
          <li>They Individual reactions to advice or recommendations may vary, and what works for one person may
          not necessarily work for another.</li>
          <li>This website and its creators are
          not responsible for any adverse effects, consequences, or harm arising
          from the use or reliance on the information provided.</li>
          <li>Any action taken
          based on the content of this website is strictly at your own risk. <br />If
          you are experiencing a medical emergency, please contact your doctor
          or go to the nearest emergency facility immediately. </li>
          <li> Always consult a
          healthcare professional before making any major decisions regarding
          your health or well-being.</li> <br />
          THANK YOU

        </ol>
      </div>) : (<button onClick={() => setIsVisible(true)}>
        Read Disclaimer</button>
)}
      
    </div>
  );
};

export default Footer;
