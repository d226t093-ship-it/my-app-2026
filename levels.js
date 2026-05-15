const levels = [
    {
        id: 1,
        title: "レベル 1: のどかな風景",
        original: "assets/original.svg",
        modified: "assets/modified.svg",
        timeLimit: 60,
        differences: [
            { id: 1, x: 33.3, y: 22.5, radius: 8 }, // 雲 (Cloud - centered at 200/600, 90/400)
            { id: 2, x: 34.2, y: 61.2, radius: 6 }, // 窓 (Window 2 - centered at 205/600, 245/400)
            { id: 3, x: 68.3, y: 55, radius: 10 }   // 木の葉 (Tree leaves - centered at 410/600, 220/400)
        ]
    }
];
