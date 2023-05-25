import { Link, useParams } from "react-router-dom";

function VideoList(props) {
  //   console.log(props);
  return (
    <div className="videoList">
      <span>NEXT VIDEOS</span>
      {props.videos
        .filter((video) => {
          //   console.log(video.id);
          //   console.log(props.nowVideo.id);
          return video.id !== props.nowVideo.id;
        })
        .map((video) => (
          <Link className="link-no-style" to={`/videos/${video.id}`}>
            <div
              key={video.id}
              onClick={() => {
                props.handleVideoClick(video.id);
              }}
            >
              <div className="videoList__wraper">
                <div className="videoList__wraper-left">
                  <img src={video.image} alt="" />
                </div>
                <div className="videoList__wraper-right">
                  <h3>{video.title}</h3>
                  <p>{video.channel}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default VideoList;
