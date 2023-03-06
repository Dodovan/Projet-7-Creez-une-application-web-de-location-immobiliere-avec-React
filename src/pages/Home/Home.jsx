import Banner from "../../components/Banner/Banner"
import Housing from "../../components/Housing/Housing"
import './Home.css'
import logements from "../../data/logements"
import IMG_banner from '../../assets/Img_Banner_Home.png'

function Home() {
  return(
    <div className="homepage">
      <Banner BannerImg={IMG_banner} BannerTexte={"Chez vous, partout et ailleurs"}/>
      <ul className="listlogements">
        {logements.map((Logement)=> (
          <Housing  type={"Card"} Logement={Logement} key={Logement.id}   />
        ))}
      </ul>
    </div>
  )
}
export default Home   
