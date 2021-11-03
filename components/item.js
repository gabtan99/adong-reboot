const Item = ({ text, url }) => {
  return (
    <button className="bg-card rounded text-primary py-2 font-bold hover:bg-primary hover:text-reverse">
      {text}
    </button>
  );
};

export default Item;
