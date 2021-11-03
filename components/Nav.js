const Nav = () => {
  return (
    <div className="flex justify-between py-5 ">
      <h1 className="text-primary font-bold text-3xl font-raleway">
        AdongBot<span className="text-accent">2</span>
      </h1>
      <div>
        <button className="text-reverse bg-accent py-2 px-4 rounded font-semibold text-xl font-raleway">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Nav;
