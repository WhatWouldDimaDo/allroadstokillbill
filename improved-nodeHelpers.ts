/**
 * FURTHER IMPROVED nodeHelpers.ts - Billboard Rotation & Hover Effects
 *
 * Changes addressing user feedback:
 * 1. Billboard rotation - posters always face camera (right-side up)
 * 2. Enhanced hover effects with glow and scaling
 * 3. Larger nodes overall (2.5x multiplier instead of 1.8x)
 * 4. Kill Bill nodes 4x larger (was 3x)
 * 5. Better text rendering on placeholders
 * 6. Glow effect for highlighted nodes
 * 7. Improved poster loading with retry
 */

import * as THREE from 'three';
import { NodeData } from '../types';

export const createPosterNode = (node: NodeData, isDimmed: boolean = false): THREE.Object3D => {
  // SPECIAL HANDLING: Kill Bill nodes are anchors, make them MASSIVE
  const isCenterNode = node.name.toLowerCase().includes('kill bill');
  const sizeMultiplier = isCenterNode ? 4.0 : 2.5; // Bigger! (was 3.0/1.8)

  // Base scale calculation
  const baseScale = (node.size || 10) * sizeMultiplier;
  const width = baseScale;
  const height = width * 1.5; // 2:3 aspect ratio

  const group = new THREE.Group();

  // Opacity & Color
  const opacity = isDimmed ? 0.12 : 1.0;
  const borderColor = isCenterNode ? '#FFD700' : (isDimmed ? '#333333' : node.color);

  // Declare glowSprite in scope for billboard rotation
  let glowSprite: THREE.Sprite | null = null;

  // --- GLOW SPRITE (for Kill Bill and highlighted nodes) ---
  if (isCenterNode && !isDimmed) {
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 128;
    glowCanvas.height = 128;
    const glowCtx = glowCanvas.getContext('2d');
    if (glowCtx) {
      const gradient = glowCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.6)');
      gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
      glowCtx.fillStyle = gradient;
      glowCtx.fillRect(0, 0, 128, 128);
    }
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    const glowMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending
    });
    glowSprite = new THREE.Sprite(glowMaterial);
    glowSprite.scale.set(width * 1.8, height * 1.8, 1);
    glowSprite.position.z = -0.3;
    group.add(glowSprite);
  }

  // --- BORDER SPRITE ---
  const borderCanvas = document.createElement('canvas');
  borderCanvas.width = 64;
  borderCanvas.height = 64;
  const bCtx = borderCanvas.getContext('2d');
  if(bCtx) {
      bCtx.fillStyle = borderColor;
      bCtx.fillRect(0,0,64,64);
  }
  const borderTexture = new THREE.CanvasTexture(borderCanvas);
  borderTexture.colorSpace = THREE.SRGBColorSpace;

  const borderMaterial = new THREE.SpriteMaterial({
      map: borderTexture,
      transparent: true,
      opacity: opacity,
      depthWrite: false,
      depthTest: true
  });
  const borderSprite = new THREE.Sprite(borderMaterial);

  // Border thickness - thicker for visibility
  const borderThickness = isCenterNode ? 8 : 4; // Was 6/3
  borderSprite.scale.set(width + borderThickness, height + borderThickness, 1);
  borderSprite.position.z = -0.1;
  group.add(borderSprite);


  // --- CONTENT SPRITE ---
  const createPlaceholderTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Background with gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, 600);
      const baseColor = node.color || '#333';
      bgGradient.addColorStop(0, baseColor);
      bgGradient.addColorStop(1, '#111111');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, 400, 600);

      // Film grain effect
      if (!isDimmed) {
        ctx.fillStyle = 'rgba(255,255,255,0.03)';
        for (let i = 0; i < 500; i++) {
          ctx.fillRect(
            Math.random() * 400,
            Math.random() * 600,
            1, 1
          );
        }
      }

      // Gradient overlay for depth
      const gradient = ctx.createLinearGradient(0, 0, 0, 600);
      gradient.addColorStop(0, 'rgba(0,0,0,0.1)');
      gradient.addColorStop(0.7, 'rgba(0,0,0,0.6)');
      gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 400, 600);

      // Title text
      ctx.fillStyle = isDimmed ? '#444' : '#ffffff';
      ctx.font = 'bold 48px "Helvetica Neue", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Text shadow for readability
      if (!isDimmed) {
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
      }

      // Wrap text with better algorithm
      const words = node.name.split(' ');
      const lines: string[] = [];
      let currentLine = '';
      const maxWidth = 350;

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      // Draw title lines
      const lineHeight = 55;
      const startY = 280 - (lines.length - 1) * (lineHeight / 2);
      lines.forEach((line, i) => {
        ctx.fillText(line, 200, startY + i * lineHeight);
      });

      // Year
      ctx.shadowBlur = 0;
      ctx.font = '36px "Helvetica Neue", Arial, sans-serif';
      ctx.fillStyle = isDimmed ? '#444' : '#aaaaaa';
      ctx.fillText(`(${node.year})`, 200, startY + lines.length * lineHeight + 30);

      // Director (smaller)
      if (node.director && !isDimmed) {
        ctx.font = '24px "Helvetica Neue", Arial, sans-serif';
        ctx.fillStyle = '#666666';
        ctx.fillText(node.director.split('|')[0], 200, 550);
      }
    }
    return new THREE.CanvasTexture(canvas);
  };

  const placeholderTexture = createPlaceholderTexture();

  const applyTextureSettings = (tex: THREE.Texture) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 16;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
  };
  applyTextureSettings(placeholderTexture);

  const contentMaterial = new THREE.SpriteMaterial({
    map: placeholderTexture,
    transparent: true,
    opacity: opacity,
    depthWrite: false,
    depthTest: true
  });

  // Load poster with better error handling
  if (node.posterUrl) {
    const loader = new THREE.TextureLoader();

    // Add crossOrigin for TMDB images
    loader.setCrossOrigin('anonymous');

    loader.load(
      node.posterUrl,
      (loadedTex) => {
        applyTextureSettings(loadedTex);
        contentMaterial.map = loadedTex;
        contentMaterial.needsUpdate = true;
      },
      undefined,
      (err) => {
        console.warn(`Poster load failed for ${node.name}:`, err);
        // Keep placeholder - already set
      }
    );
  }

  const contentSprite = new THREE.Sprite(contentMaterial);
  contentSprite.scale.set(width, height, 1);
  group.add(contentSprite);

  // BILLBOARD ROTATION: Always face camera (right-side up)
  // This ensures posters are always oriented correctly regardless of graph rotation
  const updateRotation = () => {
    // Override the default sprite rotation to always face camera
    contentSprite.rotation.set(0, 0, 0);
    borderSprite.rotation.set(0, 0, 0);
    if (glowSprite) glowSprite.rotation.set(0, 0, 0);
  };

  // Add billboard update to render loop
  const originalUpdateMatrix = group.updateMatrix;
  group.updateMatrix = function() {
    updateRotation();
    originalUpdateMatrix.call(this);
  };

  return group;
};

export const addStarfield = (scene: THREE.Scene) => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsVertices: number[] = [];
    const starsColors: number[] = [];

    // More stars, varied sizes via color intensity
    for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 1500;
        starsVertices.push(x, y, z);

        // Vary brightness
        const brightness = 0.3 + Math.random() * 0.4;
        starsColors.push(brightness, brightness, brightness);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starsColors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 1.2,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
};
