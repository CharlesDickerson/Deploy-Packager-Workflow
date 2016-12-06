var Star = Bullet.extend({

    init: function (gl) {

        this.GL = gl;
    },

    draw: function () {
//        gl.disableVertexAttribArray(MoonObject_gl.Program.vertexPositionAttribute);
//        gl.disableVertexAttribArray(MoonObject_gl.Program.textureCoordAttribute);
//        gl.disableVertexAttribArray(MoonObject_gl.Program.vertexNormalAttribute);

        gl.useProgram(this.GL.Program);

        gl.enableVertexAttribArray(this.GL.Program.debugStartPositionAttribute);


        gl.bindBuffer(gl.ARRAY_BUFFER, this.GL.StarPositionsBuffer);
        gl.vertexAttribPointer(this.GL.Program.debugStartPositionAttribute, this.GL.StarPositionsBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.uniform1f(this.GL.Program.PointSizeUniform, this.GL.StarPositionsBuffer.PointSize);
        gl.uniformMatrix4fv(this.GL.Program.pMatrixUniform, false, pMatrix);
        gl.uniformMatrix4fv(this.GL.Program.mvMatrixUniform, false, mvMatrix);

        gl.drawArrays(gl.Points, 0, this.GL.StarPositionsBuffer.numItems);

        gl.disableVertexAttribArray(this.GL.Program.debugStartPositionAttribute);

    }
});

var Star_gl = DebugGrid_gl.extend({

    init: function () {
        this._super();
    },

    initBuffers: function (pointSize, Radius) {

        var numStars = 5000;
        var radius = Radius;
        StarArray = [];

        for (i = 0; i < numStars; i++) {
            u = Math.random() * Math.PI * 2;
            v = Math.random() * Math.PI;
            y = Math.cos(u) * Math.sin(v) * radius;
            x = Math.sin(u) * Math.sin(v) * radius;
            z = Math.cos(v) * radius;
            StarArray.push(x, y, z);
        }



        this.StarPositionsBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.StarPositionsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(StarArray), gl.STATIC_DRAW);
        this.StarPositionsBuffer.itemSize = 3;
        this.StarPositionsBuffer.numItems = numStars;
        this.StarPositionsBuffer.PointSize = pointSize;

    }

});

