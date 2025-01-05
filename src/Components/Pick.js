import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import { FaCalendarAlt } from 'react-icons/fa';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './App.css';

const DateRangeComp = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    const hideOnEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const hideOnClickOutside = (e) => {
      if (refOne.current && !refOne.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  return (
    <div className="calendarWrap">
      <div className='calendar-icon'><FaCalendarAlt /></div>
      <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox input-styles"
        onClick={() => setOpen(open => !open)}
      />
      <div ref={refOne}>
        {open && 
          <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        }
      </div>
    </div>
  );
};

export default DateRangeComp;
