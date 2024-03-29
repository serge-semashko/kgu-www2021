"use strict";
var url;
var histurl;
var ncount = 0;
var newtime = new Date().getTime();
var starttime = new Date().getTime() - 1000000;
var chupdating = [false, false, false, false, false];
var ch2updating = false;
var ch3updating = false;
var step = 0;
var chart2count = 0;
var chart3count = 0;
var insatData = {};

function toChart(txtval) {
    try {
        txtval = txtval.toString();
        var t6 = Number(txtval.replace(/,/g, "."))
        t6 = Number(t6.toFixed(2));
        return t6;
    } catch (error) {
        return '0';
    }

}

function formatNumber(val, dec) {
    try {
        var res = '';
        var inp = val;
        var ind = 0;

        while (ind < val.length) {
            res += inp[ind];
            if (inp[ind] == ',' | inp[ind] == '.') {
                break;
            }
            ind++;

        }
        if (ind > val.length - 1) {
            return val
        }
        for (var afterPos = 1; (ind + afterPos) < val.length & afterPos <= dec; afterPos++) {
            res += inp[ind + afterPos];
        }
        return res;
    } catch (e) {
        return 'Non';
    }
}

function spliceData(elName, elData) {

    var selnum = document.getElementById(elName).options.selectedIndex;
    var needlen = 120;
    switch (selnum) {
        case 0:
            needlen = 120;
            break;
        case 1:
            needlen = 6 * 120;
            break;
        case 2:
            needlen = 24 * 120;
            break;
    }

    if (elData.length > needlen) {
        elData.splice(0, elData.length - (needlen * 2))
    }
}

function shrink_append_Hist(histData, newData, serlen) {
    if (histData.length == 0) {
        histData.push(newData);
        return;
    }
    if (serlen == 0) serlen = 120;
    serlen /= 120
    let dt = 0;
    let t1, t2, t3, dh, th, trec, tnow, i;

    for (i = 0; i < histData.length; i += 20) {
        t1 = histData[i];
        if ((!('date' in t1)) | (!('time' in t1))) {
            debugger;
            return;
        }

        t2 = t1['date'] + ' ' + t1['time']
        t3 = t2.split(' ');
        dh = t1['date'].split(':');
        th = t1['time'].split(':');
        trec = (new Date('20' + dh[2], +dh[1] - 1, dh[0], th[0], th[1], th[2], 0)).getTime() / (1000 * 3600);
        tnow = (new Date().getTime()) / (1000 * 3600);
        dt = tnow - trec;
        if ((tnow - trec) < serlen) {

            break;

        }
        ;

    }
    if (i > 0) histData.splice(0, i);
    if (histData.length == 0) {
        histData.push(newData);
        return;
    }

    t1 = histData[histData.length - 1];
    if ((!('date' in t1)) | (!('time' in t1))) {
        debugger;
        return;

    }

    dh = t1['date'].split(':');
    th = t1['time'].split(':');
    let tLastRec = (new Date('20' + dh[2], +dh[1] - 1, dh[0], th[0], th[1], th[2], 0)).getTime() / (1000);

    dh = newData['date'].split(':');
    th = newData['time'].split(':');
    let tNewRec = (new Date('20' + dh[2], +dh[1] - 1, dh[0], th[0], th[1], th[2], 0)).getTime() / (1000);
    dt = tNewRec - tLastRec;
    if ((dt) > serlen * 5) {


        histData.push(newData);
        ;
        if (serlen == 1) console.log('shrin append ' + tLastRec + ' ' + tNewRec + ' dt=' + dt);

    }
    ;


}

