import {Component} from 'react';
import css from './ImageGallery.module.css';
import {ImageGalleryItem} from 'components/imageGalleryItem/ImageGalleryItem';
import {Button} from 'components/button/Button';
import {Modal} from 'components/modal/Modal';

export class ImageGallery extends Component {
  state = {
    isModal: false,
    urlLargeImage: '',
    tags: '',
  };
  onClicImage = evt => {
    evt.preventDefault ();

    this.setState ({
      isModal: true,
      urlLargeImage: evt.target.name,
      tags: evt.target.alt,
    });
  };
  changeIsModal = () => {
    this.setState ({isModal: false});
  };
  render () {
    const {urlLargeImage, isModal} = this.state;
    const {object, changePage} = this.props;
    return (
      <div>
        <ul className={css.gallery} onClick={this.onClicImage}>
          <ImageGalleryItem option={object} />
        </ul>
        {object.length !== 0 ? <Button pagChange={changePage} /> : null}
        {isModal
          ? <Modal url={urlLargeImage} clouseFanction={this.changeIsModal} />
          : null}
      </div>
    );
  }
}
