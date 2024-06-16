import CategoryCard from "./CategoryCard";
import { useCategories } from "./hooks";
import styles from "./VerticalCategoryList.module.scss";

const VerticalCategoryList = () => {
  const { data: categories } = useCategories();

  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories?.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default VerticalCategoryList;