function appendData(elSelectPeriod, elChart, elDataHist111, elDataNow) {
    let elDataHist = elChart.dataProvider;

    let selnum = document.getElementById(elSelectPeriod).options.selectedIndex;
    let selopt = document.getElementById(elSelectPeriod).options[selnum].value
    let newtime = new Date().getTime();
    let needlen = 120;
    switch (selopt) {
        case "online":
            needlen = 0;
            break;
        case "1h":
            needlen = 120;
            break;
        case "6h" :
            needlen = 6 * 120;
            break;
        case "24h":
            needlen = 24 * 120;
            break;
    }

    //elDataHist.push(elDataNow);
    shrink_append_Hist(elDataHist, elDataNow, needlen)

    elChart.validateData();
}

function processInsatData(t) {
    insatData = t;
    // console.log('Insat='+JSON.stringify(t))
}

function processData(t) {
    var r = [],
        o = 0;
    // console.log('\n step 2\n');
    var a = t.VV[1].replace(/,/g, "."),
        i = t.VV[2].replace(/,/g, "."),
        d = t.VV[167].replace(/,/g, "."),
        l = Number(a),
        n = Number(i),
        c = Number(d);
    for (var h = 0; h < t.ID.length; ++h) {
        var s = t.ID[h];
        r[s] = 0;
        for (var g = t.VC[h], p = o; p < o + g; p++)
            "VALUE" == t.VN[p] && (r[s] = t.VV[p].replace(",", "."));
        o += g
    }
    for (i in r) {
        var a = r[i];
        if ((+a < 0) | (+a > 1000000)) {
            r[i] = 'error';
        }
    }
    r[45] = 'NaN';
    r[46] = 'NaN';
    r[47] = 'NaN';
    r[51] = 'NaN';
    r[43] = 'NaN';
    r[36] = 'NaN';
    r[32] = 'NaN';
    r[33] = 'NaN';
    r[5] = 'NaN';
    r[11] = 'NaN';
    r[23] = 'NaN';
    r[111] = 'NaN';
    r[7] = 'NaN';
    r[12] = 'NaN';
    r[24] = 'NaN';
    r[9] = 'NaN';
    r[26] = 'NaN';
    r[28] = 'NaN';
    r[10] = 'NaN';
    r[27] = 'NaN';
    r[29] = 'NaN';
    r[14] = 'NaN';
    r[15] = 'NaN';
    r[16] = 'NaN';
    r[17] = 'NaN';
    r[18] = 'NaN';
    r[19] = 'NaN';
    r[20] = 'NaN';
    r[21] = 'NaN';
    for (var i in insatData) {
        var val = formatNumber(insatData[i], 3);
        insatData[i] = (val + ' ').trim().replace(",", ".");
    }


    //  k1t11 
    r[28] = insatData['01LEC01CT011'];
    // var k1t12 
    r[29] = insatData['01LEC01CT012'];
    // var k1t13 
    r[111] = insatData['01LEC01CT013'];
    // var k1t14 
    r[31] =  insatData['01LEC01CT014'];
    // var k1t6 
    r[12] = insatData['01LEC02CT006'];
    // var k1t7 
    r[26] = insatData['01LEC01CT007'];
    // var k1t5 
    r[11] = insatData['01LEC02CT005'];
    // var k1t3 
    r[9] = insatData['01LEC02CT003'];
    // var k1t4 
    r[10] = insatData['01LEC02CT004'];
    //T1
    r[5] = insatData['01LEC02CT001'];
    //T2
    r[7] = insatData['01LEC02CT002'];
    //T8
    r[27] = insatData['01LEC01CT008'];
    //T9
    r[23] = insatData['01LEC01CT009'];
    //T10
    r[24] = insatData['01LCM11CT001'];
//Температуры на БО1 kgu 1
    //T181 var k1t181
    r[14] = insatData['01LEC01CT181'];

// t191    var k1t191 
    r[15] = insatData['01LEC01CT191'];

//  t201  k1t201 
    r[16] = insatData['01LEC02CT201'];
//  t211   var k1t211
    r[17] = insatData['01LEC02CT211'];

//Температуры на БО2 kgu 1
// T182    var k1t182
    r[18] = insatData['01LEC11CT181'];
// T192    var k1t192
    r[19] = insatData['01LEC11CT191'];
//    var k1t202 
    r[20] = insatData['01LEC12CT201'];
//    var k1t212 
    r[21] = insatData['01LEC12CT211'];
//Обороты
//    var k1td1 
    r[45] = insatData['01LMP01DS001'];

//    var k1td2 
    r[46] = insatData['01LMP02DS001'];
//    var k1td3 
    r[47] = insatData['01LMP03DS001'];

//    var k1pg 
    r[51] = insatData['01LMN01DS001'];

//Уровни
//    var k1sbr
    r[35] = insatData['01LCM11CL001'];
//    var k1vanna
    r[36] = insatData['01LCM31CL001'];
//    var k1bo1 
    r[32] = insatData['01LCM21CL001'];
//    var k1bo2 
    r[33] = insatData['01LCM22CL001'];
//    00LCM11CL001	Уровень газгольдера
    var kgu1_00LCM11CL001 = insatData['00LCM11CL001'];
//	00LCM51CL001	Уровень азота в азотном танке
    var kgu1_00LCM51CL001 = insatData['00LCM51CL001'];
    var tempers = [5, 11, 23, 111, 7, 12, 24, 9, 26, 28, 10, 27, 29, 14, 15, 16, 17, 18, 19, 20, 21, 55, 61, 73, 112, 57, 62, 74, 59, 76, 78, 60, 77, 79, 64, 65, 66, 67, 68, 69, 70, 71];
    for (var i in tempers) {
        var val = formatNumber(r[tempers[i]], 1);
        r[tempers[i]] = (val + ' ').trim().replace(",", ".");

    }
    var tempers = [95, 96, 97, 101, 45, 46, 47, 51];
    for (var i in tempers) {

        r[tempers[i]] = (r[tempers[i]] + ' ').trim().replace(",", ".");
        var p1 = r[tempers[i]].indexOf('.');
        if (p1 > -1) {
            r[tempers[i]] = r[tempers[i]].substr(0, p1);
        }

    }
    var p1 = r.join(',');
    //console.log('p1='+p1)


    $.each($(".data-table").find("div.int"), function () {
        var o = $(this).data("id");
        $(this).html(r[o])
    }), $.each($(".data-table").find("div.float"), function () {
        var o = $(this).data("id");
        $(this).html(r[o])
        $(this).html(parseFloat(r[o]).toFixed(1))
    });

}

