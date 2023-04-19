export default function uploadPhoto(filename) {
  const myPromise = new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  // Return Promise
  return myPromise;
}
