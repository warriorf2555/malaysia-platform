import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import ApplicationHeader from "@/common/ApplicationHeader";
import Footer from "@/common/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>eShop</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ClerkProvider {...pageProps}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "dark",
          }}
        >
          {/* <main className="flex min-h-screen flex-col flex-wrap"> */}
          <main className="flex min-h-screen flex-col">
            <ApplicationHeader />
            <Component {...pageProps} />
            <Footer />
          </main>
        </MantineProvider>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
