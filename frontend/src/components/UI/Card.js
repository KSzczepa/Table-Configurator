import classes from './Card.module.css'

const Card = (props) => {
    return <div className={classes.content}>
        {props.children}
    </div>
}

export default Card;