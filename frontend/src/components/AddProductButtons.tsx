import classes from './AddProductButtons.module.css';


const AddProductButtons: React.FC<{}> = () => {
    return <div className={classes.buttons}>
        <button className={classes.action}>-</button>
        <button className={classes.quantity}>1</button>
        <button className={classes.action}>+</button>
        <button className={classes.add}>ADD PRODUCT</button>
    </div>
}

export default AddProductButtons;