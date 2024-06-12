import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import RightSidebar from '../components/RightSidebar'
import Buttons from '../components/Buttons'
import Cards from '../components/Cards'
import Trending from '../components/Trending'
import { Link, useParams } from 'react-router-dom'
import { getGameList } from '../services/game'
import { swalAlertNoButton } from '../utils/alert'
function GameList() {
	let { providercode } = useParams();
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
	])
	const handleData = async() =>{
		try {
			//handle Data
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
    <Layout>
      	<section className='flex w-full h-screen overflow-auto pb-10 py-3'>
			<div className='w-1/1 w-4/5'>
				<div className='w-full px-3'>
					<figure className="w-full">
						<img src="https://img.freepik.com/premium-psd/bonus-lettering-smartphone-screen-flying-golden-coins-yellow-background_531308-1053.jpg?size=626&ext=jpg" alt="Logo" className='h-56 w-full object-cover shadow-md rounded-xl' />	
					</figure>
				</div>
				<div className='w-full'>
					<Buttons />
					<section className='mt-3 text-white px-3'>
						<div className='flex gap-x-3 items-center'>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
							</svg>
							<p className='font-semibold text-white text-2xl'>{providercode}</p>
						</div>
					</section>
					<section className="px-3 py-3 mx-auto flex flex-wrap">
						{gameList.length > 0 ? (
							<>
							{gameList?.map((item, k) => (
								<div key={k} className="lg:w-1/5 sm:w-full p-2">
									<Link to={`/game/play/001/007`} >
										<div className='w-full mt-2'>
											<figure className='w-full h-4/4'>
												<img className="object-cover h-full rounded-t-xl w-full" src={item?.GameLogo} alt={item?.GameCode} />
											</figure>
											<div className='flex items-center justify-around caption-top h-1/4 rounded-b w-full bg-[#212632]'>
												<div className='font-normal text-sm truncate text-white'>{item?.GameName}</div>
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
							</>
						):(
							<div className='w-full h-5 text-center'>
								<p className='font-semibold text-white text-sm'>Game Will Release soon!</p>
							</div>
						)}
						
					</section>
				</div>
			</div>
			<div className='w-1/5 max-lg:hidden'>
				<div className='w-full px-3'>
					<RightSidebar />
				</div>
			</div>
      	</section>
    </Layout>
  )
}

export default GameList