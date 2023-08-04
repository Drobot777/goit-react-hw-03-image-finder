import {Component} from 'react';
import {BsSearch} from 'react-icons/bs';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  submitForm = e => {
    e.preventDefault ();
    let nameForm = e.target.name.value;
    this.props.changeValueSab (nameForm);
  };
  render () {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.submitForm} className={css.searchForm}>
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}><BsSearch /></span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            name="name"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
