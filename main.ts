info.onCountdownEnd(function () {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    info.changeScoreBy(1)
    mySprite.setImage(assets.image`A static Down`)
    mySprite.setImage(assets.image`A static`)
    projectile = sprites.createProjectileFromSprite(assets.image`Big Star`, mySprite, randint(0, 10), randint(-100, 100))
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`TheStage`)
game.splash("press A")
info.startCountdown(10)
mySprite = sprites.create(assets.image`A static`, SpriteKind.Player)
