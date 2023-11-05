import { useState } from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import PropTypes from 'prop-types';
import datelogo from '../../assets/datepicker-icon.svg';

import style from './index.module.css';

const DatePickerInput = ({
  value,
  onChange

}) => {
  const [visible, setVisible] = useState(false);
  const [curDate, setCurDate] = useState();
  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <>
      <DatePicker
        title="Choose a date"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          onChange(val);
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitle}>Date of Birth</div>
        <div>
          <span className={style.birthdayPlaceholder}>{value ? moment(value).format('YYYY/MM/DD') : 'Year/Month/Date'}</span>
          <img src={datelogo} className={style.dateLogo} alt="calendar logo " />
        </div>
      </div>
    </>
  );
};

DatePickerInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default DatePickerInput;