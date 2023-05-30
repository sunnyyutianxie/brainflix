import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import publishButton from "../../assets/Icons/publish.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadPage() {
  const navigate = useNavigate();

  return (
    <div id="uploadBlock">
      <h1 className="uploadVideo__title">Upload Video</h1>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.elements.title.value;
          const description = event.target.elements.description.value;

          const videoData = {
            title: title,
            description: description,
          };

          try {
            axios.post("http://localhost:8080/videos", videoData);
            alert("published");
            navigate("/");
          } catch (error) {
            console.error(error);
          }
        }}
      >
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
          <button id="publishButton">
            <img src={publishButton} alt="" />
            <p>PUBLISH</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
