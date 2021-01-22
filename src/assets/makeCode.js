let makeCode = function (canvas, codeLenght) {
    codeLenght = codeLenght || 4; //默认4个字符
    var valueArr = [];
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    //设置所有可能出现的字符
    var codeLib = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var codeLibLength = codeLib.length;
    for (var i = 0; i < codeLenght; i++) {
        // 获得随机字符
        var txt = codeLib[parseInt(Math.random() * codeLibLength)];
        valueArr.push(txt.toLowerCase());
        //产生-20~20之间的随机弧度
        var deg = ((Math.random() * 40 - 20) * Math.PI) / 180;
        //文字在canvas上的坐标位置
        var x = (canvasWidth / (codeLenght + 1)) * (i + 0.5);
        var y =
            Math.random() * ((canvasHeight * 1) / 5) + (canvasHeight * 7) / 10;
        //字体设置
        var fontSize = (canvasHeight * 3) / 4;
        context.font = "bold " + fontSize + "px 微软雅黑";
        context.translate(x, y);
        context.rotate(deg);
        context.fillStyle =
            "rgb(" +
            parseInt(Math.random() * 200) +
            "," +
            parseInt(Math.random() * 200) +
            "," +
            parseInt(Math.random() * 200) +
            ")";
        context.fillText(txt, 0, 0);
        context.rotate(-deg);
        context.translate(-x, -y);
    }
    //验证码上显示线条
    for (var i = 0; i < 5; i++) {
        context.strokeStyle =
            "rgb(" +
            parseInt(Math.random() * 100 + 155) +
            "," +
            parseInt(Math.random() * 100 + 155) +
            "," +
            parseInt(Math.random() * 100 + 155) +
            ")";
        context.beginPath();
        context.moveTo(
            Math.random() * canvasWidth,
            Math.random() * canvasHeight
        );
        context.lineTo(
            Math.random() * canvasWidth,
            Math.random() * canvasHeight
        );
        context.stroke();
    }
    //验证码上显示小点
    for (var i = 0; i <= 24; i++) {
        context.strokeStyle =
            "rgb(" +
            parseInt(Math.random() * 100 + 155) +
            "," +
            parseInt(Math.random() * 100 + 155) +
            "," +
            parseInt(Math.random() * 100 + 155) +
            ")";
        context.beginPath();
        var x = Math.random() * canvasWidth;
        var y = Math.random() * canvasHeight;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
    //返回当前验证码的值
    return valueArr.join("");
}
export default makeCode