import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Projects from "../../api/project";
import Image from "next/image";
import { ProjectItem } from "../ProjectsS2";

const ProjectSection = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`wpo-project-area ${props.pClass}`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="wpo-project-wrap project-active owl-carousel">
            <Slider {...settings}>
              {Projects.slice(0, 4).map((project) => (
                <ProjectItem project={project} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
