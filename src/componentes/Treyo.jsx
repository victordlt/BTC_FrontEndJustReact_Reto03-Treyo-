import React, {Component} from "react";

/**/
import Board from './Board';
import Barmenu from './Barmenu';
import Header from './Header';
import Popuplistanueva from './Popuplistanueva';
import Popuptareanueva from './Popuptareanueva';
import Popupborrarlista from './Popupborrarlista';
//let dbtareas = require('../dbtask.js');
//let dblistas = require('../dblist.js');

class Treyo extends Component {
    constructor(props){
        super(props);
        this.state = {
            listatareas: [],//dbtareas,
            listalistas: [],//dblistas,
            listasel:0,
        };
        this.idlistselecta=this.handleidlistsel.bind(this);
        this.deltask=this.handleDelTask.bind(this);
        this.dellist=this.handleDelList.bind(this);
    }

    handleAddList = (namelist)=>{
        this.state.listalistas.push( {
            "id": this.state.listalistas.length!==0 ? this.state.listalistas[this.state.listalistas.length-1].id+1 : 1,
            "title": namelist,
            });
        this.setState({listalistas:this.state.listalistas});
        console.log(this.state.listalistas);
    }

    handleAddTask = (nametask)=>{
        this.state.listatareas.push( {
            "id": this.state.listatareas.length !=0 ? (this.state.listatareas[this.state.listatareas.length-1].id)+1 : 1,
            "title": nametask[0],
            "description": nametask[1],
            "done": false,
            "listaid":this.state.listasel,
            });
        this.setState({listatareas:this.state.listatareas});
    }
    
    handleidlistsel(idlistselect){
        this.setState({listasel:idlistselect});
    }

    handleDelTask(e){
        this.setState({listatareas:this.state.listatareas.filter(word=>word.id != e)});
    }

    handleDelList(e){
        this.setState({
            listatareas:this.state.listatareas.filter(word=>word.listaid != e),
            listalistas:this.state.listalistas.filter(word=>word.id != e),        
        });
    }

    render(){ 
        return(      
            <div className="App">    
                <div className="container">
                    <Header/>
                    <Barmenu/>
                    <Board listalist={this.state.listalistas} listatask={this.state.listatareas} OnClickidlistasel={this.idlistselecta} OnClickDelTask={this.deltask} />
                </div>
                <Popuplistanueva onClickbtn={this.handleAddList}/>
                <Popupborrarlista listalist={this.state.listalistas} onClickDelList={this.dellist}/>
                <Popuptareanueva idlistasel={this.state.listasel} onClickbtn={this.handleAddTask}/>
            </div>            
        )
    }
}
export default Treyo;