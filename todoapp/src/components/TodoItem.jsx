import styles from "./todoitem.module.css";
export default function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        console.log("Delete Button Clicked for item!", item);
        setTodos(todos.filter((todo)=>todo !== item));        
    }
    function handleClick(name){
        setTodos(todos.map((todo)=>
            todo.name === name?{...todo,done:!todo.done} : todo
        ));
    }
    const claName = item.done ? styles.completed : "";
    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={claName} onClick={() => handleClick(item.name)}>{item.name}</span>
            
            <span>
                <button onClick={() => handleDelete(item)} className={styles.deleteButton}>X</button>
            </span>
        </div>
        
        <hr className={styles.line} />
    </div>
}