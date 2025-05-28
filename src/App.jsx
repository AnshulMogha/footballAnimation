import "./App.css";
import InitialLoader from "./components/InitialLoader";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen ? (
        <InitialLoader isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <>
          <div className="h-screen w-screen text-5xl bg-black flex justify-center items-center text-white ">
            CAN U CODE
          </div>
        </>
      )}
    </div>
  );
}

export default App;
