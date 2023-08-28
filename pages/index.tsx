import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Apollo18</title>
      </Head>

      <div>
        <h1>Hello world!</h1>
      </div>
    </>
  );
}
