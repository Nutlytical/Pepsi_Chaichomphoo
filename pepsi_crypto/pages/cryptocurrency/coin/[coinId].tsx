import * as React from "react";
import Head from "next/head";

import { Layout, CryptoCoin } from "components";

const CryptoCoinPage = () => {
  return (
    <>
      <Head>
        <title>This title is for SEO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This description is for SEO" />
      </Head>
      <CryptoCoin />
    </>
  );
};

CryptoCoinPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CryptoCoinPage;
