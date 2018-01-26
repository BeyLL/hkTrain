
var getunitHtml = function(unit){
    var unitHtml='';
    unitHtml += "<option value=''>- - - - 请选择- - - - </option>";
    for(var i=0;i<unit.length;i++){
        unitHtml += "<option value='"+unit[i].id+"'>"+unit[i].name+"</option>";
    }
    return unitHtml;
}
//
// var getTargetHtml = function(target){
//     var html = '';
//     var name="";
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<target.length;i++){
//
//         html += "<option value='"+target[i].Id+"'>"+target[i].name+"</option>";
//     }
//     return html;
// }
//
// var getbuteHtml = function(target,arr){
//     var html = '';
//     var name ="";
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<target.length;i++){
//         for(var j=0;j<arr.length;j++){
//             if(target[i].Id ==arr[j]){
//                 name = target[i].name;
//                 html += "<option value='"+target[i].Id+"'>"+target[i].name+"</option>";
//             }
//         }
//     }
//     return html;
// };
// var gettypeHtml = function(target,brr){
//     var html = '';
//     var name ="";
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<target.length;i++){
//         for(var j=0;j<brr.length;j++){
//             if(target[i].Id == brr[j]){
//                 name = target[i].name;
//                 html += "<option value='"+target[i].Id+"'>"+name+"</option>";
//             }
//
//         }
//     }
//     return html;
// };
// var gettaskHtml = function(target,crr){
//     var html = '';
//     var name ="";
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<target.length;i++){
//         for(var j=0;j<crr.length;j++){
//             if(target[i].Id == crr[j]){
//                 name = target[i].name;
//                 html += "<option value='"+target[i].Id+"'>"+name+"</option>";
//             }
//
//         }
//     }
//     return html;
// };
// var getUserListHtml = function(userlist){
//     var userlists = [];
//     for(var i = 0;i<userlist.length;i++){
//         if(userlist[i] == null || userlist[i] == '' || userlist[i] == "undefined"){
//             ;
//         }else{
//             userlists.push(userlist[i]);
//         }
//     }
//     var html = "<ul class='tree'>";
//     var foo = function(data,n){
//         for(var i=0;i<data.length;i++){
//             html += "<li style='padding-left:"+n*20+"px'><span> <img src='assets/images/mgr_pa12.gif' alt=''/>"+data[i].typeName+"</span><ul id='"+data[i].Id+"'>";
//             if(data[i].list && data[i].list.length > 0){
//                 n += 1;
//                 foo(data[i].list,n);
//                 n -= 1;
//             }else{
//                 if(data[i].userlist && data[i].userlist.length > 0){
//                     for(var a=0;a<data[i].userlist.length;a++){
//                         html += "<li style='width:300px'><a href='Z_configusersHtml?id="+data[i].userlist[a].Id+"'>"+data[i].userlist[a].username+"</a></li>";
//                     }
//                 }
//             }
//             html += "</ul></li>";
//         }
//     }
//     foo(userlists,1);
//     html +='</ul>';
//     return html;
// }
//
// /*var getAirListHtml = function(userlist,num){
//     var html = "<a href='#' class='li-all'> <i> > </i> 空情源列表</a>";
//     html += "<ul>";
//     var foo = function(data,n){
//
//         for(var i = 0;i<data.length;i++){
//             var zz =">",c='>';
//             console.log(data[i].hasOwnProperty("child"));
//             if(data[i].hasOwnProperty("child") && data[i].child.length > 0){
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//                     html += "<li id='lis"+data[i].id+"' style='display:none'> <i> "+zz+"</i><input id='ins"+data[i].id+"' type='checkbox' name='kqys'  value='"+data[i].id+"'/>"+data[i].name+"</li><ul id='uls"+data[i].id+"'>";
//                 }else{
//                     html += "<li id='li"+data[i].id+"'> <i> "+zz+"</i><input type='checkbox' id='in"+data[i].id+"' name='kqy'  value='"+data[i].id+"'/>"+data[i].name+"</li><ul id='ul"+data[i].id+"'>";
//                 }
//
//             }else{
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//                     html += "<li id='lis"+data[i].id+"' style='display:none'> <i> "+zz+"<input id='ins"+data[i].id+"' type='checkbox'  name='kqys' value='"+data[i].id+"'/></i>"+data[i].name+"</li>";
//                 }else{
//                     html += "<li id='li"+data[i].id+"'> <i> "+zz+"<input type='checkbox' id='in"+data[i].id+"'  name='kqy' value='"+data[i].id+"'/></i>"+data[i].name+"</li>";
//                 }
//                 n += 1;
//                 foo(data[i].child,n);
//                 n -= 1;
//                 html+="</ul>";
//                 console.log(n);
//
//             }
//         }
//     };
//     foo(userlist,1);
//     html +='</ul>';
//     return html;
// };*/
// var getAirListHtml = function(userlist,num){
//     var html = "<a href='#' class='li-all'> <i> > </i> 空情源列表</a>";
//     html += "<ul>";
//     var foo = function(data,n){
//         for(var i = 0;i<data.length;i++){
//             var zz =">",c='>';
//             if(data[i].hasOwnProperty("child") && data[i].child.length > 0){
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//                     html += "<li id='lis"+data[i].id+"' style='display:none'> <i> "+zz+"</i><input id='ins"+data[i].id+"' type='checkbox' name='kqys'  value='"+data[i].id+"'/>"+data[i].name+"</li><ul id='uls"+data[i].id+"'>";
//                 }else{
//                     html += "<li id='li"+data[i].id+"'> <i> "+zz+"</i><input type='checkbox' id='in"+data[i].id+"' name='kqy'  value='"+data[i].id+"'/>"+data[i].name+"</li><ul id='ul"+data[i].id+"'>";
//                 }
//                 n += 1;
//                 foo(data[i].child,n);
//                 n -= 1;
//                 html+="</ul>";
//
//             }else{
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//
//                     html += "<li id='lis"+data[i].id+"' style='display:none'> <i> "+zz+"<input id='ins"+data[i].id+"' type='checkbox'  name='kqys' value='"+data[i].id+"'/></i>"+data[i].name+"</li>";
//                 }else{
//
//                     html += "<li id='li"+data[i].id+"'> <i> "+zz+"<input type='checkbox' id='in"+data[i].id+"'  name='kqy' value='"+data[i].id+"'/></i>"+data[i].name+"</li>";
//                 }
//
//             }
//
//         }
//     };
//     foo(userlist,1);
//     html +='</ul>';
//
//     return html;
//
// };
// var getAirListHtml1 = function(userlist,num){
//     var html = "";
//     html += "<ul>";
//     var foo = function(data,n){
//         for(var i = 0;i<data.length;i++){
//             var zz =">",c='>';
//             if(data[i].hasOwnProperty("child") && data[i].child.length > 0){
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//                     html += "<li id='lis58"+data[i].id+"' style='display:none'> <i> "+zz+"</i><input id='ins58"+data[i].id+"' type='checkbox' name='kqys'  value='"+58+data[i].id+"'/>"+data[i].name+"</li><ul id='uls"+data[i].id+"'>";
//                 }else{
//                     html += "<li id='li58"+data[i].id+"'> <i> "+zz+"</i><input type='checkbox' id='in58"+data[i].id+"' name='kqy'  value='"+58+data[i].id+"'/>"+data[i].name+"</li><ul id='ul"+data[i].id+"'>";
//                 }
//                 n += 1;
//                 foo(data[i].child,n);
//                 n -= 1;
//                 html+="</ul>";
//
//             }else{
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//
//                     html += "<li id='lis58"+data[i].Id+"' style='display:none'> <i> "+zz+"<input id='ins58"+data[i].Id+"' type='checkbox'  name='kqys' value='"+58+data[i].Id+"'/></i>"+data[i].username+"</li>";
//                 }else{
//
//                     html += "<li id='li58"+data[i].Id+"'> <i> "+zz+"<input type='checkbox' id='in58"+data[i].Id+"'  name='kqy' value='"+58+data[i].Id+"'/></i>"+data[i].username+"</li>";
//                 }
//
//             }
//
//         }
//     };
//     foo(userlist,1);
//     html +='</ul>';
//
//     return html;
//
// };
// var getAirListHtml2 = function(userlist,num){
//     var html = "<a href='#' class='li-all'> <i> > </i> 空情用户和空情源列表</a>";
//     html += "<ul>";
//     var foo = function(data,n){
//         for(var i = 0;i<data.length;i++){
//             var zz =">",c='>';
//             if(data[i].hasOwnProperty("child") && data[i].child.length > 0){
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//                     html += "<li id='lis"+data[i].id+"' style='display:none'> <i> "+zz+"</i><input id='ins"+data[i].id+"' type='checkbox' name='kqys'  value='"+data[i].id+"'/>"+data[i].name+"</li><ul id='uls"+data[i].id+"'>";
//                 }else{
//                     html += "<li id='li"+data[i].id+"'> <i> "+zz+"</i><input type='checkbox' id='in"+data[i].id+"' name='kqy'  value='"+data[i].id+"'/>"+data[i].name+"</li><ul id='ul"+data[i].id+"'>";
//                 }
//                 n += 1;
//                 foo(data[i].child,n);
//                 n -= 1;
//                 html+="</ul>";
//             }else{
//                 for(var a=0;a<n;a++){
//                     zz += c;
//                 }
//                 if(num == 1){
//                     html += "<li id='lis"+data[i].id+"' style='display:none'> <i> "+zz+"<input id='ins"+data[i].id+"' type='checkbox'  name='kqys' value='"+data[i].id+"'/></i>"+data[i].name+"</li>";
//                 }else{
//                     html += "<li id='li"+data[i].id+"'> <i> "+zz+"<input type='checkbox' id='in"+data[i].id+"'  name='kqy' value='"+data[i].id+"'/></i>"+data[i].name+"</li>";
//                 }
//             }
//         }
//     };
//     foo(userlist,1);
//     html +='</ul>';
//     return html;
// };
//
// var getUserTypeListHtml = function(data){
//     var dataA = [];
//     for(var i=0;i<data.length;i++){
//         data[i].list = [];
//         if(data[i].typeGrade == 0){
//             dataA.push(data[i]);
//         }else{
//             for(var a = 0;a<dataA.length;a++){
//                 if(dataA[a].Id == data[i].typeGrade){
//                     dataA[a].list.push(data[i]);
//                 }
//             }
//         }
//     }
//     var html = "<ul class='list'>";
//     var fosos = function(d){
//         for(var c=0;c< d.length;c++){
//             if(d[c].list && d[c].list.length > 0){
//                 html += "<li class='lista'>"+d[c].typeName+"</li>";
//                 html += "<ul class='list_2'>";
//                 fosos(d[c].list);
//                 html += "</ul>";
//             }else{
//                 html += "<li class='listb'><a href='Z_typePriviHtml?id="+d[c].Id+"'>"+d[c].typeName+"</a></li>";
//             }
//         }
//     }
//     fosos(dataA);
//     html += '</ul>';
//     return html;
// };
//
// //添加空情源基础数据下拉列表
// var basicDataOptionHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
//
// //添加空情源上级空情源下拉列表
// var basicDataAirHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].Id+"'>"+data[i].airname+"</option>";
//
//     }
//     return html;
// };
//
// //添加空情源上级空情源下拉列表
// var resDataAirHtml = function(data){
//
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].Id+"'>"+data[i].airname+"</option>";
//     }
//     return html;
// };
// var redDataAirHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
// //添加下拉列表
// var directionHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
// //备选空情源列表
// var airHtml = function(data){
//     var html = '';
//     html += "<option value=''>****</option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].airname+"</option>";
//     }
//     return html;
// };
//
// var lvHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
// var areaHtml = function(data){
//     var html = '';
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
// var airsecreHtml = function(data){
//     var html = '';
//     html += "<option value=''></option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].info+"</option>";
//     }
//     return html;
// };
//
// var airoomtypeHtml = function(data){
//     var html = '';
//     html += "<option value=''></option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
// var usestatusHtml = function(data){
//     var html = '';
//     html += "<option value=''></option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
// var airclassHtml = function(data){
//     var html = '';
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
// var propertyHtml = function(data){
//     var html = '';
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].property+"</option>";
//     }
//     return html;
// };
// var taskHtml = function(data){
//     var html = '';
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].task+"</option>";
//     }
//     return html;
// };
// var tuanHtml = function(data){
//     var html = '';
//     html += "<option value=''></option>";
//     for(var i=0;i<data.length;i++){
//         if(data[i].tuan != "") {
//             html += "<option value='" + data[i].id + "'>" + data[i].tuan + "</option>";
//         }
//     }
//     return html;
// };
// var yingHtml = function(data){
//     var html = '';
//     html += "<option value=''></option>";
//     for(var i=0;i<data.length;i++){
//         if(data[i].ying != "") {
//             html += "<option value='" + data[i].id + "'>" + data[i].ying + "</option>";
//         }
//     }
//     return html;
// };
// var eduticeHtml = function(data){
//     var html = '';
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].edutice+"</option>";
//     }
//     return html;
// };
// var typeHtml = function(data){
//     var html = '';
//     html += "<option value=''></option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].type+"</option>";
//     }
//     return html;
// };
//
// var getTypehtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
// var getUsers = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].Id+"'>"+data[i].username+"</option>";
//     }
//     return html;
// }
// var gehtml = function(data){
//     var html = '';
//     html += "<option value=''></option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].name+"</option>";
//     }
//     return html;
// };
//
//
// var userTypeDataHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].Id+"'>"+data[i].typeName+"</option>";
//     }
//     return html;
// };
//
// var userinfoDataHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].Id+"'>"+data[i].username+"</option>";
//     }
//     return html;
// };
// var typeDataHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].type+"</option>";
//     }
//     return html;
// };
// var propertyDataHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].property+"</option>";
//     }
//     return html;
// };
//
// var tasktyDataHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].task+"</option>";
//     }
//     return html;
// };
//
// var eduticeDataHtml = function(data){
//     var html = '';
//     html += "<option value=''>- - - - 请选择- - - - </option>";
//     for(var i=0;i<data.length;i++){
//         html += "<option value='"+data[i].id+"'>"+data[i].edutice+"</option>";
//     }
//     return html;
// };