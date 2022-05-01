import React, {Component} from "react";

class Popuplistanueva extends Component {
    constructor(props){
        super(props);
    }

    addlist(e){
        this.props.onClickbtn(document.getElementById('nombrelistanueva').value);
        document.getElementById('btn01_close').click();
    }
    
    render(){     
        return(               
            <div class="modal fade" id="nuevalista" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <input type="text" class="form-control modal-title" placeholder="Introduzca un titulo para la lista" id="nombrelistanueva"></input>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div class="modal-footer">
                            <button id="btn01_close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onClick={(e)=>this.addlist(e)}>Hecho</button>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Popuplistanueva;



