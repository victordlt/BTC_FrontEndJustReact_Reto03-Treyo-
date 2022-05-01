import React, {Component} from "react";


class Popuptareanueva extends Component {
    constructor(props){
        super(props);
    }

    addtask(){
        this.props.onClickbtn([document.getElementById('nombretareanueva').value, document.getElementById('descripciontareanueva').value , this.props.idlistasel ]);
         document.getElementById('btn02_close').click();
     }

    render(){     
        return(               
            <div class="modal fade" id="nuevatarea" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <input type="text" class="form-control modal-title" placeholder="Introduzca un titulo para la tarea" id="nombretareanueva"></input>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                <label for="message-text" class="col-form-label">Descripción:</label>
                                <textarea id="descripciontareanueva" class="form-control" placeholder="Introduzca descripción de la tarea"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button id="btn02_close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onClick={(e)=>this.addtask()}>Hecho</button>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Popuptareanueva;
