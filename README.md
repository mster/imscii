`````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-```;///:```-/////,`````+////+````.:/#####/+:``````.:+/####/+-```+///-```:///+```
-```/___;```:_____#.```+_____#```,#__#:--:+//````./___#;:-:+#/```#___:```;___/```
-```/___;```:___#__#'`;__#___#```;___;'`````````'#___;```````````#___:```;___/```
-```/___;```:___++__/:__#:___#```'/____##/;-'```:___#````````````#___:```;___/```
-```/___;```:___+`/____#.,___#`````.-:+/#___#-``:___#'```````````#___:```;___/```
-```/___;```:___+`'#___-`,___#```''``````;___/``'#___+```````'```#___:```;___/```
-```/___;```:___+``',,.``,___#```:_#+;::;#__#-```'+___#+::;+#/```#___:```;___/```
-```;+++:```,+++:````````.++++```.:;+/###/+:.``````.-;//##/+;,```;+++-```-+++;```
-`.,,,,,,,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.`
-``'''''''`''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''`'''''''``
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
-````````````````````````````````````````````````````````````````````````````````
`````````````````````````````````````````````````````````````````````````````````

# IMSCII

Turning images into something a little less useful.

[_What is ASCII Art?_](https://en.wikipedia.org/wiki/ASCII_art)

## Installation

```sh
npm install imscii
```

## Usage

### `imscii (image, options)`

- `image`: `<string>` | `<Buffer>` (Required)

  The string path to the source image or the source image in buffer form.

  `image` is a required parameter for obvious reasons.

- `options`: `<Object>`

  - `width`: `<Integer>` resulting width in characters, defaulting to `80`.
  - `height`: `<Integer>` resulting height in characters

  Size options deal with output. Rescaling is done if only one size option is provided, so no worries!

  For example, if you wish to make ASCII art that fits on a standard terminal, all you would need to do is assign the width to be `80` in options.

## Sample Code

Start sprinting!

```js
;(function whoNeedsArtSchool () {
  require('imscii')('/path/to/my/sick/photo.jpg', {
    width: 80
  })
})()
```

```sh
$ node myScript.js >> myArt.txt
```

## Examples

IMSCII can make some cool stuff in my opinion. Higher output resolutions will yield impressive results.

[![asciicast](https://asciinema.org/a/3gW73MFxlgRYegOgxb1OBAUvM.svg)](https://asciinema.org/a/3gW73MFxlgRYegOgxb1OBAUvM)

No really, you can make them as big as you want -- even larger than the source image. Try it out.

## FAQ

#### Why doesn't my text file look my the console output?

Well, that's due to the font your editor/system uses!

Because characters (i.e `"` vs `#`) may have different widths depending on the font, each line of your ASCII Art may differ in length. To solve this, check out monospaced fonts! You can read more about them [here](https://en.wikipedia.org/wiki/Monospaced_font).

## Contributing

See our guidelines, in [Contributing](https://github.com/mster/imscii/blob/master/CONTRIBUTING.md).
