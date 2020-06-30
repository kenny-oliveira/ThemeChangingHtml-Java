function getCookie(cname) {
   var name = cname + "=";
   var decodedCookie = decodeURIComponent(document.cookie);
   var ca = decodedCookie.split(';');
   for(var i = 0; i <ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 }


function Settings(){
var SettingsFrame = document.getElementById('SettingsFrame')
 if (SettingsFrame.style.visibility == "visible") {
      SettingsFrame.style.visibility = "hidden"
      document.cookie = "SettingsFrame ="+SettingsFrame.style.visibility
 }else{
      SettingsFrame.style.visibility = "visible"
      document.cookie = "SettingsFrame ="+SettingsFrame.style.visibility
 }
}



function ChangeTheme(){
var BackgroundColor = document.getElementById('Background').value
var FooterColor = document.getElementById('Footer').value
var TextColor = document.getElementById('Text')
var SectionColor = document.getElementById('Section')
var FontSize = document.getElementById('Font')
var Tes = document.getElementsByClassName('Tes')

document.cookie = "Background ="+(BackgroundColor)
document.cookie = "Footer ="+(FooterColor)
document.cookie = "Text ="+(TextColor.value)
document.cookie = "Section ="+(SectionColor.value)

if (FontSize.value > 50) {
   alert("Font muito grande")
}else if(FontSize.value < 10){
   alert("Font muito pequeno")
}else{
document.cookie = "FontSize ="+(FontSize.value)
document.body.style.fontSize = FontSize.value+"px"
}

document.body.style.backgroundColor = BackgroundColor
document.getElementById("footer").style.backgroundColor = FooterColor
for(var i=0, len=Tes.length; i<len; i++)
{
   Tes[i].style.color = document.getElementById('Text').value;
   Tes[i].style.backgroundColor = document.getElementById('Section').value
}
}

function Start(){
  var path = location.href.split("/").slice(-1); 
  var BackgroundColor = document.getElementById('Background').value
  var FooterColor = document.getElementById('Footer').value
  var BackgroundCookie = getCookie("Background")
  var FooterCookie = getCookie("Footer")
  var SettingsVisibleCookie = getCookie("SettingsFrame")
  var FontCookie = getCookie("FontSize")
  var TextCookie = getCookie("Text")
  var SectionCookie = getCookie("Section")
  var Tes = document.getElementsByClassName('Tes')


if ((SettingsVisibleCookie) != ""){
   document.getElementById('SettingsFrame').style.visibility = SettingsVisibleCookie
}

if (FontCookie != ""){
   document.body.style.fontSize = FontCookie+"px"
   document.getElementById('Font').value = FontCookie
}else{
   document.getElementById('Font').value = 16
}


if (BackgroundCookie != ""){
 document.body.style.backgroundColor = BackgroundCookie
 document.getElementById('Background').value = BackgroundCookie
}else{
   BackgroundColor = "#0000"
}

if (FooterCookie != ""){
   document.getElementById("footer").style.backgroundColor = FooterCookie
   document.getElementById('Footer').value = FooterCookie
  }else{
     document.getElementById("footer").style.backgroundColor = "#444444"
     document.getElementById('Footer').value = "#444444"
  }

if (TextCookie != ""){
   for(var i=0, len=Tes.length; i<len; i++)
   {
      Tes[i].style.color = TextCookie;
   }
document.getElementById('Text').value = TextCookie
}else{
   document.getElementById('Text').value = Tes[0].style.color
}

if (SectionCookie != ""){
   {
      for(var i=0, len=Tes.length; i<len; i++)
      {
         Tes[i].style.backgroundColor = SectionCookie;
      }
      document.getElementById('Section').value = SectionCookie
   }
}else{
   document.getElementById('Section').value = "#FFFFFF"
}

Projetoloop = 5

if (path == "Projetos.html"){
   for(var i=1;i<=Projetoloop;i++){
      var img = document.createElement("img");
      img.src = "Imagens/2/BlueprintCar"+i+".jpg";
      img.alt = "Car"+i;
      img.className = "Tes"
      var src = document.getElementById("SectionFrame");
      src.appendChild(img);
      src.innerHTML += " "
}
}




Loop = 11
if (path == "Media.html") {
for(var i=1;i<=Loop;i++){
var img = document.createElement("img");
img.src = "Imagens/1/Car"+i+".jpg";
img.alt = "Car"+i;
img.className = "Tes"
var src = document.getElementById("SectionFrame");
src.appendChild(img);
src.innerHTML += " "
}
}
}
