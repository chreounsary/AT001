import React,{useEffect} from 'react'
import LeftSidebar from './LeftSidebar'
import Header from './Header'
import { getCurrentLang, getCurrentUser, setCurrentLang } from '../utils/auth'
import { useDispatch } from 'react-redux'
import { storeUser } from '../features/authSlice'
import { useTranslation } from 'react-i18next'
function Layout({children}) {
	const { t, i18n } = useTranslation()
	const dispatch = useDispatch()
	const handleData = async() =>{
		const auth = await getCurrentUser();
		if(auth !== null && auth !== undefined){
			dispatch(storeUser({data: auth}))
		}
	}
	const handleChangeLanguage = async (setLang) => {
        i18n.changeLanguage(setLang)
    }
  	useEffect(() => {
    	handleData()
		let dLang = getCurrentLang();
		if(dLang){
			handleChangeLanguage(dLang)
		}
 	 }, [])
  	return (
		<div className='flex h-full bg-[#1c1f24] max-w-full overflow-hidden'>
			<LeftSidebar />
			<div className='w-full'>
				<Header />
				<div className='max-w-full max-auto'>
					{children}
				</div>
			</div>
		</div>
  )
}

export default Layout