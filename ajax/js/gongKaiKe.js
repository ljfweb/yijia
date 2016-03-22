/*近期视频*/
$.ajax({  
        url:"http://127.0.0.1:8124/ajax/gong_kai_ke.json",  
        dataType:'json',      
        success:gongKaiKe,
        timeout:3000  
    });  
function gongKaiKe(jso){
	var data = jso.data
	var odl=''
	for(var j in data){
		data[j].id
		console.log(data[j].title)
		odl+='<dl><dt><img src="img/tomcat.png"></dt><dd><p>'+data[j].title+'</p><span>讲师:'+data[j].teacher+'</span></dd></dl>'
	}
	$(".main_con_list").append(odl)
}
/*往期回顾*/
$.ajax({  
        url:"http://127.0.0.1:8124/ajax/gong_kai_ke_wang.json",  
        dataType:'json',      
        success:gongKaiKeWang,
        timeout:3000  
    });  
function gongKaiKeWang(jso){
	var data = jso.data
	var odl=''
	for(var j in data){
		data[j].id
		console.log(data[j].title)
		odl+='<dl><dt><img src="img/tomcat.png"></dt><dd><p>'+data[j].title+'</p><span>讲师:'+data[j].teacher+'</span></dd></dl>'
	}
	$(".main_con_list_t").append(odl)
}

function TabS(tab,tabEle,ocontent,conEle){
			var _this=this;
			this.tab=document.getElementById(tab)
			this.tabEle=this.tab.getElementsByTagName(tabEle)
			this.ocontent=document.getElementById(ocontent)
			this.conEle=this.ocontent.getElementsByTagName(conEle)
			for (var i = 0; i < this.tabEle.length; i++) {
				this.tabEle[i].index=i
				this.tabEle[i].ontouchstart=function(){
					_this.Alttab(this)
				}
			};
		}
		TabS.prototype = {
			Alttab:function(tabEle){
				for (var i = 0; i < this.tabEle.length; i++) {
					this.conEle[i].style.display="none"
					this.tabEle[i].style.background="#fff"
				};
				this.conEle[tabEle.index].style.display="block"
				this.tabEle[tabEle.index].style.background="#ccc"
			}
		}
new TabS("main_box_btn","div","main_con","div")

