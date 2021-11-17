import React from 'react'

/* COMPONENTS */
import Img from '../components/Img'

/* IMGS */
import TheVoicesBanner from '../assets/imgs/banners/thevoicesbanner.jpg'
import TheVoicesBannerMedium from '../assets/imgs/banners/thevoicesbanner-medium.jpg'
import TheVoicesBannerSmall from '../assets/imgs/banners/thevoicesbanner-small.jpg'

import AshImage from '../assets/imgs/characters/ash-treearchont.png'
import AlysImage from '../assets/imgs/characters/alys-alacon.png'
import AnaHinImage from '../assets/imgs/characters/ana-hin-malacon.png'
import AkImage from '../assets/imgs/characters/ak-delcon.png'

function VoicesOfTheDomain() {
    return (
        <>
            <div className="relative left-1/2 lg:left-0 w-screen lg:w-full -ml-50vw lg:m-0 overflow-hidden">
                <Img alt="Voices of The Domain Banner" className="h-full w-full" src={TheVoicesBanner} srcset={`${TheVoicesBannerSmall} 443w, ${TheVoicesBannerMedium} 886w, ${TheVoicesBanner} 1772w`} style={{objectFit: 'cover', objectPosition: 'center center'}} />
            </div>
            <div className="mt-16 mobile:mt-20 lg:mt-12 px-0 mobile:px-10 lg:pl-64 lg:pr-0 xl:pl-72 text-base tablet:text-lg font-theserif" style={{textIndent: '1.5rem'}}>
                <p>The Domain archipelago is made up of seven islands, formed from the elevation of the sea floor as a consequence of a colossal crater. The four largest, and which are the outer islands, are: Doryn in the north, Finithas in the west, Morian in the east and The Valley in the south.</p>
                <p>The interior of the crater is flooded by the Ross Sea and has three volcanic islands: Imperitas, the central island of the entire land set and capital of the Domain; Antigua, the island north of Imperitas and south of Doryn; and Arcadia, the island with the smallest surface area, located south of Imperitas and north of The Valley. The latter is also the Archonts’ home and the cradle of the Ancestors’ civilization.</p>
            </div>
            <h1 className="font-aniron mobile:ml-10 lg:ml-0 text-center mobile:text-left py-10 block text-3xl tablet:text-4xl md:text-5xl">Archonts</h1>
            <div className="font-theserif flex flex-col md:flex-row">
                <Img alt="Ash Character" className="self-center w-5/6 mobile:w-1/2 2xl:w-6/12 mobile:pr-8 xl:pr-20 2xl:pr-32" src={AshImage}/>
                <div className="flex-1 flex flex-col justify-end mt-6 md:mt-0">
                    <h2 className="mb-2 mobile:mb-4 lg:mb-2 font-thesans font-bold text-3xl lg:text-4xl text-center md:text-left">Tree Archonts</h2>
                    <p className="lg:mb-4 tablet:text-lg" style={{textIndent: '1.5rem'}}>The tree Archonts are recruited as children by the Order when they have their first manifestations of the Kheil. These children, of both Lilim and Elder origin, go through a test known as The Trial in the Pond, which allows us to discover if they are really capable of being trained as Archonts. Once such training begins, they learn to perceive and manipulate the Kheil in the same way as the other three Archonts’ races. It is a long process that requires centuries of training to learn how to channel it safely and that, in addition, allows to acquire strength, speed, agility and longevity, far beyond those possessed by the common Lilim and Elders.</p>
                </div>
            </div>
            <div className="font-theserif mt-14 flex flex-col md:flex-row-reverse">
                <Img alt="Ana-Hin Character" className="self-center w-full mobile:w-1/2 2xl:w-6/12" src={AnaHinImage}/>
                <div className="flex-1 flex flex-col justify-end mt-6 md:mt-0">
                    <h2 className="mb-2 mobile:mb-4 lg:mb-2 font-thesans font-bold text-3xl lg:text-4xl text-center md:text-right">The Malacons</h2>
                    <p className="text-left md:text-right lg:mb-4 tablet:text-lg" style={{textIndent: '1.5rem'}}>The Malacons, also known as "air Archonts", are the race that dominates the heights. They are characterized by their feathered wings on the back, an enormous capacity for vision, and by having great physical strength and agility superior to the Lilim and Elder. They are already born Archonts and do not need to pass the Trial in the Pond; however, they must also receive training to learn to perceive and channel the Kheil safely. The dominance over the heights of the Malacons is undeniable, but on land they tend to be a little less agile and fast, because their enormous wings make it difficult for them to move. The tree Archonts and those of the air, however, have joint combat strategies that allow them to take advantage of each other's strengths and compensate for their weaknesses.</p>
                </div>
            </div>
            <div className="font-theserif mt-14 flex flex-col md:flex-row">
                <Img alt="Alys Character" className="self-center w-full mobile:w-1/2 2xl:w-5/12" src={AlysImage}/>
                <div className="flex-1 flex flex-col justify-end mt-6 md:mt-0">
                    <h2 className="mb-2 mobile:mb-4 lg:mb-2 font-thesans font-bold text-3xl lg:text-4xl text-center md:text-left">The Alacons</h2>
                    <p className="lg:mb-4 tablet:text-lg" style={{textIndent: '1.5rem'}}>Alacons, also known as “small winged Archonts”, are characterized by their small size, their wings similar to those of butterflies and their great hearing capacity. It is the only one of the four races that are not warriors, they use the Kheil only for defensive purposes. They are also trained from childhood, however, to learn to perceive and manipulate it. As far as is known, the Alacons are the primal Archonts’ race. They already existed when the Ancestors still inhabited the world and witnessed the creation of the Malacons and Delcons. The two races of Archonts received their knowledge to channel the Kheil from the Alacons.</p>
                </div>
            </div>
            <div className="font-theserif mt-14 mb-14 flex flex-col md:flex-row-reverse">
                <Img alt="Ak Character" className="self-center w-full mobile:w-1/2 2xl:w-6/12" src={AkImage}/>
                <div className="flex-1 flex flex-col justify-end mt-6 md:mt-0">
                    <h2 className="mb-2 mobile:mb-4 lg:mb-2 font-thesans font-bold text-3xl lg:text-4xl text-center md:text-right">The Delcons</h2>
                    <p className="text-left md:text-right lg:mb-4 tablet:text-lg" style={{textIndent: '1.5rem'}}>The Delcons, also known as the “sea Archonts”, are characterized by their long tails and fins, with which they move through the water with extreme agility, their ability to perceive vibrations in the water and their enormous strength, which is far superior to that of any other Archont. The Delcons are trained from childhood to manipulate and channel the Kheil, they are also born Archonts and do not need the Trial in the Pond. In the same way as the Malacons, who watch Arcadia from above, the Delcons do so from the sea. There is no ship capable of withstanding their attacks for long and they have managed to develop combined attack strategies with other Archonts to face the huge invading fleets.</p>
                </div>
            </div>
        </>
    )
}

export default VoicesOfTheDomain
