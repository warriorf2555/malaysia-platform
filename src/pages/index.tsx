import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";
import Hero from "./Hero";
import ApplicationHeader from "./ApplicationHeader";
import CarouselHome from "./CarouselHome";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <ApplicationHeader />
      <CarouselHome />
      <Hero />
      <main className="bg-b flex min-h-screen flex-col items-center justify-center">
        Hello
      </main>
    </>
  );
};

export default Home;
