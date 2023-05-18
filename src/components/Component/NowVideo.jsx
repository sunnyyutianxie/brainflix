import headerImg from "../../assets/images/Mohan-muruge.jpg";
import { convertDate } from "./convertDate.js";

let apiKey = "?api_key=<f61e3f42-45c7-4ae9-9acd-1525652bf2fd>";

function NowVideo(props) {
  return (
    <>
      <video controls>
        <source src={props.nowVideo.video + apiKey} />
      </video>
      <div>
        <div>
          <h1>{props.nowVideo.title}</h1>
        </div>
        <div>
          <h2>{props.nowVideo.channel}</h2>
          <h3>{convertDate(props.nowVideo.timestamp)}</h3>
          <h3>{props.nowVideo.views}</h3>
          <h3>{props.nowVideo.likes}</h3>
        </div>
        <div>
          <p>{props.nowVideo.description}</p>
        </div>
      </div>
      <div>
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
    </>
  );
}

export default NowVideo;
