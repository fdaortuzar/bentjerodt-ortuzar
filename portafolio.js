var trabajos = [{
    figure: "media/trabajo_1.jpg",
    alt: "Robot Logicoma de Ghost in the Shell de color rojo y detalles metálicos",
    title: "MODELADO EN 3D",
    about: "Robot Logicoma modelado en Rhinocerus y renderizado en Keyshot"
}, {
    figure: "media/trabajo_2.jpg",
    alt: "Tres fotos en una misma imagen, de una gargantilla y dos pulseras de perlas tejidas con hilo de joyero",
    title: "ACCESORIOS EN HILO DE JOYERO",
    about: "Gargantillas y pulseras tejidas a mano en Taller V"
}, {
    figure: "media/trabajo_3.jpg",
    alt: "Logotipo en color mostaza y texto en color negro para el Museo de la Educación junto a su uso en letrero y prendedores",
    title: "LOGOTIPO PARA EL MUSEO GABRIELA MISTRAL",
    about: "Desarrollo de símbolo para el Museo de la Educación en Taller VI"
}, {
    figure: "media/trabajo_4.jpg",
    alt: "Afiche de servicios de salud sexual y consejería de ITS de Campus Saludable UC con fondo de color rojo y textos en color blanco",
    title: "AFICHE PARA CAMPUS SALUDABLE",
    about: "Uno de los afiches que he desarrollado para organizaciones UC"
}, {
    figure: "media/trabajo_5.jpg",
    alt: "Packaging por delante y por detrás de Fingerpatch, un producto simulado para la empresa 3M",
    title: "PACKAGING SIMULADO PARA 3M",
    about: "Creación de un nuevo producto 3M junto a su packaging en Taller V"
}, {
    figure: "media/trabajo_6.jpg",
    alt: "Fotografías de bolsos de tela orgánica, yute y algodón, en estudio junto a elementos de compras",
    title: "FOTOGRAFÍA DE ESTUDIO",
    about: "Fotografías en estudio y edición para la empresa Yute Ltda"
}, {
    figure: "media/trabajo_7.jpg",
    alt: "Mochila portabebé en negro y naranjo marca Primate con una riñonera añadida por el frente y el logo en color naranjo",
    title: "MOCHILA PORTABEBÉ VOLTEABLE",
    about: "Mochila portabebé volteable para trekkings en Taller IV"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
