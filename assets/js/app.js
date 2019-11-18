new Vue({
  el: '#app',
  data: {
    heroHealth: 100,
    monsterHealth: 100,
    heroAttackMultiplier: 10,
    heroSpecialAttackMultiplier: 25,
    heroHealUpMultiplier: 20,
    monsterAttackMultiplier: 15,
    gameIsOn: false
  },
  methods: {
    startGame: function () {
      this.gameIsOn = true;
    },
    randomPoint: function (multiplier) {
      return Math.ceil(Math.random() * multiplier);
    },
    attack: function () {
      const point = this.randomPoint(this.heroAttackMultiplier);
      this.monsterHealth -= point;
      this.monsterAttack();

    },
    specialAttack: function () {
      const point = this.randomPoint(this.heroSpecialAttackMultiplier);
      this.monsterHealth -= point;
      this.monsterAttack();
    },
    healUp: function () {
      const point = this.randomPoint(this.heroHealUpMultiplier);
      this.heroHealth += point;
      console.log('Hero: ' + this.heroHealth)
      console.log('Monster: ' + this.monsterHealth)
    },
    giveUp: function() {
      this.heroHealth = 0;
      console.log('Hero: ' + this.heroHealth)
      console.log('Monster: ' + this.monsterHealth)
    },
    monsterAttack: function () {
      const point = this.randomPoint(this.monsterAttackMultiplier);
      this.heroHealth -= point;
      console.log('Hero: ' + this.heroHealth)
      console.log('Monster: ' + this.monsterHealth)
    }
  }
});