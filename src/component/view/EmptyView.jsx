import React from 'react';
import { Slash,CameraOff } from 'react-feather';
import './empty.css'
import PicLibNavView from './PicLibNavView';

const Emptyview = () => {
    return (

        <>

            <PicLibNavView></PicLibNavView>
            <div className='empty-container'>

                
                <h1 >No Photos Found !</h1>
                <CameraOff className='camera-icon' size={60}></CameraOff>

            </div>
        </>

    );
}

export default Emptyview;
