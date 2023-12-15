export default function duration(interval) {
    let mm = Math.floor(interval / 60);
    let ss = (interval -= mm*60);
    if (ss < 10) {
        ss = `0${ss}`
    }
    return `${mm}:${ss}`
}