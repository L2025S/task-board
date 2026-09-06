import type {TaskCardProps} from "../types/Task";



const TaskCard = ({id, title, description, assignee, category, priority}: TaskCardProps) => {
  if (id === undefined) {
    return (
      <article className="task-card">
       
        <p className="task-category">
          <strong>Category:</strong>{category}
        </p>

        <p className="task-title">
          <strong>Title:</strong>{title}
        </p>

        <p className="task-description">
          <strong>Description:</strong> {description}
        </p>

        <p className="task-responsible">
          <strong>Respoinsible:</strong> {assignee}
        </p>

        <p className="task-priority">
          <strong>Priority:</strong>{priority}
        </p>

        
      </article>
    );
  }

  return (
    <article className="task-card">
      <h3 className="task-title">{id}</h3>
     
      <p className="task-category">
        <strong>Category:</strong>{category}
      </p>

      <p className="task-title">
        <strong>Title:</strong>{title}
      </p>

      <p className="task-description">
        <strong>Description:</strong> {description}
      </p>

      <p className="task-responsible">
        <strong>Responsible:</strong>{assignee}
      </p>

      <p className="task-priority">
        <strong>Priority:</strong>{priority}
      </p>
     
    </article>
  );
};
export default TaskCard;
