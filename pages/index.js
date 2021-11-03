import Head from "next/head";
import Item from "../components/item";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AdongBot v2</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="container max-w-3xl mx-auto px-3">
        <Nav />
        <div className="pt-6 font-semibold text-primary">
          <p className="font-semibold text-primary pb-3"> Sounds</p>
          <div class="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
            <Item text="clip" />
            <Item text="clip" />
            <Item text="clip" />
            <Item text="clip" />
            <Item text="clip" />
            <Item text="clip" />
            <Item text="clip" />
            <Item text="clip" />
            <Item text="clip" />
          </div>
        </div>
      </body>
    </div>
  );
}
