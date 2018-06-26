import React, {Component} from 'react';
import GifPlayer from 'react-gif-player';

 const LoadingView = ()=>{
    return (
        <div className="loading-container">
        <div className="loading-view">
        <GifPlayer gif="../img/loadingView.gif"/>,
        </div>
        </div>    
    )
}

export default LoadingView;