class Songclass{
  sinName:String;
  muName:String;
  url;
   getDetails(){
   let x=(<HTMLInputElement>document.getElementById("urls")).value;
   this.url=x;
   //console.log(x);
   let a=(<HTMLInputElement>document.getElementById("singername")).value;
   this.sinName=a;
   //console.log(a);
   let b=(<HTMLInputElement>document.getElementById("musicdire")).value;
   this.muName=b;
   //console.log(b);
   return `${x} ${a} ${b}`;
 }
}
var array_details;
class Getdetail{
  details:Songclass[]=[];
  getsong(song:Songclass){
    this.details.push(song);
  }
  getfromSong(){
    console.log(this.details);
  }
}
let firstone=new Songclass();
let firstprint=new Getdetail();
let btn_fun=()=>{
  let output=(firstone.getDetails());
  array_details=output.split(" ");
  console.log(array_details);
  firstprint.getsong(firstone);
  firstprint.getfromSong();
  xyz();

function xyz(){
  let h2=document.createElement('h4');
  h2.className="printing";
  h2.innerHTML="Singer Name: "+array_details[1];
  document.body.append(h2);

  let h2m=document.createElement('h4');
  h2m.className="printing";
  h2m.innerHTML="MusicDirector Name: "+array_details[2];
  document.body.append(h2m);

  
  playMusic();
}
}
function playMusic(){

  (<HTMLElement>document.getElementById("player")).innerHTML = `<div class="row">
      <div class="col-lg-12 bg-white border border-white">
          <br>
          <div class="row ">
              <div class="col-1 col-lg-3"></div>
              <div class="col-6 col-lg-6">
                  <img src="https://www.bensound.com/bensound-img/hipjazz.jpg" style="height:20rem;width:20rem" id="record" />
              </div>
              <div class=" col-lg-3"></div>
              <br>
          </div>
          <br>
            <div class="row bg-dark">
              <div class="col-lg-12">
                  <br>
                  <audio controls autoplay style="width: 100%;">
                      <source src=${array_details[0]} type="audio/mp3">

                                        </audio>
                  <br><br>
              </div>
          </div>
      </div>
  </div>`;

}
