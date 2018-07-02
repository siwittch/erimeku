// JavaScript source code
// tech-drill 

// erimeku test

var gSC3SJ10001;

(function () {

    gSC3SJ10001 = {

        start: function () {

            $("#headerTitle").text("test");
            //gSC3SJ10001.knock001();
            //gSC3SJ10001.knock002();

            $("#square").on("dragstart", gSC3SJ10001.dragStart);
            $("#space").on("drop", gSC3SJ10001.drop);
            $("#space").on("dragover", gSC3SJ10001.dragover);
            $("#space").on("dragLeave", gSC3SJ10001.dragLeave);

        },


        // 【超基礎編】変数・関数を学んでみよう！ START
        /**
         * 
         * 問1
         */
        knock001: function () {

            var width = 7;
            var height = 9;
            var area = width * height;

            $("#knock001").text(area);
        },

        knock002: function () {

            var number = 10;
            var a = 6;
            var b = 7;

            function add(num1 , num2) {
                return num1 + num2;
            }

            number = add(a, b);

            $("#knock002").text(number);

        },


        dragStart: function (event) {

            //gSC3SJ10001.knock001();
            event.dataTransfer.setData("text", event.target.id);
        },

        drop: function (event) {

            var id = event.dataTransfer.getData("text");
            var ele = $(id);
            event.currentTarget.appendChild(ele);
            event.preventDefault();
        },

        // ドラッグ対象に入っているときに行う処理
        dragOver: function (event) {

            $("#space").addClass("grayOut");
        },

        dragLeave: function (event) {

            $("#space").removeClass("grayOut");
        }

        // 【超基礎編】変数・関数を学んでみよう！ END
    };

    $(document).ready(gSC3SJ10001.start);
    //$(document).on('ready', gSC3SJ10001.start());
}());