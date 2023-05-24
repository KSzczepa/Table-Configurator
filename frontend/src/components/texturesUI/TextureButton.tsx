import classes from './TextureButton.module.css';


import Button from './Button';


const TextureButton = () => {

  

    return <div className={classes.grid}>
        <Button id='brown' className={`${classes.texture} ${classes.brown}`} title='Brown'></Button>
        <Button id='grey' className={`${classes.texture} ${classes.grey}`} title='Grey'></Button>
        <Button id='white' className={`${classes.texture} ${classes.white}`} title='White'></Button>
        <Button id='orange' className={`${classes.texture} ${classes.orange}`} title='Orange'></Button>
        <Button id='purple' className={`${classes.texture} ${classes.purple}`} title='Purple'></Button>
    </div>
};

export default TextureButton;