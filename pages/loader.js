import React from 'react'
import styles from '../sass/loader.module.scss';

function loader() {
  return (
    <div className={styles.loader}>
        <div className="circle"></div>
    </div>
  )
}

export default loader