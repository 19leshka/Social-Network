import s from './Paginator.module.css';
import {useState} from 'react';
import doubleLeftIcon from './../../../assets/double-left-24.png';
import doubleRightIcon from './../../../assets/double-right-24.png';

const Paginator = ({totalItemsCount, pageSize, currentPage, setPage, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const pages = (pagesCount) => {
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) pages.push(i);
        pages = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                return <span onClick={(e) => setPage(e)} className={(p == currentPage ? s.active : s.disabled)}>{p}</span>
            })
        return pages;
    }

    return (
        <div className={s.pages}>
            { portionNumber > 1 &&
            <span onClick={() => { setPortionNumber(portionNumber - 1) }}><img src={doubleLeftIcon} alt="" /></span>
            }
            {pages(pagesCount)}
            { portionCount > portionNumber &&
            <span onClick={() => { setPortionNumber(portionNumber + 1) }}><img src={doubleRightIcon} alt="" /></span>
            }
        </div>
    )
}

export default Paginator;