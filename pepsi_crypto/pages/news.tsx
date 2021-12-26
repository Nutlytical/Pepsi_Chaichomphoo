import * as React from "react";
import Head from "next/head";

import { CryptoNews, Layout } from "components";

function CryptoNewsPage() {
  return (
    <>
      <Head>
        <title>Pepsi Crypto News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pepsi Crypto News" />
      </Head>
      <CryptoNews />
    </>
  );
}

CryptoNewsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CryptoNewsPage;
