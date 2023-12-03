import { FaFacebookF, FaXTwitter, FaGoogle } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="#" className="social-icon">
        <FaFacebookF />
      </a>
      <a href="#" className="social-icon">
        <FaXTwitter />
      </a>
      <a href="#" className="social-icon">
        <FaGoogle />
      </a>
      <a href="#" className="social-icon">
        <TiSocialLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
