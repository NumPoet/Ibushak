
/*
    Breve explicación del código:
    Se estan guardado los datos ingresados  por el usuario en variables  para
    faciitar de esta forma la comparación de condiciones.

    $("#myButton").click(function(e){
        e.preventDefault();
    Este método de jquery y bootstrap nos ayuda a escuchar el evento click,
    capturamos la excepción en caso de que exista y si no se procede con el código
    que define la lógica de nuestra pequeña app.
*/
var edad = document.formu.edad.value;
var nivelHemo = document.formu.hemo.value;
var genero = document.formu.gridRadios.value;
var nombre = document.formu.nombre.value;
/*
    // VALIDACIÓN de formulario
    // En esta sección  esta a validación para garantizar que el usuario llene
    // todos los campos solicitados.
    // Se pueden quitar los comentarios para correrlo en el navegador
    // Para no tardar mas en entregar el documento lo dejo comentado ya que
    // Me esta probocando un Bug  ya que  cuando termina la validación
    // se salta el código que hace el diagnostico de Anemia.

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

*/
$("#myButton").click(function(e){
    e.preventDefault();
  if (edad >15 && genero == "M" && nivelHemo >= 12 && nivelHemo <= 16){

         alert("Hola "+nombre+" tus niveles de hemoglobina son saludables, no tienes riesgo de Anemia");

     }else if (edad >15 && genero == "H" && nivelHemo >= 14 && nivelHemo <= 18) {

         alert("Hola "+nombre+" tus niveles de hemoglobina son saludables, no tienes riesgo de Anemia");

     }else if (edad >10 && edad <=15 && nivelHemo >= 13 && nivelHemo <= 15.5) {

         alert("Hola "+nombre+" tus niveles de hemoglobina son saludables, no tienes riesgo de Anemia");

     }else if (edad >1 && edad <=5 && nivelHemo >= 11.5 && nivelHemo <= 15) {

         alert("Hola "+nombre+" tus niveles de hemoglobina son saludables, no tienes riesgo de Anemia");

     }else if (edad >(6/12) && edad <=1 && nivelHemo >= 11 && nivelHemo <= 15) {

         alert("Hola "+nombre+" tus niveles de hemoglobina son saludables, no tienes riesgo de Anemia");

     }else if (edad >(1/12) && edad <=(6/12) && nivelHemo >= 10 && nivelHemo <= 18) {

         alert("Hola "+nombre+" tus niveles de hemoglobina son saludables, no tienes riesgo de Anemia");

     }else if (edad >0 && edad <=(1/12) && nivelHemo >= 13 && nivelHemo <= 26) {

         alert("Hola "+nombre+" tus niveles de hemoglobina son saludables, no tienes riesgo de Anemia");

     } else {

         alert(nombre +" Te recomendamos visitar a un médico especialista, es posible que tengas Anemia");
     }
});
