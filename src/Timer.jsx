import { useEffect, useState } from "react";
import useAppContext from "./AppContext";

function Timer() {
  const { time, setTime } = useAppContext();
  const [minutes, setMinutes] = useState(Math.floor(time / 60));
  const [seconds, setSeconds] = useState(time % 60);
  useEffect(() => {
    const id = setInterval(() => {
      setMinutes(Math.floor(time / 60));
      setSeconds(time % 60);
      if (time > 0) setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [time, setTime]);

  return (
    <div className="w-fit text-center">
      <h1
        className={`font-semibold text-xl text-white  text-center  rounded-full  px-3 py-2   ${
          time < 10 ? "bg-red-600" : "bg-purple-600"
        }`}
      >
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
}

export default Timer;
