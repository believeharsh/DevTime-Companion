import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [markedDays, setMarkedDays] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  // Generate days for the current month
  const generateDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in the current month
    return Array.from({ length: daysInMonth }, (_, index) => index + 1); // [1, 2, 3, ..., daysInMonth]
  };

  const daysInMonth = generateDays();

 
  const handleRightClick = (e, day) => {
    e.preventDefault();
    setMarkedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  
  useEffect(() => {
    const now = new Date();
    const currentMonthNow = now.getMonth();

 
    if (currentMonthNow !== currentMonth) {
      setMarkedDays({});
      setCurrentMonth(currentMonthNow);
    }
  }, [currentMonth]);

  return (
    <div className="container mx-auto p-4">
  <div className="grid grid-cols-7 gap-1 justify-center">
    {daysInMonth.map(day => (
      <div
        key={day}
        className={`w-8 h-8 flex items-center justify-center rounded-full gap-1 cursor-pointer border
          ${markedDays[day] ? 'bg-green-500' : ''}`}
        onContextMenu={e => handleRightClick(e, day)}
        title={`Day ${day}`} // Tooltip showing the day
      >
        <span className="text-center text-xs">{}</span>
      </div>
    ))}
  </div>
</div>
  );
};

export default Calendar;