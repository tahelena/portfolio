import ImageShow from "./ImageShow";
import "../style/ImageList.css";

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image, idx) => (
        <ImageShow image={image} key={idx} />
      ))}
    </div>
  );
};

export default ImageList;
