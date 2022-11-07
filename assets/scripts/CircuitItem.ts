
import { _decorator, Component, Node } from 'cc';
import { chargeEnd } from './chargeEnd';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CircuitItem
 * DateTime = Mon Nov 07 2022 15:11:11 GMT+0530 (India Standard Time)
 * Author = Puru
 * FileBasename = CircuitItem.ts
 * FileBasenameNoExtension = CircuitItem
 * URL = db://assets/scripts/CircuitItem.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CircuitItem')
export class CircuitItem extends Component {
  

    @property({type:chargeEnd})
    ends:chargeEnd[] = [];
    _connected=false;
    _level=null;
    type=-1;
    init (level) {
        this._level=level;
        
    }
    
    start () {
        // [3]
        this.ends.forEach(element => {
            element.init(this,false);
        });
    }
    checkConnection(){
        
    }
        
    isConnectedToPowerSource(){
        return false;
    }
    connected(){
        this._connected=true;
        console.log("connected"+this.node.name);
    }
    
    disConnected(){
        if(!this._connected)
        return;
        this._connected=false;
        console.log("disConnected"+this.node.name);
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
