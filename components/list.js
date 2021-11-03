import Item from "../components/item";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";

const API_URL = "https://stormy-lake-97964.herokuapp.com/sounds";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const List = () => {
  const { data, error } = useSWR(API_URL, fetcher);

  if (error) return <div className="text-primary">failed to load</div>;
  if (!data)
    return (
      <div className="flex justify-center items-center my-20">
        <div
          className="
                loader
                ease-linear
                rounded-full
                border-8 border-t-8 border-gray-500
                h-20
                w-20
                "
        ></div>
      </div>
    );

  return (
    <div className="pt-6 font-semibold text-primary">
      <p className="font-bold text-primary pb-5 text-xl"> Sounds</p>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        {data.map((e, i) => (
          <Item key={i} text={e.name} id={e.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
