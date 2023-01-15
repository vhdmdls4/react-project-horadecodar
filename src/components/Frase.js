import styles from './Frase.module.css'

export default function Frase (props) {
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>{props.texto}</p>
        </div>
    )
}