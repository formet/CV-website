
var start=false;

var resetButton;
var exitButton;
var angle;
var maxV=25;

var diagram =[];


var xPos,yPos;
var rad, _rad, _r;
var xGP =[];
var yGP =[];
var _xGP=[];
var _yGP=[];
var rot=0;

var _num,nearest,sizeNearest;
var _size;
var _run;

var diam;
var other;
var defult;
var type;

var level;

var itTitles=[];

var osTitles=[];
var cadTitles=[];
var renTitles=[];
var creTitles=[];
var codeTitles=[];

var osTL=[];
var cadTL=[];
var renTL=[];
var creTL=[];
var codeTL=[];


function preload(){
	
	
	
}


function setup(){

	var myCanvas = createCanvas((4*window.innerWidth)/5,(4*window.innerHeight)/5);
  myCanvas.parent('it_inter');
resetAll();

	buttons();

	
	
	
}

function resetAll(){
	$( "#it_inter" ).css( "display", "block" )
	
	
	background(200);
	

	
	_rad=50;
	
	_run=1;
			for(let i=0;i<5;i++){
	diagram [i] = new diagrames();
	
			_xGP[i]=random(100,width-100);
			_yGP[i]=(height/(5+2))*i+(height/6);
			xGP[i]=_xGP;
			yGP[i]=_yGP;	
			
	}
	
	itTitles[0]='OS';
	itTitles[1]='CAD';
	itTitles[2]='Rendering';
	itTitles[3]='creative software';
	itTitles[4]='Coding';
	
	osTitles[0]='Windows';
	osTitles[1]='Mac';
	osTitles[2]='Linux';
	
	cadTitles[0]='AutoCAD 2D';
	cadTitles[1]='Rhino';
	cadTitles[2]='Grasshopper';
	cadTitles[3]='SketchUp';
	cadTitles[4]='Blender';
	cadTitles[5]='Revit';
	
	renTitles[0]='V-Ray';
	renTitles[1]='Blender';
	renTitles[2]='Rhino';

	creTitles[0]='PhotoShop';
	creTitles[1]='Illustrator';
	creTitles[2]='InDesign';
	creTitles[3]='DreamWeaver';
	creTitles[4]='Designer';
	creTitles[5]='Publisher';
	creTitles[6]='Word';
	creTitles[7]='Powerpoint';
	creTitles[8]='Excel';
	creTitles[9]='Access';
	
	codeTitles[0]='Java';
	codeTitles[1]='JavaScript';
	codeTitles[2]='HTML';
	codeTitles[3]='CSS';
	
	osTL[0]=9;
	osTL[1]=7;
	osTL[2]=3;
	
	
	cadTL[0]=9;
	cadTL[1]=9;
	cadTL[2]=7;
	cadTL[3]=8;
	cadTL[4]=5;
	cadTL[5]=5;
	
	renTL[0]=8;
	renTL[1]=6;
	renTL[2]=5;
	
	creTL[0]=9;
	creTL[1]=7;
	creTL[2]=8;
	creTL[3]=5;
	creTL[4]=6;
	creTL[5]=8;
	creTL[6]=9;
	creTL[7]=8;
	creTL[8]=7;
	creTL[9]=4;
	
	codeTL[0]=7;
	codeTL[1]=8;
	codeTL[2]=8;
	codeTL[3]=8;
	
	
	
	rot=0;
	
}

function draw(){
	
	background(0);
	stroke(255);
				for(let di=0;di<diagram.length;di++){
		for(let no=0;no<diagram.length;no++){
	line(xGP[di],yGP[di],xGP[no],yGP[no] );			
	}}
	
	
	for(let i=0;i<diagram.length;i++){
		
		
		diagram [i].near(i);
		
		diagram [i].pos(i);
		diagram [i].size(i);
		
		diagram [i].show(i,rad);
		diagram[i].values(i);
		
	}
	
	text(rot,width-100,height-100);
	rot++;
}









class diagrames{
	
	constructor(){
		this.xPos ;
		this.yPos ;
		this.rad;
		this.nearest;
		this._num;
	}
	
	near(num){
		
		
		if(mouseIsPressed){
		var sum=[];
		for(let i=0;i<diagram.length;i++){
			
			if(rot<1){
			 sum [i] = dist(mouseX,mouseY,_xGP[i],_yGP[i]);
			}else if(rot>0){
				 sum [i] = dist(mouseX,mouseY,xGP[i],yGP[i]);
			}
		}
		
		
		
		for(let i=0;i<diagram.length;i++){
			
			if(sum[i]==min(sum) ){
				nearest=i;
				
				break;
			}
			
		}
		
		}
	}
	
	
	pos(num){
		

	
		text(nearest,width-100,100);
		if(num==nearest){
			
			if(mouseIsPressed){
				

				
				xGP[num]=mouseX;
				yGP[num]=mouseY;
			}
		
		}else if(rot<2){
			
			xGP[num]=_xGP[num];
			yGP[num]=_yGP[num];
			
		}
		xPos=xGP[num];
		yPos=yGP[num];
		
		
		
		}
	
	size(num){
		
		
				if(mouseIsPressed){
		var sum=[];
		for(let i=0;i<diagram.length;i++){
			
			if(rot<=0){
			 sum [i] = dist(mouseX,mouseY,_xGP[i],_yGP[i]);
			}else if(rot>0){
				 sum [i] = dist(mouseX,mouseY,xGP[i],yGP[i]);
			}
		}
		
		for(let i=0;i<diagram.length;i++){
			if(sum[i]==min(sum)){
				sizeNearest=i;		
				
			}
			
		}
		
		}	
		
	 _r=_rad;
		_size=false;
	
	 if(mouseIsPressed){
	if(num==sizeNearest){
	
		
		_r=200;
			_size=true;
			
		
		}else {
			
			_r=_rad;
			_size=false;
		}
	} 
			
		rad=_r;
	}
		
		
		
		


