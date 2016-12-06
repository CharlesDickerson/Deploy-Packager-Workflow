var AudioFile = Class.extend ({
	init: function(file, audioListener, gain) {
	// instantiate a listener
	// instantiate audio object
	var Sound = new THREE.Audio( audioListener );
	// instantiate a loader
	var loader = new THREE.AudioLoader();

	// load a resource
	loader.load(
		// resource URL
		file,
		// Function when resource is loaded
		function ( audioBuffer ) {
			// set the audio object buffer to the loaded object
			Sound.setBuffer( audioBuffer );
			Sound.gain.gain.value = gain;
		},
		
		// Function called when download progresses
		function ( xhr ) {
			console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
		},
		// Function called when download errors
		function ( xhr ) {
			console.log( 'An error happened' );
		}
	);
	this.WavFile = Sound;
}
})