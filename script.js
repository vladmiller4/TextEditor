$(function () {
    $('.bold').click(() => { //робить текст жирним
        if ($('.text').hasClass('boldClick')) {
            $('.text').removeClass('boldClick');
        } else {
            $('.text').addClass('boldClick');
        }
    })
    $('.cursive').click(() => { //робить текст курсивним
        if ($('.text').hasClass('cursiveClick')) {
            $('.text').removeClass('cursiveClick');
        } else {
            $('.text').addClass('cursiveClick');
        }
    })
    $('.underline').click(() => { //підкреслює текст
        if ($('.text').hasClass('underlineClick')) {
            $('.text').removeClass('underlineClick');
        } else if ($('.text').hasClass('lineThroughClick')) {
            $('.text').removeClass('lineThroughClick');
            $('.text').addClass('underlineClick');
        } else {
            $('.text').addClass('underlineClick');
        }
    })
    $('.lineThrough').click(() => { //перекреслює текст
        if ($('.text').hasClass('lineThroughClick')) {
            $('.text').removeClass('lineThroughClick');
        } else if ($('.text').hasClass('underlineClick')) {
            $('.text').removeClass('underlineClick');
            $('.text').addClass('lineThroughClick');
        } else {
            $('.text').addClass('lineThroughClick');
        }
    })
    $('.leftPosition').click(() => { //вирівнює текст по лівій стороні
        if ($('.text').hasClass('leftPositionClick')) {
            $('.text').removeClass('leftPositionClick');
        } else if ($('.text').hasClass('centerPositionClick')) {
            $('.text').removeClass('centerPositionClick');
            $('.text').addClass('leftPositionClick');
        } else if ($('.text').hasClass('rightPositionClick')) {
            $('.text').removeClass('rightPositionClick');
            $('.text').addClass('leftPositionClick');
        } else {
            $('.text').addClass('leftPositionClick');
        }
    })
    $('.centerPosition').click(() => { //вирівнює текст по центру
        if ($('.text').hasClass('centerPositionClick')) {
            $('.text').removeClass('centerPositionClick');
        } else if ($('.text').hasClass('rightPositionClick')) {
            $('.text').removeClass('rightPositionClick');
            $('.text').addClass('centerPositionClick');
        } else if ($('.text').hasClass('leftPositionClick')) {
            $('.text').removeClass('leftPositionClick');
            $('.text').addClass('centerPositionClick');
        } else {
            $('.text').addClass('centerPositionClick');
        }
    })
    $('.rightPosition').click(() => { //вирівнює текст по правій стороні
        if ($('.text').hasClass('rightPositionClick')) {
            $('.text').removeClass('rightPositionClick');
        } else if ($('.text').hasClass('centerPositionClick')) {
            $('.text').removeClass('centerPositionClick');
            $('.text').addClass('rightPositionClick');
        } else if ($('.text').hasClass('leftPositionClick')) {
            $('.text').removeClass('leftPositionClick');
            $('.text').addClass('rightPositionClick');
        } else {
            $('.text').addClass('rightPositionClick');
        }
    })

    $('.fontFamily').click(() => { //відкриває блок з шрифтами
        if ($('.ulFont').css('display') == 'block') {
            $('.ulFont').css('display', 'none');
        } else {
            $('.ulFont').css('display', 'block');
        }
    })
    $('.fontSize').click(() => { //відкриває блок з розмірами шрифтів
        if ($('.ulSize').css('display') == 'block') {
            $('.ulSize').css('display', 'none');
        } else {
            $('.ulSize').css('display', 'block');
        }
    })
    let f = 12;
    for (i = 1; i < 11; i++) { // задає розмір шрифту елементу
        document.querySelector(`.ulSize>li:nth-child(${i})`).style.fontSize = `${f+'px'}`;
        f = f + 2;
    }
    let fontSizeChange = function (a, b) {
        $(`.ulSize>li:nth-child(${a})`).click(() => { // ф-ія для зміни розміру шрифту
            $('.text').css('fontSize', `${b+'px'}`);
            $('.ulSize').css('display', 'none');
        })
    }
    let size = 12;
    for (i = 1; i < 11; i++) { // задає функцію кожному елементу
        fontSizeChange(i, size);
        size = size + 2;
    }

    $('.color').click(() => {
        $('.modal1').css('display', 'block');
    })

    let fontFamilyArr = ['Arial', 'Impact', 'Gill Sans', 'Tahoma', 'Verdana'];
    let fontFamilyChange = function (a, b) {
        $(`.ulFont>li:nth-child(${a})`).click(() => { // ф-ія для зміни шрифту
            $('.text').css('fontFamily', `${fontFamilyArr[b]}`);
            $('.ulFont').css('display', 'none');
        })
    }
    family = 0;
    for (i = 1; i < 6; i++) { // задає функцію кожному елементу
        fontFamilyChange(i, family);
        family++;
    }

    let colorsArr = ['#00be9d', '#00a084', '#1fcf6d', '#19af5d', '#2b97dd', '#207fbb', '#9b56b6', '#8f40af', '#e94b34', '#c23825', '#f3c500', '#f59d01', '#e87f03', '#d55400', '#ecf0f1', '#bdc3c7', '#96a5a7', '#7f8c8c', '#32495f', '#2a3e50', '#000'];
    let colorsArr2 = ['#00be9d', '#00a084', '#1fcf6d', '#19af5d', '#2b97dd', '#207fbb', '#9b56b6', '#8f40af', '#e94b34', '#c23825', '#f3c500', '#f59d01', '#e87f03', '#d55400', '#ecf0f1', '#bdc3c7', '#96a5a7', '#7f8c8c', '#32495f', '#2a3e50', '#000'];

    for (i = 0; i < colorsArr.length; i++) { // задає фон кожному елементу
        document.body.getElementsByClassName("colorBlock")[i].style.background = colorsArr[i];
    }
    let colorChange = function (a) {
        document.body.getElementsByClassName("colorBlock")[a].onclick = function () { // ф-ія для зміни кольору тексту
            $('.text').css('color', `${colorsArr[a]}`);
        }
    }
    for (i = 0; i < colorsArr.length; i++) { // задає функцію кожному елементу
        colorChange(i);
    }
    for (i = 0; i < colorsArr2.length; i++) { // задає фон кожному елементу
        document.body.getElementsByClassName("colorBlock2")[i].style.background = colorsArr2[i];
    }
    let backgroundColorChange = function (a) { // ф-ія для зміни кольору фону
        document.body.getElementsByClassName("colorBlock2")[a].onclick = function () {
            $('body').css('background', `${colorsArr2[a]}`);
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
        }
    }
    for (i = 0; i < colorsArr.length; i++) { // задає функцію кожному елементу
        backgroundColorChange(i);
    }
    let imagesArr = ['url(./img/1.jpg)', 'url(./img/2.jpg)', 'url(./img/3.jpg)', 'url(./img/4.jpg)', 'url(./img/5.jpg)', 'url(./img/6.jpg)', 'url(./img/7.jpg)', 'url(./img/8.jpg)', 'url(./img/9.jpg)', 'url(./img/10.jpg)', 'url(./img/11.jpg)', 'url(./img/12.jpg)'];

    for (i = 0; i < imagesArr.length; i++) { // задає картинку кожному елементу 
        document.body.getElementsByClassName("imagesBlock")[i].style.backgroundImage = imagesArr[i];
    }
    let backgroundImageChange = function (a) { // ф-ія для зміни картинки фону
        document.body.getElementsByClassName("imagesBlock")[a].onclick = function () {
            $('body').css('backgroundImage', `${imagesArr[a]}`);
        }
    }
    for (i = 0; i < imagesArr.length; i++) { // задає функцію кожному елементу
        backgroundImageChange(i);
    }
    document.getElementById('imageUploads').onchange = function () { //ставить картинку з загруженого файлу
        document.querySelector('.browse').textContent = document.getElementById('imageUploads').value.replace(/.*[\\\/]/, "");
        let urlBrowse = URL.createObjectURL(this.files[0]);
        document.body.style.background = "url(" + urlBrowse + ") no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
    }
    $('#colorsChoiceButton').click(() => { //відкриває блок з кольорами
        $('.backgroundModal').css('height', '380px');
        $('#colorsChoiceButton').css({
            color: 'white',
            border: '2px solid white',
            backgroundColor: 'black'
        })
        $('.colors2').css('display', 'flex');
        $('.images').css('display', 'none');
        $('.files').css('display', 'none');
        $('#filesChoiceButton').css({
            color: 'black',
            border: '1px solid white',
            backgroundColor: 'white'
        })
        $('#imagesChoiceButton').css({
            color: 'black',
            border: '1px solid white',
            backgroundColor: 'white'
        })
    })
    $('#imagesChoiceButton').click(() => { //відкриває блок з картинками
        $('.backgroundModal').css('height', '380px');
        $('.colors2').css('display', 'none');
        $('.images').css('display', 'flex');
        $('#imagesChoiceButton').css({
            color: 'white',
            border: '2px solid white',
            backgroundColor: 'black'
        })
        $('.files').css('display', 'none');
        $('#colorsChoiceButton').css({
            color: 'black',
            border: '1px solid white',
            backgroundColor: 'white'
        })
        $('#filesChoiceButton').css({
            color: 'black',
            border: '1px solid white',
            backgroundColor: 'white'
        })
    })
    $('#filesChoiceButton').click(() => { //відкриває блок для загрузки файлу
        $('.backgroundModal').css('height', '175px');
        $('.colors2').css('display', 'none');
        $('.images').css('display', 'none');
        $('.files').css('display', 'flex');
        $('#filesChoiceButton').css({
            color: 'white',
            border: '2px solid white',
            backgroundColor: 'black'
        })
        $('#colorsChoiceButton').css({
            color: 'black',
            border: '1px solid white',
            backgroundColor: 'white'
        })
        $('#imagesChoiceButton').css({
            color: 'black',
            border: '1px solid white',
            backgroundColor: 'white'
        })
    })
    $('.textColorTitle > i').click(() => { // закриття модалки при кліку на іконку
        $('.modal1').css('display', 'none');
    })
    $('.background').click(() => {
        $('.modal2').css('display', 'block');
    })
    $('.backgroundModalTitle > i').click(() => {
        $('.modal2').css('display', 'none');
    })
    $('.modalCreateTableTitle > i').click(() => {
        $('.modal4').css('display', 'none');
    })
    $('.createOLtitle > i').click(() => {
        $('.modal5').css('display', 'none');
    })
    $('.createULtitle > i').click(() => {
        $('.modal6').css('display', 'none');
    })
    window.onclick = function (event) { // закриття модалки при кліку на пусте місце
        if (event.target == document.querySelector('.modal1')) {
            document.querySelector('.modal1').style.display = "none";
        } else if (event.target == document.querySelector('.modal2')) {
            document.querySelector('.modal2').style.display = "none";
        } else if (event.target == document.querySelector('.modal3')) {
            document.querySelector('.modal3').style.display = "none";
        } else if (event.target == document.querySelector('.modal4')) {
            document.querySelector('.modal4').style.display = "none";
        } else if (event.target == document.querySelector('.modal5')) {
            document.querySelector('.modal5').style.display = "none";
        } else if (event.target == document.querySelector('.modal6')) {
            document.querySelector('.modal6').style.display = "none";
        } else if (event.target == document.querySelector('.modal7')) {
            document.querySelector('.modal7').style.display = "none";
        }
    }

    $('.signIn').click(() => { // відкриває влок для входу
        if ($('.control').hasClass('unblocked')) {
            $('.modal7').css('display', 'block');
        } else {
            $('.modal3').css('display', 'block');
        }
    })
    $('.signOutButton').click(() => { // виходить і забирає доступ для створення елементів
        $('.control').removeClass('unblocked');
        $('.modal7').css('display', 'none');
        $('.signIn>i').css('color', '#eb5060');
    })
    let qS = a => document.querySelector(a);

    qS('.signInButton').onclick = function () { // заходить і дає доступ для створення елементів при (login: admin; password: admin)
        let regExp = /^admin$/
        if (qS('.loginInput').value == '' && qS('.passwordInput').value == '') {
            qS('.loginInput').style.boxShadow = '0 0 1px 3px #eb5060';
            qS('.passwordInput').style.boxShadow = '0 0 1px 3px #eb5060';
            qS('.invalidInput').textContent = 'Value is empty';
        } else if (regExp.test(qS('.loginInput').value) == false || regExp.test(qS('.passwordInput').value) == false) {
            qS('.loginInput').style.boxShadow = '0 0 1px 3px #eb5060';
            qS('.passwordInput').style.boxShadow = '0 0 1px 3px #eb5060';
            qS('.invalidInput').textContent = 'Please check your login or password';
        } else {
            qS('.loginInput').style.boxShadow = '';
            qS('.passwordInput').style.boxShadow = '';
            qS('.invalidInput').textContent = '';
            $('.modal3').css('display', 'none');
            $('.signIn>i').css('color', '#06a10b');
            $('.control').addClass('unblocked');
        }
    }
    $('.control').click(() => {
        if ($('.control').hasClass('unblocked')) { //відкриває панель для створення елементів якщо є доступ
            $('.controlPanel').css('display', 'none');
            $('.text').css('display', 'none');
            $('.controlPanel2').css('display', 'flex');
            $('.text2').css('display', 'block');
            qS('.textarea').value = qS('.text').innerHTML;
            $('.textarea').css('display', 'block');
            qS(".TableConstruction").innerHTML = "";
            qS(".olConstruction").innerHTML = "";
            qS(".ulConstruction").innerHTML = "";
        } else {
            alert('You must be logged in to access this button!');
        }
    })
    $('.save').click(() => { //зберігає створення елементи
        qS('.text').innerHTML = qS('.textarea').value;
        $('.controlPanel2').css('display', 'none');
        $('.text2').css('display', 'none');
        $('.controlPanel').css('display', 'flex');
        $('.text').css('display', 'block');
        $('.textarea').css('display', 'none');
    })
    $('.table').click(() => { // відкриває блок для створення таблички
        $('.modal4').css('display', 'block');
    })

    qS("#buttonTable2").onclick = function () { //створення таблички
        let regExpTable1 = /^\d{1,2}$/;
        let regExpTable2 = /^\d{1,3}$/;
        let regExpTable3 = /choose/;

        if (regExpTable1.test(qS(".countTR").value) == false) {
            qS(".countTR").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid').css('visibility', 'visible');
        } else {
            qS(".countTR").style.boxShadow = '';
            $('#pInvalid').css('visibility', 'hidden');
        }
        if (regExpTable1.test(qS(".countTD").value) == false) {
            qS(".countTD").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid').css('visibility', 'visible');
        } else {
            qS(".countTD").style.boxShadow = '';
            $('#pInvalid').css('visibility', 'hidden');
        }
        if (regExpTable2.test(qS(".widthOfTD").value) == false) {
            qS(".widthOfTD").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid').css('visibility', 'visible');
        } else {
            qS(".widthOfTD").style.boxShadow = '';
            $('#pInvalid').css('visibility', 'hidden');
        }
        if (regExpTable2.test(qS(".heightOfTD").value) == false) {
            qS(".heightOfTD").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid').css('visibility', 'visible');
        } else {
            qS(".heightOfTD").style.boxShadow = '';
            $('#pInvalid').css('visibility', 'hidden');
        }
        if (regExpTable1.test(qS(".widthOfBorder").value) == false) {
            qS(".widthOfBorder").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid').css('visibility', 'visible');
        } else {
            qS(".widthOfBorder").style.boxShadow = '';
            $('#pInvalid').css('visibility', 'hidden');
        }
        if (regExpTable3.test(qS(".styleOfBorder").value) == true) {
            qS(".styleOfBorder").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid').css('visibility', 'visible');
        } else {
            qS(".styleOfBorder").style.boxShadow = '';
            $('#pInvalid').css('visibility', 'hidden');
        }
        if (regExpTable3.test(qS(".colorOfBorder").value) == true) {
            qS(".colorOfBorder").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid').css('visibility', 'visible');
        } else {
            qS(".colorOfBorder").style.boxShadow = '';
            $('#pInvalid').css('visibility', 'hidden');
        }
        let re1 = (a) => regExpTable1.test(qS(`.${a}`).value) == false;
        let re2 = (a) => regExpTable2.test(qS(`.${a}`).value) == false; // ф-ії для перевірки
        let re3 = (a) => regExpTable3.test(qS(`.${a}`).value) == true;
        if (re1('countTR') || re1('countTD') || re2('widthOfTD') || re2('heightOfTD') || re1('widthOfBorder') || re3('styleOfBorder') || re3('colorOfBorder')) {} else {
            let table = document.createElement("table");
            qS(".TableConstruction").appendChild(table);
            for (let i = 0; i < qS(".countTR").value; i++) {
                let tr = document.createElement("tr");
                table.appendChild(tr);
                for (let i = 0; i < qS(".countTD").value; i++) {
                    let td = document.createElement("td");
                    tr.appendChild(td);
                    td.textContent = "TD";
                    td.style.textAlign = "center";
                    td.style.width = qS(".widthOfTD").value + "px";
                    td.style.height = qS(".heightOfTD").value + "px";

                    for (let i = 0; i < qS(".styleOfBorder").length; i++) {
                        if (qS(".styleOfBorder")[i].selected) {
                            td.style.border = qS(".widthOfBorder").value + "px " + qS(".styleOfBorder")[i].value;
                        }
                    }
                    for (let i = 0; i < qS(".colorOfBorder").length; i++) {
                        if (qS(".colorOfBorder")[i].selected) {
                            td.style.borderColor = qS(".colorOfBorder")[i].value;
                        }
                    }
                }
            }
            qS(".textarea").value += qS(".TableConstruction").innerHTML;
            qS(".TableConstruction").innerHTML = "";
        }
        qS("#buttonTable1").onclick = function () { //зачищає поля 
            qS(".countTR").value = '';
            qS(".countTD").value = '';
            qS(".widthOfTD").value = '';
            qS(".heightOfTD").value = '';
            qS(".widthOfBorder").value = '';
            qS(".styleOfBorder").value = qS(".styleOfBorder").childNodes[1].value;
            qS(".colorOfBorder").value = qS(".colorOfBorder").childNodes[1].value;
        }
    }
    $('.ol').click(() => {
        $('.modal5').css('display', 'block');
    })
    qS("#buttonOL1").onclick = function () { //зачищає поля 
        qS(".numberOfLiItems").value = '';
        qS(".typeOfMarking").value = qS(".typeOfMarking").childNodes[1].value;
    }
    qS("#buttonOL2").onclick = function () { //створення OL
        let regExpTable1 = /^\d{1,2}$/;
        let regExpTable3 = /choose/;
        if (regExpTable1.test(qS(".numberOfLiItems").value) == false) {
            qS(".numberOfLiItems").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid2').css('visibility', 'visible');
        } else {
            qS(".numberOfLiItems").style.boxShadow = '';
            $('#pInvalid2').css('visibility', 'hidden');
        }
        if (regExpTable3.test(qS(".typeOfMarking").value) == true) {
            qS(".typeOfMarking").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid2').css('visibility', 'visible');
        } else {
            qS(".typeOfMarking").style.boxShadow = '';
            $('#pInvalid2').css('visibility', 'hidden');
        }
        let re1 = (a) => regExpTable1.test(qS(`.${a}`).value) == false; // ф-ії для перевірки
        let re3 = (a) => regExpTable3.test(qS(`.${a}`).value) == true;
        if (re1('numberOfLiItems') || re3('typeOfMarking')) {} else {
            let ol = document.createElement("ol");
            qS(".olConstruction").appendChild(ol);
            for (let i = 0; i < qS(".numberOfLiItems").value; i++) {
                let li = document.createElement("li");
                ol.appendChild(li);
                li.textContent = `item ${i + 1}`;
                li.style.marginLeft = "20px";

            }
            for (let i = 0; i < qS(".typeOfMarking").length; i++) {
                if (qS('.typeOfMarking')[i].selected) {
                    ol.style.listStyle = qS('.typeOfMarking')[i].value;
                }
            }
            qS(".textarea").value += qS(".olConstruction").innerHTML;
            qS(".olConstruction").innerHTML = "";
        }
    }

    $('.ul').click(() => {
        $('.modal6').css('display', 'block');
    })
    qS("#buttonUL1").onclick = function () { //зачищає поля 
        qS(".numberOfLiItems2").value = '';
        qS(".typeOfMarking2").value = qS(".typeOfMarking2").childNodes[1].value;
    }
    qS("#buttonUL2").onclick = function () { //створення UL
        let regExpTable1 = /^\d{1,2}$/;
        let regExpTable3 = /choose/;
        if (regExpTable1.test(qS(".numberOfLiItems2").value) == false) {
            qS(".numberOfLiItems2").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid3').css('visibility', 'visible');
        } else {
            qS(".numberOfLiItems2").style.boxShadow = '';
            $('#pInvalid3').css('visibility', 'hidden');
        }
        if (regExpTable3.test(qS(".typeOfMarking2").value) == true) {
            qS(".typeOfMarking2").style.boxShadow = '0 0 1px 3px #eb5060';
            $('#pInvalid3').css('visibility', 'visible');
        } else {
            qS(".typeOfMarking2").style.boxShadow = '';
            $('#pInvalid3').css('visibility', 'hidden');
        }
        let re1 = (a) => regExpTable1.test(qS(`.${a}`).value) == false; // ф-ії для перевірки
        let re3 = (a) => regExpTable3.test(qS(`.${a}`).value) == true;
        if (re1('numberOfLiItems2') || re3('typeOfMarking2')) {} else {
            let ul = document.createElement("ul");
            qS(".ulConstruction").appendChild(ul);
            for (let i = 0; i < qS(".numberOfLiItems2").value; i++) {
                let li = document.createElement("li");
                ul.appendChild(li);
                li.textContent = `item ${i + 1}`;
                li.style.marginLeft = "20px";

            }
            for (let i = 0; i < qS(".typeOfMarking2").length; i++) {
                if (qS('.typeOfMarking2')[i].selected) {
                    ul.style.listStyle = qS('.typeOfMarking2')[i].value;
                }
            }
            qS(".textarea").value += qS(".ulConstruction").innerHTML;
            qS(".ulConstruction").innerHTML = "";
        }
    }
})