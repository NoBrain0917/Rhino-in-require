# Rhino-in-require

`Mozilla`의 `Rhino Engine`에서
`require`를 사용할 수 있게 해줍니다.

※ 간단하게 구현한지라 모듈 불러오는거를 제외한 `require`의 다른 기능은 없습니다.

## 예시 코드

### index.js
```javascript
const mymodule = require(path);
mymodule.hi;//result : Hello World
```
### mymodule.js
```javascript
module.exports.hi = function() {
  return "Hello World";
}
```
