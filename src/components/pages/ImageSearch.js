import { useState } from "react";
import searchImages from "../../api";
import ImageList from "../image-search/ImageList";
import SearchBar from "../image-search/SearchBar";

const ImageSearch = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default ImageSearch;
