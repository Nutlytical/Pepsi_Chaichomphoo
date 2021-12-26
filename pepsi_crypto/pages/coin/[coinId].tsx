import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Layout, CryptoCoin } from "components";

const CryptoCoinPage = () => {
  const router = useRouter();
  const { coinId } = router.query;

  let description = `Pepsi Crypto Coin ${coinId?.toString()}`;

  return (
    <>
      <Head>
        <title>{description}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
      </Head>
      <CryptoCoin />
    </>
  );
};

CryptoCoinPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CryptoCoinPage;
