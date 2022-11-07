
import { _decorator, Component, Node } from 'cc';
import { Bulb } from './Bulb';
import { Wire } from './Wire';
import { Battery } from './Battery';
import { chargeEnd } from './chargeEnd';
import { CircuitItem } from './CircuitItem';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Level
 * DateTime = Mon Nov 07 2022 13:27:31 GMT+0530 (India Standard Time)
 * Author = Puru
 * FileBasename = Level.ts
 * FileBasenameNoExtension = Level
 * URL = db://assets/scripts/Level.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Level')
export class Level extends Component {
    // [1]
    // dummy = '';
    @property({type:Wire})
    wires:Wire[] = [];
    @property({type:Bulb})
    bulbs:Bulb[] = [];
    @property({type:Battery})
    batteries:Battery[] = [];
    
    _chargedEnds:chargeEnd[]=[];
    // [2]
    // @property
    // serializableDummy = 0;
    
    _game=null;

    start () {
        
     
    }
    
    init (game) {
        this._game=game;
        this.batteries.forEach(element => {
            element.init(this);
            this._chargedEnds=this._chargedEnds.concat(element.ends);
        });
        this.bulbs.forEach(element => {
            element.init(this);
            this._chargedEnds=this._chargedEnds.concat(element.ends);
        });
        this.wires.forEach(element => {
            element.init(this);
            this._chargedEnds=this._chargedEnds.concat(element.ends);
        });
    }
    checkConnection(end:chargeEnd){
      //  console.log("checkConnection"+this.node.name);
        this._chargedEnds.forEach(element => {
            
            if(element.node&&end.node&&element.canConnect(end)){
                end.connect(element);
            }
            
        });
    }
    circuitComplete(){
        console.log("circuitComplete"+this.node.name);
        this._game.levelComplete();
    }
    isCircuitComplete(item:CircuitItem){
        let currentItem=null;
        while(currentItem!=item){
            
            let end =item.ends[0];
            currentItem=item.ends[0]._connectedCircuitItem;
            if(currentItem.type==2){
                return true;
            }
        }
        while(currentItem!=item){
            
            let end =item.ends[1];
            currentItem=item.ends[1]._connectedCircuitItem;
            if(currentItem.type==2){
                return true;
            }
        }
        return false;
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
