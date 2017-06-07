const $ = require('jquery');
$(function () {
    var privateFn = {};
    var Req = function () {
        return {
            echarts: require('echarts')
        }
    }();
    var publicObj = {
        $chart: $('#container'),
        $returnBtn: $('#return-button'),
        echartInstacnce: null,
        option: {},
        stackArr: [],
        stackData: {},
        count: 0
    };


    // private
    ! function () {
        /**
         * 获取默认数据
         */
        privateFn.getDefaultOptions = function () {
            return {
                tooltip: {},
                legend: {
                    left: 'left',
                    data: ['月数据']
                },
                xAxis: {
                    data: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609']
                },
                yAxis: {},
                series: [{
                    name: '月数据',
                    type: 'line',
                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                }]
            };
        }

        /**
         * 重置报表
         * @param option  当前echar配置
         */
        privateFn.initChart = function (option) {
            console.log(option);
            if (publicObj.echartInstacnce) {
                publicObj.echartInstacnce.dispose(publicObj.$chart[0]);
            }
            publicObj.echartInstacnce = Req.echarts.init(publicObj.$chart[0]);
            publicObj.echartInstacnce.setOption(option, true);
        }
        /**
         * 重置报表点击事件
         */
        privateFn.initChartEvent = function () {
            publicObj.echartInstacnce.on('click', function (params) {
                // object为当前的这个echart对象，大家可以自己打印出来看看
                // console.dir(object);
                // 我们可以看到name属性即为当前点击点的对应月份值，那么我们可以通过这个值去接口查询对应201609月份下的每一天的值.
                // 此处的201609月份数据可以通过接口读取
                // $.ajax(
                //     type : 'get',
                //     url : interfaceUrl + '&month=' + object.name, // 此处可以替换为你的接口地址
                //     dataType : 'json',
                //     success : function (msg){
                //         option.xAxis.data = msg.xAxis;
                //         option.series[0].data = msg.yAxis[0];
                //         myChart.setOption(option, true);
                //     }
                // );

                // https://dribbble.com/Kopytkov
                // 我这里就模拟一个测试数据，做为demo演示
                publicObj.option.xAxis.data = [
                    '2016-09-01', '2016-09-02', '2016-09-03', '2016-09-04', '2016-09-05', '2016-09-06', '2016-09-07', '2016-09-08',
                    '2016-09-09', '2016-09-10', '2016-09-11', '2016-09-12', '2016-09-13', '2016-09-14', '2016-09-15', '2016-09-16',
                    '2016-09-17', '2016-09-18', '2016-09-19', '2016-09-20', '2016-09-21', '2016-09-22', '2016-09-23', '2016-09-24',
                    '2016-09-25', '2016-09-26', '2016-09-27', '2016-09-28', '2016-09-29', '2016-09-30'
                ];

                var data = [
                    3, 4, 5, 6, 5, 6, 7, 8, 8, 9,
                    12, 13, 15, 16, 20, 12, 30, 21, 22, 29,
                    30, 31, 33, 34, 35, 36, 20, 29, 33, 40
                ];
                var newData = data.map(function (val, index) {
                    return val + 10 * publicObj.count;
                })
                publicObj.count++;
                publicObj.option.series[0].data = newData;
                publicObj.stackArr.push(params.name);
                publicObj.stackData[params.name] = {
                    xAxisData: publicObj.option.xAxis.data,
                    seriesData: publicObj.option.series[0].data
                };
                privateFn.initChart(publicObj.option);
                privateFn.initChartEvent();
            })
        }
    }();


    // init
    ! function () {
        publicObj.option = privateFn.getDefaultOptions();
        privateFn.initChart(publicObj.option);
        privateFn.initChartEvent();
    }();

    // events
    ! function () {
        // 点击返回按钮，会重新回到一.1的折线图
        $('#return-button').on('click', function () {
            privateFn.initChart(privateFn.getDefaultOptions());
            privateFn.initChartEvent();
        });

        // 点击返回上一级
        $('#return-up').on('click', function () {
            console.log(publicObj.stackArr.length);
            if (publicObj.stackArr.length > 0) {
                var preName = publicObj.stackArr.pop();
                var preData = publicObj.stackData[preName];
                delete publicObj.stackData[preName];
                if (preData) {
                    publicObj.option.xAxis.data = preData.xAxisData;
                    publicObj.option.series[0].data = preData.seriesData
                }
                privateFn.initChart(publicObj.option);
                privateFn.initChartEvent();
            } else {
                publicObj.$returnBtn.trigger('click');
            }
        });
    }();


});