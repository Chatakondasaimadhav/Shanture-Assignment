import { useState } from 'react';

const useDateRange = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const updateRange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return { startDate, endDate, updateRange };
};

export default useDateRange;
