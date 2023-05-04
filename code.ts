
let pageArray = [
  'Cover',
  'Introduction',
  'Colors',
  'Typography',
  'Grid & Spacing',
  'Components overview',
  ' ',
  '----- COMPONENTS -----'
]

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

figma.ui.onmessage = async msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  // Create pages
  if (msg.type === 'create-pages') {
    for (let i = 0; i < pageArray.length; i++) {
      // Create the page
      const newPage = figma.createPage()
      newPage.name = pageArray[i]

    }
  }

  // Delete pages
  if (msg.type === 'delete-pages') {
    // Traverse all document children
    console.log(figma.root)
  }

  figma.closePlugin();
};
