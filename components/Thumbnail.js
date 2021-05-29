import Image from "next/image"
import { ThumbUpIcon } from '@heroicons/react/outline';

const Thumbnail = ({result}) => {
  const BASE_URL = 'https://images.tmdb.org/t/p/original';

  return (
    <div className="group cursor-pointer p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image src={
        `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
         `${BASE_URL}${result.poster_path}`
      } height={1080} width={1920} layout='responsive'/>
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type}&nbsp;
          {result.release_date || result.first_air_date}&nbsp;
          <ThumbUpIcon className="h-5 mx-2 hover:scale-125"/>
          {result.vote_count}
        </p>
      </div>
    </div>
  )
}

export default Thumbnail
