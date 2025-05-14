import { useEffect, useRef } from "react";

function App() {
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
      <h1>Savvy</h1>
      <button onClick={handleTimerStart}>Start</button>
    </>
  );
}

export default App;
