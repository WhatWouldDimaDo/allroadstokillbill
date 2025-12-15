import * as THREE from 'three';
import { NodeData } from '../types';
import { posterLoader } from './posterLoader';

export const createGeometryNode = (node: NodeData, isDimmed: boolean = false): THREE.Object3D => {
    const isCenterNode = node.name.toLowerCase().includes('kill bill');
    const radius = isCenterNode ? 12 : Math.max(4, (node.size || 10) / 2);
    
    // Geometry
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    
    // Material
    const color = isDimmed ? '#222222' : node.color;
    const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        metalness: 0.1,
        roughness: 0.4,
        transparent: true,
        opacity: isDimmed ? 0.1 : 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
    });

    const mesh = new THREE.Mesh(geometry, material);

    // Glow for center node or active nodes
    if (isCenterNode && !isDimmed) {
        const glowGeometry = new THREE.SphereGeometry(radius * 1.5, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0xFFD700),
            transparent: true,
            opacity: 0.2,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        mesh.add(glowMesh);
    }

    return mesh;
};

export const createPosterNode = (node: NodeData, isDimmed: boolean = false, globalScale: number = 1): THREE.Object3D => {
  // SPECIAL HANDLING: Kill Bill nodes are anchors
  const isCenterNode = node.name.toLowerCase().includes('kill bill');
  
  // Reduced size multiplier for KB (was 3.2, now 2.2) to be less overwhelming
  const sizeMultiplier = isCenterNode ? 2.2 : 2.5; 

  // Base scale calculation with Global Scale Slider applied
  const baseScale = (node.size || 10) * sizeMultiplier * globalScale;
  const width = baseScale;
  const height = width * 1.5; // 2:3 aspect ratio

  const group = new THREE.Group();

  // Opacity & Color
  const opacity = isDimmed ? 0.05 : 1.0; 
  const grayscale = isDimmed;
  
  const borderColor = isCenterNode ? '#FFD700' : (isDimmed ? '#444444' : node.color);

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
      opacity: opacity, // Border fades too
      depthWrite: false,
      depthTest: true
  });
  const borderSprite = new THREE.Sprite(borderMaterial);

  // Border thickness - scaled relative to node size
  const borderThickness = (isCenterNode ? 6 : 3) * globalScale; 
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
      
      if (grayscale) {
          bgGradient.addColorStop(0, '#333');
          bgGradient.addColorStop(1, '#000');
          ctx.fillStyle = bgGradient;
      } else {
          bgGradient.addColorStop(0, baseColor);
          bgGradient.addColorStop(1, '#111111');
          ctx.fillStyle = bgGradient;
      }
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

      // Title text
      ctx.fillStyle = isDimmed ? '#666' : '#ffffff';
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

      // Wrap text
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
      ctx.fillStyle = isDimmed ? '#555' : '#aaaaaa';
      ctx.fillText(`(${node.year})`, 200, startY + lines.length * lineHeight + 30);
    }
    return new THREE.CanvasTexture(canvas);
  };

  const placeholderTexture = createPlaceholderTexture();

  const contentMaterial = new THREE.SpriteMaterial({
    map: placeholderTexture,
    transparent: true,
    opacity: opacity,
    depthWrite: false,
    depthTest: true
  });
  
  if (grayscale) {
      // Tint it grey
      contentMaterial.color.setHex(0x555555); 
  }

  // Load poster using the dynamic poster loader
  const loadPosterAsync = async () => {
    try {
      const posterUrl = await posterLoader.getPosterUrl(node.id, node.name, node.year);
      if (posterUrl && posterUrl !== node.posterUrl) {
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');
        loader.load(
          posterUrl,
          (loadedTex) => {
            loadedTex.colorSpace = THREE.SRGBColorSpace;
            contentMaterial.map = loadedTex;
            contentMaterial.needsUpdate = true;
          },
          undefined,
          (error) => {
            console.warn(`Failed to load poster texture for ${node.name}:`, error);
          }
        );
      }
    } catch (error) {
      console.warn(`Failed to get poster URL for ${node.name}:`, error);
    }
  };

  // Load poster asynchronously
  loadPosterAsync();

  const contentSprite = new THREE.Sprite(contentMaterial);
  contentSprite.scale.set(width, height, 1);
  group.add(contentSprite);

  // BILLBOARD ROTATION: Always face camera (right-side up)
  const updateRotation = () => {
    contentSprite.rotation.set(0, 0, 0);
    borderSprite.rotation.set(0, 0, 0);
    if (glowSprite) glowSprite.rotation.set(0, 0, 0);
  };

  const originalUpdateMatrix = group.updateMatrix;
  group.updateMatrix = function() {
    updateRotation();
    originalUpdateMatrix.call(this);
  };

  return group;
};
