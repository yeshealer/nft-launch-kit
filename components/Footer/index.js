import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
    const FooterText = 'text-md text-[#2D3748] dark:text-[#E2E8F0] font-[ubuntu] opacity-90 dark:opacity-100'
    const router = useRouter()
    return (
        <div className="w-full flex flex-col items-center bg-white dark:bg-[#171923]">
            <div className="flex flex-col items-center p-4">
                <div className="font-bold text-xl text-[#1A202C] dark:text-white opacity-90 dark:opacity-100">NFTLaunchKit</div>
                <div className="flex items-center mt-4">
                    <div className={FooterText} onClick={() => router.push('/')}>Home</div>
                    <div className={`${FooterText} ml-6 cursor-pointer hover:underline`} onClick={() => router.push('/collections')}>Collections</div>
                    <div className={`${FooterText} ml-6 cursor-pointer hover:underline`}>About</div>
                    <div className={`${FooterText} ml-6 cursor-pointer hover:underline`}>Contact</div>
                </div>
            </div>
            <div className="w-full text-center border-t border-[#E2E8F0] dark:border-[#2D3748] p-4">
                <div className={FooterText}>© 2022 NFTLaunchKit(Test Task). All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer