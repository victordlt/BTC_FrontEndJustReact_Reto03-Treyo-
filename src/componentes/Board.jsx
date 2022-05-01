import React, {Component} from "react";
import Lista from './Lista';

class Board extends Component {
    constructor(props){
        super(props);
        this.idlistselect=this.idlistsel.bind(this);
        this.deltask=this.deltasken.bind(this);
    }
    
    idlistsel(e){
        this.props.OnClickidlistasel(e);
    }

    deltasken(e){
        this.props.OnClickDelTask(e);
    }

    render(){ 

        const listaslist= this.props.listalist.map((lista)=>
        <Lista onClickbtn={this.idlistselect} nombrelista={lista.title} idlista={lista.id} tareas={this.props.listatask.filter(word=>word.listaid===lista.id)} onClickDeltask={this.deltask}/>
        );

        return(      
            <div id="colu" class="row" style={{marginTop:1 +'rem'}}> 
                {listaslist}
            </div>
        )
    }
}

export default Board;
