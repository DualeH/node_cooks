const { createCanvas } = require('canvas')
const http = require('http')

// node render canvas demo
const server = http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'image/png')
    const canvas = createCanvas(200, 200)
    const ctx = canvas.getContext('2d')
    // Write "Awesome!"
    ctx.font = '30px Impact'
    ctx.rotate(0.1)
    ctx.fillText('Awesome!', 50, 100)

    // Draw line under text
    var text = ctx.measureText('Awesome!')
    ctx.strokeStyle = 'rgba(0,0,0,0.5)'
    ctx.beginPath()
    ctx.lineTo(50, 102)
    ctx.lineTo(50 + text.width, 102)
    ctx.stroke()
    const result = canvas.toDataURL()
    const base64 = result.replace(/^data:image\/\w+;base64,/, '');
    // base64 -> buffer
    const picBuffer = new Buffer.from(base64, 'base64')
    response.write(picBuffer)
    response.end()
})

const hostName = '0.0.0.0'
const port = 8081
server.listen(port, hostName, function () {
    console.log(`server started at port ${port}`)
})