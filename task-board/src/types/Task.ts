export type TaskStatus = "Todo" | "Doing" | "Done";
export type Priority = "High" |  "Medium" | "Low";
export type Category = "Frontend" | "Backend" | "Test" | "Design" | "API";

export type Task = {
    id?: number;
    title: string; 
    description: string;
    assignee: string;
    category: Category;
    priority: Priority;
    status: TaskStatus;
    
};

export type TaskCardProps = Pick< Task, "id"|"title" | "description" |"assignee" | "category" | "priority">;

