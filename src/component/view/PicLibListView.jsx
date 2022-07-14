import React, { useState, useEffect, useRef } from 'react';
import PicLibNavView from './PicLibNavView';
import './LibList.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const PicLibListView = (props) => {


    const [open, setOpen] = useState(false);
    const [showImageSource, setShowImageSource] = useState("");


    const onOpenModal = (items) => {

        setShowImageSource(items.urls.small)
        setOpen(true);

    }
    const onCloseModal = () => 
    {

        
        setOpen(false);
    }
    const handleScroll = (e) => {

        if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {

            props.updateList();
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);




    return (<>
        <PicLibNavView></PicLibNavView>

        <div className='gallery-body' >
            <div>

                <h1>{props.keyword}</h1>
                <div className="grid-container">
                    {props.imageList.results.map((items, index) => {
                        return (


                            <div onClick={() => onOpenModal(items)}>
                                <img className={'grid-item grid-item-' + (index + 1)} src={items.urls.thumb + '&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'} alt='' />
                                <p>{items.alt_description}</p>
                            </div>

                        )

                    })}
                </div>
            </div>

            <Modal

                open={open}  center
                closeOnOverlayClick={true}
                onClose={onCloseModal}
                showCloseIcon={false}
                classNames={{
                    
                    modal: 'customModal',    
                }}
                animationDuration={800}

            >
                <img src={showImageSource} alt='img' ></img>
            </Modal>
        </div>

    </>);
}

export default PicLibListView;