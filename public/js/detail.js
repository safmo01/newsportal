(function ($) {
  "use strict";

  /*==================================================================
    [ Load page ]*/
  try {
    $(".animsition").animsition({
      inClass: "fade-in",
      outClass: "fade-out",
      inDuration: 1500,
      outDuration: 800,
      linkElement: ".animsition-link",
      loading: true,
      loadingParentElement: "html",
      loadingClass: "animsition-loading-1",
      loadingInner: '<div class="loader05"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ["animation-duration", "-webkit-animation-duration"],
      overlay: false,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "html",
      transition: function (url) {
        window.location.href = url;
      },
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Back to top ]*/
  try {
    var windowH = $(window).height() / 2;

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > windowH) {
        $("#myBtn").addClass("show-btn-back-to-top");
      } else {
        $("#myBtn").removeClass("show-btn-back-to-top");
      }
    });

    $("#myBtn").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Fixed menu ]*/
  try {
    var posNav = $(".wrap-main-nav").offset().top;
    var menuDesktop = $(".container-menu-desktop");
    var mainNav = $(".main-nav");
    var lastScrollTop = 0;
    var st = 0;

    $(window).on("scroll", function () {
      fixedHeader();
    });

    $(window).on("resize", function () {
      fixedHeader();
    });

    $(window).on("load", function () {
      fixedHeader();
    });

    var fixedHeader = function () {
      st = $(window).scrollTop();

      if (st > posNav + mainNav.outerHeight()) {
        $(menuDesktop).addClass("fix-menu-desktop");
      } else if (st <= posNav) {
        $(menuDesktop).removeClass("fix-menu-desktop");
      }

      if (st > lastScrollTop) {
        $(mainNav).removeClass("show-main-nav");
      } else {
        $(mainNav).addClass("show-main-nav");
      }

      lastScrollTop = st;
    };
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Menu mobile ]*/
  try {
    $(".btn-show-menu-mobile").on("click", function () {
      $(this).toggleClass("is-active");
      $(".menu-mobile").slideToggle();
    });

    var arrowMainMenu = $(".arrow-main-menu-m");

    for (var i = 0; i < arrowMainMenu.length; i++) {
      $(arrowMainMenu[i]).on("click", function () {
        $(this).parent().find(".sub-menu-m").slideToggle();
        $(this).toggleClass("turn-arrow-main-menu-m");
      });
    }

    $(window).on("resize", function () {
      if ($(window).width() >= 992) {
        if ($(".menu-mobile").css("display") === "block") {
          $(".menu-mobile").css("display", "none");
          $(".btn-show-menu-mobile").toggleClass("is-active");
        }

        $(".sub-menu-m").each(function () {
          if ($(this).css("display") === "block") {
            $(this).css("display", "none");
            $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
          }
        });
      }
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Respon tab01 ]*/
  try {
    $(".tab01").each(function () {
      var tab01 = $(this);
      var navTabs = $(this).find(".nav-tabs");
      var dropdownMenu = $(tab01).find(
        ".nav-tabs>.nav-item-more .dropdown-menu"
      );
      var navItem = $(tab01).find(".nav-tabs>.nav-item");

      var navItemSize = [];
      var size = 0;
      var wNavItemMore = 0;

      $(window).on("load", function () {
        navItem.each(function () {
          size += $(this).width();
          navItemSize.push(size);
        });

        responTab01();
      });

      $(window).on("resize", function () {
        responTab01();
      });

      var responTab01 = function () {
        if (navTabs.width() <= navItemSize[navItemSize.length - 1] + 1) {
          $(tab01).find(".nav-tabs>.nav-item-more").removeClass("dis-none");
        } else {
          $(tab01).find(".nav-tabs>.nav-item-more").addClass("dis-none");
        }

        wNavItemMore = $(tab01)
          .find(".nav-tabs>.nav-item-more")
          .hasClass("dis-none")
          ? 0
          : $(tab01).find(".nav-tabs>.nav-item-more").width();

        for (var i = 0; i < navItemSize.length; i++) {
          if (navTabs.width() - wNavItemMore <= navItemSize[i] + 1) {
            $(tab01).find(".nav-tabs .nav-item").remove();

            for (var j = i - 1; j >= 0; j--) {
              $(navTabs).prepend($(navItem[j]).clone());
            }

            for (var j = i; j < navItemSize.length; j++) {
              $(dropdownMenu).append($(navItem[j]).clone());
            }

            break;
          } else {
            $(tab01).find(".nav-tabs .nav-item").remove();

            for (var j = i; j >= 0; j--) {
              $(navTabs).prepend($(navItem[j]).clone());
            }
          }
        }
      };
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Play video 01 ]*/
  try {
    var srcOld = $(".video-mo-01").children("iframe").attr("src");

    $('[data-target="#modal-video-01"]').on("click", function () {
      $(".video-mo-01").children("iframe")[0].src += "&autoplay=1";

      setTimeout(function () {
        $(".video-mo-01").css("opacity", "1");
      }, 300);
    });

    $('[data-dismiss="modal"]').on("click", function () {
      $(".video-mo-01").children("iframe")[0].src = srcOld;
      $(".video-mo-01").css("opacity", "0");
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Tab mega menu ]*/
  try {
    $(window).on("load", function () {
      $(".sub-mega-menu .nav-pills > a").hover(function () {
        $(this).tab("show");
      });
    });
  } catch (er) {
    console.log(er);
  }

  /*==================================================================
    [ Slide100 txt ]*/

  try {
    $(".slide100-txt").each(function () {
      var slideTxt = $(this);
      var itemSlideTxt = $(this).find(".slide100-txt-item");
      var data = [];
      var count = 0;
      var animIn = $(this).data("in");
      var animOut = $(this).data("out");

      for (var i = 0; i < itemSlideTxt.length; i++) {
        data[i] = $(itemSlideTxt[i]).clone();
        $(data[i]).addClass("clone");
      }

      $(window).on("load", function () {
        $(slideTxt).find(".slide100-txt-item").remove();
        $(slideTxt).append($(data[0]).clone());
        $(slideTxt)
          .find(".slide100-txt-item.clone")
          .addClass(animIn + " visible-true");
        count = 0;
      });

      setInterval(function () {
        $(slideTxt)
          .find(".slide100-txt-item.ab-t-l." + animOut)
          .remove();
        $(slideTxt)
          .find(".slide100-txt-item")
          .addClass("ab-t-l " + animOut);

        if (count >= data.length - 1) {
          count = 0;
        } else {
          count++;
        }

        console.log($(data[count]).text());

        $(slideTxt).append($(data[count]).clone());
        $(slideTxt)
          .find(".slide100-txt-item.clone")
          .addClass(animIn + " visible-true");
      }, 5000);
    });
  } catch (er) {
    console.log(er);
  }

  /*---Loading Flash-->*/
})(jQuery);


var url = "http://192.64.83.107:8085/api/news";
var id=localStorage.getItem("id")
console.log(id)
var params = id;
var request1 = new XMLHttpRequest();
var request2=new XMLHttpRequest();
console.log(location.href)
request1.open("GET", `${url}/${params}`, true);
request1.onload = function () {
  var data = JSON.parse(this.response);
  //   console.log(this);
  if (request1.status >= 200 && request1.status < 400) {
    getNews(data)
  } else {
    alert("Error");
  }
};
request1.send();

request2.open("GET"," http://192.64.83.107:8085/api/news/newss" , true);
request2.onload = function () {
  var data = JSON.parse(this.response);
  //   console.log(this);
  if (request2.status >= 200 && request1.status < 400) {
    loadInternational(data);
    loadLocal(data);
    loadTechnology(data);
    loadSports(data);
    loadBusiness(data);
    loadSuccess(data);
    loadViral(data);
    
    loadInterview(data);
  } else {
    alert("Error");
  }
};

request2.send();


function getNews(news) {

  const blog = document.getElementById("blogDetail");

  const link = document.createElement("a");
  link.textContent = news.newsSection.sectionName;
  link.setAttribute("href", `#`);
  link.setAttribute("class", "f1-s-10 cl2 hov-cl10 trans-03 text-uppercase");

  const newsHeadline = document.createElement("h3");
  newsHeadline.setAttribute("class", "f1-l-3 cl2 p-b-16 p-t-33 respon2");
  newsHeadline.textContent = news.headline;

  const statsDiv = document.createElement("div");
  statsDiv.setAttribute("class", "flex-wr-s-s p-b-40");

  const statsSpan = document.createElement("span");
  statsSpan.setAttribute("class", "f1-s-3 cl8 m-r-15");

  const author = document.createElement("a");
  author.setAttribute("href", `#`);
  author.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
  author.textContent = `by ${news.approvedBy}`;

  const spanDash = document.createElement("span");
  spanDash.setAttribute("class", "m-rl-3");
  spanDash.textContent = "-";

  const spanDate = document.createElement("span");
  spanDate.textContent = news.createdDate;

  statsSpan.appendChild(author);
  statsSpan.appendChild(spanDash);
  statsSpan.appendChild(spanDate);

  const spanViews = document.createElement("span");
  spanViews.setAttribute("class", "f1-s-3 cl8 m-r-15");
  spanViews.textContent = "5239 Views";

  const commentCount = document.createElement("a");
  commentCount.setAttribute("class", "f1-s-3 cl8 hov-cl10 trans-03 m-r-15");
  commentCount.setAttribute("href", `#`);
  commentCount.textContent = " 0 Comment ";

  statsDiv.appendChild(statsSpan);
  statsDiv.appendChild(spanViews);
  statsDiv.appendChild(commentCount);

  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "wrap-pic-max-w p-b-30");
  const imgSrc = document.createElement("img");
  imgSrc.setAttribute("src", `${news.photolink}`);

  imgDiv.appendChild(imgSrc);

  const newsDesc = document.createElement("p");
  newsDesc.setAttribute("class", "f1-s-11 cl6 p-b-25");
  newsDesc.textContent = news.newsDescription;

  const shareDiv= document.getElementById('share');

  blog.appendChild(link);
  blog.appendChild(newsHeadline);
  blog.appendChild(statsDiv);
  blog.appendChild(imgDiv);
  blog.appendChild(newsDesc);
  blog.appendChild(shareDiv).style.display="inline"
}

function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
  
    for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }
  
    return tempArray;
  }


function loadInternational(data) {
  const international = document.getElementById("international");

  let i = 0;
  const news = chunkArray(data, 4);
  console.log(news);
  news.forEach((carousel_single) => {
    const carousel_item = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    carousel_item.appendChild(row);
    if (i === 0) {
      carousel_item.setAttribute("class", "carousel-item active");
      i++;
    } else {
      carousel_item.setAttribute("class", "carousel-item");
    }
    carousel_single.forEach((single) => {
      const col = document.createElement("div");
      col.setAttribute("class", "m-b-10 col-md-3");
      const news_item = document.createElement("div");
      news_item.setAttribute("class", "news-item");

      const link = document.createElement("a");
      link.setAttribute("href", "detail.html");
      link.setAttribute("class", "wrap-pic-w hov1 trans-03");
      const img = document.createElement("img");
      img.setAttribute("src", single.photolink);
      link.appendChild(img);

      const desc = document.createElement("div");
      desc.setAttribute("class", "p-t-16");

      const head = document.createElement("h3");
      head.setAttribute("class", "p-b-5");

      const link2 = document.createElement("a");
      link2.setAttribute("href", "detail.html");
      link2.setAttribute("class", "f1-m-3 cl2 hov-cl10 trans-03");
      link2.textContent = single.headline;
      head.appendChild(link2);
      desc.appendChild(head);

      const desc2 = document.createElement("span");
      desc2.setAttribute("class", "c18");

      const link3 = document.createElement("a");
      link3.setAttribute("href", "detail.html");
      link3.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
      link3.textContent = single.approvedBy;

      const span1 = document.createElement("span");
      span1.setAttribute("class", "f1-s-3 m-rl-3");
      span1.textContent = "-";
      const span2 = document.createElement("span");
      span2.textContent = single.createdDate;
      span2.setAttribute("class", "f1-s-3");

      desc2.appendChild(link3);
      desc2.appendChild(span1);
      desc2.appendChild(span2);
      desc.appendChild(desc2);
      news_item.appendChild(link);
      news_item.appendChild(desc);
      col.appendChild(news_item);
      // row.appendChild(col)

      row.appendChild(col);
    });
    // row.appendChild(carousel_item)
    console.log(carousel_single);
    international.appendChild(carousel_item);
  });
  
}

function loadLocal(data) {
  const national = document.getElementById("local");

  let i = 0;
  const news = chunkArray(data, 4);
  console.log(news);
  news.forEach((carousel_single) => {
    const carousel_item = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    carousel_item.appendChild(row);
    if (i === 0) {
      carousel_item.setAttribute("class", "carousel-item active");
      i++;
    } else {
      carousel_item.setAttribute("class", "carousel-item");
    }
    carousel_single.forEach((single) => {
      const col = document.createElement("div");
      col.setAttribute("class", "m-b-10 col-md-3");
      const news_item = document.createElement("div");
      news_item.setAttribute("class", "news-item");

      const link = document.createElement("a");
      link.setAttribute("href", "detail.html");
      link.setAttribute("class", "wrap-pic-w hov1 trans-03");
      const img = document.createElement("img");
      img.setAttribute("src", single.photolink);
      link.appendChild(img);

      const desc = document.createElement("div");
      desc.setAttribute("class", "p-t-16");

      const head = document.createElement("h3");
      head.setAttribute("class", "p-b-5");

      const link2 = document.createElement("a");
      link2.setAttribute("href", "detail.html");
      link2.setAttribute("class", "f1-m-3 cl2 hov-cl10 trans-03");
      link2.textContent = single.headline;
      head.appendChild(link2);
      desc.appendChild(head);

      const desc2 = document.createElement("span");
      desc2.setAttribute("class", "c18");

      const link3 = document.createElement("a");
      link3.setAttribute("href", "detail.html");
      link3.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
      link3.textContent = single.approvedBy;

      const span1 = document.createElement("span");
      span1.setAttribute("class", "f1-s-3 m-rl-3");
      span1.textContent = "-";
      const span2 = document.createElement("span");
      span2.textContent = single.createdDate;
      span2.setAttribute("class", "f1-s-3");

      desc2.appendChild(link3);
      desc2.appendChild(span1);
      desc2.appendChild(span2);
      desc.appendChild(desc2);
      news_item.appendChild(link);
      news_item.appendChild(desc);
      col.appendChild(news_item);
      row.appendChild(col);
    });
    console.log(carousel_single);
    national.appendChild(carousel_item);
  });
}

function loadTechnology(data) {
  const technology = document.getElementById("technology");

  let i = 0;
  const news = chunkArray(data, 4);
  console.log(news);
  news.forEach((carousel_single) => {
    const carousel_item = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    carousel_item.appendChild(row);
    if (i === 0) {
      carousel_item.setAttribute("class", "carousel-item active");
      i++;
    } else {
      carousel_item.setAttribute("class", "carousel-item");
    }
    carousel_single.forEach((single) => {
      const col = document.createElement("div");
      col.setAttribute("class", "m-b-10 col-md-3");
      const news_item = document.createElement("div");
      news_item.setAttribute("class", "news-item");

      const link = document.createElement("a");
      link.setAttribute("href", "detail.html");
      link.setAttribute("class", "wrap-pic-w hov1 trans-03");
      const img = document.createElement("img");
      img.setAttribute("src", single.photolink);
      link.appendChild(img);

      const desc = document.createElement("div");
      desc.setAttribute("class", "p-t-16");

      const head = document.createElement("h3");
      head.setAttribute("class", "p-b-5");

      const link2 = document.createElement("a");
      link2.setAttribute("href", "detail.html");
      link2.setAttribute("class", "f1-m-3 cl2 hov-cl10 trans-03");
      link2.textContent = single.headline;
      head.appendChild(link2);
      desc.appendChild(head);

      const desc2 = document.createElement("span");
      desc2.setAttribute("class", "c18");

      const link3 = document.createElement("a");
      link3.setAttribute("href", "detail.html");
      link3.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
      link3.textContent = single.approvedBy;

      const span1 = document.createElement("span");
      span1.setAttribute("class", "f1-s-3 m-rl-3");
      span1.textContent = "-";
      const span2 = document.createElement("span");
      span2.textContent = single.createdDate;
      span2.setAttribute("class", "f1-s-3");

      desc2.appendChild(link3);
      desc2.appendChild(span1);
      desc2.appendChild(span2);
      desc.appendChild(desc2);
      news_item.appendChild(link);
      news_item.appendChild(desc);
      col.appendChild(news_item);
      row.appendChild(col);
    });

    console.log(carousel_single);
    technology.appendChild(carousel_item);
  });
}

function loadSports(data) {
  const national = document.getElementById("sports");

  let i = 0;
  const news = chunkArray(data, 4);
  console.log(news);
  news.forEach((carousel_single) => {
    const carousel_item = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    carousel_item.appendChild(row);
    if (i === 0) {
      carousel_item.setAttribute("class", "carousel-item active");
      i++;
    } else {
      carousel_item.setAttribute("class", "carousel-item");
    }
    carousel_single.forEach((single) => {
      const col = document.createElement("div");
      col.setAttribute("class", "m-b-10 col-md-3");
      const news_item = document.createElement("div");
      news_item.setAttribute("class", "news-item");

      const link = document.createElement("a");
      link.setAttribute("href", "detail.html");
      link.setAttribute("class", "wrap-pic-w hov1 trans-03");
      const img = document.createElement("img");
      img.setAttribute("src", single.photolink);
      link.appendChild(img);

      const desc = document.createElement("div");
      desc.setAttribute("class", "p-t-16");

      const head = document.createElement("h3");
      head.setAttribute("class", "p-b-5");

      const link2 = document.createElement("a");
      link2.setAttribute("href", "detail.html");
      link2.setAttribute("class", "f1-m-3 cl2 hov-cl10 trans-03");
      link2.textContent = single.headline;
      head.appendChild(link2);
      desc.appendChild(head);

      const desc2 = document.createElement("span");
      desc2.setAttribute("class", "c18");

      const link3 = document.createElement("a");
      link3.setAttribute("href", "detail.html");
      link3.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
      link3.textContent = single.approvedBy;

      const span1 = document.createElement("span");
      span1.setAttribute("class", "f1-s-3 m-rl-3");
      span1.textContent = "-";
      const span2 = document.createElement("span");
      span2.textContent = single.createdDate;
      span2.setAttribute("class", "f1-s-3");

      desc2.appendChild(link3);
      desc2.appendChild(span1);
      desc2.appendChild(span2);
      desc.appendChild(desc2);
      news_item.appendChild(link);
      news_item.appendChild(desc);
      col.appendChild(news_item);
      // row.appendChild(col)

      row.appendChild(col);
    });
    // row.appendChild(carousel_item)
    console.log(carousel_single);
    national.appendChild(carousel_item);
  });
}

function loadBusiness(data) {
  const national = document.getElementById("business");

  let i = 0;
  const news = chunkArray(data, 4);
  console.log(news);
  news.forEach((carousel_single) => {
    const carousel_item = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    carousel_item.appendChild(row);
    if (i === 0) {
      carousel_item.setAttribute("class", "carousel-item active");
      i++;
    } else {
      carousel_item.setAttribute("class", "carousel-item");
    }
    carousel_single.forEach((single) => {
      const col = document.createElement("div");
      col.setAttribute("class", "m-b-10 col-md-3");
      const news_item = document.createElement("div");
      news_item.setAttribute("class", "news-item");

      const link = document.createElement("a");
      link.setAttribute("href", "detail.html");
      link.setAttribute("class", "wrap-pic-w hov1 trans-03");
      const img = document.createElement("img");
      img.setAttribute("src", single.photolink);
      link.appendChild(img);

      const desc = document.createElement("div");
      desc.setAttribute("class", "p-t-16");

      const head = document.createElement("h3");
      head.setAttribute("class", "p-b-5");

      const link2 = document.createElement("a");
      link2.setAttribute("href", "detail.html");
      link2.setAttribute("class", "f1-m-3 cl2 hov-cl10 trans-03");
      link2.textContent = single.headline;
      head.appendChild(link2);
      desc.appendChild(head);

      const desc2 = document.createElement("span");
      desc2.setAttribute("class", "c18");

      const link3 = document.createElement("a");
      link3.setAttribute("href", "detail.html");
      link3.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
      link3.textContent = single.approvedBy;

      const span1 = document.createElement("span");
      span1.setAttribute("class", "f1-s-3 m-rl-3");
      span1.textContent = "-";
      const span2 = document.createElement("span");
      span2.textContent = single.createdDate;
      span2.setAttribute("class", "f1-s-3");

      desc2.appendChild(link3);
      desc2.appendChild(span1);
      desc2.appendChild(span2);
      desc.appendChild(desc2);
      news_item.appendChild(link);
      news_item.appendChild(desc);
      col.appendChild(news_item);
      // row.appendChild(col)

      row.appendChild(col);
    });
    // row.appendChild(carousel_item)
    console.log(carousel_single);
    national.appendChild(carousel_item);
  });
}
function loadSuccess(data) {
  const national = document.getElementById("success");

  let i = 0;
  const news = chunkArray(data, 4);
  console.log(news);
  news.forEach((carousel_single) => {
    const carousel_item = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    carousel_item.appendChild(row);
    if (i === 0) {
      carousel_item.setAttribute("class", "carousel-item active");
      i++;
    } else {
      carousel_item.setAttribute("class", "carousel-item");
    }
    carousel_single.forEach((single) => {
      const col = document.createElement("div");
      col.setAttribute("class", "m-b-10 col-md-3");
      const news_item = document.createElement("div");
      news_item.setAttribute("class", "news-item");

      const link = document.createElement("a");
      link.setAttribute("href", "detail.html");
      link.setAttribute("class", "wrap-pic-w hov1 trans-03");
      const img = document.createElement("img");
      img.setAttribute("src", single.photolink);
      link.appendChild(img);

      const desc = document.createElement("div");
      desc.setAttribute("class", "p-t-16");

      const head = document.createElement("h3");
      head.setAttribute("class", "p-b-5");

      const link2 = document.createElement("a");
      link2.setAttribute("href", "detail.html");
      link2.setAttribute("class", "f1-m-3 cl2 hov-cl10 trans-03");
      link2.textContent = single.headline;
      head.appendChild(link2);
      desc.appendChild(head);

      const desc2 = document.createElement("span");
      desc2.setAttribute("class", "c18");

      const link3 = document.createElement("a");
      link3.setAttribute("href", "detail.html");
      link3.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
      link3.textContent = single.approvedBy;

      const span1 = document.createElement("span");
      span1.setAttribute("class", "f1-s-3 m-rl-3");
      span1.textContent = "-";
      const span2 = document.createElement("span");
      span2.textContent = single.createdDate;
      span2.setAttribute("class", "f1-s-3");

      desc2.appendChild(link3);
      desc2.appendChild(span1);
      desc2.appendChild(span2);
      desc.appendChild(desc2);
      news_item.appendChild(link);
      news_item.appendChild(desc);
      col.appendChild(news_item);
      // row.appendChild(col)

      row.appendChild(col);
    });
    // row.appendChild(carousel_item)
    console.log(carousel_single);
    national.appendChild(carousel_item);
  });
}

function loadViral(data) {
  const national = document.getElementById("viral");

  let i = 0;
  const news = chunkArray(data, 3);
  console.log(news);
  news.forEach((carousel_single) => {
    const carousel_item = document.createElement("div");
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    carousel_item.appendChild(row);
    if (i === 0) {
      carousel_item.setAttribute("class", "carousel-item active");
      i++;
    } else {
      carousel_item.setAttribute("class", "carousel-item");
    }
    carousel_single.forEach((single) => {
      const col = document.createElement("div");
      col.setAttribute("class", "m-b-10 col-md-4");
      const news_item = document.createElement("div");
      news_item.setAttribute("class", "news-item");

      const link = document.createElement("a");
      link.setAttribute("href", "detail.html");
      link.setAttribute("class", "wrap-pic-w hov1 trans-03");
      const img = document.createElement("img");
      img.setAttribute("src", single.photolink);
      link.appendChild(img);

      const desc = document.createElement("div");
      desc.setAttribute("class", "p-t-16");

      const head = document.createElement("h3");
      head.setAttribute("class", "p-b-5");

      const link2 = document.createElement("a");
      link2.setAttribute("href", "detail.html");
      link2.setAttribute("class", "f1-m-3 cl2 hov-cl10 trans-03");
      link2.textContent = single.headline;
      head.appendChild(link2);
      desc.appendChild(head);

      const desc2 = document.createElement("span");
      desc2.setAttribute("class", "c18");

      const link3 = document.createElement("a");
      link3.setAttribute("href", "detail.html");
      link3.setAttribute("class", "f1-s-4 cl8 hov-cl10 trans-03");
      link3.textContent = single.approvedBy;

      const span1 = document.createElement("span");
      span1.setAttribute("class", "f1-s-3 m-rl-3");
      span1.textContent = "-";
      const span2 = document.createElement("span");
      span2.textContent = single.createdDate;
      span2.setAttribute("class", "f1-s-3");

      desc2.appendChild(link3);
      desc2.appendChild(span1);
      desc2.appendChild(span2);
      desc.appendChild(desc2);
      news_item.appendChild(link);
      news_item.appendChild(desc);
      col.appendChild(news_item);
      // row.appendChild(col)

      row.appendChild(col);
    });
    // row.appendChild(carousel_item)
    console.log(carousel_single);
    national.appendChild(carousel_item);
  });
}
function loadInterview(data)
  {
    const interview=document.getElementById("interview")
var i=0;
data.forEach((news)=>{
    console.log(news.newsSection.sectionName)
    if(news.newsSection.sectionName=="Interview")
   { const carousal_item=document.createElement("div")
    if(i==0)
        {
        carousal_item.setAttribute("class","carousel-item active")
        i=1;
        }
        else{
            carousal_item.setAttribute("class","carousel-item")
        }
        const row=document.createElement("div")
row.setAttribute("class","row")

const col=document.createElement("div")
col.setAttribute("class","col-md-5")
const img=document.createElement("img")
img.setAttribute("class","d-block w-100")
img.setAttribute("src",news.photolink)
img.setAttribute("alt","first")
col.appendChild(img)
const head=document.createElement("h3")
head.textContent=news.headline
col.appendChild(head)
const col2=document.createElement("div")
col2.setAttribute("class","col-md-7")
const head2=document.createElement("h1")
head2.setAttribute("class","news-sec-title")
head2.textContent=news.shortDescription
col2.appendChild(head2)
const detail=document.createElement("p")
console.log(news.newsDescription)
detail.textContent=news.newsDescription
col2.appendChild(detail)

const btn=document.createElement("button")
btn.setAttribute("class","btn btn-md btn-success")
btn.setAttribute("style","background-color:green")
btn.textContent="Read More"
col2.appendChild(btn)
row.appendChild(col)
row.appendChild(col2)
carousal_item.appendChild(row)
interview.appendChild(carousal_item)
      }
})
  }
