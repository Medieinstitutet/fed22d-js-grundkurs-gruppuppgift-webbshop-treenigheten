/**
 * En text ska visa leverans tid. 
 * >> Standard skall vara 30 minuter <<
 * >> Beställning på en fredag mellan kl 11 till 13 blir levererat kl 15:00 <<
 * >> Mitt i natten = 45 minuter leveranstid <<
 */



 const deliveryBtn = document.querySelector('#btnTest')         // Knapp som triggar leveranstids kontrollen
 const deliveryTime = document.querySelector('#leveransTid')   // Väljer Div med id="leveransTid"
 
 deliveryBtn.addEventListener('click', timeCheck);            // På klick så startar eventet timeCheck
 
  function timeCheck() {
   const now = new Date();
   const hour = now.getHours(); 
   
   if (22 <= hour || 5 > hour) {  // Mellan klockan 22:00 och 05:00.
     return document.getElementById('leveransTid').innerHTML = 'Levernstiden blir 45 minuter.';
   } else if (
     now.getDay() === 5 // Dagen är fredag.
     && hour >= 11 // Klockan är 11:00 eller mer.
     && hour < 13 // Klocklan är mindre än 13:00.
   ) {
     return document.getElementById('leveransTid').innerHTML = 'Leveransen kommer vara framme 15:00.';
   } else {
     return document.getElementById('leveransTid').innerHTML = 'Leveranstid blir 30 minuter.';
   }
  }
 