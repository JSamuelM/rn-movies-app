import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a16cca4f69dbd5e1cb200e7551cd99ef',
    language: 'es'
  }
});
