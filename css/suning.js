// tit效果
{
    let tit = document.querySelectorAll(".top_box1");
    let tittan = document.querySelectorAll(".top_top0");

    let obj = tittan[0];
    tit.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            tittan[index].style.display = "block";
            obj = tittan[index];
        }
        ele.onmouseleave = function () {
            tittan[index].style.display = "none";
        };
    });
}
//banner_tit
{
    let bannernavtan = document.querySelectorAll(".menu-content");
    let bannernavli = document.querySelectorAll(".banner_left1");

    let obj = bannernavtan[0];
    bannernavli.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            bannernavtan[index].style.display = "block";
            obj = bannernavtan[index];
        }
        ele.onmouseleave = function () {
            bannernavtan[index].style.display = "none";
        };
    });
}
//banner轮播
{
    //获取目标对象
    let imgs = document.querySelectorAll(".banner_pimg");           //获取图片所在盒子
    let pagers = document.querySelectorAll(".banner_lunbo_dian");   //获取轮播点
    let banners = document.querySelectorAll(".banner");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    console.log(next,prev)  

    //轮播点的动画效果
    pagers.forEach(function (ele, index) {                          //遍历所有轮播点
        ele.onclick = function () {                                 //给轮播点设置鼠标点击事件
            for (let i = 0; i < imgs.length; i++) {                 //循环，判断图片的length
                imgs[i].classList.remove("active");                 //给当前正在遍历图片所在盒子移除类名
                pagers[i].classList.remove("active");               //给当前正在遍历轮播点移除类名
            }
            this.classList.add("active");                           //给当前正在遍历轮播点添加类名
            imgs[index].classList.add("active");                    //给当前正在遍历图片的盒子添加类名
            n = index;                                              //将当前图片的length赋给n
        };
    });

    //图片的动画效果
    let n = 0;                                                      //定义变量n
    let t = setInterval(move, 3000);                                //声明t，setInterval调用move函数，每隔3秒执行一次

    function move() {                                               //声明一个move函数
        n++;                                                        //图片没轮播一下，n自加一次
        if (n === imgs.length) {                                    //当n达到图片length最大值，令n=0
            n = 0;
        }
        if (n < 0) {                                                //当n<0时，显示最后一张图片
            n = imgs.length - 1;
        }
        for (let i = 0; i < imgs.length; i++) {                     //循环，判断图片的length
            imgs[i].classList.remove("active");                     //给当前正在遍历图片所在盒子移除类名
            pagers[i].classList.remove("active");                   //给当前正在遍历轮播点移除类名
        }
        imgs[n].classList.add("active");                            //给当前正在遍历轮播点添加类名
        pagers[n].classList.add("active");                          //给当前正在遍历图片的盒子添加类名
    }


    //鼠标移入移除效果
    banners.onmouseenter = function () {                              //鼠标移入图片移除t动画
        clearInterval(t);
    };
    banners.onmouseleave = function () {                               //鼠标移除图片添加t动画
        t = setInterval(move, 3000);
    };

    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    prev.onclick = function () {
        n = n - 2;
        if (flag) {
            flag = false;
            move();
        }
    };
//     imgs.forEach(function(ele,index){
//         ele.addEventListener("transitionend",function(){
//             flag=true;
//         })
// })
}
//banner文字滚动
{
    let inner=document.querySelector(".banner_right2active");
    let contents=document.querySelectorAll(".banner_zhong a");
    let box=document.querySelector(".banner_right2");
    let n=1;
    let t=setInterval(move,3000);
    function move(){
        n++;
        inner.style.transition="all 1s";
        inner.style.marginTop=n*-102+"px";
    }
    inner.addEventListener("transitionend",function(){
        if(n===3){
            inner.style.transition="none";
            inner.style.marginTop="-102px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginTop="-306px";
            n=2;
        }
    })
    box.onmouseenter=function () {
        clearInterval(t);
    };
    box.onmouseleave=function () {
        t=setInterval(move,3000);
    };
}
//大聚惠
{
    let inner = document.querySelector(".djh_inner");
    let prev = document.querySelector(".djhbtn1");
    let next = document.querySelector(".djhbtn2");

    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n--;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = -1000 + "px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = -3000 + "px";
            n = 3;
        }
    })
}
//topbar效果
{
    let titbar = document.querySelectorAll(".topbar2");
    let tittanbar = document.querySelectorAll(".div0006");

    let objbar = tittanbar[0];
    titbar.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            objbar.style.display = "none";
            tittanbar[index].style.display = "block";
            objbar = tittanbar[index];
        }
        ele.onmouseleave = function () {
            tittanbar[index].style.display = "none";
        };
    });
}
//左侧导航
{
    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".leftbar");

    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > 1000) {
            topbar.style.display = "block";
        } else {
            topbar.style.display = "none";
        }
        if (st > 2500) {
            leftbar.style.display = "block";
        } else {
            leftbar.style.display = "none";
        }
    }

    // let tips = document.querySelectorAll(".");
    // let containers = document.querySelectorAll(".");
    // tips.forEach(function (ele, index) {
    //     ele.onclick = function () {
    //         let ot = containers[index].offsetTop - 50;
    //         let now = document.documentElement.scrollTop;
    //         let time = 0;
    //         let speed = (ot - now) / 8;
    //         let t = setInterval(function(){
    //             time += 25;
    //             now += speed;
    //             if (time === 200) {
    //                 clearInterval(t);
    //             }
    //             document.documentElement.scrollTop = now;
    //         },25)
    //     }
    // });

    window.addEventListener("scoll", function () {
        let st = document.documentElement.scrollTop;
        for (let i = 0; i < containers.length; i++) {
            if (st > containers[i].offsetTop - 50) {
                for (let i = 0; i < tips.length; i++) {
                    tips.classList.remove("active2");
                }
                tips.classList.add("active2");
            }
        }
    });
}
//右侧
{
    let titbar = document.querySelectorAll(".righttit31");
    let tittanbar = document.querySelectorAll(".rightbart");

    let objbar = tittanbar[0];
    titbar.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            objbar.style.display = "none";
            tittanbar[index].style.display = "block";
            objbar = tittanbar[index];
        }
        ele.onmouseleave = function () {
            tittanbar[index].style.display = "none";
        };
    });
}
//回到顶部
{
    let totop = document.querySelector(".totop");     //获取返回顶部对象

    totop.onclick = function () {                        //给其设置点击事件
        let st = document.documentElement.scrollTop;     //声明变量为滚轮距文档顶部的距离
        let t = setInterval(function () {                //声明一个动画
            st -= 200;                                   //让距离每25毫秒减少200px
            if (st < 0) {
                st = 0;                                   //当距离减到为﹣时，令距离为0；并停止动画
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;        //把每次减200px的值赋值给st
        }, 25);
    };
}
{
    let totops = document.querySelector(".totops");     //获取返回顶部对象

    totops.onclick = function () {                        //给其设置点击事件
        let st = document.documentElement.scrollTop;     //声明变量为滚轮距文档顶部的距离
        let t = setInterval(function () {                //声明一个动画
            st -= 200;                                   //让距离每25毫秒减少200px
            if (st < 0) {
                st = 0;                                   //当距离减到为﹣时，令距离为0；并停止动画
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;        //把每次减200px的值赋值给st
        }, 25);
    };
}
//排行榜
{
    let inner = document.querySelector(".phb_inner");
    let prev = document.querySelector(".phbbtn1");
    let next = document.querySelector(".phbbtn2");
    let pagers = document.querySelectorAll(".phbpager");
    let n = 1;
    let a = 0;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            a++;
            console.log(a);
            // if (a === pagers.length) {
            //     pagers[a].classList.add("phb_active");
            //     pagers[a - 1].classList.remove("phb_active");
            // }
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -390 * n + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n--;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -390 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = -390 + "px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = -1170 + "px";
            n = 3;
        }
    })
}
//视频
{
    let inner = document.querySelector(".gg_right_inner");
    let prev = document.querySelector(".gg_right_pager1");
    let next = document.querySelector(".gg_right_pager2");

    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -390 * n + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n--;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -390 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = -390 + "px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = -1170 + "px";
            n = 3;
        }
    })
}
//乐拼购
{
    let inner = document.querySelector(".bq_contentinner");
    let prev = document.querySelector(".bq_btn1");
    let next = document.querySelector(".bq_btn2");

    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -540 * n + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n--;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -540 * n + "px";
        }
    };
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = -540 + "px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = -1620 + "px";
            n = 3;
        }
    })
}
//楼层
{
    let tips = document.querySelectorAll(".leftbar3");
    let containers = document.querySelectorAll(".container");
    let flag = true;
    tips.forEach(function (ele, index) {	//遍历  当前点击元素
        ele.onclick = function () {
            flag = false;
            let ot = containers[index].offsetTop - 100;	//对应楼层距离文档顶部的值
            let now = document.documentElement.scrollTop;   //当前滚动高度
            let speed = (ot - now) / 10;	//速度
            let time = 0;
            let t = setInterval(function () {
                time += 20;
                now += speed;
                flag = true;
                if (time === 200) {
                    clearInterval(t);
                }
                document.documentElement.scrollTop = now;  //把当前值赋给scrollTop
            }, 20)
        }
    });
    //监测滚动时是否超过楼层高度
    window.addEventListener("scroll", function () {
        let st = document.documentElement.scrollTop;
        for (let i = 0; i < containers.length; i++) {    //遍历下每个楼层
            if (st > containers[i].offsetTop - 150) {    //判断是否大于楼层高度
                for (let i = 0; i < tips.length; i++) {     //循环
                    tips[i].classList.remove("leftbaractive");
                }
                tips[i].classList.add("leftbaractive");
            }
        }
    })
}