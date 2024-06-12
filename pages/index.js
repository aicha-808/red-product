import Head from "next/head";
import Login from "./auth/login";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="register" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}
