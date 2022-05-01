import React, {Component} from "react";

import Lista from './Lista';
//import Treyo from './Treyo';

class Board extends Component {
    constructor(props){
        super(props);
        this.idlistselect=this.idlistsel.bind(this);
    }
    
    idlistsel(e){
        console.log("hastaBroad....."+e);
        this.props.OnClickidlistasel(e);
        //hasta aui bien
    }


    render(){ 

        const listaslist= this.props.listalist.map((lista)=>
        <Lista onClickbtn={this.idlistselect} nombrelista={lista.title} idlista={lista.id} tareas={this.props.listatask.filter(word=>word.listaid===lista.id)}/>
        );

        return(      
            <div id="colu" class="row" style={{marginTop:1 +'rem'}}> 
                {listaslist}
            </div>
        )
    }
}

export default Board;
