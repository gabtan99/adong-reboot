import Head from "next/head";
import Item from "../components/item";
import Nav from "../components/Nav";

import fetch from "isomorphic-unfetch";
// Vercel has created a data-fetching library called SWR (client side).
import useSWR from "swr";

const API_URL = "https://stormy-lake-97964.herokuapp.com/sounds";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Home() {
  const { data, error } = useSWR(API_URL, fetcher);

  if (error) return <div className="text-primary">failed to load</div>;
  if (!data) return <div className="text-primary">loading...</div>;

  console.log(data);

  return (
    <>
      <Head>
        <title>AdongBot v2</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div className="container max-w-3xl mx-auto px-3">
          <Nav />
          <div className="pt-6 font-semibold text-primary">
            <p className="font-bold text-primary pb-5 text-xl"> Sounds</p>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
              {data.map((e) => (
                <Item text={e.name} id={e.id} />
              ))}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
