import styles from "./Comments.module.scss"
import PropTypes from "prop-types"

Comments.propType = {
    name: PropTypes.string,
    comment:PropTypes.string,
    date:PropTypes.string
}

export default function Comments({name,comment,date}){
    return(
       <>
            <div className={styles.commentContainer}>
                <p className={styles.name}>{name.trim()}</p>
                <div className={styles.dateContainer}>
                    <p>{date}</p>
                </div>
                <p className={styles.comment}>"{comment.trim()}"</p>
            </div>
       </> 
    )
}