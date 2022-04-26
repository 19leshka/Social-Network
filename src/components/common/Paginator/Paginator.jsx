import s from './Paginator.module.css';

const Paginator = (props) => {
    const pages = (num) => {
        let pages = [];
        for(let i = 1; i <= num; i++){
            pages.push(<span onClick={(e) => props.setPage(e)} className={(i == props.currentPage ? s.active : s.disabled)}>{i}</span>)
        }
        return pages;
    }

    return (
        <div className={s.pages}>
            {pages(props.num)}
            <span>...</span>
        </div>
    )
}

export default Paginator;