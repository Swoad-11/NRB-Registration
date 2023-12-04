import { FaFacebookF, FaXTwitter, FaGoogle } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const SocialMedia = () => {
  return (
    <>
      <p className="font-base mb-2 mt-4">Or Sign up with social platforms</p>
      <div className="flex justify-center">
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
    </>
  );
};

export default SocialMedia;
