import React from 'react';
import LottieView from 'lottie-react';
import animationData from '../../assets/animation/loading.json';
import "./Loading.css";

const Loading: React.FC = () => {
    
    return (
        <div className="loading-main-div">
            <LottieView 
                animationData={animationData} 
                autoPlay 
                loop 
                className="loading-anim"
                />
        </div>
    )
}

export default Loading;