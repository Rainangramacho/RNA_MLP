const {Layer, Network} = require('synaptic');
const readline = require('readline');
var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new Network({
input: inputLayer,
hidden: [hiddenLayer],
output: outputLayer
});

var learningRate = .15;

for (var i = 0; i < 2000000; i++) {  
    myNetwork.activate([15,20]);  
    myNetwork.propagate(learningRate, [0]);
    
    myNetwork.activate([25,25]);  
    myNetwork.propagate(learningRate, [0]);
  
    myNetwork.activate([90,10]);  
    myNetwork.propagate(learningRate, [0]);
  
    myNetwork.activate([80,15]);  
    myNetwork.propagate(learningRate, [0]);
  
    myNetwork.activate([20,20]);  
    myNetwork.propagate(learningRate, [0]);
  
    myNetwork.activate([30,28]);  
    myNetwork.propagate(learningRate, [0]);
  
    myNetwork.activate([31,19]);  
    myNetwork.propagate(learningRate, [0]);
  
    myNetwork.activate([30,18]);  
    myNetwork.propagate(learningRate, [0]);
  
    myNetwork.activate([40,35]);  
    myNetwork.propagate(learningRate, [1]);
  
    myNetwork.activate([70,60]);  
    myNetwork.propagate(learningRate, [1]);
  
    myNetwork.activate([60,58]);  
    myNetwork.propagate(learningRate, [1]);
  
    myNetwork.activate([65,59]);  
    myNetwork.propagate(learningRate, [1]);
    
    myNetwork.activate([50,51]);  
    myNetwork.propagate(learningRate, [1]);
  
    myNetwork.activate([52,53]);  
    myNetwork.propagate(learningRate, [1]);
  
    myNetwork.activate([15,90]);  
    myNetwork.propagate(learningRate, [1]);
  
    myNetwork.activate([80,60]);  
    myNetwork.propagate(learningRate, [1]);
  
  }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite sua idade : ', (answer1) => {
        var start = new Date().getTime();

        rl.question('Digite a frase solicitada : ', (answer2) => {
            var end = new Date().getTime();
            var tempo_gasto = (1000 /(end - start));
            console.log(Math.round(myNetwork.activate([answer1,tempo_gasto])));
            console.log(tempo_gasto.toFixed(2) + "s");
            rl.close();
        });
    });