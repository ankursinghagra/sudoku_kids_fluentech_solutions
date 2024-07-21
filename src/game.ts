/*******************************************/
/*******************************************/
// Project : Sudoku games for kids 
// Built for : Fluentech Solutions Pvt Ltd. 
// Author: Ankur Singh
/*******************************************/
/*******************************************/

import * as PIXI from 'pixi.js';
// init the application
const app = new PIXI.Application({height: 600, width: 700});
globalThis.__PIXI_APP__ = app;
// add to dom
document.body.appendChild(app.view);

// configs
var current_level = 1;
var levels = [
    {
        'id':1,
        'coords': [73, 222, 98, 179, 110, 172, 125, 169, 141, 175, 156, 189, 156, 202, 153, 210, 132, 242, 73, 222],
        'cleared': false,
        'grid': [1,0,0,4,0,4,0,0,0,0,3,0,3,0,0,2]
    },
    {
        'id':2,
        'coords': [73, 222, 131, 243, 107, 292, 42, 289] ,
        'cleared': false,
        'grid': [2,0,4,0,0,0,3,1,4,0,0,0,0,1,0,3]
    },
    {
        'id':3,
        'coords': [41, 287, 106, 293, 97, 350, 35, 364] ,
        'cleared': false,
        'grid': [0,3,4,0,0,2,0,1,3,0,0,4,1,0,0,0]
    },
    {
        'id':4,
        'coords': [34, 364, 97, 351, 110, 394, 65, 436, 33, 367] ,
        'cleared': false,
        'grid': [4,0,0,1,0,1,2,0,0,3,0,4,1,0,3,0]
    },
    {
        'id':5,
        'coords': [111, 395, 121, 404, 131, 410, 143, 414, 161, 419, 153, 477, 128, 471, 108, 465, 90, 456, 74, 444, 65, 437, 111, 394] ,
        'cleared': false,
        'grid': [0,2,0,3,1,0,0,0,0,1,4,3,0,2,0]
    },
    {
        'id':6,
        'coords': [163, 421, 188, 419, 214, 409, 259, 452, 237, 464, 215, 475, 187, 476, 156, 477, 160, 448, 163, 422] ,
        'cleared': false,
        'grid': [3,0,2,0,0,1,0,4,4,0,0,0,1,0,0,3]
    },
    {
        'id':7,
        'coords': [214, 408, 224, 396, 232, 382, 240, 367, 303, 375, 303, 391, 297, 405, 289, 419, 279, 434, 260, 449, 214, 408] ,
        'cleared': false,
        'grid': [1,4,0,0,0,0,1,3,3,0,4,0,0,2,0,1]
    },
    {
        'id':8,
        'coords': [241, 367, 245, 343, 248, 310, 310, 299, 306, 375, 241, 367] ,
        'cleared': false,
        'grid': [0,0,1,3,0,3,2,0,2,0,0,4,4,0,3,0]
    },
    {
        'id':9,
        'coords': [248, 308, 250, 268, 258, 237, 320, 250, 313, 297, 247, 308] ,
        'cleared': false,
        'grid': [0,1,0,2,0,0,4,3,4,2,0,0,1,0,3,0]
    },
    {
        'id':10,
        'coords': [257, 234, 270, 202, 289, 172, 344, 198, 330, 223, 321, 247, 259, 235] ,
        'cleared': false,
        'grid': [0,4,2,0,3,0,0,1,0,1,0,0,4,0,0,2]
    },
    {
        'id':11,
        'coords': [290, 170, 309, 147, 333, 130, 365, 112, 393, 162, 369, 174, 353, 189, 345, 198, 290, 170] ,
        'cleared': false,
        'grid': [2,0,3,0,0,4,0,1,0,2,0,4,1,0,0,3]
    },
    {
        'id':12,
        'coords': [367, 112, 410, 97, 455, 94, 453, 151, 418, 155, 393, 165, 367, 112] ,
        'cleared': false,
        'grid': [0,2,1,0,3,0,0,4,0,0,4,2,4,1,0,0]
    },
    {
        'id':13,
        'coords': [458, 96, 488, 98, 517, 106, 549, 128, 507, 172, 490, 159, 471, 153, 454, 149, 458, 96] ,
        'cleared': false,
        'grid': [3,0,1,0,0,2,0,4,4,0,0,3,0,3,2,0]
    },
    {
        'id':14,
        'coords': [550, 130, 566, 149, 582, 174, 592, 204, 593, 246, 530, 230, 530, 211, 521, 191, 508, 173, 549, 131] ,
        'cleared': false,
        'grid': [0,3,0,2,2,0,0,4,0,1,0,0,4,0,3,0]
    },
    {
        'id':15,
        'coords': [531, 233, 590, 245, 583, 273, 572, 290, 560, 303, 546, 318, 505, 274, 518, 257, 525, 241, 529, 230, 591, 245] ,
        'cleared': false,
        'grid': [0,1,4,0,0,3,0,2,2,0,0,3,3,0,0,1]
    },
    {
        'id':16,
        'coords': [504, 275, 545, 319, 511, 347, 449, 317, 504, 275] ,
        'cleared': false,
        'grid': [0,4,2,0,1,0,0,3,0,3,0,1,2,0,0,4]
    },
    {
        'id':17,
        'coords': [450, 316, 509, 345, 459, 384, 450, 391, 406, 355, 432, 330, 450, 316] ,
        'cleared': false,
        'grid': [4,0,0,2,0,3,0,1,0,1,4,0,2,0,0,3]
    },
    {
        'id':18,
        'coords': [404, 356, 448, 392, 444, 404, 440, 422, 376, 446, 372, 428, 374, 405, 384, 383, 404, 356] ,
        'cleared': false,
        'grid': [3,0,2,0,0,0,4,1,1,2,0,0,0,4,0,3]
    },
    {
        'id':19,
        'coords': [377, 448, 440, 423, 453, 438, 480, 443, 464, 501, 436, 497, 414, 490, 394, 475, 377, 448] ,
        'cleared': false,
        'grid': [0,2,0,4,1,0,0,3,4,0,0,2,0,3,1,0,0]
    },
    {
        'id':20,
        'coords': [480, 444, 512, 441, 549, 434, 566, 485, 526, 496, 490, 502, 465, 502, 480, 444] ,
        'cleared': false,
        'grid': [1,0,3,0,0,4,0,2,0,1,4,0,0,3,0,1]
    }
];
var level_drags_positions = [
    {
        id: 1,
        positions: [600, 170]
    } ,{
        id: 2,
        positions: [520, 280]
    } ,{
        id: 3,
        positions: [600, 420]
    } ,{
        id: 4,
        positions: [520, 530]
    }
];
var snap_grid = [{x:89, y:210, occupied: false}, {x:192, y:207, occupied: false}, {x:290, y:207, occupied: false}, {x:389, y:203, occupied: false}, {x:90, y:307, occupied: false}, {x:192, y:310, occupied: false}, {x:288, y:308, occupied: false}, {x:387, y:307, occupied: false}, {x:97, y:406, occupied: false}, {x:193, y:404, occupied: false}, {x:283, y:409, occupied: false}, {x:384, y:410, occupied: false}, {x:90, y:512, occupied: false}, {x:190, y:510, occupied: false}, {x:293, y:513, occupied: false}, {x:390, y:517, occupied: false}];

