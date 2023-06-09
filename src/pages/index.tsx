import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";

import LandingPage from "~/landingPage/LandingPage";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  // const { data } = api.account.getAll.useQuery();

  return (
    <>
      <LandingPage />
      {/* <main className="bg-b flex min-h-screen flex-col items-center justify-center">
        Hello
      </main> */}
    </>
  );
};

export default Home;
