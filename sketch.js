const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=100;
var drop;
var boy,boyi;

function preload(){
    boyi=loadImage("images/Walking Frame/walking_1.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    for(var i=0; i<maxDrops; i++ ){
        drop.push(new Drops(random(0,400), random(0,400)))
    }
    
    
}

function draw(){
    background(0);
image(boyi,200,400);



drop.display();
}   

