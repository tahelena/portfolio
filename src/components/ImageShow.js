import "../style/ImageShow.css";
const ImageShow = ({ image }) => {
  return <img alt={image.alt} src={image.urls.thumb}></img>;
};

export default ImageShow;
