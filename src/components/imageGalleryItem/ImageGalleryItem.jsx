import {Component} from 'react';
import css from './ImageGalleryItem.module.css';
export class ImageGalleryItem extends Component {
  renderImage = arry => {
    if (!arry || arry === 0) {
      return;
    }
    return arry.map (({previewURL, tags, largeImageURL}, index) => {
      return (
        <li className={css.imageGalleryItem} key={index}>

          <img
            src={previewURL}
            alt={tags}
            className={css.imageGalleryItem_image}
            name={largeImageURL}
          />

        </li>
      );
    });
  };
  render () {
    return this.renderImage (this.props.option);
  }
}
