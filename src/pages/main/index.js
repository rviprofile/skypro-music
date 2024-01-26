import React from "react";
import { useEffect, useState } from "react";
import TrackList from "../../components/tracklist/trackList.jsx";
import TrackListSkeleton from "../../components/skeletons/trackListSkeleton.jsx";
import getAllTracks from "../../components/API/getAllTracks.js";
import { store } from "../../store/store.js";

export const MainPage = () => {
  // Загрузка всех треков из API
  const [load, setLoad] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState({})

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

  store.subscribe(() => {
    const actualState = store.getState();
    setLikes(actualState.likes)
  })

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
