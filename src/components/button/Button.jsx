import { Component } from "react";
import css from './Button.module.css'

export class Button extends Component{
    render(){
        const{pagChange}=this.props
        return(
            <button type="button" className={css.btn} onClick={pagChange} >Load more</button>
        )
    }
}