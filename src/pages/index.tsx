import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";
import Hero from "./Hero";
import ApplicationHeader from "./common/ApplicationHeader";
import CarouselHome from "./CarouselHome";
import Showcase from "./Showcase";
import Footer from "./common/Footer";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <ApplicationHeader />
      <CarouselHome />
      <Hero />
      <Showcase />
      <Footer />
      {/* <main className="bg-b flex min-h-screen flex-col items-center justify-center">
        Hello
      </main> */}
    </>
  );
};

export default Home;
