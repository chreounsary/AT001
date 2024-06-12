import React, { useState, useEffect} from 'react'
import Layout from '../components/Layout'
import RightSidebar from '../components/RightSidebar'
import Buttons from '../components/Buttons'
import Cards from '../components/Cards'
import Trending from '../components/Trending'
import { gameList } from '../datas/gameList'
function Home() {
	const [fectureGame, setFeactureGame] = useState([])
	const handleData = () =>{
		setFeactureGame(gameList);
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
					<Cards />
					<Trending 
						key={1}
						title="AFBGAMING"
						providercode={'AFBGAMING'}
						image="IMG"
					/>
					<Trending 
						key={2}
						title="AFBGAMING E_CASINO"
						providercode={'AFBGAMING_E_CASINO'}
						image="IMG"
					/>
					<Trending 
						key={3}
						title="AFBGAMING E_CASINO"
						providercode={'CG_E_CASINO'}
						image="IMG"
					/>
					
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

export default Home