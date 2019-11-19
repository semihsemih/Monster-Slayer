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
    },
    giveUp: function() {
      this.heroHealth = 0;
    },
    monsterAttack: function () {
      const point = this.randomPoint(this.monsterAttackMultiplier);
      this.heroHealth -= point;
    },
    gameReset: function () {
      this.heroHealth = 100;
      this.monsterHealth = 100;
    }
  },
  computed: {
    heroProgress: function () {
      return {
        width : this.heroHealth + '%'
      }
    },
    monsterProgress: function () {
      return {
        width : this.monsterHealth + '%'
      }
    }
  },
  watch: {
    heroHealth: function (event) {
      if (this.heroHealth >= 100) {
        this.heroHealth = 100;
      } else if (this.heroHealth <= 0) {
        this.heroHealth = 0;
        if (confirm('YOU LOST! Do you want to try again?')) {
          this.gameReset();
        }
      }
    },
    monsterHealth: function (event) {
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        if (confirm('YOU WIN! Do you want to try again?')) {
          this.gameReset();
        }
      }
    }
  }
});