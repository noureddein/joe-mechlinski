const RenderVideo = ({ sources, style }) => {
  const { container, subContainer } = style;
  return (
    <>
      <div className={container}>
        {sources.map((source, idx) => {
          return (
            <div key={idx} className={subContainer}>
              <iframe
                title="vimeo-player"
                src={source}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="z-10 object-cover w-full h-full"
              ></iframe>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RenderVideo;
