import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;
const MotionH4 = motion.h4;
const MotionButton = motion.button;

function MainLoadingScreen({onContinue}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += 2;
      if (percent > 100) {
        clearInterval(interval);
        setLoadingComplete(true);
      } else {
        setProgress(percent);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const getDatesAround = () => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + i);
      const dayName = newDate.toLocaleDateString("en-US", { weekday: "long" });
      const dayNum = newDate.getDate();
      dates.push({ dayName, dayNum });
    }
    return dates;
  };

  const dates = getDatesAround();
  const todayIndex = 2;
  const dayItems = ["date-item1", "date-item2", "date-item3", "date-item4", "date-item5"];

  return (
    <div className="loading-screen-wrapper">
      <div className="loading-bg">
        <img src="/images/personascreen2.jpeg" alt="" decoding="async" fetchpriority="high" />
      </div>
      <div className="loading-ym">
        <h2 className="year">
          {currentDate.toLocaleString("id-ID", { year: "numeric", timeZone: "Asia/Jakarta" })} /
        </h2>
        <h2 className="month">
          {currentDate.toLocaleString("id-ID", { month: "2-digit", timeZone: "Asia/Jakarta" })}
        </h2>
      </div>
      <div className="loading-date">
        {dates.map((item, index) => (
          <MotionDiv
            key={index}
            className={dayItems[index]}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <h3 style={index === todayIndex ? { color: "red" } : {}}>{item.dayNum}</h3>
            <p>{item.dayName.toUpperCase()}</p>
          </MotionDiv>
        ))}
      </div>
      <div className="loading-bar">
        <div className="loading-subtitle">
          <h4 className="loading-title">Hanif's Portfolio</h4>
          <div className="loading-bar-item">
            <div className="bar-outline">
              <div
                className="bar-fill"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                }}
              ></div>
            </div>
            <h3 className="bar-percent">{progress}%</h3>
          </div>
          <AnimatePresence mode="wait">
            {!loadingComplete ? (
              <MotionH4
                key="loading-text"
                className="loading-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                Please Wait A Moment !
              </MotionH4>
            ) : (
              <MotionButton
                key="continue-button"
                className="loading-continue-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                onClick={onContinue}
              >
                Click Here To Continue
              </MotionButton>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default MainLoadingScreen;
