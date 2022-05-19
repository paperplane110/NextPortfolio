import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styles from '../styles/ScrollToTop.module.css'

const ScrollToTop = () => {
  const [showBtm, setShowBtm] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowBtm(true)
      } else {
        setShowBtm(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // const style = {
  //   transform: showBtm ? '' : 'rotate(225deg)',
  //   transition: 'transform 150ms ease'
  // }

  return (
    <div className={styles.topToBtm}>
      {" "}
      {showBtm && (
        <div className={styles.iconBox}>
          <FaAngleUp size={35} onClick={goToTop} />
        </div>
      )}
      {" "}
      {/* <FaAngleUp className={styles.icon} style={style} onClick={goToTop} /> */}
    </div>
  );
};
export default ScrollToTop;