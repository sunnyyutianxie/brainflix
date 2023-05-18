import { convertDate } from "./convertDate.js";

function CommentList(props) {
  // console.log(props);
  return (
    <div className="comment">
      {props.comments.map((comment) => (
        <div className="comment__sole" key={comment.id}>
          <img src="" alt="" />
          <h3>{comment.name}</h3>
          <h3>{convertDate(comment.timestamp)}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
