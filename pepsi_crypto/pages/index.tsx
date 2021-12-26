import * as React from "react";
import Head from "next/head";

import { Layout, CryptoHome } from "components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Pepsi Crypto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pepsi Crypto" />
      </Head>
      <CryptoHome />
    </>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
