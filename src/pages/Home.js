import React, { useEffect } from 'react'

/* COMPONENTS */
import Img from '../components/Img'

/* IMGS */
import TheKheilLogo from '../assets/imgs/TheKheilLogo.png'
import LogoAnim from '../assets/imgs/LogoAnim.gif'

function Home() {

    useEffect(() => {
        document.body.classList.add('body-background');

        return () => {
            document.body.classList.remove('body-background');
        }
    }, []);

    return (
        <div className="flex-1 flex flex-col h-full text-white">
            {/* MAIN CONTENT - HOME */}
            <section className="font-theserif flex-1 flex justify-center md:justify-start items-end">
                <div className="md:mb-10 lg:mb-12 xl:mb-16 w-60 md:w-full lg:w-5/12 xl:w-3/6 2xl:w-5/12 flex flex-col items-center justify-center text-center text-base tablet:text-lg lg:text-xl font-openserif">
                    <div className="relative w-full md:w-7/12 lg:w-full mb-3">
                        <Img className="absolute left-0 bottom-0 h-3/5" alt="Animated Logo" src={LogoAnim}/>
                        <Img alt="The Kheil Logo" src={TheKheilLogo}/> {/* FULL LOGO */}
                    </div>
                    <p className="md:w-3/6 lg:w-auto">
                        “The Kheil flows all over you, my child.
                        The amber will bathe your body.
                    </p>
                    <p>
                        The Kheil will glow around you, and the truth will out.
                        <br/>
                        A new member of the Order will be arriving home.”
                    </p>
                </div>
            </section>

            {/* FOOTER - HOME */}
            <footer className="flex items-center justify-center lg:justify-start h-18 py-8 tablet:px-4 md:px-0">
                <p className="inline text-xs tablet:text-sm text-lightgray">Copyright{new Date().getFullYear()}-All rights reserved</p>
            </footer>
        </div>
    )
}

export default Home;