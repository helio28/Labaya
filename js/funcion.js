function calcularEdad() {

    var dateString=document.getElementById("start").value;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    
    document.getElementById("demo").innerHTML = "Usted tiene: "+edad+" años";
}

function ageCalculator() {
    var userinput = document.getElementById("fnac").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    

    var month_diff = Date.now() - dob.getTime();
    
  
    var age_dt = new Date(month_diff); 
    
    
    var year = age_dt.getUTCFullYear();
    

    var age = Math.abs(year - 1970);
if (age>=65) {
    codigo();
} else {
    
}
    return   age ;
             
    }
}


function envio() {

    alert("Información enviada de manera exitosa.");

}


const translate = require('@vitalets/google-translate-api');

translate('Ik spreek Engels', {to: 'en'}).then(res => {
    console.log(res.text);
 
    console.log(res.from.language.iso);

}).catch(err => {
    console.error(err);
});

function codigo(){
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
    var contraseña = "";
    for (i=0; i<20; i++) contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
    alert("Gracias por contactarnos, como usted es una persona adulta mayor le regalamos un codigo de descuento que puede utilizar al comprar en cualquiera de los locales que vendan bayas en las zonas de:Poás, Varablanca, Poasito, Fraijanes y Bajos del toro.\n Su codigo es: "+contraseña);

}

function dias(){
   
        today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        
   // alert(dd+"-"+mm+"-"+yyyy); 
   if (parseInt(dd)==3&& parseInt(mm) ==5) {
    document.getElementById("dia").innerHTML = "Hoy es el día de la frambuesa";
        } else if (parseInt(dd)==23&& parseInt(mm) ==10)  {
         document.getElementById("dia").innerHTML = "Hoy es el día del arandano";     
        }else if(parseInt(dd)==20&& parseInt(mm) ==5){
            document.getElementById("dia").innerHTML = "Hoy es el día de la fresa";  
        }else {
            document.getElementById("dia").innerHTML = "Los frutos rojos o berries ayudan a prevenir enfermedades del corazón y oncológicas. Sus compuestos como las antocianinas y otros polifenoles se relacionan con la contribución a la reducción del riesgo de cáncer y de enfermedades cardiovasculares por sus efectos antioxidantes y antiinflamatorios.";  
        }
}

function fruta() {
    var index = document.getElementById("selectNow").selectedIndex;
if (index==0) {
     document.getElementById("titulobaya").innerHTML = "Fresa";  
    document.getElementById("textobaya").innerHTML = "Fuente de vitamina C.<br/> Mejoran el sistema inmológico.<br/> Controlan la hipertensión";  

} else if (index==1) {    document.getElementById("titulobaya").innerHTML = "Arándanos";  
    document.getElementById("textobaya").innerHTML = "Fuente de antioxidantes.<br/> Mejoran el sistema inmológico.<br/> Reducen el riesgo de enfermedades";
   }else if (index==2) {
    document.getElementById("titulobaya").innerHTML = "Frambuesas";  
    document.getElementById("textobaya").innerHTML = "Ricas en ácido elágico.<br/> Mejoran el sistema inmológico.<br/> Beneficiosas para la visión";

}else if (index==3) {
    document.getElementById("titulobaya").innerHTML = "Frambuesas";  
    document.getElementById("textobaya").innerHTML = "Reducen el coresterol.<br/> Efectivas para el sistema nervisos.<br/> Eficaces como antiinflamatorio.";  
}else if (index==4) {
    document.getElementById("titulobaya").innerHTML = "Grosellas";  
    document.getElementById("textobaya").innerHTML = "Contienen mucha fibra.<br/> Ricas en vitaminas y minerales.<br/> Mejoran los síntomas intestinal.";  

      
}else if (index==5) {
    document.getElementById("titulobaya").innerHTML = "Cereza";  
    document.getElementById("textobaya").innerHTML = "Contienen melatonina por lo que regulan el ritmo cardíaco y los ciclos de sueño.<br/> Son grandes antioxidantes y evitan la pérdida de memoria.";  

     
}
else if (index==6) {
    document.getElementById("titulobaya").innerHTML = "Uvas";  
    document.getElementById("textobaya").innerHTML = "Reduce el riesgo de coágulos sanguíneos.<br/> Retarda el envejecimiento debido a la presencia de antioxidantes.<br/> Es muy depurativa debido a su alto contenido en agua y fibra.";  

      
}

 }

 function longitudMsg(){
 
    const cadena = document.getElementById("message").value;
const longitud = cadena.length;
if (longitud>=280) {
   alert("Ha excedido el limite de caracteres, el limite son 280, y usted tiene:"+longitud+" caracteres");  
} 
 
 }