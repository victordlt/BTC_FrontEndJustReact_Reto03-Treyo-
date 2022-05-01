import React, {Component} from "react";

class Popupborrarlista extends Component {
    constructor(props){
        super(props);
        this.deletelista=this.dellista.bind(this);
    }

    dellista(e){
        this.props.listalist.map((lista)=>
            document.getElementById('radio'+lista.id).checked? 
                this.props.onClickDelList(lista.id):
                console.log("No radio button selected")
        );
    }

    render(){     
        return(               
            <div class="modal fade" id="borrarlista" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                        {this.props.listalist.map((lista)=>(
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id={"radio"+lista.id} value={lista.title}></input>
                                <label class="form-check-label" for="flexRadioDefault1">{lista.title}</label>                               
                            </div>
                        ))}
                        </div>
                        <div class="modal-footer">
                            <button id="btn03_close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onClick={this.deletelista}>Borrar</button>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}
export default Popupborrarlista;
