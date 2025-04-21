import { Todo as TodoType } from "../Types/types";

export function canAddNewTask(tasks: TodoType[], newTask: TodoType): boolean {
  const newStart = newTask.hourStart * 60 + newTask.minuteStart; // تبدیل ساعت و دقیقه به دقیقه
  const newEnd = newTask.hourEnd * 60 + newTask.minuteEnd;

  for (const task of tasks) {
    const taskStart = task.hourStart * 60 + task.minuteStart;
    const taskEnd = task.hourEnd * 60 + task.minuteEnd;

    if (newStart < taskEnd && newEnd > taskStart) {
      return false;
    }
  }

  return true; // whitout time overlap
}




// Comparison between the end time and the start time.
export const isEndTimeGreater = (
  hourStart: number,
  hourEnd: number,
  minuteStart: number,
  minuteEnd: number
): boolean | undefined => {
  if (hourEnd > hourStart) {
    return true;
  } else if (hourEnd === hourStart) {
    if (minuteEnd > minuteStart) {
      return true;
    }
  }
};