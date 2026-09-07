import type {TaskCardProps} from "../types/Task";

const priorityColors = {
  High:"text-red-600 bg-red-100",
  Medium:"text-yellow-600 bg-yellow-100",
  Low:"text-green-600 bg-green-100",
};

const categoryColors= {
  Frontend: "bg-blue-100 text-blue-700",
  Backend: "bg-purple-100 text-purple-700",
  Test: "bg-green-100 text-green-700",
  Design: "bg-pink-100 text-pink-700",
  API: "bg-orange-100 text-orange-700",

};

const TaskCard = ({id, title, description, assignee, category, priority}: TaskCardProps) => {
  if (id === undefined) {
    return (
      <article className="bg-white rounded-lg p-4 shadow-sm border border-[#ffb5a7] hover:shadow-md transition-shadow">
       
        <p className="inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 mr-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}>
            Category: {category} </span>
        </p>

        <p  className="text-base font-semibold text-black mb-2">
          <strong>Title:</strong>{title}
        </p>

        <p className="text-sm text-gray-700 mb-2">
          <strong>Description:</strong> {description}
        </p>

        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Respoinsible:{assignee}</span> 
        </p>

        <p className="inline-block px-2 py-1 rounded-full text-xs font-medium">
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${priorityColors[priority]}`}>
            Priority:{priority}</span>
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
