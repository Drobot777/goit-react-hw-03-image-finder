import {Component} from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  clouseModal = () => {
    return this.props.clouseFanction ();
  };
  render () {
    const {url} = this.props;
  
    return (
      <div className={css.overlay} onClick={this.clouseModal}>
        <div className={css.modal}>
          <img src={url} alt="name" />
        </div>
      </div>
    );
  }
}