//load images and fonts
var all_resources:any = {};
app.loader.add('sudoku_board', './assets/sudoku_blank.jpg');
app.loader.add('piece_1', './assets/img_1.jpg');
app.loader.add('piece_2', './assets/img_2.jpg');
app.loader.add('piece_3', './assets/img_3.jpg');
app.loader.add('piece_4', './assets/img_4.jpg');
app.loader.add('back_btn', './assets/back_btn.png');
app.loader.add('reset_btn', './assets/reset_btn.png');
app.loader.add('arial', './assets/ARLRDBD.ttf');

// create home area
var home_container = new PIXI.Container();
app.loader.add('BoardGame_Home', './assets/BoardGame_Home.jpg').load((loader, resources) => {
    all_resources = resources;
    renderHome();
    app.stage.addChild(home_container);
});

function renderHome(){
    const bg_home = new PIXI.Sprite(all_resources.BoardGame_Home.texture);

    bg_home.x = app.renderer.width / 2;
    bg_home.y = app.renderer.height / 2;
    bg_home.scale.x = app.renderer.width/bg_home.width
    bg_home.scale.y = app.renderer.height/bg_home.height
    
    bg_home.anchor.x = 0.5;
    bg_home.anchor.y = 0.5;

    /* bg_home.interactive = true;
    bg_home.cursor = 'pointer';
    bg_home.on('pointerdown', function(){
        printMousePos()
    }, bg_home) */
    
    home_container.addChild(bg_home);

    for (let i = 0; i < levels.length; i++) {
        if(current_level == i+1){
            // this is current level
            var g = new PIXI.Graphics();
            g.beginFill(0x5d0015);
            g.alpha = 0.5;
            g.lineStyle(10);
            g.drawPolygon(levels[i]['coords'] );
            g.endFill();
            g.interactive = true;
            g.cursor = 'pointer';
            g.on('pointerdown', function(){goToStage(levels[i]['id']);}, );
            home_container.addChild(g);
        }else if (current_level > i+1){
            // already completed levels
            var g = new PIXI.Graphics();
            g.beginFill(0x5d0015);
            g.alpha = 0.3;
            g.lineStyle(1)
            g.drawPolygon(levels[i]['coords'] );
            g.endFill();
            home_container.addChild(g);
        }
    }  
}

