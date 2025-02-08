
var moss; // for if mouse is pressed

var closeMenu=true; // for closing menu when close button is presssed
var openedMenu;// for checking if menu is opened

var closeOptions=true;// for closing options when menu is closed
var openedOptions;// for checking if options is opened
var backgroundOn = false; // for turing on background
var backgroundColour = 'black';

var closegameSelection = true;//for closing games selection
var openedgameSelection;//for checking if game selection is opened

var closeGameCoinFlip = false;//for closing the coinflip game
var openedGameCoinFlip;//for checking if the coinflip game is opened
var startFlipping = false;//for starting the flipping 
var cFlipHeads = false;//for displaying heads coin side
var cFlipTails = false;//for displaying tails coin side
var cFlipMoney = 100;//starting money for cFlipGame

var cMoneyMultiple = 0;//for when guessed, it changes to 1, allowing money to be addeed or substracted

var cFlipHeadsGuess = false;//for button to guess the coin
var cFlipTailsGuess = false;//for button to guess the coin


function setup()
{
    createCanvas(1505,1205);    
}
function draw()
{
    background(backgroundColour);
    renderMainBackground();
    renderMenu();
    renderMenuButton(50,40);
    renderOptions();
    rendergameSelection();
    renderCoinFlipGame();
      
}
function mousePressed()
{
    moss = true;
}//for if mouse is pressed
function mouseReleased()
{
    moss = false;
}//for if mouse is released
function renderMainBackground()
{
    if(backgroundOn)
        {
            backgroundColour = 'black';
            for(var h = 0; h<20;h++)
            {
                for(var i = 0; i<25;i++)
                {
                    var maxDist = dist(0,0,width/2,height/2);
                    var d = (dist(mouseX,mouseY,i*60,h*60))*10;
                    var r = d/maxDist;
                    fill(255);
                    rect(0+i*60,0+h*60,r*20,r*20);
                }
            }
        }
    else
        {
            backgroundColour = 155;
            return;
        }
    
}//makes the background
function renderMenu()
{
    if(closeMenu)
        {
            openedMenu = false;
            return;
        }
    else
        {
            closegameSelection = true;
            closeOptions = true;
            openedMenu = true;
            closeGameCoinFlip  = true;
            push();
            fill(100,100,100,50);
            rect(100,100,width-200,height-200);
            menuShutDownButton(width*6/7,150);
            fill(255,255,255,100);
            strokeWeight(50);
            stroke(0);
            textSize(100);
            text('MAIN MENU',width/2-250,250);
            pop();
            renderOptionsButtonInMenu(500,550,550,100);
            rendergamesButtonInMenu(500,400,550,100);
        }
}//makes the main menu
function renderMenuButton(x,y)
{
    if(openedMenu||openedOptions||openedgameSelection)
        {
            return;
        }
    else
        {
            var cola = 0; 
            if(mousePressed&&mouseX>x&&mouseX<x+50&&mouseY>y&&mouseY<y+50)
                {
                    if(moss)
                        {
                            cola = 200;
                            closeMenu = false;
                        }
                    else
                        {
                            cola = 100;
                        }
                }
            push();
            fill(255,255,255,cola);
            rect(x,y,50,50);
            fill(255,255,255,50+cola);
            strokeWeight(50);
            stroke(0);
            textSize(30);
            text('M',x+10,y+40);
            pop();
        }
}//makes the menu button over main background
function renderOptionsButtonInMenu(x,y,w,h)
{
    var opFill = 100;
    if(moss&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h)
        {
            closeOptions = false;
            closeMenu = true;
            closegameSelection = true;
            closeGameCoinFlip  = true;
            opFill = 205;
        }
    push();
    fill(opFill+50,opFill+50,opFill+50,opFill);
    rect(x,y,w,h);
    fill(255,255,255,100);
    stroke(0);
    strokeWeight(20);
    textSize(50);
    text('OPTIONS',x+w/3.5,y+h/1.5);
    pop();
}//makes the option button in main menu
function menuShutDownButton(x,y)
{
    var colo = 0; 
    if(mousePressed&&mouseX>x&&mouseX<x+50&&mouseY>y&&mouseY<y+50)
        {
            if(moss)
                {
                    colo = 200;
                    closeMenu = true;
                }
            else
                {
                    colo = 100;
                }
        };
    push();
    fill(255,0,0,50+colo);
    rect(x,y,50,50);
    line(x,y,x+50,y+50);
    line(x,y+50,x+50,y);
    pop();
    
}//closes the main menu
function renderOptions()
{
    if(closeOptions)
        {
            openedOptions = false;
            return;
        }
    else
        {
            openedOptions = true; 
            push();
            fill(100,100,100,50);
            rect(200,100,width-400,height-200);
            optionShutDownButton(width*6/7-100,150);
            push();
            fill(255,255,255,100);
            strokeWeight(50);
            stroke(0);
            textSize(100);
            text('OPTIONS',width/2-250,250);
            pop();
            backkround(300,300,200,50);
        }
        
}//makes the options window
function optionShutDownButton(x,y)
{
    var colo = 0; 
    if(mousePressed&&mouseX>x&&mouseX<x+50&&mouseY>y&&mouseY<y+50)
        {
            if(moss)
                {
                    colo = 200;
                    closeOptions = true;
                    closeMenu = false;
                    closeGameCoinFlip  = true;
                }
            else
                {
                    colo = 100;
                    closeOptions = false;
                }
        };
    push();
    fill(255,0,0,50+colo);
    rect(x,y,50,50);
    line(x,y,x+50,y+50);
    line(x,y+50,x+50,y);
    pop();
}//closes the options window
function backkround(x,y,w,h)
{
    push();
    fill(backgroundColour)
    rect(x,y,w,h);
    if(mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h)
        {            
            if(moss)
            {
                baccc = 255;
                backgroundOn = !backgroundOn;
            }
            else
            {
                baccc = 180;
            }
        }
    else
        {
            baccc = 100;
        }
    fill(baccc,baccc,baccc,100);
    textSize(20);
    text('BACKGROUND',x+w*1/8,y+h*1/1.5);
    pop();
}//makes a working background changing button in options
function rendergamesButtonInMenu(x,y,w,h)
{
    var opFill = 100;
    if(moss&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h)
        {
            closeOptions = true;
            closeMenu = true;
            closegameSelection = false;
            closeGameCoinFlip  = true;
            opFill = 205;
        }
    push();
    fill(opFill+50,opFill+50,opFill+50,opFill);
    rect(x,y,w,h);
    fill(255,255,255,100);
    stroke(0);
    strokeWeight(20);
    textSize(50);
    text('GAMES',x+w/3.5,y+h/1.5);
    pop();
}//makes a button to open games selection window
function rendergameSelection()
{
    if(closegameSelection)
        {
            openedgameSelection = false;
            return;
        }
    else
        {
            openedgameSelection = true; 
            push();
            fill(100,100,100,50);
            rect(400,100,width-800,height-600);
            gameShutDownButton(width*6/7-280,150);
            renderCoinFlipGameIcon(width/2-300,300,100,100);
            push();
            fill(255,255,255,100);
            strokeWeight(50);
            stroke(0);
            textSize(100);
            text('GAMES',width/2-200,250);
            pop();
            
        }
}//makes the game selection window
function gameShutDownButton(x,y)
{
    var colo = 0; 
    if(mousePressed&&mouseX>x&&mouseX<x+50&&mouseY>y&&mouseY<y+50)
        {
            if(moss)
                {
                    colo = 200;
                    closegameSelection = true;
                    closeMenu = false;
                }
            else
                {
                    colo = 100;
                    closegameSelection = false;
                }
        };
    push();
    fill(255,0,0,50+colo);
    rect(x,y,50,50);
    line(x,y,x+50,y+50);
    line(x,y+50,x+50,y);
    pop();
}//closes the game selection window




