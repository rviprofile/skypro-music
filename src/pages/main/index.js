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

  store.subscribe(() => {
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
