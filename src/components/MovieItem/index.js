import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup modal trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
              className="close-button"
            >
              <IoMdClose size={20} />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls width="100%" height={300} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
