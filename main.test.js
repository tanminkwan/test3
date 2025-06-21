/**
 * @jest-environment jest-environment-puppeteer
 */

const path = require('path');

describe('Three.js Scene', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8081/index.html', { waitUntil: 'load' });
  });

  it('should have a cube in the scene', async () => {
    const sceneJSON = await page.evaluate(async () => {
      const { main } = await import('/main.js');
      const scene = main();
      return scene.toJSON();
    });
    // there is one object in the scene (the cube)
    expect(sceneJSON.object.children.length).toBe(1);
    // the object is a Mesh
    expect(sceneJSON.object.children[0].type).toBe('Mesh');
  });
}); 