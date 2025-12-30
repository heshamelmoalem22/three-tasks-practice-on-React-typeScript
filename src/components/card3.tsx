


type CardProps = {
  title: string;
  onOpen: () => void;
  children?: React.ReactNode;
};

export default function Card3({ children, onOpen }: CardProps) {
  return (
    <div className="card"
      style={{
        width: "290px",
        height: "170px",
        background: "linear-gradient(rgb(0 0 0),rgb(5 45 72 / 72%) )",
        color: "#fff",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize:"1.2rem",
        fontWeight:"bold",
        gap:"1.2rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      {children}
      <button className="cardBt"
      style={{
        height:"2rem",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer",
        color:"#000",
        fontSize:"1.2rem",
        fontWeight:"bold",
        marginBottom:"1rem",

      }}  onClick={() => {
    document.body.style.  background= "black"; 
    onOpen(); 
  }}>task view</button>
    </div>
  );
}
