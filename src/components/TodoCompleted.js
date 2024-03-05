import ProgressBar from "react-customizable-progressbar";
import "../css/TodoCompleted.css";

function TodoCompleted() {
  return (
    <div className="TodoCompleted-container">
      <h2>Tareas Completadas</h2>
      <div className="graphic-container">
        <ProgressBar
          progress={50}
          strokeColor={"#85e486"}
          trackStrokeWidth={10}
          strokeWidth={10}
          trackStrokeColor={"#292929"}
          pointerRadius={10}
          pointerStrokeWidth={5}
          pointerStrokeColor={"#85e486"}
          initialAnimation={true}
          initialAnimationDelay={2000}
          className={"graphic"}
        />
        <p>50%</p>
      </div>
    </div>
  );
}

export { TodoCompleted };
