import React from "react";
import Link from "next/link";
import Projects from "../../api/project";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

export const ProjectItem = ({ project, onClick }) => (
  <div className="grid" key={project.id}>
    <div className="wpo-project-item">
      <div
        className="wpo-project-img"
        style={{
          backgroundImage: `url("${project.pImg.src}")`,
        }}
      ></div>
      <div className="wpo-project-text">
        <h3>
          <Link
            onClick={onClick}
            href="/project/[slug]"
            as={`/project/${project.slug}`}
          >
            {project.title}
          </Link>
        </h3>
        <p>{project.subTitle}</p>
      </div>
    </div>
  </div>
);

const ProjectSectionS2 = () => {
  const onClick = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="wpo-project-area-s2 section-padding">
      <div className="container">
        <SectionTitle subTitle={"Dấu ấn"} MainTitle={"Công trình"} />
        <div className="row align-items-center">
          <div className="wpo-project-wrap">
            <div className="sortable-gallery">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-grids gallery-container clearfix">
                    {Projects.slice(0, 6).map((project) => (
                      <ProjectItem project={project} onClick={onClick} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionS2;
