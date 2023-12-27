import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Introspectia</title>
        <meta property="og:title" content="Home | Introspectia" />
        <meta name="twitter:title" content="Home | Introspectia" />
        <meta property="og:url" content="https://" />
        <meta name="twitter:url" content="https://" />
      </Head>
      <main>
        <Link href="/login">
          <span className="">Login</span>
        </Link>
      </main>
    </>
  );
}
