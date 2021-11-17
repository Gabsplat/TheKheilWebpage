import React from 'react'

/* COMPONENTS */
import Img from '../components/Img'

/* IMG */
import WolframImage from '../assets/imgs/characters/wolfram-civilization.png'


function TheCivilization() {
    return (
        <div className="mt-4 md:mt-10 lg:mt-16 mb-10 font-theserif">
            <h1 className="font-aniron hidden lg:block mb-14 text-5xl">The Archonts’ Culture</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full mobile:w-1/2 lg:w-4/12 tablet:self-end lg:self-auto">
                    <Img alt="Wolfram Character" src={WolframImage}/>
                </div>
                <div className="w-full lg:w-8/12">
                    <h1 className="font-aniron text-3xl tablet:text-5xl block lg:hidden p-0 md:px-16 my-10">The Archonts’ Culture</h1>
                    <div className="text-lg" style={{textIndent: '1.5rem'}}>
                        <p>Before my arrival in Arcadia, it was my understanding that the Archonts were wild and violent. In the Domain they were said to be primitive and used dangerous magic, which they called “Kheil”. But it was a big surprise when I met them and found out what they really were like.</p>
                        <p>Archonts have three different habitats and share the same traditions. They are four twinned races that live in complete harmony. They call each other “brothers and sisters”. The sea Archonts inhabit the interior of the bay north of the island, in beautiful structures that they call Delcons’ Den. Ascending the immense western cliff, the Guardian's Cliff, is the home of the air Archonts, the Malacon Nest, which is the most imposing set of buildings in all of Arcadia. Finally, at the top of the cliff, is the tree Archonts’ Village and the Alacons’ Hives, built among the huge jungle grove.</p>
                        <p>Arcadia is a jungle; it is hot and humid. The small area of the island, however, allows the sea current to circulate from one end to the other and the dense flora helps to maintain a comfortable temperature.</p>
                        <p>At first, I was quite shocked to see that they only wore loincloths, some of them went barefoot like commoners and even walked naked everywhere. They wear the garments as ornamentation, as the climate does not force them to protect their bodies from the cold or the scorching rays of Hermos.</p>
                        <p>They do not have heavy machinery to ruin their environment like the Lilim have in the Domain. Archonts protect their home from all the damage that their civilization could cause to the native flora and fauna. They live in complete harmony with their environment. Every time they cut down a tree to extract its wood, they are busy planting a new one in its place. Farmed animals are well fed and protected from predators. They make sure to kill just the necessary ones to feed themselves, but allow them to reproduce so as not to have to hunt the wild animals that inhabit the interior of the island in a massive way.</p>
                        <p>Archonts have systems of pipes, ponds and protected channels so that clean water circulates through the Village, the Nest and the Den, which they use to drink, cook and clean themselves daily. Unlike the Lilim, they are very neat and try to have all the sanitary conditions to prevent diseases.</p>
                        <p>With the first impression, one would think that they are wild and primitive, but, as time when by, I discovered that they were more civilized and harmonious than I had heard. They believe in "equality" among all: there are no differences between men and women. They all wear the same clothes, do the same jobs, all train together and have the same rights.</p>
                        <p>Their society is stratified in: Masters, who are the highest authority and are in charge of the academic education, upbringing and training of their disciples; the Senior Disciples, who are those who are close to becoming Masters and waiting for their own disciples; The Minor Disciples, who are those who have reached a certain level in their knowledge to channel the Kheil and manipulate it, have received the basic academic instruction that every Archont must have and master combat techniques; and the Little Disciples, who are the ones who are just in the initial stages of their training and education.</p>
                        <p>Archonts don't have a religion. They believe that the Kheil is the "source of life" and that all souls are united to it. When living beings die, their souls "become one with the Kheil" and are the energy that the Archonts are able to perceive and manipulate. They have two rites: The Trial in the Pond, through which they discover if the Lilim and Elder can be trained as tree Archonts; and the funeral rituals, when the deceased burn on the pyres with the traditional song, under the light of Maghda, the white moon, and are guided by the light of the Kheil that their brothers and sisters project to accompany them on their journey. The rest of their customs and traditions are based on festivals and celebrations that they accompany with banquets and artistic manifestations that they rehearse together.</p>
                        <p>As time went by, I discovered that their society is far more advanced than that of the Domain and that they were able to stay out of all the banalities by which the Lilim and the Elder slaughter each other.</p>
                        <p>This story would be endless if I describe every aspect of their daily life; that is why I prefer my brothers, sisters and myself to tell you, little by little, from the point of view of each one of us.</p>
                        <div className="font-theserifcaps mt-5 tablet:mt-0 p-0 tablet:p-5 text-base tablet:text-lg text-left font-bold" style={{textIndent: 0}}>
                            <p>Wolfram Von Windadler</p>
                            <p>Member of the tree Archonts’ Order</p>
                            <p>Minor Disciple of Master Arslan, the Leader of the Order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheCivilization
