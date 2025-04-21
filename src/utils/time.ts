export const getTotalMinute = (
  day: number,
  hour: number,
  minute: number
): number => {
  const sum = day * 24 * 60 + hour * 60 + minute;
  return sum;
};

//convert minutes to hour
export const minutesToHours = (minutes: number) => {
  const hour = Math.floor(Math.abs(minutes) / 60);
  const minute = Math.abs(minutes) - hour * 60;

  return [hour, minute];
};

// to check if task's time passed and change it's color to gray
export function beLateTodo(hour: number, minute: number, day: number) {
  const now = new Date();
  const hourNow = now.getHours();
  const minuteNow = now.getMinutes();
  const dayNow = now.getDay() + 1;
  const allMinuteTodo = day * 24 * 60 + hour * 60 + minute;
  const allMinuteNow = dayNow * 24 * 60 + hourNow * 60 + minuteNow;

  const minus = allMinuteTodo - allMinuteNow;

  if (minus < 0) {
    return true;
  } else {
    return false;
  }
}


//  conver to switch case 
export const convertNumberToDay = (num: number) => { 
  if (num === 0) {
      return 'Saturday';
  } else if (num === 1) {
      return 'Sunday';
  } else if (num === 2) {
      return 'Monday';
  } else if (num === 3) {
      return 'Tuesday';
  } else if (num === 4) {
      return 'Wednesday';
  } else if (num === 5) {
      return 'Thursday';
  } else if (num === 6) {
      return 'Friday';
  } else {
      return 'عدد نامعتبر است';
  }
};


export const currentDay = ()  => { 
  const today = new Date();
  const rightTime = today.getDay() + 1
  if(rightTime===7){
    return 0
  }else{
    return rightTime
  }
}

export const remainTimeForDoingTask = (selectedDay:number) => {
  const now = new Date();
  const hourNow = now.getHours();
  const minuteNow = now.getMinutes(); 
  const secondNow = now.getSeconds(); 
  const day =  selectedDay - currentDay()
  const totalSecond = ((hourNow*60*60) + minuteNow * 60 + secondNow)
  const remainSecond = 86400 - totalSecond
  

  const hours = Math.floor(remainSecond / 3600) + (day*24) // هر ساعت = 3600 ثانیه
  const minutes = Math.floor((remainSecond % 3600) / 60); // باقی‌مانده رو تبدیل به دقیقه
  const seconds = remainSecond % 60; // باقی‌مانده‌ی نهایی ثانیه‌ها
  
  return [hours , minutes , seconds]
  



}
