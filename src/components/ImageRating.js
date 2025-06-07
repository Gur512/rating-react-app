import StarRating from './StartRating';

function ImageRating(props) {
  return (
    <div className="feed-container">
      {props.images.map((img, index) => (
        <div className="feed-item" key={index}>
            <StarRating />
            <img src={img} alt={`Item ${index}`} className="feed-image" />
        </div>
      ))}
    </div>
  );
}

export default ImageRating;
