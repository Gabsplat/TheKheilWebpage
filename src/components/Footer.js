import React from 'react'

/* COMPONENTS */
import Img from '../components/Img'

/* SVGS */
import OpenSeaLogo from '../assets/imgs/svg/opensea.svg'
import InstagramLogo from '../assets/imgs/svg/instagram.svg'
import TwitterLogo from '../assets/imgs/svg/twitter.svg'
import DiscordLogo from '../assets/imgs/svg/discord.svg'

function Footer() {
    return (
        <footer className="font-thesans flex flex-col mobile:flex-row text-white justify-between items-center bg-darkgray h-24 pt-5 md:pt-8 pb-4 px-6 tablet:px-12 lg:px-36 xl:px-80 2xl:px-96 landscape:px-6">
                <div className="flex flex-row justify-between w-52">
                    <a rel="noopener noreferrer" target="_blank" href="https://opensea.io/the_kheil"><Img alt="OpenSea Link" className="w-6 cursor-pointer transition ease-in duration-100 transform hover:scale-110" src={OpenSeaLogo}/></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/the_kheil/"><Img alt="Instagram Link" className="w-6 cursor-pointer transition ease-in duration-100 transform hover:scale-110" src={InstagramLogo}/></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://discord.com/invite/QUyB5dTtfg"><Img alt="Discord Link" className="w-6 cursor-pointer transition ease-in duration-100 transform hover:scale-110" src={DiscordLogo}/></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/the_kheil"><Img alt="Twitter Link" className="w-6 cursor-pointer transition ease-in duration-100 transform hover:scale-110" src={TwitterLogo}/></a>
                </div>
                <p className="text-xs tablet:text-sm text-lightgray text-right">Copyright{new Date().getFullYear()}-All rights reserved</p>
        </footer>
    )
}

export default Footer
