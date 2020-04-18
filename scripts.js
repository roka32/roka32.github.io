


let data0 = {
    photo: 'pictures/Deku.png',
    title: 'Izuku Midoriya',
    description: 'Izuku Midoriya , also known as Deku , is the primary protagonist of the My Hero Academia manga and anime series.Though born without a Quirk, Izuku manages to catch the attention of the legendary hero All Might due to his innate heroism and has since become his close pupil as well as a student in Class 1-A at U.A. High School. All Might passed on his Quirk to Izuku, making him the ninth holder of One For All.',
    tooltipp:'Deku'
  };

  let data1 = {
    photo: 'pictures/Bakugo.PNG',
    title: 'Katsuki Bakugo',
    description: 'Katsuki Bakugo , also known as Kacchan by his childhood friends, is a student in Class 1-A at U.A. High School, training to become a Pro Hero. He is the deuteragonist of the series.',
    tooltipp:'Bakugo'
  };

  let data2 = {
    photo: 'pictures/Todoroki.PNG',
    title: 'Shoto Todoroki',
    description: 'Shoto Todoroki is a student in Class 1-A at U.A. High School, where he got in through official recommendations and is training to become a Pro Hero. He is the youngest son of Endeavor, the No. 1 Hero, and one of the main protagonists of the series.',
    tooltipp:'Todoroki'
  };

  let data3 = {
    photo: 'pictures/Mirio.PNG',
    title: 'Mirio Togata',
    description: "Mirio Togata, also known by his hero name Lemillion , is a student in Class 3-B at U.A. High School and is part of The Big 3. Before Izuku Midoriya, Mirio was the top candidate for All Might's successor and inheritor of One For All.",
    tooltipp:'Lemillion'
  };

  let data4 = {
    photo: 'pictures/AllMight.PNG',
    title: 'Toshinori Yagi (All Might)',
    description: "Toshinori Yagi, more commonly known by his hero name, All Might, is the tritagonist of My Hero Academia. All Might is the former No. 1 Hero who bore the title of the world's Symbol of Peace.  All Might was the eighth holder of the One For All Quirk after receiving it from Nana Shimura. He has since passed the torch to Izuku Midoriya, whom he is grooming to be his successor. After using up all the embers of One For All to defeat All For One, All Might retired and ended his era as the world's greatest hero.",
    tooltipp:'All Might'
  };

  let data5 = {
    photo: 'pictures/Aizawa.PNG',
    title: 'Shota Aizawa',
    description: "Shota Aizawa , also known as the Erasure Hero: Eraser Head , is a Pro Hero and the homeroom teacher of U.A.'s Class 1-A.",
    tooltipp:'Eraser Head'
  };

  let data6 = {
    photo: 'pictures/GranTorino.PNG',
    title: 'Sorahiko Torino',
    description: "Sorahiko Torino, also known by his hero name Gran Torino, is a retired Pro Hero, former homeroom teacher at U.A. High School, and mentor to Toshinori Yagi and Izuku Midoriya. Ever since the Hideout Raid Arc, despite being retired he continues assisting the Police Force in investigating the League of Villains.",
    tooltipp:'Gran Torino'
  };

  let data7 = {
    photo: 'pictures/Endeavor.PNG',
    title: 'Enji Todoroki',
    description: "Enji Todoroki, also known as Flame Hero: Endeavor, is the Pro Hero with the highest tally of resolved cases in history and father of Shoto, Fuyumi, Natsuo, and Toya Todoroki. Following All Might's retirement, Enji temporarily became the No. 1 Hero after being the No. 2 Hero for a very long time and after the latest JP Hero Billboards Chart announcement, officially became the No. 1 Hero. ",
    tooltipp:'Endeavor'
  };

  let data8 = {
    photo: 'pictures/Hawks.PNG',
    title: 'Keigo Takami',
    description: "Keigo Takami, also known as Wing Hero: Hawks, is the former No. 3 Pro Hero and the current No. 2 Pro Hero.",
    tooltipp:'Hawks'
  };

  let data9 = {
    photo: 'pictures/AllForOne3.PNG',
    title: 'All For One',
    description: "All For One, real name Shigaraki, was the true leader and benefactor of the League of Villains, the primary antagonist of the Hideout Raid Arc and the central antagonist of the series, along with Tomura Shigaraki. Once Japan's most powerful villain and All Might's arch-nemesis, his true motives are unclear and his true identity is unknown. His current goal is to raise Tomura to become his eventual successor. He is currently under police custody and imprisoned in Tartarus.",
    tooltipp:'All For One'
  };

  let data10 = {
    photo: 'pictures/Tomura.PNG',
    title: 'Tomura Shigaraki',
    description: `Tomura Shigaraki, real name Tenko Shimura, was the leader of the League of Villains after his master All For One's defeat and arrest, and is the primary antagonist of the series. He made his first major appearance as one of the main antagonists of the U.S.J. Arc. Like the rest of the League, his goal is to kill All Might, the "Symbol of Peace," thus destroying the society he represents and to create a new one with a new form of justice in his own image.`,
    tooltipp:'Tomura Shigaraki'
  };

  let data11 = {
    photo: 'pictures/Chisaki.PNG',
    title: 'Kai Chisaki',
    description: "Kai Chisaki, also known by the villain name Overhaul, was the Yakuza Captain of the Shie Hassaikai. He serves as the primary antagonist of the Shie Hassaikai Arc and is currently imprisoned in Tartarus.",
    tooltipp:'Overhaul'
  }

  //document.getElementById("photo-title").style.opacity = "1,5";
 // $('#photo').attr('src', data.photo);
  //$('#photo-title').text( data0.title);
  //$('#photo-description').text( data0.description);

