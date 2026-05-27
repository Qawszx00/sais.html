<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>內部資料</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            line-height: 1.8;
        }

        h2 {
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            margin-top: 30px;
        }

        .card {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
        }
    </style>
</head>

<body>

<h1>校務資訊組內部資料</h1>

<h2>Apple</h2>
<div class="card">
    帳號：example@gmail.com<br>
    密碼：********
</div>

<h2>Google</h2>
<div class="card">
    帳號：example@gmail.com<br>
    密碼：********
</div>

<h2>校務系統</h2>
<div class="card">
    帳號：cc40-1<br>
    密碼：********
</div>

<h2>RPAGE</h2>
<div class="card">
    <a href="https://rpageadm.nutc.edu.tw/platform/" target="_blank">
        前往 RPAGE
    </a>
</div>

<h2>第二會議室</h2>
<div class="card">
    <a id="dynamicLink" href="#" target="_blank">
        開啟會議室頁面
    </a>
</div>

<script>
function getDynamicURL() {

    const baseURL =
    "https://garms.nutc.edu.tw/ActView/VRCalenderView?pl_code=2205&vr_num=1&ym=";

    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    const taiwanYear = year - 1911;

    const formattedMonth =
        month < 10 ? '0' + month : month;

    return `${baseURL}${taiwanYear}${formattedMonth}`;
}

document.getElementById("dynamicLink").href =
    getDynamicURL();
</script>

</body>
</html>
