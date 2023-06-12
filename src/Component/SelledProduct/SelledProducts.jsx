import { useEffect, useState } from "react";
import CategoryCard from "../../Pages/Home/CategoryCard";

const SelledProducts = () => {
  const [categorys, setCatetgorys] = useState([]);

  useEffect(() => {
    fetch(
      "https://ph-resale-mart-server-sh-mihad.vercel.app/product-categories"
    )
      .then((res) => res.json())
      .then((data) => setCatetgorys(data));
  }, []);

  return (
    <div>
      Top Selled Products
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 w-4/5 mx-auto">
        {categorys?.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default SelledProducts;
