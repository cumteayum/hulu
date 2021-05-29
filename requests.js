export const API = '825c4ab331cdce4dbd9c3a2675e5d3e1';

export default {
  fetchTrending: {
    name: 'Trending',
    url: `/trending/all/week?api_key=${API}&language=en-US`
  },
  fetchTopRated: {
    name: 'Top Rated',
    url: `/movie/top_rated?api_key=${API}&language=en-US`
  },
  fetchHorror: {
    name: 'Horror',
    url: `/discover/movie?api_key=${API}&with_genres=27`
  },
  fetchAction: {
    name: 'Action',
    url: `/discover/movie?api_key=${API}&with_genres=28`
  },
  fetchRomance: {
    name: 'Romance',
    url: `/discover/movie?api_key=${API}&with_genres=10749`
  },
  fetchMystery: {
    name: 'Mystery',
    url: `/discover/movie?api_key=${API}&with_genres=9648`
  },
  fetchThriller: {
    name: 'Thriller',
    url: `/discover/movie?api_key=${API}&with_genres=23`
  },
  fetchSciFi: {
    name: 'Sci Fi',
    url: `/discover/movie?api_key=${API}&with_genres=`
  },
  fetchWar: {
    name: 'Casual',
    url: `/discover/movie?api_key=${API}&with_genres=36`
  },
}