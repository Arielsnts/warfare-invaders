import { PATH_HERO } from "../utils/constants.js"
import Gunshot from "./Gunshot.js"

class Player{
    constructor(canvasWidth, canvasHeight) {
        this.alive = true
        this.width = 70
        this.heigth = 70
        this.velocity = 8
        this.position = {
            x: canvasWidth / 2 - this.width / 2,
            y: canvasHeight - this.heigth - 25
        }

        this.image = this.getImage(PATH_HERO)
    }

    getImage(path) {
        const image = new Image()
        image.src = path
        return image
    }

    moveLeft() {
        this.position.x -= this.velocity
    }
    
    moveRigth() {
        this.position.x += this.velocity
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.heigth)
    }

    shot(shotList) {
        const s = new Gunshot({
            x: (this.position.x + this.width / 2) + 7,
            y: this.position.y - 5
        }, -8)

        shotList.push(s)
    }

    hit(shot) {
        return (
        shot.position.x >= this.position.x + 10 &&
        shot.position.x <= this.position.x + 10 + this.width - 20 &&
        shot.position.y >= this.position.y &&
        shot.position.y <= this.position.y + this.width
        )
    }
}


export default Player
