
import { _decorator, Component, Node } from 'cc';
import { chargeEnd } from './chargeEnd';
import { CircuitItem } from './CircuitItem';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Bulb
 * DateTime = Sat Nov 05 2022 17:50:48 GMT+0530 (India Standard Time)
 * Author = Puru
 * FileBasename = Bulb.ts
 * FileBasenameNoExtension = Bulb
 * URL = db://assets/scripts/Bulb.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Battery')
export class Battery extends CircuitItem {
    type=2;

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
