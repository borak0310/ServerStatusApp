# Server-Status-Monitor<br>

#構想: 
SERVER 管理者可以透過APP簡單的了解平台的 CPU,MEMORY,最吃效能的前幾支process<br>

#作法:<br>
1.建一台SERVER當作一台資訊中心<br>
  使用 Grizzy (Http Server) + Jersey (RESTful Web Services)<br>

2.於受監控SERVER 安裝 jolokia(https://jolokia.org/) ,透過WS帶參數呼監控中心將目前的SERVER狀況回報<br>
EX: {IP:XXXX,CPU:XXXX,MEMORY:XXXX,JBOSS_INS_COUNT:XXXXX}<br>

3.APP向資訊中心SERVER取得目前受監控SERVER的系統效能(SERVER透過推波ALERT CPU衝高,或記憶體已接近負載的SERVER資訊)<br>

#進階版:<br>
1.透過手機重啟環境<br>

2.透過手機重啟整台SERVER<br>

設計:<br>
(detail - bower.json)<br>
1. angularJs<br>
2. front-end template - html5-boilerplate<br>
3. RWD Framework - bootstrap <br>

Mobile Install Plugin:
step 1:
cordova platform add android

step 2: pushbots (僅需不到二行程式就能使用推撥功能)
cordova plugin add com.pushbots.push

step 3:
cordova prepare android
