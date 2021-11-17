import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

/* COMPONENTS */
import Img from '../components/Img'


const selectStyles = {
    control: (styles) => ({
        ...styles, 
        width: '8rem',
        backgroundColor: 'black',
        border: '2px solid white', 
        borderRadius: 'none',
        boxShadow: 'none',
        fontFamily: 'TheSerif',
        fontWeight: 'bold',
        '&:hover': {
            border: '2px solid white', 
            boxShadow: 'none',  
        }
    }),
    menu: styles => ({...styles, width: '8rem', backgroundColor: 'black', border: '2px solid', borderRadius: 'none'}),
    option: (styles, state) => {
        const fontWeight = (state.isFocused || state.isSelected) ? 'bold' : 'normal';
        const backgroundColor = (state.isFocused) ? '#141414' : 'none';
        return {...styles, backgroundColor, fontWeight, fontFamily: 'TheSerif'};
    },
    singleValue: styles => ({
        ...styles,
        color: 'white'
    }),
    input: styles => ({
        ...styles,
        color: 'white'
    }),
    noOptionsMessage: styles => ({
        ...styles,
        color: 'white'
    }),
};

function Cards() {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedCharacter, setSelectedCharacter] = useState({value: -1, label: 'All'});
    const [selectedCardType, setSelectedCardType] = useState({value: -1, label: 'All'});
    const [cards, setCards] = useState([]);
    const [cardTypes, setCardTypes] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCardTypes();
        fetchCharacters();
        fetchCards();
    }, []);

    const fetchCardsByCharacter = (characterId) => {
        setIsLoading(true);
        fetch(`/api?cards=1&character=${characterId}`)
            .then(response => response.json())
            .then(data =>{
                setCards(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchCardsByCardType = (cardType) => {
        setIsLoading(true);
        fetch(`/api?cards=1&tipocarta=${cardType}`)
            .then(response => response.json())
            .then(data =>{
                setCards(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchCardsByCardTypeAndCharacter = (cardType, character) => {
        setIsLoading(true);
        fetch(`/api?cards=1&character=${character}&tipocarta=${cardType}`)
            .then(response => response.json())
            .then(data =>{
                setCards(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchCards = () => {
        setIsLoading(true);
        fetch('/api?cards=1')
            .then(response => response.json())
            .then(data =>{
                setCards(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchCardTypes = () => {
        setIsLoading(true);
        fetch('/api?cards=0&getTipocarta=1')
            .then(response => response.json())
            .then(data => {
                setCardTypes([{value: -1, label: 'All'},...data]);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchCharacters = () => {
        fetch('/api?cards=0&getPersonajes=1')
            .then(response => response.json())
            .then(data => {
                setCharacters([{value: -1, label: 'All'},...data]);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const handleSelectedCharacter = (selection) => {
        if(selectedCardType.value > -1){
            // CARD TYPE -> DIFF ALL
            if(selection.value > -1){
                fetchCardsByCardTypeAndCharacter(selectedCardType.value, selection.value);
            } else{
                fetchCardsByCardType(selectedCardType.value);
            }
        } else{
            // CARD TYPE -> ALL
            if(selection.value > -1){
                fetchCardsByCharacter(selection.value);
            } else{
                fetchCards();
            }
        }
        setSelectedCharacter(selection);
    }

    const handleSelectedCardType = (selection) => {
        if(selectedCharacter.value > -1){
            // CHARACTER TYPE -> DIFF ALL
            if(selection.value > -1){
                fetchCardsByCardTypeAndCharacter(selection.value, selectedCharacter.value);
            } else{
                fetchCardsByCharacter(selectedCharacter.value);
            }
        } else{
            // CHARACTER TYPE -> ALL
            if(selection.value > -1){
                fetchCardsByCardType(selection.value);
            } else{
                fetchCards();
            }
        }
        setSelectedCardType(selection);
    }

    return (
        <>
            
            <h1 className="mt-4 md:mt-10 lg:mt-16 text-4xl mobile:text-5xl xl:text-6xl font-aniron">Cards</h1>
            <div className="flex flex-col mobile:flex-row space-y-3 mobile:space-y-0 mobile:space-x-3 self-start lg:self-end items-start mobile:items-center mt-4">
                <h2 className="font-theserifcaps font-bold">Filter:</h2>
                <Select onChange={handleSelectedCharacter} options={characters} isSearchable={false} value={selectedCharacter} styles={selectStyles}/>
                <Select onChange={handleSelectedCardType} options={cardTypes} isSearchable={false} value={selectedCardType} styles={selectStyles}/>
            </div>
            
            <div className={`mt-4 mb-20 ${isLoading ? 'flex justify-center items-center flex-1' : 'grid p-7 mobile:p-0 gap-5 auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                {isLoading 
                ?
                (<svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>)
                :
                (cards.length > 0 
                    ?
                    cards.map((obj) => {
                        return(
                            <div key={obj.Id} className="inline-block">
                                <Link to={{pathname: `/cards/${obj.Id}`, state: {data:`${JSON.stringify(obj)}`}}} className="inline-block">
                                    <Img src={process.env.PUBLIC_URL + `/api/imgs/cards/${obj.ruta}`} alt={obj.nombrePersonaje + ' Card'} />
                                </Link>
                            </div>
                        );
                    })
                    :
                    (<h1>No cards were found...</h1>)
                )
                }
            </div>
        </>
    )
}

export default Cards;