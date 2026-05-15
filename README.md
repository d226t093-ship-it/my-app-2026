# 間違い探しゲームアプリ

HTML, CSS, JavaScriptで作られたシンプルな間違い探しゲームです。GitHub Pagesで簡単に公開できます。

## 使い方

1.  `index.html` をブラウザで開くとゲームが始まります。
2.  左右の画像を見比べて、違う箇所をクリックしてください。
3.  制限時間内にすべての間違いを見つけるとクリアです。

## 自分の画像を追加する方法

`levels.js` ファイルを編集することで、独自の画像やレベルを追加できます。

```javascript
const levels = [
    {
        id: 1,
        title: "レベルタイトル",
        original: "assets/original_image.jpg", // オリジナル画像のパス
        modified: "assets/modified_image.jpg", // 修正済み画像のパス
        timeLimit: 60, // 制限時間（秒）
        differences: [
            // x, y は画像左上を (0,0) とした時のパーセンテージ(0-100)
            // radius は当たり判定の半径（パーセンテージ）
            { id: 1, x: 20, y: 30, radius: 5 },
            { id: 2, x: 70, y: 50, radius: 5 }
        ]
    }
];
```

## GitHub Pages での公開手順

1.  このリポジトリを GitHub にプッシュします。
2.  リポジトリの **Settings** > **Pages** を開きます。
3.  **Build and deployment** > **Source** で `Deploy from a branch` を選択します。
4.  `main` ブランチを選択して **Save** をクリックします。
5.  数分後、公開されたURLが表示されます。
