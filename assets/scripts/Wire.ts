
import { _decorator, Component, Node,Vec3,EventTouch,Input, Graphics, PhysicsSystem2D, UITransform } from 'cc';
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
 
@ccclass('Wire')
export class Wire extends Component {
    // [1]
    // dummy = '';

    // [2]
     @property({type:Node})
    positiveEnd:Node = null;
    
    @property({type:Node})
    negativeEnd :Node = null;
    
    @property({type:Graphics})
    graphics:Graphics = null;

    start () {
        // [3]
        this.positiveEnd.on(Input.EventType.TOUCH_START, this.updateLine, this);
        this.negativeEnd.on(Input.EventType.TOUCH_START, this.updateLine, this);
        this.positiveEnd.on(Input.EventType.TOUCH_MOVE, this.positiveEndTouchMove, this);
        this.negativeEnd.on(Input.EventType.TOUCH_MOVE, this.negativeEndEndTouchMove, this);
       
    }
    positiveEndTouchMove(event: EventTouch) {
        this.positiveEnd.worldPosition=new Vec3(event.getUILocation().x,event.getUILocation().y,0);
        this.updateLine();
    }
    negativeEndEndTouchMove(event: EventTouch) {
        this.negativeEnd.worldPosition=new Vec3(event.getUILocation().x,event.getUILocation().y,0);
        this.updateLine();

    }
     updateLine () {
        this.graphics.clear();
        this.graphics.lineWidth = 10;
        this.graphics.fillColor.fromHEX('#ff0000');
        let pos1=this.graphics.node.getComponent(UITransform).convertToNodeSpaceAR(this.negativeEnd.worldPosition);
        let pos2=this.graphics.node.getComponent(UITransform).convertToNodeSpaceAR(this.positiveEnd.worldPosition);
      
        this.graphics.moveTo (pos1.x,pos1.y)
         this.graphics.lineTo(pos2.x,pos2.y);
         this.graphics.close();
         this.graphics.stroke();
         this.graphics.fill();
     }
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
