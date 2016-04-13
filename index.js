// window.onload=function(){
function loadAll() {
	var list = document.getElementById("list");
	if (localStorage.length > 0) {
		var result = "<table border='1'>";
		result += "<tr><td>姓名</td><td>手机</td><td>公司</td></tr>";
		for (var i = 0; i < localStorage.length; i++) {
			var mobilephone = localStorage.key(i);
		console.log(mobilephone,3333)
			var str = localStorage.getItem(mobilephone);
		console.log(str,11)
			var contact = JSON.parse(str);

			result += "<tr><td>" + contact.user_name + "</td><td>" + contact.mobilephone + "</td><td>" + contact.company + "</td></tr>";
		}
		result += "</table>";
		list.innerHTML = result;
	} else {
		list.innerHTML = "目前数据为空，赶紧开始加入联系人吧";
	}
}
//保存数据
	function save(){ 
	localStorage.clear();//清空缓存
		var contact = new Object; 
		contact.user_name = document.getElementById("user_name").value; 
		contact.mobilephone = document.getElementById("mobilephone").value; 
		contact.company = document.getElementById("company").value; 
		var str = JSON.stringify(contact); 
		localStorage.setItem(contact.mobilephone,str); 
		
	loadAll(); 
		} 
	function find(){
		var search_phone = document.getElementById("search_phone").value; 
		var name = localStorage.getItem(search_phone);
		var contact = JSON.parse(name);
		
		console.log(typeof(contact))
		var find_result = document.getElementById("find_result"); 
		find_result.innerHTML = search_phone + "的机主是：" + contact.user_name; 
		}
//将所有存储在localStorage中的对象提取出来，并展现到界面上 
// }