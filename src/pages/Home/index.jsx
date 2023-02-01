import Banner from "../../components/Banner"
import Card from "../../components/Card"
import './Home.css'
import logements from "../../data/logements"

function Home() {
  return(
    <div>
      
    <Banner/>
    <ul className="listlogements">
        {logements.map(({id,title,cover})=> (
        <Card key={id} id={id} cover={cover} title={title}   />
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