import classes from './TextureButton.module.css';

const TextureButton = () => {
    return <div className={classes.grid}>
        <button className={`${classes.texture} ${classes.brown}`} title='Brown'></button>
        <button className={`${classes.texture} ${classes.grey}`} title='Grey'></button>
        <button className={`${classes.texture} ${classes.white}`} title='White'></button>
        <button className={`${classes.texture} ${classes.orange}`} title='Orange'></button>
        <button className={`${classes.texture} ${classes.purple}`} title='Purple'></button>
    </div>
};

export default TextureButton;