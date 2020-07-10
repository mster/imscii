'use strict'

const Jimp = require('jimp')
const debug = require('util').debuglog('imscii')
const print = console.log

module.exports = imscii

function imscii (read, options) {
  const pmap = []

  function mapImage (img) {
    if (!options) options = {}

    const { width, height } = options

    if (width && height) {
      debug(`using provided dimensions: width: ${width}, height: ${height}`)

      img.resize(width, height, Jimp.RESIZE_BEZIER)
    } else if (width && !height) {
      debug(`using provided dimensions: width: ${width}`)

      const scaledHeight = Math.ceil(
        ((width / img.bitmap.width) * img.bitmap.height) / 2
      )

      debug('calculated scaled-height', scaledHeight)
      img.resize(width, scaledHeight, Jimp.RESIZE_BEZIER)
    } else if (!width && height) {
      debug(`using provided dimensions: height: ${height}`)

      const scaledWidth = Math.floor(
        (height / img.bitmap.height) * img.bitmap.width * 2
      )

      debug('calculated scaled-width', scaledWidth)
      img.resize(scaledWidth, height, Jimp.RESIZE_BEZIER)
    } else {
      debug('calculated scale height -- no dimensions given')

      const scaledHeight = Math.floor(
        (img.bitmap.height * (80 / img.bitmap.width)) / 2
      )

      debug('calculated scaled-height', scaledHeight)
      img.resize(80, scaledHeight, Jimp.RESIZE_BEZIER)
    }

    const data = img.bitmap.data

    /* take avg pixel data */
    for (let i = 0; i < data.length; i += 4) {
      const avgValue = Math.floor((data[i + 0] + data[i + 1] + data[i + 2]) / 3)
      pmap[i / 4] = avgValue
    }

    return img.bitmap.width
  }

  function paintASCII (xWidth) {
    debug('image processed -- painting will occur')

    /* Happy little accidents */
    let line = '!'
    for (let i = 0; i < pmap.length; i++) {
      if (i % xWidth === 0 && i > 0) {
        print(line)
        line = '!'
      }

      line += getChar(pmap[i])
    }
  }

  function getChar (value) {
    if (value > 0 && value < 25) {
      return '.'
    } else if (value >= 25 && value < 50) {
      return ','
    } else if (value >= 50 && value < 75) {
      return "'"
    } else if (value >= 75 && value < 100) {
      return '`'
    } else if (value >= 100 && value < 125) {
      return '-'
    } else if (value >= 125 && value < 150) {
      return ':'
    } else if (value >= 150 && value < 175) {
      return ';'
    } else if (value >= 175 && value < 200) {
      return '+'
    } else if (value >= 200 && value < 225) {
      return '/'
    } else if (value >= 225 && value < 255) {
      return '#'
    } else {
      return '_'
    }
  }

  Jimp.read(read)
    .then(mapImage)
    .then(paintASCII)
    .catch(console.error)
}

