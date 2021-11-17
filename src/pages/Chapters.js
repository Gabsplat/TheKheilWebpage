import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

/* COMPONENTS */
import Img from '../components/Img'

/* IMGS */
import FallbackImg from '../assets/imgs/fallbacks/fallback-chapter.png'

const selectStyles = {
    control: (styles, state) => ({
        ...styles, 
        width: state.selectProps.isBigger ? '12rem' : '8rem',
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
    menu: (styles, state) => ({
        ...styles, 
        width: state.selectProps.isBigger ? '12rem' : '8rem',
        backgroundColor: 'black', 
        border: '2px solid', 
        borderRadius: 'none'
    }),
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

function Chapters() {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedCharacter, setSelectedCharacter] = useState({value: -1, label: 'All'});
    const [selectedBook, setSelectedBook] = useState({value: -1, label: 'All'});
    const [chapters, setChapters] = useState([]);
    const [books, setBooks] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchBooks();
        fetchCharacters();
        fetchChapters();

        setIsLoading(false);
    }, []);

    const fetchChaptersByCharacter = (characterId) => {
        setIsLoading(true);
        fetch(`/api?chapters=1&character=${characterId}`)
            .then(response => response.json())
            .then(data =>{
                setChapters(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchChaptersByBook = (book) => {
        setIsLoading(true);
        fetch(`/api?chapters=1&libro=${book}`)
            .then(response => response.json())
            .then(data =>{
                setChapters(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchChaptersByBookAndCharacter = (book, character) => {
        setIsLoading(true);
        fetch(`/api?chapters=1&character=${character}&libro=${book}`)
            .then(response => response.json())
            .then(data =>{
                setChapters(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchChapters = () => {
        setIsLoading(true);
        fetch('/api?chapters=1')
            .then(response => response.json())
            .then(data =>{
                setChapters(data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchBooks = () => {
        setIsLoading(true);
        fetch('/api?chapters=0&getLibros=1')
            .then(response => response.json())
            .then(data => {
                setBooks([{value: -1, label: 'All'},...data]);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const fetchCharacters = () => {
        fetch('/api?chapters=0&getPersonajes=1')
            .then(response => response.json())
            .then(data => {
                setCharacters([{value: -1, label: 'All'},...data]);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const handleSelectedCharacter = (selection) => {
        if(selectedBook.value > -1){
            // BOOK TYPE -> DIFF ALL
            if(selection.value > -1){
                fetchChaptersByBookAndCharacter(selectedBook.value, selection.value);
            } else{
                fetchChaptersByBook(selectedBook.value);
            }
        } else{
            // BOOK TYPE -> ALL
            if(selection.value > -1){
                fetchChaptersByCharacter(selection.value);
            } else{
                fetchChapters();
            }
        }
        setSelectedCharacter(selection);
    }

    const handleSelectedBook = (selection) => {
        if(selectedCharacter.value > -1){
            // CHARACTER TYPE -> DIFF ALL
            if(selection.value > -1){
                fetchChaptersByBookAndCharacter(selection.value, selectedCharacter.value);
            } else{
                fetchChaptersByCharacter(selectedCharacter.value);
            }
        } else{
            // CHARACTER TYPE -> ALL
            if(selection.value > -1){
                fetchChaptersByBook(selection.value);
            } else{
                fetchChapters();
            }
        }
        setSelectedBook(selection);
    }

    return (
        <>
            <h1 className="mt-4 md:mt-10 lg:mt-16 text-4xl mobile:text-5xl xl:text-6xl font-aniron">Chapters</h1>
            <div className="flex flex-col mobile:flex-row space-y-3 mobile:space-y-0 mobile:space-x-3 self-start lg:self-end items-start mobile:items-center mt-4">
                <h2 className="font-theserifcaps font-bold">Filter:</h2>
                <Select onChange={handleSelectedCharacter} options={characters} isSearchable={false} isBigger={false} value={selectedCharacter} styles={selectStyles}/>
                <Select onChange={handleSelectedBook} options={books} isSearchable={false} isBigger={true} value={selectedBook} styles={selectStyles}/>
            </div>
            
            <div className={`mt-4 mb-20 ${isLoading ? 'flex justify-center items-center flex-1' : 'grid p-7 mobile:p-0 gap-5 auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                {isLoading 
                ?
                (<svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>)
                :
                (chapters.length > 0 
                    ?
                    chapters.map((obj) => {
                        return(
                            <div key={obj.Id} className="inline-block">
                                <Link to={{pathname: `/chapters/${obj.Id}`, state: {data:`${JSON.stringify(obj)}`}}} className="inline-block">
                                    <Img lazy={true} src={process.env.PUBLIC_URL + `/api/imgs/chapters/${obj.ruta}`} alt={obj.nombrePersonaje + ' Chapter'} />
                                </Link>
                            </div>
                        );
                    })
                    :
                    (<h1>No chapters were found...</h1>)
                )
                }
            </div>
        </>
    )
}

export default Chapters;