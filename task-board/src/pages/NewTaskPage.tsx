import NewTaskForm from "../components/NewTaskForm";
import type { NewTask } from "../types/Task";

type NewTaskPageProps = {
    onAddTask:(newTask: NewTask)=> void;
};

const NewTaskPage = ({onAddTask}: NewTaskPageProps) => {
    return(
        <div>
            <NewTaskForm  onAddTask={onAddTask} />
        </div>
    );
};

export default NewTaskPage;
