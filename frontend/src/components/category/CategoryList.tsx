import CategoryCard from "./CategoryCard";
import { useCategories } from "./hooks";
import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  const { data: categories } = useCategories();

  return (
    <div className={styles.container}>
      {categories?.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default CategoryList;
