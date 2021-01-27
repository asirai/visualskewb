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
    let alg = document.getElementById('alg').value.replace(/\s+/g, '')
    const size = document.getElementById('size').value

    const moveKeys = Object.keys(moves).sort((a, b) => b.length - a.length)

    let sk = new Skewb()
    const algArray = []
    while (alg.length > 0) {
      for (let i = 0; i < moveKeys.length; ++i) {
        const key = moveKeys[i]
        if (alg.startsWith(key)) {
          algArray.push(key)
          alg = alg.slice(key.length)
          break
        }
        if (i == moveKeys.length - 1) return
      }
    }
    
    for (let i = 0; i < algArray.length; ++i) {
      if (!Object.keys(moves).includes(algArray[i])) continue
      sk = sk.apply(moves[algArray[i]])
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