//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('wLB0djWRYYk=', 772, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "¿Cuál de las siguientes afirmaciones es falsa respecto a la conmutación de circuitos?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wLB0djWRYYk=', 774, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Puede ser ineficiente, ya que los recursos asignados a un circuito no pueden ser usados por ningún otro circuito hasta que no se libera.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5xtfNs+WyTk=', 134, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Antes de que dos nodos puedan comunicarse debe haber una fase de establecimiento del circuito, que solo se completa si la red dispone de recursos suficientes.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CJH5mdzABzk=', 136, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Hace un uso eficiente de los enlaces, ya que durante la fase de establecimiento se garantiza que hay recursos disponibles.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('9wW/ihnSW0w=', 977, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto a la conmutación de datagramas:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9wW/ihnSW0w=', 979, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "En caso de que falle un enlace, todos los datagramas que van por ese camino serán descartados.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nBqCF2Nh2VA=', 340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Las variaciones del retardo entre los datagramas son muy pequeñas.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jbKlausHaFs=', 342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Cada datagrama ha de llevar una cabecera que permita que sea procesado de forma independiente.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KhFBCrQxJvg=', 702, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Los datagramas pueden llegar desordenados al destino.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('Cgtkudajfmg=', 704, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto a la conmutación de circuitos virtuales:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Cgtkudajfmg=', 706, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "En caso de que falle un enlace, todos los mensajes que van por ese camino serán descartados.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5sABkXEZZx4=', 545, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Cada mensaje ha de llevar una cabecera que permita que sea procesado por los conmutadores.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1Tgsp6BrtwU=', 547, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Todos los mensajes entre emisor y receptor para los que se establece la comunicación se entregan en orden.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GIuPPWUV/k4=', 549, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Todos los mensajes entre emisor y receptor para los que se establece la comunicación se envían por el mismo circuito virtual.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('MmBNS187+gI=', 910, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "No es necesario una fase inicial de establecimiento.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('wXh8vTe4als=', 910, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto a la ganancia por multiplezación estadística (SMG):";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IccygHH9cVU=', 912, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Cuanto más alta sea la SMG, más efectiva resultará la multiplexación estadística.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1zPrWTzWDPw=', 750, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Los administradores de red pueden configurar el SMG de los interfaces.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D6fK66HiXMs=', 752, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Si la SMG=1, entonces las tasas máximas de cada uno de los flujos que van por un enlace se dan en el mismo instante de tiempo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lJJDydlZpKM=', 113, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Si la SMG es alta, eso significa que los picos de anchos de banda de los diferentes flujos no están sincronizados en el tiempo.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('lJJDydlZpKM=', 115, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Cuantos más flujos se envían por un mismo enlace menos ancho de banda es necesario.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('wI5kGl5HVJY=', 474, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto a los modelos de referencia OSI y TCP.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2/y1EdfH1Fo=', 476, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "El modelo TCP/IP ofrece a la capa de aplicación dos modelos distintos, orientada a la conexión y no orientada a la conexión.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('F66XB93dVdQ=', 478, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "En ambos modelos los encaminados solo se encargan de las capas 1, 2 y 3.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8aG0mmd/54g=', 480, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "El modelo TCP/IP ofrece la interfaz de sockets a la capa de aplicación.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ucYF4xHdpwI=', 318, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "En TCP/IP se respeta el principio de ocultación de información entre capas de tal forma que una capa no ha de manejar información de las otras capas.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('eDx8EurKddA=', 320, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "La cabecera del nivel de enlace que pone el emisor en una red de varios routers intermedios es procesada por el nivel de enlace del receptor final del mensaje.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('5qZcXFtxwts=', 322, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "El nivel de transporte se encarga del control de flujo para el envío de datos extremo a extremo.";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('jfBzrUk/PiE=', 679, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto a la organización y estructura de Internet.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ERZenPTnuI4=', 681, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "En Internet existen operadores llamados &quot;Backbone ISPs&quot; que ofrecen conectividad a otros operadores más pequeños y no a usuarios finales.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ERZenPTnuI4=', 683, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "En Internet se puede encaminar por cualquier enlace existente independientemente de cualquier otro tipo de cuestiones o preferencias de los ISP.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oNZVAL7AVEA=', 685, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Los puntos de presencia (PoP) son centros de datos a los que se conectan las redes de los usuarios finales.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('pILI07x51as=', 1046, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Aunque Internet funciona como conmutación de datagramas, algunos de sus enlaces podrían consistir en circuitos virtuales ofrecidos por otras tecnologías de conmutación de circuitos como ATM.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('eLrZaWcSBNg=', 1048, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Indique cuáles de las siguientes afirmaciones son verdaderas respecto al encaminamiento en redes de comunicaciones.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eLrZaWcSBNg=', 1050, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Solo son válidas aquellas métricas tal que el coste de un camino se puede definir como la suma de los costes de los enlaces de dicho camino.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cNC+GqtvAOo=', 888, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El principio de optimalidad permite que para un nodo sea suficiente con conocer su siguiente vecino hacia cada destino y no hace falta que conozca los caminos completos.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cNC+GqtvAOo=', 890, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "El principio de optimalidad establece que solo hay un camino óptimo entre un origen y un destino.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Twzl5yu5ojs=', 892, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "En las redes de conmutación de circuitos el encaminamiento se efectúa durante el establecimiento del circuito virtual, mientras que en las de conmutación de datagramas se hace de forma independiente para cada datagrama.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('YTAepYrs/X0=', 253, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Indique cuáles de las siguientes afirmaciones son verdaderas en relación a las propiedades de los algoritmos de encaminamiento.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YTAepYrs/X0=', 255, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "La corrección se refiere a que el algoritmo consigue calcular el camino óptimo para llegar al destino.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9SsQm97wLIo=', 257, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "La robustez se refiere a que cuando caen nodos o cambia la topología, el algoritmo es capaz de converger a una nueva solución válida.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0hjglEfeUXI=', 259, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Algunas de las propiedades como, por ejemplo, la optimalidad y la equidad, son incompatibles entre sí.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0hjglEfeUXI=', 261, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Un algoritmo es estable cuando no cambia la ruta óptima aunque haya cambios topológicos en la red.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('HmjgBlCcYlI=', 99, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque las afirmaciones verdaderas de entre las siguientes sobre algoritmos de vector de distancia y de estado de enlace.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HmjgBlCcYlI=', 101, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "En los algoritmos de vector de distancia cada nodo inunda por toda la red un array con los costes de llegar a cada red destino.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uwghZQa1l6A=', 103, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Los protocolos de estado de enlace pueden usar soluciones como Poisson Reverse para paliar el problema de la cuenta a infinito.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('js/yrqx5F+U=', 105, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "El problema de la cuenta a infinito puede aparecer tanto en algorimtos de estado de enlace como de vector de distancias.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UD+YIfmyx8M=', 466, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Los protocolos de estado de enlace ofrecen una mejor convergencia que los de vector de distancia.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('PsMdHTlqWoU=', 468, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "En los algoritmos de vector de distancia un nodo recibe de cada vecino un array con su coste para llegar a cada red destino.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('k2e3FoE6TWI=', 827, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Indique cuál de las siguientes soluciones consiste en no anunciar un coste hacia un destino al vecino que nos ofrece el mejor camino a dicho destino.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('k2e3FoE6TWI=', 829, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Split Horizon con Poisson Reverse";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6wB+IbcWoyE=', 831, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Triggered Updates";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J1dOPHqC7js=', 833, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Split Horizon";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('J1dOPHqC7js=', 835, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Poisson Reverse";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('KaVGe3IckXc=', 673, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Dada la siguiente tabla de rutas: 144.15.0.0/16     via 121.11.10.29 144.15.64.0/18   via 133.15.11.23 144.15.128.0/18 via 119.11.0.4 144.15.128.0/22 via 137.1.1.5  Indicar a qué vecino se reenviaría un datagrama dirigido a la red 144.15.131.79.";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KaVGe3IckXc=', 675, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "121.11.10.29";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('G9P3R0Vq+ZQ=', 677, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "133.15.11.23";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jfBzrUk/PiE=', 679, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "137.1.1.5";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jfBzrUk/PiE=', 681, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "119.11.0.4";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('j2rY6hW9UVU=', 1042, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Respecto al direccionamiento en Internet, indique cuáles de las siguientes adirmaciones son verdaderas:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j2rY6hW9UVU=', 1044, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "La asignación geográfica de direcciones permite agregar rutas incluso si no existiese CIDR.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pILI07x51as=', 1046, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "CIDR es una forma de aprovechar mejor las direcciones asignando bloques más pequeños y haciendo supernetting.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eLrZaWcSBNg=', 1048, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "La forma más efectiva de agregar las redes 192.168.0.0/24, 192.168.1.0/24 y 192.168.2.0/24 es como 192.168.0.0/23 y 192.168.2.0/24.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eFMy4DX0pQU=', 409, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Las redes 192.168.1.0/24 y 192.168.2.0/24 pueden agregarse como 192.168.1.0/23.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('SfSZbKbHGRo=', 411, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "La agrupación de direcciones en clases A, B, C, D y E sin posibilidad de variar máscaras de red supone un desperdicio de direcciones.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('+HbHCQBfJd8=', 413, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "La ventaja fundamental de VLSM sobre CIDR es que permite subdividir el espacio de direccionamiento en subredes de tamaño distino.";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('lj0gDym6zqI=', 247, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto al encaminamiento en Internet:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nx5Dtuf9TJs=', 249, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Dentro de cada sistema autónomo se puede usar un protoclo de encaminamiento distinto y entre sistemas autónomos se usa el protocolo BGP.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nx5Dtuf9TJs=', 251, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "La separación del encaminamiento entre intra-dominio e inter-dominio ofrece una mejor escalabilidad y tolerancia a fallos.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YTAepYrs/X0=', 253, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "La separación del encaminamiento entre intra-dominio e inter-dominio ofrece una mejor escalabilidad y extensibilidad.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wn9rOns3Kmw=', 614, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Los triggered updates en RIP se usan para notificar de forma inmediata cualquier cambio en el coste de la ruta a un destino.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('wn9rOns3Kmw=', 616, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "En RIP, todos los routers envían vectores de distancia periódicamente a sus vecinos.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('oUtP42Wk6P4=', 616, 0, 99999);
    var numOfAnswers = 7;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto al funcionamiento de OSPF:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('oUtP42Wk6P4=', 618, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Un ABR conoce la topología completa de todas las áreas de la red OSPF.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+cklVnDUGwU=', 456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Los routers del área 0 son siempre los responsables de generar los LSA de tipo 3 para poder hacer encaminamiento inter-área,";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UbLxg6sgS6k=', 458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Un router interno conoce toda la topología de su área, pero no de otras áreas.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UbLxg6sgS6k=', 460, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Se elige un router designado (DR) y un backup del designado (BDR) en cada una de las áreas OSPF.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Ynms7vfv8oA=', 462, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Un ABR conoce la topología completa de al menos dos áreas.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('jB+wlqSlrmc=', 823, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "En una red pequeña donde no es necesario subdividir en áreas, solo se configura una única área denominada área 0 o Backbone.";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    var valuation7 = DecodeNumber('/a8jdUpyk/M=', 825, -1, 1);
    if (valuation7 === -2) PrintWrongKeyword(questionIndex);
    var choice7 = GetMultipleAnswerChoice(questionIndex, 6);
    if (choice7 === 1) question.noChoice = false;
    var answer7 = new Answer(choice7, valuation7, 1, 0, '');
    answer7.shortTextAnswer = "Los LSA de tipo 1 y 2 se inundan solo dentro de su área y los de tipo 3 los genera el ABR del área y los envía a los otros ABR inundándolos por el área Backbone.";
    answer7.shortTextRemark = "";
    question.answers.push(answer7);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('533ssO1sias=', 180, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Indique cuáles de las siguientes afirmaciones son ciertas respecto al protocolo BGP:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qkviDT5kSB8=', 182, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Un fallo en BGP puede dejar fuera de juego a una multinacional como Facebook.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xIN9hi5fvnE=', 184, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El atributo AS_PATH sirve para poder saber cuántos ASs y cuáles habría que atravesar para llegar a una determinada red destino.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xIN9hi5fvnE=', 186, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "BGP permite calcular siempre el camino más corto en número de saltos hacia cada red destino anunciada.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Z6Hf6J8AaqM=', 188, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "En BGP es normal que un operador que establece una relación Proveedor-cliente con uno de sus clientes anuncie al resto de Internet las rutas a todas las redes de su cliente.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Ungk80hxzwo=', 1026, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "En BGP es sencillo detectar ciclos mirando el atributo AS_PATH.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('Ungk80hxzwo=', 1026, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Respecto al modelo de comunicación en IP multicast, indique cuáles de las siguientes afirmaciones son verdaderas:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('2Fw98L/mgrY=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Un emisor puede transmitir paquetes multicast cuando quiera sin necesidad de emplear ningún protocolo específico.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tLneBVTDfnc=', 1030, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Los routers multicast solo son necesarios cuando emisores y receptores para un mismo grupo están en redes distintas.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/xFK5q+CzKQ=', 391, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Un host no puede suscribirse a más de un grupo multicast al mismo tiempo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LhLUaXHIeXw=', 393, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Un emisor y receptor para el mismo grupo multicast conectados a una LAN no pueden comunicarse directamente sin pasar por el router que envía los IGMP Queries.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('TRFPCMF7OYc=', 395, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto al direccionamiento multicast:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('InU33dfWLYA=', 397, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Los datagramas dirigidos a direcciones multicast del rango 224.0.0.0/24 nunca salen de su red local ya que los routers no los reenvían.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zI4rlie//Xs=', 758, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El control de ámbito basado en TTL consiste en usar dicho campo de la cabecera IP para limitar las redes a las que pueden llegar los datagramas multicast.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zI4rlie//Xs=', 760, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Dada una dirección multicast de enlace, se puede averiguar con una sencilla operación en hexadecimal la dirección IP multicast a la que corresponde.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aUk7PNOOfws=', 762, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A nivel IP, un host podría recibir datagramas IP multicast de grupos a los que no está suscrito.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('VbOIdmlQxSI=', 600, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "A nivel de enlace también existen direcciones multicast.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('5j5+I2/LUM4=', 600, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto al funcionamiento del protocolo IGMP:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5j5+I2/LUM4=', 602, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Los mensajes IGMP General Query se envían a la dirección IP del grupo multicast por el que pregunta el router.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RXUoCu5+kHk=', 604, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Un host envía un mensaje IGMPv2 Leave al abandonar un grupo solo si él fue quien respondió al último IGMPv2 Query del router.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rlVGfpdVfIc=', 965, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Justo cuando un host se suscribe a un grupo multicast envía un IGMP Report dirigido a dicho grupo aunque no haya recibido ningún IGMP Query.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AYtw2IvVCyw=', 967, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Tanto en IGMPv1 como en IGMPv2 solo responde a un general query un host por cada uno de los grupos multicast en los que haya interesados.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('AYtw2IvVCyw=', 969, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Ninguna de las anteriores.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('i1kT+224aXo=', 971, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var choice6 = GetMultipleAnswerChoice(questionIndex, 5);
    if (choice6 === 1) question.noChoice = false;
    var answer6 = new Answer(choice6, valuation6, 1, 0, '');
    answer6.shortTextAnswer = "En IGMPv1 los hosts no tienen forma de indicar que desean abandonar un grupo multicast, mientras que en IGMPv2 se usa el mensaje IGMPv2 Leave.";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('0CoFa7UZmn0=', 805, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto al encaminamiento multicast:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0CoFa7UZmn0=', 807, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Si para un datagrama dirigido a un grupo multicast G existe tanto una entrada de tipo (S,G), como una de tipo (*,G) en el router, este lo reenviará por todas las interfaces en la OIL de la entrada de tipo (*,G).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/zsMmZT8ysg=', 809, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "En los protocolos en modo disperso la red se inunda y poda periódicamente.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZeFvvfJnF0Y=', 811, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ninguna de las anteriores.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FUN05iBjxj8=', 1172, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Se construye un SPT por cada fuente IP multicast y grupo multicast de forma que todo receptor de dicho grupo recibe los datagramas multicast de la fuente por su camino más corto hasta la misma.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('jyhHzMGnUVo=', 1174, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Cuando un router recibe un datagrama multicast, este lo reenviará por todas sus interfaces en su OIL para dicha IP origen y grupo, independientemente de si pasa o no el RPF-Check satisfactoriamente.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('lF+fAQcafqE=', 1174, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto al protocolo de encaminamiento DVMRP:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Q6axR1DTA3s=', 1176, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "El mensaje DVMRP Graft se usa para restablecer una rama del árbol sin necesidad de esperar al siguiente ciclo de inundación de la red.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oBvDjJn37BM=', 537, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Un router DVMRP anuncia un coste infinito a un vecino cuando lo elige como su padre en el árbol multicast de esa fuente y grupo multicast concreto.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oBvDjJn37BM=', 539, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "El mensaje DVMRP Prune se envía a los routers hijos en el árbol para podarlos.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DWQ803+tsYk=', 541, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "El protocolo DVMRP construye su tabla de rutas independientemente de la tabla de rutas unicast.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('M2V65p7Eisg=', 379, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto al protocolo de encaminamiento multicast PIM-SM:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('s/PHjT4rP8U=', 381, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Cuando un router envía un PIM Join de tipo (?,G) hacia el RP, todos los routers intermedios han de propagarlo salvo que ya dispongan de una entrada de tipo (?,G) en su multicast forwarding caché.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s/PHjT4rP8U=', 383, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "El RP es el responsable de inundar y podar la red periódicamente.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VJbDwYdQkvk=', 385, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Cuando el SPT-Threshold se fija a 0, ningún router pasará a unirse a la fuente por el SPT en lugar de por el RP.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OmcGDS5E84I=', 746, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "El RP descubre que hay fuentes activas porque recibe mensajes PIM Register de los routers designados de dichas fuentes.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






