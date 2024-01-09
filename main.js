const startButton = document.getElementById('startRecording');
const stopButton = document.getElementById('stopRecording');
let mediaRecorder;

startButton.addEventListener('click', async () => {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true 
    });
    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.start();

    mediaRecorder.addEventListener('dataavailable', event => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(event.data);
        link.download = 'captura.webm';
        link.click();
    });

    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    mediaRecorder.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
});
