import '../App.css';
import {useState} from "react";

function SmileCard(props) {

    return (
        <div className="smileCard" am-smile={props.smile} am-value={props.counter}>
            <span className="smileCard__emoji">{props.smile}</span>
            <span className="smileCard__counter">{props.counter}</span>
            <span className="smileCard__add" onClick={props.onIncrease}>+</span>
        </div>
    )
}
export default SmileCard;