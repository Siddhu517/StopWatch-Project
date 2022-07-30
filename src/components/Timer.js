
export const Timer = ({ time }) => {
  const digits = {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: "3rem",
    color: "#f5f5f5",
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <span style={digits}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span style={digits}>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="text-danger" style={digits}>
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};
