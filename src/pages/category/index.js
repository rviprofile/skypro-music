/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import TrackList from "../../components/tracklist/trackList.jsx";
import TrackListSkeleton from "../../components/skeletons/trackListSkeleton.jsx";
import getSelection from "../../components/API/getSelection.js";
import { store } from "../../store/store.js";

export const CategoryPage = () => {
  const [load, setLoad] = useState(true); // Состояние загрузки для скелетонов
  const [tracks, setTracks] = useState([]); // Состояние с треками для передачи дальше через props
  const [error, setError] = useState(null); // Состояние с ошибкой
  const [likes, setLikes] = useState({}); // Состояние с успешными обновлениями лайков

  // Получаем id из URL адреса для запроса к API
  const id = window.location.pathname.slice(-1);

  const [updateCategory, setUpdateCategory] = useState()

  // Загружаем плейлист по id при рендере компонента
  useEffect(() => {
    getSelection(id)
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

  // Загружаем плейлист по id при обновлении лайков
  useEffect(() => {
    getSelection(id)
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

  useEffect(() => {
    getSelection(id)
      .then((data) => {
        setTracks(data);
        setLoad(false);
      })
      .catch((err) => {
        alert(err);
        setLoad(false);
        setError(err);
      });
  }, [updateCategory]);

  store.subscribe(() => {
    const actualState = store.getState();
    setLikes(actualState.likes);
    setUpdateCategory(actualState.activeCategory.actualCategory)
  });

  return (
    <>
      {load ? (
        <TrackListSkeleton />
      ) : (
        <TrackList tracks={tracks.items} error={error} title={tracks.name} />
      )}
    </>
  );
};
