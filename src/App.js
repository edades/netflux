import React from 'react';
import Slider from 'infinite-react-carousel';
import { slides, categories, recommended } from './mocks' 

const App = () =>
  <div className="netflux">
    <div className="netflux__slider">
      <Slider dots arrows={false} className="netflux__sliderBox">
        {slides.map(slide =>
          <div className="netflux__slider__item" key={slide.id}>
            <img src={slide.url} alt={slide.title} />
          </div>
        )}
      </Slider>
    </div>

    <div className="netflux__categories">
      {categories.map(category =>
        <div className="netflux__categories__item" key={category.id}>
          <img src={category.thumbnail} alt={category.name} />
        </div>
      )}
    </div>
    
    <div className="netflux__recommended">
      <h2>Recommended For You</h2>
      <div className="netflux__recommendedBox">
        {recommended.map(item =>
          <div className="netflux__recommended__item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        )}
      </div>
    </div>

    <div className="netflux__watching">
      <h2>Continue Watching</h2>
      <div className="netflux__watchingBox">
        {recommended.map(item =>
          <div className="netflux__watching__item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        )}
      </div>
    </div>
  </div>

export default App;
