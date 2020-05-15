var Songclass = /** @class */ (function () {
    function Songclass() {
    }
    Songclass.prototype.getDetails = function () {
        var x = document.getElementById("urls").value;
        this.url = x;
        //console.log(x);
        var a = document.getElementById("singername").value;
        this.sinName = a;
        //console.log(a);
        var b = document.getElementById("musicdire").value;
        this.muName = b;
        //console.log(b);
        return x + " " + a + " " + b;
    };
    return Songclass;
}());
var array_details;
var Getdetail = /** @class */ (function () {
    function Getdetail() {
        this.details = [];
    }
    Getdetail.prototype.getsong = function (song) {
        this.details.push(song);
    };
    Getdetail.prototype.getfromSong = function () {
        console.log(this.details);
    };
    return Getdetail;
}());
var firstone = new Songclass();
var firstprint = new Getdetail();
var btn_fun = function () {
    var output = (firstone.getDetails());
    array_details = output.split(" ");
    console.log(array_details);
    firstprint.getsong(firstone);
    firstprint.getfromSong();
    xyz();
    function xyz() {
        var h2 = document.createElement('h4');
        h2.className = "printing";
        h2.innerHTML = "Singer Name: " + array_details[1];
        document.body.append(h2);
        var h2m = document.createElement('h4');
        h2m.className = "printing";
        h2m.innerHTML = "MusicDirector Name: " + array_details[2];
        document.body.append(h2m);
        playMusic();
    }
};
function playMusic() {
    document.getElementById("player").innerHTML = "<div class=\"row\">\n      <div class=\"col-lg-12 bg-white border border-white\">\n          <br>\n          <div class=\"row \">\n              <div class=\"col-1 col-lg-3\"></div>\n              <div class=\"col-6 col-lg-6\">\n                  <img src=\"https://www.bensound.com/bensound-img/hipjazz.jpg\" style=\"height:20rem;width:20rem\" id=\"record\" />\n              </div>\n              <div class=\" col-lg-3\"></div>\n              <br>\n          </div>\n          <br>\n            <div class=\"row bg-dark\">\n              <div class=\"col-lg-12\">\n                  <br>\n                  <audio controls autoplay style=\"width: 100%;\">\n                      <source src=" + array_details[0] + " type=\"audio/mp3\">\n\n                                        </audio>\n                  <br><br>\n              </div>\n          </div>\n      </div>\n  </div>";
}
