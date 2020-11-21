import React from 'react';
import axios from 'axios';
class Interview extends React.Component{

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
        const Interview=this.state.news.map((news)=>{
          console.log(news.newsSection.sectionName);
          if(news.newsSection.sectionName=="Interview") 
          {
            console.log(i)
            if(i==0){
              i=1;
          
return(
  <div class="carousel-item active">
                        <div class="row">
                          <div class="col-md-5"> <img class="d-block w-100" src={news.photolink} alt="First slide"/><br></br><br/>
                            <h3></h3>
                          </div>
                          
                          
                          <div class="col-md-7">
<h1 class="news-sec-title">{news.headline}</h1>
                            <p>{news.shortDescription}</p>
                            <br/>
                            <button class="btn btn-md btn-success">READ More...</button>
                          </div>
                          
                          
                        </div>
                        
                        
                      </div>
)
}
i++;
if(i>0){
return(
<div class="carousel-item">
                        <div class="row">
                          <div class="col-md-5"> <img class="d-block w-100" src={news.photolink} alt="First slide"/><br></br><br/>
                            <h3></h3>
                          </div>
                          
                          
                          <div class="col-md-7">
<h1 class="news-sec-title">{news.headline}</h1>
                            <p>{news.shortDescription}</p>
                            <br/>
                            <button class="btn btn-md btn-success">READ More...</button>
                          </div>
                          
                          
                        </div>
                        
                        
                      </div>
)
}
}         
        } )     
return(
<div>

<section class="bg0 p-t-10 p-b-25">
      <div class="container">

        <div class="row">

          <div style={{border: '1px solid #ccc;background:white', padding:'20px'}}> 
           
            <div class="col-md-12">
      
              <div id="carouselExample3" class="carousel slide" data-ride="carousel" data-interval="false">
                <div class="row">
          
                  <h1 class="news-sec-title">Weekend Interview</h1>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="carousel-inner" id="interview">
                      
                      {Interview}
                    </div>
                   
                    </div>
                  </div>
                  
                  
                  <div class="col-md-12">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExample3" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExample3" data-slide-to="1"></li>
                      <li data-target="#carouselExample3" data-slide-to="2"></li>
                    </ol>
                    
                    
                  </div>
                  
                  
                
     
            </div>
  
          </div>
          </div>
  </div>    
</div>
</section>
</div>
);
}
}

    export default Interview;