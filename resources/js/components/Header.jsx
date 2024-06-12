import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { setCurrentLang } from '../utils/auth';
import Modal from 'react-modal';
export default function Header() {
  const { t, i18n } = useTranslation()
  const {authStore} = useSelector((state) => state)
  const [deLnag, setDeLang] = useState('')
  const [user, setUser] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleChangeLanguage = async newLanguage => {
    await setCurrentLang(newLanguage)
    i18n.changeLanguage(newLanguage)
    setDeLang(newLanguage)
	setIsOpen(false)
  }
  const hanldeData = async () =>{
    console.log("authStore", authStore);
    if(authStore?.userInfo?.user){
      setUser(authStore?.userInfo?.user)
    }
  }
  useEffect(() => {
    hanldeData()
  }, [authStore])
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
	  background:'transparent',
	  border:'none'
    },
  };
  return (
    <div className='top-0 text-white flex px-5 justify-between w-full h-12 bg-[#272A35]'>
      {/* Part-1 */}
      <div className='flex gap-x-5 w-1/2'>
        <div className='w-56 shadow-2xl flex items-start justify-center bg-[#1C1F24] round-3xl h-8 max-lg:hidden my-2'>
          <div className='w-1/2 bg-[#333844] shadow-2xl rounded-3xl flex items-center justify-center gap-x-3 p-1'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <p> GAMER</p>
          </div>
          <div className='w-1/2 bg-[#333844] shadow-2xl rounded-3xl flex items-center justify-center gap-x-3 p-1'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <p> Sport</p>
          </div>
        </div>
        {/* <div className='w-52 bg-[#1C1F24] shadow-inner text-gray-600 text-center rounded-3xl flex items-center gap-x-1 px-4 h-8'>
          <p>Search</p>
        </div> */}
      </div>

      {/* Part-2 */}
      <div className='flex items-center gap-x-2 w-1/5 max-lg:hidden'>
        <figure className='w-9 h-9'>
          IMG
        </figure>
        <div className='text-center uppercase'>
          <p className='font-bold'>PLAYER</p>
          <p className='text-xs font-extralight'>By owldao Tran: {t('text.sign_in')}</p>
        </div>
      </div>

      {/* Part-3 */}
      <div className='flex gap-x-5 px-3'>
        <div className='h-8 w-8 grid place-content-center rounded-full bg-[#333844] my-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
          </svg>
        </div>
        <div className='h-8 w-8 grid place-content-center rounded-full bg-[#333844] my-2 cursor-pointer' onClick={(e)=> setIsOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
        </div>
        <div className='flex items-center justify-center shadow-2xl px-1 w-36 h-8 bg-[#333844] rounded-3xl my-2'>
          <div className='h-7 w-7 grid place-content-center rounded-full bg-[#1C1F24]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div>{user?.info_balance}</div>
        </div>
        <div className='items-center justify-center px-1 w-20 h-8 rounded-3xl my-2 cursor-pointer'>
          {user.usr_token ? (
            <Link to="/profile">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </Link>
          ):(
            <Link to="/login">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </Link>
          ) }
        </div>
      </div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
        >
			<div className='w-[400px] rounded-xl bg-[#272A35]'>
				<div className='w-full'>
					<div className='h-8 w-8 grid place-content-center rounded-full bg-[#333844] my-2 right-2 absolute top-1 cursor-pointer' onClick={(e)=> setIsOpen(false)}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
						<path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
					</svg>
					</div>
				</div>
				<div className='w-full flex justify-between items-center h-48 text-center gap-4 px-3'>
					<div className='w-full cursor-pointer' onClick={(e)=> handleChangeLanguage('th')}>
						<figure className='w-full text-center'>
							<img className='rounded-xl' src="https://media.istockphoto.com/id/472317757/vector/a-close-up-of-the-flag-of-thailand.jpg?s=612x612&w=0&k=20&c=HYQeiH732Drl0W6ftu7FId9TGkZL66Bk1dOSF_8At_o=" alt="Thai" srcset="" />
						</figure>
						<div className="text-lg text-white">Thai</div>
					</div>
					<div className='w-full cursor-pointer'>
						<figure className='w-full h-20 text-center rounded-xl' onClick={(e)=> handleChangeLanguage('en')}>
							<img className='rounded-xl' src="https://qph.cf2.quoracdn.net/main-qimg-356238bd88b5479c6a89580df509d706" alt="English" srcset="" />
						</figure>
						<div className="text-lg text-white">English</div>
					</div>
					<div className='w-full cursor-pointer'>
						<figure className='w-full h-20 text-center' onClick={(e)=> handleChangeLanguage('km')}>
							<img className='rounded-xl' src="https://cdn.britannica.com/27/4027-050-15A75C70/Flag-Cambodia.jpg" alt="Khmer" srcset="" />
						</figure>
						<div className="text-lg text-white">Khmer</div>
					</div>
				</div>
		  </div>
        </Modal>
    </div>
  )
}
