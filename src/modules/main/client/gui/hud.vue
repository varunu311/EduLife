<template>
    <div class="health-bar">
        <p>{{ hp }} / {{ maxHp }}</p>
        <div class="bar">
            <div class="inner-bar" :style="{ width }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hud',
    data() {
        return {
            hp: 19,
            maxHp: 90
        }
    },
    mounted() {
       // We listen to the change in HP
    },
    computed: {
        width() {
            return ((this.hp / this.maxHp) * 100) + '%'
        }
    }
}
</script>

<style>
.health-bar {
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
    background: rgba(0, 0, 0, 0.3)
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