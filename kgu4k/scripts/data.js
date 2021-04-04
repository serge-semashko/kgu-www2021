//amchart
var chart2 = {};
var chart3 = {};
var chart2_1 = {};
var chart3_1 = {};
var chart2_2 = {};
var chart3_2 = {};
var newDatam2 = {};
var newDatam3 = {};
var newDatam2_1 = {};
var newDatam3_1 = {};
var newDatam2_2 = {};
var newDatam3_2 = {};
var chartData2 = [];
var chartData3 = [];
var chartData2_1 = [];
var chartData3_1 = [];
var chartData2_2 = [];
var chartData3_2 = [];
var k1_alias = {

    "k1t11": '01LEC01CT011',
    "k1t12": '01LEC01CT012',
    "k1t13": '01LEC01CT013',
    "k1t6": '01LEC02CT006',
    "k1t7": '01LEC01CT007',
    "k1t5": '01LEC02CT005',
    "k1t3": '01LEC02CT003',
    "k1t4": '01LEC02CT004',
    "k1t1": '01LEC02CT001',
    "k1t2": '01LEC02CT002',
    "k1t8": '01LEC01CT008',
    "k1t9": '01LEC01CT009',
    "k1t10": '01LCM11CT001',
//Температуры на БО1 kgu 1
    "k1t181": '01LEC01CT181',

    "k1t191": '01LEC01CT191',

    "k1t201": '01LEC02CT201',
    "k1t211": '01LEC02CT211',

//Температуры на БО2 kgu 1
    "k1t182": '01LEC11CT181',
    "k1t192": '01LEC11CT191',
    "k1t202": '01LEC12CT201',
    "k1t212": '01LEC12CT211',
//Обороты
    "k1td1": '01LMP01DS001',

    "k1td2": '01LMP02DS001',
    "k1td3": '01LMP03DS001',

    "k1pg": '01LMN01DS001',

//Уровни
    "k1sbr": '01LCM11CL001',
    "k1vanna": '01LCM31CL001',
    "k1bo1": '01LCM21CL001',
    "k1bo2": '01LCM22CL001'
};

