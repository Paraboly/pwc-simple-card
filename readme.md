![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=for-the-badge)

![WebComponent PWC README Boilerplate](https://raw.githubusercontent.com/paraboly/pwc-simple-card/master/assets/logo.png)

[![Plug & Play Simple Card View for Web by Paraboly via StencilJS](https://img.shields.io/badge/-Plug%20%26%20Play%20Simple%20Card%20View%20for%20Web%20by%20Paraboly%20via%20StencilJS-lightgrey?style=for-the-badge)](https://github.com/Paraboly/pwc-simple-card)

[![npm version](https://img.shields.io/npm/v/@paraboly/pwc-simple-card.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-simple-card)
[![npm](https://img.shields.io/npm/dt/@paraboly/pwc-simple-card.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-simple-card)
![Platform - Platform Free Web](https://img.shields.io/badge/-Web%20%7C%20Platform%20Free-blue?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <img a
        src="https://raw.githubusercontent.com/paraboly/pwc-simple-card/master/assets/Screenshots/pwc-simple-card.png" />
</p>

## [Live Codepen Example](https://codepen.io/mertuslu12/pen/WNvzOJd)

## Installation

### Script tag

- Put two script tags similar to this in the head of your index.html:

```html
<script
  type="module"
  src="https://unpkg.com/@paraboly/pwc-simple-card@latest/dist/pwc-simple-card/pwc-simple-card.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/@paraboly/pwc-simple-card@latest/dist/pwc-simple-card/pwc-simple-card.js"
></script>
```

- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install @paraboly/pwc-simple-card --save`
- Put a script tag similar to this `<script src='node_modules/@paraboly/pwc-simple-card/dist/pwc-simple-card.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install @paraboly/pwc-simple-card --save`
- Add an import to the npm packages `import @paraboly/pwc-simple-card;`
- Then you can use the element anywhere in your template, JSX, html etc

# Usage

## Basic Usage

This is just an example from pwc-simple-card, you need to change it!

```html
<pwc-simple-card
  card-title="Lorem Ipsum?"
  card-details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies dui, sed varius ipsum."
></pwc-simple-card>
```

### JS Way

This is just an example from pwc-simple-card, you need to change it!

```js
const pwcSimpleCard = document.querySelector("pwc-simple-card");
pwcSimpleCard.source = require("assets/your-img");
```

## Future Plans

- [x] ~~Documentation~~
- [ ] Dark Theme

## Authors

Mert Uslu, u.mertuslu@gmail.com

## License

WebComponent PWC SimpleCard is available under the MIT license.

See the LICENSE file for more info.
