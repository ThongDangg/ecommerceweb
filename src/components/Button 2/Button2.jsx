import styles from './styles.module.scss'

function Button2({content}) {
    const {btnn} = styles;
    return <button className={btnn}>{content}</button>
}

export default Button2;