import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
    constructor(){
      super()
      this.state = {
        count : 0
      }
    }
  
    insC=()=>{
      if(this.state.count < 2){
        this.setState({count:this.state.count+=1})
      }  
    }
    desC=()=>{
      if(this.state.count > 0){
        this.setState({count:this.state.count-=1})
      }
    }
    render(){
        console.log(images);
          return (
            <div className="carouselContainer">
                <div className="leftArrow" onClick={this.desC}>
                  <ArrowBackIosIcon/>
                </div>
                <div className="imgText">
                <h1>{images[this.state.count].title}</h1>
                <p >{images[this.state.count].subtitle}</p>
                </div>
                <img src={images[this.state.count].img} alt="" />
                <div className="rightArrow" onClick={this.insC}>
                  <ArrowForwardIosIcon/>
                </div>
            </div>
          )
        }
      }

export default Carousel;