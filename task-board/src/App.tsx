import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";

const App = () => {
  return (
    <>
      <Header title="React" courseName="Java Developing Course"></Header>

      <main>
        <section>
          <TaskCard
            id={1}
            title="Implement the first task card"
            description="Description: a short description about the first task card."
            assignee="L.W."
            category="Frontend"
            priority="High"
          />
        </section>

        <section>
          <TaskCard
            id={2}
            title="Implement the second task card"
            description="Description: a short description about the second task card."
            assignee="L.W."
            category="Design"
            priority="Medium"
          />
        </section>

        <section>
          <TaskCard
            id={3}
            title="Implement the third task card"
            description="Description: short description about the third task card."
            assignee="L.W."
            category="Testing"
            priority="Low"
          />
        </section>
      </main>

      <Footer creator="L.W." year={2026} />
    </>
  );
};
export default App;
