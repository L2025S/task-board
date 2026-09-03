import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";

const App= ()=>{

    return (
    
        <>
        <Header title="React" courseName="Java Developing Course"></Header>

        <main>
            <section>
                <TaskCard title="Implement the first task card"/>
            </section>
        </main>

        <Footer creator="L.W." year={2026} />  
        </>
    );
};
export default App;