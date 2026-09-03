type TaskCardProps = {
  id?: number;
  title: string;
  description: string;
  assignee: string;
};

const TaskCard = ({ id, title, description, assignee }: TaskCardProps) => {
  if (id === undefined) {
    return (
      <article>
        <h3>Task: Build Task Board</h3>
        <p>
          <strong>Category:</strong>Developing
        </p>

        <p>
          <strong>Title:</strong>{title}
        </p>

        <p>
          <strong>Description:</strong> {description}
        </p>

        <p>
          <strong>Respoinsible:</strong> {assignee}
        </p>

        <p>
          <strong>Priority:</strong>High
        </p>
      </article>
    );
  }

  return (
    <article>
      <h3>Task: Build Task Board {id}</h3>
     
      <p>
        <strong>Category:</strong>Developing
      </p>

      <p>
        <strong>Title:</strong>{title}
      </p>

      <p>
        <strong>Description:</strong> {description}
      </p>

      <p>
        <strong>Responsible:</strong>{assignee}
      </p>

      <p>
        <strong>Priority:</strong>High
      </p>
    </article>
  );
};
export default TaskCard;
