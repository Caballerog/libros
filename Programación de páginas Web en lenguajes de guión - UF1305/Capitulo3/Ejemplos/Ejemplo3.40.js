var operando1=3, operando2=5, operador='+', resultado=0;
switch(operador) {
    case '+': resultado=operando1+operando2; break;
    case '-': resultado=operando1-operando2;break;
    case '*': resultado=operando1*operando2;break;
    case '/': resultado=operando1/operando2;break;
    default: console.log('Operador no válido');
}
