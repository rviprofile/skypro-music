import * as S from "./styels.js"

export default function BarPlayerProgress({duration_time}) {
    const duration = duration_time;
    return (
    <S.BarPlayerProgress
    type="range"
    min={0}
    max={duration}
    step={0.01}
    ></S.BarPlayerProgress>
    )
}