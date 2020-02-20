import React, { useState } from 'react';
import styles from './paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, changePage, portionSize = 15}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>

      {portionNumber > 1 && 
        <button className={styles.leftBtn} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
      }

      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => (
          <div key={p} className={currentPage === p ? styles.currentPage : styles.pageLists}>
            <span onClick={() => changePage(p)}>{p}</span>
          </div>
      ))}

      {portionCount > portionNumber && 
        <button className={styles.rightBtn} onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
      }
    </div>
  )
}

export default Paginator;