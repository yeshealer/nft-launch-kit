import { useRouter } from 'next/router'
import React from "react";

const Home = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col items-center py-10 w-full bg-white dark:bg-[#1a202c]'>
            <div className='flex flex-col items-center max-w-[1248px] py-20 md:py-36 mt-20'>
                <div className='text-2xl sm:text-4xl md:text-6xl font-semibold leading-[110%] text-[#1A202C] dark:text-[#FFFFFFEB]'>Meeting scheduling</div>
                <div className='text-2xl sm:text-4xl md:text-6xl font-semibold text-[#48BB78] leading-[110%]'>made easy</div>
                <div className='text-center mt-8 md:mt-14 text-[#718096] font-[ubuntu] font-light px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <button className='bg-[#48BB78] hover:bg-[#38A169] rounded-full mt-8 md:mt-14 px-6 py-2 transition-all' onClick={() => router.push('/collections')}>Collections</button>
            </div>
        </div>
    )
}

export default Home