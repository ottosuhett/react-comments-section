import { useState } from 'react'
import "./reset.css"
import styles from "./App.module.scss"
import CommentForm from './components/Form/Form'
import Comments from './components/Comments/Comments'

function App() {
  const [comments, setComments] = useState(()=>{
    const storedComments = localStorage.getItem("comment")
    if (!storedComments || storedComments === "undefined") return []
    return JSON.parse(storedComments)
  })

  const handleFormSubmit = (name,comment,date) =>{
    addComment(name,comment,date)
  }

  const addComment =(name,comment,date)=>{
    const id = Math.floor(Math.random() * 10000)
    const newComment = {id,name,comment,date}
    setComments(state => {
      const newStage = [newComment,...state];
      localStorage.setItem("comment",JSON.stringify(newStage))
      return newStage
    })
  }

  return (
    <div className={styles.mainContainer}>
      <CommentForm onSubmit={handleFormSubmit}/>
      <h1 className={styles.title}>Comments</h1>
      { comments.length > 0 ?
        comments.map(comment =>(
          <div key={comment.id}>
            <Comments name={comment.name} comment={comment.comment} date={comment.date}/>
          </div>
        ))
        :<h1 className={styles.title}>No Comments</h1>
      }
      <p className={styles.copyright}>&copy; Developed by OttoSuhett</p>
    </div>
  )
}
export default App
