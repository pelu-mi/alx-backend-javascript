export default function loadBalancer(chinaDownload, USDownload) {
  // Using Promise.any()
  return Promise.race([chinaDownload, USDownload]).then((value) => value);
}
