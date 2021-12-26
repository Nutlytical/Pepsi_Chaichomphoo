import axios from "axios";
import useSWR from "swr";

const newsApi = async (url: string, search: string) => {
  return await axios
    .request({
      method: "GET",
      url,
      params: {
        q: search,
        count: "100",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
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

export function cryptoNewsApi(search: string) {
  const url = "https://bing-news-search1.p.rapidapi.com/news/search";

  const { data, error } = useSWR([url, search], newsApi);

  return {
    cryptoNews: data,
    isCryptoNewsLoading: !error && !data,
    isCryptoNewsError: error,
  };
}
