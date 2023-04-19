/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signUp, upload])
    .then((values) => {
      const arr = [];
      values.forEach((item) => {
        if (item.status === 'fulfilled') {
          arr.push({ status: item.status, value: item.value });
        } else {
          arr.push({ status: item.status, value: `${item.reason}` });
        }
      });
      return arr;
    });
}
