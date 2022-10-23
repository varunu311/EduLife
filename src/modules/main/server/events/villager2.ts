import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

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
        await player.changeMap("simplemap3", {x: 200, y: 200})
        player.gold += 100
    }
} 