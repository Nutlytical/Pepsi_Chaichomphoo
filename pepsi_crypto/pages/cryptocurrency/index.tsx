import * as React from "react";
import Head from "next/head";

import { Layout, CryptoHome } from "components";

const CryptoHomePage = () => {
  return (
    <>
      <Head>
        <title>This title is for SEO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This description is for SEO" />
      </Head>
      <CryptoHome />
    </>
  );
};

CryptoHomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CryptoHomePage;