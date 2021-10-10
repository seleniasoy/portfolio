
 var files = ['-4776241293166500176.MP4', '-4787076953767120870.MP4', '0b9e0e1e-ab45-4186-bc9d-06bd8b4dc409.MP4', '2001a36f-72da-4385-a31a-ee0dfa0142ae.JPG', '20180311_164105_Original.jpg', '20180819_180130_Original.jpg', '2df2504a-9315-46ea-b2e1-d07d56bdd227.JPG', '3554786b-48b4-451b-a836-1d43f007fcff.JPG', '445e6c38-42ca-4676-ae15-f4575c526a27.JPG', '56e29355-ee58-4736-88cf-295fdf5318b3.JPG', '588fe6ce-b30a-4a9f-b67d-828edd53a989.JPG', '63fb9520-2638-45b8-a547-6d32f217f17c.JPG', '70926ef6-e9e2-4ef9-9cd0-5a67428235a1.JPG', '896FB981-A08A-46C4-96B6-87A636308B73.MOV', '9080307452926671021.MP4', 'fb157b7e-09b6-4a05-bc98-7ca4ece27f2f.JPG', 'IMG-20190325-WA0035_Original.jpg', 'IMG_1205.JPG', 'IMG_1207.JPG', 'IMG_1208.JPG', 'IMG_1209.JPG', 'IMG_1210.JPG', 'IMG_1212.JPG', 'IMG_1213.JPG', 'IMG_1214.JPG', 'IMG_1215.JPG', 'IMG_1216.JPG', 'IMG_1217.JPG', 'IMG_1270.JPG', 'IMG_1271.JPG', 'IMG_1721.jpg', 'IMG_1723.jpg', 'IMG_3103.JPG', 'IMG_3104.JPG', 'IMG_3105.JPG', 'IMG_3106.JPG', 'IMG_3107.JPG', 'IMG_3108.JPG', 'IMG_3109.JPG', 'IMG_3110.JPG', 'IMG_3111.JPG', 'IMG_3112.JPG', 'IMG_3113.JPG', 'IMG_3114.JPG', 'IMG_3115.JPG', 'IMG_3116.JPG', 'IMG_3117.JPG', 'IMG_3118.JPG', 'IMG_3119.JPG', 'IMG_3120.JPG', 'IMG_3121.JPG', 'IMG_3122.JPG', 'IMG_3123.JPG', 'IMG_3124.JPG', 'IMG_3125.JPG', 'IMG_3126.JPG', 'IMG_3194_Original.jpg', 'RPReplay_Final1627703268.mov', 'RPReplay_Final1628096809.mov'];

 var mobile = innerHeight > innerWidth;

 var observer = new IntersectionObserver((elms)=>{
    var visibles = elms.filter(d=> d.isIntersecting)
    for(const im of visibles){
      im.target.src = im.target.datasrc;
      observer.unobserve(im.target)
    }
 }, {
   rootMargin:"400px"
 });
 var headerSize = "7vh";

 var header = ox("div").css({
   position: "sticky",
   top: "0",
   width: "100%",
   height: headerSize,
   padding: "1vh",
   backgroundColor: "white",
   zIndex: "10",
   borderBottom: "1px solid rgba(219,219,219,1)"
 })

 var headerCont = ox("div", header).css({
  margin: "auto",
  position: "relative",
  maxWidth: "100vmin",
 })

 var backb = ox("i", headerCont).attr({
   className: "fa fa-arrow-left",
   onclick(){
     history.back();
     backb.css({
       display: "none"
     })
   }
  }).css({
    height: "100%",
    verticalAlign: "middle",
    background: "#AAA",
    display: "block",
    padding: "1vh",
    fontSize: "3vh",
    marginRight: "10px",
    cssFloat: "left",
    color: "white",
    borderRadius: "5px",
    display: "none"
  }
 )
 var name = ox("div", headerCont).content("Selenia Hernandez").css({
   cssFloat: "left",
   fontSize: "3vh",
   fontWeight: "300",
   paddingTop: "1vh",
   verticalAlign: "middle",
   color: "#AAA"

 })

 var headerRight = ox("div", headerCont).css({
   backgroundColor: "white",
   paddingLeft: "10px",
   right: "0",
   position: "absolute"
 });

 var imdb = ox("i", headerRight).attr({
   className: "fa fa-imdb",
   onclick(){
     window.open("https://www.imdb.com/name/nm8644214/")
   }
 }).css({
   fontSize: "5vh",
   verticalAlign: "middle",
   color: "#e81e62",
 })

 var email = ox("i", headerRight).attr({
  className: "fa fa-envelope",
  onclick(){
    window.open("mailto:seleniasoy@gmail.com")
  }
}).css({
  fontSize: "4vh",
  verticalAlign: "middle",
  color: "#e81e62",
  marginLeft: "2vh"
})

 var whatsapp = ox("i", headerRight).attr({
  className: "fa fa-whatsapp",
  onclick(){
    window.open("https://api.whatsapp.com/send?phone=18297090950")
  }
}).css({
  fontSize: "4vh",
  verticalAlign: "middle",
  color: "#e81e62",
  marginLeft: "2vh"
})

 var container = ox("div").css({
   display: "flex",
   justifyContent: "space-between",
   width: "100%",
   flexWrap: "wrap",
   maxWidth: "100vmin",
   margin: "auto",
   backgroundColor: "#FFF"

 })
 for(let f of files){
  let isPhoto = f.slice(-4).toLowerCase() == ".jpg";
  let f2 = f;
  f = f.slice(0, f.length-4) + f.slice(-4).toLocaleLowerCase();

  let thumbDiv = ox("div", container).css({
    //border: "solid 3px #FFF",
    //border: "1px solid rgba(219,219,219,1)",
    backgroundColor: "#DDD",
    width: "45vmin",
    height: "45vmin",
    margin: "3vmin 1vmin",
    borderRadius: "15px",
    ///boxShadow: "3px 4px 2px rgba(0,0,0,0.1)",
    //background: isPhoto ? "url(" +"/imgs/"+f+") 100%" : "white",
    overflow: "hidden",
    position: "relative"
  });

  
  let art = ox("img", thumbDiv).attr({
    datasrc: "./Mis_trabajos/thumbs/" + f2 + ".jpg",
    muted: true,
    preload:"metadata",
    onclick(){
      location.hash = isPhoto ? f : f2;
    }
  }).css({
    width: "100%",
    height: "100%",
    objectFit: isPhoto ? "contain" : "contain",
    transform: "scale(1.1)"
  })

  observer.observe(art)

  if(!isPhoto){
    ox("img", thumbDiv).css({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0.5)",
      pointerEvents: "none"
    }).attr({
      src: "./assets/play.png",
    })
  }
 }

 onhashchange = big;

 big();
 var backdrop;
 var loading;
 function big(){

  if(backdrop){
    backdrop.remove();
    //loading.remove();
    backdrop = null;
    document.body.style.overflow = "scroll";
  } 
  if(location.hash.length > 5){
    
  backb.css({
    display: "block"
  })
    document.body.style.overflow = "hidden";
    var isPhoto = location.hash.slice(-4).toLowerCase() == ".jpg";
    backdrop = ox("div").css({
      backgroundColor: "#FFF",
      width: "100vw",
      height:"calc(100% - " + headerSize +")",
      position: "fixed",
      top: headerSize,
      left: "0",
    })

    
    loading = ox("i", backdrop).attr({
      className: "fa fa-spinner",
    }).css({
      fontSize: "20vw",
      position: "absolute",
      top: "calc(calc(50% - 10vw))",
      left: "calc(50% - 10vw)",
      zIndex: "-1",
      color: "#222",


    }).anim({
      from: {
        transform: "rotate(0)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    }, "1.5s infinite linear")

    var f = location.hash.slice(1);

    let art = ox(isPhoto ? "img" : "video", backdrop).attr({
      src: isPhoto ? "./imgsFull/" + f : "./Mis_trabajos/" + f,
      muted: true,
      controls: true,
      autoplay: true,
      playsinline: true
    }).css({
      width: "100%",
      height: "100%",
      zIndex: "5",
      objectFit: isPhoto ? "contain" : "contain"
    })

    if(!isPhoto){
      art.setAttribute("playsinline", true);
      art.setAttribute("muted", true);
      art.setAttribute("autoplay", true);
    }

  }
  
 }