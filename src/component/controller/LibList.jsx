import React, { useState } from 'react';
import { useLocation } from 'react-router';
import PicLibService from '../service/PicLibService';
import PicLibListView from '../view/PicLibListView';


const LibList = (props) => {
    const location = useLocation()
    const [imageList, setImageList] = useState(location.state.imageList);
    const [keyword, setKeyword] = useState(location.state.searchKeyWord);
    const [pageNumber, setPagenumber] = useState(location.state.pageNumber);

    const updateList = () => {
        
        let callback = {};
        let updatedPageNumber = location.state.pageNumber;
        updatedPageNumber = updatedPageNumber + 1;
        location.state.pageNumber=updatedPageNumber;
        setPagenumber(updatedPageNumber)
        let data = {
            keyword: keyword,
            pageNumber: updatedPageNumber
        }
        callback.onSuccess = onSuccessUpdateImage
        callback.data = data;
        new PicLibService().getImages(callback)
    }

    const onSuccessUpdateImage = (imageListObject) => {
        
        let imageListInfo = {...imageList};
        imageListObject.results.map((items, index) => {
            imageListInfo.results.push(items)
        })
        setImageList(imageListInfo)
    }
    return (
        <>
            <PicLibListView imageList={imageList} updateList={updateList} keyword={keyword}></PicLibListView>
        </>
    );

}

export default LibList;