// create levels
var current_grid:Array<number> = [];
var level_container = new PIXI.Container;
function goToStage(stage_id){
    // level background
    const bg_level = new PIXI.Sprite(all_resources.sudoku_board.texture);
    bg_level.x = app.renderer.width / 2;
    bg_level.y = app.renderer.height / 2;
    bg_level.scale.x = app.renderer.width/bg_level.width
    bg_level.scale.y = app.renderer.height/bg_level.height    
    bg_level.anchor.x = 0.5;
    bg_level.anchor.y = 0.5;
    level_container.addChild(bg_level);
    
    // reset button
    var reset_btn = new PIXI.Sprite(all_resources.reset_btn.texture);
    reset_btn.position.set(550,5);
    reset_btn.scale.set(0.7,0.7);
    reset_btn.interactive = true;
    reset_btn.cursor = 'pointer';
    reset_btn.on("click", resetBoard);
    level_container.addChild(reset_btn);
    
    // back button
    var back_btn = new PIXI.Sprite(all_resources.back_btn.texture);
    back_btn.position.set(26,18);
    back_btn.scale.set(1,1);
    back_btn.interactive = true;
    back_btn.cursor = 'pointer';
    back_btn.on("click", backToHome);
    level_container.addChild(back_btn);

    current_grid = JSON.parse(JSON.stringify(levels[current_level-1]['grid']));

    // 16 places to snap draggable pieces
    var snap_grid_containers:Array<any> = [];
    for (let i = 0; i < snap_grid.length; i++) {
        let cont = new PIXI.Container;
        cont.height = 100;
        cont.width = 100;
        cont.position.set(snap_grid[i].x, snap_grid[i].y);
        snap_grid_containers.push(cont);     
        level_container.addChild(cont);
        if(levels[current_level-1]['grid'][i] != 0){
            let dg = create_drags(levels[current_level-1]['grid'][i], true);
            dg.position.set(snap_grid[i].x, snap_grid[i].y);
            current_grid[i] = dg['num'];
            snap_grid[i].occupied = true;
        }
    }
    // 4 initial draggable items
    for (let i = 0; i < 4; i++) {
        create_drags(i+1);
    }

    app.stage.addChild(level_container);
}

// function to create draggable items
function create_drags(num:number, fixed=false){
    var sprite1 = new PIXI.Sprite(all_resources['piece_'+num].texture);
    level_container.addChild(sprite1);
    sprite1['num'] = num;
    sprite1.cursor = 'pointer';
    sprite1.anchor.set(0.5);
    sprite1.scale.set(0.7,0.7);
    sprite1.interactive = true;
    sprite1.position.set(level_drags_positions[num-1].positions[0], level_drags_positions[num-1].positions[1] );
    if(!fixed){
        sprite1.on('pointerdown', onDragStart, sprite1);
    }
    return sprite1;
}

let dragTarget:any = null;
level_container.hitArea = app.screen;
function onDragMove(event){
    if (dragTarget){
        dragTarget.position.set( event.data.global.x,  event.data.global.y)
    }
}

function onDragStart(){
    this.alpha = 0.5;
    dragTarget = this;
    dragTarget.on('pointermove', onDragMove);
    dragTarget.on('pointerup', onDragEnd);
}

function onDragEnd(event){
    if (dragTarget){
        dragTarget.off('pointermove', onDragMove);
        dragTarget.alpha = 1;
        create_drags(dragTarget.num);
        // check if close to a snap target
        let target_snapped = false;
        for (let i = 0; i < snap_grid.length; i++) {
            if(
                event.data.global.x > snap_grid[i].x-50 && 
                event.data.global.y > snap_grid[i].y-50 && 
                event.data.global.x < snap_grid[i].x+50 && 
                event.data.global.y < snap_grid[i].y+50 &&
                snap_grid[i].occupied == false 
            ){
                dragTarget.position.set(snap_grid[i].x , snap_grid[i].y);
                snap_grid[i].occupied = true;
                dragTarget.off('pointerdown')
                dragTarget.off('pointerup')
                dragTarget.off('pointermove')
                target_snapped = true;
                current_grid[i] = dragTarget['num'];
            }
        }
        if(!target_snapped){
            dragTarget.destroy();
        }else{
            if(check_for_success()){
                // level up before going to home
                current_level++;
                home_container.destroy();
                home_container = new PIXI.Container;
                renderHome();
                if(current_level == 21){
                    // game won
                    const text = new PIXI.Text('Game Completed',{fontFamily:'arial'});
                    text.position.set(248,521);
                    home_container.addChild(text);
                }
                app.stage.addChild(home_container);
                backToHome();
                
            }
        }
        dragTarget = null;
    }
}

function check_for_success(){
    // check if each item is filled 
    if (current_grid.includes(0)){
        return false;
    }
    //traverse each row and col
    for (let i = 0; i < 4; i++) {
        let unique_row:Array<any> = [];
        let unique_col:Array<any> = [];
        for (let j = 0; j < 4; j++) {
            unique_row.push(current_grid[j+(i*4)]);
            unique_col.push(current_grid[i+(j*4)]);
        }
        let checkSet_row = new Set(unique_row);
        if(checkSet_row.size !=unique_row.length){
            return false;
        }
        let checkSet_col = new Set(unique_col);
        if(checkSet_col.size !=unique_col.length){
            return false;
        }
    }
    return true;
}

function resetBoard(){
    level_container.destroy();
    level_container = new PIXI.Container;
    for (let i = 0; i < snap_grid.length; i++) {
        snap_grid[i].occupied = false;
    }
    goToStage(current_level);
}

function backToHome(){
    level_container.destroy();
    level_container = new PIXI.Container;
}