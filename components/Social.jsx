import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/HacktivistTD" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/thushara-dilruksha-b07234277/" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaYoutube />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
