class Skewb {
  constructor(state, sticker) {
    this.state = state ? state : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
    this.sticker = sticker ? sticker : [
      0,0,0,0,0, // U
      1,1,1,1,1, // F
      2,2,2,2,2, // R
      3,3,3,3,3, // D
      4,4,4,4,4, // B
      5,5,5,5,5, // L
    ]
    /**
     *            01    02
     *               00   
     *            04    03
     * 
     * 26    27   06    07   11    12   21    22
     *    25         05         10         20
     * 29    28   09    08   14    13   24    23
     * 
     *            16    17
     *               15   
     *            19    18
     */
  }

  apply(move) {
    return new Skewb(
      this.state.map((_, idx) => this.state[move.state[idx]]),
      this.sticker.map((_, idx) => this.sticker[move.state[idx]])
    )
  }

  getSticker() {
    return this.sticker
  }
}

// F, B, R, L, f, r, l, x, y, z
const moves = {}
moves.F = new Skewb(
  [5,1,6,7,8,10,14,11,12,9,0,3,4,13,2,15,16,21,18,19,20,27,22,23,24,25,26,17,28,29],
  null
)
moves.B = new Skewb(
  [20,22,23,3,21,5,12,7,8,9,10,11,19,13,14,15,16,17,18,6,25,29,26,27,24,0,1,2,28,4],
  null
)
moves.R = new Skewb(
  [10,11,12,13,4,5,6,18,8,9,20,24,21,22,14,15,16,17,26,19,0,2,3,23,1,25,7,27,28,29],
  null
)
moves.L = new Skewb(
  [25,28,2,26,27,0,4,1,8,3,10,22,12,13,14,15,11,17,18,19,20,21,16,23,24,5,9,6,7,29],
  null
)
moves.f = new Skewb(
  [0,1,2,28,4,15,6,16,17,18,5,9,12,7,8,10,13,14,11,19,20,21,22,23,3,25,26,27,24,29],
  null
)
moves.r = new Skewb(
  [0,1,8,3,4,5,6,7,29,9,15,11,17,18,19,20,16,23,24,21,10,14,22,12,13,25,26,27,28,2],
  null
)
moves.l = new Skewb(
  [0,1,2,3,23,25,29,7,27,28,10,11,12,13,4,5,9,6,18,8,20,21,22,14,24,15,26,19,16,17],
  null
)
moves.x = new Skewb(
  [],
  null
)
moves.y = new Skewb(
  [],
  null
)
moves.z = new Skewb(
  [25,29,26,27,28,5,9,6,7,8,0,4,1,2,3,10,14,11,12,13,20,22,23,24,21,15,19,16,17,18],
  null
)

const keys = Object.keys(moves)
for (let i = 0; i < keys.length; ++i) {
  const key = keys[i]
  if (['x', 'y', 'z'].includes(key)) {
    moves[key + '2'] = moves[key].apply(moves[key])
    moves[key + '\''] = moves[key].apply(moves[key + '2'])
    moves[key + '\'2'] = moves[key + '2']
    continue
  }
  moves[key + '2'] = moves[key].apply(moves[key])
  moves[key + '\''] = moves[key].apply(moves[key])
  moves[key + '\'2'] = moves[key]
}