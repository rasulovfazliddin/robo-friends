import React, {Component} from "react";
import Card from "./Card";
import "./CardList.css"


class CardList extends Component{
    render(){
        const robots = this.props.robots;
        return (
            <div className="cardlist">
                {
                    robots.map((user, i)=>{
                        return( <Card key={i} id={user.id} name={user.name} email={user.email}/>)
                    })
                }
            </div>
        );
    }
}

export default CardList;