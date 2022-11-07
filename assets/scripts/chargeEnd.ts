
import { _decorator, Component, Vec3, Input, UITransform, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = positiveEnd
 * DateTime = Mon Nov 07 2022 13:48:10 GMT+0530 (India Standard Time)
 * Author = Puru
 * FileBasename = positiveEnd.ts
 * FileBasenameNoExtension = positiveEnd
 * URL = db://assets/scripts/positiveEnd.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('chargeEnd')
export class chargeEnd extends Component {
    @property
    charge:number  = 0;
    _circuitItem=null;
    _connected=false;
    _originalPosition:Vec3=new Vec3(0,0,0);
    _connectedCircuitItem=null;
    _connectedEnd=null;
    @property({type:Node})
    scissor:Node = null;
    start () {
      
         }
         randomSign(){
            if(Math.random()>0.5)
                return -1;
                return 1;
         }
    disConnect(){
        if(!this._connected)
            return;
        this.node.worldPosition= new Vec3(this.node.worldPosition.x-this.randomSign()*100,this.node.worldPosition.y-this.randomSign()*100,0);
        //console.log( this._circuitItem.node.name+":end"+this.node.name+"now"+ this.node.worldPosition+"_originalPosition"+this._originalPosition);
  
        this._circuitItem.checkConnection();
        this._connected=false;
        this._connectedEnd._connected=false;
        this._connectedEnd._circuitItem.disConnected();
        this._circuitItem.disConnected();
        if(this.scissor)
        this.scissor.active=false;
    }
    canConnect(end:chargeEnd){
           return (end.node.getComponent(UITransform).isHit(new Vec2(this.node.worldPosition.x,this.node.worldPosition.y))&&(!this._connected)&&(end.charge==this.charge)&&(end!=this));
    }
    connect(end:chargeEnd){
        console.log("connect"+this.node.name);
        this._connected=true;
        end._connected=true;
        this.node.worldPosition=end.node.worldPosition;
        this._circuitItem.checkConnection();
        end._circuitItem.checkConnection();
        end._connectedEnd=this;
        this._connectedCircuitItem=end._circuitItem;
        end._connectedCircuitItem=this._circuitItem;
        this._connectedEnd=end;
        if(this.scissor)
        this.scissor.active=true;
    }
    
    init (circuitItem, isMovable=false) {
          // [3]
      
          this._originalPosition=this.node.worldPosition;
        if(isMovable){
            this.node.on(Input.EventType.TOUCH_START, this.checkTouched, this);;
            this.node.on(Input.EventType.TOUCH_MOVE, this.checkTouched, this);
            if(this.scissor)
            this.scissor.on(Input.EventType.TOUCH_END, this.disConnect, this);
        
        
        }
       this._circuitItem=circuitItem;
      // console.log("init"+ this._circuitItem.node.name+":end"+this.node.name+"now"+ this.node.worldPosition+"_originalPosition"+this._originalPosition);
  
       
    }
    
    checkTouched(event){
        if(!this._connected)
        this.node.worldPosition=new Vec3(event.getUILocation().x,event.getUILocation().y,0);
       
        this._circuitItem.checkConnection();
        this._circuitItem._level.checkConnection(this);
      
    }

     update (deltaTime: number) {
         // [4]
     }
     _isConnectedToPowerSource(){
        return this._connectedCircuitItem.type==2;
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
