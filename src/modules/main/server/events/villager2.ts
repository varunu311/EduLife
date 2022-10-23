import { RpgEvent, EventData, RpgPlayer} from '@rpgjs/server'
import defaultGui from '@rpgjs/default-gui' 
import fetch from 'node-fetch';
const FormData = require('form-data');

@EventData({
    name: 'Savings', 
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

        await player.showText('I will add your money to your savings!', {
            talkWith: this
        })

        const form = new FormData();
        form.append('username', "smirk")
        form.append('amount', '10')
        
        const resp = await fetch("http://127.0.0.1:5000/addmoney", {
            method: 'POST',
            body: form
          }); 

        player.gold -= 10
    }
} 