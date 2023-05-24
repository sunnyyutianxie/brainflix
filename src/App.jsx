import { useState } from "react";
import videoDetails from "./data/video-details.json";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Component/Header";
import VideoList from "./components/Component/VideoList";
import NowVideo from "./components/Component/NowVideo";
import CommentList from "./components/Component/CommentList";
import VideoPlaying from "./components/Component/VideoPlaying";
import HomePage from "./components/Component/HomePage";
import UploadPage from "./components/Component/UploadPage";

function App() {
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
    <BrowserRouter>
      <div className="App">
        {/* Header Section */}
        <Header />

        {/* Video Playing Section
        <VideoPlaying nowVideo={nowVideo} /> */}

        {/* <div class="container">
          <div class="left-container">
            {/* Now Video Section */}
        {/* <NowVideo nowVideo={nowVideo} addComment={addComment} />

            {/* Comment Section */}
        {/* <CommentList comments={nowVideo.comments} />
          </div>

          {/* Next Video Section */}
        {/* <VideoList
            videos={videos}
            nowVideo={nowVideo}
            handleVideoClick={handleVideoClick}
          />
        </div> */}

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                videos={videos}
                nowVideo={nowVideo}
                addComment={addComment}
                comments={nowVideo.comments}
                handleVideoClick={handleVideoClick}
              />
            }
          />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/video" element={<Navigate to="/" />} />
          <Route path="/uploads" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
