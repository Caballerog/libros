var texto,
    comidaPreferida = prompt("¿Cuál es tu comida favorita?");
switch (comidaPreferida) {
    case "Gazpacho":
        text = "¡Excelente opción! El gazpacho es refrescante.";
        break;
    case "Ternera":
        text = "¡Ternera bien cocinada está riquísima!";
        break;
    case "Verduras":
        text = "¡Las mías también! ";
        break;
    default:
        text = "Nunca la he probado";
        break;
}
