import React from 'react';
import axios from 'axios';
class Highlights extends React.Component{
  constructor(){
    super();
  this.state={
    news:[]
  }
  
}
  componentDidMount()
  {
    axios.get('http://192.64.83.107:8085/api/news/newss').then(res=>{
      var news=res.data;
      console.log(news);
      this.setState({news})
    
    })
  }
  
  render ()
    {
      var i=0;
      const Highlights=this.state.news.map((news)=>{
        console.log(news.newsSection.sectionName);
        if(news.newsSection.sectionName=="Highlights") 
        {
          console.log(i)
          if(i==0){
            i=1;
        return(
          
<div class="carousel-item active">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center" style={{background: '#050e61',paddingLeft:'-15px'}}>
                <div class="col-md-7 "><img src={news.photolink}  alt="slide" style={{marginLeft: '-19px'}}/>
                </div>
                <div class="col-md-5 " >
                  <h4> {news.headline}
                    </h4>
                  <p>{news.shortdescription}</p>
                  <a href="#">READ MORE</a> </div>
              </div>
            </div>
          </div>
        </div>
        
      
        )
        
      }
      i++;
      if(i>0){
        return(
          <div class="carousel-item">
          <div class="mask flex-center">
            <div class="container">
              <div class="row align-items-center" style={{background: '#050e61',paddingLeft:'-15px'}}>
                <div class="col-md-7 "><img src={news.photolink}  alt="slide" style={{marginLeft: '-19px'}}/>
                </div>
                <div class="col-md-5 " >
                  <h4> {news.headline}
                    </h4>
                  <p>{news.shortdescription}</p>
                  <a href="#">READ MORE</a> </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
      
      
      }
      }
      )
return(

<div>
<section className="bg0">
  <div className="container" >

    <div id="myCarousel"className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
      <div className="carousel-inner" id="highlights">
        
      
        {Highlights}
    </div>

    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> 
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>  
  </div>
</div>
</section>



</div>);
    }
}

export default Highlights;