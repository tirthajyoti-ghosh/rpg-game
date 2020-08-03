import 'phaser';

export default class Unit extends Phaser.GameObjects.Sprite {
  contructor(scene, x, y, texture, frame, type, hp, damage) {
    super(this, scene, x, y, texture, frame);

    this.type = type;
    this.maxHp = this.hp = hp;
    this.damage = damage; // default damage 
  }

  takeDamage(damage) {
    this.hp -= damage;
  }

  attack(target) {
    target.takeDamage(this.damage);
  }
}
