

window.gameLevels = {
  "Level-1": {
    level: 1,
    rows: 3,
    columns: 3,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationNinty"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: true,
        end: false,
        position: "rotationOneEighty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 2
    }, {
      pathElement: "path-2.png",
      amount: 1
    }],
    solution: [{
      row: 1,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 2,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 2,
      column: 1,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }],
    minClicks: 5,
    maxClicks: 9,
    nextLevel: "Level-2"
  },
  "Level-2": {
    level: 2,
    rows: 3,
    columns: 3,
    puzzle: [
      [{
        active: false,
        start: false,
        end: true,
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: false,
        end: false,
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: true,
        end: false,
        position: "rotationNinty"
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 2
    }, {
      pathElement: "path-2.png",
      amount: 3
    }],
    solution: [{
      row: 2,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 2,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 3,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }],
    minClicks: 11,
    maxClicks: 17,
    nextLevel: "Level-3"
  },
  "Level-4": {
    level: 4,
    rows: 3,
    columns: 3,
    puzzle: [
      [{
        active: false,
        start: true,
        end: false,
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false,
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationOneEighty"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationOneEighty"
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 2
    }, {
      pathElement: "path-2.png",
      amount: 3
    }],
    solution: [{
      row: 2,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 1,
      column: 2,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 3,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }],
    minClicks: 10,
    maxClicks: 16,
    nextLevel: "Level-5"
  },
  "Level-8": {
    level: 8,
    rows: 4,
    columns: 4,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false,
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false,
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false,
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: true,
        end: false,
        position: "rotationNinty"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationOneEighty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 2
    }, {
      pathElement: "path-2.png",
      amount: 5
    }],
    solution: [{
      row: 1,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 1,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 2,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 3,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 3,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }],
    minClicks: 16,
    maxClicks: 25,
    nextLevel: "Level-9"
  },
  "Level-9": {
    level: 9,
    rows: 4,
    columns: 4,
    puzzle: [
      [{
        active: false,
        start: true,
        end: false,
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false,
      }, {
        active: false,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: false,
        end: true,
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-3.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 3
    }, {
      pathElement: "path-2.png",
      amount: 4
    }],
    solution: [{
      row: 1,
      column: 2,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 1,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 3,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 4,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 4,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 3,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 3,
      column: 2,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }],
    minClicks: 18,
    maxClicks: 27,
    nextLevel: "Level-10"
  },
  "Level-12": {
    level: 12,
    rows: 4,
    columns: 4,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationNinty"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-4.png",
        position: "rotationNinty"
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-3.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: true,
        end: false,
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 1
    }, {
      pathElement: "path-2.png",
      amount: 7
    }],
    solution: [{
      row: 1,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 1,
      column: 3,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 2,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 2,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 3,
      column: 2,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 3,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 4,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 25,
    maxClicks: 40,
    nextLevel: "Level-13"
  },
  "Level-13": {
    level: 13,
    rows: 4,
    columns: 4,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationOneEighty"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-4.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false,
      }, {
        active: false,
        start: true,
        end: false,
        position: "rotationNinty"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 2
    }, {
      pathElement: "path-2.png",
      amount: 5
    }],
    solution: [{
      row: 1,
      column: 2,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 2,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 3,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 3,
      column: 3,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 4,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 4,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 15,
    maxClicks: 19,
    nextLevel: "Level-14"
  },
  "Level-14": {
    level: 14,
    rows: 4,
    columns: 4,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: true,
        end: false,
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationNinty"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-3.png",
        position: "original"
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-4.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-4.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false,
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationOneEighty"
      }],
      [{
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-2.png",
      amount: 6
    }, {
      pathElement: "path-4.png",
      amount: 1
    }],
    solution: [{
      row: 1,
      column: 3,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 2,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 2,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 3,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 3,
      column: 3,
      pathElement: "path-4.png",
      position: ["original", "rotationNinty", "rotationOneEighty", "rotationTwoSeventy"]
    }, {
      row: 4,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 4,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 18,
    maxClicks: 24,
    nextLevel: "Level-15"
  },
  "Level-15": {
    level: 15,
    rows: 5,
    columns: 5,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "rotationNinty"
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "rotationNinty"
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "original"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: true,
        end: false,
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "original"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-2.png",
      amount: 11
    }],
    solution: [{
      row: 1,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 5,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 2,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 2,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 3,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 3,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 3,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 4,
      column: 3,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 4,
      column: 5,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 5,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 5,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 37,
    maxClicks: 50,
    nextLevel: "Level-16"
  },
  "Level-16": {
    level: 16,
    rows: 5,
    columns: 5,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-4.png",
        position: "rotationNinty"
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: true,
        end: false,
        position: "rotationNinty"
      }],
      [{
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-3.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 3
    }, {
      pathElement: "path-2.png",
      amount: 7
    }],
    solution: [{
      row: 1,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 2,
      column: 4,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 3,
      column: 2,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 4,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 4,
      column: 3,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 4,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 5,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 5,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 27,
    maxClicks: 48,
    nextLevel: "Level-17"
  },
  "Level-17": {
    level: 17,
    rows: 5,
    columns: 5,
    puzzle: [
      [{
        active: false,
        start: true,
        end: false,
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-4.png",
        position: "rotationNinty"
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-3.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-1.png",
        position: "original"
      }, {
        active: false,
        start: false,
        end: true,
        position: "original"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 2
    }, {
      pathElement: "path-2.png",
      amount: 8
    }],
    solution: [{
      row: 1,
      column: 2,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 1,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 2,
      column: 3,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 3,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 3,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 4,
      column: 2,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 4,
      column: 3,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 5,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 5,
      column: 5,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 34,
    maxClicks: 50,
    nextLevel: "Level-18"
  },
  "Level-18": {
    level: 18,
    rows: 5,
    columns: 5,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationNinty"
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationTwoSeventy"
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-2.png",
        position: "rotationOneEighty"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: true,
        end: false,
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-1.png",
      amount: 4
    }, {
      pathElement: "path-2.png",
      amount: 5
    }, {
      pathElement: "path-3.png",
      amount: 1
    }],
    solution: [{
      row: 1,
      column: 1,
      pathElement: "path-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 2,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 1,
      column: 3,
      pathElement: "path-1.png",
      position: ["rotationNinty", "rotationTwoSeventy"]
    }, {
      row: 1,
      column: 4,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 1,
      pathElement: "path-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 2,
      column: 4,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 3,
      column: 4,
      pathElement: "path-3.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 3,
      column: 5,
      pathElement: "path-2.png",
      position: ["rotationNinty"]
    }, {
      row: 4,
      column: 5,
      pathElement: "path-1.png",
      position: ["original", "rotationOneEighty"]
    }, {
      row: 5,
      column: 5,
      pathElement: "path-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 25,
    maxClicks: 38,
    nextLevel: "Level-19"
  },
  "Level-19": {
    level: 19,
    rows: 5,
    columns: 5,
    puzzle: [
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationNinty"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-5.png",
        position: "original"
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-5.png",
        position: "rotationNinty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: false,
        start: true,
        end: false,
        position: "rotationTwoSeventy"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-7-2.png",
      amount: 8
    }, {
      pathElement: "path-6-1.png",
      amount: 2
    }],
    solution: [{
      row: 1,
      column: 3,
      pathElement: "path-7-2.png",
      position: ["original"]
    }, {
      row: 1,
      column: 4,
      pathElement: "path-7-2.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 3,
      pathElement: "path-7-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 2,
      column: 4,
      pathElement: "path-6-1.png",
      position: ["original"]
    }, {
      row: 3,
      column: 1,
      pathElement: "path-7-2.png",
      position: ["original"]
    }, {
      row: 3,
      column: 2,
      pathElement: "path-7-2.png",
      position: ["rotationNinty"]
    }, {
      row: 4,
      column: 1,
      pathElement: "path-7-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 4,
      column: 2,
      pathElement: "path-6-1.png",
      position: ["original"]
    }, {
      row: 4,
      column: 4,
      pathElement: "path-7-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 5,
      column: 2,
      pathElement: "path-7-2.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 26,
    maxClicks: 39,
    nextLevel: "Level-20"
  },
  "Level-20": {
    level: 20,
    rows: 5,
    columns: 5,
    puzzle: [
      [{
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: true,
        end: false,
        position: "rotationOneEighty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-7-1.png",
        position: "original"
      }, {
        active: false,
        start: false,
        end: true,
        position: "rotationNinty"
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false,
        pathElement: "path-6-2.png",
        position: "rotationOneEighty"
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }],
      [{
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }, {
        active: false,
        start: false,
        end: false
      }, {
        active: true,
        start: false,
        end: false
      }]
    ],
    dock: [{
      pathElement: "path-7-1.png",
      amount: 4
    }, {
      pathElement: "path-7-2.png",
      amount: 4
    }, {
      pathElement: "path-5.png",
      amount: 2
    }, {
      pathElement: "path-6-1.png",
      amount: 1
    }],
    solution: [{
      row: 1,
      column: 2,
      pathElement: "path-7-1.png",
      position: ["original"]
    }, {
      row: 1,
      column: 3,
      pathElement: "path-7-1.png",
      position: ["rotationNinty"]
    }, {
      row: 2,
      column: 3,
      pathElement: "path-5.png",
      position: ["rotationOneEighty"]
    }, {
      row: 3,
      column: 1,
      pathElement: "path-7-2.png",
      position: ["original"]
    }, {
      row: 3,
      column: 2,
      pathElement: "path-7-2.png",
      position: ["rotationNinty"]
    }, {
      row: 3,
      column: 3,
      pathElement: "path-5.png",
      position: ["rotationOneEighty"]
    }, {
      row: 4,
      column: 1,
      pathElement: "path-7-2.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 4,
      column: 2,
      pathElement: "path-6-1.png",
      position: ["original"]
    }, {
      row: 4,
      column: 4,
      pathElement: "path-7-2.png",
      position: ["rotationOneEighty"]
    }, {
      row: 5,
      column: 2,
      pathElement: "path-7-1.png",
      position: ["rotationTwoSeventy"]
    }, {
      row: 5,
      column: 3,
      pathElement: "path-7-1.png",
      position: ["rotationOneEighty"]
    }],
    minClicks: 34,
      maxClicks: 45,
      nextLevel: "None"
    },

  //_________________________________________________
  // This is where we build and test our levels

  // 15

    "Level-5": {
        level: 5,
        rows: 3,
        columns: 3,
        puzzle: [
            [{
                active: false,
                start: true,
                end: false,
                position: "rotationTwoSeventy"
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: false,
                start: false,
                end: true,
                position: "original"
            }, {
                active: false,
                start: false,
                end: false,
                pathElement: "path-2.png",
                position: "original"

            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }]
        ],
        dock: [{
            pathElement: "path-1.png",
            amount: 2
        }, {
            pathElement: "path-2.png",
            amount: 4
        }],
        solution: [{
            row: 1,
            column: 2,
            pathElement: "path-1.png",
            position: ["rotationNinty", "rotationTwoSeventy"]
        }, {
            row: 1,
            column: 3,
            pathElement: "path-2.png",
                position: ["rotationNinty"]
        }, {
            row: 2,
            column: 3,
            pathElement: "path-2.png",
            position: ["rotationOneEighty"]
        }, {
            row: 3,
            column: 2,
            pathElement: "path-2.png",
            position: ["rotationOneEighty"]
        }, {
            row: 3,
            column: 1,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }],
        minClicks: 17,
        maxClicks: 22,
        nextLevel: "Level-6"
    },


    //_______________________16______________________________//

    "Level-6": {
        level: 6,
        rows: 3,
        columns: 3,
        puzzle: [
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: false   ,
                start: true,
                end: false,
                position: "rotationNinty"
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: false,
                start: false,
                end: false,
                pathElement: "path-1.png",
                position: "rotationNinty"

            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: false,
                start: false,
                end: true,
                position: "rotationTwoSeventy"

            }, {
                active: true,
                start: false,
                end: false
            }]
        ],
        dock: [{
            pathElement: "path-1.png",
            amount: 2
        }, {
            pathElement: "path-2.png",
            amount: 4
        }],
        solution: [{
            row: 1,
            column: 2,
            pathElement: "path-1.png",
            position: ["rotationNinty", "rotationTwoSeventy"]
        }, {
            row: 1,
            column: 1,
            pathElement: "path-2.png",
            position: ["original"]
        }, {
            row: 2,
            column: 1,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }, {
            row: 2,
            column: 3,
            pathElement: "path-2.png",
            position: ["rotationNinty"]
        }, {
            row: 3,
            column: 3,
            pathElement: "path-2.png",
            position: ["rotationOneEighty"]
        }],
        minClicks: 14,
        maxClicks: 18,
        nextLevel: "Level-7"
    },

    //______________________level 17_______________________________//

    "Level-3": {
        level: 3,
        rows: 3,
        columns: 3,
        puzzle: [
            [{
                active: false,
                start: true,
                end: false,
                position: "original"
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false

            }, {
                active: false,
                start: false,
                end: true,
                position: "original"
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: true

            }, {
                active: true,
                start: false,
                end: false
            }]
        ],
        dock: [{
            pathElement: "path-1.png",
            amount: 1
        }, {
            pathElement: "path-2.png",
            amount: 4
        }],
        solution: [{
            row: 2,
            column: 1,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }, {
            row: 2,
            column: 2,
            pathElement: "path-2.png",
            position: ["rotationNinty"]
        }, {
            row: 3,
            column: 2,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }, {
            row: 3,
            column: 3,
            pathElement: "path-2.png",
                position: ["rotationOneEighty"]
        }],
        minClicks: 15,
        maxClicks: 22,
        nextLevel: "Level-4"
    },


    //______________________18_______________________________//

    "Level-7": {
        level: 7,
        rows: 3,
        columns: 3,
        puzzle: [
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: false,
                start: true,
                end: false,
                position: "rotationNinty"
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: false,
                start: false,
                end: false,
                pathElement: "path-3.png",
                position: "rotationNinty"

            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: true

            }, {
                active: false,
                start: false,
                end: true,
                position: "rotationOneEighty"
            }]
        ],
        dock: [{
            pathElement: "path-2.png",
            amount: 5
        }],
        solution: [{
            row: 1,
            column: 2,
            pathElement: "path-2.png",
            position: ["original"]
        }, {
            row: 2,
            column: 1,
            pathElement: "path-2.png",
            position: ["original"]
        }, {
            row: 2,
            column: 3,
            pathElement: "path-2.png",
            position: ["rotationNinty"]
        }, {
            row: 3,
            column: 1,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }, {
            row: 3,
            column: 2,
            pathElement: "path-2.png",
            position: ["rotationOneEighty"]
        }],
        minClicks: 14,
        maxClicks: 19,
        nextLevel: "Level-8"
    },


    //________________________19_____________________________//

    "Level-10": {
        level: 10,
        rows: 4,
        columns: 4,
        puzzle: [
            [{
                active: false,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: false,
                start: true,
                end: false,
                position: "original"
            }, {
                active: true,
                start: false,
                end: false

            }, {
                active: false,
                start: false,
                end: false,
                pathElement: "path-4.png",
                position: "original"
            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: true

            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: false,
                start: false,
                end: true,
                position: "rotationNinty"
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: true

            }, {
                active: false,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: true
            }]
        ],
        dock: [{
            pathElement: "path-1.png",
            amount: 1
        },{
            pathElement: "path-2.png",
            amount: 7
        }],
        solution: [{
            row: 3,
            column: 1,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }, {
            row: 3,
            column: 2,
            pathElement: "path-2.png",
            position: ["rotationOneEighty"]
        }, {
            row: 2,
            column: 2,
            pathElement: "path-2.png",
            position: ["original"]
        }, {
            row: 1,
            column: 3,
            pathElement: "path-2.png",
            position: ["original"]
        }, {
            row: 1,
            column: 4,
            pathElement: "path-2.png",
            position: ["rotationNinty"]
        }, {
            row: 2,
            column: 4,
            pathElement: "path-2.png",
            position: ["rotationOneEighty"]
        }, {
            row: 3,
            column: 3,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }],
        minClicks: 27,
        maxClicks: 34,
        nextLevel: "Level-11"
    },

    //_______________________20______________________________//

    "Level-11": {
        level: 11,
        rows: 4,
        columns: 4,
        puzzle: [
            [{
                active: false,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: true,
                start: false,
                end: false
            }, {
                    active: false,
                start: false,
                end: false,
                pathElement: "path-3.png",
                position: "original"

            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: true,
                start: false,   
                end: false
            }],
            [{
                active: false,
                start: false,
                end: false,
                pathElement: "path-1.png",
                position: "original"
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: false,
                start: false,
                end: false,
                pathElement: "path-4.png",
                position: "original"
            }, {
                active: true,
                start: false,
                end: false
            }],
            [{
                active: false,
                start: true,
                end: false,
                position: "rotationOneEighty"
            }, {
                active: false,
                start: false,
                end: false
            }, {
                active: true,
                start: false,
                end: false
            }, {
                active: false,
                start: false,
                end: true,
                position: "rotationNinty"
            }]
        ],
        dock: [{
            pathElement: "path-1.png",
            amount: 3
        },{
            pathElement: "path-2.png",
            amount: 7
        }],
        solution: [{
            row: 1,
            column: 2,
            pathElement: "path-2.png",
            position: ["original"]
        }, {
            row: 1,
            column: 3,
            pathElement: "path-1.png",
            position: ["rotationNinty"]
        }, {
            row: 1,
            column: 4,
            pathElement: "path-2.png",
            position: ["rotationNinty"]
        }, {
            row: 2,
            column: 1,
            pathElement: "path-2.png",
            position: ["original"]
        }, {
            row: 2,
            column: 3,
            pathElement: "path-2.png",
            position: ["rotationNinty"]
        }, {
            row: 2,
            column: 4,
            pathElement: "path-1.png",
            position: ["original"]
        }, {
            row: 3,
            column: 2,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }, {
            row: 3,
            column: 4,
            pathElement: "path-2.png",
            position: ["rotationOneEighty"]
        }, {
            row: 4,
            column: 3,
            pathElement: "path-2.png",
            position: ["rotationTwoSeventy"]
        }],
        minClicks: 22,
        maxClicks: 29,
        nextLevel: "Level-12"
    }
};