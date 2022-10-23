import { RpgMap, MapData } from '@rpgjs/server'
import { VillagerEvent } from '../events/villager'
import { VillagerEvent2 } from '../events/villager2'

@MapData({
    id: 'simplemap',
    file: require('./tmx/simplemap.tmx'),
    name: 'Forest',
    events: [
        VillagerEvent, VillagerEvent2
    ]
})
export class SampleMap extends RpgMap {}