function processFullData(fullData) {   //                        console.log('\n step 3\n');

//    00LCM11CL001	Уровень газгольдера
    fullData['kgu1_00LCM11CL001'] = fullData['00LCM11CL001'];
//	00LCM51CL001	Уровень азота в азотном танке

    fullData['kgu1_00LCM51CL001'] = fullData['00LCM51CL001'];
    let newDatam2 = Object.assign({}, fullData);//!!!!!!!!!!!!!!!!!!!!!!

    appendData("ch2periodselect", chart2, chartData2, newDatam2);
    appendData("ch3periodselect", chart3, chartData3, newDatam2);
    var deltime = (newtime - starttime);
//    if ((newtime - starttime) < 30000)
//        return;
    starttime = newtime;
    insatData = fullData;
    $.each($(".booster-table").find("div.int"), function () {
//        var o = $(this).data("id");
//        $(this).html('i'+fullData[o])
    }), $.each($(".booster-table").find("div.float"), function () {
        var o = $(this).data("idb");
        if (typeof o == NaN) {
            return;
        }
        if (typeof o == "undefined") {
            return;
        }
        if (typeof fullData[o] == "undefined") {
            return;
        }
        let tmpa = parseFloat(fullData[o]).toFixed(2);
        // console.log(o+'  = '+fullData[o]+' = '+tmpa+' '+typeof tmpa);
        if ((tmpa == 'NaN') | (tmpa == NaN)) {
        } else {
            $(this).html(tmpa);

        }
    });

    return 0;
}

