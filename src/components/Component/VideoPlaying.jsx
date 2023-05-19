let apiKey = "?api_key=<f61e3f42-45c7-4ae9-9acd-1525652bf2fd>";

function VideoPlaying(props) {
  return (
    <div className="videoPlaying">
      <video controls>
        <source src={props.nowVideo.video + apiKey} />
      </video>
    </div>
  );
}

export default VideoPlaying;
