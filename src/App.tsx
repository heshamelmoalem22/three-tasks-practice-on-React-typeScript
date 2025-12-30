// src/App.tsx
import { useState } from "react";
import Card from "./components/card";
import Card2 from "./components/card2";
import Modal from "./components/modal";
import Header from "./components/Header";
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoals from "./components/NewGoals";
import goalImg from "./assets/images.jpeg";
import { Toaster } from "react-hot-toast";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Input from "./components/Input";
// import Button from "./components/Button";
// import Form from "./components/Form";
import AddTimer from "./components/AddTimer";
import Header2 from "./components/Header2";
import Timers from "./components/Timers";
import {TimerContextProvider} from "./components/store/timerContext"
import Card3 from "./components/card3";
import Cart from "./components/cart";


export type courseGoal = {
  title: string;
  description: string;
  id: number;
};

export type ModalType = "goals" | "empty" | "cart" | null;

export default function App() {
  // const formRef=useRef<HTMLInputElement>(null)

  const [goals, setGoals] = useState<courseGoal[]>([]);
  const [editingGoal, setEditingGoal] = useState<courseGoal | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();


  // function handleOnSave(data:unknown){
  //   const extractData= data as {name:string,age:string};
  //   console.log(extractData);
  // }

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalType(null);
      setEditingGoal(null);
    }, 300);
  };

  function handleAddGoal(title: string, desc: string) {
    setGoals((prev) => [
      ...prev,
      { title, description: desc, id: Math.random() },
    ]);
  }

  function handleUpdateGoal(id: number, title: string, desc: string) {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, title, description: desc } : g))
    );
    setEditingGoal(null);
  }

  function handleDeleteGoal(id: number) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }

  function startEditGoal(goal: courseGoal) {
    setEditingGoal(goal);
  }

  return (
    <>
      <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "linear-gradient(rgb(5 45 72 / 72%) ,rgb(0 0 0))",
      color: '#fff',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: '500',
    },
    success: {
      iconTheme: {
        primary: '#22c55e',
        secondary: '#1f2937',
      },
    },
  }}
/>
     <Routes>
      <Route
        path="/"
        element={
          <>
           {!modalType && (
        <main>
          <Card title="practice on ⏩ Ts 🛠 React" onOpen={() => openModal("goals")}>
            <p>
              practice on 💡{" "}
              <span style={{ color: "rgb(49 120 198)" }}>Ts</span> 🛠{" "}
              <span style={{ color: "rgb(67 183 229)" }}>React</span>
            </p>
          </Card>

          <Card2 onOpen={() => openModal("empty")}>
            <p>
              practice on 💡{" "}
              <span style={{ color: "rgb(49 120 198)" }}>Ts</span> 🛠{" "}
              <span style={{ color: "rgb(67 183 229)" }}>React</span> 2
            </p>
          </Card2>
          <Card3 title="" onOpen={() => navigate("/card3")}>

            <p>
              practice on 💡{" "}
              <span style={{ color: "rgb(49 120 198)" }}>Ts</span> 🛠{" "}
              <span style={{ color: "rgb(67 183 229)" }}>React</span> 3
            </p>
          </Card3>
        </main>
      )}
      {modalType && (
        <Modal onClose={closeModal} isClosing={isClosing} modalType={modalType}>
          {modalType === "goals" && (
            <>
              <Header img={{ src: goalImg, alt: "Your goals" }}>
                <h1>My Tasks</h1>
              </Header>

              <NewGoals
                onAddGoal={handleAddGoal}
                onUpdateGoal={handleUpdateGoal}
                editingGoal={editingGoal}
              />

              <CourseGoalsList
                goals={goals}
                onDeleteGoal={handleDeleteGoal}
                onEditGoal={startEditGoal}
                editingGoal={editingGoal}
              />
            </>
          )}

          {modalType === "empty" && (
            <TimerContextProvider>
<>
    <Header2/>
    <div className="form2" style={{padding:"1rem"}}>
    <AddTimer/>
    </div>
    <Timers/>        
</>
            </TimerContextProvider>
  
          )}
        </Modal>
      )}
          </>
        }
        />
     
<Route
  path="/card3"
  element={<Cart  />}
/>

      
      </Routes>
    </>

  );
}
