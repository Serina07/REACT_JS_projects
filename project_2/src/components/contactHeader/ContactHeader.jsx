
import style from "./ContactHeader.module.css"
import classNames from 'classnames'

function ContactHeader() {
  return (
    <div>
      <div className={style.contactSection}>
        <h1>AS Cafe</h1>
        <p>Best Coffee in Town</p>
      </div>
    </div>
  );
}

export default ContactHeader;
