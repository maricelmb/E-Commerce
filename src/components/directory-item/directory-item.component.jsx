import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

// This component is the 5 category items (hats, jackets) in the homepage
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
        {/* <Link to={`${Shop\}` + title}>Shop Now</Link> */}
      </div>
    </div>
  );
};

export default DirectoryItem;
