function scroll(){var o=window.pageYOffset;if(console.log("window.pageYOffset = "+o),o>130&&o>0){$(".navegacion").css({background:"#fff","border-bottom":"1px solid #ddd"}),$("#menu").css({color:"#333","margin-top":"28px"}),$("#menu a").css({color:"#333"}),$("#logo").css({color:"#333","margin-top":"25px"})}else $(".navegacion").css({background:"transparent","border-bottom":"none"}),$("#menu").css({color:"#fff","margin-top":"40px"}),$("#menu a").css({color:"#fff"}),$("#logo").css({color:"#fff","margin-top":"35px"})}window.onscroll=scroll;
$(document).ready(function(){$(".hey").css({display:"none"}),$(".load").css({display:"block",textaling:"center","padding-top":"250px"})}),$(window).load(function(){$(".load").fadeOut(1e3,function(){$(this).remove(),$("#load").css({display:"none"}),$(".hey").css({display:"block"})})});