import VideoPlaying from "./VideoPlaying";
import NowVideo from "./NowVideo";
import CommentList from "./CommentList";
import VideoList from "./VideoList";
import { useState } from "react";
import videoDetails from "../../data/video-details.json";

function HomePage() {
  const [videos, setVideos] = useState(videoDetails);
  const [nowVideo, setNowVideo] = useState(videos[0]);
  const handleVideoClick = (id) => {
    const foundVideo = videos.find((video) => video.id === id);
    setNowVideo(foundVideo);
  };

  //TODO: make it functional, update the comment
  function addComment(content) {
    let temArray = [
      {
        comment: content,
        name: "Unknown",
      },
    ];
    let newArray = nowVideo.comments.concat(temArray);
    let copy = newArray.slice();
    console.log(copy);
  }

  return (
    <div>
      {/* Video Playing Section  */}
      <VideoPlaying nowVideo={nowVideo} />

      <div class="container">
        <div class="left-container">
          {/* Now Video Section */}
          <NowVideo nowVideo={nowVideo} addComment={addComment} />

          {/* Comment Section */}
          <CommentList comments={nowVideo.comments} />
        </div>

        {/* Next Video Section*/}
        <VideoList
          videos={videos}
          nowVideo={nowVideo}
          handleVideoClick={handleVideoClick}
        />
      </div>
    </div>
  );
}

export default HomePage;
