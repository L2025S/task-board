
type TaskCardProps = {
    id?: number;
    title: string;
    description: string;
}

const TaskCard =({id,title, description}:TaskCardProps)=>{

    if (id === undefined){

    return (
        
        <article>
            <h3>Task: Build Task Board</h3>
            <p><strong>Category:</strong>Developing</p>
            <p><strong>Title:</strong>{title}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Respoinsible:</strong>L.W.</p>
            <p><strong>Priority:</strong>High</p>
        </article>
        );
    };

    return(
        <article>
            <h3>Task: Build Task Board</h3>
            <p><strong>ID:</strong>{id}</p>
            <p><strong>Category:</strong>Developing</p>
            <p><strong>Title:</strong>{title}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Responsible:</strong>L.W.</p>
            <p><strong>Priority:</strong>High</p>
        </article>
    );
};
export default TaskCard;