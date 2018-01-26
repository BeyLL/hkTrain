/**
 * Created by Administrator on 2018/1/22.
 */


// var result = [];
var flag = false,
    bg = 0;
function getrole() {
    var data = {};
    data.user = readData("USER_KEY").name;
    data.token = readData("USER_KEY").token;
    data = JSON.stringify(data);
    $.ajax({
        url: "/checkUserPermissionByName",
        type: "post",
        dataType: "json",
        async: false,
        headers: {'Content-Type': 'application/json'},
        data: data,
        timeOut: 10000,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                console.log()
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
getrole();

getUnit();

//pidshi用来获取二级数据的
function getUnit() {
    $.ajax({
        url: "/getUnit",
        type: "post",
        dataType: "json",
        // async:false,
        data: null,
        timeOut: 10000,
        success: function (data) {
            console.log(data);
            if (data.code == 0) {
                var result = data.row;
                if (window.location)
                    var $ul = $(".introduce .nav");
                for (var i = 0; i < result.length; i++) {
                    var $li = $("<li></li>");
                    $li.append($("<div></div>").addClass("left").css("width", "180px").append($("<img/>").attr("src", "../assets/images/soldier.png")).append($("<span></span>").html("" + result[i].name))).append($("<div></div>").addClass("right").append($("<span></span>").addClass("icon-youjiantou iconfont")).attr("onclick", "openFirst(" + i + "," + result[i].id + ")")).append($("<ul></ul>").addClass("menu commands"));
                    $ul.append($li);
                }
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


function openFirst(type, id) {

    var $span = $('.introduce .nav  .right span');

    getSecond(type, id);//如果这个type值跟上一次的type是一样的，那么这个方法就不会执行

    if (!flag) {
        for (var j = 0; j < $span.length; j++) {
            if (type == j) {
                $(".menu").eq(type).css({"display": "block"});
                $span.eq(type).removeClass("icon-youjiantou iconfont").addClass("icon-youjiantou-copy iconfont");
            } else {
                bg = 0;
            }
        }
        flag = true;

    } else {
        for (var i = 0; i < $span.length; i++) {
            if (i == type) {
                $(".menu").eq(type).css({"display": "none"});
                $span.eq(type).removeClass("icon-youjiantou-copy iconfont").addClass("icon-youjiantou iconfont");
            } else {

            }
        }

        flag = !flag;
    }

}


function getSecond(type, id) {

    var $span = $('.introduce .nav li  .right span');
    console.log($span);


    if ($span.eq(type).attr("display") == 'block') {
        return;
    }
    var obj = readData("USER_KEY");
    var username = obj.name;
    var token = obj.token;
    console.log(username, token, id);
    var data = {
        user: username,
        token: token,
        pid: id
    };


    $.ajax({
        url: '/getfirstUnit',
        type: "POST",
        data: data,
        success: function (res) {
            var counts = res.row;
            var $uls = $(".introduce .nav li .menu");
            for (var i = 0; i < counts.length; i++) {
                var $li = $("<li></li>");
                $li.append($("<div></div>").addClass("left").css("width", "154px").append($("<img/>").attr("src", "../assets/images/soldier.png")).append($("<span></span>").html("" + counts[i].name))).append($("<div></div>").addClass("right").append($("<span></span>").addClass("icon-youjiantou iconfont")).attr("onclick", "openSecond(" + i + "," + counts[i].id + ")")).append($("<ul></ul>").attr("class", "base"));

                $uls.eq(type).append($li);
            }

        }
    })
}

//获取第三级数据
function getThird(type, id) {
    var obj = readData("USER_KEY");
    console.log(obj);
    var username = obj.name;
    var token = obj.token;
    console.log(username, token, id);
    var data = {
        user: username,
        token: token,
        pid: id
    };
    $.ajax({
        url: "/getfirstUnit",
        type: "POST",
        data: data,
        success: function (res) {
            var base = res.row;
            var $ul = $(".commands li .base");
            for (var i = 0; i < base.length; i++) {
                console.log(base);
                var $li = $("<li></li>");
                $li.append($("<div></div>").addClass("left").css("width", "110px").append($("<img/>").attr("src", "../assets/images/soldier.png")).append($("<span></span>").html("" + base[i].name))).attr("onclick", "openThird(" + i + "," + base[i].id + ")");
                $ul.eq(type).append($li)
            }
        }
    })
}


function openSecond(type, id) {
    getThird(type, id)
}


function openThird(type, id) {
    // getLimitLists(type, id)
    // window.location.href = 'person.html'
}

function logout() {
    win.confirm('提示', '确认退出？', function (r) {
        if (r == true) {
            var data = {};
            data.user = readData("USER_KEY").name;
            data.token = readData("USER_KEY").token;
            data = JSON.stringify(data);
            console.log(data);
            $.ajax({
                url: "/userLoginout",
                type: "post",
                dataType: "json",
                async: false,
                headers: {'Content-Type': 'application/json'},
                data: data,
                timeOut: 10000,
                success: function (data) {
                    console.log(data);
                    if (data.code == 0) {
                        win.alert("提示",data.msg);
                        window.location.href = "index.html";
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
        } else {
            return false;
        }
    })
}


// 通过权限获取
// function getLimitLists(type,id) {
//     var obj = readData("USER_KEY");
//     var user = obj.name;
//     var token = obj.token;
//     var data = {
//         user: user,
//         token: token,
//         role_id:id
//     };
//     $.ajax({
//         url: "/getRoleAction",
//         type: "POST",
//         success: function (result) {
//
//         }
//     })
// }







/*这个是表头权限*/
//获取展示的权限
getShow();
function getShow() {
    var obj = readData("USER_KEY");
    var user = obj.name;
    var token = obj.token;
    var id = obj.id;

    var data = {
        user: user,
        token: token,
        id: id
    };
    $.ajax({
        url: "/getRoleAction",
        type: "POST",
        data: data,
        success: function (result) {
            var res = result.data;
            var ary = [];
            for (var i = 0; i < res.length; i++) {
                ary.push(res[i].action_name)
            }
        }
    })
}

//根据相应的权限显示不同的框；
choiceBox();
function choiceBox(){
    var $as = $(".detail .choice li a");
    var array = [];
    for(var i=0;i<$as.length;i++){
            array.push($as.eq(i).html());

    }
}


