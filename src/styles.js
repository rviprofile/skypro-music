import styled, { createGlobalStyle } from "styled-components";

export const Btn = () => {
  return (`
    &:hover {
      border-color: #d9b6ff;
      color: #d9b6ff;
      cursor: pointer;
    }
    
    &:hover svg {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
    
    &:active {
      border-color: #ad61ff;
      color: #ad61ff;
      cursor: pointer;
    }
    
    &:active svg {
      fill: transparent;
      stroke: #ffffff;
      cursor: pointer;
    }
    
    &:active .track-play__like-svg,
    &:active .track-play__dislike-svg {
      fill: #696969;
      stroke: #ffffff;
      cursor: pointer;
    }

    &__hover {
      border-color: #d9b6ff;
      color: #d9b6ff;
      cursor: pointer;
    }
    `
  );
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

`


export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;
export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;
export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* -ms-flex-wrap: wrap; */
  /* flex-wrap: wrap; */
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const EasyBackground = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background: rgba(0, 0, 0, 0.85);
align-items: center;
justify-content: center;`