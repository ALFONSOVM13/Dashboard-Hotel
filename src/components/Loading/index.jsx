import Spinner from "./Spinner";

const Loading = ({ state, children, fullscreen = false }) => {
  return (
    <div
      className={
        fullscreen ? "top-0 left-0 absolute w-screen h-screen" : "w-full h-full"
      }
    >
      {state ? <Spinner /> : children}
    </div>
  );
};

export default Loading;