var graphs2 = [
    //select 0 пусковой
    [
        {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k1t181",
            "fillAlphas": 0,
            "hidden": true,

        }
        , {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k1t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k1t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k1t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k1t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k1t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k1t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k1t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T11",
        "valueField": "k1t11",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T12",
        "valueField": "k1t12",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T13",
        "valueField": "01LEC01CT013",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k1t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k1t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k1t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k1t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k1t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k1t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k1t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k1t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T7",
        "valueField": "k1t7",
        "fillAlphas": 0
    },
    ],

    //select 2 уровни

    [{
        "lineColor": "#FF66ff",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "P гел. пр. пот.",
        "valueField": "00LEC01CP001",
        "fillAlphas": 0,
        "hidden": false,
        "valueAxis": "p1"

    },
        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник",
            "valueField": "01LCM11CL001",
            "fillAlphas": 0
        }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "01LCM31CL001",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "01LCM21CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "01LCM22CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#00ff00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Газгольдер",
        "valueField": "00LCM11CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#ff0000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Азота в аз.т.",
        "valueField": "00LCM51CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }


    ],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    },],
];
var graphs2_1 = [
    //select 0 пусковой
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k1t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k1t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k1t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k1t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k1t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k1t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k1t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k1t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T11",
        "valueField": "k1t11",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T12",
        "valueField": "k1t12",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T13",
        "valueField": "01LEC01CT013",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k1t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k1t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k1t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k1t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k1t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k1t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k1t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k1t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T7",
        "valueField": "k1t7",
        "fillAlphas": 0
    },
    ],

    //select 2 уровни

    [{
        "lineColor": "#FF66ff",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "P гел. пр. пот.",
        "valueField": "00LEC01CP001",
        "fillAlphas": 0,
        "hidden": false,
        "valueAxis": "p1"

    },
        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник",
            "valueField": "01LCM11CL001",
            "fillAlphas": 0
        }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "01LCM31CL001",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "01LCM21CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "01LCM22CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#00ff00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Газгольдер",
        "valueField": "00LCM11CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#ff0000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Азота в аз.т.",
        "valueField": "00LCM51CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }


    ],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    },],
];
var graphs2_2 = [
    //select 0 пусковой
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k1t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k1t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k1t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k1t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k1t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k1t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k1t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k1t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T11",
        "valueField": "k1t11",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T12",
        "valueField": "k1t12",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T13",
        "valueField": "01LEC01CT013",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k1t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k1t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k1t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k1t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k1t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k1t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k1t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k1t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k1t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T7",
        "valueField": "k1t7",
        "fillAlphas": 0
    },
    ],

    //select 2 уровни

    [{
        "lineColor": "#FF66ff",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "P гел. пр. пот.",
        "valueField": "00LEC01CP001",
        "fillAlphas": 0,
        "hidden": false,
        "valueAxis": "p1"

    },
        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник",
            "valueField": "01LCM11CL001",
            "fillAlphas": 0
        }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "01LCM31CL001",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "01LCM21CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "01LCM22CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#00ff00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Газгольдер",
        "valueField": "00LCM11CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#ff0000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Азота в аз.т.",
        "valueField": "00LCM51CL001",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }


    ],
    //select 3 уровни КГУ-1 КГУ-2 

    [
        {
            "lineColor": "#FF6600",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "P гел. пр. пот.",
            "valueField": "00LEC01CP001",
            "fillAlphas": 0,
            "hidden": false,
            "valueAxis": "p1"

        },
        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ1",
            "valueField": "k1sbr",
            "fillAlphas": 0
        }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    },],
];
//=================================KGU-2
var graphs3 = [
    //select 0 пусковой
    [
        {
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T181",
            "valueField": "k2t181",
            "fillAlphas": 0,
            "hidden": true

        }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k2t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k2t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k2t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k2t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k2t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k2t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k2t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T11",
        "valueField": "k2t11",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T12",
        "valueField": "k2t12",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T13",
        "valueField": "k2t13",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k2t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k2t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k2t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k2t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k2t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k2t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k2t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k2t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T7",
        "valueField": "k2t7",
        "fillAlphas": 0
    },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [
        {
            "lineColor": "#FF6600",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "P гел. пр. пот.",
            "valueField": "00LEC01CP001",
            "fillAlphas": 0,
            "hidden": false,
            "valueAxis": "p1"

        },
        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "Сборник КГУ1",
            "valueField": "k1sbr",
            "fillAlphas": 0
        }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    },],
];
var graphs3_1 = [
    //select 0 пусковой
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k2t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k2t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k2t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k2t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k2t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k2t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k2t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k2t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T11",
        "valueField": "k2t11",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T12",
        "valueField": "k2t12",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T13",
        "valueField": "k2t13",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k2t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k2t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k2t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k2t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k2t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k2t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k2t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k2t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T7",
        "valueField": "k2t7",
        "fillAlphas": 0
    },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    },],
];
var graphs3_2 = [
    //select 0 пусковой
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k2t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k2t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k2t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k2t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k2t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k2t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k2t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k2t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T11",
        "valueField": "k2t11",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T12",
        "valueField": "k2t12",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T13",
        "valueField": "k2t13",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }
    ],
    // "lineColor": "#cc9e1a",
    //select 1 рабочий
    [{
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T181",
        "valueField": "k2t181",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T182",
        "valueField": "k2t182",
        "fillAlphas": 0,
        "hidden": true,
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T191",
        "valueField": "k2t191",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T192",
        "valueField": "k2t192",
        "fillAlphas": 0,
        "hidden": true

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T201",
        "valueField": "k2t201",
        "hidden": true,
        "fillAlphas": 0

    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T202",
        "valueField": "k2t202",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T211",
        "valueField": "k2t211",
        "hidden": true,
        "fillAlphas": 0
    }, {
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T212",
        "valueField": "k2t212",
        "hidden": true,
        "fillAlphas": 0
    },


        {
            "lineColor": "#29A2CC",
            "bullet": "round",
            "lineThickness": 3,
            "bulletBorderThickness": 1,
            "hideBulletsCount": 1,
            "title": "T6",
            "valueField": "k2t6",
            "fillAlphas": 0
        }, {
        "lineColor": "#250acb",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "T7",
        "valueField": "k2t7",
        "fillAlphas": 0
    },
    ],

    //select 2 уровни

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник",
        "valueField": "k2sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Ванна",
        "valueField": "k2vanna",
        "fillAlphas": 0
    }, {
        "lineColor": "#FF3300",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО1",
        "valueField": "k2bo1",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }, {
        "lineColor": "#000000",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "БО2",
        "valueField": "k2bo2",
        disableed: true,
        visible: false,
        "fillAlphas": 0
    }],
    //select 3 уровни КГУ-1 КГУ-2 

    [{
        "lineColor": "#29A2CC",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ1",
        "valueField": "k1sbr",
        "fillAlphas": 0
    }, {
        "lineColor": "#66CC00",
        "bullet": "round",
        "lineThickness": 3,
        "bulletBorderThickness": 1,
        "hideBulletsCount": 1,
        "title": "Сборник КГУ2",
        "valueField": "k2sbr",
        "fillAlphas": 0
    },],
];

function swap(obj) {
    const res = {};

    Object.keys(obj).forEach(function (value) {
        var key = obj[value];
        res[key] = value;
    });
    return res;
};
//k1_alias = swap(k1_alias);
//console.log(JSON.stringify(k1_alias));
function setAlias(graphs2) {
    for (let i in graphs2) {
        console.log('i in graphs2 ' + i)
        for (let j in graphs2[i]) {
            console.log('j in graphs2[i] ' + j)
            for (let k in graphs2[i][j]) {
                console.log('k in graphs2[i][j] ' + k)
                if (k == "valueField") {
                    console.log(graphs2[i][j][k]);
                    if (graphs2[i][j][k] in k1_alias) {
                        graphs2[i][j][k] = k1_alias[graphs2[i][j][k]];
                        console.log('changed ' + graphs2[i][j][k]);
                    }
                }

            }


        }

    }
}

setAlias(graphs2);
setAlias(graphs2_1);
setAlias(graphs2_2);

console.log(JSON.stringify(graphs2));


var firstDate = new Date();
// var k2t6;
// var k2t12;
// var k2t13;
// var k2t6;
// var k2t12;
// var k2t13;

//amchart/
//canvasjs
var k2dps1 = []; // dataPoints
var k2dps2 = []; // dataPoints
var k2dps3 = []; // dataPoints
var k2dps4 = []; // dataPoints
var k2dps1 = []; // dataPoints
var k2dps2 = []; // dataPoints
var k2dps3 = []; // dataPoints
var k2dps4 = []; // dataPoints

var chartk2js = {};
var chartk2js = {};

var xVal = 0;
var yVal1 = 100;
var yVal2 = 220;
var yVal3 = 10;
var updateInterval = 1;
var dataLength = 60; // number of dataPoints visible at any point

//canvasjs/
