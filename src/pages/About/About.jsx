import Accordion from "../../components/Accordion/Accordion";
import Banner from "../../components/Banner/Banner";
import './About.css'
import IMG_banner_about from '../../assets/IMG_banner2.png'

function About () {
    return (
      <div id="page_about">
        <Banner BannerImg={IMG_banner_about}/>
        <ul className="accordion-about">
          {accordionData.map(({ heading,id,content}) => (
            <Accordion key={id} heading={heading} content={content}  />
          ))}
        </ul>
      </div>
    );
}
export default About

const accordionData = [
  {
    heading: "Fiabilité",
    content:
      "Les annonces postées dur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes lesinformations sont régulièrement vérifiées par nos équipes",
    id: "1"
  },
  {
    heading: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    id: "2"
  },
  {
    heading: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    id: "3"
  },
  {
    heading: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    id: "4"
  },
];


