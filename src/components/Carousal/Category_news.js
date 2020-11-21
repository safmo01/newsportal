import React from 'react';
import axios from 'axios';
class Category_news extends React.Component{
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
     const  chunkArray=(myArray, chunk_size)=> {
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];
      
        for (index = 0; index < arrayLength; index += chunk_size) {
        const  myChunk = myArray.slice(index, index + chunk_size);
          
          tempArray.push(myChunk);
        }
        return tempArray;
  }
  
  var temp=[];
this.state.news.map((news)=>{
 if(news.newsSection.newsSectionName=="Justin")
 {
   temp.push(news)
   console.log(news)
   console.log(temp)
 }
})

let i=0;
const news=chunkArray(temp,4)
const Category_news=
this.state.news.map((news)=>
{
  if(i=0)
  {
    i=1
  return(
<div class="carousel-item active">
<div class="row">

</div>
</div>)}
})
if(i>0){
        return(

          <div class="carousel-item">
          <div class="row">
          {carousal_single}
          </div>
          </div>)}
  

const carousal_single=this.state.news.map((single)=>{
  return(
  <div class="m-b-10 col-md-3">
                <div class="news-item"> <a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03"> <img src={news.photolink} alt="IMG"/> </a>
                  <div class="p-t-16">
                    <h5 class="p-b-5"> <a href="blog-detail-01.html" class="f1-m-3 cl2 hov-cl10 trans-03"> You wish lorem ipsum dolor sit amet consectetur </a> </h5>
                    <span class="cl8"> <a href="#" class="f1-s-4 cl8 hov-cl10 trans-03"> by John Alvarado </a> <span class="f1-s-3 m-rl-3"> - </span> <span class="f1-s-3"> Feb 18 </span> </span>
                     </div>
                </div>
                </div>)
}
)



return(

<div>

<section className="bg0 p-t-10">
  <div className="container">
    <div className="row">
      <h1 className="news-sec-title">Business News</h1>
    </div>
  </div>
  <div className="container">
    <div className="row" >
      <div  style={{padding:'0 50px'}} id="carouselExample-business" className="carousel slide d-none d-sm-none d-md-block" data-ride="carousel" data-interval="false">
        <div className="carousel-inner" id="business">
          
          {Category_news}
          
        </div>

        <a className="carousel-control-prev" href="#carouselExample-business" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> 

        
        <a className="carousel-control-next" href="#carouselExample-business" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> 
    
        
      </div>
      
    </div>  

</div>
</section>
</div>

);
    }
}
export default Category_news;