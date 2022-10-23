import { RpgPlayer, RpgPlayerHooks, Control, Move, RpgClassMap, RpgMap } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.setGraphic('male012')
        player.setHitbox(16, 16)
        player.changeMap('simplemap')
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        
        if (player.getVariable('AFTER_INTRO')) {
            return
        }

        player.setVariable('USER', "smirk")

        await player.showText('Hello, welcome to EduLife! If you’re here, that means you have a curiosity of how life skills work. Thankfully, this is the game for you! ')
        await player.showText('Before jumping in, use the WASD controls to move your character.')
        await player.showText('Great! Now, walk to the woman wearing pink and press the ENTER button to interact with them!')
        await player.showText('And, please, support the project on github https://github.com/varunu311/EduLife ! :)')
        
        player.setVariable('AFTER_INTRO', true)
        

        player.gui('hud').open()
        
    }
}