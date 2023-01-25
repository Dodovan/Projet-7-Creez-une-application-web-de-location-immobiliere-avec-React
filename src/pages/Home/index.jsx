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
        <Card id={id} cover={cover} title={title}  />
      ))}
    </ul>
    </div>
  )
  }
  
  export default Home   

  const logementdata = [
    {
      title: "Appartement cosy",
      picture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    },
    {
      title: "Respect",
      picture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    },
  ];


  // {accordionData.map(({ heading, content }) => (
  //   <Card heading={heading} content={content} />
  // ))}
  // const logementdataa = JSON.parse('../../data/logement.json');
  // console.log(logementdataa);

  // {logements.map(({ title, cover }) => (
  //   <Card title={title} picture={cover} />  
  // ))}