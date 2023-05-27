import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchLogo from "../../assets/Icons/search.svg";
import uploadButton from "../../assets/Icons/upload.svg";
import headerImg from "../../assets/images/Mohan-muruge.jpg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src={BrainFlixLogo} alt="" />
        </Link>
      </div>
      <div className="header__right">
        <button type="submit">
          <img src={searchLogo} alt="" />
        </button>
        <input type="text" placeholder="Search" />

        <div id="mohan-img">
          <img src={headerImg} alt="" />
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/uploads");
        }}
        type="button"
      >
        <img src={uploadButton} alt="" />
        <p>UPLOAD</p>
      </button>
    </div>
  );
}

export default Header;
