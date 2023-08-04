import {Component} from 'react';
import {Searchbar} from './searchbar/Searchbar';
import {Button} from './button/Button';
import {ImageGallery} from './imageGallery/ImageGallery';
import {findImages} from '../appi';
import {Loader} from './loader/Loader';

export class App extends Component {
  state = {
    isLoading: false,
    valueSabmitForm: '',
    date: [],
    pag: '',
    isError: false,
    messageEror: '',
  };
  changeValueSab = evt => {
    if (evt === '') {
      return;
    }
    this.setState ({valueSabmitForm: evt, pag: 1, date: []});
  };
  changePage = () => {
    this.setState (prevState => {
      return {pag: prevState.pag + 1};
    });
  };
  async componentDidUpdate (prevProps, prevState) {
    if (
      this.state.valueSabmitForm !== prevState.valueSabmitForm ||
      this.state.pag !== prevState.pag
    ) {
      this.setState ({isLoading: true});

      try {
        const objimage = await findImages (
          this.state.valueSabmitForm,
          this.state.pag
        );

        this.setState ({date: [...this.state.date, ...objimage.data.hits]});
      } catch (error) {
        this.setState ({isError: true, messageEror: error.message});
      } finally {
        this.setState ({isLoading: false});
      }
    }
  }
  render () {
    const {isLoading, date, isError, messageEror} = this.state;

    return (
      <div>

        {isLoading
          ? <Loader />
          : <Searchbar changeValueSab={this.changeValueSab} />}
        <ImageGallery object={date} changePage={this.changePage} />
        {isError ? <p class="error">{messageEror}</p> : null}
        {date.length !== 0 ? <Button pagChange={this.changePage} /> : null}
      </div>
    );
  }
}
