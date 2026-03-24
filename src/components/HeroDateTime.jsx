import { memo, useEffect, useState } from 'react';

const HeroDateTime = memo(() => {
  const [date, setDate] = useState(new Date());
  const [iconName, setIconName] = useState("sunny");

  useEffect(() => {
    // Update date immediately on mount
    setDate(new Date());
    
    // Set interval to update every minute
    const interval = setInterval(() => setDate(new Date()), 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = date.getHours();
    if (hour >= 5 && hour < 18){
      setIconName("sunny");
    } else {
      setIconName("ellipse");
    }
  }, [date]);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const weekday = date.toLocaleDateString("en-US", {weekday : "long"});

  return (
    <div className="hero-date">
      <h5 className="date-day">
        {day}
      </h5>
      <h5 className="date-slash">
        /
      </h5>
      <h5 className="date-month">
        {month}
      </h5>
      <h5 className="date-day-name">
        {weekday}
      </h5>
      <div className="date-sun">
      <ion-icon name={iconName}></ion-icon>
      </div>
    </div>
  );
});

export default HeroDateTime;
