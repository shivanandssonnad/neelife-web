module.exports = {
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@config": "./src/config",
          "@app": "./src/App",
          "@components": "./src/components",
          "@pages": "./src/pages",
          "@redux": "./src/redux",
          "@styles": "./src/styles",
          "@utils": "./src/utils",
          "@assets": "./src/assets"
        }
      }
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
    "jsx-control-statements"
  ]
}
  