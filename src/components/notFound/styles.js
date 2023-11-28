import styled from "styled-components";

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: StratosSkyeng;
`;

export const Tittle = styled.h1`
font-size: 160px;
font-style: normal;
font-weight: 400;
line-height: 168px;
margin-bottom: 3px;
`

export const Description = styled.p`
font-family: StratosSkyeng;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 40px;
display: flex;
margin-bottom: 19px;
`

export const Smile = styled.img`
width: 52px;
height: 52px;
flex-shrink: 0;
`

export const SmallDescription = styled(Description)`
font-family: StratosSkyeng;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
letter-spacing: -0.054px;
color: #4E4E4E;
text-align: center;
margin-bottom: 36px;
`
export const BackButton = styled.button`
color: #FFF;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.054px;
width: 278px;
height: 52px;
flex-shrink: 0;
border-radius: 6px;
background: var(--palette-purple-90, #580EA2);
border: 0;

&:hover {
    background: #3f007d;
  }

  &:active {
    background: var(--palette-purple-100, #271a58);
  }
`