import React from "react";
import { useEffect, useState } from "react";
import TrackList from "../../components/tracklist/trackList.jsx";
import TrackListSkeleton from "../../components/skeletons/trackListSkeleton.jsx";
import getAllTracks from "../../components/API/getAllTracks.js";
import { store } from "../../store/store.js";

export const MainPage = () => {
  const [load, setLoad] = useState(true); // Состояние загрузки для скелетонов
  const [tracks, setTracks] = useState([]); // Состояние с треками для передачи дальше через props
  const [error, setError] = useState(null); // Состояние с ошибкой
  const [likes, setLikes] = useState({}); // Состояние с успешными обновлениями лайков

  // Загружаем все треки при рендере компонента
  useEffect(() => {
    getAllTracks()
      .then((data) => {
        setTracks(data);
        setLoad(false);
      })
      .catch((err) => {
        alert(err);
        setLoad(false);
        setError(err);
      });
  }, []);

  // Загружаем все треки при обновлении лайков
  useEffect(() => {
    getAllTracks()
      .then((data) => {
        setTracks(data);
        setLoad(false);
      })
      .catch((err) => {
        alert(err);
        setLoad(false);
        setError(err);
      });
  }, [likes]);

  // Подписываемся на состояние в store и кидаем likes в локальное состояние
  store.subscribe(() => {
    const actualState = store.getState();
    setLikes(actualState.likes);
  });

  return (
    <>
      {load ? (
        <TrackListSkeleton />
      ) : (
        <TrackList tracks={tracks} error={error} title="Треки" />
      )}
    </>
  );
};
