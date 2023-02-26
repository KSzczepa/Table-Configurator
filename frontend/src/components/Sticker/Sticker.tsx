import classes from './Sticker.module.css';
import '../fontello/css/fontello.css';

const Sticker = () => {
    return (<div className={classes.header}>
        <h1>TabConfig</h1>
            <div className={`${classes['font-basket']}`}>
                <p>Shop Cart</p>
                <i className="icon-basket" style={{ fontSize: '32px'}} />
                {/* <i className="icon-basket" style={{ fontSize: '20px' , marginRight: '10px'}} /> */}
            </div>
    </div>);
};

export default Sticker;
