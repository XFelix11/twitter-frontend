/* eslint-disable react/no-array-index-key  */
import classNames from 'classnames';
import { Image, ImageViewer } from 'antd-mobile';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Bar from '@components/Bar';
import { OBJECT_KEYS } from '@components/Bar/constants';

import style from './index.module.scss';

/*
Image card component
at most 4 images
*/
const ImageCard = ({
  imgs,
  likeCount,
  commentCount,
}) => {
  const imageViewRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);
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
  };
  const onClickImage = (index) => {
    setVisible(true);
    imageViewRef.current.swipeTo(index);
  };

  return (
  <div className={style.container}>
    <div className={classNames(style.wrapper, getWrapper())}>
      {imgs.map((img, index) => (<Image onClick={() => onClickImage(index)} fit="cover" className={classNames(style.img, `img${index}`)} key={classNames(img, index)} src={img} alt="" />))}
    </div>
    <ImageViewer.Multi
        getContainer={document.body}
        ref={imageViewRef}
        images={imgs}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        renderFooter={() => (
          <Bar
            isBottom
            likesCount={likeCount}
            commentsCount={commentCount}
            type={OBJECT_KEYS.TWEET}
          />
        )}
       /> 
  </div>
  );
};

ImageCard.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  commentCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
}

ImageCard.defaultProps = {
  imgs: []
}

export default ImageCard;
