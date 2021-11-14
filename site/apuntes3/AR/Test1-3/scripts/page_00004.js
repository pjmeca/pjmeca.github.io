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



$(document).ready(function ()
{
	const questionIndex = 3;
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
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('pwoCud7+T3U=', 539, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Marque cuáles de las siguientes afirmaciones son verdaderas respecto a la ganancia por multiplezación estadística (SMG):";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pwoCud7+T3U=', 541, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Los administradores de red pueden configurar el SMG de los interfaces.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mHyjNt/JZxg=', 379, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Cuantos más flujos se envían por un mismo enlace menos ancho de banda es necesario.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uvy7afGcG8s=', 381, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Cuanto más alta sea la SMG, más efectiva resultará la multiplexación estadística.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kF0ZSdItTqA=', 383, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Si la SMG es alta, eso significa que los picos de anchos de banda de los diferentes flujos no están sincronizados en el tiempo.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Tbo8u5c7PJY=', 385, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Si la SMG=1, entonces las tasas máximas de cada uno de los flujos que van por un enlace se dan en el mismo instante de tiempo.";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}






