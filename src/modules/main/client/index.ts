import { RpgClient, RpgModule } from '@rpgjs/client'
import { Characters } from './characters/characters'
import hud from './gui/hud.vue'

@RpgModule<RpgClient>({ 
    spritesheets: [
        Characters
    ],
    gui: [
        hud
    ]
})
export default class RpgClientModuleEngine {}