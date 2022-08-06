    var x = 6;
    var y = 15;
    var z = 4;

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
