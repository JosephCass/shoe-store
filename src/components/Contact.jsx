import gitIcon from "../assets/github.svg";
import faceBookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/square-twitter.svg";
import emailIcon from "../assets/envelope-solid-1.svg";
import phoneIcon from "../assets/phone-solid.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="social-media-container">
        <a
          className="media-link"
          href="https://github.com/JosephCass/shoe-store"
        >
          <img className="media-icon" src={gitIcon} alt="GitHub Icon" />
        </a>
        <a className="media-link" href="https://www.facebook.com/">
          <img className="media-icon" src={faceBookIcon} alt="Facebook Icon" />
        </a>
        <a className="media-link" href="https://www.instagram.com/">
          <img
            className="media-icon"
            src={instagramIcon}
            alt="Instagram Icon"
          />
        </a>
        <a className="media-link" href="https://twitter.com/">
          <img className="media-icon" src={twitterIcon} alt="Twitter Icon" />
        </a>
      </div>
      <div className="contact-container">
        <a href="mailto: " className="contact-link">
          <img className="contact-icon" src={emailIcon} alt="Email icon" />
        </a>
        <p className="contact-text">madeupemail@gmail.com</p>
        <a href="tel: " className="contact-link">
          <img className="contact-icon" src={phoneIcon} alt="Phone icon" />
        </a>
        <p className="contact-text">+1 123-456-7890</p>
      </div>
    </div>
  );
}
