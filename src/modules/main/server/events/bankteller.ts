import { RpgEvent, EventData, RpgPlayer} from '@rpgjs/server'
import defaultGui from '@rpgjs/default-gui' 
import fetch from 'node-fetch';
const FormData = require('form-data');

@EventData({
    name: 'EV-3', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BankEvent extends RpgEvent {
    onInit() {
        this.setGraphic('hudsun')
    }
    async onAction(player: RpgPlayer) {

        player.gold += 100
    }
} 