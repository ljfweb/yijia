/*视频分类列表*/
$.ajax({  
        url:"http://192.168.1.102:8080/vedio_cat_list.json",  
        dataType:'json',      
        success:gongKaiKe,
        timeout:3000  
    });  
function gongKaiKe(jso){
	var data = jso.data
	console.log(data)
	var odiv=''
	for(var j in data){
		data[j].id
		console.log(data[j].subject)
		odiv+='<div class="video_list_con"><div class="video_list_left"><img src="img/tomcat.png"></div><div class="video_list_right"><p>课程名称:'+data[j].subject+'</p><p>课时:'+data[j].classHour+'</p><p>讲师:'+data[j].teacher+'</p></div></div>'
	}
	$("#video_list").append(odiv)
}
