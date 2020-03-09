# Mystery Dungeon RTA FES Layouts
不思議のダンジョンシリーズRTAフェスというイベント用に作成したNodeCGのbundleです。  
This is the [NodeCG](http://github.com/nodecg/nodecg) bundle used for the streaming overlay in Mystery Dungeon RTA FES.  

## Installation
- NodeCGを何らかの方法でインストールします。(おすすめはnodecg-cliの実行)
- `/bundle`ディレクトリ内に[nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol)と当バンドルのインストールを行います。
### インストール手順例
```
npm install nodecg-cli -g
nodecg setup
nodecg install speedcontrol/nodecg-speedcontrol
nodecg install yagamuu/mysrtafes-layouts
```
- NodeCGをインストールしたディレクトリ内の`/cfg`ディレクトリに`nodecg-speedcontrol.json`を作成し設定を行ってください。
- コンフィグファイルの`schedule`の下に以下のデータを流します。
```json
...
"schedule": {
        "customData": [
            {
                "name": "Layout Image",
                "key": "layoutImage",
                "ignoreMarkdown": false
            },
            {
                "name": "Commentator",
                "key": "commentator",
                "ignoreMarkdown": false
            }
        ]
    }
```
  - コンフィグファイルの詳細は[こちらのドキュメント](https://github.com/speedcontrol/nodecg-speedcontrol/blob/master/READMES/Configuration.md)を参照してください。

## Usage
- `npm run start`を実行しNodeCGを起動したら、ダッシュボード画面からHoraroのスケジュール情報をインポートします。
- 当バンドルでは基本的に各種情報を1枚の背景画像に記載し、Horaro上に設定した背景画像ファイル名をgraphicsに反映するという特殊な運用を行っています。
  - この運用で動作させる場合はHoraro上に`Layout Image`という列を作成し、中に指定のゲーム時に使用したい画像ファイル名を入力してください。
- 他の基本的なNodeCGバンドル同様にダッシュボード上で入力した各種情報を動的に表示する機能も仮ですが存在します。こちらは`Layout Image`が未設定の場合に機能します。
  - 解説者を表示したい場合はダッシュボードから`Commentator`という列に解説者名を入力してください。
  - ただし走者、解説者の各種SNS情報は現状入力できません。~~納期の都合で未実装~~

## Credits
- [NodeCG](https://github.com/nodecg/nodecg): Main framework.
- [nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol): NodeCG bundle for broadcast graphics framework/application.
- [nodecg-vue-ts-template](https://github.com/zoton2/nodecg-vue-ts-template): Template for NodeCG bundles that use Vue.js and TypeScript.
- [moka](https://mokaplus.net): Graphics design.