import type { FC } from "react";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: FC<Props> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        role="dialog"
        style={{
          backgroundColor: "white",
          padding: 20,
          width: "50%",
          borderRadius: "10px",
        }}
      >
        {children}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
