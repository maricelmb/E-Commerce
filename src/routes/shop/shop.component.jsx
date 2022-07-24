import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { Fragment } from "react/cjs/react.production.min";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((category) => (
              <ProductCard key={category.id} product={category} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>  
  );
};

export default Shop;
