import Head from "next/head";

export default function Main({ children }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="py-4 px-44 bg-white dark:bg-darkModeGray min-h-screen">
        <div>{children}</div>
      </div>
    </>
  );
}
