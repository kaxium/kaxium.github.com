
;(function(){
    /* 初始化 */
    var home = [113.311112, 22.992108];
    var data = [
        {
            name: '北京路美食街',
            position: [113.270331,23.118724],
            pic: ['https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=e725906f0ff431ada8df4b6b2a5fc7ca/f11f3a292df5e0feccb7fcfc5f6034a85fdf729b.jpg'],
            highlight: [
                '银记肠粉',
                '富临食府',
                '玫瑰甜品店',
                '达杨原味炖品',
                '大头虾',
                '食盈碗仔翅',
                '老西关濑粉',
                '西关婆婆面'
            ],
            addr: '北京路'
        },
        {
             name: '上下九步行街',
            position: [113.246109,23.112835],
            pic: ['https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f9a1b0fd41a98226accc2375ebebd264/060828381f30e924aafcaeb94e086e061c95f7d9.jpg'],
            highlight: [
                '宝华面店',
                '银记肠粉',
                '陈添记',
                '林林牛杂屋',
                '伍湛记',
                '南信甜品牛奶专家',
                '顺记冰室',
                '仁信甜品店',
                '黄振龙凉茶'
            ],
            addr: '上下九步行街'
        },
        {
            name: '南浦鹅庄',
            position: [113.292771,23.032446],
            pic: ['http://hiphotos.baidu.com/nuomi/pic/item/a50f4bfbfbedab643dd3d4cefd36afc379311e1e.jpg'],
            highlight: [
                '芋头焖鹅'
            ],
            addr: '南浦站C出口'
        },
        {
            name: '潮府',
            position: [113.338657,23.00604],
            pic: ['http://p0.meituan.net/deal/5263abd3e7193ea899fc6a43e8b883ef582104.jpg'],
            highlight: [
                '粤菜',
                '早茶'
            ],
            addr: '番禺区番禺大道北南大路口'
        },
        {
            name: '道谷有机主题餐厅',
            position: [113.333961,23.018367],
            pic: ['http://qcloud.dpfile.com/pc/07gzO09QRkFo_7_BL30kp8fT_ud3IQ2SnxHvBBk9RNFdo_J2BOAVauavBqpBqhsJTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '黑松露系列'
            ],
            addr: '迎宾路河村路段362号'
        },
        {
            name: '四海一家',
            position: [113.34218,23.00839],
            pic: ['http://qcloud.dpfile.com/pc/vLYh6mVfOdyPT0hqe7-hXRu4ZAVI0nqryCS3fOHcHIdjRCRX_cVL81Spz4gYtEprTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '自助餐',
                '日料',
                '海鲜'
            ],
            addr: '南村镇迎宾路万博中心A2栋1-2楼'
        },
        {
            name: '滋粥楼',
            position: [113.339968,23.012571],
            pic: ['http://qcloud.dpfile.com/pc/eLVOeEVQp2m3WOU1CPcQe6VFgQFtCBgzNuSrxQQOp2s85m6KLxJrZMuRwDiePBFkTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '火锅',
                '炒菜'
            ],
            addr: '南村镇兴南大道33号桥兴商务大厦2楼'
        },
        {
            name: '毕德寮',
            position: [113.321956,23.126051],
            pic: ['https://img.meituan.net/msmerchant/6732bafd974f8a4f34d2bb0c4d92a9193366026.jpg%40700w_700h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'],
            highlight: [
                '特色虾饺'
            ],
            addr: '华夏路30号富力盈通大厦四楼401-409房'
        },
        {
            name: '孖记士多',
            position: [113.260285,23.121],
            pic: ['http://qcloud.dpfile.com/pc/A_Az8FvqcnzhMvnwBj_odMFATpxWWX9ib0bAAflqBpXEWz-wsUVvVdRULWYkSDSzTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '炒菜',
                '黑暗料理'
            ],
            addr: '米市路47号泗巷内'
        },
        {
            name: '芳村榕树头-叹佬鸡煲',
            position: [113.238625,23.100701],
            pic: ['https://img.meituan.net/msmerchant/3fe891bc92fa5bb086d7b8fcd5db0808617709.jpg%40700w_700h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'],
            highlight: [
                '特色鸡煲'
            ],
            addr: '二沙地11-13号'
        },
        {
            name: '超记煲仔饭',
            position: [113.271433,23.11662],
            pic: ['http://qcloud.dpfile.com/pc/3N8h4omGqwsGWuWJOQtCYquu1ntwbCcPbwCklgFKj_3mJu6skfkszgwG9v8QElsoTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '特色煲仔饭'
            ],
            addr: '北京南路星光广场'
        },
        {
            name: '从前的小酒馆',
            position: [113.362607,22.940961],
            pic: ['http://qcloud.dpfile.com/pc/JNVnrhGJWCHYEpaAHGfvR6eq7LxQiudEnIWR8aUaP3BxllMigM3xkOBwUgizytEnTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '川菜'
            ],
            addr: '光明北路易发商业街二楼226-227号'
        },
        {
            name: '表哥好味鹅',
            position: [113.351699,22.982069],
            pic: ['http://qcloud.dpfile.com/pc/00VL4zG_SvW0QoXSxRQQmOhpQNecLq8Qm43EWySLC4VfvXDPj6ufn7ygGkheaIIZTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '马拉糕',
                '鲍鱼花螺焖鸡'
            ],
            addr: '里仁洞彭地大街新区三巷12号'
        },
        {
            name: '洲记阳山农家',
            position: [113.374665,23.087216],
            pic: ['http://qcloud.dpfile.com/pc/nKUwPpDs9FBUHr4C-4AjwfsyNszD6hIDutPKmSP83bybBI9M86czpewAp1hb5qoLTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '正宗阳山鸡项'
            ],
            addr: '北山村桥头大街226-228号'
        },
        {
            name: '鸭五件私房菜',
            position: [113.230919,23.049904],
            pic: ['http://qcloud.dpfile.com/pc/8IdnIAEWl960uc6oRoLJN1j1xnIWcrQMMMmCYxHpQMFwvOVZQl0waih_sobA4pMsTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '韶关鸭五件'
            ],
            addr: '芳村西朗海南连生坊45号'
        },
        {
            name: '阿婆牛杂',
            position: [113.237365,23.099419],
            pic: ['http://qcloud.dpfile.com/pc/rShFIKq_6GGm1VDuLLTDv1uK14rIKIpGqlqvUr9ym2WUDUk6-KqvLg70OVUXtjEHTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '牛杂'
            ],
            addr: '芳村大道陆居路陆居市场内'
        },
        {
            name: '新联肠粉店',
            position: [113.235064,23.116762],
            pic: ['http://qcloud.dpfile.com/pc/MzG2noHV5o_rFrdziW1cUNJPgyK8DpbJYL5ud_QIvbcJax8J12Hib8O1myTwRDFoTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '布拉肠'
            ],
            addr: '多宝路88号'
        },
        {
            name: '鸟州力裏庭',
            position: [113.32903,23.13056],
            pic: ['http://qcloud.dpfile.com/pc/s4Xyu17-Asf5aMDZt_tF_XJLbLLIsDmLPWOLrsm2s0Luq6d5-stDNs9b0W58yw6TTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '烧烤'
            ],
            addr: '体育东路86号201'
        },
        {
            name: '百花甜品店',
            position: [113.275551,23.122554],
            pic: ['http://qcloud.dpfile.com/pc/P9c9-zyDsuN67fuJ1QygGG6kOa51x0R9Lx3IyyNmApzV-Oie0zXWa0hU-eqGUQgMTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '凤凰奶糊'
            ],
            addr: '文明路210'
        },
        {
            name: '玫瑰甜品',
            position: [113.275827,23.122613],
            pic: ['http://qcloud.dpfile.com/pc/RDlCt4fzDdMDf7YLteRgFpudvhVv5IXDF-9TTqWEJfaEhjjlGPldAQe48WdJLJmzTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '原味杏仁豆腐'
            ],
            addr: '文明路218号'
        },
        {
            name: '歡喜豬咪家',
            position:[113.281195,23.090945],
            pic: ['http://qcloud.dpfile.com/pc/stov5s-5XPVouuBip9wJanJCmSVxy-jcmGpiwCFPVWbtXX1i_3zJ1y9pEkJHH7_WTYGVDmosZWTLal1WbWRW3A.jpg'],
            highlight: [
                '潮汕菜'
            ],
            addr: '细岗东二街2号101(近大参林药店)'
        }
    ];

    var map = new AMap.Map("allmap", {
        resizeEnable: true,
        zoom: 12,
        center: home
    });

    /* 添加定位 */
    map.plugin('AMap.Geolocation', function(){
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        map.addControl(geolocation);
        // geolocation.getCurrentPosition();
    });

    /* 图片自适应 */
    AMap.event.addDomListener(document.getElementById('setFitView'), 'click', function() {
        var newCenter = map.setFitView();
    });

    var tools = {
        addMarker:function(point, labelText) {
            var marker = new AMap.Marker({
                position: point
            });
            marker.setMap(map);

            labelText && marker.setLabel({
                offset: new AMap.Pixel(20,20),
                content: labelText
            });

            return marker;
        },
        infoWindow:(function() {
            var infoWindow = new AMap.InfoWindow({
                offset: new AMap.Pixel(16, -45),
                isCustom: true
            });

            function createInfo(title, content, idx) {
                 var info = document.createElement("div");
                info.className = "info";

                //可以通过下面的方式修改自定义窗体的宽高
                //info.style.width = "400px";
                // 定义顶部标题
                var top = document.createElement("div");
                var titleD = document.createElement("div");
                var closeX = document.createElement("img");
                top.className = "info-top";
                titleD.innerHTML = '<a>'+title+'</a>';
                titleD.data_idx = idx;
                titleD.onclick = function() {
                    tools.openGaoDe(this.data_idx);
                }

                closeX.src = "http://webapi.amap.com/images/close2.gif";
                closeX.onclick = tools.infoWindow.close;

                top.appendChild(titleD);
                top.appendChild(closeX);
                info.appendChild(top);

                // 定义中部内容
                var middle = document.createElement("div");
                middle.className = "info-middle";
                middle.style.backgroundColor = 'white';
                middle.innerHTML = content;
                info.appendChild(middle);

                // 定义底部内容
                var bottom = document.createElement("div");
                bottom.className = "info-bottom";
                bottom.style.position = 'relative';
                bottom.style.top = '0px';
                bottom.style.margin = '0 auto';
                var sharp = document.createElement("img");
                sharp.src = "http://webapi.amap.com/images/sharp.png";
                bottom.appendChild(sharp);
                info.appendChild(bottom);
                return info;
            }

            return {
                open:function(pos, data, idx) {
                    var content = [];
                    content.push('<img src="'+data.pic+'">地址：'+data.addr);
                    content.push('特色：'+data.highlight.join(','));

                    var info = createInfo(data.name, content.join('<br>'), idx);
                    infoWindow.setContent(info);
                    infoWindow.open(map, pos);
                },
                close:function() {
                    map.clearInfoWindow();
                }
            }
        })(),
        openGaoDe: function(idx) {
            var marker = MarkerMemo[idx].marker;
            var data = MarkerMemo[idx].data;

            marker.markOnAMAP({
                name: data.name,
                position: marker.getPosition()
            })
        }
    }

    tools.addMarker(home, "Home");

    var MarkerMemo= [];

    /* 添加数据 */
    data.forEach(function(item, idx){
        var marker = tools.addMarker(item.position, item.name);
        marker.data = item;

        marker.on('click', function(e){
            tools.infoWindow.open(e.target.getPosition(), e.target.data, idx);
        });

        MarkerMemo.push({
            marker: marker,
            data: item
        })
    });
})();
