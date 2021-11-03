const API_URL = "https://stormy-lake-97964.herokuapp.com/";

const Item = ({ text, id }) => {
  const playSound = async () => {
    const res = await fetch(API_URL + id);
    const data = await res.json();
    console.log(data);
  };

  return (
    <button
      onClick={playSound}
      className="bg-card rounded text-primary py-2 font-bold hover:bg-primary hover:text-reverse"
    >
      {text}
    </button>
  );
};

export default Item;
