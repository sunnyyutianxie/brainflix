import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchLogo from "../../assets/Icons/search.svg";
import uploadButton from "../../assets/Icons/upload.svg";
import headerImg from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <div class="header">
      <div class="header__left">
        <a href="#">
          <img src={BrainFlixLogo} alt="" />
        </a>
      </div>

      <div class="header__right">
        <button type="submit">
          <img src={searchLogo} alt="" />
        </button>
        <input type="text" placeholder="Search" />
        <button type="button">
          <img src={uploadButton} alt="" />
          UPLOAD
        </button>
      </div>
      <div id="mohan-img">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
