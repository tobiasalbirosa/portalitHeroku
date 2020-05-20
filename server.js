const express = require('express')
const fs = require('fs')
const fsI = require('fs')
const path = require('path')
const app = express()
var http = require('http');




app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/video', function(req, res) {
	const path = 'video.webm'
	const stat = fs.statSync(path)
	const fileSize = stat.size
	const range = req.headers.range
	if (range) {
		const parts = range.replace(/bytes=/, "").split("-")
		const start = parseInt(parts[0], 10)
		const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1
		const chunksize = (end-start)+1
		const file = fs.createReadStream(path, {start, end})
		const head = {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'video/webm',
		}
		res.writeHead(206, head)
		file.pipe(res)
	} else {
		const head = {
			'Content-Length': fileSize,
			'Content-Type': 'video/webm',
		}
		res.writeHead(200, head)
		fs.createReadStream(path).pipe(res)
	}
})
app.get('/image', function(req, res) {
	const path = 'image.png'
	const stat = fsI.statSync(path)
	const fileSize = stat.size
	const range = req.headers.range
	if (range) {
		const parts = range.replace(/bytes=/, "").split("-")
		const start = parseInt(parts[0], 10)
		const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1
		const chunksize = (end-start)+1
		const file = fs.createReadStream(path, {start, end})
		const head = {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'image/png',
		}
		res.writeHead(206, head)
		file.pipe(res)
	} else {
		const head = {
			'Content-Length': fileSize,
			'Content-Type': 'image/png',
		}
		res.writeHead(200, head)
		fsI.createReadStream(path).pipe(res)
	}
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('App is running on port 3000')
})