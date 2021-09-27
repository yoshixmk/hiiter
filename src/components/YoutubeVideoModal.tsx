type Props = {
  videoId: string;
  start: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const YoutubeVideoModal = ({ videoId, start }: Props): JSX.Element => {
  return (
    <iframe
      width="400"
      height="225"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=${start}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
