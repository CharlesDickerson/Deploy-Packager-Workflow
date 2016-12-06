var Bullet = Class.extend({

    init: function (currentX, currentY, currentZ, zSpeed, CameraAngleX, CameraAngleY, CameraAngleZ) {
        this.X = currentX;
        this.Y = currentY;
        this.Z = currentZ;
        this.oldX = currentX;
        this.oldY = currentY;
        this.oldZ = currentZ;
        this.cameraAngleX = CameraAngleX;
        this.cameraAngleY = -CameraAngleY;
        this.cameraAngleZ = CameraAngleZ;
        this.speed = zSpeed;
        this.range = zSpeed;
        var geometry = new THREE.SphereGeometry( 3, 8, 8 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        this.model = new THREE.Mesh( geometry, material );
        this.model.position.set( currentX, currentY, currentZ );	
        scene.add( this.model );
        
//        this.bulletMatrix = new mat4.create();
//        mat4.set(mvMatrix, this.bulletMatrix);

    },

    draw: function () {

    },

    animate: function () {
        y = Math.sin(this.cameraAngleX) * this.range;
        x = Math.sin(this.cameraAngleY) * this.range;
        z = Math.cos(this.cameraAngleY) * Math.sin(this.cameraAngleZ) * this.range;


        this.X = x + this.oldX;
        this.Y = y + this.oldY;
        this.Z = (this.oldZ - z);

        this.model.position.set( this.X, this.Y, this.Z );	


//        mat4.translate(this.bulletMatrix, [ 0, 0, this.speed]);
        this.range += this.speed;
    }
});


