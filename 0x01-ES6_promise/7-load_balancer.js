export default function loadBalancer(chinaDownload, USDownload) {
  // Using Promise.any()
  return Promise.any([chinaDownload, USDownload]);
}
