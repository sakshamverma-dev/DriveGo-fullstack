import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Banner = () => {
    const navigate = useNavigate()
    const { user, isOwner, setShowLogin, axios, setIsOwner } = useAppContext()
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleListCarClick = () => {
        if (!user) {
            setShowLogin(true)
            return
        }
        setShowModal(true)
    }

    const handleProceed = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.post('/api/owner/change-role')
            if (data.success) {
                setIsOwner(true)
                toast.success(data.message)
                setShowModal(false)
                navigate('/owner')
                scrollTo(0, 0)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

                <div className='text-white'>
                    <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>
                    <p className='mt-2'>Monetize your vehicle effortlessly by listing it on DriveGo.</p>
                    <p className='max-w-130'>We take care of insurance, driver verification and secure payments – so you can earn passive income, stress-free.</p>
                    <button onClick={handleListCarClick} className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'>
                        List your car
                    </button>

                </div>

                <img src={assets.banner_car_image} alt="car" className='max-h-45 mt-10' />
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4'>
                    <div className='bg-white rounded-lg p-8 max-w-sm w-full shadow-xl'>
                        <div className='text-center'>
                            <h3 className='text-2xl font-semibold text-gray-800 mb-3'>Ready to List Your Car?</h3>
                            <p className='text-gray-600 mb-6'>Now you can list your cars and start earning passive income with DriveGo!</p>
                            
                            <div className='flex gap-4'>
                                <button onClick={() => setShowModal(false)} disabled={isLoading} className='flex-1 px-4 py-2.5 border border-borderColor text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium cursor-pointer disabled:opacity-50'>
                                    Cancel
                                </button>
                                <button onClick={handleProceed} disabled={isLoading} className='flex-1 px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dull transition-all font-medium cursor-pointer disabled:opacity-50'>
                                    {isLoading ? 'Processing...' : "Let's Go"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Banner
