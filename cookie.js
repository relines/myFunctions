export const Cookie = {

    setCookie($name, $value, $day) { //变量名，变量值，过期时间
        var data = $name + "=" + encodeURI($value); //拼凑数据 变量名=值
        var myDate = new Date();
        var mSecond = $day * 24 * 3600 * 1000;
        myDate.setTime(myDate.getTime() + mSecond); //myDate通过时间戳变成过期时间(10天以后的时间)
        document.cookie = data + "; expires=" + myDate.toGMTString(); //变量名=值;expires=时间
    },

    clearAllCookie() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        }
        if (cookies.length > 0) {
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                var domain = location.host.substr(location.host.indexOf('.'));
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;
            }
        }
    }

}