<template>
  <canvas
    ref="canvas"
    :width="width"
    :height="height"
    style="border:2px solid;touch-action: none;display: block;"
  />
</template>

<script>
export default {
  model: {
    prop: 'image',
  },

  props: {
    image: {
      type: [String, Blob, File],
      default: '',
      required: true,
    },
    file: {
      type: Boolean,
      default: true,
    },
    blob: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: 'jpeg',
    },
  },

  data: () => ({
    strokeWidth: 20,
    strokeColor: 'black',
    lineCap: 'round',
    dotFlag: false,
    flag: false,
    width: 320,
    height: 320,
    previousX: 0,
    currentX: 0,
    previousY: 0,
    currentY: 0,
    localImage: 0,
  }),

  computed: {
    canvas () {
      return this.$refs.canvas
    },

    ctx () {
      return this.canvas.getContext('2d')
    },

    canvasOffset () {
      // eslint-disable-next-line no-unused-expressions
      this.localImage
      const rect = this.canvas.getBoundingClientRect()
      return {
        top: rect.top,
        left: rect.left,
      }
    },
  },

  watch: {
    image (val) {
      if (!val) {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.localImage = ''
        this.flag = false
        if (this.format === 'jpeg') {
          this.fillBackgroundWithWhite()
        }
      }
    },

    localImage () {
      this.$emit('input', this.localImage)
    },
  },

  mounted () {
    this.init()
    if (this.format === 'jpeg') {
      this.fillBackgroundWithWhite()
    }
  },

  methods: {
    init () {
      const self = this
      self.width = self.canvas.width
      self.height = self.canvas.height

      self.canvas.addEventListener('mousemove', function (e) {
        self.findXY('move', e)
      }, false)
      self.canvas.addEventListener('touchmove', function (e) {
        self.findXY('move', e)
      }, false)
      self.canvas.addEventListener('mousedown', function (e) {
        self.findXY('down', e)
      }, false)
      self.canvas.addEventListener('touchstart', function (e) {
        self.findXY('down', e)
      }, false)
      self.canvas.addEventListener('mouseup', function (e) {
        self.findXY('up', e)
      }, false)
      self.canvas.addEventListener('touchend', function (e) {
        self.findXY('up', e)
      }, false)
      self.canvas.addEventListener('mouseout', function (e) {
        self.findXY('out', e)
      }, false)
    },

    draw () {
      this.ctx.beginPath()
      this.ctx.moveTo(this.previousX, this.previousY)
      this.ctx.lineTo(this.currentX, this.currentY)
      this.ctx.lineCap = this.lineCap
      this.ctx.strokeStyle = this.strokeColor
      this.ctx.lineWidth = this.strokeWidth
      this.ctx.stroke()
      this.ctx.closePath()
    },

    save () {
      const self = this
      if (this.blob) { this.canvas.toBlob(blob => { self.localImage = blob }, 'image/' + this.format) } else if (this.file) {
        const data = this.canvas.toDataURL('image/' + this.format)
        this.localImage = this.dataURLtoFile(data, 'image')
      } else { this.localImage = this.canvas.toDataURL('image/' + this.format) }
    },

    findXY (res, e) {
      if (res === 'down') {
        this.previousX = this.currentX
        this.previousY = this.currentY
        this.currentX = this.getXY(e).x - this.canvasOffset.left
        this.currentY = this.getXY(e).y - this.canvasOffset.top

        this.flag = true
        this.dotFlag = true
        if (this.dotFlag) {
          this.ctx.beginPath()
          this.ctx.arc(this.currentX, this.currentY, this.strokeWidth / 2, 0, 2 * Math.PI)
          this.ctx.fillStyle = this.strokeColor
          this.ctx.fill()
          this.ctx.closePath()
          this.dotFlag = false
        }
      }
      if (res === 'up' || res === 'out') {
        if (this.flag) { this.save() }
        this.flag = false
      }
      if (res === 'move') {
        if (this.flag) {
          this.previousX = this.currentX
          this.previousY = this.currentY
          this.currentX = this.getXY(e).x - this.canvasOffset.left
          this.currentY = this.getXY(e).y - this.canvasOffset.top
          this.draw()
        }
      }
    },

    getXY (e) {
      return {
        x: e.clientX || e.touches[0].clientX,
        y: e.clientY || e.touches[0].clientY,
      }
    },

    dataURLtoFile (dataUrl, filename) {
      const arr = dataUrl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bStr = atob(arr[1])
      let n = bStr.length
      const u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bStr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
    },

    fillBackgroundWithWhite () {
      this.ctx.fillStyle = 'rgb(255, 255, 255)'
      this.ctx.fillRect(0, 0, this.width, this.height)
    },
  },
}
</script>
