var process = true;
var cycle = 0;
while (process == true)
{
    var userChoose = prompt("Введите номер задания. Введите любой символ, если желаете выйти","сюда");
    switch (userChoose)
    {
        case "1":
            {
                cycle++;
                var x = 6;
                var y = 15;
                var z = 4;
                
                document.write("<H3>" + "Задание 1" + "</H3>" + "<br />");
                
                x += y - x++ * z;
                document.write("1) x = "+ x + "<br />");
            
                z = --x - y * 5;
                document.write("2) z = "+ z + "<br />");
            
                y /= x + 5 % z;
                document.write("3) y = "+ y + "<br />");
            
                z = x++ + y * 5;
                document.write("4) z = "+ z + "<br />");
            
                x = y - x++ * z;
                document.write("5) x = "+ x + "<br />");
            };
            break;
        case "2":
            {
                cycle++;

                document.write("<H3>" + "Задание 2" + "</H3>" + "<br />");

                var x = parseInt(prompt("Введите первое целочисленное значение", 'сюда'));
                document.write("Первое целое число: " + x + "<br />");

                var y = parseInt(prompt("Введите второе целочисленное значение", 'сюда'));
                document.write("Второе целое число: " + y + "<br />");

                var z = parseInt(prompt("Введите третье целочисленное значение", 'сюда'));
                document.write("Третье целое число: " + z + "<br />");

                var result = (x + y + z) / 3;
                document.write("Среднее арифметическое введенных данных равно: " + result + "<br />");
            };
            break;
        case "3":
            {
                cycle++;

                document.write("<H3>" + "Задание 3" + "</H3>" + "<br />");

                var r = parseInt(prompt("Введите радиус цилиндра", 'сюда'));
                document.write("Введенный радиус: " + r + "<br />");

                var h = parseInt(prompt("Введите высоту цилиндра", 'сюда'));
                document.write("Введенная высота: " + h + "<br />");

                const pi = 3.14; 

                document.write("Формула вычисления объёма цилиндра: V = πr<sup>2</sup>h" + "<br />");

                var V = pi * r ** 2 * h;
                document.write("Объём цилиндра: " + V + "<br />");

                document.write("Формула вычисления площади поверхности цилиндра: S = 2πrh + 2πr<sup>2</sup> = 2πr(r + h)" + "<br />");

                var S = 2* pi * r * (r + h);
                document.write("Площадь поверхности цилиндра: " + S + "<br />");
            };
            break;
        default:
            {
                cycle = 0;
                process = false;
            }
            break;
    };
};

