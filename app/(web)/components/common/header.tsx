export default function WebHeader() {
  return (
    <header className="header default">
      <div className="topbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-block d-md-flex align-items-center text-center">
                <div className="me-4 d-inline-block py-1">
                  <a href="#">
                    <i className="far fa-envelope me-2 fa-flip-horizontal text-primary" />
                    letstalk@hisoft.com
                  </a>
                </div>
                <div className="me-auto d-inline-block py-1">
                  <a href="tel:1-800-555-1234">
                    <i className="fas fa-map-marker-alt text-primary me-2" />
                    6580 Allison Turnpike Creminfort, AL 32808
                  </a>
                </div>
                <div className="d-inline-block py-1">
                  <ul className="list-unstyled">
                    <li>
                      <a href="careers.html">Careers</a>
                    </li>
                    <li>
                      <a href="blog.html">News &amp; Media</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar bg-white navbar-static-top navbar-expand-lg">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <i className="fas fa-align-left" />
          </button>
          <a className="navbar-brand" href="index-2.html">
            <img className="img-fluid" src="images/logo.svg" alt="logo" />
          </a>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item dropdown active">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="active">
                    <a className="dropdown-item" href="index-2.html">
                      Home Default
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-02.html">
                      Home London
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-03.html">
                      Home New York
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-04.html">
                      Home Los Angeles
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-05.html">
                      Home Mumbai{" "}
                      <span className="badge bg-danger ms-2">Hot</span>{" "}
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-06.html">
                      Home Shanghai
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-07.html">
                      Home Chicago
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-08.html">
                      Home New Delhi
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-09.html">
                      Home Berlin
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index-10.html">
                      Home Paris
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a
                  href="properties.html"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="contact.html">
                      Contact
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pricing.html">
                      Pricing
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="testimonials.html">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog.html">
                      Blog 01
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-02.html">
                      Blog 02
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-detail.html">
                      Blog Detail
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements.html">
                      Elements
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="faq.html">
                      Faq
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="coming-soon.html">
                      Coming Soon
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="error-404.html">
                      404 Error
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="privacy-policy.html">
                      Privacy Policy
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="terms-and-conditions.html"
                    >
                      Terms &amp; Conditions
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a
                  href="properties.html"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="about-us.html">
                      About Us
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="careers.html">
                      Careers
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="how-we-work.html">
                      How We Work
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="our-team.html">
                      Our Team
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="mission-vision.html">
                      Mission Vision
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="our-value.html">
                      Our Value
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="service.html">
                      Services
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="service-detail.html">
                      Services Detail
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a
                  href="industry.html"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                >
                  Industries
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="industry.html">
                      Industries 01
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="industry-02.html">
                      Industries 02
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="industry-03.html">
                      Industries 03
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="industry-04.html">
                      Industries 04
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a
                  href="properties.html"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                >
                  Case Studies
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="case-study.html">
                      Case Studies
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="case-study-single.html">
                      Case Study Single
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="case-study-single-02.html"
                    >
                      Case Study Single 02
                      <i className="fas fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item mega-menu">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                  Mega Menu
                </a>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <div className="row">
                      <div className="col-sm-6 col-lg-3">
                        <h6 className="mb-3 nav-title">Menu Title </h6>
                        <ul className="list-unstyled mt-lg-3">
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <h6 className="mb-3 nav-title">Menu Title</h6>
                        <ul className="list-unstyled mt-lg-3">
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <h6 className="mb-3 nav-title">Menu Title</h6>
                        <ul className="list-unstyled mt-lg-3">
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <h6 className="mb-3 nav-title">Menu Title</h6>
                        <ul className="list-unstyled mt-lg-3">
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                          <li>
                            <a href="#">Menu item </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-none d-sm-flex ms-auto me-5 me-lg-0 pe-4 pe-lg-0">
            <ul className="nav ms-1 ms-lg-2 align-self-center">
              <li className="contact-number nav-item pe-4 ">
                <a className="fw-bold" href="#">
                  <i className="fab fa-whatsapp pe-2" />
                  +(704) 279-1249
                </a>
              </li>
              <li className="header-search nav-item">
                <div className="search">
                  <a
                    className="search-btn not_click"
                    href="javascript:void(0);"
                  />
                  <div className="search-box not-click">
                    <form
                      action="https://themes.potenzaglobalsolutions.com/html/hi-soft/search.html"
                      method="get"
                    >
                      <input
                        type="text"
                        className="not-click form-control"
                        name="search"
                        placeholder="Search.."
                      />
                      <button className="search-button" type="submit">
                        {" "}
                        <i className="fa fa-search not-click" />
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
