import React, { useEffect, useState } from 'react'
import { getGameList } from '../services/game';
import { swalAlertNoButton } from '../utils/alert';
import { Link } from 'react-router-dom';
function Trending({title, providercode, img}) {
	const [gameList, setGameList] = useState([
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 01"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 03"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
		{GameLogo: "https://play-lh.googleusercontent.com/6ducfNys46MGge6Bl3kaHaGbNnnQh46j6-3JkOqk0PKgUNVhm-dlNenJwz65nYZ4B0g8", GameCode:"GameCode", GameName:"GameName 02"},
	]);
	const handleData = async () =>{
		try {
			const params = {
				"domainname":"khemrak-dev.com",
				"providercode":providercode,
				"currencycode":"USA"
			};
		} catch (error) {
			swalAlertNoButton({
                text: error?.response?.data?.message, 
                icon: "error",
                position: 'center'
            })
		}
	  }
	  useEffect(() => {
		handleData()
	  }, [])
	return (
		<section className='mt-3 text-white px-3'>
			<div className='flex gap-x-3 items-center'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
				</svg>
				<p className='font-semibold text-white text-2xl'>{title}</p>
			</div>
			<div className="px-3 py-3 mx-auto flex flex-wrap">
				{gameList?.map((item, k) => (
					<div key={k} className="lg:w-1/5 p-2">
						<Link to={`/`} >
							<div className='w-full mt-2'>
								<figure className='w-full h-4/4'>
									<img className="object-cover h-full rounded-t-xl w-full" src={item?.GameLogo} alt={item?.GameCode} />
								</figure>
								<div className='flex items-center justify-around caption-top h-1/4 rounded-b w-full bg-[#212632]'>
									<div className='font-normal text-sm truncate'>{item?.GameName}</div>
									<div className='text-gray-600 w-32'>
										<button type='button' className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-3 border-b-4 border-yellow-700 hover:yellow-blue-500 rounded right-0" style={{float:'right'}}>
											Play Now
										</button>
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default Trending