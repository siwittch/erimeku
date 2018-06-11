// JavaScript source code

var gSC3SJ10001

//gSC3SJ10001 = {

//    loadFunc: function(){

//        $("#headerTitle").text("test");
//},  


//};

//gSC3SJ10001 = {

//}

function loadFunc() {

    $("#headerTitle").text("test");

    var answer = "";
    /* 000 文字を逆に表示 */
    var knock000 = "Katie"
    answer = knock000.split("").reverse().join("");
    $("#knock000").text(answer);

    // 001 一部の文字列を抽出
    knock001();

    // 002 円周率？
    knock002();


    /* 003 元素記号 */
    knock003();

    // 007 テンプレートによる文生成
    knock007();

    // 008 暗号文
    knock008();
}

function test() {

    $("#topPage").text("aaa");
}

function topPage() {

    $("#topPage").text("aaa");
}

function knock001() {

    /* 001 一部の文字列を抽出 */
    var get = [0, 3, 5, 7];
    var knock001 = "0123456789";
    answer = "";

    get.forEach(function (value, index) {

        answer += knock001.charAt(value);
    });

    //answer = get.forEach(knock001());

    $("#knock001").text(answer);
}

function knock002() {

    var list = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.".replace(/,|\./g, '').split(" ");
    var answer002 = [];

    for (var i = 0; i < list.length; i++) {

        answer002[i] = list[i].length;
    }

    $("#knock002").text(answer002.join(""));
}

function knock003() {

    list = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.".replace(/,|\./g, '').split(" ");

    var answer003 = {};
    var strAnswer003 = "";

    for (var i = 0; i < list.length; i++) {

        answer003[String(i + 1)] = list[i].slice(0, 2);
        strAnswer003 += list[i].slice(0, 2);
    }

    $("#knock003").text(strAnswer003);
}

function knock007() {

    var template = function (x,y,z) {

        return x + "時の" + y + "は" + z;
    }

    $("#knock007").text(template("12", "気温", "22.4"));
}

function knock008() {

    var cipher = function (diffcode, pattern) {

        this.diffcode = diffcode;
        this.pattern = pattern;

        this.process = function (str) {

            var string = str.split("");
            var encodeStr = "";

            for (var i = 0; i < string.length; i++) {

                if (string[i].match(this.pattern)) {

                    encodeStr += string.fromCharCode(this.diffcode - string[i].charAt(0));
                }
                else {

                    encodeStr += string[i];
                }
            }
            return encodeStr;
        }
    } 

    var knock008 = new cipher(219, /^[a-z]+$/);

    var answer = cipher.process("Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.");

    $("#knock008").text(knock008.process(answer));

}


//$(loadFunc); 
$(document).ready(loadFunc);