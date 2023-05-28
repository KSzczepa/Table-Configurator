import AddProductButtons from '../UI/AddProductButtons';
import ProductDimensionsDetails from '../ProductDimensionDetails/ProductDimensionsDetails';
import classes from './ProductSpecs.module.css';
import { useSelector } from 'react-redux';
import { getData } from '../../../shared/getDataHandler';
import { useState, useEffect, Fragment } from 'react';

type productSpecification = {
    texture: string,
    prodCode: string,
    price: number
}

const ProductSpecsBox = () => {

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [productDetails, setProductDetails] = useState({});
    const [productCode, setProductCode] = useState('');
    const [productPrice, setProducPrice] = useState(0);

    interface ProductState {
        product: { texture: string, itemsCounter: number }
    }

    const productSelector = (state: ProductState) => state.product.texture;

    const productVariant: string = useSelector(productSelector);

    const getProductsfromDB = async () => {
        const response = await getData('https://tabletweak-default-rtdb.firebaseio.com/products.json');
        setProductDetails(response);
        return response;
    }

    const setCurrentProductDescriptionVisible = () => {

        const values = Object.values(productDetails) as productSpecification[];
        console.log(values);
        const finded = values.findIndex(val => val.texture === productVariant);
        setProductCode(values[finded].prodCode);
        setProducPrice(values[finded].price);
    }


    useEffect(() => {
        if (Object.entries(productDetails).length === 0)
            getProductsfromDB();
        else {
            if (!isDataLoaded)
                setIsDataLoaded(true);
            setCurrentProductDescriptionVisible();            
        }
    }, [productDetails, productVariant]);


    return <div className={classes.box}>
        {isDataLoaded ? <Fragment>
            <h1 className={classes.title}>Amazing wooden table</h1>
            <p>Model: Katrina5</p>
            <p className={classes.price}>{productPrice + ' PLN'}</p>
            <AddProductButtons />
            <ProductDimensionsDetails code={productCode} />
        </Fragment> : ''}

    </div>
}

export default ProductSpecsBox;