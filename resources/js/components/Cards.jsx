import React, { useEffect, useState} from 'react'
import { gameList } from '../datas/gameList'
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

function Cards(props) {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4
		},
		desktop: {
		 	breakpoint: { max: 3000, min: 1024 },
		 	items: 4
		},
		tablet: {
		 breakpoint: { max: 1024, min: 464 },
		 items: 4
		},
		mobile: {
		 breakpoint: { max: 464, min: 0 },
		 items: 1
		}
	  };
	const [fectureGame, setFeactureGame] = useState([])
	const handleData = () =>{
		setFeactureGame(gameList);
	}
	useEffect(() => {
		handleData()
	}, [])
	const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
	const { carouselState: { currentSlide } } = rest;
	return (
			<div className="carousel-button-group mb-4 gap-3 flex justify-end items-center w-full">
				<button className='block p-3 ' onClick={() => previous()}> 
					<div className='w-6 h-6 rounded-full bg-[#353A46] shadow-2xl grid place-content-center'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
						</svg>
					</div>
				</button>
				<button onClick={() => next()}>
					<div className='w-6 h-6 rounded-full bg-[#353A46] shadow-2xl grid place-content-center'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
				</button>
			</div>
		)
	}
	return (
		<>
		<section className="px-3 py-3 mx-auto">
			<div className='w-[100%] mx-auto relative flex flex-col-reverse'>
				<Carousel 
					containerClass={`w-full`}
					partialVisible={true} 
					responsive={responsive}
					autoPlay={true}
					arrows={false}
					renderButtonGroupOutside={true} 
					customButtonGroup={<ButtonGroup />}
				>
					{fectureGame?.map((item, k) => (
						<Link key={k} to={`/gamelist/${item?.providercode}`}>
							<div className="lg:w-full p-2 cursor-pointer">
								<div className='w-full h-48 flex-1 justify-between items-center rounded-xl bg-[#272A35]'>
									<div className='text-md font-semibold text-white p-2'>{item?.title}</div>
									<div className='w-full h-40 px-2 rounded-2xl'>
										<figure className='w-full h-32 text-center'>
											IMGAGE
										</figure>
										<div className="absolute right-2 px-3" style={{marginTop:'-5px'}}>
											<div className='w-6 h-6 rounded-full bg-[#353A46] shadow-2xl grid place-content-center'>
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
													<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
												</svg>
											</div>
										</div>
										<br />
									</div>
								</div>
							</div>
						</Link>
					))}
				</Carousel>
			</div>
		</section>
		{/* <section className="px-3 py-3 mx-auto flex flex-wrap"> */}
			{/* {fectureGame?.map((item, k) => (
				<div key={k} className="lg:w-1/3 p-2">
					<div className='w-full h-40 flex justify-between items-center rounded-xl bg-[#272A35]'>
						<div className='w-1/2 px-5 gap-y-5'>
							<div className='text-2xl font-semibold text-white'>Sport</div>
							<div className='text-sm font-semibold text-gray-400'>The thrill of victory and Agony f defeat</div>
							<div className='w-4 h-6 rounded-full bg-[#353A46] shadow-2xl grid place-content-center'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
								</svg>
							</div>
						</div>
						<figure className='w-1/2 h-4'>
							IMG
						</figure>
					</div>
				</div>
			))} */}
	  {/* </section> */}
	  </>
	)
}

export default Cards