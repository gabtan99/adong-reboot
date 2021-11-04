import debounce from "./debounce";
import { useState } from "react";
import { RefreshCw } from "./icons";

const API_URL = "https://stormy-lake-97964.herokuapp.com/ref";

const Nav = () => {
  const [processing, setProcessing] = useState(false);
  const refresh = debounce(async () => {
    setProcessing(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    setProcessing(false);
  }, 250);

  return (
    <div className="flex justify-between py-5 items-center ">
      <h1 className="text-primary font-bold text-3xl font-raleway">
        AdongBot<span className="text-accent">2</span>
      </h1>
      <div className="flex items-center ">
        <button
          type="button"
          onClick={refresh}
          className="p-2 mx-2 hover:bg-card rounded"
          disabled={processing}
        >
          {processing ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          ) : (
            <RefreshCw />
          )}
        </button>
        <a href="https://drive.google.com/drive/folders/1NDwIjsTf785Uuiw2nKrYJh8yFoWzSZjj?usp=sharing">
          <button className="text-reverse bg-accent py-1 px-3 rounded font-semibold text-xl font-raleway transform motion-safe:hover:scale-110">
            Upload
          </button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
