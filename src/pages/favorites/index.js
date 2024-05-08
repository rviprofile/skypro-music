import React from "react";
import { useState, useEffect } from "react";
import getAllFavorites from "../../components/API/getAllFavorites.js";
import TrackList from "../../components/tracklist/trackList.jsx";
import TrackListSkeleton from "../../components/skeletons/trackListSkeleton.jsx";
import { store } from "../../store/store.js";

export const FavoritesPage = () => {
  const [load, setLoad] = useState(true); // Состояние загрузки для скелетонов
  const [tracks, setTracks] = useState([]); // Состояние с треками для передачи дальше через props
  const [error, setError] = useState(null); // Состояние с ошибкой
  const [likes, setLikes] = useState({}); // Состояние с успешными обновлениями лайков

  // Загружаем лайкнутые треки при рендере компонента
  useEffect(() => {
    getAllFavorites()
      .then((data) => {
        setTracks(data);
        setLoad(false);
        if (data.code === "bad_authorization_header") {
          console.log('object');
          return getAllFavorites().then((data) => {
            setTracks(data);
            setLoad(false);
          })
        }
      })
      .catch((err) => {
        alert(err);
        setLoad(false);
        setError(err);
      });
  }, []);

  // Загружаем лайкнутые треки при обновлении лайков
  useEffect(() => {
    getAllFavorites()
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
      {load || Array.isArray(tracks) === false ? (
        <TrackListSkeleton />
      ) : (
        <TrackList tracks={tracks} error={error} title="Мои треки" />
      )}
    </>
  );
};
