import 'phaser';
import Unit from './Unit';

export default class Enemy extends Unit {
  contructor(scene, x, y, texture, frame, type, hp, damage) {
    super(this, scene, x, y, texture, frame, type, hp, damage);
  }
}
