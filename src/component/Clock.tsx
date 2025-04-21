import{ useEffect, useState } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US'); // می‌تونی en-US هم بزنی
  return (
    <p className='text-[3rem] lg:text-[2.4rem] sm:text-[1.2rem] mt-0 pt-0' style={{ fontFamily: 'monospace' }}>
      {formattedTime.slice(0 ,20)}
    </p>
  );
}

export default LiveClock;
