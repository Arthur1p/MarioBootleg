const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const gravidade = 0.5

class Jogador {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }

    desenho() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.desenho()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravidade
        } else {
            this.velocity.y = 0
        }

    }
}

const jogador = new Jogador()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    jogador.update()

    if(keys.right.pressed){
        jogador.velocity.x = 5
    } else if (keys.left.pressed){
        jogador.velocity.x = -5
    } else {
        jogador.velocity.x = 0
    }
}

animate()

addEventListener('keydown', ({keyCode}) => {
    switch (keyCode){
        case 87:
            jogador.velocity.y -= 20

        case 68:
            keys.right.pressed = true
            break
        
        case 65:
            keys.left.pressed = true
            break

    }



})

addEventListener('keyup', ({keyCode}) => {
    switch (keyCode){
        case 87:
            jogador.velocity.y -= 20

        case 68:
            keys.right.pressed = false
            break
            
        case 65:
            keys.left.pressed = false
            break


    }



})