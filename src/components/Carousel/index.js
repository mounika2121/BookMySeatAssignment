import './index.css'
import {Carousel} from 'react-responsive-carousel'

const HomeCarousel = () => (
  <Carousel showArrows autoPlay>
    <div>
      <img
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697890409/salaar_image_mrtbom.jpg"
        alt="img1"
      />
    </div>
    <div>
      <img
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697892594/bhagavath_fsnhdq.avif"
        alt="img2"
      />
    </div>
    <div>
      <img
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1697892901/Poster-of-Tiger-Nageswara-Rao_thxssk.avif"
        alt="img3"
      />
    </div>
  </Carousel>
)

export default HomeCarousel
