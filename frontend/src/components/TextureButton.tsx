import classes from './TextureButton.module.css';

const TextureButton = () => {
    return <div className={classes.grid}>
        <button id='brown' className={`${classes.texture} ${classes.brown}`} title='Brown'></button>
        <button id='grey' className={`${classes.texture} ${classes.grey}`} title='Grey'></button>
        <button id='white' className={`${classes.texture} ${classes.white}`} title='White'></button>
        <button id='orange' className={`${classes.texture} ${classes.orange}`} title='Orange'></button>
        <button id='purple' className={`${classes.texture} ${classes.purple}`} title='Purple'></button>
    </div>
};

export default TextureButton;