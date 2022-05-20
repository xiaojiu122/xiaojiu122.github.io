//等待dom执行完毕最后执行
$(document).ready(function () {
    // 鼠标悬浮，面板展开
    $(".SubMenu").slideUp();//进入后自动关闭，（解决进入默认下拉状态）


    // ************鼠标悬浮下拉面板模块*****************
    // 当事件处于打开状态时，无法触发新的事件
    $(".ul_box_start li").hover(function () {//当点击DIV
        $(".SubMenu").slideDown("100");//鼠标点击色块，执行下拉
    });

    $(".Box").hover(function () {//当鼠标离开色块(Box)
        $(".SubMenu").stop().slideUp("100");//鼠标离开色块，执行上拉
    });





    //定义：当鼠标悬浮于li上时，将背景设为黄色
    $('.ul_box_start li').hover(function () {
        $(this).toggleClass("styles");

        //将li中的ZH文字颜色设置为黄色
        $(".ul_box_start li").hover(function () {
            $(this).children('a').css('color', '#eec254');
        },
            function () {
                $(this).children('a').css('color', '#c9c9dd');
            }
        );
    });


    // 将li中的EN文字颜色设置为黄色
    $(".ul_box_start li").hover(function () {
        $(this).children('a').children('p').css('color', '#eec254');
    },
        function () {
            $(this).children('a').children('p').css('color', '#c9c9dd');
        }
    );

    //顶部广告条
    $(".banner,.Banner_Sub a img").hover(function () {
        $('.Banner_Sub').children('a').children('img').css('display', 'block');

    },
        function () {
            $('.Banner_Sub').children('a').children('img').css('display', 'none');

        }
    );


    //腾讯游戏排行榜
    $(".Rangliste,.Rangliste p,.Rangliste img,.Rangliste_Sub").mousedown(function () {//当点击DIV
        $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJOud.png");
        $('.Rangliste_Sub').css('display', 'block');
    });

    $(".Rangliste,.Rangliste p,.Rangliste img,.Rangliste_Sub").hover(function () {//当鼠标离开色块(Box)
        $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJadQ.png");
        $('.Rangliste_Sub').css('display', 'none');
    });

    $(".Rangliste,.Rangliste p,.Rangliste img,.Rangliste_Sub").hover(function () {
        $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJOud.png");
        $('.Rangliste_Sub').css('display', 'block');

    },
        function () {
            $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJadQ.png");
            $('.Rangliste_Sub').css('display', 'none');
        }
    );

    //固定的小妲己下面的微博/微信/视频号鼠标悬浮效果
    //微博
    $('.micro_blog').hover(function () {
        $('.micro_blog').css('background-position', '-123px 329px')
        $('.micro_blog_Sub').css('display', 'block')
    },
        function () {
            $('.micro_blog').css('background-position', '-123px 450px');
            $('.micro_blog_Sub').css('display', 'none')
        }
    );
    // 微信
    $('.WeChat').hover(function () {
        $('.WeChat').css('background-position', '-123px 370px')
        $('.WeChat_Sub').css('display', 'block')
    },
        function () {
            $('.WeChat').css('background-position', '-123px 410px');
            $('.WeChat_Sub').css('display', 'none')
        }
    );

    // 视频号
    $('.Video_Number').hover(function () {
        $('.Video_Number').css('background-position', '-123px 528px')
        $('.Video_Number_Sub').css('display', 'block')
    },
        function () {
            $('.Video_Number').css('background-position', '-123px 570px');
            $('.Video_Number_Sub').css('display', 'none')
        }
    );


    // 当鼠标悬浮在选项卡中，设置样式
    $('.Content_Rotation_map_txt ul li').hover(function () {
        $('.Content_Rotation_map_txt ul li').css('color', '#b1b2be')
        $('.Content_Rotation_map_txt ul li').removeClass('Content_Rotation_map_txt_border')
        $(this).css('color', '#f3c258')
        $(this).addClass('Content_Rotation_map_txt_border')
    });
    //主页轮播图
    $('#one').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(0px,0)')

    })
    $('#tow').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-608px,0)')
    })
    $('#three').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-1216px,0)')
    })
    $('#four').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-1824px,0)')
    })
    $('#five').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-2432px,0)')
    })

    // 当鼠标悬浮在选项卡中，设置样式
    $('.News_tab_text ul div li').hover(function () {
        $('.News_tab_text ul li').css('color', '#b1b2be')
        $('.News_tab_text ul li').removeClass('News_tab_text_border')
        $(this).css('color', '#f3c258')
        $(this).addClass('News_tab_text_border')
    });

    //当鼠标悬浮在选项卡中，滑动卡片
    $('#six').mouseover(function () {
        $('.News_tab').css('transform', 'translate(0px,0)')

    })
    $('#seven').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-330px,0)')
    })
    $('#eight').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-660px,0)')
    })
    $('#nine').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-985px,0)')
    })
    $('#ten').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-1313px,0)')
    })
    $('.Notice span:last-child').css('float', 'right')

});