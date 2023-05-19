import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchLogo from "../../assets/Icons/search.svg";
import uploadButton from "../../assets/Icons/upload.svg";
import headerImg from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <a>
          <img src={BrainFlixLogo} alt="" />
        </a>
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
      <button type="button">
        <img src={uploadButton} alt="" />
        <p>UPLOAD</p>
      </button>
    </div>
  );
}

export default Header;
