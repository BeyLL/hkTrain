
//系统管理模块的选项卡切换
var $olis = $(".design .nav li");
var $per = $(".system .personList");
var $bt = $(".but span");
$olis.click(function(){
    $this = $(this);
    var index = $olis.index($this);
    $per.eq(index).addClass("perMiss").siblings().removeClass("perMiss");
    if(index==2||index==3){
        $bt.eq(0).hide()
        $bt.not($bt[0]).show()
    }else if(index==4){
        $bt.not($bt[2]).hide()
    }else{
          $bt.show()
    }
});