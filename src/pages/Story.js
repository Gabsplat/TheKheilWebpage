import React from 'react'

/* IMG */
import KaiImage from '../assets/imgs/characters/kai-story.png'


function Story() {
    return (
        <div className="mt-4 md:mt-10 lg:mt-16 mb-20 font-theserif">
            <h1 className="font-aniron pb-10 text-6xl hidden lg:block">Year 1</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-row lg:flex-col items-end w-full lg:w-2/6">
                    <div className="w-5/12 lg:w-full">
                        <h1 className="font-aniron py-10 text-right block text-3xl tablet:text-4xl md:text-5xl lg:hidden">Year 1</h1>
                        <h2 className="font-bold italic text-right text-sm tablet:text-lg md:text-xl">"The seed of darkness will germinate and the shadow of death will claim the life of every human in our world as its own"</h2>
                    </div>
                    <img className="w-7/12 pl-4 lg:pl-0 lg:w-full lg:h-auto" src={KaiImage} alt="Character Kai" />
                </div>
                <div className="w-full mt-10 lg:mt-0 lg:w-4/6 p-0 tablet:pl-4 text-lg" style={{textIndent: '1.5rem'}} >
                    <p>Ancients announced that the Daelan threat would invade us, but how did they know? Well, nobody knows. These beings look like tall men, dressed in black robes, who only appear when Hermos stops illuminating the skies and the night opens its way before our eyes. They are suspended in the air, they do not have legs, and the arrowheads and the edge of the swords pierce them like smoke, without even damaging them. They are not made of flesh, they do not have skin or bones. They are murderous shadows armed with swords that radiate a green light identical to their eyes, which hide in the darkness of their hoods. The Daelan seem out of a nightmare, advancing in hordes devastating villages, towns, cities and nations. They have no mercy, they make no distinction between men, women, children or the elderly, and they do not consider whether they are armed, defenseless or scared. We are all their prey.</p>
                    <p>We discovered the advance of this threat when our Archont brothers and sisters first stumbled upon them in the cold white lands of North Elhinos. They were witnesses to the massacres and, like all Archonts, they confronted them. The common weapons of the Elder and Lilim could not harm the Daelan, but our Kheil manipulation abilities proved effective against them. There were too many, however.</p>
                    <p>The shadow of death advanced over Elhinos to the southeast and southwest. They invaded Abassia and Iridis. They continued south and Adria fell. Tens of thousands of Lilim and Elders refugees fled west in their boats, crossed the Warm Sea, and reached the Domain by landing at Morian.</p>
                    <p>Among the refugees, the Daelan arrived. Ships full of corpses crashed into the docks of the Eastern Nation and, at night, the wraiths advanced on the coastal cities. The threat had reached the Domain and we the Archonts decided to intervene.</p>
                    <p>We chose to negotiate a truce with the rulers of the Domain, the Principality Von Geierstein, and thus cease our old rivalries to unite against the invasion that threatened everyone equally.</p>
                    <p>The Archonts are divided into four races: the Malacons, the Delcons, the Alacons and the tree Archonts. I was the Leader of the latter and, as such, the representative of my Order before the Arcadian Conclave. We agreed that if the Daelan had made it to Morian, the eastern island, nothing guaranteed that the other six islands in the Domain would be safe, including Arcadia: our home.</p>
                    <p>The Principality decided to "isolate" the Domain from the rest of the continents. They put their huge ships to guard the seas to prevent any vessels from reaching their shores. That was the beginning of the period that we would know as "The Isolation". I was the Leader of the tree Archonts’ Order, but I was also an advanced Master in age. It was impossible for me to accompany my brothers and sisters in the fight against the Daelan, I would only have been a hindrance. I said goodbye those who were my disciples since childhood: Parys and Orjhun; they were already Masters and ready for combat, however, only Parys returned.</p>
                    <p>The four races of my Archont brothers and sisters were successful, and the Daelan were unable to advance beyond the coastal cities of Morian. As a preventive measure, the isolation continued and, as time passed, boats with refugees stopped arriving. What happened to the Lilim and Elders of the other continents? We do not know. The years passed and, in search of answers, the Principality organized expeditions, but none of them returned. And what do we Archonts gain? Extending the truce "forever", even though we knew it would not be eternal. We bought enough time, however, to recover from the losses we suffered protecting the Domain from the Daelan. The last year of the threat, and with the Domain isolated from the rest of the world, was year 1 after isolation.</p>
                    <div className="font-theserifcaps mt-5 tablet:mt-0 p-0 tablet:p-5 text-base tablet:text-lg text-left font-bold" style={{textIndent: 0}}>
                        <p>Kai Bin Durihan</p>
                        <p>Leader of the tree Archonts’ Order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story

