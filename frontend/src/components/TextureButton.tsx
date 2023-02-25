import classes from './TextureButton.module.css';

const TextureButton = () => {
    return <div className={classes.grid}>
        <button className={classes.texture} title='Brown'></button>
        <button className={classes.texture} title='Black'>
            {/* <img src='./models/wooden_table/textures/wooden_table_02_arm_4k.jpg' /> */}
        </button>
        <button className={classes.texture} title='Orange'></button>
        <button className={classes.texture} title='Purple'></button>
    </div>
};

export default TextureButton;