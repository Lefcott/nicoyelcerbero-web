export default function BackgroundVideo() {
  return (
    <video
      className="fixed top-0 left-0 w-[100vw] h-[100vh] opacity-30 object-cover"
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
