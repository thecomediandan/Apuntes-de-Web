"strict mode";
// Vas atrás de una página
history.back();
// Vas adelante de una página
history.forward();
// Tamaño del historial
history.length
// Vas a sitios -1=atras, 0 o nada=refresca, 1=adelante
history.go(-1);
history.go(0);
history.go();
history.go(1);
// Modifica la URL y conserva la info (state,title,url)
// guarda entradas en el historial
history.pushState({nombre: "daniel"}, "", "?modificacion");

// Utilizamos el evento popstate para apenas volvamos a
// las rutas que modificamos nos retorne el estado de dicha
// ruta modificada.
window.addEventListener("popstate", (e)=>{
    // Mostramos lo que hay en estado
    console.log(e.state);
});

// Modifica la URL
// No guarda entradas en el historial
history.replaceState({nombre: "daniel"}, "", "?modificacion");
