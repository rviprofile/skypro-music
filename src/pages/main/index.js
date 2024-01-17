import React from "react";
import * as S from "../../styles.js";
import { useEffect, useState } from "react";
import AudioPlayer from "../../components/audioPlayer/audioPlayer.jsx";
import AudioPlayerSkeleton from "../../components/skeletons/audioPlayerSkeleton.jsx";
import NavMenu from "../../components/navMenu/navMenu.jsx";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import SidebarSkeleton from "../../components/skeletons/sidebarSkeleton.jsx";
import TrackList from "../../components/tracklist/trackList.jsx";
import TrackListSkeleton from "../../components/skeletons/trackListSkeleton.jsx";
import getAllTracks from "../../components/API/getAllTracks.js";

export const MainPage = () => {

  // Загрузка всех треков из API
  const [load, setLoad] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null)
  useEffect(() => {
    getAllTracks()
      .then((data) => {
        setTracks(data);
        setLoad(false);
      })
      .catch((err) => {
        alert(err)
        setLoad(false);
        setError(err)
      });
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          {load ? (
            <TrackListSkeleton />
          ) : (
            <TrackList tracks={tracks} error={error} title="Треки"/>
          )}
          {load ? <SidebarSkeleton /> : <Sidebar />}
        </S.Main>
        {/* {load ? (
          <AudioPlayerSkeleton />
        ) : (
          <AudioPlayer/>
        )} */}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
};
