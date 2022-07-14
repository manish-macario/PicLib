import React, { Component } from 'react';
import PicLibService from '../service/PicLibService';
import PicLibView from '../view/PicLibView';

class PicLib extends Component {

    state = {
        searchKeyWord: "",
        pageNumber: 1
    }

    getImageList = (keyword) => {
        this.setState({ searchKeyWord: keyword })
        let callback = {};
         let data={
            keyword:keyword,
            pageNumber:this.state.pageNumber
        }
        callback.onSuccess = this.onSuccessGetImage
        callback.data = data;
        new PicLibService().getImages(callback)
    }

    onSuccessGetImage = (imageList) => {

        
        if( imageList.results.length===0){

            this.props.navigate("/nofound")
        }

        else{
            this.props.navigate("/imageList", { state: { imageList: imageList, searchKeyWord: this.state.searchKeyWord, pageNumber:this.state.pageNumber } })
      
        }

            

    }

    render() {

        console.log(this.props);
        return (
            <>

                <PicLibView getImageList={this.getImageList}></PicLibView>

            </>
        );
    }
}

export default PicLib;
