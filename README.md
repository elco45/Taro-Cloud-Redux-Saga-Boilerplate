# Taro-Cloud-Redux-Saga-Boilerplate
This boilerplate is used to create a simple WeChat cloud based mini program using TaroJs with Redux and Saga.

# Installation
This boilerplate requires newer node environment (>=8.0.0).
```sh
$ cd taro-cloud-redux-saga-boilerplate
$ npm install
```

### Tech
* [TaroJS] - [ReactJS] syntax specification tool to build different solutions like WeChat applet, Baidu applet, etc.
* [Redux Saga] - Makes side effects (i.e. data fetching) easier to manage and execute.
* [WX Server SDK] - SDK that helps with the Cloud Base calls.

# Setup
- [Get appId] and change **appId** in `project.config.json`.
- Open project in WeChat IDE, go to `Details > Local Settings` and disable **"Transpile ES6 to ES5"**.
- Inside WeChat IDE, open the folder `cloudfunctions > login` and right click to select **"Create & Deploy: Install dependencies in the Cloud"**.
- Create a `.env` file just like the example in `.env-example` and put the required data.
- To get the **Cloud ID** go inside WeChat IDE, click on `Cloud Base` and then follow the necessary steps.

# Quickstart
Import this project in the Wechat IDE and run the following command in your console/bash to start the WeChat mini program in development.
```sh
$ npm run dev:weapp
```

License
----
MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Get appId]: <https://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mini-programs/development/brief-tutorial>
[ReactJS]: <https://reactjs.org/>
[TaroJS]: <https://github.com/NervJS/taro>
[Redux Saga]: <https://github.com/redux-saga/redux-saga>
[WX Server SDK]: <https://developers.weixin.qq.com/miniprogram/en/dev/wxcloud/reference-server-api/>
