import './Banner.css'

function Banner ({BannerTexte,BannerImg}){
    return (
        <div className='wrap-Banner'>
                <div className='Banner'>
                    <div className='Banner__texte'>
                        {BannerTexte}   
                    </div>
                    <div className='Banner__img'><img src={BannerImg} alt="logo du site" /></div>
            </div>    
        </div>
    )
}
export default Banner