function getAllData() {


//                        console.log('\n step 1\n');

// console.log("\n###Agetson nucloweb start");
//    $.ajax({
//        type: "POST",
//        dataType: "json",
//        url: "last_data30.dat ",
//        data: {
//            "get_member": "id"
//       },
//        success: function (t) {
//            processData(t);
//        },
//        error: function (error) {
//            console.log("\n####Main AJAX  error:" + JSON.stringify(error));
//        }
//    });
    fetch("last_data30.dat")
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('last_data30.dat was a problem. Status Code: ' +
                        response.status);
//                setTimeout(getData,1500)
                    return;
                }

                // Examine the text in the response
                response.text().then(function (t) {

                    //console.log("\n+++++mac30 data  OK    :" + t);
                    t = t.replace(/NaN/gi, '"none"');
                    t = t.replace(/\)/gi, '');
                    t = t.replace(/\;/gi, '');
                    t = JSON.parse(t);
                    processData(t);

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    fetch("JSON_last_data.dat")
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('fullData was a problem. Status Code: ' +
                        response.status);
//                setTimeout(getData,1500)
                    return;
                }

                // Examine the text in the response
                response.text().then(function (t) {
                    t = t.replace(/NaN/gi, '"none"');
                    //console.log("\n+++++INsat AJAX  OK    :" + t);
                    t = JSON.parse(t);
                    processFullData(t);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error fullddata :-S', err);
        });



}

function saveCookie(name, value) {
    Cookies.set(name, value);
    console.log('saveCookie(name, value) ' + name + ' = ' + value);
}

function setMinmax(chart, mode) {

    if (mode == 3) {
        chart.valueAxes[0].minimum = 0;
        chart.valueAxes[0].maximum = 100;

    } else {
        chart.valueAxes[0].minimum = NaN;
        chart.valueAxes[0].maximum = NaN;

    }
}

function ch2modechange() {
    chupdating[2] = true;
    var selnum = document.getElementById("ch2modeselect").options.selectedIndex;
    Cookies.set("ch2modeselect", selnum);
    chart2.graphs = graphs2[selnum];
    setMinmax(chart2, selnum);
    chart2.validateData();
}

function ch2_1modechange() {
    chupdating[2] = true;
    var selnum = document.getElementById("ch2_1modeselect").options.selectedIndex;
    Cookies.set("ch2_1modeselect", selnum);
    setMinmax(chart2_1, selnum);
    chart2_1.graphs = graphs2_1[selnum];
    chart2_1.validateData();
}

function ch2_2modechange() {
    chupdating[2] = true;
    var selnum = document.getElementById("ch2_2modeselect").options.selectedIndex;
    Cookies.set("ch2_2modeselect", selnum);
    setMinmax(chart2_2, selnum);
    chart2_2.graphs = graphs2_2[selnum];
    chart2_2.validateData();
}

function ch3modechange() {
    chupdating[3] = true;
    var selnum = document.getElementById("ch3modeselect").options.selectedIndex;
    Cookies.set("ch3modeselect", selnum);
    setMinmax(chart3, selnum);
    chart3.graphs = graphs3[selnum];
    chart3.validateData();
}

function ch3_1modechange() {
    chupdating[3] = true;
    var selnum = document.getElementById("ch3_1modeselect").options.selectedIndex;
    Cookies.set("ch3_1modeselect", selnum);
    setMinmax(chart3_1, selnum);
    chart3_1.graphs = graphs3_1[selnum];
    chart3_1.validateData();
}

function ch3_2modechange() {
    chupdating[3] = true;
    var selnum = document.getElementById("ch3_2modeselect").options.selectedIndex;
    Cookies.set("ch3_2modeselect", selnum);
    setMinmax(chart3_2, selnum);
    chart3_2.graphs = graphs3_2[selnum];
    chart3_2.validateData();
}

