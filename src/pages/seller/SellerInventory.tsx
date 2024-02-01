import ProductFilter from "../../components/product/ProductFilter";
import SellerProductTable from "../../components/product/SellerProductTable";

const SellerInventory = () => {
  return (
    <div>
      <ProductFilter />
      <div style={{ margin: "60px 0px" }}>
        <SellerProductTable />
      </div>
    </div>
  );
};

export default SellerInventory;
