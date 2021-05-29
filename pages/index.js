import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests, { API } from "../requests";

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);
  const data = await res.json();

  return {
    props: {movies: data.results}
  }
}

function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Navbar />
      <Results movies={movies}/>
    </>
  );
}

export default Home;
