import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Street@69</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @street@69</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.instagram.com/_._dipesh_._01/">
          <AiFillInstagram/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007381275129">
          <AiFillFacebook />
        </a>
        <a href="https://github.com/Dipesh-Kumar-775">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