let currentPhoto = 0;
let imagesData = [data0,data1, data2,
                    data3,data4,data5,
                    data6,data7, data8,
                    data9,data10,data11 ];
/*$('#photo').attr('src', imagesData[currentPhoto].photo);*/



/*let findValue=(index)=> {
  console.log(imagesData[Math.abs(index - 1) % imagesData.length].photo);
  return imagesData[Math.abs(index - 1) % imagesData.length].photo;
  
}
findValue(-6);*/



for(let i =0;i<imagesData.length;i++){
  $('#box0').attr('src', imagesData[i].photo);
  console.log(imagesData[i].photo +" prefreshed");
}

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text( imagesData[photoNumber].title);
    $('#photo-description').text( imagesData[photoNumber].description);
    

  
    




    // ...
    if(currentPhoto == 9){
      $('#photo').css('filter', 'brightness(1.80) contrast(150%)');
      
    }else{
      $('#photo').css('filter', 'brightness(1.10) contrast(150%)');
    }
    


  }

let loadThumbnail = (ZeroNum) =>{

  /*function Circular(arr, startIntex){
    this.arr = arr;
    this.startIntex = startIntex || 0;
  }
  
  Circular.prototype.next = function(){
    var i = this.currentIndex, arr = this.arr;
    this.currentIndex = i < arr.length-1 ? i+1 : 0;
    return this.current();
  }
  
  Circular.prototype.prev = function(){
    var i = this.currentIndex, arr = this.arr;
    this.currentIndex = i > 0 ? i-1 : arr.length-1;
    return this.current();
  }
  
  Circular.prototype.current = function(){
    return this.arr[this.currentIndex];
  }*/

    
    /**
     *     USAGE
     */
   /* let c = new Circular([0,1,2,3,4,5,6,7,8,9,10,11]);*/
    /*c.current(); // 1
    c.next();    // 2
    c.current(); // 2
    c.next();    // 3
    c.next();    // 4
    c.next();    // 1
    c.next();    // 2
    c.prev();    // 1
    c.current(); // 1
    c.prev();    // 4
    c.current(); // 4*/


    /*let k =0;
    while(k<ZeroNum){
      c.next();
      k++;
    }*/

   /* for(let k=0;k<ZeroNum+1;k++){c.next(); }
    
  
  
  
    
  let zeronum_minus_one = c.prev();
  let zeronum_minus_two = c.prev();
  c.next();
  c.next();
  let zeronum_plus_one = c.next();
  let zeronum_plus_two = c.next();
  

     
    
   /*let posArray = [zeronum_minus_two,zeronum_minus_one,ZeroNum,zeronum_plus_one,zeronum_plus_two];
   
   
   
       $('#box0').attr('src', imagesData[posArray[0]].photo);
    $('#box1').attr('src', imagesData[posArray[1]].photo);
    $('#box2').attr('src', imagesData[posArray[2]].photo);
    $('#box3').attr('src', imagesData[posArray[3]].photo);
    $('#box4').attr('src', imagesData[posArray[4]].photo);

    $('.tooltiptext0').text( imagesData[posArray[0]].tooltipp);
    $('.tooltiptext1').text( imagesData[posArray[1]].tooltipp);
    $('.tooltiptext2').text( imagesData[posArray[2]].tooltipp);
    $('.tooltiptext3').text( imagesData[posArray[3]].tooltipp);
    $('.tooltiptext4').text( imagesData[posArray[4]].tooltipp);
   
   
   
   
   */
    
   var array = [0,1, 2, 3, 4,5,6,7,8,9,10,11];

   mutate = (arr,index) => {
    let lenght =array.length;
    if(Math.abs(index)%lenght ==0 ){ return arr[0]}
     let x = index > -1 ? arr[index%arr.length] :  arr[lenght-Math.abs(index)%lenght] ;
     return x;
    }
    
    
  
    $('#box0').attr('src', imagesData[mutate(array,ZeroNum-2)].photo);
    $('#box1').attr('src', imagesData[mutate(array,ZeroNum-1)].photo);
    $('#box2').attr('src', imagesData[mutate(array,ZeroNum)].photo);
    $('#box3').attr('src', imagesData[mutate(array,ZeroNum+1)].photo);
    $('#box4').attr('src', imagesData[mutate(array,ZeroNum+2)].photo);

    $('.tooltiptext0').text( imagesData[mutate(array,ZeroNum-2)].tooltipp);
    $('.tooltiptext1').text( imagesData[mutate(array,ZeroNum-1)].tooltipp);
    $('.tooltiptext2').text( imagesData[mutate(array,ZeroNum)].tooltipp);
    $('.tooltiptext3').text( imagesData[mutate(array,ZeroNum+1)].tooltipp);
    $('.tooltiptext4').text( imagesData[mutate(array,ZeroNum+2)].tooltipp);

    $('.textpos').text(`${currentPhoto+1}/12`);
    let posArray = [mutate(array,ZeroNum-2),mutate(array,ZeroNum-1),mutate(array,ZeroNum),mutate(array,ZeroNum+1),mutate(array,ZeroNum+2)]
    return posArray;
  
    }
  
