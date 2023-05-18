import { useState } from "react";
import videoDetails from "./data/video-details.json";
import "./App.css";
import Header from "./components/Component/Header";
import VideoList from "./components/Component/VideoList";
import NowVideo from "./components/Component/NowVideo";
import CommentList from "./components/Component/CommentList";

function App() {
  const [videos, setVideos] = useState(videoDetails);
  const [nowVideo, setNowVideo] = useState(videos[0]);

  const handleVideoClick = (id) => {
    // console.log(id);
    const foundVideo = videos.find((video) => video.id === id);
    // console.log(foundVideo);
    setNowVideo(foundVideo);
  };

  //TODO: make it functional
  function addComment(content) {
    let temArray = [
      {
        name: "Unknown",
        comment: content,
      },
    ];
    let newArray = nowVideo.comments.concat(temArray);
    let copy = newArray.slice();
    console.log(copy);
  }

  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* Now Video Section */}
      <NowVideo nowVideo={nowVideo} addComment={addComment} />

      {/* Comment Section */}
      <CommentList comments={nowVideo.comments} />

      {/* Next Video Section */}
      <VideoList
        videos={videos}
        nowVideo={nowVideo}
        handleVideoClick={handleVideoClick}
      />
    </div>
  );
}

export default App;
