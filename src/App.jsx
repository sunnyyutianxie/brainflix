import { useState, useEffect } from "react";
import videoDetails from "./data/video-details.json";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Component/Header";
import axios from "axios";
import HomePage from "./components/Component/HomePage";
import UploadPage from "./components/Component/UploadPage";
import { Link, useParams } from "react-router-dom";

function App() {
  const [videos, setVideos] = useState(videoDetails);
  const [nowVideo, setNowVideo] = useState(videos[0]);
  const handleVideoClick = (id) => {
    const foundVideo = videos.find((video) => video.id === id);
    setNowVideo(foundVideo);
  };

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=%3Cf61e3f42-45c7-4ae9-9acd-1525652bf2fd%3E"
      )
      .then((response) => {
        // console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // console.log(params.id);
    if (params.id) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${params.id}/?api_key=%3Cf61e3f42-45c7-4ae9-9acd-1525652bf2fd%3E`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  }, [params.id]);

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
        <Header />

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
