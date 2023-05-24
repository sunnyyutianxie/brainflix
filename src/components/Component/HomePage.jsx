import VideoPlaying from "./VideoPlaying";
import NowVideo from "./NowVideo";
import CommentList from "./CommentList";
import VideoList from "./VideoList";

function HomePage(props) {
  return (
    <div>
      {/* Video Playing Section  */}
      <VideoPlaying nowVideo={props.nowVideo} />

      <div class="container">
        <div class="left-container">
          {/* Now Video Section */}
          <NowVideo nowVideo={props.nowVideo} addComment={props.addComment} />

          {/* Comment Section */}
          <CommentList comments={props.nowVideo.comments} />
        </div>

        {/* Next Video Section*/}
        <VideoList
          videos={props.videos}
          nowVideo={props.nowVideo}
          handleVideoClick={props.handleVideoClick}
        />
      </div>
    </div>
  );
}

export default HomePage;
