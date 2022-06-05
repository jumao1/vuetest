<template>
  <div id="app">
    <div id="bar" style="width: 600px; height: 400px"></div>
    <div id="pie" style="width: 600px; height: 400px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "order",
  data() {
    return {
      totalPrice: [],
      payList:[],
    };
  },
  created() {
    let that = this;
    that.$http
      .get("/showEveryMonthPrice", {
        params: {
          years: 2021,
        },
      })
      .then((res) => {
        // console.log(res);
        let totalPrice = [];
        if (res.data.code == 200) {
          for (var i = 0; i < res.data.data.length; i++) {
            totalPrice.push(res.data.data[i].Totalprice);
          }
          // console.log(totalPrice);
          that.totalPrice = totalPrice;
          that.drawBar();
        }
      });

      //饼状图
      that.$http.get("showPayType").then(res=>{
        // console.log(res)
        if(res.data.code==200){
          let list=[]
          for(var i=0;i<res.data.data.length;i++){
            // console.log(res.data.data[i])
            list.push({name:res.data.data[i].Paytype,value:res.data.data[i].Nums})
          }
          // console.log(list)
          that.payList = list
          that.drawPie()
        }
       
      })
  },
  mounted() {
    this.drawBar();
    this.drawPie()
  },
  methods: {
    drawPie() {
       let that = this;
      var myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption({
        title: {
          text: "支付方式数据统计",
          subtext: "真实有效",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: that.payList,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    drawBar() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("bar"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: that.totalPrice,
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
</style>