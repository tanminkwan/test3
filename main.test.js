/**
 * @jest-environment jest-environment-puppeteer
 */

const path = require('path');

describe('Three.js Scene', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8081/index.html', { waitUntil: 'load' });
  });

  it('should have a cube and a light in the scene', async () => {
    const sceneJSON = await page.evaluate(async () => {
      const { main } = await import('/main.js');
      const scene = main();
      return scene.toJSON();
    });
    // there are two objects in the scene (the light and the cube)
    expect(sceneJSON.object.children.length).toBe(2);

    // check for the light
    const light = sceneJSON.object.children.find(child => child.type === 'DirectionalLight');
    expect(light).toBeDefined();
    
    // check for the cube
    const cube = sceneJSON.object.children.find(child => child.type === 'Mesh');
    expect(cube).toBeDefined();
  });
}); 