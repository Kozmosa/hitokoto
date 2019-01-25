function getLocalStorageObject() {
    // Get Local Storage Status
    if (!window.localStorage) {
        console.log('This Browser is too old!!!! It even not support Local Storage!');
        return false;
    } else {
        return window.localStorage;
    }
}

function addLocalStorageItem(key, value) {
    // Get Local Storage Object
    let localStorage = getLocalStorageObject();
    if (localStorage != false) {
        localStorage.setItem(key, value);
    } else {
        console.log('WTF!!! Browser does not support Local Storage!!!');
    }
}

function getLocalStorageItem(key) {
    // Get Local Storage Object
    let localStorage = getLocalStorageObject();
    if (localStorage != false) {
        return localStorage.getItem(key);
    } else {
        console.log('WTF!!! Browser does not support Local Storage!!!');
    }
}

function getThemeContent(name) {
    let themeContents = {
        "水鸭青": {
            "foregroundColor": "#E0F2F1",
            "backgroundColor": "#009688"
        },
        "知乎蓝": {
            "foregroundColor": "#E1F5FE",
            "backgroundColor": "#03A9F4"
        },
        "哔哩粉": {
            "foregroundColor": "#FFFFFF",
            "backgroundColor": "#FF4081"
        },
        "A屏黑": {
            "foregroundColor": "#ECEFF1",
            "backgroundColor": "#000000"
        },
        "原生": {
            "foregroundColor": "#000000",
            "backgroundColor": "#FFFFFF"
        }
    };
    // Return Theme Content
    if (name === "originData") {
        // Return origin Data
        return themeContents;
    } else {
        return themeContents[name];
    }
}