function renderCoinFlipGameIcon(x,y,w,h)
{
    push();
    var cpFill = 100;
    if(mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h)
        {
            if(moss)
                {
                    closeOptions = true;
                    closeMenu = true;
                    closegameSelection = true;
                    closeGameCoinFlip  = false;
                    cpFill = 0;
                }
            else
                {
                    cpFill = 200;
                }
        }
    fill(255,255,50,cpFill+55);
    strokeWeight(20);
    stroke('gold');
    rect(x,y,w,h);
    fill(255,255,255,100);
    strokeWeight(5);
    textSize(80);
    text('C',x+w/3.5-10,y+h/1.5+10);
    pop();
}
function renderCoinFlipGame()
{
    if(closeGameCoinFlip)
        {
            openedGameCoinFlip = false;
            return;
        }
    else
        {
            openedGameCoinFlip = true; 
            push();
            fill(100,100,100,50);
            rect(300,100,width-600,height-600);
            coinFlipShutDownButton(width*8/9-230,150);
            push();
            fill(0,0,0,255);
            strokeWeight(50);
            stroke('gold');
            textSize(100);
            text('COINFLIP',width/2-200,250);
            pop();
            renderCoinFlipFlipButton(700,550,200,100);
            if(startFlipping) {
                if(random(0,1)>0.5)
                    {
                        cFlipHeads = true;
                        cFlipTails = false;
                    }
                else if (random(0,1)<0.5)
                    {
                        cFlipTails = true;
                        cFlipHeads = false;
                    }
                else
                    {
                        cFlipHeads = true;
                        cFlipTails = true;
                    }
                startFlipping = false;
            }
            renderCoins(width/2+40,height/2-200);
            renderCoinFlipScore(width/4-70,height/3-70);
            renderCoinFlipHeadsGuess(width/2+300,height/2-100);
            renderCoinFlipTailsGuess(width/2+300,height/2-220);
        }
}
function coinFlipShutDownButton(x,y)
{
    var colo = 0; 
    if(mousePressed&&mouseX>x&&mouseX<x+50&&mouseY>y&&mouseY<y+50)
        {
            if(moss)
                {
                    colo = 200;
                    closeGameCoinFlip = true;
                    closegameSelection = false;
                }
            else
                {
                    colo = 100;
                    closeGameCoinFlip = false;
                }
        };
    push();
    fill(255,0,0,50+colo);
    rect(x,y,50,50);
    line(x,y,x+50,y+50);
    line(x,y+50,x+50,y);
    pop();
}

