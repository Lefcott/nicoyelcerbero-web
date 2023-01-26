export default function BackgroundVideo() {
  return (
    <video
      className="fixed right-0 bottom-0 min-w-[120vw] min-h-[100vh] opacity-30"
      autoPlay
      muted
      loop
    >
      <source
        src="https://res.cloudinary.com/datmyqnul/video/upload/v1674690961/oxidado_sin_sonido_pemxvr.mp4"
        type="video/mp4"
      />
    </video>
  );
}
