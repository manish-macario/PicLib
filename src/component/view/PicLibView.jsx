import React, { useState } from 'react';
import './PicLib.css';
import { Search } from 'react-feather';
import PicLibNavView from './PicLibNavView';

const PicLibView = (props) => {

    const [myImageinput, setMyImageInput] = useState("");
    const onChangeText = (event) => {

        setMyImageInput(event.target.value)

    }

    const onClickSearchButton = () => {
        myImageinput !=="" && props.getImageList(myImageinput)

    }
    return (
        <div>

            <PicLibNavView></PicLibNavView>

            <div className='home-banner-container'>

                <div className='search-box-container'>

                    <div className='banner-text'>
                        PicLib
                    </div>

                    <div className='banner-quotes'>
                        <p>
                            “Photography is the art of making memories tangible.”
                        </p>
                    </div>

                    <div className='piclib-search-box'>

                        < Search className='search-icon' size={30} />

                        <input type='text' className='search-box-txt' placeholder='Search High-Resolution Photo' name='imageInput' value={myImageinput} onChange={onChangeText}></input>

                        <button onClick={onClickSearchButton}>Search</button>

                    </div>

                </div>

            </div>
        </div>


    );
};

export default PicLibView;
