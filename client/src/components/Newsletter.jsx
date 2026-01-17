import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'

const Newsletter = () => {
    const { user, setShowLogin, axios } = useAppContext()
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // Check subscription status on mount and when user changes
    useEffect(() => {
        if (user) {
            checkSubscriptionStatus()
        }
    }, [user])

    // Check if user is already subscribed
    const checkSubscriptionStatus = async () => {
        try {
            const { data } = await axios.get('/api/newsletter/check-status')
            if (data.success) {
                setIsSubscribed(data.isSubscribed)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    // Simple confetti effect using canvas
    const triggerConfetti = () => {
        const canvas = document.createElement('canvas')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        canvas.style.position = 'fixed'
        canvas.style.top = '0'
        canvas.style.left = '0'
        canvas.style.pointerEvents = 'none'
        canvas.style.zIndex = '9999'
        document.body.appendChild(canvas)

        const ctx = canvas.getContext('2d')
        const particles = []

        // Create confetti particles
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 8,
                vy: Math.random() * 5 + 3,
                color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'][Math.floor(Math.random() * 5)],
                size: Math.random() * 4 + 2
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            particles.forEach((p, index) => {
                p.y += p.vy
                p.x += p.vx
                p.vy += 0.1 // gravity
                
                if (p.y > canvas.height) {
                    particles.splice(index, 1)
                }

                ctx.fillStyle = p.color
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            })

            if (particles.length > 0) {
                requestAnimationFrame(animate)
            } else {
                document.body.removeChild(canvas)
            }
        }

        animate()
    }

    const handleSubscribe = async (e) => {
        e.preventDefault()

        // Check if user is logged in
        if (!user) {
            toast.error('Please login to subscribe')
            setShowLogin(true)
            return
        }

        // Check if already subscribed
        if (isSubscribed) {
            toast.error('You are already subscribed!')
            return
        }

        setIsLoading(true)
        try {
            const { data } = await axios.post('/api/newsletter/subscribe')
            if (data.success) {
                setIsSubscribed(true)
                triggerConfetti()
                toast.success(data.message)
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
        <div className="flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            
            {user ? (
                <form onSubmit={handleSubscribe} className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                    <div className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500 flex items-center bg-gray-50">
                        {user.email}
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubscribed || isLoading}
                        className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed ✓' : 'Subscribe'}
                    </button>
                </form>
            ) : (
                <div className="max-w-2xl w-full">
                    <button 
                        onClick={() => setShowLogin(true)}
                        className="md:px-12 px-8 py-3 text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md w-full"
                    >
                        Login to Subscribe
                    </button>
                </div>
            )}
        </div>
    )
}

export default Newsletter

