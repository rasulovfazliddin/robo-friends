import React, {Component} from "react";



class Searchbox extends Component{
    render(){
        return(
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue" 
                    type="serach" 
                    placeholder="search robots"
                    onChange={this.props.searchChange}/>
            </div>
        )
    }
}

export default Searchbox;