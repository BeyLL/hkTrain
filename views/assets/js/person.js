$("#chart").attr("display", "none");
//全选功能
function allcheck() {
    if ($('#allcheck').is(':checked') == true) {
        $('#userList input[type=checkbox]').prop('checked', true);
    } else if ($('#allcheck').is(':checked') == false) {
        $('#userList input[type=checkbox]').prop('checked', false);
    }
}
//批量删除
$('#delAll').click(function () {
    var datas = [];
    for (var i = 0; i < $('#userList input[type=checkbox]').length; i++) {
        if ($('#userList input[type=checkbox]').eq(i).is(':checked') == true) {
            datas.push($('#userList input[type=checkbox]').eq(i).val());
        }
    }
    if (datas.length == 0) {
        win.alert('提示', '请勾选要删除的人员')
    } else {
        var settings = {
            "url": "/delete_people",
            "method": "POST",
            "async": false,
            "data": {
                user: readData('USER_KEY').name,
                token: readData('USER_KEY').token,
                id: JSON.stringify(datas),
            }
        }
        console.log(settings.data)
        $.ajax(settings).done(function (response) {
            console.log(response);
            if (response.code == 0) {
                win.alert("提示", response.msg);
                getUserList();
            } else {
                win.alert("提示", response.msg);
            }
        });
    }
})

var pageNow = 1;
var pageSum;
var pagesize = 10;
//获取人员
function getUserList(firstId,secondId) {

    if(!firstId){
        firstId = readData("USER_KEY").id
    }
    if(!secondId){
        secondId = undefined;
    }
    var settings = {
        "url": "getPeople",
        "method": "POST",
        "async": false,
        "data": {
            user: readData('USER_KEY').name,
            token:readData("USER_KEY").token,
            unit_first: firstId,
            unit_second:secondId,
            page: pageNow,
            pageSize: pagesize,
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.code == 0) {
            console.log(response);
            var attr = response.row;
            var data = response.data;
            var attrHtml = '';
            var html = '';
            for (var j = 0; j < attr.length; j++) {
                if (j == 0) {
                    attrHtml += " <th style='white-space: nowrap;font-size: 15px;'><input id='allcheck' onchange='allcheck()' type='checkbox'/></th>";
                    attrHtml += " <th style='white-space: nowrap;font-size: 15px;'>序号</th>";
                } else {
                    attrHtml += " <th style='white-space: nowrap;font-size: 15px;'>" + attr[j].attrValue + "</th>";
                }
                if (j == attr.length - 1) {
                    attrHtml += " <th style='white-space: nowrap;font-size: 15px;'>操作</th>";
                }
            }
            $('#attr').html(attrHtml);
            for (var i = 0; i < data.length; i++) {
                if (pageNow == 1) {
                    var k = i + 1;
                } else {
                    var k = parseInt((pageNow - 1) * pagesize + i + 1);
                }
                var attrname = data[i];
                for (key in attrname) {
                    html += '<tr>'
                    for (var l = 0; l < attr.length; l++) {
                        if (l == 0) {
                            html += "<td><input class='check' type='checkbox' value='" + attrname[attr[0].attrName] + "'/></td><td style='font-size:14px;white-space: nowrap;'>" + k + "</td>";
                        } else {
                            html += "<td style='font-size:14px;white-space: nowrap;'>" + attrname[attr[l].attrName] + "</td>";
                        }
                        if (l == attr.length - 1) {
                            html += "<td style='font-size:14px;'><span class='label label-info' style='cursor: pointer;margin-right: 10px' onclick='diaochu(" + attrname[attr[0].attrName] + ")''><i class='glyphicon glyphicon-edit'>&nbsp;</i>调出</span>" +
                                "<span class='label label-info' style='cursor: pointer;margin-right: 10px' onclick='bianji(" + attrname[attr[0].attrName] + ")''><i class='glyphicon glyphicon-edit'>&nbsp;</i>编辑</span>" +
                                "<span class='label label-danger' style='cursor: pointer;' onclick='shanchu(" + attrname[attr[0].attrName] + ")''><i class='glyphicon glyphicon-remove'>&nbsp;</i>删除</span></td>";
                        }
                    }
                    html += '</tr>'
                    break;
                }
//                    html+="<tr>"
//                    html+="<td style='font-size:14px;width: 4%;'>"+k+"</td><td style='font-size:14px;width: 5%'>"+data[i].unit_first+"</td>" +
//                        "<td style='font-size:14px;width: 5%;'>"+data[i].unit_second+"</td><td style='font-size:14px;width: 15%;'>"+data[i].name+"</td>" +
//                        "<td style='font-size:14px;width: 10%;'>"+data[i].sex+"</td><td style='font-size:14px;width: 7%;'>"+getMyDate(data[i].brith_day)+"</td>" +
//                        "<td style='font-size:14px;width: 7%;'>"+data[i].nation+"</td><td style='font-size:14px;width: 7%;'>"+data[i].education+"</td>" +
//                        "<td style='font-size:14px;width: 7%;'>"+data[i].evaluation+"</td><td style='font-size:14px;width: 15%;'>"+getMyDate(data[i].check_time)+"</td>" +
//                        "<td style='font-size:14px;width: 10%;'>"+data[i].remark+"</td>" +
//                        "<td style='font-size:14px;'><span class='label label-info' style='cursor: pointer;margin-right: 10px' onclick='bianji(" + data[i].id + ")''><i class='glyphicon glyphicon-edit'>&nbsp;</i>编辑</span>" +
//                        "<span class='label label-danger' style='cursor: pointer;' onclick='shanchu(" + data[i].id + ")''><i class='glyphicon glyphicon-remove'>&nbsp;</i>删除</span></td>"
//                    html+="</tr>"
            }
            if (pagesize != data.length) {
                for (var j = 0; j < pagesize - data.length; j++) {
                    html += "<tr style='height:37px;'></tr>";
                }
            }
            $('#userList').html(html);
            $('#tiaoshu').text(response.total)
            pageSum = response.total / pagesize;
            pageSum = Math.ceil(pageSum);
            var pageInSum = pageNow + "/" + pageSum
            $('#pageNum').text(pageInSum);
        } else {
            win.alert('提示', response.msg);
        }
    });
}
getUserList();
//第一页
function first() {
    if (pageNow == 1) {
        win.alert("提示", "已是第一页");
        return
    }
    pageNow = 1;
    getUserList();
}
//上一页
function prevpage() {

    if (pageNow == 1) {
        win.alert("提示", "已是第一页");
        return
    }
    pageNow--;
    getUserList();
}
function nextpage() {

    if (pageNow == pageSum) {
        win.alert("提示", "已是最后一页");
        return
    }
    pageNow++;
    getUserList();

}
//最后一页
function last() {
    if (pageNow == pageSum) {
        win.alert("提示", "已是最后一页");
        return
    }
    pageNow = pageSum;
    pagesize = 10;
    getUserList();
}

