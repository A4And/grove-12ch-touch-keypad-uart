# grove-12ch-touch-keypad-uart (micro:bit)

Extension MakeCode pour le Grove 12-Channel Capacitive Touch Keypad (ATtiny1616), communication UART 9600.

## Valeurs retournées
- -1 : aucune touche reçue
- 0..9 : chiffres
- 10 : '*'
- 11 : '#'

## Câblage
TX module -> RX micro:bit  
RX module -> TX micro:bit  
VCC -> 3V (recommandé)  
GND -> GND



> Open this page at [https://a4and.github.io/grove-12ch-touch-keypad-uart/](https://a4and.github.io/grove-12ch-touch-keypad-uart/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/a4and/grove-12ch-touch-keypad-uart** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/a4and/grove-12ch-touch-keypad-uart** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
