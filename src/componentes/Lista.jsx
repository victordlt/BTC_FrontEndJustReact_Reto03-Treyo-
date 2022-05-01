import React, {Component} from "react";

import  Card  from './Card';
//import Popuptareanueva from './Popuptareanueva';

class Lista extends Component {
    constructor(props){
        super(props);
        this.deletecard=this.deletetar.bind(this);
    }

    insertcard(e){
        const listidactual= (this.props.idlista);
        this.props.onClickbtn(listidactual);
    }

    deletetar(e){
        this.props.onClickDeltask(e);
    }

    render(){
        const listatareas= this.props.tareas.map((tarea)=>
            <Card nombretarjeta={tarea.title} descripciontarjeta={tarea.description} idtarjeta={tarea.id} onClickbtn={this.deletecard}/>
        );
        return(
            <React.Fragment>
                <div class="col" style={{marginBottom:35+'px'}}>
                    <div style={{width:18 +'rem'}}>
                        <h3 style={{display:'inline'}}>{this.props.nombrelista}</h3>
                        <button style={{display:'inline', float:'right'}} type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#nuevatarea" data-bs-whatever="@mdo" onClick={(e)=>this.insertcard()} >+</button>
                    </div>
                    <div>  
                        {
                            listatareas
                        }                          
                    </div>
                </div>    
            </React.Fragment>
        )
    }
}

export default Lista;
