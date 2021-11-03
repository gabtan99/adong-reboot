import Head from "next/head";
import Nav from "../components/Nav";
import List from "../components/list";

export default function Home() {
  return (
    <>
      <Head>
        <title>AdongBot v2</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container max-w-3xl mx-auto px-3">
        <Nav />
        <List />
      </div>
    </>
  );
}
