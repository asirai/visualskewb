const drawSkewb = (size, ca, ctx, sticker) => {
  const w = 0.95 * size / 2 // U面の幅(基準)
  const padW = 0.05 * size / 2
  const padH = (size - w * 3 / Math.sqrt(3)) / 2
  const black  = '#000000'

  ca.width = size
  ca.height = size
  ctx.lineWidth = w / 50

  const drawPolygon = (border, color, n, ...coord) => {
    ctx.beginPath()
    for (let i = 0; i < n; ++i) {
      const p = coord[i]
      if (i == 0) {
      ctx.moveTo(...p)
      }
      else {
      ctx.lineTo(...p)
      }
    }
    ctx.closePath()
    
    if (border != null) {
      ctx.strokeStyle = border
      ctx.stroke()
    }

    if (color != null) {
      ctx.fillStyle = color
      ctx.fill()
    }
  }

  const drawFace1 = (idx, x, y) => {
    const p0 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p1 = [x + w * 3 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p2 = [x + w * 3 / 4, y + (w / Math.sqrt(3)) * 3 / 4]
    const p3 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 3 / 4]

    const p4 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 0 / 2]
    const p5 = [x + w * 2 / 2, y + (w / Math.sqrt(3)) * 1 / 2]
    const p6 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 2 / 2]
    const p7 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 1 / 2]

    drawPolygon(null, sticker[idx * 5 + 0], 4, p0, p1, p2, p3)
    drawPolygon(null, sticker[idx * 5 + 1], 3, p4, p0, p1)
    drawPolygon(null, sticker[idx * 5 + 2], 3, p5, p1, p2)
    drawPolygon(null, sticker[idx * 5 + 3], 3, p6, p2, p3)
    drawPolygon(null, sticker[idx * 5 + 4], 3, p7, p3, p0)
  }

  const drawFace2 = (idx, x, y) => {
    const p0 = [x + w * 0 / 4, y + (w / Math.sqrt(3)) * 2 / 4]
    const p1 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p2 = [x + w * 2 / 4, y + (w / Math.sqrt(3)) * 4 / 4]
    const p3 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 5 / 4]

    const p4 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 0 / 2]
    const p5 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 1 / 2]
    const p6 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 3 / 2]
    const p7 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 2 / 2]

    drawPolygon(null, sticker[idx * 5 + 0], 4, p0, p1, p2, p3)
    drawPolygon(null, sticker[idx * 5 + 1], 3, p4, p0, p1)
    drawPolygon(null, sticker[idx * 5 + 2], 3, p5, p1, p2)
    drawPolygon(null, sticker[idx * 5 + 3], 3, p6, p2, p3)
    drawPolygon(null, sticker[idx * 5 + 4], 3, p7, p3, p0)
  }

  const drawFace3 = (idx, x, y) => {
    const p0 = [x + w * 0 / 4, y + (w / Math.sqrt(3)) * 4 / 4]
    const p1 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p2 = [x + w * 2 / 4, y + (w / Math.sqrt(3)) * 2 / 4]
    const p3 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 5 / 4]

    const p4 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 1 / 2]
    const p5 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 0 / 2]
    const p6 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 2 / 2]
    const p7 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 3 / 2]

    drawPolygon(null, sticker[idx * 5 + 0], 4, p0, p1, p2, p3)
    drawPolygon(null, sticker[idx * 5 + 1], 3, p4, p0, p1)
    drawPolygon(null, sticker[idx * 5 + 2], 3, p5, p1, p2)
    drawPolygon(null, sticker[idx * 5 + 3], 3, p6, p2, p3)
    drawPolygon(null, sticker[idx * 5 + 4], 3, p7, p3, p0)
  }

  const drawOutline1 = (x, y) => {
    const p0 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p1 = [x + w * 3 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p2 = [x + w * 3 / 4, y + (w / Math.sqrt(3)) * 3 / 4]
    const p3 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 3 / 4]

    const p4 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 0 / 2]
    const p5 = [x + w * 2 / 2, y + (w / Math.sqrt(3)) * 1 / 2]
    const p6 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 2 / 2]
    const p7 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 1 / 2]
    drawPolygon(black, null, 4, p0, p1, p2, p3)
    drawPolygon(black, null, 4, p4, p5, p6, p7)
  }

  const drawOutline2 = (x, y) => {
    const p0 = [x + w * 0 / 4, y + (w / Math.sqrt(3)) * 2 / 4]
    const p1 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p2 = [x + w * 2 / 4, y + (w / Math.sqrt(3)) * 4 / 4]
    const p3 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 5 / 4]

    const p4 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 0 / 2]
    const p5 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 1 / 2]
    const p6 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 3 / 2]
    const p7 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 2 / 2]
    drawPolygon(black, null, 4, p0, p1, p2, p3)
    drawPolygon(black, null, 4, p4, p5, p6, p7)
  }

  const drawOutline3 = (x, y) => {
    const p0 = [x + w * 0 / 4, y + (w / Math.sqrt(3)) * 4 / 4]
    const p1 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 1 / 4]
    const p2 = [x + w * 2 / 4, y + (w / Math.sqrt(3)) * 2 / 4]
    const p3 = [x + w * 1 / 4, y + (w / Math.sqrt(3)) * 5 / 4]

    const p4 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 1 / 2]
    const p5 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 0 / 2]
    const p6 = [x + w * 1 / 2, y + (w / Math.sqrt(3)) * 2 / 2]
    const p7 = [x + w * 0 / 2, y + (w / Math.sqrt(3)) * 3 / 2]
    drawPolygon(black, null, 4, p0, p1, p2, p3)
    drawPolygon(black, null, 4, p4, p5, p6, p7)
  }

  drawFace1(0, w * 1 / 2 + padW, (w / Math.sqrt(3)) * 0 / 2 + padH) // U
  drawFace2(1, w * 1 / 2 + padW, (w / Math.sqrt(3)) * 1 / 2 + padH) // F
  drawFace3(2, w * 2 / 2 + padW, (w / Math.sqrt(3)) * 1 / 2 + padH) // R
  drawFace2(3, w * 1 / 2 + padW, (w / Math.sqrt(3)) * 3 / 2 + padH) // D
  drawFace3(4, w * 3 / 2 + padW, (w / Math.sqrt(3)) * 0 / 2 + padH) // B
  drawFace2(5, w * 0 / 2 + padW, (w / Math.sqrt(3)) * 0 / 2 + padH) // L

  ctx.lineJoin = 'round'
  drawOutline1(w * 1 / 2 + padW, (w / Math.sqrt(3)) * 0 / 2 + padH) // U
  drawOutline2(w * 1 / 2 + padW, (w / Math.sqrt(3)) * 1 / 2 + padH) // F
  drawOutline3(w * 2 / 2 + padW, (w / Math.sqrt(3)) * 1 / 2 + padH) // R
  drawOutline2(w * 1 / 2 + padW, (w / Math.sqrt(3)) * 3 / 2 + padH) // D
  drawOutline3(w * 3 / 2 + padW, (w / Math.sqrt(3)) * 0 / 2 + padH) // B
  drawOutline2(w * 0 / 2 + padW, (w / Math.sqrt(3)) * 0 / 2 + padH) // L
}