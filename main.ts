namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const THEMOSTERFORNPC = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.THEMOSTERFORNPC, function (sprite, otherSprite) {
    NPC_MOSTER.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnRandomTile(YOU, assets.tile`myTile6`)
    pause(100)
    tiles.setCurrentTilemap(tilemap`level3`)
    pause(100)
    tiles.setCurrentTilemap(tilemap`level7`)
    pause(100)
    tiles.setCurrentTilemap(tilemap`level6`)
    pause(100)
    tiles.setCurrentTilemap(tilemap`level7`)
    pause(100)
    tiles.setCurrentTilemap(tilemap`level6`)
    pause(100)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(YOU, assets.tile`myTile26`)
    YOU.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f c c f f f f f f f c . 
        c c c f f f d d f f c c . 
        f f f f f d d f f f f f . 
        f f f b f d d f b f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . . f 1 d d d d 1 f . . . 
        . 1 f 1 1 1 1 1 1 f 1 . . 
        . 1 f 1 1 1 1 1 1 f 1 . . 
        . d f 6 6 6 6 6 6 f d . . 
        . . f 6 6 f f 6 6 f . . . 
        . . f b b f f b b f . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(NPC_MOSTER, assets.tile`myTile35`)
    tiles.placeOnRandomTile(YOU, sprites.dungeon.collectibleInsignia)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    sprites.destroy(NPC)
    sprites.destroy(NPC)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(YOU, assets.tile`myTile21`)
    NPC_MOSTER = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 f 2 2 2 2 2 2 2 . 
        . 2 2 f f 2 2 2 2 2 2 . 
        . f 2 f f f 2 f f 2 f . 
        . 2 f 2 2 f f 2 2 f f . 
        . . 2 f f 2 2 f f f . . 
        . . . f f 2 f f 2 . . . 
        . f f f 2 f f 2 f f f . 
        . 2 f f 2 f f 2 f f f . 
        . f f f 2 f 2 2 f f 2 . 
        . f f f f 2 2 f f f f . 
        . . . f f f f f f . . . 
        . . . 2 f . . f 2 . . . 
        `, SpriteKind.THEMOSTERFORNPC)
    tiles.placeOnRandomTile(NPC_MOSTER, assets.tile`myTile23`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    NPC_MOSTER.follow(YOU)
    NPC_MOSTER.setImage(img`
        . . . . . . . . . . . . 
        . . . . 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 f 2 2 2 2 2 2 2 . 
        . 2 2 f f 2 2 2 2 2 2 . 
        . f 2 f f f 2 f f 2 f . 
        . 2 f 2 2 f f 2 2 f f . 
        . . 2 f f 2 2 f f f . . 
        . . . f f 2 2 f 2 . . . 
        . f f f f 2 2 f f f f . 
        . 2 f f f 2 2 f f f f . 
        . f f f f 2 2 f f f 2 . 
        . f f f f 2 2 f f f f . 
        . . . f f f f f f . . . 
        . . . 2 f . . f 2 . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level14`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnRandomTile(YOU, assets.tile`myTile33`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    YOU.setImage(img`
        ........ffff........
        ......ffffffff......
        .....ffffffcfff.....
        ....fff22fccfffc....
        ....f22c22ff222c....
        ....c2cfffddffcc....
        ....ff2ffddfffff....
        ....fff2fd2f2fff....
        .....fd2fd2f2df.....
        .....fddd2d2ddf.....
        ......f2dddd2f......
        .....1f222112f1.....
        .....1f121211f1.....
        .....df111222fd.....
        ......f22ff22f......
        ......fbbffbbf......
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    YOU.x += 10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
    sprites.destroy(NPC)
    sprites.destroy(NPC_MOSTER)
    sprites.destroy(YOU)
    game.showLongText("DEMO THE VIOLENT STRESS", DialogLayout.Bottom)
    game.showLongText("AUTHOR:MING TAO", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    YOU.y += 10
})
let NPC_MOSTER: Sprite = null
let YOU: Sprite = null
let NPC: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
NPC = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f 2 f f f f f f . 
    . f f 4 2 2 f f f f f . 
    . f f 4 4 2 2 f f f f . 
    . 4 f 4 4 4 2 4 4 f 4 . 
    . 2 2 f f 4 2 f f 4 4 . 
    . . 2 4 4 2 2 4 4 4 . . 
    . . . 4 4 2 4 4 2 . . . 
    . 1 f 1 2 1 1 2 1 f 1 . 
    . 2 f 1 2 1 1 2 1 f 1 . 
    . 1 f 1 2 1 2 2 1 f 2 . 
    . 4 f 1 1 2 2 1 1 f 4 . 
    . . . f f f f f f . . . 
    . . . 2 f . . f 2 . . . 
    `, SpriteKind.NPC)
tiles.placeOnRandomTile(NPC, assets.tile`myTile11`)
YOU = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c 2 2 f . . 
    f f f f f f c c f 2 f c . 
    f f 2 c f f f f f 2 f c . 
    c 2 2 f f f d d f f c c . 
    f 2 f f f 2 d f f 2 2 f . 
    f f f b 2 d d f 2 f f f . 
    . f d 1 f d d f 2 d f . . 
    . f d d d 2 d d d d f . . 
    . . f 1 d d d d 1 f . . . 
    . 1 f 1 2 1 1 1 1 f 2 . . 
    . 2 f 1 2 2 1 2 1 f 1 . . 
    . d f 2 6 6 6 2 6 f d . . 
    . . f 6 6 f f 6 2 f . . . 
    . . f 2 b f f b b f . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(YOU)
controller.moveSprite(YOU)
NPC = sprites.create(img`
    . . . . . . 1 1 c c 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 c 1 1 1 1 1 1 c 1 . . 
    . . . 1 1 c 1 1 1 1 1 1 c 1 1 . 
    . . . f 1 1 2 2 2 8 8 8 c 1 f . 
    . . . f 1 1 1 1 1 1 1 1 1 1 f . 
    . . . f 1 1 1 1 1 1 1 1 1 1 f . 
    . . . f 1 c 1 1 1 1 1 1 c 1 f . 
    . . . 1 1 c 1 c c c c 1 c 1 1 . 
    . . . 1 1 1 c b b b b c 1 1 1 . 
    . . . 1 1 1 b b b b b b 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . f 1 d 1 1 1 1 1 1 d 1 f . 
    . . . f 1 6 d 1 b b 1 d 6 1 f . 
    . . . f f 1 1 1 1 1 1 1 1 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.NPC)
tiles.placeOnRandomTile(NPC, assets.tile`myTile14`)
