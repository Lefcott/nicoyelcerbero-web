import BackgroundVideo from "../BackgroundVideo";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <BackgroundVideo />
      <div className="fixed w-full h-full bottom-0 overflow-auto scroll-smooth">
        <Navbar />
        <div className="flex flex-col items-center pb-11">{children}</div>
      </div>
    </>
  );
}
