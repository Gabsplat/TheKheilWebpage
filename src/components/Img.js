import { useState, useEffect } from 'react'

/* IMGS */
import FallbackCard from '../assets/imgs/fallbacks/fallback-card.png'
import FallbackChapter from '../assets/imgs/fallbacks/fallback-chapter.png'
import FallbackOther from '../assets/imgs/fallbacks/fallback-other.png'

function Img({ src, className, style, srcset, lazy, fallback, alt}) {
    const [fallbackImg, setFallbackImg] = useState(FallbackCard);

    useEffect(() => {
        switch(fallback){
            case 'card':
                setFallbackImg(FallbackCard);
                break;
            case 'chapter':
                setFallbackImg(FallbackChapter);
                break;
            default:
                setFallbackImg(FallbackOther);
                break;
            
        }
    }, []);

    return (
        <img style={style} className={className} loading={lazy ? 'lazy' : 'eager'} src={src} srcset={srcset} alt={alt} onError={(e) => {e.target.onerror = null; e.target.src=fallbackImg}}/>
    )
}

export default Img
