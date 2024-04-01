import Spinner from "./Spinner";

const Loading = ({ state, children }) => {
  return <div className="w-full h-full">{state ? <Spinner /> : children}</div>;
};

export default Loading;
