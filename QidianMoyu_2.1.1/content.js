// 1. 在DOM构建前插入Loading元素
const loadingDiv = document.createElement('div');
loadingDiv.className = 'sk-loading';
loadingDiv.innerHTML = '<div class="sk-spinner"></div>';
document.documentElement.appendChild(loadingDiv);
console.log("成功加载Loading");



function checkMainContent() {
    console.log('开始检查main元素');
    const main = document.querySelector('main');
    if (main && main.textContent.trim() !== '') {
        console.log('内容已找到:', main.innerHTML); 
        // 获取正文
        var newMainContent = main.innerHTML;
        console.log("正文：",newMainContent);

        // 获取上一章/目录/下一章
        // 获取包含导航按钮的div
        const navBtnGroup = document.querySelector('.nav-btn-group');
        // 获取所有的a标签
        const links = navBtnGroup.querySelectorAll('a');
        // 初始化变量
        let prevHref = '#';
        let catalogHref = '#';
        let nextHref = '#';
    
        // 遍历所有a标签，匹配其内容
        links.forEach(link => {
            if (link.textContent.includes('上一章')) {
                prevHref = link.getAttribute('href');
                console.log("上一章：",prevHref);
            } else if (link.textContent.includes('目录')) {
                catalogHref = link.getAttribute('href');
                console.log("目录：",catalogHref);
            } else if (link.textContent.includes('下一章')) {
                nextHref = link.getAttribute('href');
                console.log("下一章：",nextHref);
            }
        });
    
        // 获取文章标题
        const chapterTitleElement = document.querySelector('div div h1');
        // 提取纯文本内容（自动过滤内部span标签）
        const chapterTitle = chapterTitleElement ? 
            chapterTitleElement.textContent.trim() : 
            '未找到章节标题';
        console.log("文章标题：",chapterTitle);

        // 判断是否存在付费章节
        var vip = '';
        const vipcontent = document.querySelector('section > div').textContent;
        console.log(vipcontent); // 输出："这是需要获取的内容"
        if (vipcontent.includes('VIP')) {
            vip = vipcontent + '。若要订阅，请先关闭本拓展，到起点原页面订阅后再开启本拓展享受摸鱼之乐！';
        }


        // 随机插入图片
        function insertRandomImages() {
            //开始随机插入图片
            console.log("开始随机插入图片");
            const images = [
                "https://www.alphachart.com/upload/templates/1647831622325981.png",
                "https://www.alphachart.com/upload/templates/1647831387300428.png",
                "https://www.alphachart.com/upload/templates/1647830990539919.png",
                "https://www.alphachart.com/upload/case/1647417930625828.png",
                "https://www.alphachart.com/upload/case/1647421630912199.png",
                "https://www.alphachart.com/upload/case/1647421900819885.png",
                "https://www.alphachart.com/upload/case/1647421680467494.png",
                "https://www.alphachart.com/upload/case/1647422004411284.png",
                "https://www.alphachart.com/upload/case/1647422067503302.png",
                "https://www.alphachart.com/upload/case/1647422195341275.png",
                "https://www.alphachart.com/upload/case/1647422244965199.png",
                "https://www.alphachart.com/upload/case/1647422629637268.png",
                "https://www.alphachart.com/upload/case/1647415957184811.png",
                "https://www.alphachart.com/upload/case/1647417038270116.png",
                "https://www.alphachart.com/upload/case/1647417142688574.png",
                "https://www.alphachart.com/upload/case/1647416975581038.png",
                "https://www.alphachart.com/upload/case/1647416911175357.png",
                "https://www.alphachart.com/upload/case/1647416762844813.png",
                "https://www.alphachart.com/upload/case/1647416614327352.png",
                "https://www.alphachart.com/upload/case/1647416391292734.png",
                "https://www.alphachart.com/upload/case/1646807910882856.png",
                "https://www.alphachart.com/upload/case/1647418230247292.png",
                "https://www.alphachart.com/upload/case/1647418166657515.png",
                "https://www.alphachart.com/upload/case/1647418105387295.png",
                "https://www.alphachart.com/upload/case/1647417720813972.png",
                "https://www.alphachart.com/upload/case/1647417337480791.png",
                "https://www.alphachart.com/upload/case/1647417497600261.png",
                "https://www.alphachart.com/upload/case/1646807148576853.png",
                "https://www.alphachart.com/upload/case/1647420493547499.png",
                "https://www.alphachart.com/upload/case/1647419542758307.png",
                "https://www.alphachart.com/upload/case/1646796857174089.png",
                "https://www.alphachart.com/upload/case/1647415740584578.png",
                "https://www.alphachart.com/upload/case/1647415790587882.png",
                "https://www.alphachart.com/upload/case/1647415706467850.png",
                "https://www.alphachart.com/upload/case/1647415458852847.png",
                "https://www.alphachart.com/upload/case/1647415817618944.png",
                "https://www.alphachart.com/upload/case/1647415691695440.png",
                "https://www.alphachart.com/upload/case/1646808611136574.png",
                "https://www.alphachart.com/upload/case/1647415178883980.png",
                "https://www.alphachart.com/upload/case/1647415765603445.png",
                "https://www.alphachart.com/upload/case/1647416158254318.png",
                "https://www.alphachart.com/upload/case/1647417142688574.png",
                "https://www.alphachart.com/upload/case/1647415178883980.png"
                ];
        
            const content = document.querySelector('content');
            const paragraphs = content.getElementsByTagName('p');
            const numberOfImagesToInsert = 5;  // 设置要插入的图片数量
        
            function getRandomInt(min, max) {  // 生成随机数的函数
                return Math.floor(Math.random() * (max - min)) + min;
            }
        
            function insertRandomImages(numImages) {
                const insertedIndices = new Set();  // 用Set存储已插入图片的位置，避免重复
        
                for (let i = 0; i < numImages; i++) {
                    let randomIndex;
                    do {
                        randomIndex = getRandomInt(1, paragraphs.length);  // 随机选择段落位置
                    } while (insertedIndices.has(randomIndex));  // 如果位置已被使用，重新选择
                    insertedIndices.add(randomIndex);  // 记录已使用的位置
        
                    const img = document.createElement('img');  // 创建图片元素
                    img.src = images[getRandomInt(0, images.length)];  // 随机选择图片URL
                    img.style.width = '100%';  // 设置图片宽度
                    paragraphs[randomIndex].insertAdjacentElement('beforebegin', img);  // 在段落前插入图片
                }
            }
            // numberOfImagesToInsert是否小于paragraphs.length
            if (numberOfImagesToInsert < paragraphs.length) {
                insertRandomImages(numberOfImagesToInsert);
            }else if(paragraphs.length == 1){
                // 如果只有一个段落，就不插入图片
            }else{
                insertRandomImages(paragraphs.length - 1);
            }
            console.log("成功随机插入图片");
        }

        // 随机插入iframe
        function insertRandomIframes() {
           //开始插入iframe
           console.log("开始插入iframe");
           const iframes = [
            "https://moyu.city/sentence.html",
            "https://moyu.city/sentence.html"
            ];
            const numberOfIframesToInsert = 1; // 可以在这里配置需要插入的iframe数量
            const content = document.querySelector('content');
            const paragraphs = content.getElementsByTagName('p');
        
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        
            function insertRandomIframes(numIframes) {
                const insertedIndices = new Set();
        
                for (let i = 0; i < numIframes; i++) {
                    let randomIndex;
                    do {
                        randomIndex = getRandomInt(1, paragraphs.length);
                    } while (insertedIndices.has(randomIndex));
                    insertedIndices.add(randomIndex);
        
                    const iframe = document.createElement('iframe');
                    iframe.src = iframes[getRandomInt(0, iframes.length)];
                    iframe.style.width = '100%'; // 设置iframe宽度为100%
                    iframe.style.height = '500px'; // 设置iframe高度为500px，可以根据需要调整
                    iframe.style.border = 'none';
                    paragraphs[randomIndex].insertAdjacentElement('beforebegin', iframe);
                }
            }
            // numberOfIframesToInsert是否小于paragraphs.length
            if (numberOfIframesToInsert < paragraphs.length) {
                insertRandomIframes(numberOfIframesToInsert);  
            }else if(paragraphs.length == 1){
                // 如果只有一个段落，就不插入iframe 
            }else{
                insertRandomIframes(paragraphs.length - 1);
            }
            insertRandomIframes(numberOfIframesToInsert); 
            console.log("成功插入iframe");
        }

        // 更改word.html中的正文内容、上一章/目录/下一章、文章标题
        function replaceWordContent() {
            //将chapterTitle 插入到content标签最头部,这个就是标题
            document.querySelector('content').innerHTML = '<h3 style="text-align: center;">' + chapterTitle + '</h3>' + newMainContent + '<h5>' + vip + '</h5>';
            // 设置背景图片
            document.body.style.backgroundImage = 'url(' + chrome.runtime.getURL('img/background.png') + ')';
            // 将id = previous的a标签的href替换成prevHref
            document.getElementById('previous').href = prevHref;
            // 将id = next的a标签的href替换成nextHref
            document.getElementById('next').href = nextHref;
            // 将id = catalog的a标签的href替换成catalogHref
            document.getElementById('catalog').href = catalogHref;
            console.log("成功替换word.html中的内容");
        }

        

        // 加载word.html,并且将当前网页的内容替换为word.html
        var xhr = new XMLHttpRequest();
        xhr.open('GET', chrome.runtime.getURL('word.html'), true);
        console.log("开始加载word.html");
        xhr.onreadystatechange = function() {  // 这是一个异步的请求
            if (xhr.readyState === 4 && xhr.status === 200) {
                var newContent = xhr.responseText;
                // 将当前网页替换成word.html
                document.documentElement.innerHTML = newContent;
                console.log("成功加载word.html");
                replaceWordContent();  
                insertRandomImages(); 
                insertRandomIframes();
                // 上下键控制内容的上下滚动
                document.addEventListener('keydown', function(event) {
                    const contentDiv = document.querySelector('.content');
                    const step = 20; // 每次滚动的像素数

                    switch (event.key) {
                        case 'ArrowUp':
                            contentDiv.scrollTop -= step;
                            break;
                        case 'ArrowDown':
                            contentDiv.scrollTop += step;
                            break;
                        // 可以添加更多按键的处理逻辑
                    }
                });

                // 移除Loading元素
                loadingDiv.remove();
                console.log("成功移除Loading");
            };
        }
        xhr.send();
        
        return true;
    } else {
        return false;
    }
  }


// 2. 待页面加载完成后开始轮询检查main元素是否存在
window.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成');
    var i = 1; // 轮询次数
    console.log('轮询次数:', i++);
    // 轮询次数限制为100次
    const maxAttempts = 50;
    const interval = setInterval(() => {
        console.log('轮询次数:', i++);
        if (checkMainContent() || i >= maxAttempts) clearInterval(interval);
    }, 100);
});