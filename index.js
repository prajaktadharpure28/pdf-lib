const {PDFDocument , StandardFonts, rgb} = require('pdf-lib')

const fs = require('fs')

async function createPdf() {
    //initialize the pdf document

    const doc = await PDFDocument.create()
    
    const timesRomanFont = await doc.embedFont(StandardFonts.TimesRoman)

    //add a new page to the document

    const page = doc.addPage()

    const {width, height} = page.getSize()

    let fontsize = 80
    // doc.addPage()

    //add some text to the page

    page.drawText("Hello World",{
        x: 60,
        y: height - 4 * fontsize,
        size: fontsize,
        font: timesRomanFont,
        color: rgb(0,0,0)
    })
    //save the document to a file

    fs.writeFileSync('output.pdf', await doc.save())
}

createPdf()