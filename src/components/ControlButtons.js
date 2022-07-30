
export const ControlButtons = ({
  active,
  isPaused,
  handleStart,
  handleReset,
  handlePauseResume,
}) => {
  const StartButton = (
    <div className="btn btn-lg btn-danger m-5" onClick={handleStart}>
      Start
    </div>
  );

  const ActiveButtons = (
    <div className="btn-group center">
      <div className="btn btn-danger btn-lg ml-3" onClick={handleReset}>
        Reset
      </div>
      <div className="btn btn-danger btn-lg mx-3" onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  return (
    <div className="position-absolute top-50 start-25 p-5 m-5">
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
};
