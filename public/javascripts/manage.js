function changeAuthority(id,authority){
    jQuery.ajax({
        type: "POST", //傳送方式
        url: "/changeAuthority", //傳送目的地
        dataType: "json", //資料格式
        data: { //傳送資料
            id: id,
            authority: authority
        },
        success: function (data) {
        },
        error: function (jqXHR) {
          console.log("absolutely error");
        }
      });
}
function fill(data){
    let change = document.getElementById("table1");
    let tmp = "<table><tr><th>帳號</th><th>使用者</th><th>權限</th>";
    for(let i = 0; i < data.length ; i++){
        tmp += "<tr>"
        tmp += "<td>" + data[i]["ac"] + "</td><td>" + data[i]["name"] + "</td>";
        if(data[i]["authority"] == 3){
            tmp += "<td>管理者</td>"
        }else{
            tmp += "<td><select id="+data[i]["name"]+" onchange=changeAuthority(this.id,this.options[this.options.selectedIndex].value)>";
            if(data[i]["authority"] == -1){
                tmp += "<option value=-1 selected>封鎖</option><option value=0>一般</option>"
            }else{
                tmp += "<option value=-1>封鎖</option><option value=0 selected>一般</option>"
            }
            tmp += "</select></td>";
        }
        tmp += "</tr>"
    }
    tmp += "</table>";
    change.innerHTML = tmp;
}
function show(){
    jQuery.ajax({
        type: "POST", //傳送方式
        url: "/manageShow", //傳送目的地
        dataType: "json", //資料格式
        data: { //傳送資料
        },
        success: function (data) {
          fill(data);
        },
        error: function (jqXHR) {
          console.log("absolutely error");
        }
      });
}
show()