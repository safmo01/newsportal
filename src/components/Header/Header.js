import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    
  
  
  
  
  
  
  
  
  
  render ()
    {
return(

<div>
        {/*header desktop */}
        <div className="container-menu-desktop">
  
  
  
      <div className="topbar">
        <div className="content-topbar container h-100">
          <div className="logo" style={{paddingTop:'20px', paddingBottom:'20px'}}> <NavLink to="index.html"><img src="images/news-logo.png" alt="LOGO"/></NavLink> </div>
          <div id="date"> </div>
    
      <select name="Location" id="location" form="carform" style={{border:"#fff"}}>
        
        <option value="volvo">Hyderabad</option>
        <option value="saab">Mumbai</option>
        <option value="opel">Bangalore</option>
        <option value="audi">Delhi</option>
      </select> </div>
        </div>
      </div>
  

  {/*Header Mobile */}



  <div className="wrap-header-mobile"> 
     {/*-- Logo moblie */}
      <div className="logo-mobile"> <NavLink to="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"/></NavLink> </div>
      
     {/*-- Button show menu */}
      <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8"> <span className="hamburger-box"> <span className="hamburger-inner"></span> </span> </div>
    </div>
    
   {/*-- Menu Mobile */}
    <div className="menu-mobile">
      <ul className="topbar-mobile">
        <li className="left-topbar"> <span className="left-topbar-item flex-wr-s-c"> <span className="date" id="date"> </span> </span> </li>
        <li className="left-topbar"> <NavLink to="#" className="left-topbar-item"> About </NavLink> <NavLink to="#" className="left-topbar-item"> Contact </NavLink> &nbsp;&nbsp;&nbsp;&nbsp; <NavLink to="#" className="left-topbar-item"> Hyderabad </NavLink> <NavLink to="#" className="left-topbar-item"> Change Location </NavLink> </li>
        <li className="right-topbar"> <NavLink to="#"> <span className="fab fa-facebook-f"></span> </NavLink> <NavLink to="#"> 
        <span className="fab fa-twitter"></span> </NavLink> <NavLink to="#"> <span className="fab fa-pinterest-p"></span> </NavLink> <NavLink to="#"> 
        <span className="fab fa-vimeo-v"></span> </NavLink> <NavLink to="#"> <span className="fab fa-youtube"></span> </NavLink> </li>
      </ul>
      <ul className="main-menu-m">
        <li> <NavLink to="index.html">Home</NavLink>
          <ul className="sub-menu-m">
            <li><NavLink to="/Homepage"></NavLink></li>
            <li><NavLink to="/Homepage"></NavLink></li>
            <li><NavLink to="home-03.html"></NavLink></li>
          </ul>
          <span className="arrow-main-menu-m"> <i className="fa fa-angle-right" aria-hidden="true"></i> </span> </li>
        <li> <NavLink to="/Category">News</NavLink> </li>
        <li> <NavLink to="category-02.html">Entertainment </NavLink> </li>
        <li> <NavLink to="/Category">Business</NavLink> </li>
        <li> <NavLink to="category-02.html">Travel</NavLink> </li>
        <li> <NavLink to="/Category">Life Style</NavLink> </li>
        <li> <NavLink to="category-02.html">Video</NavLink> </li>
        <li> <NavLink to="#">Features</NavLink>
          <ul className="sub-menu-m">
            <li><NavLink to="/Category">Category Page v1</NavLink></li>
            <li><NavLink to="category-02.html">Category Page v2</NavLink></li>
            <li><NavLink to="blog-grid.html">Blog Grid Sidebar</NavLink></li>
            <li><NavLink to="/detailpage">Blog List Sidebar v1</NavLink></li>
            <li><NavLink to="blog-list-02.html">Blog List Sidebar v2</NavLink></li>
            <li><NavLink to="detail.html">Blog Detail Sidebar</NavLink></li>
            <li><NavLink to="blog-detail-02.html">Blog Detail No Sidebar</NavLink></li>
            <li><NavLink to="about.html">About Us</NavLink></li>
            <li><NavLink to="contact.html">Contact Us</NavLink></li>
          </ul>
          <span className="arrow-main-menu-m"> <i className="fa fa-angle-right" aria-hidden="true"></i> </span> </li>
      </ul>
    </div>





  
  
      {/*     Menu Dessktop   */}
      <div className="wrap-main-nav">
        <div className="main-nav"> 
          
          <nav className="menu-desktop"> <NavLink className="logo-stick" to="index.html"> <img src="images/icons/logo-01.png" alt="LOGO"/> </NavLink>
            <ul className="main-menu">
              <li className="main-menu-active"> <NavLink to="index.html">Home</NavLink> </li>
              <li className="mega-menu-item"> <NavLink to="category.html">News</NavLink>
                <div className="sub-mega-menu">
                  <div className="nav flex-column nav-pills" role="tablist"> <NavLink className="nav-link active" data-toggle="pill" to="#news-0" role="tab">All</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#news-1" role="tab">Entertaiment</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#news-2" role="tab">Fashion</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#news-3" role="tab">Life Style</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#news-4" role="tab">Technology</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#news-5" role="tab">Travel</NavLink> </div>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="news-0" role="tabpanel">
                      <div className="row">
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-05.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-10.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Finance </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-14.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Beach </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-36.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Technology </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
            
                    <div className="tab-pane" id="news-1" role="tabpanel">
                      <div className="row">
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-50.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-08.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                      
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-07.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                        
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-06.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="news-2" role="tabpanel">
                      <div className="row">
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-21.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-24.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                        
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-22.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-23.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="news-3" role="tabpanel">
                      <div className="row">
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-25.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-27.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-26.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wra
                    p-pic-w hov1 trans-03"> <img src="images/post-34.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                    <div className="tab-pane" id="news-4" role="tabpanel">
                      <div className="row">
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-35.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"
                      > <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                  
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-36.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"
                      > <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                  
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-37.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wra
                    p-pic-w hov1 trans-03"> <img src="images/post-38.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                    <div className="tab-pane" id="news-5" role="tabpanel">
                      <div className="row">
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-39.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"
                      > <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                  
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-41.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"
                      > <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                  
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-42.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wra
                    p-pic-w hov1 trans-03"> <img src="images/post-40.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                  </div>
          
                </div>
              </li>
              <li className="mega-menu-item"> <NavLink to="category-02.html">Entertainment </NavLink>
                <div className="sub-mega-menu">
                  <div className="nav flex-column nav-pills" role="tablist"> <NavLink className="nav-link active" data-toggle="pill" to="#enter-1" role="tab">All</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#enter-2" role="tab">Game</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#enter-3" role="tab">Celebrity</NavLink> </div>
                  <div className="tab-content">
            
                    <div className="tab-pane show active" id="enter-1" role="tabpanel">
                      <div className="row">
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-25.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"
                      > <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-27.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-26.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-34.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
            
                    <div className="tab-pane" id="enter-2" role="tabpanel">
                      <div className="row">
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-35.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"
                      > <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-36.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-37.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wra
                    p-pic-w hov1 trans-03"> <img src="images/post-38.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                    <div className="tab-pane" id="enter-3" role="tab
            panel">
                      <div className="row">
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-39.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"
                      > <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                  
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-41.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"
                      > <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                  
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-42.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wra
                    p-pic-w hov1 trans-03"> <img src="images/post-40.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                  </div>
          
                </div>
              </li>
              <li className="mega-menu-item"> <NavLink to="/Category">Business</NavLink>
                <div className="sub-mega-menu">
                  <div className="nav flex-column nav-pills" role="tablist"> <NavLink className="nav-link active" data-toggle="pill" to="#business-1" role="tab">All</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#business-2" role="tab">Economy</NavLink> </div>
                  <div className="tab-content">
            
                    <div className="tab-pane show active" id="business-1" role="tabpanel">
                      <div className="row">
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-10.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"
                      > <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-11.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-26.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-34.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
            
                    <div className="tab-pane" id="business-2" role="tabpanel">
                      <div className="row">
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-35.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"
                      > <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-36.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-37.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wra
                    p-pic-w hov1 trans-03"> <img src="images/post-38.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                  </div>
          
                </div>
              </li>
              <li className="mega-menu-item"> <NavLink to="category-02.html">Travel</NavLink>
                <div className="sub-mega-menu">
                  <div className="nav flex-column nav-pills" role="tablist"> <NavLink className="nav-link active" data-toggle="pill" to="#travel-1" role="tab">All</NavLink> <NavLink className="nav-link" data-toggle="pill" to="#travel-2" role="tab">Hotels</NavLink> </div>
                  <div className="tab-content">
            
                    <div className="tab-pane show active" id="travel-1" role="tabpanel">
                      <div className="row">
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-39.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"
                      > <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-41.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-42.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-40.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
            
                    <div className="tab-pane" id="travel-2" role="tabpanel">
                      <div className="row">
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-35.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"
                      > <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-36.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-37.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wra
                    p-pic-w hov1 trans-03"> <img src="images/post-38.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                  </div>
          
                </div>
              </li>
              <li className="mega-menu-item"> <NavLink to="/Category">Life Style</NavLink>
                <div className="sub-mega-menu">
                  <div className="nav flex-column nav-pills" role="tablist"> <NavLink className="nav-link active" data-toggle="pill" to="#life-1" role="tab">All</NavLink> </div>
                  <div className="tab-content">
            
                    <div className="tab-pane show active" id="life-1" role="tabpanel">
                      <div className="row">
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-25.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                
                        <div className="col-3"> 
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-27.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-26.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-34.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
            
                  </div>
                </div>
        
              </li>
              <li className="mega-menu-item"> <NavLink to="category.html">Video</NavLink>
                <div className="sub-mega-menu">
                  <div className="nav flex-column nav-pills" role="tablist"> <NavLink className="nav-link active" data-toggle="pill" to="#video-1" role="tab">All</NavLink> </div>
                  <div className="tab-content">
                    <div className="tab-pane show active" id="video-1" role="tabpanel">
                      <div className="row">
                        <div className="col-3"> 
                  
                          
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-50.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 18 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                        
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-08.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Feb 12 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-07.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 20 </span> </span> </div>
                          </div>
                        </div>
                        <div className="col-3"> 
                          
                  
                          <div> <NavLink to="detail.html" className="wrap-pic-w hov1 trans-03"> <img src="images/post-06.jpg" alt="IMG"/> </NavLink>
                            <div className="p-t-10">
                      
                              <h5 className="p-b-5"> <NavLink to="detail.html" className="f1-s-5 cl3 hov-cl10 trans-03"> Donec metus orci, malesuada et lectus vitae </NavLink> </h5>
                              <span className="cl8"> <NavLink to="#" className="f1-s-6 cl8 hov-cl10 trans-03"> Music </NavLink> <span className="f1-s-3 m-rl-3"> - </span> <span className="f1-s-3"> Jan 15 </span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
            
                  </div>
                </div>
        
              </li>
              <li> <NavLink to="#">Features</NavLink> 
                <ul className="sub-menu">
                                      <li><NavLink to="/Categorypage">Category Page v1</NavLink></li>
                                      <li><NavLink to="category-02.html">Category Page v2</NavLink></li>
                    <li><NavLink to="blog-grid.html">Blog Grid Sidebar</NavLink></li>
                                      <li><NavLink to="/Detailpage">Blog List Sidebar v1</NavLink></li>
                                      <li><NavLink to="blog-list-02.html">Blog List Sidebar v2</NavLink></li>
                                      <li><NavLink to="detail.html">Blog Detail Sidebar</NavLink></li>
                                      <li><NavLink to="blog-detail-02.html">Blog Detail No Sidebar</NavLink></li>
                                      <li><NavLink to="about.html">About Us</NavLink></li>
                                      <li><NavLink to="contact.html">Contact Us</NavLink></li>
                                  </ul>  
              </li>
            </ul>
          </nav>
        </div>
      </div>
    
  
        </div>


);

    }
}
export default Header;