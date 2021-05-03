## アプリの概要
- 英単語帳アプリ
  - 日本語訳を表示して 英単語を入力 あっていれば 英語の音声を流す。
  - 英単語、発音 ボタンを用意し、入力されていなくても 確認できる。
  - 英単語に対し 例文を１つ用意。日本語訳を表示して 英語表示ボタンと 発音ボタンを用意する。
  - 英語の文法勉強 英語例文中の 英単語をランダムに表示して 並び替えて回答する。

## 開発環境
- React + TypeScript
- node js バージョン 15.9.0
- google chrome
- vs code
- git
- yarn

## 開発環境作成手順
1. node js の インストールは各環境によって異なる為 随時更新
- (mac)
<br/>
 homebrew インストール
 homebrewで nvm インストール
 nvmで node js v15.9.0 をインストール
 git で アプリのソースコードをダウンロード
 yarn で 必要な node js の パッケージをダウンロード
 yarn で ローカル環境での実行
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
 brew install nvm
 nvm install v15.9.0
 node install yarn -g
 git clone https://github.com/nishi-shira-app/english_words.git
 cd english_words
 yarn install
 yarn start
