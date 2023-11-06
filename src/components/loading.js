export default function loadingDelay(some, setSome, time) {
setTimeout(() => {setSome(!some)}, time);
}