// import scheduleTodayJson from '../../assets/mock/schedule_today.json';
const scheduleTodayJson = require('../../assets/mock/schedule_today.json');

export const getScheduleToday = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('JSON', scheduleTodayJson);
      return resolve(scheduleTodayJson);
    }, 3000);
  });
};
