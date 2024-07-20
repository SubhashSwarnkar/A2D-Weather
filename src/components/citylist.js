import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Sidenav = () => (
  <div id="sidenav-1" className="sidenav" data-mdb-color="dark" role="navigation" data-mdb-hidden="false" data-mdb-accordion="true">
    <a className="ripple d-flex justify-content-center py-3" href="#!" data-mdb-ripple-color="primary">
      <img id="MDB-logo" src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="MDB Logo" draggable="false" height="25" />
    </a>
    <ul className="sidenav-menu">
      <li className="sidenav-item">
        <a className="sidenav-link active">
          <i className="fas fa-home fa-fw me-3"></i><span>Home</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-fire fa-fw me-3"></i><span>Trending</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fab fa-youtube-square fa-fw me-3"></i><span>Subscriptions</span>
        </a>
      </li>
    </ul>
    <hr />
    <ul className="sidenav-menu">
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-caret-square-right fa-fw me-3"></i><span>Library</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-history fa-fw me-3"></i><span>History</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="far fa-caret-square-right fa-fw me-3"></i><span>Your videos</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-clock fa-fw me-3"></i><span>Watch later</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-thumbs-up fa-fw me-3"></i><span>Liked videos</span>
        </a>
      </li>
    </ul>
    <hr />
    <ul className="sidenav-menu">
      <h6 className="text-muted text-uppercase ps-4">Subscriptions</h6>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>The Jazz Hop Cafe</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>MDB Youth</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img (33).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>Travels by Bus Around the World</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>The Awesome</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img (28).jpg" className="rounded-circle me-3" height="25" alt="" loading="lazy" /><span>SheriffUSA</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link" data-mdb-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
          <i className="fas fa-chevron-down fa-fw me-3"></i><span>Show 2 more</span>
        </a>
      </li>
    </ul>
    <hr />
    <ul className="sidenav-menu">
      <h6 className="text-muted text-uppercase ps-4">More from youtube</h6>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fab fa-youtube fa-fw me-3"></i><span>YouTube Premium</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-film fa-fw me-3"></i><span>Movies</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-gamepad fa-fw me-3"></i><span>Gaming</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-broadcast-tower fa-fw me-3"></i><span>Live</span>
        </a>
      </li>
    </ul>
    <hr />
    <ul className="sidenav-menu">
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-cog fa-fw me-3"></i><span>Settings</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-flag fa-fw me-3"></i><span>Report history</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-question-circle fa-fw me-3"></i><span>Help</span>
        </a>
      </li>
      <li className="sidenav-item">
        <a className="sidenav-link">
          <i className="fas fa-comment-alt fa-fw me-3"></i><span>Send feedback</span>
        </a>
      </li>
    </ul>
    <hr />
    <div className="ps-4 mb-3">
      <a href="" className="text-body small me-3">About</a>
      <a href="" className="text-body small me-3">Press</a>
      <a href="" className="text-body small me-3">Copyright</a>
      <a href="" className="text-body small me-3">Contact us</a>
      <a href="" className="text-body small me-3">Creators</a>
      <a href="" className="text-body small me-3">Advertise</a>
      <a href="" className="text-body small me-3">Developers</a>
    </div>
    <div className="ps-4 mb-4 pb-2">
      <a href="" className="text-body small me-3">Terms</a>
      <a href="" className="text-body small me-3">Privacy</a>
      <a href="" className="text-body small me-3">Policy & Safety</a>
      <a href="" className="text-body small me-3">How YouTube works</a>
      <a href="" className="text-body small me-3">Test new features</a>
    </div>
    <p className="small text-muted ps-4">© 2020 MDBootstrap</p>
  </div>
);

const Navbar = () => (
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container-fluid">
      <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" className="btn shadow-0 p-0 me-3 d-block d-xxl-none" aria-controls="#sidenav-1" aria-haspopup="true">
        <i className="fas fa-bars"></i>
      </button>
      <a className="navbar-brand" href="#!">
        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="25" alt="" loading="lazy" />
      </a>
      <form className="d-none d-md-flex input-group w-auto my-auto">
        <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search (ctrl + / to focus)" style={{ minWidth: '225px' }} />
        <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search"></i></span>
      </form>
      <ul className="navbar-nav ms-auto d-flex flex-row">
        <li className="nav-item dropdown">
          <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">11</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3 me-lg-0" href="#">
            <i className="fas fa-fill-drip"></i>
          </a>
        </li>
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="#">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
);

const App = () => (
  <>
    <Navbar />
    <Sidenav />
    {/* Your main content goes here */}
  </>
);

export default App;
