import { useEffect, useRef } from "react";

export function Dashboard() {
  const timer = useRef<number>(null);

  function handleTimerStart() {
    console.log("start");

    const timerId = setTimeout(handleTimerEnd, 1000);

    timer.current = timerId;
  }

  function handleTimerEnd() {
    console.log("done");
  }

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  });

  return (
    <>
      <p>Dashboard</p>
      <button onClick={handleTimerStart}>Start</button>
    </>
  );
}
