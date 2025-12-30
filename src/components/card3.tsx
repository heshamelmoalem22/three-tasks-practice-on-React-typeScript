// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// type CardProps = {
//   title: string;
//   onOpen: () => void;
//   children?: React.ReactNode;
// };

// export default function Card3({ children, onOpen }: CardProps) {
//   const location = useLocation();

//   // يرجّع body للتصميم الطبيعي لما نكون في /
//   useEffect(() => {
//     if (location.pathname === "/") {
//       document.body.style.minHeight = "100vh";
//       document.body.style.background = `
//         linear-gradient(rgb(5 45 72 / 72%), rgb(0 0 0)),
//         url(/src/assets/0_m0uzkz9Bd5KnoxuE.jpg)
//       `;
//       document.body.style.backgroundSize = "cover";
//       document.body.style.backgroundPosition = "center";
//       document.body.style.display = "flex";
//       document.body.style.justifyContent = "center";
//       document.body.style.alignItems = "center";
//     }
//   }, [location.pathname]);

//   return (
//     <div
//       className="card"
//       style={{
//         width: "290px",
//         height: "170px",
//         background: "linear-gradient(rgb(0 0 0), rgb(5 45 72 / 72%))",
//         color: "#fff",
//         borderRadius: "8px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: "1.2rem",
//         fontWeight: "bold",
//         gap: "1.2rem",
//         boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
//         animation: "fadeIn 0.5s ease-in-out",
//       }}
//     >
//       {children}

//       <button
//         className="cardBt"
//         style={{
//           height: "2rem",
//           borderRadius: "5px",
//           border: "none",
//           cursor: "pointer",
//           color: "#000",
//           fontSize: "1.2rem",
//           fontWeight: "bold",
//           marginBottom: "1rem",
//         }}
//         onClick={() => {
//           document.body.style.background = "black";
//           onOpen();
//         }}
//       >
//         task view
//       </button>
//     </div>
//   );
// }
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type CardProps = {
  title: string;
  onOpen: () => void;
  children?: React.ReactNode;
};

export default function Card3({ children, onOpen }: CardProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.remove("black-bg");
      document.body.classList.add("default-bg");
    }
  }, [location.pathname]);

  return (
    <div
      className="card"
      style={{
        width: "290px",
        height: "170px",
        background: "linear-gradient(rgb(0 0 0), rgb(5 45 72 / 72%))",
        color: "#fff",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "bold",
        gap: "1.2rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      }}
    >
      {children}

      <button
        className="cardBt"
        style={{
          height: "2rem",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          color: "#000",
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
        onClick={() => {
          document.body.classList.remove("default-bg");
          document.body.classList.add("black-bg");
          onOpen();
        }}
      >
        task view
      </button>
    </div>
  );
}

