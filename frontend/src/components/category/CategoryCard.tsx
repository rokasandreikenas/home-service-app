import { useNavigate, generatePath, useParams } from "react-router-dom";
import classNames from "classnames";
import { ROUTES } from "@/router/consts";
import UrlIcon from "../common/UrlIcon";
import { Category } from "./types";
import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard = ({ category, className }: CategoryCardProps) => {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <div
      className={classNames(
        styles.card,
        activeCategory === name && styles.active,
        className
      )}
      onClick={() => navigate(categoryPath)}
    >
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
