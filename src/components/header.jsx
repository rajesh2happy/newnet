export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>
                  <strong>
                    {props.data ? props.data.paragraph : "Loading"}
                  </strong>
                </p>
                <a href="#plans" className="btn btn-custom btn-lg page-scroll">
                  Explore our plans
                </a>{" "}
                <a
                  href="https://login.swiftnetbroadband.net/cgi/login.php"
                  target="blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  My Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
