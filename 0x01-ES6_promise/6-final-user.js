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
      let value = '';
      for (const item in values) {
        const status = item.state;
        if (status === 'rejected') {
          value = item.reason;
        } else {
          value = item.value;
        }
        arr.push({ status, value });
      }
      return arr;
    });
}
