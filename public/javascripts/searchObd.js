function searchObd(){
  jQuery.ajax({
    type: "POST", //傳送方式
    url: "/obd2", //傳送目的地
    dataType: "json", //資料格式
    data: { //傳送資料
      obd: document.getElementById("search").value
    },
    success: function (data) {
      obdTable(data);
      // fillObd(data);
    },
    error: function (jqXHR) {
      console.log("absolutely error");
    }
  });
}
function obdTable(data){
  str = "";
  for(let i = 0 ; i < data.length ; i++){
    // console.log(data[i]);
    str = str + '<table width="500" border="0" style="border:1 solid #000000">';
    str = str + '<tr><td bgcolor="#CCCCCC">類別</td><td bgcolor="#FFFFFF"><strong>'+data[i]["mclass"]+'</strong></td></tr>';
    str = str + '<tr><td bgcolor="#CCCCCC">故障代碼</td><td bgcolor="#FFFFFF"><strong>'+data[i]["mal"]+'</strong></td></tr>';
    str = str + '<tr><td bgcolor="#CCCCCC">中文定義</td><td bgcolor="#FFFFFF"><strong>'+data[i]["chi"]+'</strong></td></tr>';
    str = str + '<tr><td bgcolor="#CCCCCC">英文定義</td><td bgcolor="#FFFFFF"><strong>'+data[i]["eng"]+'</strong></td></tr>';
    str = str + '<tr><td bgcolor="#CCCCCC">故障位置</td><td bgcolor="#FFFFFF"><strong>'+data[i]["place"]+'</strong></td></tr>';
    str = str + '<tr><td bgcolor="#CCCCCC">故障說明</td><td bgcolor="#FFFFFF"><strong>'+data[i]["description"]+'</strong></td></tr>';
    str = str + '<tr><td bgcolor="#CCCCCC">專用品牌</td><td bgcolor="#FFFFFF"><strong>'+data[i]["brand"]+'</strong></td></tr>';
    str = str + '</table><br><br>';
  }
  document.getElementById("obd").innerHTML = str;
}