function periodChange(elSelect, elChart, elData) {
    var selnum = document.getElementById(elSelect).options.selectedIndex;
    var selopt = document.getElementById(elSelect).options[selnum].value
    Cookies.set(elSelect, selnum);
    var needlen = 120;
    switch (selopt) {
        case "online":
            needlen = 0;
            break;
        case "1h":
            needlen = 120;
            break;
        case "6h" :
            needlen = 6 * 120;
            break;
        case "24h":
            needlen = 24 * 120;
            break;
    }
    console.log(elSelect + ' selopt=' + selopt + ' selnum=' + selnum);

    updateChart(elData, elChart, needlen);
}

function ch2periodchange() {

    periodChange("ch2periodselect", chart2, chartData2)
}

function ch2_1periodchange() {
    periodChange("ch2_1periodselect", chart2_1, chartData2_1)
}

function ch2_2periodchange() {
    periodChange("ch2_2periodselect", chart2_2, chartData2_2)
}

function ch3periodchange() {
    periodChange("ch3periodselect", chart3, chartData3)
}

function ch3_1periodchange() {
    periodChange("ch3_1periodselect", chart3_1, chartData3_1)
}

function ch3_2periodchange() {
    periodChange("ch3_2periodselect", chart3_2, chartData3_2)
}


function objconv(indata) {
    var result = [];
    var sdate = indata[0];
    var ryear = '20' + sdate.substring(0, 2);
    var rmon = sdate.substring(3, 5);
    var rday = sdate.substring(6, 8);
    var rhour = sdate.substring(9, 11);
    var rmin = sdate.substring(12, 14);
    var rsec = sdate.substring(15, 17);
    //    //                        console.log(ryear + '.' + rmon + '.' + rday + '    ' + rhour + ':' + rmin + ':' + rsec);
    var rdate = new Date(Number(ryear), Number(rmon) - 1, rday, rhour, rmin, rsec);
    result[0] = rdate.getTime();
    for (var i = 1; i < indata.length; i++) {
        result[i] = toChart(indata[i]);
    }
    return result;
}

