import AddProductButtons from '../UI/AddProductButtons';
import ProductDimensionsDetails from '../ProductDimensionDetails/ProductDimensionsDetails';
import classes from './ProductSpecs.module.css';
import { useSelector } from 'react-redux';

const DUMMY_VALUES = [
    {
        texture: 'brown',
        prodCode: 'TAB-BR-K5',
        price: 199.99,
    },
    {
        texture: 'grey',
        prodCode: 'TAB-GR-K5',
        price: 210.99,
    },
    {
        texture: 'white',
        prodCode: 'TAB-WH-K5',
        price: 314.99,
    },
    {
        texture: 'orange',
        prodCode: 'TAB-OR-K5',
        price: 269.99,
    },
    {
        texture: 'purple',
        prodCode: 'TAB-PU-K5',
        price: 349.99,
    },
]

const ProductSpecsBox = () => {

    interface ProductState {
        product: {texture: string, itemsCounter: number}
    }

    const productSelector = (state: ProductState) => state.product.texture;

    const productVariant: string = useSelector(productSelector);


    const finded = DUMMY_VALUES.findIndex(val => val.texture === productVariant);
    const productCode = DUMMY_VALUES[finded].prodCode;
    const productPrice = DUMMY_VALUES[finded].price;


    return <div className={classes.box}>
        <h1 className={classes.title}>Amazing wooden table</h1>
        <p>Model: Katrina5</p>
        <p className={classes.price}>{productPrice + ' PLN'}</p>
        <AddProductButtons />
        <ProductDimensionsDetails code={productCode}/>
    </div>
}

export default ProductSpecsBox;