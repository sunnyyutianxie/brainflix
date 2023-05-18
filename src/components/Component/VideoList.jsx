function VideoList(props) {
  //   console.log(props);
  return (
    <div className="videoList">
      {props.videos
        .filter((video) => {
          //   console.log(video.id);
          //   console.log(props.nowVideo.id);
          return video.id != props.nowVideo.id;
        })
        .map((video) => (
          <div
            key={video.id}
            onClick={() => {
              props.handleVideoClick(video.id);
            }}
          >
            <img src={video.image} alt="" />
            <h3>{video.title}</h3>
            <p>{video.channel}</p>
          </div>
        ))}
    </div>
  );
}

export default VideoList;
