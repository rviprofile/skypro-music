import * as S from "./styles";
import { Link } from "react-router-dom";

export default function NotFoundError() {
  return (
    <S.BackGround>
      <S.Tittle>404</S.Tittle>
      <S.Description>
        Страница не найдена{" "}
        <S.Smile src="img/smile_crying.png" alt="smile-crying"></S.Smile>
      </S.Description>
      <S.SmallDescription>
        Возможно, она была удалена<br></br> или перенесена на другой адрес
      </S.SmallDescription>
      <Link to="/"><S.BackButton>Вернуться на главную</S.BackButton></Link>
    </S.BackGround>
  );
}
