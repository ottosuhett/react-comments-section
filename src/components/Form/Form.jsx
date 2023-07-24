import styles from "./Form.module.scss"
import { useState } from "react"
import PropType from "prop-types"
import { format } from "date-fns"

CommentForm.PropType ={
    onSubmit: PropType.object
}
export default function CommentForm({onSubmit}){
    const [name, setname ] = useState("")
    const [ comment, setComment ] = useState("")
    const currentDate = new Date()
    
    const date = format(currentDate,"dd/LL/yyyy hh:mm:ss b")

    const handleSubmit = (ev)=>{
        ev.preventDefault();
        onSubmit(name,comment,date)
        setname("")
        setComment("")
    }
    return(
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Comments Section</h1>
                <label 
                    htmlFor="name" 
                    className={styles.labelText}
                >
                    Name
                </label>
                <input 
                    type="name" 
                    name="name" 
                    id="name" 
                    value={name}
                    onChange={(ev)=> setname(ev.target.value)}
                    placeholder="Your name"
                    className={styles.formInput}
                    autoComplete= "off"
                    required
                />
                <label 
                    htmlFor="comment" 
                    className={styles.labelText}
                >
                    Comment
                </label>
                <textarea 
                    name="comment" 
                    id="comment" 
                    cols="10" 
                    rows="10"
                    value={comment}
                    onChange={(ev)=> setComment(ev.target.value)}
                    maxLength={50}
                    placeholder="Max. 50 characters"
                    className={styles.formInput}
                    autoComplete= "off"
                    required
                >
                </textarea>
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </>
    )
}
