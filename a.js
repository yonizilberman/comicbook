var div4="('div4')"; 
var div5="('div5')";
var thelogo='<div id="thelogo">'+
                '<a href = "index.html"><img src = "mainLogo.gif" id="logocenter"></a>'+
            '</div>'
var menu='<div id="wrapper">'+
        '<div id="content">'+
        '<div id="nav">'+
            '<ul>'+
                '<li>'+
                    '<a href="index.html">קומיקס</a>'+
                    '<div id="div1" onMouseOver="cancelCloseTime()" onMouseOut="closeTime()">'+
                    '</div1>'+
                '</li>'+
                '<li>'+
                    '<a href="aboutso.html">עלינו</a>'+
                    '<div id="div2" onMouseOver="cancelCloseTime()" onMouseOut="closeTime()">'+
                    '</div2>'+
                '</li>'+
                '<li>'+
                    '<a href="comics.html">ארכיון</a>'+
                    '<div id="div3" onMouseOver="cancelCloseTime()" onMouseOut="closeTime()">'+
                    '</div3>'+
                '</li>'+
                '<li>'+
                    '<a href="Wayofworking.html" onMouseOver="openDiv('+" 'div4' "+')" onMouseOut="closeTime()">דרך עבודה</a>'+
                    '<div id="div4" onMouseOver="cancelCloseTime()" onMouseOut="closeTime()">'+
                        '<a href="onsite.html">האתר</a>'+
                        '<a href="howtodoit.html">איך עושים קומיקס</a>'+
                    '</div4>'+
                '</li>'+
                '<li>'+
                    '<a href="recomand.html" onMouseOver="openDiv('+" 'div5' "+')" onMouseOut="closeTime()">המלצות</a>'+
                    '<div id="div5" onMouseOver="cancelCloseTime()" onMouseOut="closeTime()">'+
                        '<a href="aline.html">אנשי קו</a>'+
                        '<a href="manga.html">מנגה</a>'+
                        '<a href="realistic.html">ראליסטי</a>'+
                        '<a href="onlineshops.html">חנויות ברשת</a>'+
                        '<a href="comi.html">קומי</a>'+
                    '</div5>'+
                '</li>'+
                '<li>'+
                    '<a href="contact.php">צור קשר</a>'+
                    '<div id="div6" onMouseOver="cancelCloseTime()" onMouseOut="closeTime()">'+
                    '</div6>'+
                '</li>'+
            '</ul>'+
        '</div>'
var timeOut= 100;
var closeTimer= 0;
var menuItem= 0;
var side4=  '<div id="div4"'+' onMouseOver="cancelCloseTime()"'+' onMouseOut="closeTime()">'+
                '<table>'+
                    '<tr>'+
    					'<td id="null">'+
                            '<a href=""></a>'+
                        '</td>'+
    					'<td id="null">'+
                            '<a href=""></a>'+
                        '</td>'+
    					'<td id="null">'+
                            '<a href=""></a>'+
                        '</td>'+
                        '<td>'+
                            '<a href="howtodoit.html">איך עושים קומיקס</a>'+
                        '</td>'+
                        '<td>'+
                            '<a href="onsite.html">האתר</a>'+
                        '</td>'+
                    '</tr>'+
                '</table>'+
            '</div>'
var side5=  '<div id="div5"'+' onMouseOver="cancelCloseTime()"'+' onMouseOut="closeTime()">'+
                '<table>'+
                    '<tr>'+
                        '<td>'+
                            '<a href="comi.html">קומי</a>'+
                        '</td>'+
                        '<td>'+
                            '<a href="onlineshops.html">חנויות ברשת</a>'+
                        '</td>'+
                        '<td>'+
                            '<a href="realistic.html">ראליסטי</a>'+
                        '</td>'+
                        '<td>'+
                            '<a href="manga.html">מנגה</a>'+
                        '</td>'+
                        '<td>'+
                            '<a href="aline.html">אנשי קו</a>'+
                        '</td>'+
                   '</tr>'+
                '</table>'+
            '</div>'
// open hidden div
function openDiv(newMenuItem){
    cancelCloseTime();  // cancel close timer
    // close old visible div if there's any
    if(menuItem){
        menuItem.style.visibility = 'hidden';
    }
    // Get and set the new div to visible
    menuItem = document.getElementById(newMenuItem);
    menuItem.style.visibility = 'visible';
}
// close visible div
function closeDiv(){
    if(menuItem){
         menuItem.style.visibility = 'hidden';
    }
}
// close timer
function closeTime(){
    closeTimer = window.setTimeout(closeDiv, timeOut);
}
// Cancel closeTimer
function cancelCloseTime(){
    if(closeTimer){
        window.clearTimeout(closeTimer);
        closeTimer = null;
    }
}
// close any div  when clickicking
document.onclick = closeDiv; 

function ajustScreen(){
    obj=document.getElementById("wrapper");
    //obj.style.right = (screen.availWidth - 854)/2;
}
//show site location
 function showSiteLocation(){
    ajustScreen(); 
    var page=window.location.href ;// page url
    var i = 0;
    var obj = document.getElementsByTagName("a");
    for(i=0;i<obj.length;i++){
        if(page==obj[i].href){
            if(obj[i].parentNode.tagName == "DIV"){
                if (obj[i].parentNode.parentNode.id=="sideBar"){
                    obj[i].style.background = "#FFCC66";
                }
                else{
                    obj[i].parentNode.parentNode.children[0].style.background="#FFCC66";
                    obj[i].style.color = "#FFCC66";
                    obj[i].text;
                }
            }
            else{
                obj[i].style.background="#FFCC66";
            }
        }
        //break 
    }
    /*if(obj[i].parentNode.tagName == "DIV")
    {
        obj[i].parentNode.parentNode.children[0].style.background="#FFCC66";
        obj[i].style.color = "#FFCC66";
        obj[i].text
    }
    else
    {
        obj[i].style.background="#FFCC66";
    }*/
 }
function sercal() {
	try {
		TagCanvas.Start('myCanvas','tags',{
		textColour: '#ff00ff',
		outlineColour: '#ff0000',
		reverse: true,
		depth: 0.8,
		maxSpeed: 0.05
	});
	} catch(e) {
		// something went wrong, hide the canvas container
		document.getElementById('myCanvasContainer').style.display = 'none';
	}
};
//funtion call to 2 funtion that work toguder
function onLoad(){
	showSiteLocation();
	sercal();
};
function printMenu(){
//      document.getElementById("body").innerHTML=menu;
     document.write(thelogo);
     document.write(menu);
 }
 var copy= '<p><center>'+
            '<font face="arial, helvetica" size="-1">&copy; Yoni Zilberman & Nufar Shaked</a></font>'+
        '</center><p>'
  function printcopy(){
     document.write(copy);
 }      