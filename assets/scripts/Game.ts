
import { _decorator, Component, Node, Prefab, instantiate, Label } from 'cc';
import { Level } from './Level';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Game
 * DateTime = Mon Nov 07 2022 13:16:59 GMT+0530 (India Standard Time)
 * Author = Puru
 * FileBasename = Game.ts
 * FileBasenameNoExtension = Game
 * URL = db://assets/scripts/Game.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Game')
export class Game extends Component {
    // [1]
    // dummy = '';
    _levelIndex=0;
    _currentLevel:Node=null;
    // [2]
     @property({type:Prefab})
     levels:Prefab[] = [];
     @property({type:Node})
     nextLevelButtonOverlay:Node =null ;
     @property({type:Label})
     levelNo:Label =null ;
     @property({type:Label})
     GameName:Label =null ;

    start () {
        // [3]
    }
    
    loadLevel(){
        if(this._currentLevel){
            this._currentLevel.destroy();
        }
        this._currentLevel=instantiate(this.levels[this._levelIndex++]);
        this._currentLevel.getComponent(Level).init(this);
        this._currentLevel.parent=this.node;
        this._currentLevel.setPosition(0,0,0);
        this.nextLevelButtonOverlay.active=false;
       
    }
    
    levelComplete(){
        this.levelNo.string="Level : "+this._levelIndex;
        this.GameName.string="Level Complete! ";
        this.nextLevelButtonOverlay.active=true;
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
