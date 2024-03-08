import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, idx) => (
        <ImageShow image={image} key={idx} />
      ))}
    </div>
  );
};

export default ImageList;
