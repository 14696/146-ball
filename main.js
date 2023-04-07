"use strict";

const width = 1500;
const height = 720;
var pw = 32 * 2;
var ph = 32 * 2;
let gPlayer;
let map;
var gBall = [];
var gSE = [];
var Wgamestart;
var score = 0;
var ball = 0;

class Ball
{
	constructor()
	{
		this.mx = width / 2;
		this.my = 32;
		let	a = Math.random() * 2.5 + ( Math.PI - 2.5 )
		this.mdx = Math.cos( a );
		this.mdy = Math.sin( a );
	}
	
	draw( g )
	{
		g.drawImage( gPlayer, this.mx - 32, this.my - 32, 32, 32 );
	}

	key()
	{
		this.mx += this.mdx;
		this.my += this.mdy;
		
		if( this.mx < 32 || this.mx > width - 20 ){
			this.mdx = - this.mdx;
			this.mx += this.mdx
		}
		if( this.my < 32 || this.my > height - 260 ){
			this.mdy = - this.mdy;
			this.my += this.mdy
		}
			
		return( false );	
	}
}

function IsInRect( ax, ay, rx, ry, rw, rh )
{
	return( rx < ax && ax < rx + rw && ry < ay && ay < ry + rh )
}

function draw()
{
	let g = document.getElementById( "main" ).getContext( "2d" );

	g.fillStyle = "#000000";
	g.fillRect( 0, 0, width, height );	

	g.drawImage( map, 0, 0, width, height  );

	g.fillStyle = "#ffffff";
	g.fillRect( 0, 400 + 32 * 2, width, 200 );

	for( let b of gBall ){
		b.draw( g );
	}
	g.font = "40px monospace";
	g.fillStyle = "black";
	g.fillText( ball, 100, 100 )
}

function start()
{
	for( let i = 0; i < 1; i++ ){
		gBall.push( new Ball() );
		ball ++;
	}
}

function key()
{	
	for( let i = 0; i < 3; i ++ ){
		for( let b of gBall ){
			if( b.key() ){
			}
		}
	}	
}

function load()
{
	let g = document.getElementById( "main" ).getContext( "2d" );

	gPlayer = new Image();
    	gPlayer.src = "ball.png";
	map = new Image();
    	map.src = "testmap.png";
}

window.onload = function()
{
	setInterval( function(){ draw() }, 10 );
	setInterval( function(){ key() }, 10 );
	setInterval( function(){ start() }, 1 );
	load();
	start();
	draw();
}

