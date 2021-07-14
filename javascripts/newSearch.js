refresh();
function refresh(){
  let brandTmp = document.getElementById('brand').value;
  let typeTmp = document.getElementById('type').value;
  let displacementTmp = document.getElementById('displacement').value;
  let yearTmp = document.getElementById('year').value;
  if(brandTmp != "-1" & yearTmp != "-1" & displacementTmp != "-1" & typeTmp != "-1"){
    jQuery.ajax({
      type: "POST", //傳送方式
      url: "/refreshSelect", //傳送目的地
      dataType: "json", //資料格式
      data: { //傳送資料
        brand: brandTmp,
        type: typeTmp,
        displacement: displacementTmp,
        year: yearTmp,
        which: "picture"
      },
      success: function (data) {
        show(data);
      },
      error: function (jqXHR) {
        console.log("absolutely error");
      }
    });
    // return;
  }
  if(brandTmp == "-1"){
    jQuery.ajax({
      type: "POST", //傳送方式
      url: "/refreshSelect", //傳送目的地
      dataType: "json", //資料格式
      data: { //傳送資料
        brand: brandTmp,
        type: typeTmp,
        displacement: displacementTmp,
        year: yearTmp,
        which: "brand"
      },
      success: function (data) {
        fill(data,"brand");
      },
      error: function (jqXHR) {
        console.log("absolutely error");
      }
    });
    
  }
  if(typeTmp == "-1"){
    jQuery.ajax({
      type: "POST", //傳送方式
      url: "/refreshSelect", //傳送目的地
      dataType: "json", //資料格式
      data: { //傳送資料
        brand: brandTmp,
        type: typeTmp,
        displacement: displacementTmp,
        year: yearTmp,
        which: "type"
      },
      success: function (data) {
        fill(data,"type");
      },
      error: function (jqXHR) {
        console.log("absolutely error");
      }
    });
  }
  if(displacementTmp == "-1"){
    jQuery.ajax({
      type: "POST", //傳送方式
      url: "/refreshSelect", //傳送目的地
      dataType: "json", //資料格式
      data: { //傳送資料
        brand: brandTmp,
        type: typeTmp,
        displacement: displacementTmp,
        year: yearTmp,
        which: "displacement"
      },
      success: function (data) {
        fill(data,"displacement");
      },
      error: function (jqXHR) {
        console.log("absolutely error");
      }
    });
  }
  if(yearTmp == "-1"){
    jQuery.ajax({
      type: "POST", //傳送方式
      url: "/refreshSelect", //傳送目的地
      dataType: "json", //資料格式
      data: { //傳送資料
        brand: brandTmp,
        type: typeTmp,
        displacement: displacementTmp,
        year: yearTmp,
        which: "year"
      },
      success: function (data) {
        fill(data,"year");
      },
      error: function (jqXHR) {
        console.log("absolutely error");
      }
    });
  }
  
}
function fill(data , distance){
  let change = document.getElementById(distance);
  change.innerHTML = "<option value='-1'>請選擇</option>";
  for (let i = 0; i < data.length ; i++){
    change.innerHTML +=`<option value ="${data[i][distance]}">${data[i][distance]}</option>`;
  }
}
function show(data){
  let picture = document.getElementById('picture');
  let w = document.body.clientWidth * 0.7;
  picture.innerHTML = "";
  for (let i = 0; i < data.length ; i++){
    for(let j = 0 ; j < data[i]["extend"] ; j++){
      let pages = toPage(data,i,j)
      picture.innerHTML +=`<img width = "${w}"src="../images/${data[i]["book"]}/${pages}.jpg"><br>`;
    }
  }
  console.log(picture.innerHTML);
}

function toPage(data,i,j){
  // console.log(data[i]);
  let book = (data[i]["book"]-1).toString();
  let page = (data[i]["page"]+j).toString();
  let a = 5 - book.length - page.length;
  let tmp = book;
  for(let k = 0 ; k < a ; k++){
    tmp += "0";
  }
  tmp += page;
  return tmp;
}

function reset(){
  document.getElementById('brand').value = "-1";
  document.getElementById('type').value = "-1";
  document.getElementById('displacement').value = "-1";
  document.getElementById('year').value = "-1";
  document.getElementById('picture').innerHTML = "";
  refresh();
}