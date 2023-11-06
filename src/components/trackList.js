import Filter from "./filter";
import PlaylistContent from "./playlistContent";
import PlaylistTitle from "./playlistTitle";
import Search from "./search";

export default function TrackList() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <PlaylistTitle />
        <PlaylistContent />
      </div>
    </div>
  );
}
