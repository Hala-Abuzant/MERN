import react, { useState } from "react";

const MessageForm = (props) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(color);
    setColor("")
    console.log(color)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Set color</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your color here"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      ></textarea>
      <input type="submit" value="Set" />
    </form>
  );
};

export default MessageForm;
