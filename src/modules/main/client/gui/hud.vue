<template>
    <div class="coin">
            {{ gold }}

</div>
    <div class="health-bar">
        <p>{{ hp }} / {{ maxHp }}</p>
        <div class="bar">
            <div class="inner-bar" :style="{ width }"></div>
        </div>
        
    </div>

    <div class="backpack">

    </div>
    
</template>

<script>
export default {
    name: 'hud',
    inject: ['rpgCurrentPlayer'],
    data() {
        return {
            hp: 90,
            maxHp: 90,
            gold: 0
        }
    },
    mounted() {
        this.obsCurrentPlayer = this.rpgCurrentPlayer
            .subscribe(({ object }) => {
                this.gold = object.gold
            })


    },
    computed: {
        width() {
            return ((this.hp / this.maxHp) * 100) + '%'
        }
    }
}
</script>

<style>

.coin {
    background-image: url(../images/coin.png);
    background-size: contain;
    width: 100px;
    position: absolute;
    text-align: center;
    
    margin-top: 10px;
    margin-right: 10px;
    background-repeat: no-repeat;
}

.backpack {
    background-image: url(../images/backpack.png);
    background-size: contain;
    width: 50px;
    height: 50px;
    position: relative;
    text-align: center;
    
    margin-top: 10px;
    margin-right: 10px;
    background-repeat: no-repeat;
}

.health-bar {
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
    

}

.health-bar p {
    margin: 5px;
    color: white;
    font-size: 21px;
    font-weight: bold;
}

.bar {
    border: 2px solid black;
    border-radius: 5px;
    position: relative;
}

.inner-bar {
  background: #c54;
  height: 10px;
  position: relative;
  transition: width .5s linear;
}
</style>