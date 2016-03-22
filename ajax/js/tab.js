var tab = window.tab||{};
		console.log(tab)
		tab = {
			qh:function(option){
				var defau = {
					tabelem:null,
					conelem:null,
					_type:"hover",
					css:"active"
				}
				var opt = $.extend(defau,option)
				opt.tabelem[opt._type](function(){

					var index=$(this).index();
					opt.conelem.eq(index).show().siblings().hide();
					$(this).addClass(opt.css).siblings().removeClass(opt.css)

				})

			}
		}