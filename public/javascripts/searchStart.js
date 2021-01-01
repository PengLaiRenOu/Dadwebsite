console.log("start");
jQuery.ajax({
  type: "POST", //傳送方式
  url: "/catchBrand", //傳送目的地
  dataType: "json", //資料格式
  data: { //傳送資料
    brand: null
  },
  success: function (data) {
    fillBrand(data);
  },
  error: function (jqXHR) {
    console.log("absolutely error");
  }
});
function fillBrand(data){
  let brandTmp = document.getElementById('brand');
  brandTmp.innerHTML = `<option value="">請選擇廠牌</option>`;
  for (let i = 0; i < data.length ; i++){
      brandTmp.innerHTML +=`<option value ="${data[i]["brand"]}">${data[i]["brand"]}</option>`;
  }
  let carTypeTmp = document.getElementById('carType');
  carTypeTmp.innerHTML = `<option value="">請先選擇廠牌</option>`;
  let displacementTmp = document.getElementById('displacement');
  displacementTmp.innerHTML = `<option value="">請先選擇廠牌</option>`;
  let yearTmp = document.getElementById('year');
  yearTmp.innerHTML = `<option value="">請先選擇廠牌</option>`;
}
function fillCarType(data){
  let carTypeTmp = document.getElementById('carType');
  carTypeTmp.innerHTML = `<option value="">請選擇車型</option>`;
  for (let i = 0; i < data.length ; i++){
      carTypeTmp.innerHTML +=`<option value ="${data[i]["carType"]}">${data[i]["carType"]}</option>`;
  }
  let displacementTmp = document.getElementById('displacement');
  displacementTmp.innerHTML = `<option value="">請先選擇車型</option>`;
  let yearTmp = document.getElementById('year');
  yearTmp.innerHTML = `<option value="">請先選擇車型</option>`;
}
function fillDisplacement(data){
  let displacementTmp = document.getElementById('displacement');
  displacementTmp.innerHTML = `<option value="">請選擇排量</option>`;
  for (let i = 0; i < data.length ; i++){
      displacementTmp.innerHTML +=`<option value ="${data[i]["displacement"]}">${data[i]["displacement"]}</option>`;
      let yearTmp = document.getElementById('year');
  yearTmp.innerHTML = `<option value="">請先選擇排量</option>`;
  }
}
function fillYear(data){
  let yearTmp = document.getElementById('year');
  yearTmp.innerHTML = `<option value="">請選擇適用年份</option>`;
  for (let i = 0; i < data.length ; i++){
      yearTmp.innerHTML +=`<option value ="${data[i]["year"]}">${data[i]["year"]}</option>`;
  }
}
function fillList(data){
  let table1 = document.getElementById('table1');
  table1.innerHTML = `<table><tr><th>廠牌</th><th>車型</th><th>排量</th><th>適用年份</th><th>引擎形式</th></tr><tr><td>${data[0]["brand"]}</td><td>${data[0]["carType"]}</td><td>${data[0]["displacement"]}</td><td>${data[0]["year"]}</td><td>${data[0]["engineType"]}</td></tr></table>`
  let table2 = document.getElementById('table2');
  table2.innerHTML = `<table id = data><tr><th></th><th>項目</th><th>規格</th></tr><tr><td rowspan="9">引擎</td><td>車型</td><td>${data[0]["CT"]}</td></tr><tr><td>基本怠速</td><td>${data[0]["ES"]}</td></tr><tr><td>點火正時</td><td>${data[0]["FA"]}</td></tr><tr><td>火星塞規格</td><td>${data[0]["FST"]}</td></tr><tr><td>汽缸壓力</td><td>${data[0]["CA"]}</td></tr><tr><td>調節後燃油壓力</td><td>${data[0]["AAOA"]}</td></tr><tr><td>機油建議型號</td><td>${data[0]["ECT"]}</td></tr><tr><td>機油建議規範</td><td>${data[0]["EOST"]}</td></tr><tr><td>不含濾清器(含)</td><td>${data[0]["ENI"]}</td></tr><tr><td rowspan="7">變速箱</td><td>變速箱型式</td><td>${data[0]["GT"]}</td></tr><tr><td>原廠自排油型號</td><td>${data[0]["OSO"]}</td></tr><tr><td>容量(L)</td><td>${data[0]["OSOC"]}</td></tr><tr><td>差速器油型號</td><td>${data[0]["DOT"]}</td></tr><tr><td>容量(L)</td><td>${data[0]["DOTC"]}</td></tr><tr><td>加力箱油型號</td><td>${data[0]["APOT"]}</td></tr><tr><td>容量(L)</td><td>${data[0]["APOTC"]}</td></tr><tr><td rowspan="2">冷卻</td><td>冷卻液型號</td><td>${data[0]["CST"]}</td></tr><tr><td>容量(L)</td><td>${data[0]["CSTC"]}</td></tr><tr><td rowspan="2">煞車</td><td>煞車油型號</td><td>${data[0]["BOT"]}</td></tr><tr><td>容量(L)</td><td>${data[0]["BOTC"]}</td></tr><tr><td rowspan="2">轉向</td><td>動力油型號</td><td>${data[0]["POT"]}</td></tr><tr><td>容量(L)</td><td>${data[0]["POTC"]}</td></tr><tr><td rowspan="4">空調</td><td>冷媒型式</td><td>${data[0]["RT"]}</td></tr><tr><td>冷媒容量(g)</td><td>${data[0]["RTC"]}</td></tr><tr><td>冷凍油型號</td><td>${data[0]["CO"]}</td></tr><tr><td>冷凍油容量(g)</td><td>${data[0]["COC"]}</td></tr></table>`
}
function selectedBrand(brandValue){
  jQuery.ajax({
    type: "POST", //傳送方式
    url: "/catchCarType", //傳送目的地
    dataType: "json", //資料格式
    data: { //傳送資料
      brand: brandValue
    },
    success: function (data) {
      fillCarType(data);
    },
    error: function (jqXHR) {
      console.log("absolutely error");
    }
  });
}
function selectedCarType(carTypeValue){
  jQuery.ajax({
    type: "POST", //傳送方式
    url: "/catchDisplacement", //傳送目的地
    dataType: "json", //資料格式
    data: { //傳送資料
      brand: brandValue ,
      carType: carTypeValue
    },
    success: function (data) {
      // console.log(data);
      fillDisplacement(data);
    },
    error: function (jqXHR) {
      console.log("absolutely error");
    }
  });
}
function selectedDisplacement(displacementValue){
  jQuery.ajax({
    type: "POST", //傳送方式
    url: "/catchYear", //傳送目的地
    dataType: "json", //資料格式
    data: { //傳送資料
      brand: brandValue ,
      carType: carTypeValue,
      displacement: displacementValue
    },
    success: function (data) {
      // console.log(data);
      fillYear(data);
    },
    error: function (jqXHR) {
      console.log("absolutely error");
    }
  });
}
function selectedYear(yearValue){
  jQuery.ajax({
    type: "POST", //傳送方式
    url: "/fillList", //傳送目的地
    dataType: "json", //資料格式
    data: { //傳送資料
      brand: brandValue ,
      carType: carTypeValue,
      displacement: displacementValue,
      year: yearValue
    },
    success: function (data) {
      fillList(data);
      console.log(data);
    },
    error: function (jqXHR) {
      console.log("absolutely error");
    }
  });
}
var brandValue;
var carTypeValue;
var displacementValue;
var yearValue;
$( "#brand" ).change(function() {
  brandValue = document.getElementById("brand").value;
  brandIndex = document.getElementById("brand").selectedIndex - 1;
  if(brandIndex > -1){
    selectedBrand(brandValue);
  }else{
    let carTypeTmp = document.getElementById('carType');
    carTypeTmp.innerHTML = `<option value="">請先選擇車型</option>`;
    let displacementTmp = document.getElementById('displacement');
    displacementTmp.innerHTML = `<option value="">請先選擇車型</option>`;
    let yearTmp = document.getElementById('year');
    yearTmp.innerHTML = `<option value="">請先選擇車型</option>`;
  }
});
$( "#carType" ).change(function() {
  carTypeValue = document.getElementById("carType").value;
  carTypeIndex = document.getElementById("carType").selectedIndex - 1;
  if(carTypeIndex > -1){
    selectedCarType(carTypeValue);
  }else{
    // console.log("cartype");
    let displacementTmp = document.getElementById('displacement');
    displacementTmp.innerHTML = `<option value="">請先選擇車型</option>`;
    let yearTmp = document.getElementById('year');
    yearTmp.innerHTML = `<option value="">請先選擇車型</option>`;
  }

});
$( "#displacement" ).change(function() {
  displacementValue = document.getElementById("displacement").value;
  displacementIndex = document.getElementById("displacement").selectedIndex - 1;
  if(displacementIndex > -1){
    selectedDisplacement(displacementValue);
  }else{
    let yearTmp = document.getElementById('year');
    yearTmp.innerHTML = `<option value="">請先選擇車型</option>`;
  }
  
});
$( "#year" ).change(function() {
  yearValue = document.getElementById("year").value;
  selectedYear(yearValue);
});