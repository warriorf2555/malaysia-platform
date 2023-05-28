import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";
import Hero from "./Hero";
import ApplicationHeader from "./ApplicationHeader";

// function Header() {
//   return (
//     <header className="flex justify-between bg-black p-5 text-white">
//       <h5>My App</h5>
// <SignedIn>
//   {/* Mount the UserButton component */}
//   <UserButton afterSignOutUrl="/" />
// </SignedIn>
// <SignedOut>
//   {/* Signed out users get sign in button */}
//   <SignInButton />
// </SignedOut>
//     </header>
//   );
// }

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <ApplicationHeader />
      <Hero />
      <main className="bg-b flex min-h-screen flex-col items-center justify-center">
        Hello
      </main>
    </>
  );
};

export default Home;
