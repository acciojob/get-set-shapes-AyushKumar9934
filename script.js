class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width1(){
		return this.width;
	}
	get height1(){
		return this.height;
	}
	 getArea(){
		return this.width*this.height;
	}
}
class Square extends Rectangle {
    constructor(side){
        super(side,side);
    }
      
	
	getPerimeter(){
		return 2*(this.height+this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