loadPhoto(currentPhoto);
loadThumbnail(currentPhoto);

/*-----------------------------------DICK*/
function myMoveDickAnimation() {
  $('#animate').css('visibility','visible');
 
     
  var elem = document.getElementById("animate");   
var pos = 0;
var id = setInterval(frame, 5);
function frame() {
  if (pos == 900) {
    $('#animate').css('visibility','hidden')
    clearInterval(id);
  } else {
    pos++; 
    elem.style.top = pos + "px"; 
    elem.style.left = pos + "px"; 
  }
}
  
}
/*-----------------------------------DICK*/
  
  $('#arrowRightCont').click(() => {
    myMoveDickAnimation();
    if(currentPhoto == imagesData.length-1){
        currentPhoto = -1;
    }
    currentPhoto++;
    
    loadPhoto(currentPhoto);
    loadThumbnail(currentPhoto);
  })



  $('#arrowLeftCont').click(() => {
    myMoveDickAnimation();
    if(currentPhoto === 0){
        currentPhoto = imagesData.length;
    }
    currentPhoto--;
    loadPhoto(currentPhoto);
    loadThumbnail(currentPhoto);
  })

  $(document).ready(function(){
    $('#arrowRightCont').hover(function(){
      $(this).css("opacity", "0.3");
      }, function(){
      $(this).css("opacity", "1");
    });
  });

  $(document).ready(function(){
    $('#arrowLeftCont').hover(function(){
      $(this).css("opacity", "0.3");
      }, function(){
      $(this).css("opacity", "1");
    });
  });

  

  $('#box0').click(() => {
    myMoveDickAnimation();
    
    var TmpArray = loadThumbnail(currentPhoto).slice();
    currentPhoto=TmpArray[0];
    loadPhoto(TmpArray[0]);
    loadThumbnail(TmpArray[0]);
    
    console.log(currentPhoto);

  })

  $('#box1').click(() => {
    myMoveDickAnimation();

    var TmpArray = loadThumbnail(currentPhoto).slice();
    currentPhoto=TmpArray[1];
    loadPhoto(TmpArray[1]);
    loadThumbnail(TmpArray[1]);
    
    console.log(currentPhoto);
    
      
    
    
  })

  $('#box2').click(() => {
    myMoveDickAnimation();

    var TmpArray = loadThumbnail(currentPhoto).slice();
    currentPhoto=TmpArray[3];
    loadPhoto(TmpArray[3]);
    loadThumbnail(TmpArray[3]);
    console.log(currentPhoto);
    
  })

  $('#box3').click(() => {
    myMoveDickAnimation();

    var TmpArray = loadThumbnail(currentPhoto).slice();
    currentPhoto=TmpArray[3];
    loadPhoto(TmpArray[3]);
    loadThumbnail(TmpArray[3]);
    
    console.log(currentPhoto);
    
  })

  $('#box4').click(() => {
    myMoveDickAnimation();

    var TmpArray = loadThumbnail(currentPhoto).slice();
    currentPhoto=TmpArray[4];
    loadPhoto(TmpArray[4]);
    loadThumbnail(TmpArray[4]);

    console.log(currentPhoto);
    
    
  })




