import { deflate } from 'zlib';
import classes from './Details.module.css';

const Details: React.FC<{code: string}> = (props) => {
    return <div className={classes.main}>
        <div className={classes.dark}>
            <p className={classes.name}>Width</p>
            <p className={classes.number}>120</p>
        </div>
        <div className={classes.light}>
            <p className={classes.name}>Height</p>
            <p className={classes.number}>85</p>
        </div>
        <div className={classes.dark}>
            <p className={classes.name}>Depth</p>
            <p className={classes.number}>60</p>
        </div>
        <div className={classes.light}>
            <p className={classes.name}>Product code</p>
            <p className={classes.number}>{props.code}</p>
        </div>
    </div>
}

export default Details;