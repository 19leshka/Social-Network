import s from './Preloader.module.css'
import preloader from './../../assets/preloader.svg'

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div>
                <img src={preloader} alt="" />
            </div>
        </div>
    )
}

export default Preloader;
