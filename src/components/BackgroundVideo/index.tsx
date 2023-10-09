export default function BackgroundVideo() {
  return (
    <video
      className="fixed top-0 left-0 w-[100vw] h-[100vh] opacity-30 object-cover"
      autoPlay
      muted
      loop
    >
      <source
        src="https://res.cloudinary.com/dua355asm/video/upload/v1696826499/Page_Background_Video_jbgjzy.mp4"
        type="video/mp4"
      />
    </video>
  );
}
