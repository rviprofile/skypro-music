import React from "react";
import { useState, useEffect } from "react";
import getAllFavorites from "../../components/API/getAllFavorites.js";
import TrackList from "../../components/tracklist/trackList.jsx";
import TrackListSkeleton from "../../components/skeletons/trackListSkeleton.jsx";
import { store } from "../../store/store.js";

export const FavoritesPage = () => {
  // Загрузка всех треков из API
  const [load, setLoad] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
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
  }, []);

  store.subscribe(() => {
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
  });
  
  return (
    <>
      {load ? (
        <TrackListSkeleton />
      ) : (
        <TrackList tracks={tracks} error={error} title="Мои треки" />
      )}
    </>
  );
};
