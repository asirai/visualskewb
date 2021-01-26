window.addEventListener('load', () => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  const white  = '#ffffff'
  const yellow = '#ffff00'
  const blue   = '#0000ff'
  const green  = '#00ff00'
  const red    = '#ff0000'
  const orange = '#ff7800'
  const num2color = [white,green,red,yellow,blue,orange]

  const generateImg = () => {
    const alg = document.getElementById('alg').value
    const size = document.getElementById('size').value

    let sk = new Skewb()
    for (let i = 0; i < alg.length; ++i) {
      sk = sk.apply(moves[alg[i]])
    }
  
    const stNum = sk.getSticker()
    const st = stNum.map((cur) => num2color[cur])
  
    drawSkewb(size, canvas, context, st)
  
    im = document.getElementById('image')
    im.width = size
    im.src = canvas.toDataURL()
  }

  const gen = document.getElementById('gen')
  gen.onclick = generateImg

  generateImg()
})