const ImageShow = ({ image }) => {
  return <img className="w-auto" alt={image.alt} src={image.urls.thumb}></img>;
};

export default ImageShow;
