import React, { FC } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

interface CounterProps {
  time: string;
}

const Counter: FC<CounterProps> = ({ time }) => {
  return (
    <div className="flex items-center">
      <AccessAlarmIcon />
      <p className="min-w-[60px] text-xl font-semibold ml-2 text-white md:ml-1 md:min-w-[55px]">
        {time}
      </p>
    </div>
  );
};

export default Counter;
