import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomDot from "./CustomDot";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = (props) => {
  return (
    <Carousel
      responsive={responsive}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      showDots={true}
      customDot={<CustomDot />}
      infinite={true}
      ssr={true}
      renderButtonGroupOutside={true}
    >
      {props.projects.map((project) => {
        return (
          <div className="project" key={project.title}>
            <div
              className="project-info"
              // style={{
              //   backgroundImage: `url("${project.image}")`,
              //   backgroundSize: `cover`,
              // }}
            >
              <image className="project-image" src={project.image}></image>
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                Check it out!
              </a>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Projects;
