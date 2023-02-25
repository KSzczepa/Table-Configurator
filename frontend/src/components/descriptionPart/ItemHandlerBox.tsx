import AddProductButtons from './AddProductButtons';
import Details from './Details';
import classes from './ItemHandlerBox.module.css';

const ItemHandlerBox = () => {
    return <div className={classes.box}>
        <h1 className={classes.title}>Amazing wooden table</h1>
        <p>Model: Katrina5</p>
        <p className={classes.price}>199,99 PLN</p>
        <AddProductButtons />
        <Details code='TAB-BR-K5'/>
{/*         
        <AddProductButtons value='+'/> */}
    </div>
}

export default ItemHandlerBox;