import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";

/* SVGS */
import OpenSeaLogo from '../assets/imgs/svg/opensea.svg'
import BackButton from '../assets/imgs/svg/back-button.svg'

/* IMGS */
import FallbackImg from '../assets/imgs/fallbacks/fallback-card.png'


function Card() {
    const history = useHistory();
    const search = useLocation(); 
    const [cardData, setCardData] = useState({});

    useEffect(() =>{
        if(search.state !== undefined){
            setCardData(JSON.parse(search.state.data));
        } else{
            let characterId = search.pathname.split('/')[2]
            fetchCardById(characterId);
        }
    }, []);

    const fetchCardById = (id) => {
        fetch(`/api?cards=1&id=${id}`)
            .then(response => response.json())
            .then(data =>{
                if(data.length === 0){
                    history.push("/cards");
                } else{
                    setCardData(data[0]);
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            {Object.keys(cardData).length > 0
            ?
            <div className="relative grid grid-cols-1 mobile:grid-cols-2 grid-rows-mobile mobile:grid-rows-2t md:grid-rows-2m h-5/6 w-full mobile:gap-4 mb-20 mobile:mb-10">
                <span onClick={() => {history.goBack()}} className="absolute cursor-pointer top-0 right-0 w-10 h-10 z-30">
                    <img alt="back button" src={BackButton}/>
                </span>

                <div className="col-start-1 row-start-2 col-end-2 row-end-1 mobile:row-start-1 mobile:row-end-4 z-20 h-full w-full md:flex md:justify-center md:items-center">
                    <div className="flex items-center w-full h-full mobile:h-5/6 lg:w-5/6 lg:h-full">
                        <img onError={(e) => {e.target.onerror = null; e.target.src=FallbackImg}} alt={cardData.nombrePersonaje + ' Character'} className="w-full" src={cardData.hasOwnProperty('ruta') ? process.env.PUBLIC_URL + `/api/imgs/cards/${cardData.ruta}` : FallbackImg} />
                    </div>
                </div>
                <div className="row-start-2 mobile:row-start-1 mobile:col-start-2 pt-0 mobile:pt-20 w-full overflow-hidden">
                    <h1 className="font-thesans font-bold text-4xl smallTablet:text-5xl lg:text-6xl">
                        {cardData.titulo}<br/>
                    </h1>
                    <h2 className="font-thesans font-bold text-3xl smallTablet:text-4xl lg:text-5xl mt-5">{cardData.nombrePersonaje}</h2>

                    <p className="text-sm mobile:text-base mt-7">{cardData.nombreCarta} Card | Edition of {cardData.stockCarta}</p>
                    <h3 className="text-base mobile:text-xl font-theserifcaps font-bold mt-6">Description</h3>
                    <p className="text-sm mobile:text-lg mb-10 pr-6 mobile:pr-0 font-theserif">{cardData.descripcion}</p>
                </div>
                <div className="row-start-3 col-start-1 mobile:row-start-2 mobile:col-start-1 mobile:col-span-2">
                    <div className="absolute lg:relative h-44 lg:h-36 flex-1 mb-10 left-1/2 lg:left-0 -ml-50vw lg:ml-0 w-screen lg:w-full" style={{background: '#2f2f2f'}}></div>
                </div>
                <div className="row-start-3 col-start-1 mobile:row-start-2 mobile:col-start-1 mobile:col-end-3 smallTablet:row-start-2 smallTablet:col-start-2 z-10 ">
                    <div className="mobile:h-44 lg:h-36 flex flex-col justify-between lg:justify-start flex-1 p-5 pl-0">
                        <h2 className="text-xl font-theserifcaps font-bold">Market Price</h2>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <h1 className="font-theserifcaps text-4xl">{cardData.precio} ETH</h1>
                            <a rel="noopener noreferrer" target="_blank" href={cardData.url} className="flex flex-row items-center justify-between border-2 mt-5 mobile:mt-0 w-5/6 mobile:w-3/5 smallTablet:w-5/6 lg:w-52 2xl:w-60 h-8 cursor-pointer">
                                <img alt="OpenSea Logo" className="w-6 ml-5" src={OpenSeaLogo}/>
                                <h3 className="text-lg font-thesans mr-2">View on OpenSea</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            :
            <svg className="spinner self-center" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
            }
        </>
    )
}

export default Card;