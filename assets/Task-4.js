var r = parseInt(prompt("Введите радиус цилиндра", 'сюда'));
document.write("Введенный радиус: " + r + "<br />");

var h = parseInt(prompt("Введите высоту цилиндра", 'сюда'));
document.write("Введенная высота: " + h + "<br />");

const pi = 3.14; 

document.write("Формула вычисления объёма цилиндра: V = πr<sup>2</sup>h" + "<br />");

var V = pi * r ** 2 * h;
document.write("Объём цилиндра: " + V + "<br />");

document.write("Формула вычисления площади поверхности цилиндра: S = 2πrh + 2πr<sup>2</sup> = 2πr(r + h)" + "<br />");

var S = 2* pi * r * (r + h)
document.write("Площадь поверхности цилиндра: " + S + "<br />")