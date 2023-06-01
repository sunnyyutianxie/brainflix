import { convertDate } from "./convertDate.js";
import commentImg from "../../assets/images/comment profile pic.png";
import axios from "axios";

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
            <div className="comment__sole__rightblock__delete">
              <button
                onClick={() => {
                  let commentId = comment.id;
                  const commentData = {
                    commentId: commentId,
                  };
                  try {
                    axios
                      .delete(
                        `http://localhost:8080/videos/${props.nowVideo.id}/comments`,
                        commentData
                      )
                      .then(() => {
                        props.getById(props.nowVideo.id);
                        alert("deleted");
                      });
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
