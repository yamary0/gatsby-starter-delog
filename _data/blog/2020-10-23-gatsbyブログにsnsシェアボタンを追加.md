---
template: BlogPost
path: /GatsbyブログにSNSシェアボタンを追加
date: 2020-10-23T10:29:21.552Z
title: GatsbyブログにSNSシェアボタンを追加
metaDescription: Gatsby製のブログにSNSへのシェアボタンを追加する方法。今回はLINE/Twitter/Facebookで作成。Gatsby/React/SNS
thumbnail: /assets/gatsby_x_sns_share.gif
---
今回はGatsby製のブログにSNSシェアボタンを追加する方法です

## 対象

* Gatsby製のブログ(React製のページ)を持っている
* 記事(ページ)のSNSshareボタンを追加したい

## 実装

### react-shareをインストール

まず以下を自身のサイトで実行してください

```
// npm
npm install react-share --save
// yarn
yarn add react-share
```

### 追加したいSNSを選ぶ

今回は一旦この3つを対象にしたいと思います

* Twitter
* Facebook
* Line

使えるSNSは[公式をご覧ください](https://www.npmjs.com/package/react-share)

### SNSshareコンポーネントを作成

src/componentsにSNSshare.js(任意の名前)を作成する。

この工程は必須ではないですがきれいにコーディングするにはコンポーネントに切り出しておくのがよさそうです。

### 上記3種のSNSボタンをimport

各SNSへ飛ぶためのボタンとアイコンを両方importし、中身を書きます

```javascript
// @./components/SNSshare.js

import React from 'react'
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon
} from 'react-share'

const SNSshare = ({articleUrl, articleTitle}) => {
    const buttonSize = 32
    return (
        <div className="SNSshare">
            <FacebookShareButton url={articleUrl}>
                <FacebookIcon size={buttonSize} round />
            </FacebookShareButton>

            <LineShareButton url={articleUrl}>
                <LineIcon size={buttonSize} round />
            </LineShareButton>

            <TwitterShareButton title={articleTitle} via={/your name} url={articleUrl}>
                <TwitterIcon size={buttonSize} round />
            </TwitterShareButton>
        </div>
    )
}

export default SNSshare
```

divタグについているclassNameは好きな名前でokです

### Twitterのとこのviaとは

Twitterのシェアボタンを押すと下のような画面になります

![TwitterShare](/assets/twitter_share.png)

この@以下にあたるところがviaです

つまり、自分のuserIDを@抜きで記述するとデフォルトでタグ付けしてもらえます

### 好きなページに配置

今回は全部のページに追加したいので、`layout.js`に配置します

```javascript
// @./components/layout.js
<-いろいろimport->
import SNSshare from "../components/SNSshare"

export default ({ children }) => {
  const windowUrl = (typeof window !== 'undefined' && window.location.href) ? window.location.href : '';
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header中身> 
      {children}
      <footer className="site-footer">
        // 今回はfooterに追加
        <SNSshare articleUrl={windowUrl} articleTitle={data.site.siteMetadata.title} />

        <p>&copy; {new Date().getFullYear()} yuzu</p>
      </footer>
    </div>
  )
}
```

### すこし困ったところを追記します

```javascript
const windowUrl = (typeof window !== 'undefined' && window.location.href) ? window.location.href : '';
…
<SNSshare articleUrl={windowUrl} ...>
```

`window.location.href`はjsにおける現在のURLを意味しています。 
なのでシェアしたいURLは今いるページのはずなのでこのように記述すれば良さそうなので`articleUrl={window.location.href}`とすればよさそう...

Netlifyでbuild中にエラーが起きました

```
WebpackError: ReferenceError: window is not defined
```

`window`が定義されていないよと怒られます。
詳しいことは分からないのですが、上のように記述すれば回避出来るらしい
[GatsbyにShare機能、OGPタグをつける](https://tech-blog.yoshikiohashi.dev/posts/start-gatsby-blog-share)

```javascript
articleTitle={data.site.siteMetadata.title}
```

`data.site.siteMetadata.title`はgraphQLによって取得されたページのタイトルに置き換わります

### 結果

![NonStyledButtons](/assets/non-styled-buttons.png)

このようになりました。
あとは適当にアイコン間のパディングをつけて完成です。

完成図はこのページの一番下にあるので、\
参考になったという方は是非shareしてみてください:)

## 参考

* [npm:react-share](https://www.npmjs.com/package/react-share)
* [GatsbyにShare機能、OGPタグをつける](https://tech-blog.yoshikiohashi.dev/posts/start-gatsby-blog-share)