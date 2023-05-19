import headerImg from "../../assets/images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import { convertDate } from "./convertDate.js";

let apiKey = "?api_key=<f61e3f42-45c7-4ae9-9acd-1525652bf2fd>";

function NowVideo(props) {
  return (
    <div className="nowVideo">
      <div className="nowVideo__info">
        <div>
          <h1>{props.nowVideo.title}</h1>
        </div>
        <div className="nowVideo__info-head">
          <div className="wraper1">
            <div className="nowVideo__info-head-1">
              <h2>By {props.nowVideo.channel}</h2>
            </div>

            <div className="nowVideo__info-head-2">
              <h3>{convertDate(props.nowVideo.timestamp)}</h3>
            </div>
          </div>
          <div className="wraper2">
            <div className="nowVideo__info-head-3">
              <img src={viewsIcon} alt="" />
              <h3>{props.nowVideo.views}</h3>
            </div>

            <div className="nowVideo__info-head-4">
              <img src={likesIcon} alt="" />
              <h3>{props.nowVideo.likes}</h3>
            </div>
          </div>
        </div>
        <div>
          <p>{props.nowVideo.description}</p>
        </div>
      </div>
      <div className="nowVideo__comment">
        <div>
          <h2>{props.nowVideo.comments.length} Comments</h2>
        </div>
        <div>
          <div id="mohan-img">
            <img src={headerImg} alt="" />
          </div>
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              props.addComment(event.target.name.value);
            }}
          >
            <div>
              <label>JOIN THE CONVERSATION</label>
              <input name="name" type="text" placeholder="Add a new comment" />
            </div>
            <div>
              <button>COMMENT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NowVideo;