//按页数查询
function selectByPage() {
    if ($('#ty').val() == '') {
        pageNow = 1;
        getUserList();
    } else if ($('#ty').val() < 1 || $('#ty').val() > pageSum) {
        win.alert('提示', '输入页数为正数且不能大于' + pageSum);
        $('#ty').val('');
        return;
    } else {
        pageNow = $('#ty').val();
        getUserList();
        return;
    }

}


/*删除*/
function shanchu(id) {
    var Data = {};
    Data.user = readData("USER_KEY").name;
    Data.token = readData("USER_KEY").token;
    Data.id = id;
    console.log(Data);
    win.confirm('提示', '确认删除删除后无法恢复', function (r) {
        if (r == true) {
            var settings = {
                "url": "/delete_people",
                "method": "POST",
                "data": Data,
            };
            $.ajax(settings).done(function (response) {
                console.log(response);
                if (response.code == 0) {
                    $("#bj_trq" + id).remove();
                    hquser()
                } else {
                    alert(response.msg);
                }
            });
        } else {
            return false;
        }

    })
}

function diaochu(id) {


}
function bianji(id) {


}


var $tab = $(".personList");
var $li = $(".design .nav li");
$li.click(function () {
    $this = $(this);
    var index = $li.index($this);
    $tab.eq(index).removeClass("dis").siblings().addClass("dis")
})

//筛选查询的显示与隐藏切换
var $query = $(".query_left");
var $search = $(".show_search");
var sea = false;
$query.click(function () {
    if (!sea) {
        $search.css("display", "block");
        $(".query_left .glyphicon").removeClass("glyphicon glyphicon-triangle-bottom").addClass("glyphicon glyphicon-triangle-top")
        sea = true;
    } else {
        $search.css("display", "none");
        $(".query_left .glyphicon").removeClass("glyphicon glyphicon-triangle-top").addClass("glyphicon glyphicon-triangle-bottom")
        sea = !sea;
    }

})


var $na = $("#search .national");
for (var i = 0; i < nations.length; i++) {
    $na.append($("<span></span>").html("" + nations[i]))
}

var $ed = $("#search .education .search_right");
for(var i=0;i<education.length;i++){
    $ed.append($("<span></span>").html(""+education[i]))
}

var $pro = $("#search .province ");
for(var i=0;i<province.length;i++){
    $pro.append($("<span></span>").html(""+province[i]))
}



//头部下拉框点击选择哪个单位显示哪个单位的数据
//异步拼接的元素，在这里是获取不到的
// console.log($oli);
// $oli.click(function(){
//     $this = $(this);
//     getUserList( $this.attr("class"))
// });
//



