const Project = () => {
  return (
    <div className="projectComponent" id="projectPage">
      <div className="projectTitle">Projects</div>
      <div className="project-container">
        <div className="project1">
          <a
            className="fill-div"
            href="https://trellonileshfsd.netlify.app/"
            target={"_blank"}
          >
            Website Layout
          </a>
        </div>

        <div className="project1">
          <a
            className="fill-div"
            href="https://tranquil-tarsier-902ebc.netlify.app/"
            target={"_blank"}
          >
            To-do App
          </a>
        </div>

        <div className="project1">
          <a
            className="fill-div"
            href="https://profound-gelato-08ff21.netlify.app/"
            target={"_blank"}
          >
            Login-Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
