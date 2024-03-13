import { useState } from "react";
import searchImages from "../data/imageApi";
import ImageList from "../components/image-search/ImageList";
import SearchBar from "../components/image-search/SearchBar";

const ImageSearchPage = () => {
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

export default ImageSearchPage;
