import React from 'react'
import PageNotFound from "./dist/img/404.png"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={PageNotFound} className="w-50" alt="404"/>
        </div>
    )
}

export default NotFound
