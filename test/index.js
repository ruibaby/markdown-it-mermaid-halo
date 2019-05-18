// import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItLatex from '../dist/index'

const mdi = markdownIt()
mdi.use(markdownItLatex)

// assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>', '# Hello world')
// assert(mdi.render('Hello world').trim() === '<p>Hello world</p>', 'Hello world')

console.log(mdi.render(`\`\`\`mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
\`\`\``))
// console.log(mdi.render(`\`\`\`mermaid
// graph TD
//     A[Christmas] -->|Get money| B(Go shopping)
//     B --> C{Let me think}
//     C -->|One| D[Laptop]
//     C -->|Two| E[iPhone]
//     C -->|Three| F[Car]
// \`\`\``))
// console.log(mdi.render(`\`\`\`
// graph TD
//     A[Christmas] -->|Get money| B(Go shopping)
//     B --> C{Let me think}
//     C -->|One| D[Laptop]
//     C -->|Two| E[iPhone]
//     C -->|Three| F[Car]
// \`\`\``))
// console.log(mdi.render(`\`\`\`
// graph TD
//     A[Christmas] -->|Get money| B(Go shopping)
//     B ----> C{Let me think}
//     C -->|One| D[Laptop]
//     C -->|Two| E[iPhone]
//     C -->|Three| F[Car]
// \`\`\``))

// assert(mdi.render(`\`\`\`mermaid
// graph TD
//     A[Christmas] -->|Get money| B(Go shopping)
//     B --> C{Let me think}
//     C -->|One| D[Laptop]
//     C -->|Two| E[iPhone]
//     C -->|Three| F[Car]
// \`\`\``).indexOf('class="mermaid"') > -1)
// assert(mdi.render(`\`\`\`
// graph TD
//     A[Christmas] -->|Get money| B(Go shopping)
//     B --> C{Let me think}
//     C -->|One| D[Laptop]
//     C -->|Two| E[iPhone]
//     C -->|Three| F[Car]
// \`\`\``).indexOf('class="mermaid"') > -1)
// assert(mdi.render(`\`\`\`
// graph TD
//     A[Christmas] -->|Get money| B(Go shopping)
//     B ----> C{Let me think}
//     C -->|One| D[Laptop]
//     C -->|Two| E[iPhone]
//     C -->|Three| F[Car]
// \`\`\``).indexOf('<pre>Parse error') > -1)
