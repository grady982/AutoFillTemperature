# Auto Fill Temperature

## Configuration

- `url1`: login page
- `url2`: temperature report page
- `employeeID`: emplyee id
- `symptom`:
  - symptom1 : 無發燒
  - symptom2 : 發燒 ≧38°C
  - symptom3 : 乾咳
  - symptom4 : 呼吸困難
  - symptom5 : 四肢無力、肌肉痠痛
  - symptom6 : 喪失味覺、嗅覺
  - symptom7 : 不明原因腹瀉
  - symptom8 : 接種疫苗後 48 小時內不適
- `commute`:
  - commute1 : 自行開車、騎車
  - commute2 : 搭乘大眾運輸系統
  - commute3 : 搭乘公司上下班交通車
  - commute4 : 其他
  - commute5 : 今日未進台灣辦公廠區

### set crontab

```shell
crontab -e
30 08 * * * npx PATH/index.js
### check setting
crontab -l
```

### 使用 selenium container 執行體溫回報腳本

解決 local chrome version 與 chomedriver mismatch 的問題

```shell
docker container run -d -p 4444:4444 --shm-size="2g" selenium/standalone-chrome
# password: secret
which node
/usr/local/bin/node index.js
```

有空再優化把體溫回報改成 scheduler 包成 container，再透過 docker compose 把 selenium 和 nodejs 環境啟起來

[Selenium Docker Tutorial](https://dev.to/automationbro/selenium-docker-tutorial-4dkg)
