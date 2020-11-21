
import React from 'react';
import axios from 'axios';
class Justin extends React.Component{

  
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
      const Justin=this.state.news.map((news)=>{
        console.log(news.newsSection.sectionName);
        if(news.newsSection.sectionName=="Justin") 
        {
          console.log(i)
          if(i==0){
            i=1;
        return(

<div class="carousel-item active"> <img class="d-block w-100 recent-img" src={news.photolink} alt="Second slide"/>
                  <div>
        <h1 class="recent-news-title">{news.headline}</h1>
                  </div>
                </div>

)
}
      i++;
      if(i>0){
        return(

<div class="carousel-item"> <img class="d-block w-100 recent-img" src={news.photolink} alt="Second slide"/>
<div>
<h1 class="recent-news-title">{news.headline}</h1>
</div>
</div>
        )
      }
      
      
      }
      }
      )

return(

<div>


<section className="bg0 p-t-10">
  <div className="container">
    <div className="row" >
      <div className="col-md-9" style={{paddingLeft:'-10px'}}>

        <div  style={{border: '1px solid #ccc;padding:10px 10px 20px 10px', background: '#fff'}}>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
            <div>
              
              <div className="carousel-inner" id="Justin">
                {Justin}
              </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span>
               </a> <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
               </div>
        
          </div>
        </div>
      
      <div class="col-md-3" >
        <div class="gadd1"><img src="images/gadd1.jpg" width="100%" alt="ad1"/></div>
        <br></br>
        <div class="gadd1"><img src="images/gadd1.jpg" width="100%" alt="ad2"/></div>
      </div>
    </div>
  </div>
</section>


</div>);

}
}
export default Justin;