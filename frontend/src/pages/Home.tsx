import Hero from "@/components/common/Hero";
import BusinessList from "@/components/business/BusinessList";
import CategoryList from "@/components/category/CategoryList";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryList />
      <h2 className={styles.title}>Popular businesses</h2>
      <BusinessList />
    </>
  );
};

export default Home;
