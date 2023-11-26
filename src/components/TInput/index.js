import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef } from 'react';

import style from './index.module.scss';

const TInput = forwardRef(({
  label,
  value,
  length,
  onChange,
  ...otherProps
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (value) {
      setIsFocused(true);
      setHide(true);
    }
  }, [value]);

  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  };

  const onBlur = () => {
    if (!value || value.length === 0) {
      setIsFocused(false);
      setHide(false);
    }
    setHide(false);
  };

  const onChangeHandler = (val) => {
    if (length && val.length > length) {
      return;
    }
    onChange(val);
  };

  return (
    <div className={hide ? style.tInputFocused : style.tInput} ref={ref}>
      <div className={isFocused ? style.labelFocused : style.Label}>
        {label}
        {hide && length && (
          <span className={style.labelRight}>
            {value?.length}
            /
            {length}
          </span>
        )}
      </div>
      <Input
        className={isFocused ? style.inputItemFocused : style.inputItem}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChangeHandler}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </div>
  );
});

TInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  length: PropTypes.number,
  onChange: PropTypes.func,
};

TInput.defaultProps = {
  length: undefined,
  value: undefined,
  label: '',
  onChange: () => {},
};

export default TInput;