//// making a new button in the games selection for opening coin flip window 
////this button shall have the letter C as in for coinflip
function renderCoins(x,y)
{
    if(!startFlipping) {
    if(cFlipHeadsGuess||cFlipTailsGuess) {
        cMoneyMultiple = 1;
        
    }
    else{
        cMoneyMultiple = 0;
    }
    if(cFlipHeads&&cFlipTails==false&&startFlipping==false) {
        push();
        noStroke();
        fill('gold');
        ellipse(x,y,100,100);
        fill('yellow');
        stroke('black');
        strokeWeight(20);
        textSize(50);
        text('H',x-18,y+18);
        pop();
        if(cFlipHeadsGuess) {
            cFlipMoney +=(100*cMoneyMultiple);
            cFlipHeadsGuess = false;
        }
        else{
            cFlipMoney -=(100*cMoneyMultiple);
        }
    }
    else if(cFlipHeads==false&&cFlipTails==true&&startFlipping==false) {
        push();
        noStroke();
        fill('gold');
        ellipse(x,y,100,100);
        fill('yellow');
        stroke('black');
        strokeWeight(20);
        textSize(50);
        text('T',x-16,y+18);
        pop();  
        
        if(cFlipTailsGuess) {
            cFlipMoney +=(100*cMoneyMultiple);
            cFlipTailsGuess = false;
        }
        else{
            cFlipMoney -=(100*cMoneyMultiple);
        }
    }
    else if(cFlipHeads&&cFlipTails&&startFlipping==false) {
        push();
        noStroke();
        fill('gold');
        ellipse(x+50,y,100,100);
        fill('yellow');
        stroke('black');
        strokeWeight(20);
        textSize(50);
        text('H',x-18+50,y+18);
        pop();
        push();
        noStroke();
        fill('gold');
        ellipse(x-50,y,100,100);
        fill('yellow');
        stroke('black');
        strokeWeight(20);
        textSize(50);
        text('T',x-16-50,y+18);
        pop();
        
        cFlipMoney+=(100*cMoneyMultiple);
        cFlipHeadsGuess = false;
        cFlipTailsGuess = false;
    }
    
    }
    else {
        return;
    }
}
function renderCoinFlipFlipButton(x,y,w,h)
{
  push();
    var bpFill = 100;
    if(mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h)
        {
            if(moss)
                {
                    //put variable for flipping being yes
                    bpFill = 0;
                    startFlipping = true;
    
                }
            else
                {
                    bpFill = 200;
                }
        }
    fill(255,255,50,bpFill+55);
    strokeWeight(20);
    stroke('gold');
    rect(x,y,w,h);
    fill(255);
    strokeWeight(5);
    textSize(80);
    stroke('black');
    text('Flip',x+w/3.5-15,y+h/1.5+4);
    pop();  
}
function renderCoinFlipScore(x,y)
{
    push();
    textSize(40);
    strokeWeight(3);
    fill('green');
    text('MONEY =  '+cFlipMoney,x,y);
    pop();
}
function renderCoinFlipHeadsGuess(x,y)
{
    push();
    var headColour = ['gold','yellow','black'];
    if(dist(mouseX,mouseY,x,y)<50||cFlipHeadsGuess)
        {
            headColour = ['black','yellow','gold']; 
            if((moss||cFlipHeadsGuess)&&!cFlipTailsGuess){
                headColour = ['white','grey','white'];
                cFlipHeadsGuess = true;
            }
        }
    else {
        headColour = ['gold','yellow','black'];
    }
    noStroke();
    fill(headColour[0]);
    ellipse(x,y,100,100);
    fill(headColour[1]);
    stroke(headColour[2]);
    strokeWeight(20);
    textSize(50);
    text('H',x-18,y+18);
    pop();
}
function renderCoinFlipTailsGuess(x,y)
{
    
    push();
    var tailColour = ['gold','yellow','black'];
    if(dist(mouseX,mouseY,x,y)<50||cFlipTailsGuess)
        {
            tailColour = ['black','yellow','gold']; 
            if((moss||cFlipTailsGuess)&&!cFlipHeadsGuess){
                tailColour = ['white','grey','white'];
                cFlipTailsGuess = true;
            }
        }
    else {
        tailColour = ['gold','yellow','black'];
    }
    noStroke();
    fill(tailColour[0]);
    ellipse(x,y,100,100);
    fill(tailColour[1]);
    stroke(tailColour[2]);
    strokeWeight(20);
    textSize(50);
    text('T',x-16,y+18);
    pop();
}


//make it into a heads or tails game with starting money of 100
//user puts in amount of money for game
//user needs to type either 'h' for heads or 't' for tails
//the coin will have a little spin animation before result
//the animation can be done by decreaing and increacing width of ellipse in increments
//after they enter, if they guess correctly then they get double the amout put in
//or if they guess wrong they lose all put in money



