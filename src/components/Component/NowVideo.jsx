import headerImg from "../../assets/images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import { convertDate } from "./convertDate.js";

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
        <div className="nowVideo__description">
          <p>{props.nowVideo.description}</p>
        </div>
      </div>
      <div className="nowVideo__comment">
        <div>
          <h2>{props.nowVideo.comments?.length} Comments</h2>
        </div>
        <div className="nowVideo__comment-conversation">
          <img src={headerImg} alt="" />
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              props.addComment(event.target.name.value);
            }}
          >
            <div className="conversationWraper">
              <label>JOIN THE CONVERSATION</label>
              <textarea
                name="name"
                type="text"
                placeholder="Add a new comment"
              />
            </div>
            <button>
              <img src={commentIcon} alt="" />
              COMMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NowVideo;
