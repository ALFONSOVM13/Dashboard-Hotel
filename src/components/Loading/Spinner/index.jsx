import { useEffect, useState } from "react";

const Spinner = () => {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const cambio = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (loadingText.length < 10) {
            let newText = loadingText + ".";
            setLoadingText(newText);
          } else setLoadingText("Loading");
          resolve(true);
        }, 800);
      });
    };
    cambio();
  }, [loadingText]);
  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-full w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500 dark:decoration-slate-300 dark:border-slate-200"></div>
      <span className="font-bold dark:text-white">{loadingText}</span>
    </div>
  );
};

export default Spinner;
