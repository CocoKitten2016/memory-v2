namespace SpriteKind {
    export const glyph = SpriteKind.create()
    export const UI = SpriteKind.create()
}
function InitUI() {
    mySprite = sprites.create(imageList[0], SpriteKind.UI)
    mySprite.setPosition(60, 90)
    mySprite = sprites.create(imageList[1], SpriteKind.UI)
    mySprite.setPosition(80, 90)
    mySprite = sprites.create(imageList[2], SpriteKind.UI)
    mySprite.setPosition(100, 90)
    mySprite = sprites.create(imageList[3], SpriteKind.UI)
    mySprite.setPosition(60, 108)
    mySprite = sprites.create(imageList[4], SpriteKind.UI)
    mySprite.setPosition(80, 108)
    mySprite = sprites.create(imageList[5], SpriteKind.UI)
    mySprite.setPosition(100, 108)
    CursorSprite = sprites.create(img`
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 . . . . . . 1 1 1 1 1 
        `, SpriteKind.UI)
    CursorSprite.setPosition(60, 90)
    curX = 0
    curY = 0
}
function PlaySequence() {
    for (let index2 = 0; index2 <= CodeSequence.length - 1; index2++) {
        CurrentIndex = index2
        AddToSpriteList()
        pause(200)
    }
    pause(600)
    for (let value2 of spriteList) {
        value2.destroy()
    }
    CurrentIndex = 0
    PlayerTurn = true
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCurPos()
})
function AddToSequence() {
    CodeSequence.push(randint(0, 5))
}
function InitSounds2() {
    SoundList = [
        165,
        175,
        196,
        220,
        247,
        262
    ]
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerTurn == true) {
        CursorAt = curX + curY * 3
        if (CursorAt == CodeSequence[CurrentIndex]) {
            AddToSpriteList()
            info.changeScoreBy(1)
            CurrentIndex += 1
            if (CurrentIndex == CodeSequence.length) {
                NextLevel()
            }
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
        }
    }
})
function InitImages() {
    imageList = [
        img`
        e e e . . . . e e e . . . . 
        c 1 1 c . . c 1 1 c . . . . 
        c b 1 1 f f 1 1 b c . . . . 
        c 3 b 1 1 b 1 b 3 c . . . . 
        f b 3 1 1 1 1 3 b f . . . . 
        e 1 1 1 1 1 1 1 1 e . . . . 
        e 1 f 1 1 1 1 f 1 e . b f b 
        f 1 1 1 3 3 1 1 1 f . f 1 f 
        f b 1 1 1 1 1 1 2 f . f 1 f 
        . f 2 2 2 2 2 2 b b f f 1 f 
        . f b 1 5 5 1 1 1 b b 1 b f 
        . f 1 1 1 1 1 b 1 1 f f f . 
        . f 1 f f f 1 f f 1 f . . . 
        . f f . . f f . . f f . . . 
        `,
        img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `,
        img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `,
        img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `,
        img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `,
        img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `
    ]
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCurPos()
})
info.onScore(300, function () {
    sprites.destroy(CursorSprite)
    pause(100)
    CursorSprite = sprites.create(img`
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        `, SpriteKind.UI)
    CursorSprite.setPosition(60, 90)
})
function UpdateCurPos() {
    CursorSprite.x = 60 + 20 * curX
    CursorSprite.y = 90 + 18 * curY
}
info.onScore(100, function () {
    sprites.destroy(CursorSprite)
    pause(100)
    CursorSprite = sprites.create(img`
        5 5 5 5 5 . . . . . . 5 5 5 5 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 . . . . . . . . . . . . . . 5 
        5 5 5 5 5 . . . . . . 5 5 5 5 5 
        `, SpriteKind.UI)
    CursorSprite.setPosition(60, 90)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.min(2, curX + 1)
    UpdateCurPos()
})
function InitSequence() {
    for (let index3 = 0; index3 <= 2; index3++) {
        AddToSequence()
    }
}
function NextLevel() {
    PlayerTurn = false
    pause(500)
    for (let value3 of spriteList) {
        value3.destroy()
    }
    AddToSequence()
    PlaySequence()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.min(1, curX + 1)
    UpdateCurPos()
})
function AddToSpriteList() {
    x = CurrentIndex % 9 * 17
    y = Math.floor(CurrentIndex / 9) * 17
    mySprite = sprites.create(imageList[CodeSequence[CurrentIndex]], SpriteKind.glyph)
    spriteList[CurrentIndex] = mySprite
    mySprite.left = x + 5
    mySprite.top = y + 20
    music.playTone(SoundList[CodeSequence[CurrentIndex]], music.beat(BeatFraction.Half))
}
info.onScore(200, function () {
    sprites.destroy(CursorSprite)
    pause(100)
    CursorSprite = sprites.create(img`
        8 8 8 8 8 . . . . . . 8 8 8 8 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 8 8 8 8 . . . . . . 8 8 8 8 8 
        `, SpriteKind.UI)
    CursorSprite.setPosition(60, 90)
})
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
let y = 0
let x = 0
let CursorAt = 0
let SoundList: number[] = []
let PlayerTurn = false
let CurrentIndex = 0
let CodeSequence: number[] = []
let curY = 0
let curX = 0
let CursorSprite: Sprite = null
let imageList: Image[] = []
let mySprite: Sprite = null
let spriteList: Sprite[] = []
music.play(music.stringPlayable("C5 A F C5 E F A C5 ", 120), music.PlaybackMode.LoopingInBackground)
let index = 0
let value = 0
game.showLongText("Memorize the sequence and replay it", DialogLayout.Bottom)
spriteList = sprites.allOfKind(SpriteKind.glyph)
info.setScore(0)
info.setLife(3)
InitImages()
InitSounds2()
InitUI()
InitSequence()
PlaySequence()