window.onload = function () {
    var dloc = document.location;
    var hostname;
    if (dloc.hostname.length < 3) {
        hostname = "localhost";
    } else {
        hostname = dloc.hostname;
    }
    if (hostname == 'localhost') {
        // hostname = '159.93.126.233'
        hostname = '10.0.10.103'
    }
    console.log(hostname + " ");
    url = "http://" + hostname + ":9092/get_data&callback=?";
    histurl = "http://" + hostname + ":9092/get_hist=1&callback=?";
    //    getAllData();s
    console.log(url);
    document.getElementById("defaultOpen").click();
    chart2 = AmCharts.makeChart("chart2", {
        "type": "serial",
        "theme": "light",
        "legend": {
            align: "left",
            valueWidth: 0,
            spacing: 0,
            markerSize: 10,
            fontSize: 12,
            marginBottom: 0,
            marginLeft: 51,
            marginRight: 0,
            position: "right"

//            "useGraphSettings": true
        },
        "dataProvider": chartData2,
        "graphs": graphs2[0],
//                "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 34,
        },
        "valueAxes": [
            {
                "maximum": NaN,
                "minimum": NaN,
                "axisColor": "#FF6600",
            },
            {
                "id": "p1",
                "axisColor": "#FF6600",
                "axisThickness": 2,
                "axisAlpha": 1,
                "titleFontSize": 10,
                "position": "right"
            }


        ],
        "categoryField": "time",
        "categoryAxis": {
            autoGridCount: true,
            gridCount: 6,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    chart2_1 = AmCharts.makeChart("chart2_1", {
        "type": "serial",
        "theme": "light",
        "valueAxes": [
            {
                "maximum": NaN,
                "minimum": NaN,
            }
            ,
            {
                "id": "p1",
                "axisColor": "#FF6600",
                "axisThickness": 2,
                "axisAlpha": 1,
                "titleFontSize": 10,
                "position": "right"
            }
        ],

        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData2_1,
        "graphs": graphs2_1[0],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },
        "categoryField": "time",
        "categoryAxis": {
            gridCount: 6,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    chart2_2 = AmCharts.makeChart("chart2_2", {
        "type": "serial",
        "theme": "light",
        "valueAxes": [
            {
                "maximum": NaN,
                "minimum": NaN,
            }
            ,
            {
                "id": "p1",
                "axisColor": "#FF6600",
                "axisThickness": 2,
                "axisAlpha": 1,
                "titleFontSize": 10,
                "position": "right"
            }
        ],

        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData2_2,
        "graphs": graphs2_2[2],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },
        "categoryField": "time",
        "categoryAxis": {
            gridCount: 6,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    chart3 = AmCharts.makeChart("chart3", {
        //        automarginlegend:"false",
        "type": "serial",
        "theme": "light",
        "valueAxes": [
            {
                "maximum": NaN,
                "minimum": NaN,
            }
        ],

        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            position: "right"

            //            "useGraphSettings": true
        },
        "dataProvider": chartData3,
        "graphs": graphs3[0],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },
        "categoryField": "time",
        "categoryAxis": {
            gridCount: 5,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    chart3_1 = AmCharts.makeChart("chart3_1", {
        //        automarginlegend:"false",
        "type": "serial",
        "theme": "light",
        "valueAxes": [
            {
                "maximum": NaN,
                "minimum": NaN,
            }
        ],

        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData3_1,
        "graphs": graphs3_1[0],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },
        "categoryField": "time",
        "categoryAxis": {
            gridCount: 5,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    chart3_2 = AmCharts.makeChart("chart3_2", {
        //        automarginlegend:"false",
        "type": "serial",
        "theme": "light",
        "valueAxes": [
            {
                "maximum": NaN,
                "minimum": NaN,
            }
        ],

        "legend": {
            align: "right",
            valueWidth: 0,
            spacing: 10,
            markerSize: 14,
            fontSize: 12,
            //            "useGraphSettings": true
        },
        "dataProvider": chartData3_2,
        "graphs": graphs3_2[2],
        //        "chartScrollbar": {},
        "chartCursor": {
            "cursorPosition": "mouse"
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 35
        },
        "categoryField": "time",
        "categoryAxis": {
            gridCount: 5,
            labelFrequency: 1,
            equalSpacing: true,
            "axisColor": "#DADADA",
            "minorGridEnabled": false
        },
        //        "export": {
        //            "enabled": true,
        //            "position": "bottom-right"
        //        }
    });
    setModePeriod("2");
    setModePeriod("3");
    setModePeriod("3_1");
    setModePeriod("3_2");
    setModePeriod("2_1");
    setModePeriod("2_2");

    ch3periodchange();
    ch2periodchange();
    ch3_1periodchange();
    ch2_1periodchange();
    ch3_2periodchange();
    ch2_2periodchange();
    ch3modechange();
    ch2modechange();
    ch3_1modechange();
    ch2_1modechange();
    ch3_2modechange();
    ch2_2modechange();
    //document.getElementById('ch2periodselect').options.selectedIndex = 0;
    getAllData();
    setInterval(getAllData, 1000);
};

function setModePeriod(grId) {

    var elSelect = "ch" + grId + "modeselect";
    if (Cookies.get(elSelect) === undefined) {

    } else {
        let sindex = Cookies.get(elSelect);
        document.getElementById(elSelect).options.selectedIndex = sindex;
    }
    var elSelect = "ch" + grId + "periodselect";
    if (Cookies.get(elSelect) === undefined) {

    } else {
        let sindex = Cookies.get(elSelect);

        document.getElementById(elSelect).options.selectedIndex = sindex;
    }

}

function fixCh() {
}

function shrinkHist(histData, serlen) {
    if (serlen == 0) serlen = 120;
    serlen /= 120
    let dt = 0;
    let i;
    for (i = 0; i < histData.length; i += 20) {
        let t1 = histData[i];
        if ((!('date' in t1)) | (!('time' in t1))) {
            debugger;
        }
        let t2 = t1['date'] + ' ' + t1['time']
        let t3 = t2.split(' ');
        let dh = t1['date'].split(':');
        let th = t1['time'].split(':');
        let trec = (new Date('20' + dh[2], +dh[1] - 1, dh[0], th[0], th[1], th[2], 0)).getTime() / (1000 * 3600);
        let tnow = (new Date().getTime()) / (1000 * 3600);
        let dt = tnow - trec;
        if ((tnow - trec) < serlen) {

            break;

        }
        ;

    }
    if (i > 0) histData.splice(0, i);

}

function updateChart(chartD, chart, serlen) {
//console.log("\n###Agetson nucloweb start");

//    fetch(histurl) 
    fetch('hist.zip')

        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('last_data30.dat was a problem. Status Code: ' +
                        response.status);
//                setTimeout(getData,1500)
                    return;
                }

                // Examine the text in the response
                response.text().then(function (t) {
                    //debugger;
                    let pako = window.pako;
                    let data = new Uint8Array(t.length / 2);
                    let b;
                    for (let i = 0; i < t.length; i++) {
                        let b = parseInt(t[2 * i] + t[2 * i + 1], 16);
                        data[i] = b;
                    }
                    t = pako.inflate(data, {to: 'string'});


                    t = t.replace(/NaN/gi, '"none"');
                    t = t.replace(/\(/gi, '');
                    t = t.replace(/\)/gi, '');
                    t = t.replace(/\,  \}/gi, '}');
                    // while (t.charAt(t.length-1)!=','){
                    // 	t=t.slice(0,-1);
                    // };
                    // t=t.slice(0,-1);
//			t+=']';

                    //    console.log("\n+++++mac30 data  OK    :\n" + t);
                    let histData = JSON.parse(t);
                    let l1 = histData.length;

                    shrinkHist(histData, serlen)
                    let l2 = histData.length;
                    console.log('serlen=' + serlen + ' l1=' + l1 + ' l2=' + l2);

                    chart.dataProvider = histData;

                    chart.validateData();

                });
            }
        )

    // $.ajax({
    //     type: "POST",
    //     dataType: "json",
    //     url: histurl,
    //     data: {
    //         "get_member": "id"
    //     },
    //     success: function (histData) {
    //          //console.log(" GET HISTORY " + JSON.stringify(histData));
    //         chartD.splice(0, chartD.length);
    //         Array.prototype.push.apply(chartD, histData);
    //         if (chartD.length > serlen) {
    //             chartD.splice(0, chartD.length - serlen)
    //         }
    //         chart.validateData();
    //     },
    //     error: function (error) {
    //         console.log("\n####AJAX  error:" + JSON.stringify(error));
    //     }
    // })

    //                        //console.log('\n step chart 4 1\n');

}

function getDate() {
    var e = new Date,
        r = e.getFullYear(),
        o = e.getMonth() + 1,
        t = e.getDate(),
        a = e.getHours(),
        i = e.getMinutes(),
        d = e.getSeconds();
    d < 10 && (d = "0" + d), i < 10 && (i = "0" + i), r < 10 && (r = "0" + r), o < 10 && (o = "0" + o), t < 10 && (t = "0" + t), document.getElementById("timedisplay").innerHTML = t + "." + o + "." + r + "\t" + a + ":" + i + ":" + d
}

setInterval(getDate, 1000);
Date.prototype.format = function (format) {
    var returnStr = '';
    var replace = Date.replaceChars;
    for (var i = 0; i < format.length; i++) {
        var curChar = format.charAt(i);
        if (i - 1 >= 0 && format.charAt(i - 1) == "\\") {
            returnStr += curChar;
        } else if (replace[curChar]) {
            returnStr += replace[curChar].call(this);
        } else if (curChar != "\\") {
            returnStr += curChar;
        }
    }
    return returnStr;
};
Date.replaceChars = {
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    longDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    // Day
    d: function () {
        return (this.getDate() < 10 ? '0' : '') + this.getDate();
    },
    D: function () {
        return Date.replaceChars.shortDays[this.getDay()];
    },
    j: function () {
        return this.getDate();
    },
    l: function () {
        return Date.replaceChars.longDays[this.getDay()];
    },
    N: function () {
        return this.getDay() + 1;
    },
    S: function () {
        return (this.getDate() % 10 == 1 && this.getDate() != 11 ? 'st' : (this.getDate() % 10 == 2 && this.getDate() != 12 ? 'nd' : (this.getDate() % 10 == 3 && this.getDate() != 13 ? 'rd' : 'th')));
    },
    w: function () {
        return this.getDay();
    },
    z: function () {
        var d = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((this - d) / 86400000);
    }, // Fixed now
    // Week
    W: function () {
        var d = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - d) / 86400000) + d.getDay() + 1) / 7);
    }, // Fixed now
    // Month
    F: function () {
        return Date.replaceChars.longMonths[this.getMonth()];
    },
    m: function () {
        return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1);
    },
    M: function () {
        return Date.replaceChars.shortMonths[this.getMonth()];
    },
    n: function () {
        return this.getMonth() + 1;
    },
    t: function () {
        var d = new Date();
        return new Date(d.getFullYear(), d.getMonth(), 0).getDate()
    }, // Fixed now, gets #days of date
    // Year
    L: function () {
        var year = this.getFullYear();
        return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0));
    }, // Fixed now
    o: function () {
        var d = new Date(this.valueOf());
        d.setDate(d.getDate() - ((this.getDay() + 6) % 7) + 3);
        return d.getFullYear();
    }, //Fixed now
    Y: function () {
        return this.getFullYear();
    },
    y: function () {
        return ('' + this.getFullYear()).substr(2);
    },
    // Time
    a: function () {
        return this.getHours() < 12 ? 'am' : 'pm';
    },
    A: function () {
        return this.getHours() < 12 ? 'AM' : 'PM';
    },
    B: function () {
        return Math.floor((((this.getUTCHours() + 1) % 24) + this.getUTCMinutes() / 60 + this.getUTCSeconds() / 3600) * 1000 / 24);
    }, // Fixed now
    g: function () {
        return this.getHours() % 12 || 12;
    },
    G: function () {
        return this.getHours();
    },
    h: function () {
        return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12);
    },
    H: function () {
        return (this.getHours() < 10 ? '0' : '') + this.getHours();
    },
    i: function () {
        return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes();
    },
    s: function () {
        return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds();
    },
    u: function () {
        var m = this.getMilliseconds();
        return (m < 10 ? '00' : (m < 100 ?
            '0' : '')) + m;
    },
    // Timezone
    e: function () {
        return "Not Yet Supported";
    },
    I: function () {
        var DST = null;
        for (var i = 0; i < 12; ++i) {
            var d = new Date(this.getFullYear(), i, 1);
            var offset = d.getTimezoneOffset();
            if (DST === null)
                DST = offset;
            else if (offset < DST) {
                DST = offset;
                break;
            } else if (offset > DST)
                break;
        }
        return (this.getTimezoneOffset() == DST) | 0;
    },
    O: function () {
        return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00';
    },
    P: function () {
        return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':00';
    }, // Fixed now
    T: function () {
        var m = this.getMonth();
        this.setMonth(0);
        var result = this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1');
        this.setMonth(m);
        return result;
    },
    Z: function () {
        return -this.getTimezoneOffset() * 60;
    },
    // Full Date/Time
    c: function () {
        return this.format("Y-m-d\\TH:i:sP");
    }, // Fixed now
    r: function () {
        return this.toString();
    },
    U: function () {
        return this.getTime() / 1000;
    }
};
