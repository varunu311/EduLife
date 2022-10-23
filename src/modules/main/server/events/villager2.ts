import { RpgEvent, EventData, RpgPlayer} from '@rpgjs/server'
import defaultGui from '@rpgjs/default-gui' 
import fetch from 'node-fetch';
const FormData = require('form-data');

@EventData({
    name: 'EV-2', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class VillagerEvent2 extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {

        const form = new FormData();
        form.append('username', "smirk");
        
        const response = await fetch('https://webhook.site/01d3bf18-ee12-44dc-ba16-53de2b3a11bc/get')
        const data = await response.json()

        console.log(data)
        player.gold += 100
    }
} 