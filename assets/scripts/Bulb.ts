
import { _decorator, Component, Node, Sprite, SpriteFrame, Color, CCInteger } from 'cc';
import { chargeEnd } from './chargeEnd';
import { Level } from './Level';
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
 
@ccclass('Bulb')
export class Bulb extends CircuitItem {
   
    
    @property({type:Sprite})
    bulbSprite :Sprite = null;

    @property({type:SpriteFrame})
    frames:SpriteFrame[] = [];
    
    @property({type:Sprite})
    stripe:Sprite= null;
    
    hexCode:number  = 0;
    type=1;
  
    start () {
        // [3]
        super.start();
        let color=Color.BLUE;
        switch(this.hexCode){
            case 0:Color.BLUE;
            case 1:Color.RED;
            default:Color.YELLOW;
    
        }
        this.stripe.color=color;
    }
    checkConnection(){
        
        super.checkConnection();
        console.log(this.node.name+"checkConnection"+this.ends[0]._connected,this.ends[1]._connected);
        if(this.ends[0]._connected&&this.ends[1]._connected)
            this.connected();
    }
    connected(){
        super.connected();
        if(this._level.isCircuitComplete(this))
        this.bulbSprite.spriteFrame=this.frames[1];
    }
    
    disConnected(){
        super.disConnected();
        this.bulbSprite.spriteFrame=this.frames[0];
    
    }

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
