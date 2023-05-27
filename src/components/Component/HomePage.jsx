import VideoPlaying from "./VideoPlaying";
import NowVideo from "./NowVideo";
import CommentList from "./CommentList";
import VideoList from "./VideoList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

let apiKey = "?api_key=<f61e3f42-45c7-4ae9-9acd-1525652bf2fd>";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [nowVideo, setNowVideo] = useState({});
  const params = useParams();

  function getById(passID) {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${passID}/${apiKey}`)
      .then((response) => {
        setNowVideo(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${apiKey}`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (params.id) {
      getById(params.id);
    } else {
      getById("84e96018-4022-434e-80bf-000ce4cd12b8");
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

  return nowVideo.video && videos ? (
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
        <VideoList videos={videos} nowVideo={nowVideo} />
      </div>
    </div>
  ) : null;
}

export default HomePage;
