import style from './Header.module.scss'
import logoImg from '../../assets/img/logo.jpg'

function Header(){

    return(
        <header className={`${style.header} inner_padding_sm`}>
            <div className='container'>
                <div className={style.header___header_area}>
                    <div className={style.header___logo_box_area}>
                        <img src={logoImg} alt='Logo' className={style.header___logo_box_area___logo}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;