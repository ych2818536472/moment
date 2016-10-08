window.onload=function(){
	var hehe=window.location.search.substring(4);
	var sec=document.getElementsByTagName("body")[0];
	$.get("../erji.json",function(data){
			var data=eval(data);
			console.log(data.length)
			for(var i=0;i<data.length;i++){
				if(data[i].id==hehe){
					index=i;
				}
			}			
			var htmls='';
			
			
				var obj=data[index];
				console.log(obj.src);
				htmls+="<ul class='sec1'><li class='sec1-l'><img src='"+obj.src+"'/></li><li class='sec1-b'>"
				+obj.name+"</li><ul>"
				
			
			console.log(htmls);
			sec.innerHTML+=htmls;
	
		})
		function ajax(url, fnSucc, fnFail) {
				var oAjax = null;
				if (window.XMLHttpRequest) {
					oAjax = new XMLHttpRequest();
				} else {
					oAjax = new ActiveXObject('Micsofot.XMLHTTP');
				}
				oAjax.open('GET', url, true)
				oAjax.send()
				oAjax.onreadystatechange = function() {
					if (oAjax.readyState == 4) {
						if (oAjax.status == 200) {
							fnSucc(oAjax.responseText)
						} else {
							if (fnFail) {
								fnFail()
							}
						}
					}
				}
			}
}
