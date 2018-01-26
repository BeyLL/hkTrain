/**
 * Created by Administrator on 2018/1/24.
 */
//获取一级单位
getUnit();
function getUnit() {
    $.ajax({
        url: "/getfirstUnit",
        type: "post",
        dataType: "json",
        // async:false,
        data:{
            user:readData('USER_KEY').name,
            token:readData('USER_KEY').token,
            pid:0,
        },
        timeOut: 10000,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                $("#unit_first").html(getunitHtml(data.row));
                $("#unit_firsts").html(getunitHtml(data.row));
            } else {
                win.alert("提示",data.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function selectchange(){
    $.ajax({
        url: "/getfirstUnit",
        type: "post",
        dataType: "json",
        // async:false,
        data:{
            user:readData('USER_KEY').name,
            token:readData('USER_KEY').token,
            pid:$("#unit_first option:selected").val(),
        },
        timeOut: 10000,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                $("#unit_second").html(getunitHtml(data.row));
            } else {
                win.alert("提示",data.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
function selectchanges(){
    $.ajax({
        url: "/getfirstUnit",
        type: "post",
        dataType: "json",
        // async:false,
        data:{
            user:readData('USER_KEY').name,
            token:readData('USER_KEY').token,
            pid:$("#unit_firsts option:selected").val(),
        },
        timeOut: 10000,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                $("#unit_seconds").html(getunitHtml(data.row));
            } else {
                win.alert("提示",data.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

function attr(){
    $('.box').css('display','block');
}

function closes() {
    $('.box1').css('display','none');
    $("#biaoti").val('');
    $("#file").val('');
    $("#cjr").val('');
    $("#cjrq").val('');
}

hquser()
var pageNow=1;
var pageSum;
var pagesize=10;
//第一页
function first(){
    if(pageNow==1){
        win.alert("提示","已是第一页");
        return
    }
    pageNow=1;
    hquser();
}
//上一页
function prevpage(){

    if(pageNow==1){
        win.alert("提示","已是第一页");
        return
    }
    pageNow--;
    hquser();
}
function nextpage(){

    if(pageNow==pageSum){
        win.alert("提示","已是最后一页");
        return
    }
    pageNow++;
    hquser();

}
//最后一页
function last(){
    if(pageNow==pageSum){
        win.alert("提示","已是最后一页");
        return
    }
    pageNow=pageSum;
    pagesize=10;
    hquser();
}

//按页数查询
function selectByPage(){
    if($('#tys').val()==''){
        pageNow=1;
        hquser();
    }else if($('#tys').val()<1||$('#tys').val()>pageSum){
        win.alert('提示','输入页数为正数且不能大于'+pageSum);
        $('#tys').val('');
        return;
    }else{
        pageNow=$('#tys').val();
        hquser();
        return;
    }

}

//获取指示计划
function hquser() {
    $.ajax({
        url: "/getAllUnit",
        type: "post",
        dataType: "json",
        async: false,
        data: null,
        timeOut: 10000,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                result = data.row;
                for (var i = 0; i < data.row.length; i++) {
                    if (readData("USER_KEY").name == data.row[i].name) {
                        var unit_id = data.row[i].id
                    }
                }
                $.ajax({
                    url: '/get_plan',
                    type: 'POST',
                    data: {
                        user: readData("USER_KEY").name,
                        token: readData("USER_KEY").token,
                        unit_id: unit_id,
                        page: pageNow,
                        pageSize: pagesize
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.code == 0) {
                            var date = data.row;
                            var html = "<thead style='text-align: center'><tr style='background: #1458a7;color: #fff'><th style='white-space: nowrap;font-size: 15px;'><input id='allcheck' onchange='allcheck()' type='checkbox'/></th>" +
                                "<th style='font-size:15px;'>序号</th><th style='font-size:15px;'>类型</th><th style='font-size:15px;'>标题</th><th style='font-size:15px;'>创建人</th><th style='font-size:15px;'>推送单位<th style='font-size:15px;'>创建日期</th><th style='font-size:15px;'>推送</th><th style='font-size:15px;'>操作</th></tr></thead>";
                            for (var i = 0; i < date.length; i++) {
                                for (var j = 0; j < result.length; j++) {
                                    if (date[i].unit_id == result[j].id) {
                                        date[i].unit_id = result[j].name;
                                    }

                                }
                                if (date[i].plan_point == 0) {
                                    date[i].plan_point = '计划';
                                } else if (date[i].plan_point == 1) {
                                    date[i].plan_point = '指示';
                                }
                                if (date[i].is_push == 0) {
                                    date[i].is_push = "<span class='label label-default' style='background:#fff;border:1px solid #1458a7;color:#1458a7' onclick='push(" + date[i].id + ")'>未推送</span>";
                                } else if (date[i].is_push == 1) {
                                    date[i].is_push = "<span class='label label-default' style='background:#fff;border:1px solid #eeeef0;color:#888888'>已推送</span>";
                                }
                                if (pageNow == 1) {
                                    var k = i + 1;
                                } else {
                                    var k = (pageNow - 1) * 10 + i + 1
                                }
                                html += "<tr id='bj_tr" + date[i].id +
                                    "'><td style='font-size:14px;'><input class='check' type='checkbox' value='" + date[i].id + "'/></td><td style='font-size:14px;'  id='rwgl_id" + date[i].id +
                                    "'>" + k + "</td><td style='font-size:14px;' id='cjgly" + date[i].id +
                                    "'>" + date[i].plan_point + "</td><td style='font-size:14px;' id='rwgl_name" + date[i].id +
                                    "'>" + date[i].title + "</td><td style='font-size:14px;' id='rwgl_phone" + date[i].id + "'>" + date[i].creater + "</td><td style='font-size:14px;' id='rwgl_phone" + date[i].id + "'>" + date[i].unit_id + "</td>" +
                                    "<td style='font-size:14px;' id='rwgl_username" + date[i].id + "'>" + getMyDate(date[i].createtime) + "</td><td style='font-size:14px;' id='rwgl_username" + date[i].id + "'>" + date[i].is_push + "</td>" +
                                    "<td style='font-size:14px;'><span class='label label-info' style='cursor: pointer;margin-right: 10px' onclick='bianji(" + date[i].id + ")''><i class='glyphicon glyphicon-edit'>&nbsp;</i>编辑</span>" +
                                    "<span class='label label-danger' style='cursor: pointer;' onclick='shanchu(" + date[i].id + ")''><i class='glyphicon glyphicon-remove'>&nbsp;</i>删除</span></td></tr>"
                            }
                            if (pagesize != date.length) {
                                for (var j = 0; j < pagesize - data.length; j++) {
                                    html += "<tr></tr>"
                                }
                            }
                            $('#infomation').html(html);
                            $("#tiaoshu").text(date.length);
                            pageSum = parseInt(date.length) / 10;
                            pageSum = Math.ceil(pageSum);
                            var pageInSum = pageNow + "/" + pageSum;
                            $('#pageNum').text(pageInSum);
                        } else {
                            alert(data.msg);
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            } else {
                alert(data.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}
/*编辑*/
function bianji(id){
    $('.box1').css('display','block');
    var Data = {};
    Data.user=readData("USER_KEY").name;
    Data.token=readData("USER_KEY").token;
    Data.id = id;
    var settings = {
        "url":"/get_planUrl",
        "method": "POST",
        "data":Data,
    };
    $.ajax(settings).done(function (data) {
        console.log(data);
        if (data.code==0){
            var date = data.row;
            for(var i=0;i<$("#lx input[type=radio]").length;i++){
                if(date.plan_point == $("#lx input[type=radio]").eq(i).val()){
                    $("#lx input[type=radio]").eq(i).prop('checked',true);
                }
            }
            $("#biaoti").val(date.title);
            $("#unit_first").val(date.unit_first);
            $("#unit_second").val(date.unit_second);
            $("#cjr").val(date.creater);
            $("#cjrq").val( getMyDate(date.createtime));
        }else{
            alert(response.msg);
        }
    });
}


//转换时间
function getMyDate(timeStamp) {
    var newDate = new Date();
    newDate.setTime(timeStamp);
    Date.prototype.pattern=function(fmt) {
        var o = {
            "M+" : this.getMonth()+1, //月份
            "d+" : this.getDate(), //日
            "h+" : this.getHours(), //小时
            "H+" : this.getHours(), //小时
            "m+" : this.getMinutes(), //分
            "s+" : this.getSeconds(), //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S" : this.getMilliseconds() //毫秒
        };
        var week = {
            "0" : "/u65e5",
            "1" : "/u4e00",
            "2" : "/u4e8c",
            "3" : "/u4e09",
            "4" : "/u56db",
            "5" : "/u4e94",
            "6" : "/u516d"
        };
        if(/(y+)/.test(fmt)){
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        if(/(E+)/.test(fmt)){
            fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
        }
        for(var k in o){
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return fmt;
    }

    return newDate.pattern("yyyy-MM-dd hh:mm:ss");
};
/*编辑保存
* */
$("#queding").click(function () {
    var data = {};
    data.id =
    data.user=readData("USER_KEY").name;
    data.token=readData("USER_KEY").token;
    data.title=$("#biaoti").val();
    data.info = Url;
    data.unit_id=$("#unit_second").val();
    data.creater=$("#cjr").val();
    data.createtime=$("#cjrq").val();
    data.is_push = $("#push input[type=radio] checked").val();
    data=JSON.stringify(data);
    var settings = {
        "url":"/editplanUrl",
        "method": "POST",
        "data":data,
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.code==0){
            $("#bj_trq"+id).remove();
            hquser()
        }else{
            alert(response.msg);
        }
    });
})

/*新增保存
 * */
$("#quedings").click(function () {
    var data = {};
    data.user=readData("USER_KEY").name;
    data.token=readData("USER_KEY").token;
    data.title=$("#biaoti").val();
    data.info = Url;
    data.unit_id=$("#unit_second").val();
    data.creater=$("#cjr").val();
    data.createtime=$("#cjrq").val();
    data.is_push = $("#push input[type=radio] checked").val();
    data=JSON.stringify(data);
    var settings = {
        "url":"/editplanUrl",
        "method": "POST",
        "data":data,
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.code==0){
            $("#bj_trq"+id).remove();
            hquser()
        }else{
            alert(response.msg);
        }
    });
})
/*删除*/
function shanchu(id){
    win.confirm('提示','确认删除删除后无法恢复',function(r){
        if(r == true){
            var dataArr = [id];
            var settings = {
                "url":"/delete_plan",
                "method": "POST",
                "data":{
                    user: readData("USER_KEY").name,
                    token: readData("USER_KEY").token,
                    id:JSON.stringify(dataArr)
                },
            };
            $.ajax(settings).done(function (response) {
                console.log(response);
                if (response.code==0){
                    win.alert("提示",response.msg);
                    $("#bj_trq"+id).remove();
                    hquser()
                }else{
                    win.alert("提示",response.msg);
                }
            });
        }else{
            return false;
        }

    })
}

function push(id) {
    win.confirm('提示','确认推送？',function(r) {
        if (r == true) {
            var Data = {};
            Data.user = readData("USER_KEY").name;
            Data.token = readData("USER_KEY").token;
            Data.id = id;
            console.log(Data);
            var settings = {
                "url": "/push_plan",
                "method": "POST",
                "data": Data,
            };
            $.ajax(settings).done(function (response) {
                console.log(response);
                if (response.code == 0) {
                    win.confirm("提示", response.msg,function (data) {
                        if(data==true){
                            hquser();
                        }else{
                            return false;
                        }
                    });
                } else {
                    win.alert("提示", response.msg);
                }
            });
        }else{
            return false;
        }
    })
}