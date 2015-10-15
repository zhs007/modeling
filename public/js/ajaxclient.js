/**
 * Created by zhs007 on 15/7/3.
 */

var lstChart = {};

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

function onRet(str) {
    var obj = JSON.parse(str);
    if (obj.hasOwnProperty('navsidebar')) {
        $('#navsidebar').html(obj.navsidebar);
    }
    if (obj.hasOwnProperty('mainworkspace')) {
        $('#mainworkspace').html(obj.mainworkspace);
    }

    if (obj.hasOwnProperty('si_clientnums')) {
        refurbishChart('clientnumsChart', obj.si_clientnums, obj.si_clientnums);
    }

    if (obj.hasOwnProperty('si_heaptotal')) {
        refurbishChart('heaptotalChart', obj.si_heaptotal, obj.si_heaptotal);
    }

    if (obj.hasOwnProperty('si_heapused')) {
        refurbishChart('heapusedChart', obj.si_heapused, obj.si_heapused);
    }

    if (obj.hasOwnProperty('si_totalclientnums')) {
        refurbishChart('totalclientnumsChart', obj.si_totalclientnums, obj.si_totalclientnums);
    }
}

function chg2test(curtest) {
    $.post('/test/view_start', {curtest: curtest}, function (data, status) {
        onRet(data);
    });
}

function starttest(curtest) {
    lstChart = {};

    var param = {
        curtest: curtest,
        addr: $('#inputServAddr').val(),
        port: $('#inputServPort').val(),
        clientnums: $('#inputClientNums').val(),
        plugins: $("#inputPlugins").find("option:selected").attr("typename"),
        proto: $("#inputProto").find("option:selected").attr("typename")
    };

    $.post('/test/ctrl_start', param, function (data, status) {
        onRet(data);
    });
}

function refurbishtest(curtest) {
    lstChart = {};

    var param = {
        curtest: curtest
    };

    $.post('/test/refurbish_state', param, function (data, status) {
        onRet(data);
    });
}

function refurbishChart(chartid, label, configdata) {
    if (!lstChart.hasOwnProperty(chartid)) {
        var options = {
            //Boolean - If we show the scale above the chart data
            scaleOverlay : false,
            //Boolean - If we want to override with a hard coded scale
            scaleOverride : false,
            //** Required if scaleOverride is true **
            //Number - The number of steps in a hard coded scale
            scaleSteps : null,
            //Number - The value jump in the hard coded scale
            scaleStepWidth : null,
            //Number - The scale starting value
            scaleStartValue : null,
            //String - Colour of the scale line
            scaleLineColor : "rgba(0,0,0,.1)",
            //Number - Pixel width of the scale line
            scaleLineWidth : 1,
            //Boolean - Whether to show labels on the scale
            scaleShowLabels : false,
            //Interpolated JS string - can access value
            scaleLabel : "<%=value%>",
            //String - Scale label font declaration for the scale label
            scaleFontFamily : "'Arial'",
            //Number - Scale label font size in pixels
            scaleFontSize : 12,
            //String - Scale label font weight style
            scaleFontStyle : "normal",
            //String - Scale label font colour
            scaleFontColor : "#666",
            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines : true,
            //String - Colour of the grid lines
            scaleGridLineColor : "rgba(0,0,0,.05)",
            //Number - Width of the grid lines
            scaleGridLineWidth : 1,
            //Boolean - Whether the line is curved between points
            bezierCurve : false,
            //Boolean - Whether to show a dot for each point
            pointDot : true,
            //Number - Radius of each point dot in pixels
            pointDotRadius : 3,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth : 1,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke : true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth : 2,
            //Boolean - Whether to fill the dataset with a colour
            datasetFill : true,
            //Boolean - Whether to animate the chart
            animation : false,
            //Number - Number of animation steps
            animationSteps : 60,
            //String - Animation easing effect
            animationEasing : "easeOutQuart",
            //Function - Fires when the animation is complete
            onAnimationComplete : function () {}
        };


        var ctx = $('#' + chartid).get(0).getContext("2d");

        var data = {
            labels: label,
            datasets: [
                {
                    label: "配置",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: configdata
                }
            ]
        };

        lstChart[chartid] = new Chart(ctx).Line(data, options);
    }
    else {
        lstChart[chartid].removeData();
        lstChart[chartid].labels = label;
        lstChart[chartid].datasets[0].data = configdata;
        lstChart[chartid].update();
    }
}