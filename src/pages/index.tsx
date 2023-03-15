import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { json } from "stream/consumers";

const Home: NextPage = () => {
const {data: session} = useSession()
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<button onClick={() => signIn()} >LogIn</button>

{JSON.stringify(session)}
    </>
  );
};

export default Home;



