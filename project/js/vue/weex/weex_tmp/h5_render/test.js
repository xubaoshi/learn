define('@weex-component/test', function (require, exports, module) {

;

;module.exports.style = {
  "cell": {
    "marginTop": 10,
    "marginLeft": 10,
    "flexDirection": "row"
  },
  "thumb": {
    "width": 200,
    "height": 200
  },
  "title": {
    "textAlign": "center",
    "flex": 1,
    "color": "#808080",
    "fontSize": 50
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "classList": [
        "cell"
      ],
      "children": [
        {
          "type": "image",
          "classList": [
            "thumb"
          ],
          "attr": {
            "src": "http://t.cn/RGE3AJt"
          }
        },
        {
          "type": "text",
          "classList": [
            "title"
          ],
          "attr": {
            "value": "JavaScript"
          }
        }
      ]
    }
  ]
}

;})

// require module
bootstrap('@weex-component/test', {"transformerVersion":"0.3.1"})