/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((Response) => {
    console.warn("response", Response);
  });
}
