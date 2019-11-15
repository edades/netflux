import React from 'react';
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams()
  return (
    <div className="netflux__movie">
      <div className="netflux__movieContent">
        <div className="netflux__movieActions">
          <a href="#" className="netflux__movieActions--play">Play</a>
          <a href="#" className="netflux__movieActions--add">+</a>
        </div>
        <div className="netflux__movieInfo">
          <div className="netflux__movieInfoData">
            <span>PG</span>
            <span>2019</span>
            <span>2h 5m</span>
            <span>Sci-Fi and Fantasy</span>
          </div>
          <div className="netflux__movieInfoScreen">
            <span>4K Ultra HD</span>
            <span>VISION|ATMOS</span>
          </div>
          <div className="netflux__movieInfoResume">
            <span>
              Captain Marvel gets caught in the middle of a galactic war
              between two alien races.
            </span>
          </div>
        </div>
        <div className="netflux__movieOthers">
          <ul>
            <li>Extras</li>
            <li>Related</li>
            <li>Details</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Movie;