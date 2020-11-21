var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'cs/custom.css';  
      
        link.type = 'cs/main.css'; 
      
        link.href = 'cs/utill.css';  
  





/*Featured*/

var Featured=document.getElementById("section1");
var head=document.getElementById("span");
head.setAttribute("class","text-uppercase cl2 p-r-8");
head.textContent="Flash News:";
const request=new XMLHttpRequest();

request.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
 request.setRequestHeader("Access-Control-Allow-Origin", "*");

 request.setRequestHeader("Access-Control-Allow-Credentials", "true");
 request.setRequestHeader('Content-Type',"application/json");
request.open("GET","http://localhost:8084/api/news/newss",true);





request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=14)
    {

        const featuredPosts=document.createElement("div");
        featuredPosts.setAttribute("class","f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c")
        
        const post=document.createElement("span");
post.setAttribute("class","dis-inline-block cl6 slide100-txt pos-relative size-w-0")
post.textContent(news.headline);
Featured.appendChild(head);
featured.appendChild(post);
section1.appendChild(Featured);
}
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};


/* HIGHLIGHTS PART*/





var carousal_inner=document.getElementById("section2");
const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);
request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=1)
    {
        const item_carousel=document.createElement("div");
        item_carousel.setAttribute("class","carousel-item active");
        const flex_container=document.createElement("div");
        flex_container.setAttribute("class","mask flex-center");
        const carousal_container=document.createElement("div");
        carousal_container.setAttribute("class","container");
        const row =document.createElement("div");
        row.setAttribute("class","row align-items-center");
        row.setAttribute("style","background: #050e61");
        const column_1=document.createElement("div");
        column_1.setAttribute("class","col-md-7");
        const column_2=document.createElement("div");
        column_2.setAttribute("class","col-md-5");
        const img=document.createElement("img");
        img.setAttribute("alt","slide");
        img.setAttribute("style","margin-left:-19px");
        img.setAttribute("src",news.photolink);
        const headline=document.createElement("h4");
        headline.textContent(news.headline)
        const description=document.createElement("p");
        description.textContent(news.shortDescription);
        const readMore=document.createElement("a");
        readMore.setAttribute("href","detail.html");
        readMore.textContent="Read More";
        section2.appendchild(item_carousal);
        item_carousel.appendChild(flex_container);
        flex_container.appendChild(carousal_container);
        carousal_container.appendChild(row);
        row.appendChild(column_1);
        row.appendChild(column_2);
        column_1.appendChild(img);
        column_2.appendChild(headline);
        column_2.appendChild(description);
        column_2.appendChild(readMore);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/* JUST IN PART*/


var carousal_inner=document.getElementById("section3");
const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);





request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=3)
    {
        const item_carousel=document.createElement("div");
        item_carousel.setAttribute("class","carousel-item active");
        
        const img=document.createElement("img");
        img.setAttribute("class","d-block w-100 recent-img");
        img.setAttribute("alt","thumb");
        img.setAttribute("src",news.photolink);
        const headline=document.createElement("h1");
        headline.setAttribute("class","recent-news-title");
        
        const link=document.createElement("a");
        link.setAttribute("class","cl2 hov-cl10 trans-03");
        link.setAttribute("href","#");
        link.textContent(news.headline);
        item_carousel.appendChild(img);
        headline.append(link);
        item_carousel.append(headline);
        carousal_inner.appendChild(item_carousel);

    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*News Recommended for you*/

const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section4");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=3)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile4");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=3)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};
/* National */




const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section5");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=4)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile5");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=4)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*International  */

const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section6");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=5)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile6");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=5)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/* Local */


const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section7");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=6)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile7");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=6)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};


/* Technology */

const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section8");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=7)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile8");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=7)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/* Sports */
const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section9");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=8)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile9");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=8)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};
/* Business */

const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section10");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=9)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile10");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=9)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/* Success Stories */

const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section11");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=10)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile11");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=10)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};
/* viral goes  */
const request=new XMLHttpRequest();


request.open("GET","http://localhost:8084/api/news/newss",true);




var carousal_inner=document.getElementById("section12");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=11)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("class","carousel-item active");
const row=document.createElement("div");
       
        const col=document.createElement("div");
        col.setAttribute("class","m-b-10 col-md-3");
        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent(news.approvedBy)
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        col.appendChild(item);
        row.appendChild(col);
        item_carousal.appendChild(row);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};

/*Carousal Moile*/
var carousal_inner=document.getElementById("mobile12");
carousal_inner.setAttribute("class","carousal_inner");

request.onload=function()
{
    var data=JSON.parse(this.response);
    console.log(data);
    if(request.status >=200 && request.status <400)
    {
data.forEach(news => {
    if(news.newsSection.newsSectioId=11)
    {
        const item_carousel=document.createElement("div");
item_carousel.setAttribute("carousel-item active");

        const item=document.createElement("div");
        item.setAttribute("class","news-item");
        
        const link=document.createElement("a");
        link.setAttribute("class","wrap-pic-w hov1 trans-03");
        link.setAttribute("href","detail.html");
        const img=document.createElement(img);
        img.setAttribute("alt","IMG");
        img.setAttribute("src","news.photolink");
        const data=document.createElement("div");
        data.setAttribute("class","p-t-16");
        const wrap=document.createElement("div");
        wrap.setAttribute("class","m-b-45")
        const head=document.createElement("h5");
        head.setAttribute("class","p-b-5");
        
        const description=document.createElement("span");
        description.setAttribute("class","cl8");
        const link1=document.createElement("class","f1-m-3 cl2 hov-cl10 trans-03");
        link1.setAttribute("href","detail.html");
        link1.textContent(news.headline);
        const link2=document.createElement("class","f1-s-4 cl8 hov-cl10 trans-03");
        link2.setAttribute("href","detail.html");
        link2.textContent = news.approvedBy
        const date=document.createElement("span");
        date.setAttribute("class","f1-s-3");
        date.textContent(news.date_created);
        description.appendChild(link2);
        description.append(date);
        head.appendChild(link1);
        data.appendChild(head);
        date.appendChild(description);
        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(data);
        wrap.appendChild(hdat);
        item.appendChild(wrap);
        
        item_carousal.appendChild(item);
        carousal_inner.appendChild(item_carousal);
    }
});
}
else{
    const error_message=document.createElement("marquee");
    error_message.textContent="Not Working";
    item_carousel.appendChild("error_message");
}
request.send();
};
/*weekend interview  */