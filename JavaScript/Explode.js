var Explode = Class.extend({

    init: function (x, y, z, Speed, scale) {
		this.movementSpeed = 6;
		this.totalObjects = 400;
		this.objectSize = 1;
		this.sizeRandomness = 1;
		this.colors = [0xFFFFFF];
        this.X = x;
        this.Y = y;
        this.Z = z;
        this.speed = Speed;
        this.Scale = scale;
        this.time = 0;
	    this.dirs = [];
        
        var geometry = new THREE.Geometry();
        
        for (i = 0; i < this.totalObjects; i ++) 
        { 
          var vertex = new THREE.Vector3();
          vertex.x = x;
          vertex.y = y;
          vertex.z = z;
        
          geometry.vertices.push( vertex );
          
          u = Math.random() * Math.PI * 2;
          v = Math.random() * Math.PI;
          radius = Math.random() * this.movementSpeed - this.movementSpeed/2;
          vy = Math.cos(u) * Math.sin(v) * radius;
          vx = Math.sin(u) * Math.sin(v) * radius;
          vz = Math.cos(v) * radius;
          this.dirs.push({x:vx,y:vy,z:vz});
//          this.dirs.push({x:(Math.random() * this.movementSpeed)-(this.movementSpeed/2),y:(Math.random() * this.movementSpeed)-(this.movementSpeed/2),z:(Math.random() * this.movementSpeed)-(this.movementSpeed/2)});
        }
        var material = new THREE.PointsMaterial( { size: this.objectSize,  color: this.colors[Math.round(Math.random() * this.colors.length)] });
        var particles = new THREE.Points( geometry, material );
        
        this.model = particles;
        this.status = true;
        
//        this.xDir = (Math.random() * this.movementSpeed)-(this.movementSpeed/2);
//        this.yDir = (Math.random() * this.movementSpeed)-(this.movementSpeed/2);
//        this.zDir = (Math.random() * this.movementSpeed)-(this.movementSpeed/2);
        scene.add( this.model  ); 
    },

    update: function(){
        if (this.status == true){
          var pCount = this.totalObjects;
          while(pCount--) {
            var particle =  this.model.geometry.vertices[pCount]
            particle.y += this.dirs[pCount].y;
            particle.x += this.dirs[pCount].x;
            particle.z += this.dirs[pCount].z - this.speed;
          }
          this.model.geometry.verticesNeedUpdate = true;
        }
      }, 
    
    draw: function () {


    
    }
    
    
});



