import React, {Component} from "react";

class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){     
        return(      
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <h3 class="d-flex justify-content-center">TREYO</h3>
                </div> 
                <div class="col">
                    <div class="btn-toolbar mb-3 justify-content-end" role="toolbar" aria-label="Toolbar with button groups"> 
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-primary"><i class="bi-info-circle"></i></button>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
export default Header;