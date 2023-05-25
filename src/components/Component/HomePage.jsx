import VideoPlaying from "./VideoPlaying";
import NowVideo from "./NowVideo";
import CommentList from "./CommentList";
import VideoList from "./VideoList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import videoDetails from "../../data/video-details.json";

function HomePage() {
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
