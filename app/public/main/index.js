// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var cityData = {
  "黑龙江": [
    { name: "哈尔滨", value: 1 },
    { name: "大庆", value: 1 }
  ]
}

option = {
  title: {
    text: '渠道店铺数量',
    subtext: '2017-8-19',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      var name = params.name;
      var value = params.value;
      if (!value) {
        return "";
      }
      var ss = name + "总数" + value + "</br>";
      if (cityData[name]) {
        for (var i = 0; i < cityData[name].length; i++) {
          ss += cityData[name][i].name + ":" + cityData[name][i].value + "</br>";
        }
      }

      return ss;
    }
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['iphone3', 'iphone4', 'iphone5']
  },
  visualMap: {
    min: 0,
    max: 10,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],           // 文本，默认为数值文本
    calculable: true
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      name: '丝芙兰',
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      // 这里写省会城市
      data: [
        { name: '北京', value: 14 },
        { name: '河北', value: 2 },
        { name: '内蒙古', value: 1 },
        { name: '黑龙江', value: 3 },
      ]
    }
  ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);