---
template: BlogPost
path: /Gatsby製のサイトにGoogle Fontsを導入する
date: 2020-10-22T06:28:28.802Z
title: Gatsby製のサイトにGoogle Fontsを導入する
metaDescription: このページを見るだけで、以下の対象の方は自身のサイトにGoogle Fontsを導入することが出来ます。
thumbnail: /assets/google_fonts_x_gatsby.gif
---
このページを見るだけで、以下の対象の方は自身のサイトにGoogle Fontsを導入することが出来ます。\
詳しく知ってから導入したい方は、[参考](#参考)からたどっていただければ良いかと思います。

## 対象

* Gatsby製のサイトを持っている
* Webフォントを使いたい
* CSS3のプロパティ(font-family)を使える

## やり方

まず[Google Fonts](https://fonts.google.com/?preview.text=&preview.text_type=custom&thickness=7)で使いたいフォントを見つけます。

今回は試しにMontserrat Alternatesというフォントを導入したいと思います。

![choose fonts](/assets/choose_fonts.png)

他でサイトを持っている人は、ここから`Select this style`を押してHTMLの`<head>`タグに埋め込んで導入したこともあるかもしれませんが、今回はこの**フォント名**のみを使用します。

### フォントを読み込めるようにする

自身のサイトのあるディレクトリで以下を実行します。

```
// npm
npm install typeface-montserrat-alternates

// yarn
yarn add typeface-montserrat-alternates
```

上の例で分かるように、`typeface-`の後にフォント名を小文字にしたものが書かれています。この方法は[typeface](https://www.gatsbyjs.com/docs/recipes/styling-css/#using-google-fonts)というものを使用して導入するのでこのような記述方法になります。詳しく気になる方は公式をご覧ください。

### サイトにフォントをインポート(ゴロが良い)

`gatsby-browser.js`に先ほど`npm of yarn`でインストールしたフォントを`import`します。
```javascript
import "./src/styles/global.scss"　//サイトのメインスタイルシート

import "typeface-montserrat-alternates"
```
ここで`import`することによってすべてのスタイリング方法で使うことが出来ます。

注釈※
私の触っていた言語で読み込み順によって他モジュールを参照できないことがあったのですが、今回はスタイルシートの前後どちらでも大丈夫でした。

### 実際にスタイリング

Webフォントを利用したい部分にスタイルをあてます。\
今回はこのサイトのロゴをデフォルトのヒラギノ角ゴから変更したいと思います。

このサイトの左上にあるロゴには`site-title`というclass名がついていて`<a>`タグなので以下のようになります。この部分は適宜スタイリングしたい部分に変えてください。

重要なのは`font-family`の行を今回選択したフォント名にする事です。

```scss
// @(site directory)/src/styles/global.scss

.site-title a {
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
}

body {
  font-family: $任意のfont-family;
}
```

`font-family`の行は自分で打ち込んでも大丈夫ですが、以下の方法が楽だし、間違いが無いのでオススメです。

### font-familyの行の書き方

Google Fontで好きなフォントを選択し、`+ Select this style`を押します。weightは今回のについては`font-family`の行をコピペするだけなので、どれでも大丈夫です。 

![choose fonts](/assets/choose_fonts.png)

 選択すると、初回は自動で・閉じてしまったら右上のアイコンから以下のページを開くことが出来ます。  

Embedを押し、赤線部をコピーして[先ほど](サイトにスタイリング)のようにスタイルシートに貼り付けます。 

![embed fonts](/assets/font_family.jpg)

CSS(SCSS)は[詳細度](https://developer.mozilla.org/ja/docs/Web/CSS/Specificity)の高い方のスタイルが優先されるので、このようにbodyに全体のフォントが与えられた場合でも、上書きしてスタイリングすることが出来ます。

## まとめ

このページはあくまで自分のGatsby製のサイトにGoogle Fontsを導入した備忘録としての役割が主なので、詳しいことまでは調べておりません。

もしかしたら、普通にReactやVueなどで作られたサイトでも出来そうですね。今度自身のReact製のサイトに適応してみようと思います。

## 参考

今回はこのページを見るだけで実装出来るようになっていますが、詳しいことは以下のページから納得するまで遡って参照してください。

* [Qiita : Gatsby.jsのプロジェクトにGoogle Fontsを導入する方法](https://qiita.com/yutaroadachi/items/40d5fbbd27cd9fd6360e)
* [typeface公式](https://www.gatsbyjs.com/docs/recipes/styling-css/#using-google-fonts)
* [MDN : 詳細度](https://developer.mozilla.org/ja/docs/Web/CSS/Specificity)
