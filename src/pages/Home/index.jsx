import Banner from "../../components/Banner"
// import badou from "../../components/Banner"
import Card from "../../components/Card"
import './Home.css'
import logements from "../../data/logements"
import Footer from "../../components/Footer"

function Home() {
  return(
    <div className="homepage">
    <Banner type={1}/>
    <ul className="listlogements">
        {logements.map(({id,title,cover})=> (
        <Card  type={1} key={id} id={id} cover={cover} title={title}   />
      ))}
    </ul>
    </div>
  )
  }
  
  export default Home   



  // {accordionData.map(({ heading, content }) => (
  //   <Card heading={heading} content={content} />
  // ))}
  // const logementdataa = JSON.parse('../../data/logement.json');
  // console.log(logementdataa);

  // {logements.map(({ title, cover }) => (
  //   <Card title={title} picture={cover} />  
  // ))}