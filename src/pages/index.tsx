import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"; // import { api } from "~/utils/api";

function Header() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <h1>My App</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Header />
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
};

export default Home;
