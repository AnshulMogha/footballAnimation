import footballImg from "../assets/images/footballImg2.png";
import { GiArrowCursor } from "react-icons/gi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const InitialLoader = function ({ setIsOpen }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleBallExitComplete = () => {
    setIsOpen(false);
  };

  return (
    <div className="main-initial-loader-container ">
      <motion.div
        className="initial-loader-container overflow-hidden fixed top-0 left-0 right-0 bottom-0 z-20 bg-gray-950 flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="loader-content-box">
          <div className="football-img relative flex justify-center w-32 pb-3">
            <motion.img
              src={footballImg}
              alt="football"
              className="h-full w-full"
              animate={
                clicked
                  ? { y: 1000, rotate: 0 }
                  : { rotate: 360, y: [-100, -10, -100] }
              }
              transition={
                clicked
                  ? { duration: 0.5, ease: "easeIn" }
                  : {
                      rotate: {
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      },
                      y: {
                        repeat: Infinity,
                        times: [0, 0.2, 0.5],
                        duration: 1,
                        ease: "linear",
                      },
                    }
              }
              onAnimationComplete={() => {
                console.log("animation");
                if (clicked) {
                  handleBallExitComplete();
                }
              }}
            />

            {!clicked && (
              <motion.svg
                width="120"
                height="30"
                viewBox="0 0 120 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-2 left-1/2 -translate-x-1/2 -z-10"
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5],
                }}
              >
                <ellipse
                  cx="60"
                  cy="15"
                  rx="40"
                  ry="4"
                  fill="white"
                  fillOpacity="0.6"
                />
              </motion.svg>
            )}
          </div>

          {!clicked && (
            <div className="click-message mt-5 text-white text-lg flex flex-col space-y-1 justify-center items-center">
              <p>Click to Start</p>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              >
                <GiArrowCursor />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
      <div
        className="intial-loader-wrapper absolute top-0 left-0 right-0 bottom-0 z-30"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default InitialLoader;