/*for(let szamlalo =1; szamlalo<5; szamlalo++){
  $(`.tooltip .tooltiptext${szamlalo}`).css('visibility','hidden');
  $(`.tooltip .tooltiptext${szamlalo}`).css('width','120px');
  $(`.tooltip .tooltiptext${szamlalo}`).css('background-color','#555');
  $(`.tooltip .tooltiptext${szamlalo}`).css('color','#fff');
  $(`.tooltip .tooltiptext${szamlalo}`).css('text-align','center');
  $(`.tooltip .tooltiptext${szamlalo}`).css('border-radius','6px');
  $(`.tooltip .tooltiptext${szamlalo}`).css('padding','5px 0');
  $(`.tooltip .tooltiptext${szamlalo}`).css('position','absolute');
  $(`.tooltip .tooltiptext${szamlalo}`).css('z-index','1');
  $(`.tooltip .tooltiptext${szamlalo}`).css('bottom','125%');
  $(`.tooltip .tooltiptext${szamlalo}`).css('left','50%');
  $(`.tooltip .tooltiptext${szamlalo}`).css('margin-left','-60px');
  $(`.tooltip .tooltiptext${szamlalo}`).css('opacity','0');
  $(`.tooltip .tooltiptext${szamlalo}`).css('transition','opacity 0.3s');

  $(`.tooltip .tooltiptext${szamlalo}::after`).css('content','""');
  $(`.tooltip .tooltiptext${szamlalo}::after`).css('position','absolute');
  $(`.tooltip .tooltiptext${szamlalo}::after`).css('top','100%');
  $(`.tooltip .tooltiptext${szamlalo}::after`).css('left','50%');
  $(`.tooltip .tooltiptext${szamlalo}::after`).css('margin-left','-5px');
  $(`.tooltip .tooltiptext${szamlalo}::after`).css('border-width','5px');
  $(`.tooltip .tooltiptext${szamlalo}::after`).css('border-style','solid');
  $(`.tooltip .tooltiptext${szamlalo}::after`).css('border-color','#555 transparent transparent transparent');

  $(`tooltip:hover .tooltiptext${szamlalo}`).css('visibility','visible');
  $(`tooltip:hover .tooltiptext${szamlalo}`).css('opacity','0.7');
}*/
  
  
 
document.addEventListener("keydown", function(event) {
  
  console.log(event);
    
  if(event.which ==39){
    if(currentPhoto == imagesData.length-1){
      currentPhoto = -1;
  }
  currentPhoto++;
  
  loadPhoto(currentPhoto);
  loadThumbnail(currentPhoto);
  }
  if(event.which ==37){
    if(currentPhoto === 0){
      currentPhoto = imagesData.length;
  }
  currentPhoto--;
  loadPhoto(currentPhoto);
  loadThumbnail(currentPhoto);

  }
  if(event.which ==81){
    alert("NE nyomogasd azt a kurva 'q' gombot!!!")
  }
  
  if(event.which ==186){
    alert("Az 'é'-t se te gyökér...")
  }
});
  
  

