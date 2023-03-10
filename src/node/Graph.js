import { Canvas } from '../core/Canvas.js';
import { ColorScheme } from '../utils/ColorScheme.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Iris } from '../utils/Iris.js';
import { Panel } from '../panels/Panel.js';
import { GRAPH_GRID_TYPES, GRAPH_LINE_TYPES, GRID_SIZE, NODE_TYPES, RESIZERS, TRAIT } from '../constants.js';

const MIN_W = 100;
const MIN_H = 100;
const MAP_BUFFER = 100;
const MIN_MAP_SIZE = 1200;
const ANIMATE_INTERVAL = 4; /* ms */
const ZOOM_MAX = 4;
const ZOOM_MIN = 0.1;

const _color = new Iris();

class Graph extends Panel {

    #scale = 1;
    #offset = { x: 0, y: 0 };
    #previous = { x: 0, y: 0 };
    #drawWidth = 0;
    #drawHeight = 0;

    constructor({
        snapToGrid = true,
        curveType = GRAPH_LINE_TYPES.CURVE,
        gridType = GRAPH_GRID_TYPES.LINES,
    } = {}) {
        super();
        const self = this;

        // Properties
        this.activeItem = undefined;                // Item user is trying to connect from
        this.connectItem = undefined;               // Item user is trying to connect to
        this.activePoint = { x: 0, y: 0 };
        this.curveType = curveType;
        this.gridType = gridType;
        this.snapToGrid = snapToGrid;

        // Elements
        this.input = new Div().setClass('GraphInput');
        this.grid = new Div().setClass('GraphGrid');
		this.nodes = new Div().setClass('GraphNodes');
        this.lines = new Canvas(2048, 2048).setClass('GraphLines');
        this.bandbox = new Div().setClass('GraphBandBox');
        this.minimap = new Div().setClass('MiniMap');
        this.add(this.input, this.grid, this.lines, this.nodes, this.bandbox, this.minimap);

        // MiniMap
        this.mapCanvas = new Canvas(1024, 1024).setClass('MiniMapCanvas');
        const mapResizers = new Div().addClass('MiniMapResizers');
        this.minimap.add(this.mapCanvas, mapResizers);

        // Draw Grid Image
        this.changeGridType(gridType);

        // Mouse Wheel Zoom
        function graphMouseZoom(event) {
            event.preventDefault();
            const delta = (event.deltaY * 0.002);
            self.stopAnimation();
            self.zoomTo(self.#scale - delta, event.clientX, event.clientY);
		};
        this.onWheel(graphMouseZoom);

        // Window Resize
        function onWindowResize() {
            self.stopAnimation();
            self.zoomTo();
        }
        window.addEventListener('resize', onWindowResize);

        // Key Events
        let grabbing = false, selecting = false;
        let spaceKey = false;
        function graphKeyDown(event) {
            if (self.dom.style.display === 'none') return;
            if (event.code === 'Space') {
                spaceKey = true;
                self.dom.style.cursor = (grabbing) ? 'grabbing' : 'grab';
                self.input.setStyle('z-index', '100');
            }
        }
        function graphKeyUp(event) {
            if (self.dom.style.display === 'none') return;
            if (event.code === 'Space') {
                spaceKey = false;
                self.dom.style.cursor = 'auto';
                self.input.setStyle('z-index', '-1');
            }
        }
        document.addEventListener('keydown', graphKeyDown);
        document.addEventListener('keyup', graphKeyUp);

        // Pointer Events (Translate / Select / RubberBandBox)
        let offset = { x: 0, y: 0 };
        let startPoint = { x: 0, y: 0 };
        function inputPointerDown(event) {
            self.stopAnimation();
            startPoint.x = event.clientX;
            startPoint.y = event.clientY;
            if (event.button === 2 || (event.button === 0 && spaceKey)) {
                grabbing = true;
                self.dom.style.cursor = 'grabbing';
                offset.x = self.#offset.x;
                offset.y = self.#offset.y;
            } else if (event.button === 0) {
                selecting = true;
                const selected = document.querySelectorAll(`.NodeSelected`);
                selected.forEach(el => el.classList.remove('NodeSelected'));
                self.bandbox.setStyle('display', 'block');
                updateRubberBandBox(event.clientX, event.clientY);
            }
            if (grabbing || selecting) {
                self.dom.setPointerCapture(event.pointerId);
                self.dom.ownerDocument.addEventListener('pointermove', inputPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', inputPointerUp);
            }
        }
        function inputPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.releasePointerCapture(event.pointerId);
            if (grabbing) {
                self.dom.style.cursor = (spaceKey) ? 'grab' : 'auto';
                grabbing = false;
            }
            if (selecting) {
                self.bandbox.setStyle('display', 'none');
                selecting = false;
            }
            self.dom.ownerDocument.removeEventListener('pointermove', inputPointerMove);
            self.dom.ownerDocument.removeEventListener('pointerup', inputPointerUp);
        }
        function inputPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (grabbing) {
                const diffX = (event.clientX - startPoint.x) * (1 / self.#scale);
                const diffY = (event.clientY - startPoint.y) * (1 / self.#scale);
                self.#offset.x = (offset.x + diffX);
                self.#offset.y = (offset.y + diffY);
                self.zoomTo();
            } else if (selecting) {
                updateRubberBandBox(event.clientX, event.clientY);
            }
        }
        function updateRubberBandBox(toX, toY) {
            // Set rubber band box size
            const inputRect = self.input.dom.getBoundingClientRect();
            const left = Math.min(startPoint.x, toX) - inputRect.left;
            const top = Math.min(startPoint.y, toY) - inputRect.top;
            const width = Math.abs(startPoint.x - toX);
            const height = Math.abs(startPoint.y - toY);
            self.bandbox.setStyle(
                'left', `${left}px`,
                'top', `${top}px`,
                'width', `${width}px`,
                'height', `${height}px`,
            );
            // Translate to node coordinates
            const rect = self.dom.getBoundingClientRect();
            const centerX = rect.left + ((rect.right - rect.left) / 2);
            const centerY = rect.top + ((rect.bottom - rect.top) / 2);
            const percentX = (centerX - left) / centerX;
            const percentY = (centerY - top) / centerY;
            const xMin = (centerX - (((rect.width / self.#scale) / 2) * percentX)) - self.#offset.x;
            const yMin = (centerY - (((rect.height / self.#scale) / 2) * percentY)) - self.#offset.y;
            const xMax = xMin + (width / self.#scale);
            const yMax = yMin + (height / self.#scale);
            function rubberbandIntersect(node) {
                return xMax >= node.left && xMin <= node.right && yMin <= node.bottom && yMax >= node.top;
            }
            // Select
            const selected = [];
            const nodes = self.getNodes();
            nodes.forEach((node) => { if (rubberbandIntersect(node)) selected.push(node); });
            nodes.forEach((node) => {
                if (selected.includes(node)) node.addClass('NodeSelected');
                else node.removeClass('NodeSelected');
            });
        }
        this.input.onPointerDown(inputPointerDown);

        // Minimap Resizers
        let rect = {};
        function resizerDown() {
            rect = self.minimap.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('Left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.minimap.setStyle('left', `${newLeft}px`);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.minimap.setStyle('top', `${newTop}px`);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('Right')) {
                const newWidth = Math.min(Math.max(MIN_W, rect.width + diffX), window.innerWidth - rect.left);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Bottom')) {
                const newHeight = Math.min(Math.max(MIN_H, rect.height + diffY), window.innerHeight - rect.top);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            self.drawMiniMap();
            self.drawLines();
        }
        Interaction.makeResizeable(this.minimap, mapResizers, [ RESIZERS.LEFT, RESIZERS.TOP ], resizerDown, resizerMove);

        // Minimap Pointer Events
        let translating = false;
        function calculateOffset(clientX, clientY) {
            const mapRect = self.minimap.dom.getBoundingClientRect();
            const nodesRect = self.nodes.dom.getBoundingClientRect();
            const percentX = ((mapRect.width / 2) - (clientX - mapRect.left)) / (mapRect.width / 2);
            const percentY = ((mapRect.height / 2) - (clientY - mapRect.top)) / (mapRect.height / 2);
            const bounds = self.nodeBounds(MAP_BUFFER, self.nodes.children, MIN_MAP_SIZE);
            if (! bounds.isFinite) return;
            // Empty space on top and bottom
            if (self.#drawWidth > self.#drawHeight) {
                const ratio = (self.#drawWidth / self.#drawHeight);
                const x = bounds.center().x - ((bounds.width() / 2) * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * ratio * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            // Empty space on sides
            } else {
                const ratio = (self.#drawHeight / self.#drawWidth);
                const x = bounds.center().x - ((bounds.width() / 2) * ratio * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            }
            self.zoomTo();
        }
        function mapPointerDown(event) {
            self.stopAnimation();
            self.minimap.dom.setPointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grabbing');
            calculateOffset(event.clientX, event.clientY);
            translating = true;
        }
        function mapPointerUp(event) {
            self.minimap.dom.releasePointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grab');
            translating = false
        }
        function mapPointerMove(event) {
            if (! translating) return;
            calculateOffset(event.clientX, event.clientY);
        }
        this.minimap.onPointerDown(mapPointerDown);
        this.minimap.onPointerUp(mapPointerUp);
        this.minimap.onPointerMove(mapPointerMove);

    } // end ctor

    /******************** GET / SET ********************/

    getScale() {
        return this.#scale;
    }

    /******************** NODES ********************/

    addNode(/* node, node, node, ...*/) {
        for (let i = 0, l = arguments.length; i < l; i++) {
            const node = arguments[i];
            if (this.nodes) {
                node.graph = this;
                this.nodes.add(node);
                node.setStyle('zIndex', this.nodes.children.length);
            }
        }
    }

    getNodes() {
        return this.nodes.children;
    }

    removeNode(removeNode) {
        if (! removeNode || ! removeNode.isElement) return;
        const currentZ = removeNode.zIndex;
        const nodes = this.nodes.children;
        const lengthBefore = nodes.length;
        nodes.remove(removeNode);
        const lengthAfter = nodes.length;
        if (lengthBefore === lengthAfter) return;
        // Adjust z stack
        nodes.forEach((node) => {
            if (node.zIndex > currentZ) node.setStyle('zIndex', `${node.zIndex - 1}`);
        });
    }

    nodeBounds(buffer = 0, nodes = this.nodes.children, minSize = undefined) {
        const bounds = {
            x: { min: Infinity, max: -Infinity },
            y: { min: Infinity, max: -Infinity },
            isFinite: false,
        };
        nodes.forEach((node) => {
            bounds.x.min = Math.min(bounds.x.min, node.left);
            bounds.x.max = Math.max(bounds.x.max, node.right);
            bounds.y.min = Math.min(bounds.y.min, node.top);
            bounds.y.max = Math.max(bounds.y.max, node.bottom);
        });
        if ((bounds.x.max > bounds.x.min) && (bounds.y.max > bounds.y.min)) {
            bounds.isFinite = true;
            bounds.center = function() {
                const x = bounds.x.min + ((bounds.x.max - bounds.x.min) / 2);
                const y = bounds.y.min + ((bounds.y.max - bounds.y.min) / 2);
                return { x, y };
            };
            bounds.width = () => { return (bounds.x.max - bounds.x.min); };
            bounds.height = () => { return (bounds.y.max - bounds.y.min); };

            bounds.x.min -= buffer; bounds.x.max += buffer;
            bounds.y.min -= buffer; bounds.y.max += buffer;

            if (minSize) {
                if (bounds.width() < minSize) {
                    const addX = (minSize - bounds.width()) / 2;
                    bounds.x.min -= addX;
                    bounds.x.max += addX;
                }
                if (bounds.height() < minSize) {
                    const addY = (minSize - bounds.height()) / 2;
                    bounds.y.min -= addY;
                    bounds.y.max += addY;
                }
            }
        }
        return bounds;
    }

    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        if (! this.nodes) return;
        const nodes = this.nodes.children;
        // Sort by zIndex, low to high
        nodes.sort((x, y) => x.zIndex - y.zIndex);
        // Traverse
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node && node.isNode) callback(node);
        }
    }

    /******************** DRAW: GRID ********************/

    changeGridType(type = GRAPH_GRID_TYPES.LINES) {
        const SIZE = GRID_SIZE * 4;
        const HALF = SIZE / 2;
        const BORDER = 1;
        const B2 = BORDER * 2;
        this.gridType = type;
        if (type === GRAPH_GRID_TYPES.LINES) {
            const squares = new Canvas(SIZE, SIZE);
            const ctx = squares.ctx;
            ctx.clearRect(0, 0, squares.width, squares.height); /* background: darkness */
            ctx.globalAlpha = 0.45;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(0 + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            ctx.fillRect(HALF + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(HALF + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            ctx.fillRect(0 + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            ctx.globalAlpha = 1;
            ctx.lineWidth = 4;
            ctx.strokeStyle = _color.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).cssString();
            ctx.strokeRect(0, 0, HALF, HALF);
            ctx.strokeRect(HALF, HALF, HALF, HALF);
            ctx.strokeRect(HALF, 0, HALF, HALF);
            ctx.strokeRect(0, HALF, HALF, HALF);
            this.grid.setStyle('background-image', `url('${squares.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        } else if (type === GRAPH_GRID_TYPES.DOTS) {
            const radius = SIZE / 25;
            const dots = new Canvas(SIZE, SIZE);
            const ctx = dots.ctx;
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(0, 0, dots.width, dots.height);
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    ctx.beginPath();
                    ctx.ellipse(HALF * i, HALF * j, radius, radius, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            this.grid.setStyle('background-image', `url('${dots.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        }
    }

    /******************** DRAW: LINES ********************/

    connect() {
        if (this.activeItem && this.connectItem) {
            const active = this.activeItem;
            const connect = this.connectItem;
            if (active.type === NODE_TYPES.OUTPUT) {
                active.connect(connect);
            } else if (connect.type === NODE_TYPES.OUTPUT) {
                connect.connect(active);
            }
            // // DEBUG: Node names
            // console.log(`${active.node.name}:${active.type} to ${connect.node.name}:${connect.type}`);
        }
        this.activeItem = undefined;
        this.connectItem = undefined;
        this.drawLines();
    }

    disconnect(item) {
        this.traverseNodes((node) => {
            node.outputList.children.forEach((output) => {
                const index = output.connections.indexOf(item);
                if (index > -1) {
                    output.connections.splice(index, 1);
                    item.reduceIncoming();
                }
                if (output.connections.length === 0) {
                    output.removeClass('ItemConnected');
                }
            });
        });
    }

    drawLines() {
        if (! this.lines) return;
        if (this.dom.style.display === 'none') return;

        const LINE_THICKNESS = 4;
        const self = this;
        const lines = this.lines;
        const linesRect = lines.dom.getBoundingClientRect();
        const xMin = linesRect.left;
        const xMax = linesRect.right;
        const yMin = linesRect.top;
        const yMax = linesRect.bottom;
        const ctx = lines.ctx;
        ctx.clearRect(0, 0, lines.width, lines.height);

        function scaleX(x) { return (x / linesRect.width) * lines.width; }
        function scaleY(y) { return (y / linesRect.height) * lines.height; }

        function drawLine(x1, y1, x2, y2, color1, color2 = color1) {
            if (! Number.isFinite(x1) || Number.isNaN(x1)) return;
            if (! Number.isFinite(x2) || Number.isNaN(x2)) return;
            if (! Number.isFinite(y1) || Number.isNaN(y1)) return;
            if (! Number.isFinite(y2) || Number.isNaN(y2)) return;
            ctx.strokeStyle = color1;
            if (color2 != null && color1 !== color2) {
                const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                gradient.addColorStop(0, color1);
                gradient.addColorStop(1, color2);
                ctx.strokeStyle = gradient;
            }
            ctx.lineWidth = LINE_THICKNESS * self.#scale;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            switch (self.curveType) {
                case GRAPH_LINE_TYPES.STRAIGHT:
                    ctx.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.ZIGZAG:
                    const xOffset = Math.abs((x2 - x1) * 0.25);
                    ctx.lineTo(x1 + xOffset, y1);
                    ctx.lineTo(x2 - xOffset, y2);
                    ctx.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.CURVE:
                default:
                    const curveOffset = Math.abs((x2 - x1) * 0.5);
                    ctx.bezierCurveTo(x1 + curveOffset, y1, x2 - curveOffset, y2, x2, y2);
                    break;
            }
            ctx.stroke();
        }

        function drawConnection(x1, y1, x2, y2, radius = 10, color1 = '#ffffff', color2 = color1, drawPoints = false) {
            // Check that line will show
            const left = (x1 < x2) ? x1 : x2;
            const right = (x1 < x2) ? x2 : x1;
            const top = (y1 < y2) ? y1 : y2;
            const bottom = (y1 < y2) ? y2 : y1;
            if (! (xMax >= left && xMin <= right && yMin <= bottom && yMax >= top)) return;
            // Scale points
            x1 = scaleX(x1);
            y1 = scaleY(y1);
            x2 = scaleX(x2);
            y2 = scaleY(y2);
            // Draw
            ctx.globalAlpha = 1.0;
            if (drawPoints) {
                const radiusX = scaleX(radius);
                const radiusY = scaleY(radius);
                ctx.fillStyle = color1;
                ctx.beginPath();
                ctx.ellipse(x1, y1, radiusX, radiusY, 0 /* rotation */, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = color2;
                ctx.beginPath();
                ctx.ellipse(x2, y2, radiusX, radiusY, 0 /* rotation */, 0, 2 * Math.PI);
                ctx.fill();
            }
            drawLine(x1, y1, x2, y2, color1, color2);
        }

        // Point Size
        const pointSize = parseFloat(Css.toPx('0.21429em', this.dom)) * this.#scale;

        // Node lines
        this.traverseNodes((node) => {
            if (! node.outputList) return;
            node.outputList.children.forEach((item) => {
                const rectOut = item.point.dom.getBoundingClientRect();
                const x1 = rectOut.left + (rectOut.width / 2);
                const y1 = rectOut.top + (rectOut.height / 2);
                const color1 = item.node.colorString();

                item.connections.forEach((input) => {
                    const rectIn = input.point.dom.getBoundingClientRect();
                    const x2 = rectIn.left + (rectIn.width / 2);
                    const y2 = rectIn.top + (rectIn.height / 2);
                    const color2 = input.node.colorString();
                    drawConnection(x1, y1, x2, y2, pointSize, color1, color2);
                })
            });
        });

        // Active line
        if (this.activeItem) {
            const rect = this.activeItem.point.dom.getBoundingClientRect();
            const x1 = rect.left + (rect.width / 2);
            const y1 = rect.top + (rect.height / 2);
            const x2 = this.activePoint.x;
            const y2 = this.activePoint.y;
            const color = this.activeItem.node.colorString();
            const forward = this.activeItem.type === NODE_TYPES.OUTPUT;
            const drawPoints = ! this.connectItem;
            if (forward) drawConnection(x1, y1, x2, y2, pointSize, color, color, drawPoints);
            else drawConnection(x2, y2, x1, y1, pointSize, color, color, drawPoints);
        }
    }

    /******************** DRAW: MINI MAP ********************/

    drawMiniMap() {
        if (! this.mapCanvas) return;
        if (this.dom.style.display === 'none') return;

        // Bounds
        const bounds = this.nodeBounds(MAP_BUFFER, this.nodes.children, MIN_MAP_SIZE);
        if (! bounds.isFinite) return;

        // Clear
        const map = this.mapCanvas;
        const ctx = map.ctx;
        ctx.clearRect(0, 0, map.width, map.height);

        // Aspect Ratio
        this.#drawWidth = map.width;
        this.#drawHeight = map.height;
        let adjustX = 0, adjustY = 0;
        const ratioX = map.width / bounds.width();
        const ratioY = (map.height / bounds.height()) * this.mapCanvas.ratio();
        if (ratioX > ratioY) {
            this.#drawWidth *= (ratioY / ratioX);
            adjustX = (this.#drawWidth - map.width) / 2;
        } else {
            this.#drawHeight *= (ratioX / ratioY);
            adjustY = (this.#drawHeight - map.height) / 2;
        }

        // Draw View
        const rect = this.dom.getBoundingClientRect();
        const scaled = {};
        const centerX = rect.left + ((rect.right - rect.left) / 2);
        const centerY = rect.top + ((rect.bottom - rect.top) / 2);
        scaled.left = (centerX - ((rect.width / this.#scale) / 2)) - this.#offset.x;
        scaled.top = (centerY - ((rect.height / this.#scale) / 2)) - this.#offset.y;
        scaled.width = rect.width / this.#scale;
        scaled.height = rect.height / this.#scale;
        const x = (this.#drawWidth * ((scaled.left - bounds.x.min) / bounds.width())) - adjustX;
        const y = (this.#drawHeight * ((scaled.top - bounds.y.min) / bounds.height())) - adjustY;
        const w = this.#drawWidth * (scaled.width / bounds.width());
        const h = this.#drawHeight * (scaled.height / bounds.height());
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
        ctx.fillRect(x, y, w, h);
        const widthScale = this.minimap.getWidth() / this.mapCanvas.width;
        const heightScale = this.minimap.getHeight() / this.mapCanvas.height;
        ctx.globalAlpha = 0.75;
        ctx.strokeStyle = _color.set(ColorScheme.color(TRAIT.TEXT)).cssString();
        ctx.lineWidth = 2 / widthScale;
        ctx.beginPath(); ctx.moveTo(x + 0, y); ctx.lineTo(x + 0, y + h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x + w, y); ctx.lineTo(x + w, y + h); ctx.stroke();
        ctx.lineWidth = 2 / heightScale;
        ctx.beginPath(); ctx.moveTo(x, y + 0); ctx.lineTo(x + w, y + 0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x + w, y + h); ctx.stroke();
        ctx.globalAlpha = 0.5;

        // Draw Nodes
        ctx.globalAlpha = 0.75;
        this.traverseNodes((node) => {
            ctx.fillStyle = node.colorString();
            const x = this.#drawWidth * ((node.left - bounds.x.min) / bounds.width());
            const w = this.#drawWidth * (node.width / bounds.width());
            const y = this.#drawHeight * ((node.top - bounds.y.min) / bounds.height());
            const h = this.#drawHeight * (node.height / bounds.height());
            ctx.beginPath();
            ctx.roundRect(x - adjustX, y - adjustY, w, h, 0);
            ctx.fill();
        });
    }

    /******************** TRANSFORM ********************/

    /**
     * Centers on Selected nodes, if there are nodes selected. Otherwise centers on all nodes.
     *
     * @param {*} resetZoom reset scale to 1.0?
     */
    centerView(resetZoom = true, animate = true) {
        const selected = [];
        this.traverseNodes((node) => { if (node.hasClass('NodeSelected')) selected.push(node); });
        const bounds = this.nodeBounds(0, (selected.length > 0) ? selected : this.nodes.children);
        this.focusView(bounds.center().x, bounds.center().y, resetZoom, animate);
    }

    focusView(targetX, targetY, resetZoom = false, animate = true) {
        if (targetX == null || targetY == null) return;
        const rect = this.nodes.dom.getBoundingClientRect();
        this.#targetX = ((rect.width / 2) / this.#scale) - targetX;
        this.#targetY = ((rect.height / 2) / this.#scale) - targetY;
        this.#targetZoom = ((resetZoom) ? 1.0 : this.#scale) * 1000;
        if (animate) {
            const self = this;
            this.#animateStart = performance.now();
            this.#animateLast = performance.now();
            this.#startZoom = this.#scale * 1000;
            this.#animateTimer = setInterval(() => {
                this.#animating = true;
                function damp(x, y, lambda, dt) { return lerp(x, y, 1 - Math.exp(- lambda * dt)); }
                function lerp(x, y, t) { return (1 - t) * x + t * y; }
                const elapsed = (performance.now() - self.#animateStart) / 1000;
                const dt = (performance.now() - self.#animateLast) / 1000;
                self.#offset.x = damp(self.#offset.x, self.#targetX, 15, dt);
                self.#offset.y = damp(self.#offset.y, self.#targetY, 15, dt);
                self.#startZoom = damp(self.#startZoom, self.#targetZoom, 15 * (elapsed + 0.5), dt);
                const diffX = Math.abs(self.#offset.x - self.#targetX);
                const diffY = Math.abs(self.#offset.y - self.#targetY);
                const diffZ = Math.abs(self.#startZoom - self.#targetZoom);
                if (diffX < 0.5 && diffY < 0.5 && diffZ < 0.01) self.stopAnimation();
                if (elapsed > 2.5) self.stopAnimation();
                self.zoomTo(self.#startZoom / 1000);
                self.#animateLast = performance.now();
            }, ANIMATE_INTERVAL);
        } else {
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }

    #animating = false;
    #animateTimer = undefined;
    #animateStart = 0;
    #animateLast = 0;
    #targetX = 0;
    #targetY = 0;
    #startZoom = 0;
    #targetZoom = 0;

    stopAnimation() {
        clearInterval(this.#animateTimer);
        if (this.#animating) {
            this.#animating = false;
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }

    zoomTo(zoom, clientX, clientY) {
        if (zoom === undefined) zoom = this.#scale;
        zoom = Math.round(Math.min(Math.max(zoom, ZOOM_MIN), ZOOM_MAX) * 100) / 100;
        const nodes = this.nodes;
        const grid = this.grid;

        // Scroll To
        if (clientX != undefined && clientY != undefined) {
            const before = nodes.dom.getBoundingClientRect();
            nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
            const after = nodes.dom.getBoundingClientRect();
            clientX -= before.left;
            clientY -= before.top;
            const shiftW = after.left - before.left;
            const shiftH = after.top - before.top;
            const dw = clientX - ((clientX / this.#scale) * zoom);
            const dh = clientY - ((clientY / this.#scale) * zoom);
            this.#offset.x -= ((shiftW - dw) / zoom);
            this.#offset.y -= ((shiftH - dh) / zoom);
        }

        // Set Scale
        nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
        this.#scale = zoom;
        this.#previous.x = this.#offset.x;
        this.#previous.y = this.#offset.y;

        // Align Grid
        const rect = this.dom.getBoundingClientRect();
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        const ox = this.#offset.x * zoom;
        const oy = this.#offset.y * zoom;
        grid.setStyle('background-position', `left ${diffX + ox}px top ${diffY + oy}px`);
        grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        grid.setStyle('opacity', (this.#scale < 1) ? (this.#scale * this.#scale) : '1');

        // Hide Resizers
        const resizeables = document.querySelectorAll(`.Node`);
        resizeables.forEach(el => {
            if (zoom < 0.5) el.classList.add('TooSmall');
            else el.classList.remove('TooSmall');
        });

        // Redraw
        this.drawMiniMap();
        this.drawLines();
    }

}

export { Graph };
