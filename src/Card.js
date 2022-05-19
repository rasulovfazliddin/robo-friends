import React, {Component} from "react";
import './Card.css'

class Card extends Component {
    render(){
        const { id, name, email} = this.props;
        return(
            <div className="bg-light-green dib br3 pa3 ma2 grov bw2 shadow-5 tc">
                <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;