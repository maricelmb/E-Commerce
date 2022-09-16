import { Link } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

// This component is the 5 category items (hats, jackets) in the homepage
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
        {/* <Link to={`${Shop\}` + title}>Shop Now</Link> */}
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
