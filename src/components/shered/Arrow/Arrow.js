const Arrow = ({ className, myStyles, onClick, arrow }) => {
  return (
    <div
      className={className}
      style={{ ...myStyles, position: "absolute", top: "45%", zIndex: "10", cursor: "pointer" }}
      onClick={onClick}
    >
      {arrow}
    </div>
  );
};

export default Arrow;
