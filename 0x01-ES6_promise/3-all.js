/* eslint-disable prefer-destructuring */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const body = values[0].body;
      const first = values[1].firstName;
      const last = values[1].lastName;
      console.log(`${body} ${first} ${last}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
