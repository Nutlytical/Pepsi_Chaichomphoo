import axios from "axios";
import useSWR from "swr";

const cryptoApi = async (url: string) => {
  return await axios
    .request({
      method: "GET",
      url,
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export function cryptoStatsApi() {
  const { data, error } = useSWR(
    "https://coinranking1.p.rapidapi.com/stats",
    cryptoApi
  );

  return {
    cryptoStats: data,
    isCryptoStatsLoading: !error && !data,
    isCryptoStatsError: error,
  };
}

export function cryptoCoinsApi() {
  const { data, error } = useSWR(
    "https://coinranking1.p.rapidapi.com/coins",
    cryptoApi
  );

  return {
    cryptoCoins: data,
    isCryptoCoinsLoading: !error && !data,
    isCryptoCoinsError: error,
  };
}

export function cryptoCoinApi(coinId: any) {
  const { data, error } = useSWR(
    `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
    cryptoApi
  );

  return {
    cryptoCoin: data,
    isCryptoCoinLoading: !error && !data,
    isCryptoCoinError: error,
  };
}

export function cryptoCoinHistoryApi(coinId: any, timePeriod: any) {
  const { data, error } = useSWR(
    `https://coinranking1.p.rapidapi.com/coin/${coinId}/history/${timePeriod}`,
    cryptoApi
  );

  return {
    cryptoCoinHistory: data,
    isCryptoCoinHistoryLoading: !error && !data,
    isCryptoCoinHistoryError: error,
  };
}
