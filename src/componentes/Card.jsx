import React, {Component} from "react";
import bannerdog from '../img//01_01bannerDog.JPG';

class Card extends Component {
    constructor(props){
        super(props);
        this.borrartarjetaz=this.borrartarjeta.bind(this);        
    }
    
    borrartarjeta () {
        this.props.onClickbtn(this.props.idtarjeta);
    }
    
    render(){     
        return(      
            <div class="card" style={{width:18 +'rem'}} >
                <img src={bannerdog} class="card-img-top" alt="LOGO"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.nombretarjeta}</h5>
                    <p class="card-text">{this.props.descripciontarjeta}</p>
                    <a style={{float:'left', marginRight:5+'px'}} class="btn btn-primary" onClick={this.borrartarjetaz}><i class="bi-trash"></i></a>
                </div>
            </div>  
        )
    }
}

export default Card;