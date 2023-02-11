import debounce from "../components/debounce";

const API_URL = "https://adong-api.onrender.com";

const Item = ({ text, id }) => {
  const playSound = debounce(async () => {
    const res = await fetch(API_URL + id);
    const data = await res.json();
    console.log(data);
  }, 250);

  return (
    <button
      onClick={playSound}
      className="bg-card rounded text-primary py-2 font-bold hover:bg-primary hover:text-reverse "
    >
      {text}
    </button>
  );
};

export default Item;
