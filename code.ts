// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
const pageArray = [
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

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

const createNewPageTitles = (page: any, name: string) => {
  // Create a text
  // Create a new text node
  const textNode = figma.createText();

  // Set the text and styles of the text node
  textNode.characters = "Hello, world!";
  textNode.fontSize = 24;
  textNode.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];

  // Append the text node to the target page
  page.appendChild(textNode);
}

figma.ui.onmessage = async msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  // Create pages
  if (msg.type === 'create-pages') {
    for (let i = 0; i < pageArray.length; i++) {
      // Create the page
      const newPage = figma.createPage()
      newPage.name = pageArray[i]

      // // Create titles - start
      // // Get the current page
      // const currentPage = figma.currentPage;
      // // Get the page where you want to move the text node to
      // // const targetPage = figma.root.children.find(page => page.name === String(pageArray[i]));
      // const targetPage = newPage

      // // Create a new text node
      // const textNode = figma.createText();

      // // Set the text and styles of the text node
      // textNode.characters = "Hello, world!";
      // textNode.fontSize = 24;
      // textNode.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];

      // // Append the text node to the target page
      // targetPage?.appendChild(textNode);

      // // Select the newly created text node
      // figma.currentPage.selection = [textNode];

      // // Zoom to the newly created text node
      // figma.viewport.scrollAndZoomIntoView([textNode]);
      // // Create titles - end

      // Get the page where you want to move the text node to
      // const targetPage = figma.root.children.find(page => page.name === pageArray[i]) ?? figma.root.children[0]

      // const textNode = figma.createText();

      // // Set the text and styles of the text node
      // textNode.characters = "Hello, world!";
      // textNode.fontSize = 24;
      // textNode.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];

      // // Append the text node to the target page
      // targetPage.appendChild(textNode);

      // createNewPageTitles(targetPage ?? {}, pageArray[i])

    }
  }

  // Delete pages
  if (msg.type === 'delete-pages') {
    // Traverse all document children
    console.log(figma.root)
    // figma.root.children.forEach( (child, index) => {
    //   console.log(child)
    //   child.remove()
    // });

    // figma.createTable({numRows: 8, numColumns?: 4})
    // const table = figma.createTable(8, 4)
  }

  // // placeholder - end
  // if (msg.type === 'create-rectangles') {
  //   const nodes: SceneNode[] = [];
  //   for (let i = 0; i < msg.count; i++) {
  //     const rect = figma.createRectangle();
  //     rect.x = i * 150;
  //     rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
  //     figma.currentPage.appendChild(rect);
  //     nodes.push(rect);
  //   }
  //   figma.currentPage.selection = nodes;
  //   figma.viewport.scrollAndZoomIntoView(nodes);
  // }
  // // placeholder - end

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
