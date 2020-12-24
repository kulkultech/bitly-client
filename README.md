# BitLy JavaScript Client

[![Contact me on Codementor](https://cdn.codementor.io/badges/contact_me_github.svg)](https://www.codementor.io/amappuji?utm_source=github&utm_medium=button&utm_term=amappuji&utm_campaign=github)
[![Made in Indonesia](https://made-in-indonesia.github.io/made-in-indonesia.svg)](https://github.com/made-in-indonesia/made-in-indonesia)
[![Build Status](https://travis-ci.org/kulkultech/bitly-client.svg?branch=master)](https://travis-ci.org/kulkultech/bitly-client)

Easily use BitLy in your browser.

# Getting Started

1. Install it

        $ npm install @kulkul/bitly-client

2. Use it

```javascript
import BitLyService from "@kulkul/bitly-client";

const bitLyService = new BitLyService('token')
const shortenedURL = await bitLyService.shorten('https://kulkul.tech')

console.log({ shortenedURL }); // https://bit.ly/<slug>
```

However, we have no support for making short URL with alias at this moment.

