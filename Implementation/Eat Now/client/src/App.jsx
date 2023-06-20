import React, { useState, useEffect } from "react";
import "./App.css";
import OnBoard from "./components/OnBoard";
import OnBoarding from "./pages/OnBoarding";
const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Set loaded to true after 5-second delay
      setLoaded(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!loaded) {
    // Render loading screen while component is loading
    return <OnBoard />;
  }
  return (
    <>
      <div className="font min-h-[100vh]">
        <OnBoarding />
      </div>
    </>
  );
};

export default App;
