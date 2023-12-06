import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// export const ProductImage = ({ img = '' }) => {

//     const { product } = useContext( ProductContext );
//     let imgToShow : string;

//     if (img) {
//         imgToShow = img;
//     } else if (product.img) {
//         imgToShow = product.img;
//     } else {
//         imgToShow = noImage;
//     }


//     return (
//         // <img className={styles.productImg} src={img ? img : product.img ? product.img :  noImage} alt="Product" />
//         <img className={styles.productImg} src={imgToShow} alt="Product" />
//     )
// }

// export const ProductTitle = ({ title }: { title?: string }) => {

//     const { product } = useContext( ProductContext );
    
//     return (
//         <span className={styles.productDescription}>
//             {title ? title : product.title}
//         </span>
//     )
// }


// interface ProductButtonsProps {
//     increaseBy: (value: number) => void,
//     counter: number
// }

// export const ProductButtons = () => {

//     const { increaseBy, counter } = useContext( ProductContext );

//     return (
//         <div className={styles.buttonsContainer}>
//             <button className={styles.buttonMinus}
//                 onClick={() => increaseBy(-1)}>-</button>
//             <div className={styles.countLabel}> {counter} </div>
//             <button className={styles.buttonAdd}
//                 onClick={() => increaseBy(+1)}>+</button>
//         </div>
//     )
// }

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>



            <div className={styles.productCard}>
                {/* <img className={styles.productImg} src='./coffee-mug.png' alt="Coffe" /> */}
                {/* <img className={styles.productImg} src={product.img ? product.img : noImage} alt="Coffe" /> */}
                {/* <ProductImage img={product.img} /> */}

                {/* <ProductTitle title={product.title} /> */}
                {/* <span className={styles.productDescription}>
                {product.title}
            </span> */}
                {/* <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}>-</button>
                <div className={styles.countLabel}> {counter} </div>
                <button className={styles.buttonAdd}
                    onClick={() => increaseBy(+1)}>+</button>
            </div> */}

                {/* <ProductButtons increaseBy={increaseBy} counter={counter} /> */}

                {children}
            </div>

        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

// export default ProductCard;