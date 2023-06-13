import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>

              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </Link>

              <Link
                className="btn btn-outline-light btn-floating m-1"
                to="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </Link>

            </section>
          </div>

          <div
            className="text-center p-3"
            style={{"background-color": "rgba(0, 0, 0, 0.2)"}}
          >
            © 2023 Copyright:
            <Link className="text-white" to="/">
              Hamza Aamir
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
