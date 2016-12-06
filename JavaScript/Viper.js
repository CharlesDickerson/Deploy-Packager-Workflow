var Fighter = Class.extend({

    init: function (localBuffer, currentX, currentY, currentZ, zSpeed) {
		this.rotX = 0;
        this.rotY = Math.PI / 2;
        this.rotZ = 0;
        this.speed = zSpeed;
        this.explode = false;
        this.explodeCounter = 40;
        this.lightValue = this.explodeCounter / 50;
        this.model = localBuffer
        this.model.position.set( currentX, currentY, currentZ );		
        this.model.rotation.y += Math.PI;
        scene.add( this.model );

        this.bbox = new THREE.BoundingBoxHelper( this.model, 0x000000 );
        this.bbox.update();
        this.vecLoc = [5, 0, 0];
        


    },
/*
    fire: function () {

        BulletArray.push(new Bullet(-this.X, this.Y, -this.Z, zBulletSpeed, -this.rotX, this.rotY + Math.PI / 2, this.rotZ, BulletObject_gl, this));
        //        BulletArray.push(new Bullet(this.X, this.Y, this.Z, zBulletSpeed, -this.rotX, this.rotY, this.rotZ, BulletObject_gl));
        //        BulletArray.push(new Bullet(this.X, this.Y, this.Z, zBulletSpeed, -this.rotX, this.rotY, this.rotZ, BulletObject_gl));
    },
*/
    draw: function () {


    },

    animate: function () {

        if (this.explode) {
            this.explodeCounter -= 1;
            this.lightValue = this.explodeCounter / 50;
        }
        this.model.position.z -= this.speed;

    }
});

