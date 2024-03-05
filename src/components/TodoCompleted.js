import ProgressBar from "react-customizable-progressbar";
import "../css/TodoCompleted.css";

function TodoCompleted({ total, completed }) {
  const getPercent = (completNumber, totalNumber) => {
    const percent = (completNumber / totalNumber) * 100
    return isNaN(percent) ? 0 : percent;
  };
  return (
    <div className="TodoCompleted-container">
      <h2>Tareas Completadas</h2>
      <div className="graphic-container">
        <ProgressBar
          progress={getPercent(completed, total)}
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
        <p>{`${getPercent(completed, total)}%`}</p>
      </div>
    </div>
  );
}

export { TodoCompleted };
