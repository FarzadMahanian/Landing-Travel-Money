/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>',
            'geo, sans-serif': '<script src=\"http://use.edgefonts.net/geo:i4,n4:all.js\"></script>',
            'sans-serif': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'city2',
                            symbolName: 'city',
                            type: 'rect',
                            rect: ['-1427px', '868px', '3787', '319', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'cloud12',
                            type: 'image',
                            rect: ['103px', '141px', '117px', '86px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"cloud12.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'cloud22',
                            type: 'image',
                            rect: ['220px', '396px', '230px', '136px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"cloud22.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'cloud32',
                            type: 'image',
                            rect: ['628px', '52px', '151px', '86px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"cloud32.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'cloud42',
                            type: 'image',
                            rect: ['896px', '198px', '104px', '70px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"cloud42.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'tourism2',
                            type: 'image',
                            rect: ['318px', '873px', '133px', '133px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tourism2.svg",'0px','0px']
                        },
                        {
                            id: 'economy2',
                            type: 'image',
                            rect: ['533px', '184px', '133px', '133px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"economy2.svg",'0px','0px']
                        },
                        {
                            id: 'technology2',
                            type: 'image',
                            rect: ['749px', '184px', '133px', '133px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"technology2.svg",'0px','0px']
                        },
                        {
                            id: 'plus2',
                            type: 'image',
                            rect: ['467px', '227px', '49px', '49px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"plus2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'plus3',
                            type: 'image',
                            rect: ['685px', '227px', '49px', '49px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"plus3.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['-876px', '489px', '133px', '168px', 'auto', 'auto'],
                            autoOrient: true,
                            opacity: '0',
                            fill: ["rgba(24,172,201,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'airplane3',
                            type: 'image',
                            rect: ['115px', '475px', '160px', '168px', 'auto', 'auto'],
                            autoOrient: true,
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"airplane3.svg",'0px','0px'],
                            transform: [[],['10']]
                        },
                        {
                            id: 'thenexusof',
                            type: 'image',
                            rect: ['459px', '567px', '262px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"thenexusof.svg",'0px','0px']
                        },
                        {
                            id: 'tourism-financial',
                            type: 'image',
                            rect: ['360px', '623px', '472px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tourism-financial.svg",'0px','0px']
                        },
                        {
                            id: 'card-t',
                            type: 'image',
                            rect: ['278px', '50px', '658px', '534px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"card-t.svg",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['1280px', '161px', '627px', '497px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(113,231,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 75, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'pos-upCopy',
                            type: 'image',
                            rect: ['665px', '294px', '309px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pos-up.svg",'0px','0px']
                        },
                        {
                            id: 'pos-up',
                            type: 'image',
                            rect: ['665px', '294px', '309px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pos-up.svg",'0px','0px']
                        },
                        {
                            id: 'pos-hand',
                            type: 'image',
                            rect: ['173px', '-385px', '364px', '484px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"pos-hand.svg",'0px','0px']
                        },
                        {
                            id: 'posdown',
                            type: 'image',
                            rect: ['-701px', '336px', '415px', '239px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"posdown.svg",'0px','0px']
                        },
                        {
                            id: 't-card',
                            type: 'image',
                            rect: ['112px', '623px', '949px', '103px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"t-card.svg",'0px','0px']
                        },
                        {
                            id: 'pos-paper2',
                            symbolName: 'pos-paper',
                            type: 'rect',
                            rect: ['304px', '347px', '130', '171', 'auto', 'auto'],
                            transform: [[],[],[],['0.86932','0.79532']]
                        },
                        {
                            id: 'iran',
                            type: 'image',
                            rect: ['491px', '444px', '190px', '162px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"iran.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['273px', '427px', '627px', '265px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(24,172,201,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'discoveriran',
                            type: 'image',
                            rect: ['434px', '352px', '325px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"discoveriran.svg",'0px','0px'],
                            transform: [[],[],[],['0.84695','0.84695']]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['273px', '336px', '627px', '91px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(24,172,201,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'SUCCSSESFUL',
                            type: 'image',
                            rect: ['510px', '369px', '11px', '127px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SUCCSSESFUL.svg",'0px','0px']
                        },
                        {
                            id: 'like',
                            type: 'image',
                            rect: ['440px', '397px', '83px', '78px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"like.svg",'0px','0px'],
                            transform: [[],['-90'],[],['0.27683','0.27683']]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['451px', '425px', '291px', '0px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [1,"rgba(255,255,255,1.00)","solid"],
                            transform: [[],[],[],['0','0.68']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '860px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'visible',
                            fill: ["rgba(24,172,201,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 53605,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid760",
                            "left",
                            23000,
                            2173,
                            "easeOutBack",
                            "${posdown}",
                            '1546px',
                            '369px'
                        ],
                        [
                            "eid856",
                            "left",
                            43360,
                            748,
                            "easeInBack",
                            "${posdown}",
                            '369px',
                            '-701px'
                        ],
                        [
                            "eid552",
                            "top",
                            20078,
                            2422,
                            "linear",
                            "${cloud12}",
                            '95px',
                            '141px'
                        ],
                        [
                            "eid125",
                            "scaleY",
                            1250,
                            1857,
                            "easeOutElastic",
                            "${cloud12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "scaleY",
                            6886,
                            350,
                            "easeOutQuad",
                            "${plus3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid288",
                            "opacity",
                            11105,
                            14,
                            "easeOutBack",
                            "${technology2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid866",
                            "opacity",
                            44064,
                            44,
                            "easeInBack",
                            "${pos-paper2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid762",
                            "left",
                            23000,
                            2173,
                            "easeOutBack",
                            "${pos-up}",
                            '1607px',
                            '414px'
                        ],
                        [
                            "eid861",
                            "left",
                            43360,
                            748,
                            "easeInBack",
                            "${pos-up}",
                            '414px',
                            '-656px'
                        ],
                        [
                            "eid310",
                            "top",
                            8019,
                            0,
                            "easeOutBack",
                            "${cloud22}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid541",
                            "top",
                            20078,
                            2422,
                            "linear",
                            "${cloud22}",
                            '371px',
                            '396px'
                        ],
                        [
                            "eid574",
                            "scaleX",
                            12500,
                            869,
                            "easeOutBack",
                            "${card-t}",
                            '0',
                            '0.5677'
                        ],
                        [
                            "eid966",
                            "top",
                            44064,
                            2094,
                            "linear",
                            "${t-card}",
                            '623px',
                            '855px'
                        ],
                        [
                            "eid262",
                            "opacity",
                            9464,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid265",
                            "opacity",
                            10695,
                            21,
                            "easeInQuad",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid291",
                            "opacity",
                            11140,
                            9,
                            "easeOutBack",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid242",
                            "location",
                            7074,
                            4563,
                            "easeInQuad",
                            "${airplane3}",
                            [[-743.31, 558.39, 0, 0, 0, 0,0],[98.7, 425.67, 508.6, -328.98, 972.33, -666.5,870.52],[245.28, -24.38, -380.12, -340.07, -379.35, -276.73,1409.52],[-77.18, 78.64, 10.63, 429.94, -11.31, 396.35,1826.71],[56.57, 252.3, 1086.89, 105.44, 125.32, 12.16,2069.16],[1666.55, 250.38, 0, 0, 0, 0,3679.68]]
                        ],
                        [
                            "eid169",
                            "top",
                            4287,
                            920,
                            "easeOutBack",
                            "${tourism2}",
                            '873px',
                            '184px'
                        ],
                        [
                            "eid920",
                            "top",
                            47536,
                            1307,
                            "easeOutBack",
                            "${iran}",
                            '444px',
                            '241px'
                        ],
                        [
                            "eid936",
                            "top",
                            51138,
                            785,
                            "easeInCirc",
                            "${iran}",
                            '241px',
                            '433px'
                        ],
                        [
                            "eid348",
                            "width",
                            5207,
                            0,
                            "linear",
                            "${Stage}",
                            '1200px',
                            '1200px'
                        ],
                        [
                            "eid172",
                            "top",
                            4928,
                            920,
                            "easeOutBack",
                            "${economy2}",
                            '873px',
                            '184px'
                        ],
                        [
                            "eid752",
                            "opacity",
                            22250,
                            1000,
                            "linear",
                            "${city2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid969",
                            "left",
                            43360,
                            748,
                            "easeInBack",
                            "${SUCCSSESFUL}",
                            '510px',
                            '-560px'
                        ],
                        [
                            "eid982",
                            "opacity",
                            13369,
                            418,
                            "linear",
                            "${thenexusof}",
                            '0',
                            '1'
                        ],
                        [
                            "eid983",
                            "opacity",
                            18359,
                            307,
                            "swing",
                            "${thenexusof}",
                            '1',
                            '0'
                        ],
                        [
                            "eid785",
                            "opacity",
                            32173,
                            500,
                            "linear",
                            "${like}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid786",
                            "opacity",
                            32673,
                            500,
                            "linear",
                            "${like}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid787",
                            "opacity",
                            33173,
                            500,
                            "linear",
                            "${like}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid788",
                            "opacity",
                            33673,
                            500,
                            "linear",
                            "${like}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid789",
                            "opacity",
                            34173,
                            500,
                            "linear",
                            "${like}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid790",
                            "opacity",
                            34673,
                            500,
                            "linear",
                            "${like}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid791",
                            "opacity",
                            35173,
                            500,
                            "linear",
                            "${like}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid792",
                            "opacity",
                            35673,
                            500,
                            "linear",
                            "${like}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid793",
                            "opacity",
                            36173,
                            750,
                            "linear",
                            "${like}",
                            '0',
                            '0.60162558255157'
                        ],
                        [
                            "eid868",
                            "opacity",
                            44064,
                            44,
                            "easeInBack",
                            "${like}",
                            '1',
                            '0'
                        ],
                        [
                            "eid278",
                            "opacity",
                            10999,
                            38,
                            "easeOutQuad",
                            "${plus3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid622",
                            "opacity",
                            21338,
                            750,
                            "easeOutQuad",
                            "${cloud12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid984",
                            "top",
                            13369,
                            0,
                            "linear",
                            "${thenexusof}",
                            '552px',
                            '552px'
                        ],
                        [
                            "eid144",
                            "scaleX",
                            2891,
                            1859,
                            "easeOutElastic",
                            "${cloud42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(24,172,201,1.00)',
                            'rgba(24,172,201,1.00)'
                        ],
                        [
                            "eid293",
                            "width",
                            11149,
                            0,
                            "easeOutBack",
                            "${airplane3}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid137",
                            "scaleY",
                            2250,
                            2037,
                            "easeOutElastic",
                            "${cloud32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid965",
                            "opacity",
                            37923,
                            1250,
                            "linear",
                            "${t-card}",
                            '0',
                            '1'
                        ],
                        [
                            "eid967",
                            "opacity",
                            44529,
                            841,
                            "linear",
                            "${t-card}",
                            '1',
                            '0'
                        ],
                        [
                            "eid765",
                            "opacity",
                            23000,
                            173,
                            "easeOutBack",
                            "${posdown}",
                            '0',
                            '1'
                        ],
                        [
                            "eid865",
                            "opacity",
                            44064,
                            44,
                            "easeInBack",
                            "${posdown}",
                            '1',
                            '0'
                        ],
                        [
                            "eid839",
                            "opacity",
                            23750,
                            2173,
                            "easeOutBack",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "opacity",
                            43500,
                            608,
                            "easeInBack",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid548",
                            "top",
                            20078,
                            2422,
                            "linear",
                            "${cloud42}",
                            '147px',
                            '198px'
                        ],
                        [
                            "eid923",
                            "opacity",
                            47473,
                            63,
                            "easeOutBack",
                            "${iran}",
                            '0',
                            '1'
                        ],
                        [
                            "eid939",
                            "opacity",
                            51923,
                            46,
                            "linear",
                            "${iran}",
                            '1',
                            '0'
                        ],
                        [
                            "eid268",
                            "opacity",
                            10796,
                            10,
                            "easeOutBack",
                            "${tourism2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid439",
                            "left",
                            0,
                            0,
                            "linear",
                            "${city2}",
                            '-1427px',
                            '-1427px'
                        ],
                        [
                            "eid993",
                            "top",
                            12868,
                            0,
                            "linear",
                            "${tourism-financial}",
                            '615px',
                            '615px'
                        ],
                        [
                            "eid250",
                            "rotateZ",
                            7074,
                            1449,
                            "easeInQuad",
                            "${Rectangle2}",
                            '8deg',
                            '7deg'
                        ],
                        [
                            "eid251",
                            "rotateZ",
                            8523,
                            1864,
                            "easeInQuad",
                            "${Rectangle2}",
                            '7deg',
                            '10deg'
                        ],
                        [
                            "eid985",
                            "opacity",
                            13883,
                            448,
                            "linear",
                            "${tourism-financial}",
                            '0',
                            '1'
                        ],
                        [
                            "eid986",
                            "opacity",
                            18443,
                            307,
                            "swing",
                            "${tourism-financial}",
                            '1',
                            '0'
                        ],
                        [
                            "eid271",
                            "opacity",
                            10839,
                            17,
                            "easeOutQuad",
                            "${plus2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid761",
                            "top",
                            23000,
                            0,
                            "linear",
                            "${posdown}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid970",
                            "opacity",
                            32173,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid971",
                            "opacity",
                            32673,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid972",
                            "opacity",
                            33173,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid973",
                            "opacity",
                            33673,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid974",
                            "opacity",
                            34173,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid975",
                            "opacity",
                            34673,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid976",
                            "opacity",
                            35173,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid977",
                            "opacity",
                            35673,
                            500,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid978",
                            "opacity",
                            36173,
                            750,
                            "linear",
                            "${SUCCSSESFUL}",
                            '0',
                            '0.60162601626016'
                        ],
                        [
                            "eid979",
                            "opacity",
                            44064,
                            44,
                            "easeInBack",
                            "${SUCCSSESFUL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid545",
                            "left",
                            20078,
                            0,
                            "easeOutElastic",
                            "${cloud42}",
                            '896px',
                            '896px'
                        ],
                        [
                            "eid846",
                            "left",
                            23000,
                            2173,
                            "easeOutBack",
                            "${Ellipse}",
                            '1280px',
                            '227px'
                        ],
                        [
                            "eid877",
                            "left",
                            43500,
                            608,
                            "easeInBack",
                            "${Ellipse}",
                            '227px',
                            '-690px'
                        ],
                        [
                            "eid324",
                            "opacity",
                            7457,
                            354,
                            "linear",
                            "${airplane3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid320",
                            "opacity",
                            11510,
                            127,
                            "easeInQuad",
                            "${airplane3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid962",
                            "opacity",
                            44529,
                            1031,
                            "linear",
                            "${discoveriran}",
                            '0',
                            '1'
                        ],
                        [
                            "eid995",
                            "scaleX",
                            47000,
                            424,
                            "linear",
                            "${RectangleCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid996",
                            "scaleX",
                            52035,
                            425,
                            "easeInBack",
                            "${RectangleCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "scaleX",
                            2250,
                            2037,
                            "easeOutElastic",
                            "${cloud32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid858",
                            "left",
                            43360,
                            748,
                            "easeInBack",
                            "${pos-paper2}",
                            '304px',
                            '-766px'
                        ],
                        [
                            "eid926",
                            "opacity",
                            47308,
                            116,
                            "easeOutBack",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid944",
                            "opacity",
                            52082,
                            31,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid274",
                            "opacity",
                            10953,
                            15,
                            "easeOutBack",
                            "${economy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid207",
                            "scaleX",
                            6599,
                            350,
                            "easeOutQuad",
                            "${plus2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "scaleX",
                            1750,
                            2000,
                            "easeOutElastic",
                            "${cloud22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "left",
                            43360,
                            748,
                            "easeInBack",
                            "${like}",
                            '440px',
                            '-618px'
                        ],
                        [
                            "eid544",
                            "location",
                            20078,
                            2422,
                            "linear",
                            "${cloud32}",
                            [[703.5, 95, 0, 0, 0, 0,0],[703.5, 141, 0, 0, 0, 0,46]]
                        ],
                        [
                            "eid249",
                            "location",
                            7074,
                            4563,
                            "easeInQuad",
                            "${Rectangle2}",
                            [[-809.36, 561.01, 0, 0, 0, 0,0],[32.65, 428.29, 508.6, -328.98, 972.33, -666.5,870.52],[179.23, -21.76, -380.12, -340.07, -379.35, -276.73,1409.52],[-143.23, 81.26, 10.63, 429.94, -11.31, 396.35,1826.71],[-9.48, 254.92, 1086.89, 105.44, 125.32, 12.16,2069.16],[1600.5, 253, 0, 0, 0, 0,3679.68]]
                        ],
                        [
                            "eid549",
                            "left",
                            20078,
                            0,
                            "easeOutElastic",
                            "${cloud12}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid208",
                            "scaleY",
                            6599,
                            350,
                            "easeOutQuad",
                            "${plus2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid932",
                            "opacity",
                            51888,
                            49,
                            "easeOutBack",
                            "${Rectangle3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid578",
                            "scaleY",
                            12500,
                            869,
                            "easeOutBack",
                            "${card-t}",
                            '0',
                            '0.5677'
                        ],
                        [
                            "eid613",
                            "opacity",
                            21750,
                            750,
                            "easeOutQuad",
                            "${cloud22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid139",
                            "scaleY",
                            1750,
                            2000,
                            "easeOutElastic",
                            "${cloud22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid770",
                            "location",
                            25423,
                            2708,
                            "easeOutSine",
                            "${pos-hand}",
                            [[61.37, -239.39, 0, 0, 0, 0,0],[202.23, 128.65, 196.82, 112.7, 646.94, 370.46,425.55],[373.4, 169.9, 183.71, 10.71, 191.62, 11.17,603.76],[542.26, 175.68, 162.76, -2.65, 125.09, -2.04,772.75],[665.11, 176, 272.2, 2.31, 105.63, 0.9,895.61],[847, 174.56, 0, 0, 0, 0,1077.51]]
                        ],
                        [
                            "eid849",
                            "location",
                            42910,
                            909,
                            "easeInBack",
                            "${pos-hand}",
                            [[847, 173.46, 0, 0, 0, 0,0],[1596.63, 181.62, 0, 0, 0, 0,749.67]]
                        ],
                        [
                            "eid254",
                            "filter.blur",
                            13913,
                            0,
                            "easeInQuad",
                            "${cloud32}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid842",
                            "filter.blur",
                            23000,
                            0,
                            "easeOutBack",
                            "${Ellipse}",
                            '75px',
                            '75px'
                        ],
                        [
                            "eid836",
                            "filter.blur",
                            41250,
                            0,
                            "easeOutBack",
                            "${Ellipse}",
                            '75px',
                            '75px'
                        ],
                        [
                            "eid619",
                            "opacity",
                            21250,
                            750,
                            "easeOutQuad",
                            "${cloud42}",
                            '1',
                            '0'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            1250,
                            1857,
                            "easeOutElastic",
                            "${cloud12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid440",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${city2}",
                            '868px',
                            '548px'
                        ],
                        [
                            "eid538",
                            "top",
                            20000,
                            3077,
                            "linear",
                            "${city2}",
                            '548px',
                            '868px'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            2891,
                            1859,
                            "easeOutElastic",
                            "${cloud42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid209",
                            "scaleX",
                            6886,
                            350,
                            "easeOutQuad",
                            "${plus3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid768",
                            "opacity",
                            23000,
                            173,
                            "easeOutBack",
                            "${pos-up}",
                            '0',
                            '1'
                        ],
                        [
                            "eid864",
                            "opacity",
                            44064,
                            44,
                            "easeInBack",
                            "${pos-up}",
                            '1',
                            '0'
                        ],
                        [
                            "eid174",
                            "top",
                            5565,
                            1034,
                            "easeOutBack",
                            "${technology2}",
                            '873px',
                            '184px'
                        ],
                        [
                            "eid844",
                            "top",
                            25173,
                            0,
                            "easeOutBack",
                            "${Ellipse}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid961",
                            "top",
                            44394,
                            1540,
                            "linear",
                            "${discoveriran}",
                            '620px',
                            '448px'
                        ],
                        [
                            "eid963",
                            "top",
                            51425,
                            719,
                            "easeInCirc",
                            "${discoveriran}",
                            '448px',
                            '352px'
                        ],
                        [
                            "eid852",
                            "opacity",
                            43750,
                            69,
                            "easeInBack",
                            "${pos-hand}",
                            '1',
                            '0'
                        ],
                        [
                            "eid292",
                            "height",
                            11149,
                            0,
                            "easeOutBack",
                            "${airplane3}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid245",
                            "rotateZ",
                            7074,
                            1449,
                            "easeInQuad",
                            "${airplane3}",
                            '8deg',
                            '7deg'
                        ],
                        [
                            "eid248",
                            "rotateZ",
                            8523,
                            1864,
                            "easeInQuad",
                            "${airplane3}",
                            '7deg',
                            '10deg'
                        ],
                        [
                            "eid616",
                            "opacity",
                            21577,
                            750,
                            "easeOutQuad",
                            "${cloud32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid575",
                            "opacity",
                            12565,
                            0,
                            "linear",
                            "${card-t}",
                            '1',
                            '1'
                        ],
                        [
                            "eid576",
                            "opacity",
                            12701,
                            0,
                            "linear",
                            "${card-t}",
                            '1',
                            '1'
                        ],
                        [
                            "eid577",
                            "opacity",
                            17750,
                            500,
                            "linear",
                            "${card-t}",
                            '1',
                            '0'
                        ],
                        [
                            "eid579",
                            "filter.blur",
                            12500,
                            311,
                            "linear",
                            "${card-t}",
                            '230px',
                            '0px'
                        ],
                        [
                            "eid580",
                            "filter.blur",
                            17750,
                            250,
                            "linear",
                            "${card-t}",
                            '0px',
                            '100px'
                        ],
                        [
                            "eid311",
                            "height",
                            10750,
                            22,
                            "easeOutBack",
                            "${Rectangle2}",
                            '168px',
                            '186px'
                        ],
                        [
                            "eid312",
                            "height",
                            10772,
                            15,
                            "easeOutBack",
                            "${Rectangle2}",
                            '186px',
                            '180px'
                        ]
                    ]
                }
            },
            "city": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['552px', '18px', '2941px', '319px', 'auto', 'auto'],
                            id: 'city3Copy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/city3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '3787px', '319px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "stars": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['219px', '-18px', '7px', '7px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['248px', '41px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['70px', '52px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['103px', '12px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['79px', '4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['125px', '-13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['132px', '7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['170px', '24px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['169px', '65px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['193px', '51px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['176px', '-3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['210px', '29px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['262px', '32px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['248px', '18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['229px', '-3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['249px', '-6px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['270px', '-28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['287px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['311px', '4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['287px', '18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['343px', '-16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['314px', '-26px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['355px', '22px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['342px', '61px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['324px', '28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['378px', '4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy24',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['378px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy25',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['123px', '43px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['388px', '10px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy50',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['364px', '2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy49',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['410px', '-15px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy48',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['417px', '5px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy47',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['455px', '22px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy46',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['454px', '63px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy45',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['478px', '49px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy44',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['461px', '-5px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy43',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['495px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy42',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['547px', '30px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy41',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['533px', '16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy40',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['514px', '-5px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy39',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['534px', '-8px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy38',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['555px', '-30px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy37',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['572px', '-2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy36',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['596px', '2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy35',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['572px', '16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy34',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['628px', '-18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy33',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['599px', '-28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy32',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['640px', '20px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy31',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['627px', '59px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy30',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['609px', '26px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy29',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['663px', '2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy28',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['663px', '25px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy27',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['408px', '41px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy26',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['675px', '21px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy75',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['651px', '13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy74',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['697px', '-4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy73',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['704px', '16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy72',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['742px', '33px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy71',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['741px', '74px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy70',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['765px', '60px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy69',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['748px', '6px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy68',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['782px', '38px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy67',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['834px', '41px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy66',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['820px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy65',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['801px', '6px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy64',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['821px', '3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy63',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['842px', '-19px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy62',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['859px', '9px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy61',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['883px', '13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy60',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['859px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy59',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['915px', '-7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy58',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['886px', '-17px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy57',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['927px', '31px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy56',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['914px', '70px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy55',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['896px', '37px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy54',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['950px', '13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy53',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['950px', '36px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy52',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['695px', '52px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy51',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['847px', '8px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy100',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['823px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy99',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['869px', '-17px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy98',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['876px', '3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy97',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['914px', '20px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy96',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['913px', '61px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy95',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['937px', '47px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy94',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['920px', '-7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy93',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['954px', '25px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy92',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1006px', '28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy91',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['992px', '14px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy90',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['973px', '-7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy89',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['993px', '-10px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy88',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1014px', '-32px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy87',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1031px', '-4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy86',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1055px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy85',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1031px', '14px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy84',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1087px', '-20px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy83',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1058px', '-30px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy82',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1099px', '18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy81',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1086px', '57px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy80',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1068px', '24px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy79',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1122px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy78',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1122px', '23px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy77',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['867px', '39px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy76',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['400px', '79px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['619px', '61px', '7px', '7px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['648px', '120px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['470px', '131px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy201',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['503px', '91px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy200',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['479px', '83px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy199',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['525px', '66px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy198',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['532px', '86px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy197',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['570px', '103px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy196',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['569px', '144px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy195',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['593px', '130px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy194',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['576px', '76px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy193',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['610px', '108px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy192',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['662px', '111px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy191',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['648px', '97px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy190',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['629px', '76px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy189',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['649px', '73px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy188',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['670px', '51px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy187',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['687px', '79px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy186',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['711px', '83px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy185',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['687px', '97px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy184',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['743px', '63px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy183',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['714px', '53px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy182',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['755px', '101px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy181',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['742px', '140px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy180',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['724px', '107px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy179',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['778px', '83px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy178',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['778px', '106px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy177',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['523px', '122px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy176',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['788px', '89px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy175',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['764px', '81px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy174',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['810px', '64px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy173',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['817px', '84px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy172',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['855px', '101px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy171',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['854px', '142px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy170',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['878px', '128px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy169',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['861px', '74px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy168',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['895px', '106px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy167',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['947px', '109px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy166',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['933px', '95px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy165',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['914px', '74px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy164',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['934px', '71px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy163',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['955px', '49px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy162',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['972px', '77px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy161',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['996px', '81px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy160',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['972px', '95px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy159',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1028px', '61px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy158',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['999px', '51px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy157',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1040px', '99px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy156',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1027px', '138px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy155',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1009px', '105px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy154',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1063px', '81px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy153',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1063px', '104px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy152',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['808px', '120px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy151',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1075px', '100px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy150',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1051px', '92px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy149',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1097px', '75px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy148',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1104px', '95px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy147',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1142px', '112px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy146',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1141px', '153px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy145',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1165px', '139px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy144',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1148px', '85px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy143',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1182px', '117px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy142',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1234px', '120px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy141',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1220px', '106px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy140',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1201px', '85px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy139',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1221px', '82px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy138',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1242px', '60px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy137',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1259px', '88px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy136',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1283px', '92px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy135',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1259px', '106px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy134',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1315px', '72px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy133',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1286px', '62px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy132',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1327px', '110px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy131',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1314px', '149px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy130',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1296px', '116px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy129',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1350px', '92px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy128',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1350px', '115px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy127',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1095px', '131px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy126',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1247px', '87px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy125',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1223px', '79px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy124',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1269px', '62px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy123',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1276px', '82px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy122',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1314px', '99px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy121',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1313px', '140px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy120',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1337px', '126px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy119',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1320px', '72px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy118',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1354px', '104px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy117',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1406px', '107px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy116',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1392px', '93px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy115',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1373px', '72px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy114',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1393px', '69px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy113',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1414px', '47px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy112',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1431px', '75px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy111',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1455px', '79px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy110',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1431px', '93px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy109',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1487px', '59px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy108',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1458px', '49px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy107',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1499px', '97px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy106',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1486px', '136px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy105',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1468px', '103px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy104',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1522px', '79px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy103',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1522px', '102px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy102',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1267px', '118px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy101',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['0px', '0px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['219px', '-18px', '7px', '7px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['248px', '41px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['70px', '52px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy302',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['103px', '12px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy301',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['79px', '4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy300',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['125px', '-13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy299',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['132px', '7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy298',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['170px', '24px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy297',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['169px', '65px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy296',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['193px', '51px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy295',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['176px', '-3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy294',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['210px', '29px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy293',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['262px', '32px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy292',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['248px', '18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy291',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['229px', '-3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy290',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['249px', '-6px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy289',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['270px', '-28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy288',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['287px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy287',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['311px', '4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy286',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['287px', '18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy285',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['343px', '-16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy284',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['314px', '-26px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy283',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['355px', '22px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy282',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['342px', '61px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy281',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['324px', '28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy280',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['378px', '4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy279',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['378px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy278',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['123px', '43px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy277',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['388px', '10px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy276',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['364px', '2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy275',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['410px', '-15px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy274',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['417px', '5px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy273',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['455px', '22px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy272',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['454px', '63px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy271',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['478px', '49px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy270',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['461px', '-5px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy269',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['495px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy268',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['547px', '30px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy267',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['533px', '16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy266',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['514px', '-5px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy265',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['534px', '-8px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy264',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['555px', '-30px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy263',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['572px', '-2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy262',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['596px', '2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy261',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['572px', '16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy260',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['628px', '-18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy259',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['599px', '-28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy258',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['640px', '20px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy257',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['627px', '59px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy256',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['609px', '26px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy255',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['663px', '2px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy254',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['663px', '25px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy253',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['408px', '41px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy252',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['675px', '21px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy251',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['651px', '13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy250',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['697px', '-4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy249',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['704px', '16px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy248',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['742px', '33px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy247',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['741px', '74px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy246',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['765px', '60px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy245',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['748px', '6px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy244',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['782px', '38px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy243',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['834px', '41px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy242',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['820px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy241',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['801px', '6px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy240',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['821px', '3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy239',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['842px', '-19px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy238',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['859px', '9px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy237',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['883px', '13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy236',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['859px', '27px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy235',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['915px', '-7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy234',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['886px', '-17px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy233',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['927px', '31px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy232',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['914px', '70px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy231',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['896px', '37px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy230',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['950px', '13px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy229',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['950px', '36px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy228',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['695px', '52px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy227',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['847px', '8px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy226',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['823px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy225',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['869px', '-17px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy224',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['876px', '3px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy223',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['914px', '20px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy222',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['913px', '61px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy221',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['937px', '47px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy220',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['920px', '-7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy219',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['954px', '25px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy218',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1006px', '28px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy217',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['992px', '14px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy216',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['973px', '-7px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy215',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['993px', '-10px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy214',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1014px', '-32px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy213',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1031px', '-4px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy212',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1055px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy211',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1031px', '14px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy210',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1087px', '-20px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy209',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1058px', '-30px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy208',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1099px', '18px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy207',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1086px', '57px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy206',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1068px', '24px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy205',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1122px', '0px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy204',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1122px', '23px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy203',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['867px', '39px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy202',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['4px', '90px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy491',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['11px', '110px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy490',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['49px', '127px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy489',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['48px', '168px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy488',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['72px', '154px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy487',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['55px', '100px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy486',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['89px', '132px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy485',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['141px', '135px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy484',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['127px', '121px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy483',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['108px', '100px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy482',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['128px', '97px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy481',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['149px', '75px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy480',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['166px', '103px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy479',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['190px', '107px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy478',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['166px', '121px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy477',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['222px', '87px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy476',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['193px', '77px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy475',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['234px', '125px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy474',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['221px', '164px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy473',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['203px', '131px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy472',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['257px', '107px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy471',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['257px', '130px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy470',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['2px', '146px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy469',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['269px', '126px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy468',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['245px', '118px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy467',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['291px', '101px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy466',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['298px', '121px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy465',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['336px', '138px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy464',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['335px', '179px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy463',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['359px', '165px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy462',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['342px', '111px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy461',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['376px', '143px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy460',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['428px', '146px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy459',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['414px', '132px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy458',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['395px', '111px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy457',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['415px', '108px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy456',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['436px', '86px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy455',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['453px', '114px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy454',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['477px', '118px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy453',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['453px', '132px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy452',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['509px', '98px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy451',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['480px', '88px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy450',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['521px', '136px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy449',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['508px', '175px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy448',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['490px', '142px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy447',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['544px', '118px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy446',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['544px', '141px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy445',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['289px', '157px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy444',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['441px', '113px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy443',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['417px', '105px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy442',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['463px', '88px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy441',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['470px', '108px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy440',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['508px', '125px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy439',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['507px', '166px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy438',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['531px', '152px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy437',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['514px', '98px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy436',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['548px', '130px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy435',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['600px', '133px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy434',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['586px', '119px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy433',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['567px', '98px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy432',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['587px', '95px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy431',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['608px', '73px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy430',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['625px', '101px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy429',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['649px', '105px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy428',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['625px', '119px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy427',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['652px', '75px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy426',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['662px', '129px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy425',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['461px', '144px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy424',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-6px', '184px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy12',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['213px', '166px', '7px', '7px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy11',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['242px', '225px', '4px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['64px', '236px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy423',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['97px', '196px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy422',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['73px', '188px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy421',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['119px', '171px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy420',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['126px', '191px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy419',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['164px', '208px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy418',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['163px', '249px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy417',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['187px', '235px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy416',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['170px', '181px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy415',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['204px', '213px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy414',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['256px', '216px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy413',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['242px', '202px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy412',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['223px', '181px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy411',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['243px', '178px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy410',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['264px', '156px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy409',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['281px', '184px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy408',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['305px', '188px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy407',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['281px', '202px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy406',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['337px', '168px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy405',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['308px', '158px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy404',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['349px', '206px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy403',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['336px', '245px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy402',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['318px', '212px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy401',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['372px', '188px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy400',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['372px', '211px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy399',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['117px', '227px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy398',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['382px', '194px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy397',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['358px', '186px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy396',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['404px', '169px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy395',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['411px', '189px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy394',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['449px', '206px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy393',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['448px', '247px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy392',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['472px', '233px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy391',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['455px', '179px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy390',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['489px', '211px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy389',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['541px', '214px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy388',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['527px', '200px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy387',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['508px', '179px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy386',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['528px', '176px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy385',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['549px', '154px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy384',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['566px', '182px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy383',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['590px', '186px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy382',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['566px', '200px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy381',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['622px', '166px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy380',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['593px', '156px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy379',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['634px', '204px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy378',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['621px', '243px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy377',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['603px', '210px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy376',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['657px', '186px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy375',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['657px', '209px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy374',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['402px', '225px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy373',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['669px', '205px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy372',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['645px', '197px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy371',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['4px', '90px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy370',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['11px', '110px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy369',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['49px', '127px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy368',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['48px', '168px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy367',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['72px', '154px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy366',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['55px', '100px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy365',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['89px', '132px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy364',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['141px', '135px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy363',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['127px', '121px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy362',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['108px', '100px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy361',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['128px', '97px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy360',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['149px', '75px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy359',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['166px', '103px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy358',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['190px', '107px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy357',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['166px', '121px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy356',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['222px', '87px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy355',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['193px', '77px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy354',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['234px', '125px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy353',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['221px', '164px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy352',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['203px', '131px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy351',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['257px', '107px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy350',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['257px', '130px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy349',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['2px', '146px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy348',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['269px', '126px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy347',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['245px', '118px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy346',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['291px', '101px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy345',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['298px', '121px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy344',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['336px', '138px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy343',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['335px', '179px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy342',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['359px', '165px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy341',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['342px', '111px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy340',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['376px', '143px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy339',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['428px', '146px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy338',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['414px', '132px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy337',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['395px', '111px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy336',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['415px', '108px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy335',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['436px', '86px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy334',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['453px', '114px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy333',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['477px', '118px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy332',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['453px', '132px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy331',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['509px', '98px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy330',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['480px', '88px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy329',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['521px', '136px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy328',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['508px', '175px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy327',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['490px', '142px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy326',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['544px', '118px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy325',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['544px', '141px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy324',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['289px', '157px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy323',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['441px', '113px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy322',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['417px', '105px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy321',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['463px', '88px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy320',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['470px', '108px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy319',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['508px', '125px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy318',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['507px', '166px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy317',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['531px', '152px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy316',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['514px', '98px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy315',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['548px', '130px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy314',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['600px', '133px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy313',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['586px', '119px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy312',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['567px', '98px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy311',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['587px', '95px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy310',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['608px', '73px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy309',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['625px', '101px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy308',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['649px', '105px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy307',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['625px', '119px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy306',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['652px', '75px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy305',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['662px', '129px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy304',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['461px', '144px', '1px', '1px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy303',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '18px', '18px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pos-paper": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'pos-paper',
                            opacity: '0',
                            rect: ['130px', '0px', '130px', '171px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pos-paper.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '130px', '171px']
                        }
                    }
                },
                timeline: {
                    duration: 53605,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid968",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${pos-paper}",
                            '0',
                            '0'
                        ],
                        [
                            "eid821",
                            "opacity",
                            28917,
                            83,
                            "linear",
                            "${pos-paper}",
                            '0',
                            '1'
                        ],
                        [
                            "eid754",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pos-paper}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid756",
                            "left",
                            29000,
                            3000,
                            "linear",
                            "${pos-paper}",
                            '130px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("travelmoney6_edgeActions.js");
})("EDGE-13683168");
