/**
 * Created by Administrator on 2017/10/14 0014.
 */
define("getId",function () {
function gid() {

    var oGotop = document.getElementById("gotop");
    var oNav = document.getElementById("navTop");
    var oLis = oNav.getElementsByTagName("li");
    var oAboutMe = document.getElementById("about_me");
    var oPictures = document.getElementById("my_pictures");
    var oBlog = document.getElementById("my_blog");
    var oContact = document.getElementById("contact");
    var oSkills = document.getElementById("my_skills");
    return oGotop,oNav,oLis,oAboutMe,oPictures,oBlog,oContact,oSkills;
    alert(123)
}
  return gid();
});