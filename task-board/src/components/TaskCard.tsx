
type TaskCardProps = {
    id?: number;
    title: string;
}

const TaskCard =({id,title}:TaskCardProps)=>{

    if (id === undefined){

    return (
        
        <article>
            <h3>Task: Bygga Task Board</h3>
            <p><strong>Kategori:</strong>Utveckling</p>
            <p><strong>Titel:</strong>{title}</p>
            <p><strong>Beskrivning:</strong> Create a simple component with hard code infomration.</p>
            <p><strong>Ansvarig:</strong>L.W.</p>
            <p><strong>Prioritet:</strong>Hög</p>
        </article>
        );
    };

    return(
        <article>
            <h3>Task: Bygga Task Board</h3>
            <p><strong>ID:</strong>{id}</p>
            <p><strong>Category:</strong>Utveckling</p>
            <p><strong>Title:</strong>{title}</p>
            <p><strong>Description:</strong> Create a simple component with hard code infomration.</p>
            <p><strong>Ansvarig:</strong>L.W.</p>
            <p><strong>Prioritet:</strong>Hög</p>
        </article>
    );
};
export default TaskCard;