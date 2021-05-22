  let cnv = createCanvas(windowWidth, windowHeight);
  startButton = createButton('Start!');
  startButton.position(width / 2, height / 2);
  startButton.mousePressed(() => {
  startButton.mousePressed(async () => {
    startButton.remove();
    userStartAudio(
	    cnv,
      ctx => {
        console.log(ctx);
        fft = new p5.FFT();
        input = new p5.AudioIn();
        input.start();
        fft.setInput(input);
        input.start();
      }
    );
    await userStartAudio();
    fft = new p5.FFT();
    input = new p5.AudioIn();
    input.start();
    fft.setInput(input);
  });
}
