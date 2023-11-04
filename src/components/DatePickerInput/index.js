import style from './index.module.css';
import datelogo from '../../assets/datepicker-icon.svg';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitle}>Date of Birth</div>
    <div>
      <span className={style.birthdayPlaceholder}>Year/Month/Date</span>
      <img src={datelogo} className={style.dateLogo} alt="calendar logo " />
    </div>
  </div>
);
