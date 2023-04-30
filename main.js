const board = JXG.JSXGraph.initBoard('board', {boundingbox: [-10, 5, 10, -5], axis: true});

document.addEventListener('load',  ()=>{
    const amplitude = document.querySelector('#Amplitude')
    const frequency = document.querySelector('#Frequency')
})
document.querySelector('#button').addEventListener('click', (event)=>{
    let amplitude = parseInt(document.querySelector('#Amplitude').value)
    let frequency = parseInt(document.querySelector('#Frequency').value)
    const func = document.querySelector('#fn').value
    document.querySelector('.modalWrap').style.display = 'none'
    if (!amplitude) {
        amplitude = 1
    }
    if (!frequency) {
        frequency = 1
    }
    if (func === 'sin') {
        board.create('functiongraph', function (x)  {
            return amplitude * Math.sin(frequency * x)
        })
    }else if (func === 'cos'){
        board.create('functiongraph', function (x)  {
            return amplitude * Math.cos(frequency * x)
        })
    }else {
        board.create('functiongraph', function (x)  {
            return amplitude * Math.tan(frequency * x)
        })
    }
})
