!function(){function a(a){for(var n=a.length,e,u;0!==n;)u=Math.floor(Math.random()*n),n-=1,e=a[n],a[n]=a[u],a[u]=e;return a}var n=["Kitachino600","Mikkeller600","Dogfish600","EvilTwin600","HopNosh600","Nitro600","OmmeGang600","Resin600","Smuttynose600","ShinerBock600","Gonzo600","Brooklyn"],e=$(".img1"),u=$(".img2"),g=$(".overlay"),s=[],c=1,i=[],d,f,r;a(n),g.click(function(){g.addClass("overlay-close"),e.css("background-image","url(img/"+n[0]+".png)").delay(200).fadeIn(400),u.css("background-image","url(img/"+n[1]+".png)").delay(400).fadeIn(400)}),e.click(function(){switch(c++,c){case 2:s.push(n[0]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[2]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+n[3]+".png)").delay(100).fadeIn(400)});break;case 3:s.push(n[2]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[4]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+n[5]+".png)").delay(100).fadeIn(400)});break;case 4:s.push(n[4]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[6]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+n[7]+".png)").delay(100).fadeIn(400)});break;case 5:s.push(n[6]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[8]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[0]+".png)").delay(100).fadeIn(400)});break;case 6:s.push(n[8]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[9]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[1]+".png)").delay(100).fadeIn(400)});break;case 7:s.push(n[9]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[10]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[2]+".png)").delay(100).fadeIn(400)});break;case 8:s.push(n[10]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[11]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[3]+".png)").delay(100).fadeIn(400)});break;case 9:s.push(n[11]),e.fadeOut(100,function(){e.css("background-image","url(img/"+s[4]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[5]+".png)").delay(100).fadeIn(400)});break;case 10:s.push(s[4]),i.push(s[5]),e.fadeOut(100,function(){e.css("background-image","url(img/"+s[6]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[7]+".png)").delay(100).fadeIn(400)});break;case 11:s.push(s[6]),i.push(s[7]),e.fadeOut(100,function(){e.css("background-image","url(img/"+s[8]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[9]+".png)").delay(100).fadeIn(400)});break;case 12:d=s[8],f=s[9],e.fadeOut(100,function(){e.css("background-image","url(img/"+i[0]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+i[1]+".png)").delay(100).fadeIn(400)});break;case 13:r=i[0],sessionStorage.firstResult=JSON.stringify(d),sessionStorage.secondResult=JSON.stringify(f),sessionStorage.thirdResult=JSON.stringify(r),location.href="results.html"}}),u.click(function(){switch(c++,c){case 2:s.push(n[1]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[2]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+n[3]+".png)").delay(100).fadeIn(400)});break;case 3:s.push(n[3]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[4]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+n[5]+".png)").delay(100).fadeIn(400)});break;case 4:s.push(n[5]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[6]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+n[7]+".png)").delay(100).fadeIn(400)});break;case 5:s.push(n[7]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[8]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[0]+".png)").delay(100).fadeIn(400)});break;case 6:s.push(s[0]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[9]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[1]+".png)").delay(100).fadeIn(400)});break;case 7:s.push(s[1]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[10]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[2]+".png)").delay(100).fadeIn(400)});break;case 8:s.push(s[2]),e.fadeOut(100,function(){e.css("background-image","url(img/"+n[11]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[3]+".png)").delay(100).fadeIn(400)});break;case 9:s.push(s[3]),e.fadeOut(100,function(){e.css("background-image","url(img/"+s[4]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[5]+".png)").delay(100).fadeIn(400)});break;case 10:s.push(s[5]),i.push(s[4]),e.fadeOut(100,function(){e.css("background-image","url(img/"+s[6]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[7]+".png)").delay(100).fadeIn(400)});break;case 11:s.push(s[7]),i.push(s[6]),e.fadeOut(100,function(){e.css("background-image","url(img/"+s[8]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+s[9]+".png)").delay(100).fadeIn(400)});break;case 12:d=s[9],f=s[8],e.fadeOut(100,function(){e.css("background-image","url(img/"+i[0]+".png)").fadeIn(300)}),u.fadeOut(100,function(){u.css("background-image","url(img/"+i[1]+".png)").delay(100).fadeIn(400)});break;case 13:r=i[1],sessionStorage.firstResult=d,sessionStorage.secondResult=f,sessionStorage.thirdResult=r,location.href="results.html"}})}();