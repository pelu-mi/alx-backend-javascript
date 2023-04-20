export default function loadBalancer(chinaDownload, USDownload) {
  // Using Promise.race()
  return Promise.race([chinaDownload, USDownload]).then((value) => value);
}
