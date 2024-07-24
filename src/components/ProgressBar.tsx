import React from "react";
import { ProgressBarProps } from "./type";
import './styles/ProgressBar.css'


const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div
       data-testid="progress"
        style={{
          height: "5px",
          background: "#26C281",
          width: `${progress}%`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};

export default React.memo(ProgressBar);