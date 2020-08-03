import 'phaser';
import Unit from './Unit';

export default class PlayerCharacter extends Unit {
  contructor(scene, x, y, texture, frame, type, hp, damage) {
    super(this, scene, x, y, texture, frame, type, hp, damage);

    this.flipX = true;      
    this.setScale(2);
  }
}
