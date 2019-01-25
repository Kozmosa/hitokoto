function init() {
    if (!window.localStorage) {
        console.log("Browser does not support localStorage!");
        mdui.alert("Oops!", "浏览器不支持主题切换功能，请换一个浏览器再试试吧!");
    } else { // Main Logics
        // Get Storage
        let storage = window.localStorage;

        // Write Data in localStorage
        storage.setItem('theme', 'light');

        // Get Data from localStorage
        storage.getItem('theme');

        // Alert current theme
        alert(storage.getItem('theme'));
    }
}

function changeTheme(themeContent) {
    /* 
    themeContent is a Array, it struct is:
    {
    	name: "Example",
    	foregroundColor: "#fff",
    	backgroundColor: "#000"
    }
    */

    // Change Theme Now
    foreground = themeContent.foregroundColor;
    background = themeContent.backgroundColor;

    let wrappers = document.getElementsByClassName('wrapper');
    // 处理容器背景色问题
    for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].style.backgroundColor = background;
    }

    let texts = document.getElementsByClassName('texts');
    // 处理文本颜色问题
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.color = foreground;
    }
}