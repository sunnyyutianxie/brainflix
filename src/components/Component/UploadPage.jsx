import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import publishButton from "../../assets/Icons/publish.svg";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();

  return (
    <div id="uploadBlock">
      <h1 className="uploadVideo__title">Upload Video</h1>
      <form action="">
        <div className="uploadVideo">
          <div className="uploadVideo__left">
            <div className="uploadVideo__left-thumbnail">
              <label>VIDEO THUMBNAIL</label>
              <img src={uploadImg} alt="" />
            </div>
          </div>
          <div className="uploadVideo__right">
            <div className="uploadVideo__right-title">
              <label>TITLE YOUR VIDEO</label>
              <input
                name="title"
                type="text"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="uploadVideo__right-description">
              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea
                name="description"
                type="text"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button
            id="cancelButton"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            CANCEL
          </button>
          <button
            id="publishButton"
            onClick={(event) => {
              event.preventDefault();
              alert("published");
              navigate("/");
            }}
          >
            <img src={publishButton} alt="" />
            <p>PUBLISH</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
