import Filter from "../filter/filter";
import PlaylistTitle from "../playlistTitle";
import Search from "../search/search";

export default function TrackListSkeleton() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <PlaylistTitle />
        <div className="content__playlist playlist">
          <div className="playlist__item">
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
