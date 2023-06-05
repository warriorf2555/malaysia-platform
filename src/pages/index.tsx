import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";

import ApplicationHeader from "../common/ApplicationHeader";
import Footer from "../common/Footer";
import LandingPage from "~/landingPage";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <ApplicationHeader />
      <LandingPage />
      <Footer />
      <main className="bg-b flex min-h-screen flex-col items-center justify-center">
        Hello
      </main>
    </>
  );
};

export default Home;
