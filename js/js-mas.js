"strict mode";
// Aceleracion por hardmare GPU direct2D directRight

const canvas = document.getElementById('canvas');
const contexto = canvas.getContext("2d");
// Los estilos se dan al inicio de poder graficarlas
contexto.lineWidth = "6"; // Grosor de linea, solo para elementos stroke o de trazos de linea
contexto.strokeStyle = "#000"; // Color de linea, solo para elementos stroke
contexto.fillStyle = "#f00"; // Color de relleno para elementos fill

contexto.strokeRect(30,50,400,200); // Trazo de un rectangulo, los primeros 2 parametros indican donde empieza el rectangulo, y los otros 2 son el ancho y la altura
contexto.fillRect(10,20,400,200); // Relleno de rectangulo

contexto.lineTo(80,300); // punto de untrazo que si se uno con otros genera un trazo mas personalizable
contexto.lineTo(120,350);
contexto.lineTo(100,400);
contexto.lineTo(120,450);
contexto.stroke(); // Nos permite generar el trazo siguiendo los puntos de lineTo o de algun elemento
contexto.closePath(); // Cierra los trazos lineTo para que los siguientes lineTo comiencen en otro lugar
contexto.beginPath(); // Indicamos el inicio de nuevos puntos para generar un nuevo trazo con lineTo
contexto.lineTo(80,300);
contexto.lineTo(80,200);
contexto.stroke();

contexto.arc(120,120,100,10,40); // grafica un circulo, los primeros 2 parametros son el punto central del circulo, el tercer parametro es el radio, y los otros 2 son el angulo de inicio y final
contexto.stroke();
