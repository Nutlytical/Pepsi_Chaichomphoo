import * as React from "react";
import Head from "next/head";

import { Layout, CryptoCoins } from "components";

const CryptoCoinsPage = () => {
  return (
    <>
      <Head>
        <title>This title is for SEO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This description is for SEO" />
      </Head>
      <CryptoCoins />
    </>
  );
};

CryptoCoinsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CryptoCoinsPage;
