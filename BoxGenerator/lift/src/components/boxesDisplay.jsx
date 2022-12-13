const boxesDisplay = (props) => {
  return (
    <>
      <h1>Display Boxes</h1>
      {props.boxes.map((item, i) => (
        <div
          style={{
            backgroundColor: item, /////
            width: "100px",
            height: "100px",
          }}
        ></div>
      ))}
    </>
  );
};

export default boxesDisplay;
