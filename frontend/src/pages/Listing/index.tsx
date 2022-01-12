import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";

function Listing() {
  return (
    <div>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
