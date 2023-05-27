import { convertDate } from "./convertDate.js";
import commentImg from "../../assets/images/comment profile pic.png";

function CommentList(props) {
  return (
    <div className="comment">
      {props.comments?.map((comment) => (
        <div className="comment__sole" key={comment.id}>
          <img src={commentImg} alt="" />
          <div className="comment__sole__rightblock">
            <div className="comment__sole__rightblock__top">
              <div
                className=".comment__sole__rightblock__top-name"
                id="nameChanger"
              >
                {comment.name}
              </div>
              <div
                className=".comment__sole__rightblock__top-date"
                id="dateChanger"
              >
                {convertDate(comment.timestamp)}
              </div>
            </div>
            <div className=".comment__sole__rightblock__words" id="sizeChanger">
              {comment.comment}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
