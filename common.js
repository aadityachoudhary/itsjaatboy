function getSessionData(){}function checkLogin(e){return $.ajax({url:"http://localhost/entrancei/ajaxs/getSessionData",type:"post",data:{},dataType:"json",success:function(t){if("success"!=t.result)return window.location="http://localhost/entrancei/users/login?referer="+e,!1;window.location=e}}),!1}function getRandomString(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function getRandomString(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}document.querySelector(".mini-photo-wrapper").addEventListener("mouseover",function(){document.querySelector(".menu-container").classList.toggle("active")}),document.body.addEventListener("click",function(){document.querySelector(".menu-container").classList.remove("active")}),document.querySelector(".nav-menu").addEventListener("mouseover",function(){document.querySelector(".menu-container").classList.remove("active")});

function displayContactPhone() 
{           
	var x = document.getElementById("call-back-data-id");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
}