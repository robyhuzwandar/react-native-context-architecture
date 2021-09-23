import scheduleTodayJson from '../../assets/mock/schedule_today.json';
import nextScheduleJson from '../../assets/mock/next_schedule.json';

export const getScheduleToday = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      return resolve(scheduleTodayJson);
    }, 3000);
  });
};
export const getNextSchedule = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      return resolve(nextScheduleJson);
    }, 3000);
  });
};
