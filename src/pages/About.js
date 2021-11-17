import React from 'react'

/* COMPONENTS */
import Img from '../components/Img'

/* IMGS */
import JaHin from '../assets/imgs/banners/ja-hin-sagitta.jpg'
import JaHinMedium from '../assets/imgs/banners/ja-hin-sagitta-medium.jpg'
import JaHinSmall from '../assets/imgs/banners/ja-hin-sagitta-small.jpg'

function About() {
    return (
        <>
            <div className="relative left-1/2 lg:left-0 w-screen lg:w-full -ml-50vw lg:m-0 overflow-hidden">
                <Img alt="Ja-Hin Sagitta Banner" className="h-full w-full" src={JaHin} srcset={`${JaHinSmall} 480w, ${JaHinMedium} 960w, ${JaHin} 1920w`} style={{objectFit: 'cover', objectPosition: 'center center'}} />
            </div>
            <h1 className="text-3xl mobile:text-5xl xl:text-6xl font-aniron mt-6">What this is about:</h1>
            <div className="mb-14 mt-4 mobile:mt-8 lg:mt-12 px-0 mobile:px-10 lg:pl-64 lg:pr-0 xl:pl-72 text-base tablet:text-lg font-theserif" style={{textIndent: '1.5rem'}}>
                <p>“Voices of the Domain” is a compilation of stories and characters who live in a fantasy world full of honor, injustice, loyalty, corruption, passion and power.</p>
                <p>The first issue of this graphic novel is "The Rebirth of the Kheil", where the Archonts’ disciples narrate how they arrived at the tree Archonts’ Order being only boys and girls.</p>
                <p>Each character is presented at different stages of their life and tells us how they experienced having reached this idyllic civilization, but that it is always prepared to face those enemies who seek to conquer Arcadia, the Archonts’ home.</p>
                <p>The collectible chapters are grouped by characters and each one of them reveals their own motivations for the life that they had to lead, as well as the difficulties they had to go through to reach their destiny.</p>
                <p>Trading cards are representations and portraits of characters, revealing signs of their character and personality. The cards are grouped into categories:</p>
                <ol className="list-decimal list-inside">
                    <li>Common cards in edition of 500 each.</li>
                    <li>Rare cards in edition of 100 each.</li>
                    <li>Special cards in edition of 50 each.</li>
                    <li>Singular cards in edition of 10 each.</li>
                    <li>Unique cards in edition of 1 each.</li>
                </ol>
                <p>The cards are collectible and interchangeable and we have generated a Discord server for it.</p>
                <p>Communication channels on Twitter and Instagram are also available.</p>
                <p>We hope you enjoy this unique, fantastic NFT world and join the Archonts' fight to protect their home, as well as their brothers and sisters.</p>
            </div>
        </>
    )
}

export default About