 show(num){
	 
	 defult=50;
	 
maxV=10;
		
		if(num==0){
			maxV=osTitles.length;
			
		} else if(num==1){
			maxV=cadTitles.length;
			
		} else if(num==2){
			maxV=renTitles.length;
		
		}else if(num==3){
			maxV=creTitles.length;
		
		}else if(num==4){
			maxV=codeTitles.length;
		
		}
		
		
	
	
	
	fill(0);
	strokeWeight(1);
	
	stroke(255);

	_run=1;
	if(_size){
		 _run=10;
		 
		 
		 
		 
		
		 fill(0);
		 
	}
	
	
	
	for(var r=0;r<_run;r++){
		
		var _inprint=rad-((rad/_run)*r);
	beginShape();
	

	for(var i=0;i<defult;i++){
		
		
		angle=TWO_PI/defult*i;
	
		vertex((sin(angle) *_inprint)+xPos,cos(angle)*_inprint+yPos);
	
	
	}

	
	endShape(CLOSE);
	}
	
	
	

	
	
	
	

	
	if(_size==true){
		
	
		
		
	for(var i=0;i<maxV;i++){
		
		angle=TWO_PI/maxV*i;
		noStroke();
		fill(0);
		ellipse((sin(angle) *rad)+xPos,cos(angle)*rad+yPos,rad/6.25,rad/6.25);


	}
	}
	if(_size==true){
		
		for(var i=0;i<maxV;i++){
			angle=TWO_PI/maxV*i;
textAlign(CENTER,CENTER)
	fill(255);
	stroke(0);
		if(num==0){
	
	
			text(osTitles[i],(sin(angle) *rad)+xPos,cos(angle)*rad+yPos);
			
		/*	level=osTL[i];
		
			stroke(255,0,0);
			strokeWeight(5);
	
			point((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);

		*/	
		} else if(num==1){
			text(cadTitles[i],(sin(angle) *rad)+xPos,cos(angle)*rad+yPos);
			
		/*	level=cadTL[i];
		
			stroke(255,0,0);
			strokeWeight(5);
	
			point((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);

		*/	
		} else if(num==2){
			text(renTitles[i],(sin(angle) *rad)+xPos,cos(angle)*rad+yPos);
		/*	level=renTL[i];
		
			stroke(255,0,0);
			strokeWeight(5);
	
			point((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
		*/
		}else if(num==3){
			text(creTitles[i],(sin(angle) *rad)+xPos,cos(angle)*rad+yPos);
		/*	level=creTL[i];
		
			stroke(255,0,0);
			strokeWeight(5);
	
			point((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
		*/
		}else if(num==4){
			text(codeTitles[i],(sin(angle) *rad)+xPos,cos(angle)*rad+yPos);
		/*	level=codeTL[i];
		
			stroke(255,0,0);
			strokeWeight(1);
	
			point((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
		*/
		}
	
	}
	
	
		
				
		
	}


 }
 
 values(num){
	
				
	
	
	
	
	
	
		textAlign(CENTER,CENTER)
	if(_size){

	stroke(255,255,150);
				fill(255,255,150,90);
				if(num==0){
			
			beginShape();
			for(var i=0;i<osTL.length;i++){
				
				angle=TWO_PI/osTL.length*i;
			level=osTL[i];
		
			
		
	
			vertex((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
			}
			endShape(CLOSE);
			
			
		} else if(num==1){
			
			
			beginShape();
			for(var i=0;i<cadTL.length;i++){
				
				angle=TWO_PI/cadTL.length*i;
			level=cadTL[i];
		
			
		
	
			vertex((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
			}
			endShape(CLOSE);
			
		} else if(num==2){
	
			beginShape();
			for(var i=0;i<renTL.length;i++){
				
				angle=TWO_PI/renTL.length*i;
			level=renTL[i];
		
			
		
	
			vertex((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
			}
			endShape(CLOSE);
		}else if(num==3){
			
			beginShape();
			for(var i=0;i<creTL.length;i++){
				
				angle=TWO_PI/creTL.length*i;
			level=creTL[i];
		
			
	
	
			vertex((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
			}
			endShape(CLOSE);
		}else if(num==4){
			
			beginShape();
			for(var i=0;i<codeTL.length;i++){
				
				angle=TWO_PI/codeTL.length*i;
			level=codeTL[i];
		
			
			
	
			vertex((sin(angle) *rad/(_run/level))+xPos,cos(angle)*rad/(_run/level)+yPos);
			}
			endShape(CLOSE);
		}
		



	
	}
		textAlign(CENTER,CENTER)
	fill(255);
	stroke(0);
	text(itTitles[num],xPos,yPos);
	
	
}
}





function buttons(){
	
	

	
		 resetButton = createButton("reset");
	resetButton.position(100,(windowHeight*2.75))
	resetButton.mousePressed(resetAll);
	
	 exitButton = createButton("exit");
	exitButton.position(200,(windowHeight*2.75))
	exitButton.mousePressed(exitAll);
	
}







function exitAll(){
	
	
	
	$('#it_inter').hide();
	
	
	
	
}
