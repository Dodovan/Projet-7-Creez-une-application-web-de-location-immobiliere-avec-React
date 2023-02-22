import Banner from "../../components/Banner/Banner"
import Card from "../../components/Logement/Logement"
import './Home.css'
import logements from "../../data/logements"
import IMG_banner from '../../assets/Img_Banner_Home.png'

function Home() {
  return(
    <div className="homepage">
    <Banner BannerImg={IMG_banner} BannerTexte={"Chez vous, partout et ailleurs"}/>
    <ul className="listlogements">
        {logements.map(({id,title,cover})=> (
        <Card  type={1} key={id} id={id} cover={cover} title={title}   />
      ))}
    </ul>
    </div>
  )
}
export default Home   
