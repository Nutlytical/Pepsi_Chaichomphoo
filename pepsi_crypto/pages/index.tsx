import * as React from "react";

import { Layout } from "components";
import CryptoHomeComponent from "components/crypto/CryptoHomeComponent";

const HomePage = () => {
  return <CryptoHomeComponent />;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
