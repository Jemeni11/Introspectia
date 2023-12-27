import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { supabase } from "@/lib/initSupabase";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { ThemeProvider } from "next-themes";

const Inter_Font = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Introspectia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta name="twitter:description" content="" />

        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="" />
        <meta name="twitter:title" content="" />

        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="vercel.app" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </Head>
      <SessionContextProvider supabaseClient={supabase}>
        <ThemeProvider attribute="class">
          <div className={Inter_Font.className}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </SessionContextProvider>
    </>
  );
}
