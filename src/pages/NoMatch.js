import React from 'react'
import { Link } from 'react-router-dom'


function NoMatch() {
    return (
        <div className="flex flex-col justify-center items-center space-y-5 text-white flex-1">
            <h1 className="text-9xl font-aniron" style={{lineHeight: '1em', margin: 0}}>404</h1>
            <h2 className="text-2xl mobile:text-4xl font-aniron font-bold">Oops.. This page doesn't exist</h2>
            <Link className="text-xl hover:text-gray-200 font-theserif self-start mobile:self-center underline" to="/">Back to home...</Link>
        </div>
    )
}

export default NoMatch
