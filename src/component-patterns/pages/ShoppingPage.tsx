// import  { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";

const product = {
  id: '1',
  title: 'coffe'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} >
          {/* <> */}
          {/* <ProductImage /> */}
          {/* <ProductTitle title="" /> */}

          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />

          {/* </> */}
        </ProductCard>

        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle title="test" />
          <ProductButtons />

        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage;