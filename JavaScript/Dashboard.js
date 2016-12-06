var DashboardFrame = Class.extend ({

	init: function (parent) { 
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.scale = .0022;
	
	var geometry = new THREE.PlaneGeometry( this.width*this.scale, this.height*this.scale, 1 );
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity: 0} );
	this.Dashboard = new THREE.Mesh( geometry, material );
	this.Dashboard.position.set( 0, 0, -2);
	parent.add( this.Dashboard );
	this.PowerBar = new PowerBar( this.Dashboard );
	this.Dashboard.add( this.PowerBar.pBar );
	},
	
	resize: function () {
		this.Dashboard.scale.x = window.innerWidth *this.scale/this.Dashboard.geometry.parameters.width ;
		this.Dashboard.scale.y = window.innerHeight*this.scale/this.Dashboard.geometry.parameters.height;
		
	}
	
})

var PowerBar = Class.extend ({

	init: function (parent) { 
	this.width = parent.geometry.parameters.width * 0.05;
	this.height = parent.geometry.parameters.height * 0.1;
	this.Power = 1000;
	this.PowerDelta;
	this.PowerMax = 1000;
	
	var geometry = new THREE.PlaneGeometry( this.width, this.height, 1 );
	var material = new THREE.MeshBasicMaterial( {color: 0x138220} );
	this.pBar = new THREE.Mesh( geometry, material );
	this.pBar.position.set( parent.geometry.parameters.width/2 - this.width, -parent.geometry.parameters.height/2 + this.height, 0);
	this.LowerBarY = -parent.geometry.parameters.height/2 + this.height;
	parent.add( this.pBar );
	

	
	
	},
	
	update: function() {
		this.Power += this.PowerDelta;
		if (this.Power > this.PowerMax ) {
			this.Power = this.PowerMax;
			this.pBar.scale.y = 1.0;
		}
		else if (this.Power < 0 ) {
			this.Power = 0;
			this.pBar.scale.y = 0;
		}
		else if (this.PowerDelta < 0){
			this.pBar.scale.y += this.PowerDelta / this.PowerMax;
			this.pBar.position.y =  this.LowerBarY - this.height/2 * (1 - this.pBar.scale.y);
		}
		else if (this.PowerDelta > 0){
			this.pBar.scale.y += this.PowerDelta / this.PowerMax;
			this.pBar.position.y -= this.height * this.pBar.scale.y;
			this.pBar.position.y = this.LowerBarY - this.height/2 * (1 - this.pBar.scale.y);
		}
		
		if (this.pBar.scale.y < 1.0 && this.pBar.scale.y > 0.75) {
			this.pBar.material.color.setHex( 0x138220);
			}
		else if (this.pBar.scale.y <= 0.75 && this.pBar.scale.y > 0.5) {
			this.pBar.material.color.setHex( 0xbab41d);
			} 
		else if (this.pBar.scale.y <= 0.5 && this.pBar.scale.y > 0) {
			this.pBar.material.color.setHex( 0xba1d1d);
			} 
//		var textnode = document.createTextNode(this.Power);
//		var item = document.getElementById("Power");
//		item.replaceChild(textnode, item.childNodes[0]);
		
	}
	
})
