/* eslint-disable react/no-array-index-key  */
import classNames from 'classnames';
import { Image } from 'antd-mobile';
import PropTypes from 'prop-types';

import style from './index.module.scss';

/*
Image card component
at most 4 images
*/
const ImageCard = ({
  imgs,
}) => {
  const getWrapper = () => {
    switch (imgs.length) {
      case 1: 
        return style.wrapper1;
      case 2: 
        return style.wrapper2;
      case 3: 
        return style.wrapper3;
      case 4: 
        return style.wrapper4;
      default:
        return style.wrapper;
    }
  }
  return (
  <div className={style.container}>
    <div className={classNames(style.wrapper, getWrapper())}>
      {imgs.map((img, index) => (<Image fit="cover" className={classNames(style.img, `img${index}`)} key={classNames(img, index)} src={img} alt="" />))}
    </div>
  </div>
  );
};

ImageCard.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string)
}

ImageCard.defaultProps = {
  imgs: []
}

export default ImageCard;
