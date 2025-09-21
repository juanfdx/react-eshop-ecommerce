import './About.scss';
// COMPONENTS
import { AboutPageTop } from '../../components/about/AboutPageTop/AboutPageTop';
import { AboutDescription } from '../../components/about/AboutDescription/AboutDescription';
// DATA
import { about } from '../../data/data-about';
import { team } from '../../data/data-team';
import { BrandSlider } from '../../components/sliders/BrandSlider/BrandSlider';
import { OurTeamSlider } from '../../components/sliders/OurTeamSlider/OurTeamSlider';


export const About = () => {
  
  return (
    <>
      <AboutPageTop about={about} />
      <AboutDescription about={about} />
      <OurTeamSlider team={team} />
      <BrandSlider />
    </>
  )
}