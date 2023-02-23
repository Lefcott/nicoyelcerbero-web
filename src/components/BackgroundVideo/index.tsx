export default function BackgroundVideo() {
  return (
    <video
      className="fixed top-0 left-0 w-[100vw] h-[100vh] opacity-30 object-cover"
      autoPlay
      muted
      loop
    >
      <source
        src="https://dl.dropboxusercontent.com/s/9z4jl4ekfsweq0n/oxidado_sin_sonido.mp4?dl=0"
        type="video/mp4"
      />
    </video>
  );
}
