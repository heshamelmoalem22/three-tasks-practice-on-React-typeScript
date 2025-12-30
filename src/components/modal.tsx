import React, { useState } from "react";
import ReactDOM from "react-dom";

type ModalType = "goals" | "empty" | "cart" |null;
type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  isClosing?: boolean;
  modalType: ModalType;
};

export default function Modal({ children, onClose, isClosing, modalType }: ModalProps) {
  const [isHovering, setIsHovering] = useState(false);
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)", 
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "40rem",
          minWidth: "300px",
          maxHeight: "90vh",
          background: modalType === "goals" ?
           "linear-gradient(rgb(18, 18, 18),rgb(5 45 72 / 72%))" 
           : "linear-gradient(rgb(5 45 72 / 72%), rgb(0 0 0))",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgb(0, 0, 0)",
          animation: isClosing
            ? "fadeOut 0.4s ease-in-out"
            : "fadeIn 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >

        {modalType==="goals" && (<button
          onClick={onClose}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            backgroundColor: isHovering ? "#888888" : "#6277b7",
            color: "#000000",
            fontSize: "1.1rem",
            fontWeight: "bold",
            zIndex: 10,
          }}
        >
          ✖
        </button>)}

        
        <div
          style={{
            padding: "2rem",
            overflowY: "auto",
          }}
          className="hide-scrollbar"
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
