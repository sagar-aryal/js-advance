const MyButton = ({ count, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <span>{count}</span>
    </>
  );
};

export default MyButton;
