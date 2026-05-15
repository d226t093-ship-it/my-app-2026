const levels = [
    {
        id: 1,
        title: "レベル 1: サンプル",
        // サンプルとしてPlaceholder.comの画像を使用
        original: "https://via.placeholder.com/600x400/4a90e2/ffffff?text=Original+Image",
        modified: "https://via.placeholder.com/600x400/4a90e2/ffffff?text=Modified+Image",
        timeLimit: 60,
        differences: [
            // 座標は画像に対するパーセンテージ(%)で指定
            { id: 1, x: 20, y: 30, radius: 5 },
            { id: 2, x: 70, y: 50, radius: 5 },
            { id: 3, x: 40, y: 80, radius: 5 }
        ]
    }
    // ここにレベルを追加できます
];
