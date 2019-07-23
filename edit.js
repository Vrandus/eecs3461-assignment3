function createCanvas(){

    var canvas = new fabric.Canvas('c');
     var rect = new fabric.Rect({left:100, top: 150, fill: 'red', width:200, height:200});
    // var rect = new Image("meiji.jpg");

    // canvas.add(rect); // add object
    fabric.Image.fromURL("meiji.jpg", (myImg)=>{
        canvas.add(myImg);
    });
    console.log("success!");
    // document.getElementById("clickMe").onclick = function () { alert('hello!'); };
}

var loadCanvas = function(event){

    var canvas = new fabric.Canvas('c');
    var rect = new fabric.Rect({left:100, top: 150, fill: 'red', width:200, height:200});
   // var rect = new Image("meiji.jpg");
    console.log(event.target.files[0].name);
//    canvas.add(rect); // add object
   fabric.Image.fromURL(event.target.files[0].name, (myImg)=>{
       canvas.add(myImg);
   });
   console.log("success!"); 
} 