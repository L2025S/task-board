import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";
import type { Task  } from "./types/Task";
import "./App.css";


const tasks: Task[]=[
  {
    id: 1,
    title: "Implement Authentication",
    description:" Add JWT-based login and registration flow.",
    assignee: "Alice",
    category: "Backend",
    priority: "High",
    status:"Todo"
  },
  {
    id: 2,
    title: "Create UI Layout",
    description:  "Design the main dashboard layout using React and Tailwind.",
    assignee: "Bob",
    category: "Frontend",
    priority: "Medium",
    status:"Todo"

  },
  {
    id: 3,
    title: "Write Unit Tests",
    description: "Add Jest tests for core utility functions.",
    assignee: "Charlie",
    category:"Test",
    priority:"Low",
    status:"Todo"
  },
  {
    id: 4,
    title: "Build API Endpoints",
    description: "Connect CRUD endpoints for project resources.",
    assignee:"Diana",
    category:"Backend",
    priority:"High",
    status:"Doing"
  },
  {
    id: 5,
    title: "Integrate Payment Gateway",
    description:"Connect Stripe API and handle payment flow.",
    assignee:"Evan",
    category:"API",
    priority:"High",
    status:"Doing"

  },
  {
    id: 6,
    title: "Build Resuable Components",
    description: "Create shared UI components like buttons, modals, and forms.",
    assignee: "Fiona",
    category:"Frontend",
    priority:"Medium",
    status:"Doing"
  },
  {
    id: 7,
    title: "Set Up Project Structure",
    description: "Initialize repository, configure TypeScript, ESLint, and Prettier.",
    assignee: "George",
    category: "Backend",
    priority: "Medium",
    status:"Done"
  },
  {
    id:8,
    title:"Configure CI/CD",
    description:"Add GitHub Actions workflow for automated testing and deployment.",
    assignee: "Hannah",
    category: "Backend",
    priority:"High",
    status:"Done"
  },
  {
    id:9,
    title: "Implement Logging",
    description: "Add Winston-based logging with error tracking.",
    assignee:"Ian",
    category:"Backend",
    priority:"Low",
    status:"Done"
  }
];

const App = () => {
  return (
    <div className="app">
      <Header
        title="React"
        courseName="Course: Front-end development - React"
      ></Header>

      <main className="app-main">
        <div className="columns">
          <Column title="Todo">
            <section>
              <TaskCard
                id={1}
                title="Create dashboard"
                description="Description: a short description about the first task card."
                assignee="L.W."
                category="Frontend"
                priority="High"
              />
            </section>
          </Column>

          <Column title="Doing">
            <section>
              <TaskCard
                id={2}
                title="Build formula"
                description="Description: a short description about the second task card."
                assignee="L.W."
                category="Design"
                priority="Medium"
              />
            </section>
          </Column>

          <Column title="Done">
            <section>
              <TaskCard
                id={3}
                title="Write tests"
                description="Description: short description about the third task card."
                assignee="L.W."
                category="Testing"
                priority="Low"
              />
            </section>
          </Column>
        </div>
      </main>

      <Footer creator="L.W." year={2026} />
    </div>
  );
};
export default App;
