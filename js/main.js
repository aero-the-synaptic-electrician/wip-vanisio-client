// Client Version: bf31
// Generated at: 3rd February 2021

! function (e) {
	var t, s = (t = true, function (e, s) {
		var a = t ? function () {
			if (s) {
				var t = s.apply(e, arguments);
				return s = null, t
			}
		} : function () {};
		return t = false, a
	});

	function a(t) {
		var a = s(this, function () {
			var e = function () {
				return !e.constructor('return /" + this + "/')().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}").test(a)
			};
			return e()
		});
		a();
		for (var i, l, c = t[0], d = t[1], u = t[2], p = 0, m = []; p < c.length; p++) l = c[p], Object.prototype.hasOwnProperty.call(o, l) && o[l] && m.push(o[l][0]), o[l] = 0;
		for (i in d) Object.prototype.hasOwnProperty.call(d, i) && (e[i] = d[i]);
		for (h && h(t); m.length;) m.shift()();
		return r.push.apply(r, u || []), n()
	}

	function n() {
		for (var e, t = 0; t < r.length; t++) {
			for (var s = r[t], a = true, n = 1; n < s.length; n++) {
				var i = s[n];
				0 !== o[i] && (a = false)
			}
			a && (r.splice(t--, 1), e = l(l.s = s[0]))
		}
		return e
	}
	var i = {},
		o = {
			0: 0
		},
		r = [];

	function l(t) {
		if (i[t]) return i[t].exports;
		var s = i[t] = {
			i: t,
			l: false,
			exports: {}
		};
		return e[t].call(s.exports, s, s.exports, l), s.l = true, s.exports
	}
	l.m = e, l.c = i, l.d = function (e, t, s) {
		!l.o(e, t) && Object.defineProperty(e, t, {
			enumerable: true,
			get: s
		})
	}, l.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: true
		})
	}, l.t = function (e, t) {
		if (1 & t && (e = l(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var s = Object.create(null);
		if (l.r(s), Object.defineProperty(s, "default", {
				enumerable: true,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var a in e) l.d(s, a, function (t) {
				return e[t]
			}.bind(null, a));
		return s
	}, l.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return l.d(t, "a", t), t
	}, l.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, l.p = "";
	var c = window.webpackJsonp = window.webpackJsonp || [],
		d = c.push.bind(c);
	c.push = a, c = c.slice();
	for (var u = 0; u < c.length; u++) a(c[u]);
	var h = d;
	r.push([115-1, 1]), n()
}([, function (e, t, s) {
	var a = s(118),
		n = s(4),
		i = s(63),
		o = s(119),
		r = s(122),
		l = s(12),
		c = s(124),
		d = s(23),
		u = s(24),
		h = s(5),
		p = s(126),
		m = s(76),
		v = s(128),
		{
			lerp: g,
			hideCaptchaBadge: f
		} = s(8),
		y = {};

	function w(e) {
		var t = document.getElementById("nickname").value,
			s = document.getElementById("skinurl").value,
			a = document.getElementById("teamtag").value;
		e.utf8(t), e.utf8(s), e.utf8(a)
	}
	y.clientVersion = 11, y.currentWsId = null, y.events = new d, y.settings = n, y.renderer = i, y.usingWebGL = i.type === PIXI.RENDERER_TYPE.WEBGL, y.skinLoader = new p, console.log(y.usingWebGL ? "WebGL Renderer" : "Canvas Renderer"), l.virus.loadVirusFromUrl(n.virusImageUrl), y.state = {
		connectionUrl: null,
		selectedServer: null,
		spectators: 0,
		lastDeathTime: 0,
		isAlive: false,
		playButton: false,
		deathScreen: false,
		isAutoRespawning: false
	}, m.loadAdinplay(m.loadMenuAds), document.body.oncontextmenu = function (e) {
		return e.target && "email" === e.target.id
	}, y.usingWebGL && n.showBackgroundImage && n.backgroundImageUrl && PIXI.Texture.from(n.backgroundImageUrl), y.start = function (e) {
		if (!(e.protocol && e.instanceSeed && e.playerId && e.border)) throw "Lacking mandatory data";
		y.running = true, y.protocol = e.protocol, y.modeId = e.gameModeId || 0, y.instanceSeed = e.instanceSeed, y.pingstamp = 0, y.timestamp = 0, y.deltaTime = 0, y.playerId = e.playerId, y.multiboxPid = null, y.activePid = y.playerId, y.tagId = null, y.spectating = false, y.state.spectators = 0, y.state.isAlive = false, y.center = {
			x: 0,
			y: 0
		}, y.score = 0, y.cellCount = 0, y.splitCount = 0, y.moveWaitUntil = 0, y.replaying = !!e.replayUpdates, y.replayUpdates = e.replayUpdates, y.replayUpdateIndex = 0, y.replay.updateHistory.length = 0, y.nodes = {}, y.nodesOwn = {}, y.nodelist = [], y.removedNodes = [], y.rawMouse = {}, y.mouse = {}, y.stopMovePackets = false, y.moveToCenterOfCells = false, y.freezeMouse = false, y.border = e.border, y.setupZoom(y.border), y.massTextPool = [], y.crownPool = [];
		var t = PIXI.utils.isWebGLSupported() && n.useWebGL && n.showBackgroundImage;
		y.scene = new o(y, y.border, t), y.container = y.scene.container, y.cameraScale = y.zoom, y.camera = new a(y.container), y.camera.scale.set(y.cameraScale), y.camera.position.set(0), c.prepareMode(y, y.modeId), y.playerManager = new r(y), y.ticker = new PIXI.Ticker, y.ticker.add(y.tick), y.state.selectedServer && y.state.connectionUrl !== y.state.selectedServer.url && (y.state.selectedServer = null), y.replaying ? (y.moveInterval = setInterval(y.replayUpdate, 40), y.events.$emit("show-replay-controls", y.replayUpdates.length), y.events.$emit("minimap-stats-visible", false)) : (n.minimapEnabled && y.events.$emit("minimap-show"), n.showChat && y.events.$emit("chat-visible", true), y.events.$emit("leaderboard-show"), y.events.$emit("stats-visible", true), y.moveInterval = setInterval(() => {
			y.stopMovePackets || (y.moveToCenterOfCells ? y.sendUint8(9) : y.actions.move())
		}, 40), y.setupStats(), y.state.playButton = true, y.state.lastDeathTime = Date.now()), y.ticker.start(), y.eventListeners(true)
	}, y.setupZoom = function (e) {
		y.zoom = .3, e.width === e.height ? y.zoomScale = 2e4 / e.width : y.zoomScale = 1, y.zoomMin = .03 * y.zoomScale
	}, y.nextReplayPacket = function () {
		var e = y.replayUpdateIndex,
			t = y.replayUpdates[e];
		y.parseMessage(t), y.replayUpdateIndex++
	}, y.replayMoveTo = function (e) {
		var t = y.replayUpdates.length - 1,
			s = Math.floor(e * t);
		y.replayUpdateIndex = s, y.nextReplayPacket();
		for (var a = y.timestamp, n = [], i = 0; i < y.nodelist.length; i++) {
			var o = y.nodelist[i];
			o.updateTime !== a && n.push(o)
		}
		for (var r = 0; r < n.length; r++) n[r].destroy();
		return s
	}, y.replayUpdate = function () {
		y.replayUpdateIndex >= y.replayUpdates.length && (y.clearNodes(), y.replayUpdateIndex = 0), y.events.$emit("replay-index-change", y.replayUpdateIndex), y.nextReplayPacket()
	}, y.updateStats = function (e) {
		var t = y.score,
			s = y.highscore,
			a = Math.round(y.avgFps.getAndReset());
		y.events.$emit("stats-changed", {
			ping: e,
			fps: a,
			mass: t,
			score: s
		});
		var n = y.playerManager.playerCount,
			i = y.state.spectators;
		y.events.$emit("minimap-stats-changed", {
			playerCount: n,
			spectators: i
		})
	}, y.setupStats = function () {
		y.avgFps = new v, y.ticker.add(() => {
			y.avgFps.add(y.ticker.FPS)
		}), y.everySecond = setInterval(() => {
			window.app.showMenu || window.app.showDeathScreen ? y.updateStats(null) : y.ping()
		}, 1e3)
	}, y.clearNodes = function () {
		for (; y.nodelist.length;) y.nodelist[0].destroy();
		for (; y.removedNodes.length;) y.removedNodes.pop().destroySprite()
	}, y.destroySpritePool = function (e, t) {
		for (; e.length;) e.pop().destroy(t)
	}, y.stop = function () {
		y.running = false, y.state.isAlive = false, y.state.spectators = 0, y.state.playButton = false, y.eventListeners(false), y.state.connectionUrl = null, y.ticker.stop(), clearInterval(y.moveInterval), clearInterval(y.everySecond), y.renderer.clear(), y.playerManager.destroy(), y.skinLoader.clearCallbacks(), y.events.$emit("minimap-stats-visible", true), y.events.$emit("stats-visible", false), y.events.$emit("chat-visible", false), y.events.$emit("leaderboard-hide"), y.events.$emit("minimap-hide"), y.events.$emit("minimap-destroy"), y.events.$emit("show-replay-controls", false), y.events.$emit("cells-changed", 0), y.events.$emit("reset-cautions"), y.events.$emit("game-stopped"), y.clearNodes(), y.scene && (y.scene.destroyBackgroundImage(false), y.scene.uninstallMassTextFont()), y.container.destroy(true), l.cells.destroyCache(), y.destroySpritePool(y.massTextPool, true), y.destroySpritePool(y.crownPool)
	}, y.showMenu = function (e, t) {
		if (window.app.showDeathScreen) return false;
		if (window.app.showMenu = e, y.actions.stopMovement(e), e) y.events.$emit("reload-serverlist-if-minute-passed"), t && m.loadMenuAds();
		else {
			var s = document.activeElement;
			s && "chatbox-input" === s.id || y.renderer.view.focus(), y.stopMovePackets = false, f()
		}
		return e
	}, y.toggleMenu = function () {
		var e = !window.app.showMenu;
		y.showMenu(e, true)
	}, y.triggerAutoRespawn = function () {
		y.state.isAlive ? y.state.deathScreen = false : (clearTimeout(y.deathTimeout), delete y.deathTimeout, y.state.isAutoRespawning ? (y.state.deathScreen = false, y.joinGame()) : (y.showMenu(false), y.showDeathScreen(true)), y.state.isAutoRespawning = false)
	}, y.showDeathScreen = function (e) {
		window.app.showDeathScreen = e
	}, y.setDeathStats = function (e) {
		window.app.deathStats = e
	}, y.tick = function (e) {
		y.timestamp = Date.now(), y.deltaTime = e;
		for (var t = y.removedNodes.length; t--;) {
			var s = y.removedNodes[t];
			s.update() && (s.destroySprite(), y.removedNodes.splice(t, 1))
		}
		for (var a = y.playerId, i = y.multiboxPid, o = y.nodelist, r = 0, l = 0, c = 0, d = 0, u = 0, h = 0; h < o.length; h++) {
			var p = o[h];
			if (p.update(), p.pid === a || p.pid === i) {
				var m = p.getMass();
				r += p.x * m, l += p.y * m, c += m, d += p.nSize, p.pid === y.activePid && u++
			}
		}
		if (y.cellCount !== u && (y.cellCount = u, y.events.$emit("cells-changed", u)), y.scene.sort(), y.spectating) r = y.center.x, l = y.center.y, y.score = 0, delete y.highscore;
		else {
			if (!c) return y.renderer.render(y.container), void(y.score = 0);
			r /= c, l /= c, y.score = c, y.highscore || (y.highscore = 0), y.highscore = Math.max(c, y.highscore)
		}
		var v = n.cameraMoveSmoothing * y.deltaTime;
		if (y.camera.position.x = g(y.camera.position.x, r, v), y.camera.position.y = g(y.camera.position.y, l, v), y.timestamp >= y.moveWaitUntil && (y.updateMouse(), y.splitCount = 0), n.autoZoom) {
			var f = Math.min(64 / d, 1);
			y.cameraScale = y.zoom * Math.pow(f, .27)
		} else y.cameraScale = y.zoom;
		var w = g(y.camera.scale.x, y.cameraScale, n.cameraZoomSmoothing * y.deltaTime);
		y.camera.scale.set(w), y.renderer.render(y.container)
	}, y.updateMouse = function (e = false) {
		if (!y.mouseFrozen || e) {
			var t = y.rawMouse.x,
				s = y.rawMouse.y,
				a = 1 / y.camera.scale.x,
				n = 1 / y.camera.scale.y,
				i = y.container;
			y.mouse.x = i.pivot.x + (t - window.innerWidth / 2) * a, y.mouse.y = i.pivot.y + (s - window.innerHeight / 2) * n
		}
	}, y.joinGame = function () {
		var e = new u;
		e.uint8(1), w(e);
		var t = e.write();
		y.send(t), y.spectating = false
	}, y.sendJoinData = function (e) {
		var t = new u;
		t.uint8(5), t.uint8(y.clientVersion), t.uint8Array(e), w(t);
		var s = localStorage.vanisToken;
		if (s) {
			/^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i.test(y.ws.url) && t.utf8(s)
		}
		var a = t.write();
		y.send(a);
		y.events.$emit("players_menu", false), y.events.$emit("account_menu", false), y.events.$emit("chatbox_menu", false), y.events.$emit("options_menu", false), y.events.$emit("replays_menu", false)
	}, y.seededRandom = function (e) {
		var t = 1e4 + y.instanceSeed,
			s = Math.sin(e) * t;
		return s - Math.floor(s)
	}, y.getThumbnail = function () {
		var e = y.container,
			t = new PIXI.Container;
		t.pivot.x = e.position.x, t.pivot.y = e.position.y, t.position.x = 120, t.position.y = 67.5, t.scale.set(.25), t.addChild(e);
		var s = PIXI.RenderTexture.create(240, 135);
		y.renderer.render(t, s), t.removeChild(e);
		var a = y.renderer.extract.canvas(s),
			i = document.createElement("canvas");
		i.width = 240, i.height = 135;
		var o = i.getContext("2d");
		o.beginPath(), o.rect(0, 0, 240, 135), o.fillStyle = n.backgroundColor, o.fill(), o.drawImage(a, 0, 0, 240, 135);
		var r = i.toDataURL();
		return s.destroy(true), r
	}, y.sendChatMessage = function (e) {
		for (var t = unescape(encodeURIComponent(e)), s = [99], a = 0; a < t.length; a++) s.push(t.charCodeAt(a));
		var n = new Uint8Array(s).buffer;
		y.send(n)
	}, y.addServerMessage = function (e) {
		y.events.$emit("chat-message", {
			text: e,
			textColor: "#828282"
		})
	}, y.setTagId = function (e) {
		return e || (e = null), e !== y.tagId && (y.tagId = e, true)
	}, y.levelUp = function (e) {
		h.toast.fire({
			title: "You have reached level " + e + "!",
			background: "#b37211",
			timer: 3e3
		})
	}, y.getShortMass = function (e) {
		return e < 1e3 ? e.toString() : (Math.round(.001 * e * 10) / 10).toFixed(1) + "k"
	}, y.shouldAutoRespawn = function () {
		return !!n.autoRespawn && (!window.app.showMenu && !(Date.now() - y.state.lastDeathTime > 6e4))
	}, e.exports = y
}, , , function (e, t) {
	var s = {
		useWebGL: true,
		gameResolution: 1,
		smallTextThreshold: 40,
		autoZoom: false,
		autoRespawn: false,
		mouseFreezeSoft: true,
		drawDelay: 120,
		cameraMoveSmoothing: .18,
		cameraZoomSmoothing: .14,
		cameraZoomSpeed: 10,
		replayDuration: 8,
		showNames: 2,
		showMass: 2,
		showSkins: 1,
		showOwnName: true,
		showOwnMass: true,
		showOwnSkin: true,
		showCrown: true,
		foodVisible: true,
		eatAnimation: true,
		showHud: true,
		showLeaderboard: true,
		showServerName: false,
		showChat: true,
		minimapEnabled: true,
		minimapLocations: true,
		showFPS: true,
		showPing: true,
		showCellCount: true,
		showPlayerScore: false,
		showPlayerMass: true,
		showClock: false,
		showSessionTime: false,
		showPlayerCount: false,
		showSpectators: false,
		showBlockedMessageCount: true,
		filterChatMessages: true,
		backgroundColor: "101010",
		borderColor: "000000",
		foodColor: "ffffff",
		ejectedColor: "ffa500",
		cellNameOutlineColor: "000000",
		cursorImageUrl: null,
		backgroundImageUrl: "img/background.png",
		virusImageUrl: "img/virus.png",
		cellMassColor: "ffffff",
		cellMassOutlineColor: "000000",
		cellNameFont: "Hind Madurai",
		cellNameWeight: 1,
		cellNameOutline: 2,
		cellNameSmoothOutline: true,
		cellLongNameThreshold: 750,
		cellMassFont: "Ubuntu",
		cellMassWeight: 2,
		cellMassOutline: 2,
		cellMassTextSize: 0,
		cellMassSmoothOutline: true,
		shortMass: true,
		showBackgroundImage: true,
		backgroundImageRepeat: true,
		backgroundDefaultIfUnequal: true,
		backgroundImageOpacity: .6,
		useFoodColor: false,
		namesEnabled: true,
		skinsEnabled: true,
		massEnabled: true,
		showLocations: false,
		cellBorderSize: 1,
		autoHideReplayControls: false,
		minimapSize: 220,
		minimapFPS: 30,
		minimapSmoothing: .08
	};

	function a(e) {
		switch (e) {
			case 2:
				return "bold";
			case 0:
				return "thin";
			default:
				return "normal"
		}
	}

	function n(e, t) {
		var s;
		switch (e) {
			case 3:
				s = t / 5;
				break;
			case 1:
				s = t / 20;
				break;
			default:
				s = t / 10
		}
		return Math.ceil(s)
	}
	e.exports = window.settings = new class {
		constructor() {
			this.getInternalSettings(), this.userDefinedSettings = this.loadUserDefinedSettings(), Object.assign(this, s, this.userDefinedSettings), this.set("skinsEnabled", true), this.set("namesEnabled", true), this.set("massEnabled", true), this.compileNameFontStyle(), this.compileMassFontStyle()
		}
		getInternalSettings() {
			this.cellSize = 512, this.cellNamePadding = 350, this.cellRenderSize = this.cellSize + this.cellNamePadding, this.cellScaleRatio = this.cellRenderSize / this.cellSize
		}
		compileNameFontStyle() {
			var e = {
				fontFamily: this.cellNameFont,
				fontSize: 80,
				fontWeight: a(this.cellNameWeight)
			};
			return this.cellNameOutline && (e.stroke = PIXI.utils.string2hex(this.cellNameOutlineColor), e.strokeThickness = n(this.cellNameOutline, e.fontSize), e.lineJoin = this.cellNameSmoothOutline ? "round" : "miter"), this.nameTextStyle = e
		}
		compileMassFontStyle() {
			var e = {
				fontFamily: this.cellMassFont,
				fontSize: 56 + 20 * this.cellMassTextSize,
				fontWeight: a(this.cellMassWeight),
				lineJoin: "round",
				fill: PIXI.utils.string2hex(this.cellMassColor)
			};
			return this.cellMassOutline && (e.stroke = PIXI.utils.string2hex(this.cellMassOutlineColor), e.strokeThickness = n(this.cellMassOutline, e.fontSize), e.lineJoin = this.cellMassSmoothOutline ? "round" : "miter"), this.massTextStyle = e
		}
		loadUserDefinedSettings() {
			if (localStorage.settings) try {
				return JSON.parse(localStorage.settings)
			} catch (e) {
				console.error("loadUserDefinedSettings:", e.message)
			}
			return {}
		}
		getDefault(e) {
			return s[e]
		}
		set(e, t) {
			return this[e] !== t && (this[e] = t, this.userDefinedSettings[e] = t, localStorage.settings = JSON.stringify(this.userDefinedSettings), true)
		}
	}
}, function (e, t, s) {
	var a = s(267).default,
		n = a.mixin({
			toast: true,
			position: "top",
			showConfirmButton: false,
			showCloseButton: true
		});
	window.Swal = a, e.exports = {
		toast: n,
		alert: function (e) {
			a.fire({
				text: e,
				confirmButtonText: "OK"
			})
		},
		confirm: function (e, t) {
			var s = {
				text: e,
				showCancelButton: true,
				confirmButtonText: "Continue"
			};
			a.fire(s).then(e => {
				e.value && t()
			})
		},
		instance: a
	}
}, , , function (e, t) {
	var s = false;
	e.exports = {
		lerp: function (e, t, s) {
			return (1 - s) * e + s * t
		},
		clampNumber: function (e, t, s) {
			return Math.min(Math.max(e, t), s)
		},
		createBuffer: function (e) {
			return new DataView(new ArrayBuffer(e))
		},
		getTimeString: function (e, t, s) {
			e instanceof Date && (e = e.getTime());
			var a = t ? 1 : 1e3,
				n = 60 * a,
				i = 60 * n;
			if (e < a) return "1 second";
			for (var o = [24 * i, i, n, a], r = ["day", "hour", "minute", "second"], l = false, c = [], d = 0; d < o.length; d++) {
				var u = o[d],
					h = Math.floor(e / u);
				if (h) {
					var p = r[d],
						m = h > 1 ? "s" : "";
					c.push(h + " " + p + m), e %= u
				}
				if (l) break;
				h && !s && (l = true)
			}
			return c.join(", ")
		},
		htmlEncode: function (e) {
			return e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
		},
		getTimestamp: function () {
			var e = new Date,
				t = e.getMonth() + 1,
				s = e.getDate();
			return [e.getFullYear(), (t > 9 ? "" : "0") + t, (s > 9 ? "" : "0") + s].join("") + "-" + [("0" + e.getHours()).slice(-2), ("0" + e.getMinutes()).slice(-2), ("0" + e.getSeconds()).slice(-2)].join("")
		},
		loadImage: function (e) {
			return fetch(e, {
				mode: "cors"
			}).then(e => e.blob()).then(e => createImageBitmap(e))
		},
		hideCaptchaBadge: function () {
			!s && (document.body.classList.add("hide-captcha-badge"), s = true)
		},
		destroyPixiPlugins: function (e) {
			["interaction", "accessibility"].forEach(t => {
				var s = e.plugins[t];
				s && (s.destroy(), delete e.plugins[t])
			})
		}
	}
}, , , , function (e, t, s) {
	var a = s(120),
		n = s(121);
	e.exports = {
		cells: a,
		virus: n
	}
}, , function (e, t, s) {
	var a = s(1),
		n = s(12);
	s(4);
	e.exports = class {
		constructor(e) {
			this.game = a, this.id = e.id || 0, this.oSize = this.size = e.size, this.updateTime = 0, this.newPositionScale = 1, this.removed = false, this.texture = e.texture || n.cells.getTexture(0), this.sprite = new PIXI.Sprite(this.texture), this.sprite.anchor.set(.5), this.sprite.gameData = this, this.x = this.ox = this.sprite.position.x = e.x, this.y = this.oy = this.sprite.position.y = e.y
		}
		getMass() {
			var e = this.nSize;
			return Math.floor(e * e / 100)
		}
		update() {
			var e = this.game.settings.drawDelay,
				t = (this.game.timestamp - this.updateTime) / e;
			if (t = 0 > t ? 0 : 1 < t ? 1 : t, this.removed && (t >= 1 || this.texture.clearedFromCache)) return true;
			this.size = t * (this.nSize - this.oSize) + this.oSize, this.sprite.width = this.sprite.height = 2 * this.size, this.sprite.position.x = this.x = t * this.newPositionScale * (this.nx - this.ox) + this.ox, this.sprite.position.y = this.y = t * this.newPositionScale * (this.ny - this.oy) + this.oy, this.onUpdate && this.onUpdate()
		}
		destroy(e) {
			if (this.removed) console.warn("Cell already removed!");
			else {
				this.onDestroy && this.onDestroy();
				var t = this.game.nodelist,
					s = t.indexOf(this);
				s >= 0 && t.splice(s, 1), delete this.game.nodes[this.id], this.removed = true, e ? this.game.removedNodes.push(this) : this.destroySprite()
			}
		}
		destroySprite() {
			this.sprite ? (this.sprite.destroy(), this.sprite = null) : console.warn("Sprite already destroyed!")
		}
	}
}, , , , function (e, t, s) {
	var a = s(5);

	function n() {
		a.instance.fire({
			type: "warning",
			title: "Browser Unsupported",
			html: "Skins might not work properly in this browser.<br>Please consider using Chrome.",
			allowOutsideClick: false
		})
	}

	function i(e) {
		for (var t = "", s = 0; s < e.length; s++) {
			var a = e.charCodeAt(s) - 2;
			t += String.fromCharCode(a)
		}
		return t
	}
	var o = ["pkiigt", "p3iigt", "pkii5t", "pkiic", "p3iic", "p3ii6", "pkii", "p3ii", "pki", "p3i", "hciiqv", "h6iiqv", "hcii2v", "hci", "cpcn", "cuujqng", "ewpv", "rwuu{", "xcikpc", "xci3pc", "eqem", "e2em", "yjqtg", "yj2tg", "unwv", "dkvej", "d3vej", "rqtp", "r2tp", "tcrg", "t6rg", "jkvngt", "j3vngt", "jkvn5t", "j3vn5t", "pc|k", "p6|k", "tgvctf", "ejkpm"],
		r = o.map(i),
		l = o.map(i).sort((e, t) => t.length - e.length).map(e => ({
			regex: new RegExp(e.split("").join("s*"), "gi"),
			replacement: new Array(e.length).fill("*").join("")
		}));
	e.exports = {
		noop: function () {},
		checkBadWords: function (e) {
			return e = e.toLowerCase(), r.some(t => e.includes(t))
		},
		replaceBadWordsChat: function (e) {
			for (var t of l) e = e.replace(t.regex, t.replacement);
			return e
		},
		notifyUnsupportedBrowser: async function () {
			window.safari || /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? a.instance.fire({
				type: "warning",
				title: "Safari browser is not supported :(",
				html: "Please consider using Google Chrome.",
				allowOutsideClick: false,
				showCloseButton: false,
				showCancelButton: false,
				showConfirmButton: false
			}) : localStorage.skipUnsupportedAlert || (localStorage.skipUnsupportedAlert = true, navigator.userAgent.toLowerCase().includes("edge") ? n() : !await new Promise(e => {
				var t = new Image;
				t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", t.onload = t.onerror = (() => {
					e(2 === t.height)
				})
			}) && n())
		},
		isFirstVisit: !localStorage.visitedBefore && (localStorage.visitedBefore = true, true)
	}
}, , , , , , function (e, t) {
	function s() {
		this.data = []
	}
	e.exports = s, s.prototype.write = function () {
		return new Uint8Array(this.data)
	}, s.prototype.uint8 = function (e) {
		this.data.push(e)
	}, s.prototype.uint8Array = function (e) {
		for (var t = 0; t < e.length; t++) this.data.push(e[t])
	}, s.prototype.utf8 = function (e) {
		e = unescape(encodeURIComponent(e));
		for (var t = 0; t < e.length; t++) this.data.push(e.charCodeAt(t));
		this.data.push(0)
	}
}, , , , function (e, t, s) {
	var a = s(2),
		n = s(167);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	"use strict";
	var a = s(30),
		n = s.n(a);
	t.default = n.a
}, function (e, t) {
	e.exports = {
		data: () => ({})
	}
}, function (e, t, s) {
	var a = s(2),
		n = s(169);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(171);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(173);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(175);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(177);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(179);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	"use strict";
	var a = s(38),
		n = s.n(a);
	t.default = n.a
}, function (e, t, s) {
	var a = s(86),
		n = s(1),
		i = s(5),
		o = n.replay.database;
	e.exports = {
		props: ["replay"],
		created: function () {},
		methods: {
			play(e) {
				n.isConnected() ? i.confirm("You will be disconnected from current game before replay", () => {
					this._play(e)
				}) : this._play(e)
			},
			_play(e) {
				try {
					n.replay.play(e)
				} catch (e) {
					i.alert("Replay data is corrupted!")
				}
			},
			downloadReplay(e) {
				i.instance.fire({
					input: "text",
					inputValue: e.name,
					showCancelButton: true,
					confirmButtonText: "Download",
					html: "This file is not a video file and only Vanis.io website can play it.<br>File consists of player positions and other game related data."
				}).then(t => {
					var s = t.value;
					if (s) {
						var n = new Blob([e.data], {
							type: "text/plain;charset=utf-8"
						});
						a.saveAs(n, s + ".vanis")
					}
				})
			},
			deleteReplay(e) {
				i.confirm("Are you sure that you want to delete this replay?", () => {
					o.removeItem(e, () => {
						n.events.$emit("replay-removed")
					})
				})
			}
		}
	}
}, function (e, t, s) {
	var a = s(2),
		n = s(219);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(221);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(223);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(225);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(227);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(231);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(233);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(235);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(237);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(239);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(241);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(243);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(245);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(247);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(249);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	"use strict";
	var a = s(55),
		n = s.n(a);
	t.default = n.a
}, function (e, t, s) {
	var a = s(1),
		n = s(8),
		i = s(4),
		o = i.minimapSize,
		r = i.minimapFPS,
		l = i.minimapSmoothing,
		c = new PIXI.Container,
		d = {};

	function u() {
		return (new Date).toLocaleTimeString()
	}

	function h(e) {
		const t = Math.floor(e / 60),
			s = Math.floor(t / 60);
		return t < 1 ? "<1min" : s < 1 ? t + "min" : t % 60 == 0 ? s + "hr" : s + "hr " + t % 60 + "min"
	}
	e.exports = {
		data: () => ({
			showMinimap: false,
			showMinimapStats: true,
			showLocations: i.minimapLocations,
			interval: null,
			minimapStatsBottom: 10,
			showClock: i.showClock,
			showSessionTime: i.showSessionTime,
			showSpectators: i.showSpectators,
			showPlayerCount: i.showPlayerCount,
			systemTime: u(),
			sessionTime: h(0),
			spectators: 0,
			playerCount: 0,
			startTime: null,
			everySecond: null,
			gameState: a.state
		}),
		computed: {
			playerCountDisplayed() {
				if (this.gameState.selectedServer) {
					var e = this.gameState.selectedServer.maxPlayers;
					return Math.min(this.playerCount, e) + " / " + e + " players"
				}
				return this.playerCount + " player" + (1 === this.playerCount ? "" : "s")
			}
		},
		methods: {
			initRenderer(e) {
				var t = PIXI.autoDetectRenderer({
					resolution: 1,
					view: e,
					width: o,
					height: o,
					forceCanvas: !i.useWebGL,
					antialias: false,
					powerPreference: "high-performance",
					transparent: true
				});
				n.destroyPixiPlugins(t), t.clear(), this.renderer = t
			},
			onMinimapShow() {
				this.interval || (this.showMinimap = true, this.minimapStatsBottom = o + 10, a.events.$on("minimap-positions", this.updatePositions), this.interval = setInterval(this.render, 1e3 / r))
			},
			onMinimapHide() {
				this.interval && (this.showMinimap = false, this.minimapStatsBottom = 10, a.events.$off("minimap-positions", this.updatePositions), clearInterval(this.interval), this.interval = null, this.spectators = 0, this.playerCount = 0)
			},
			destroyMinimap() {
				c.destroy(true), c = new PIXI.Container, this.renderer.clear()
			},
			createNode(e, t, s, a) {
				var n = d[e];
				n && n.destroy(true);
				s || (s = 16777215), a || (a = 16777215);
				var i, o, r, l, c, u = new PIXI.Container;
				u.newPosition = {}, u.addChild((l = a, (c = new PIXI.Graphics).beginFill(l), c.drawCircle(0, 0, 5), c.endFill(), c)), t && u.addChild((i = t, o = s, (r = new PIXI.Text(i, {
					strokeThickness: 4,
					lineJoin: "round",
					fontFamily: "Nunito",
					fill: o,
					fontSize: 12
				})).anchor.set(.5), r.pivot.y = 15, r)), d[e] = u
			},
			destroyNode(e) {
				var t = d[e];
				t ? (t.destroy(true), delete d[e]) : console.log("Minimap: trying to destroy node which doesnt exist", e)
			},
			updatePositions(e) {
				c.removeChildren();
				for (var t = 0; t < e.length; t++) {
					var s = e[t],
						a = d[s.pid];
					a ? (a.newPosition.x = s.x * o, a.newPosition.y = s.y * o, c.addChild(a)) : console.warn("Minimap node not found!")
				}
				this.render()
			},
			render() {
				for (var e = c.children, t = l * (30 / r), s = 0; s < e.length; s++) {
					var a = e[s];
					a.position.x = n.lerp(a.position.x, a.newPosition.x, t), a.position.y = n.lerp(a.position.y, a.newPosition.y, t)
				}
				this.renderer.render(c)
			},
			drawLocationGrid(e, t) {
				var s = o / t;
				e.globalAlpha = .1, e.strokeStyle = "#202020", e.beginPath();
				for (var a = 1; a < t; a++) {
					var n = a * s;
					e.moveTo(n, 0), e.lineTo(n, o), e.moveTo(0, n), e.lineTo(o, n)
				}
				e.stroke()
			},
			drawLocationCodes(e, t) {
				var s = o / t,
					a = s / 2;
				e.globalAlpha = .1, e.font = "14px Verdana", e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = "#ffffff";
				for (var n = 0; n < t; n++)
					for (var i = n * s + a, r = 0; r < t; r++) {
						var l = String.fromCharCode(97 + r).toUpperCase() + (n + 1),
							c = r * s + a;
						e.strokeText(l, i, c), e.fillText(l, i, c)
					}
			},
			drawLocations(e) {
				e.width = e.height = o;
				var t = e.getContext("2d");
				this.drawLocationGrid(t, 5), this.drawLocationCodes(t, 5)
			}
		},
		created() {
			a.events.$on("minimap-show", this.onMinimapShow), a.events.$on("minimap-hide", this.onMinimapHide), a.events.$on("minimap-destroy", this.destroyMinimap), a.events.$on("minimap-create-node", this.createNode), a.events.$on("minimap-destroy-node", this.destroyNode), a.events.$on("minimap-show-locations", e => this.showLocations = e), a.events.$on("minimap-stats-visible", e => this.showMinimapStats = e), a.events.$on("minimap-stats-changed", e => {
				this.spectators = e.spectators, this.playerCount = e.playerCount
			}), a.events.$on("minimap-stats-invalidate-shown", () => {
				this.showClock = i.showClock, this.showSessionTime = i.showSessionTime, this.showSpectators = i.showSpectators, this.showPlayerCount = i.showPlayerCount
			})
		},
		mounted() {
			this.drawLocations(this.$refs.locations), this.initRenderer(this.$refs.minimap), this.startTime = Date.now(), this.everySecond = setInterval(() => {
				this.systemTime = u();
				var e = (Date.now() - this.startTime) / 1e3;
				this.sessionTime = h(e)
			}, 1e3)
		}
	}
}, function (e, t, s) {
	var a = s(2),
		n = s(251);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(253);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(255);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(257);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(259);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(261);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(2),
		n = s(263);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {
	var a = s(4),
		n = s(8);
	PIXI.utils.skipHello();
	var i = document.getElementById("canvas"),
		o = {
			resolution: a.customResolution || window.devicePixelRatio || 1,
			view: i,
			forceCanvas: !a.useWebGL,
			antialias: false,
			powerPreference: "high-performance",
			backgroundColor: PIXI.utils.string2hex(a.backgroundColor)
		};
	o.resolution = a.gameResolution;
	var r = PIXI.autoDetectRenderer(o);

	function l() {
		r.resize(window.innerWidth, window.innerHeight)
	}
	l(), n.destroyPixiPlugins(r), window.addEventListener("resize", l), r.clear(), e.exports = r
}, , function (e, t, s) {
	var a = s(1),
		n = s(5),
		i = {
			toggleAutoRespawn: function () {
				var e = a.settings.autoRespawn;
				a.settings.set("autoRespawn", !e), e && a.state.isAutoRespawning && a.triggerAutoRespawn();
				var t = "Auto respawn ";
				t += e ? "disabled" : "enabled", n.toast.fire({
					type: "info",
					title: t,
					timer: 1500
				})
			},
			respawn: function () {
				a.state.deathScreen || (a.joinGame(), a.showMenu(false))
			},
			feed: a.actions.feed.bind(null),
			feedMacro: a.actions.feed.bind(null, true),
			split: a.actions.split.bind(null, 1),
			splitx2: a.actions.split.bind(null, 2),
			splitx3: a.actions.split.bind(null, 3),
			splitMax: a.actions.split.bind(null, 4),
			split32: a.actions.split.bind(null, 5),
			split64: a.actions.split.bind(null, 6),
			linesplit: a.actions.linesplit,
			freezeMouse: a.actions.freezeMouse,
			lockLinesplit: a.actions.lockLinesplit,
			stopMovement: a.actions.stopMovement,
			toggleSkins: a.actions.toggleSkins,
			toggleNames: a.actions.toggleNames,
			toggleFood: a.actions.toggleFood,
			toggleMass: a.actions.toggleMass,
			toggleChat: a.actions.toggleChat,
			toggleHud: a.actions.toggleHud,
			spectateLock: a.actions.spectateLockToggle,
			selectPlayer: a.actions.targetPlayer.bind(null, true),
			saveReplay: a.replay.save,
			zoomLevel1: a.actions.setZoomLevel.bind(null, 1),
			zoomLevel2: a.actions.setZoomLevel.bind(null, 2),
			zoomLevel3: a.actions.setZoomLevel.bind(null, 3),
			zoomLevel4: a.actions.setZoomLevel.bind(null, 4),
			zoomLevel5: a.actions.setZoomLevel.bind(null, 5),
			switchMultibox: a.actions.switchMultibox
		},
		o = {
			feed: "W",
			feedMacro: "MOUSE0",
			split: "SPACE",
			splitx2: "G",
			splitx3: "H",
			splitMax: "T",
			split32: "",
			split64: "",
			linesplit: "Z",
			lockLinesplit: "",
			respawn: "",
			toggleAutoRespawn: "",
			stopMovement: "",
			toggleSkins: "",
			toggleNames: "",
			toggleMass: "",
			spectateLock: "Q",
			selectPlayer: "MOUSE1",
			saveReplay: "R",
			toggleChat: "",
			toggleHud: "",
			zoomLevel1: "1",
			zoomLevel2: "2",
			zoomLevel3: "3",
			zoomLevel4: "4",
			zoomLevel5: "5",
			switchMultibox: "TAB"
		};
	e.exports = new class {
		constructor() {
			this.version = 2, this.pressHandlers = null, this.releaseHandlers = null, this.resetObsoleteHotkeys(), this.load()
		}
		resetObsoleteHotkeys() {
			localStorage.hotkeysVersion != this.version && (localStorage.hotkeys && (console.log("Incompatible hotkeys"), localStorage.removeItem("hotkeys")), localStorage.hotkeysVersion = this.version)
		}
		load() {
			this.hotkeys = this.loadHotkeys(), this.loadHandlers(this.hotkeys)
		}
		loadHotkeys() {
			var e = Object.assign({}, o),
				t = localStorage.hotkeys;
			if (!t) return e;
			t = JSON.parse(t);
			var s = Object.values(t);
			return Object.keys(e).forEach(t => {
				var a = e[t];
				a && s.includes(a) && (e[t] = "")
			}), Object.assign(e, t)
		}
		saveHotkeys(e) {
			localStorage.hotkeys = JSON.stringify(e)
		}
		reset() {
			return localStorage.removeItem("hotkeys"), this.load(), this.hotkeys
		}
		get() {
			return this.hotkeys
		}
		set(e, t) {
			if (i[e]) {
				if (this.hotkeys[e] === t) return true;
				if (t)
					for (var s in this.hotkeys) this.hotkeys[s] === t && (this.hotkeys[s] = "");
				return this.hotkeys[e] = t, this.saveHotkeys(this.hotkeys), this.loadHandlers(this.hotkeys), true
			}
			console.log("Invalid action name", e)
		}
		loadHandlers(e) {
			this.pressHandlers = {}, Object.keys(e).forEach(t => {
				var s = i[t];
				if (s) {
					var a = e[t];
					this.pressHandlers[a] = s
				} else console.warn("Invalid action in hotkeys", t)
			}), this.releaseHandlers = {}, e.feedMacro && (this.releaseHandlers[e.feedMacro] = a.actions.feed.bind(null, false))
		}
		press(e) {
			var t = this.pressHandlers[e];
			return !!t && (t(), true)
		}
		release(e) {
			var t = this.releaseHandlers[e];
			t && t()
		}
		convertKey(e) {
			return e ? e.toString().toUpperCase().replace(/^(LEFT|RIGHT|NUMPAD|DIGIT|KEY)/, "") : "Unknown"
		}
	}
}, , , , , , , function (e, t, s) {
	"use strict";
	var a = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", [t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showMinimapStats,
					expression: "showMinimapStats"
				}],
				staticClass: "minimap-stats",
				style: {
					bottom: this.minimapStatsBottom + "px"
				}
			}, [t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showClock,
					expression: "showClock"
				}]
			}, [this._v(this._s(this.systemTime))]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showSessionTime,
					expression: "showSessionTime"
				}]
			}, [this._v(this._s(this.sessionTime) + " session")]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showPlayerCount && this.playerCount,
					expression: "showPlayerCount && playerCount"
				}]
			}, [this._v(this._s(this.playerCountDisplayed))]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showSpectators && this.spectators,
					expression: "showSpectators && spectators"
				}]
			}, [this._v(this._s(this.spectators) + " spectator" + this._s(1 === this.spectators ? "" : "s"))])]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showMinimap,
					expression: "showMinimap"
				}],
				staticClass: "container"
			}, [t("canvas", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showLocations,
					expression: "showLocations"
				}],
				ref: "locations",
				attrs: {
					id: "locations"
				}
			}), this._v(" "), t("canvas", {
				ref: "minimap",
				attrs: {
					id: "minimap"
				}
			})])])
		},
		n = [];
	a._withStripped = true, s.d(t, "a", function () {
		return a
	}), s.d(t, "b", function () {
		return n
	})
}, function (e, t, s) {
	"use strict";
	var a = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("transition", {
				attrs: {
					name: "fade",
					appear: ""
				}
			}, [s("div", {
				staticClass: "modal"
			}, [s("div", {
				staticClass: "overlay",
				on: {
					click: function (t) {
						return e.$emit("close")
					}
				}
			}), e._v(" "), s("i", {
				staticClass: "fas fa-times-circle close-button",
				on: {
					click: function (t) {
						return e.$emit("close")
					}
				}
			}), e._v(" "), s("div", {
				staticClass: "wrapper"
			}, [s("transition", {
				attrs: {
					name: "scale",
					appear: ""
				}
			}, [s("div", {
				staticClass: "content fade-box"
			}, [e._t("default", [e._v("Here should be something")])], 2)])], 1)])])
		},
		n = [];
	a._withStripped = true, s.d(t, "a", function () {
		return a
	}), s.d(t, "b", function () {
		return n
	})
}, function (e, t, s) {
	"use strict";
	var a = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				staticClass: "replay-item"
			}, [s("img", {
				staticClass: "replay-thumbnail",
				attrs: {
					src: e.replay.image
				},
				on: {
					click: function (t) {
						return e.play(e.replay.data)
					}
				}
			}), e._v(" "), s("div", {
				staticClass: "replay-header"
			}, [s("div", {
				staticClass: "replay-name"
			}, [e._v(e._s(e.replay.name))]), e._v(" "), s("div", [s("i", {
				staticClass: "replay-button fas fa-cloud-download-alt",
				on: {
					click: function (t) {
						return t.stopPropagation(), e.downloadReplay(e.replay)
					}
				}
			}), e._v(" "), s("i", {
				staticClass: "replay-button fas fa-trash-alt",
				on: {
					click: function (t) {
						return t.stopPropagation(), e.deleteReplay(e.replay.name)
					}
				}
			})])])])
		},
		n = [];
	a._withStripped = true, s.d(t, "a", function () {
		return a
	}), s.d(t, "b", function () {
		return n
	})
}, function (e, t) {
	t.neon = [16776960, 65280, 65535, 16711935], t.basic = [16711680, 16744448, 16776960, 8453888, 65280, 65408, 65535, 33023, 8323327, 16711935, 16711807], t.hsl15 = [16711680, 16728064, 16744448, 16760576, 16776960, 12582656, 8453888, 4259584, 65280, 65344, 65408, 65471, 65535, 49151, 32767, 16639, 255, 4194559, 8323327, 12517631, 16711935, 16711871, 16711808, 16711744]
}, function (e, t, s) {
	var a = new class {
		constructor() {
			this.ads = {}
		}
		addAd(e, t, s) {
			this.ads[e] = {
				elementId: t,
				lastRefresh: 0,
				waitInterval: s || 0
			}
		}
		getAd(e) {
			var t = this.ads[e];
			return t || (console.warn("Ad with alias " + e + " not found!"), null)
		}
		pushAd(e) {
			aiptag.cmd.display.push(function () {
				aipDisplayTag.display(e)
			})
		}
		refreshAd(e) {
			var t = this.getAd(e);
			if (!t) return false;
			var s = Date.now();
			return !(t.lastRefresh + 1e3 * t.waitInterval > s || (t.lastRefresh = s, this.pushAd(t.elementId), 0))
		}
	};
	a.addAd("menu-box", "vanis-io_300x250", 30), a.addAd("menu-banner", "vanis-io_728x90", 30), a.addAd("death-box", "vanis-io_300x250_2", 30), e.exports = {
		loadAdinplay: function (e) {
			var t = window.aiptag = t || {};
			t.cmd = t.cmd || [], t.cmd.display = t.cmd.display || [], t.gdprShowConsentTool = true;
			var s = document.createElement("script");
			s.onload = e, s.src = "//api.adinplay.com/libs/aiptag/pub/VAN/vanis.io/tag.min.js", document.head.appendChild(s)
		},
		refreshAd: function (e) {
			return a.refreshAd(e)
		},
		loadMenuAds: function () {
			a.refreshAd("menu-box"), a.refreshAd("menu-banner")
		}
	}
}, function (e, t) {
	e.exports = {
		initialData: function (e) {
			var t = 1,
				s = {
					border: {}
				};
			return s.protocol = e.getUint8(t, true), t += 1, s.protocol >= 2 ? (s.gameModeId = e.getUint8(t, true), t += 1, s.instanceSeed = e.getUint16(t, true), t += 2, s.playerId = e.getUint16(t, true), t += 2, s.border.width = e.getUint32(t, true), t += 4, s.border.height = e.getUint32(t, true), t += 4) : function () {
				s.instanceSeed = e.getUint16(t, true), t += 2, s.playerId = e.getUint16(t, true), t += 2;
				var a = e.getUint16(t, true);
				t += 2, s.border.width = a, s.border.height = a
			}(), s
		}
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, s) {
	"use strict";
	var a = s(73),
		n = s(29),
		i = (s(168), s(0)),
		o = Object(i.a)(n.default, a.a, a.b, false, null, "0eaeaf66", null);
	o.options.__file = "src/components/modal.vue", t.default = o.exports
}, function (e, t, s) {
	"use strict";
	var a = s(74),
		n = s(37),
		i = (s(218), s(0)),
		o = Object(i.a)(n.default, a.a, a.b, false, null, "1dbc6ed9", null);
	o.options.__file = "src/components/replay-item.vue", t.default = o.exports
}, function (e, t, s) {
	"use strict";
	var a = s(72),
		n = s(54),
		i = (s(250), s(0)),
		o = Object(i.a)(n.default, a.a, a.b, false, null, "4c95bd45", null);
	o.options.__file = "src/components/minimap.vue", t.default = o.exports
}, function (e, t, s) {
	"use strict";
	s.r(t);
	var a = s(8),
		n = (s.n(a), s(116));
	s.n(n);
	window.v = 5, s(18).notifyUnsupportedBrowser(), s(1), s(129), s(131), s(148), s(266), s(264), s(265)
}, function (e, t, s) {
	var a = s(2),
		n = s(117);
	"string" == typeof (n = n.__esModule ? n.default : n) && (n = [
		[e.i, n, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		o = (a(n, i), n.locals ? n.locals : {});
	e.exports = o
}, function (e, t, s) {}, function (e, t) {
	e.exports = class {
		constructor(e) {
			this.position = e.pivot, this.scale = e.scale
		}
	}
}, function (e, t, s) {
	var a = s(4),
		n = s(12);

	function i(e, t) {
		var s = PIXI.utils.string2hex(a.borderColor),
			n = new PIXI.Graphics;
		return n.lineStyle(45, s, 1, .5), n.drawRect(0, 0, e, t), n.endFill(), n.pivot.set(e / 2, t / 2), n
	}
	e.exports = class {
		constructor(e, t, s) {
			this.game = e, this.border = t, this.container = new PIXI.Container, this.background = new PIXI.Container, this.borderSprite = i(t.width, t.height), this.background.addChild(this.borderSprite), this.foreground = new PIXI.Container, this.food = new PIXI.Container, this.food.visible = a.foodVisible, this.resetMassTextStyle(false), this.container.addChild(this.background, this.food, this.foreground), this.setPosition(), s && this.setBackgroundImage()
		}
		setPosition() {
			this.container.position.x = window.innerWidth / 2, this.container.position.y = window.innerHeight / 2
		}
		setBorder({
			width: e,
			height: t
		}) {
			this.border = {
				width: e,
				height: t
			}, this.borderSprite.width = e, this.borderSprite.height = t;
			var s = this.backgroundSprite;
			s && (s.width = e, s.height = t)
		}
		sort() {
			this.foreground.children.sort(function (e, t) {
				return e = e.gameData, t = t.gameData, e.size === t.size ? e.id - t.id : e.size - t.size
			})
		}
		addCell(e) {
			this.foreground.addChild(e)
		}
		addFood(e) {
			this.food.addChild(e)
		}
		toggleBackgroundImage(e) {
			e && !this.backgroundSprite ? this.setBackgroundImage() : !e && this.destroyBackgroundImage(true)
		}
		setBackgroundImage() {
			var e = a.backgroundImageUrl;
			if (e) {
				var t = (a.backgroundImageRepeat ? PIXI.TilingSprite : PIXI.Sprite).from(e, {});
				t.width = this.border.width, t.height = this.border.height, t.alpha = a.backgroundImageOpacity, t.anchor.set(.5);
				var s = this.backgroundSprite;
				if (s) {
					var n = t.texture !== s.texture;
					this.destroyBackgroundImage(n)
				}
				this.backgroundSprite = t, this.background.addChildAt(t, 0)
			} else this.destroyBackgroundImage()
		}
		destroyBackgroundImage(e) {
			this.backgroundSprite && (this.backgroundSprite.destroy(!!e), this.backgroundSprite = null)
		}
		resetBorder() {
			this.borderSprite.destroy(), this.borderSprite = i(this.border.width, this.border.height), this.background.addChild(this.borderSprite)
		}
		reloadFoodTextures() {
			this.game.nodelist.forEach(e => {
				e.isFood && e.reloadTexture()
			})
		}
		reloadEjectedTextures() {
			this.game.nodelist.forEach(e => {
				e.isEjected && e.reloadTexture()
			})
		}
		reloadVirusTexture() {
			n.virus.loadVirusFromUrl(a.virusImageUrl)
		}
		resetPlayerLongNames() {
			for (let e in this.game.playerManager.players) this.game.playerManager.players[e].applyNameToSprite()
		}
		resetNameTextStyle() {
			for (var e = this.game.settings.nameTextStyle, t = 0; t < this.game.nodelist.length; t++) {
				var s = this.game.nodelist[t];
				s.isPlayerCell && s.nameSprite && (s.nameSprite.destroy(false), s.nameSprite = null)
			}
			for (let t in this.game.playerManager.players) {
				var a = this.game.playerManager.players[t];
				if (a.nameSprite) {
					var n = a.nameSprite.style.fill;
					a.nameSprite.style = e, a.nameSprite.style.fill = n, a.nameSprite.updateText()
				}
			}
		}
		resetMassTextStyle(e) {
			var t = this.game.settings.massTextStyle;
			for (e && this.uninstallMassTextFont(), PIXI.BitmapFont.from("mass", t, {
					chars: "1234567890k."
				}); this.game.massTextPool.length;) this.game.massTextPool.pop().destroy(false);
			for (var s = 0; s < this.game.nodelist.length; s++) {
				var a = this.game.nodelist[s];
				a.isPlayerCell && a.massText && (a.sprite.removeChild(a.massText), a.massText.destroy(false), a.massText = null)
			}
		}
		uninstallMassTextFont() {
			PIXI.BitmapFont.uninstall("mass")
		}
	}
}, function (e, t, s) {
	var a = s(4),
		n = s(63),
		i = {};
	e.exports = {
		getTexture: function (e) {
			var t = i[e];
			return t || (i[e] = function (e) {
				var t, s, i, o = a.cellSize,
					r = o / 2,
					l = (t = r, s = e, (i = new PIXI.Graphics).beginFill(s), i.drawCircle(0, 0, t), i.endFill(), i);
				l.position.set(r);
				var c = PIXI.RenderTexture.create(o, o);
				return n.render(l, c), c
			}(e))
		},
		destroyCache: function () {
			for (var e in i) i[e].destroy(true), delete i[e]
		}
	}
}, function (e, t, s) {
	var a = s(63),
		{
			loadImage: n
		} = s(8),
		i = 200,
		o = PIXI.RenderTexture.create(i, i),
		r = Promise.resolve();
	e.exports = {
		getTexture: function () {
			return o
		},
		loadVirusFromUrl: async function (e) {
			await r, r = new Promise(async t => {
				var s = await n(e),
					r = PIXI.Sprite.from(s);
				r.width = r.height = i, a.render(r, o, true), r.destroy(true), t()
			})
		}
	}
}, function (e, t, s) {
	var a = s(123);
	e.exports = class {
		constructor(e) {
			this.game = e, this.players = {}, this.playerCount = 0
		}
		getPlayer(e) {
			var t = this.players[e] || null;
			return !t && console.warn("Trying to get non-existing player", e), t
		}
		setPlayerData({
			pid: e,
			nickname: t,
			skinUrl: s,
			nameColor: n,
			tagId: i,
			bot: o
		}) {
			var r = this.players[e];
			r || (r = this.players[e] = new a(this.game, e), o || this.playerCount++);
			var l = r.setName(t, n),
				c = r.setSkin(s),
				d = r.setTagId(i);
			return (l || c || d) && r.invalidateVisibility(), r
		}
		invalidateVisibility(e = []) {
			for (var t in this.players) {
				var s = this.players[t]; - 1 === e.indexOf(s) && s.invalidateVisibility()
			}
		}
		delayedRemovePlayer(e) {
			var t = this.players[e],
				s = this.game.replay.updateHistory[0];
			t && (s && t.lastUpdate && t.lastUpdate.packetId >= s.packetId ? t.lastUpdate.clearWhenShifted.push(e) : this.removePlayer(e))
		}
		removePlayer(e) {
			var t = this.players[e];
			t && (this.playerCount--, t.clearCachedData(), delete this.players[e])
		}
		destroy() {
			for (var e in this.players) this.removePlayer(e)
		}
	}
}, function (e, t, s) {
	var a = s(4),
		n = s(75).basic,
		i = a.cellSize;

	function o(e) {
		e = e || 0;
		var t = new PIXI.Graphics;
		return t.lineStyle(a.cellBorderSize, 0, .5), t.beginFill(e), t.drawCircle(0, 0, a.cellSize / 2), t.endFill(), t
	}
	e.exports = class {
		constructor(e, t) {
			this.game = e, this.pid = t, this.skinUrl = null, this.tagId = null, this.isMe = t === e.playerId || t === e.multiboxPid, this.texture = PIXI.RenderTexture.create(i, i), this.cellContainer = this.createCellContainer(), this.renderCell()
		}
		get visibility() {
			return this.game.tagId === this.tagId ? 1 : 2
		}
		setOutline(e) {
			e = e || 0, this.outlineColor = e;
			var t = a.cellSize / 2,
				s = new PIXI.Graphics;
			s.lineStyle(20, e, 1), s.drawCircle(0, 0, t - 9.5), s.endFill(), s.pivot.set(-t), this.game.renderer.render(s, this.texture, false)
		}
		setCrown(e) {
			this.hasCrown = e;
			for (var t = this.pid, s = this.game.nodelist, a = 0; a < s.length; a++) {
				var n = s[a];
				n.pid === t && (e ? n.addCrown() : n.removeCrown())
			}
		}
		createCellContainer() {
			var e = new PIXI.Container,
				t = o(this.getCellColor());
			return e.pivot.set(-i / 2), e.addChild(t), e
		}
		createSkinSprite(e) {
			var t = new PIXI.BaseTexture(e),
				s = new PIXI.Texture(t),
				n = new PIXI.Sprite(s);
			return n.width = n.height = a.cellSize, n.anchor.set(.5), n
		}
		renderCell() {
			console.assert(this.cellContainer.children.length <= 3, "cellContainer has unexpected sprites"), this.game.renderer.render(this.cellContainer, this.texture, true), this.outlineColor && this.setOutline(this.outlineColor)
		}
		setTagId(e) {
			return e || (e = null), e !== this.tagId && (this.tagId = e, true)
		}
		setNameColor(e) {
			return e ? (e = parseInt(e, 16), this.nameColor = e, this.nameColorCss = PIXI.utils.hex2string(e)) : (this.nameColor = null, this.nameColorCss = null), this.nameColor
		}
		setName(e, t) {
			return e || (e = "Unnamed"), (this.nameFromServer !== e || this.nameColorFromServer !== t) && (this.nameFromServer = e, this.nameColorFromServer = t, this.applyNameToSprite(), true)
		}
		applyNameToSprite() {
			var e, t = "Unnamed" === this.nameFromServer,
				s = "Long Name" === this.nameFromServer,
				n = t ? "" : this.nameFromServer,
				i = this.name,
				o = this.nameColor;
			if (e = t || s ? this.setNameColor(null) : this.setNameColor(this.nameColorFromServer), this.setNameSprite(n, e), !t && !s && this.nameSprite.texture.width > a.cellLongNameThreshold && (s = true, n = "Long Name", e = this.setNameColor(null), this.setNameSprite(n, e)), this.name = t ? "Unnamed" : n, i !== this.name || o !== this.nameColor) {
				var r = e || (this.isMe ? 16747520 : null);
				this.game.events.$emit("minimap-create-node", this.pid, n, e, r)
			}
		}
		setNameSprite(e, t) {
			this.nameSprite ? this.nameSprite.text = e : this.nameSprite = new PIXI.Text(e, a.nameTextStyle), this.nameSprite.style.fill = t || 16777215, this.nameSprite.updateText()
		}
		setSkin(e) {
			return e || (e = null), e !== this.skinUrl && (this.abortSkinLoaderIfExist(), this.destroySkin() && this.renderCell(), this.skinUrl = e, this.skinShown && this.loadSkinAndRender(), true)
		}
		destroySkin() {
			return !!this.skinSprite && (this.skinSprite.mask.destroy(true), this.skinSprite.destroy(true), this.skinSprite = null, true)
		}
		loadSkinAndRender() {
			console.assert(!this.abortSkinLoader, "Called loadSkin while other skin was loading"), this.abortSkinLoaderIfExist(), this.abortSkinLoader = this.game.skinLoader.loadSkin(this.skinUrl, e => {
				this.skinSprite = this.createSkinSprite(e), this.skinSprite.mask = o(), this.cellContainer.addChild(this.skinSprite.mask, this.skinSprite), this.renderCell()
			})
		}
		invalidateVisibility() {
			var e, t, s, n = a.showNameColor;
			this.isMe ? (e = a.showOwnName, t = a.showOwnSkin, s = a.showOwnMass) : (e = a.showNames >= this.visibility, t = a.showSkins >= this.visibility, s = a.showMass >= this.visibility), e = a.namesEnabled && e, t = a.skinsEnabled && t, s = a.massEnabled && s, t && !this.skinShown ? this.skinSprite ? (this.skinSprite.visible = true, this.renderCell()) : this.skinUrl && this.loadSkinAndRender() : !t && this.skinShown && (this.abortSkinLoaderIfExist(), this.skinSprite && (this.skinSprite.visible = false, this.renderCell())), this.nameShown = e, this.skinShown = t, this.massShown = s, this.nameColorShown = n
		}
		abortSkinLoaderIfExist() {
			this.abortSkinLoader && (this.abortSkinLoader(), this.abortSkinLoader = null)
		}
		getCellColor() {
			var e = this.game.seededRandom(this.pid),
				t = Math.floor(e * n.length);
			return n[t]
		}
		clearCachedData() {
			this.abortSkinLoaderIfExist(), this.destroySkin(), this.cellContainer.destroy(true), this.texture.destroy(true), this.texture.clearedFromCache = true, this.nameSprite && this.nameSprite.destroy(true), this.game.events.$emit("minimap-destroy-node", this.pid)
		}
	}
}, function (e, t) {
	var s = {
		5: function (e) {
			var t, s = e.border.width,
				a = s / 2,
				n = e.border.height / 2,
				i = new PIXI.Container;
			(t = new PIXI.Graphics).beginFill(2593235, .1), t.lineStyle(40, 0), t.drawRect(0, 0, s, 3500), t.position.set(-a, -n), i.addChild(t), (t = new PIXI.Graphics).beginFill(2593235, .1), t.lineStyle(40, 0), t.drawRect(0, 0, s, 2e3), t.position.set(-a, n - 2e3), i.addChild(t), e.scene.background.addChild(i)
		}
	};
	t.prepareMode = function (e, t) {
		var a = s[t];
		a && a(e)
	}
}, , function (e, t, s) {
	var a = s(127);
	e.exports = class {
		constructor() {
			this.loaders = {}, this.worker = new a, this.worker.addEventListener("message", this.onSkinLoaded.bind(this))
		}
		createLoader(e) {
			return {
				image: null,
				error: null,
				callbacks: [e]
			}
		}
		clearCallbacks() {
			for (var e in this.loaders) this.loaders[e].callbacks = []
		}
		removeLoaderCallback(e, t) {
			var s = e.callbacks.indexOf(t);
			s >= 0 && e.callbacks.splice(s, 1)
		}
		loadSkin(e, t) {
			var s = this.loaders[e];
			return s ? s.image ? (t(s.image), null) : s.error ? null : (s.callbacks.push(t), this.removeLoaderCallback.bind(this, s, t)) : (s = this.loaders[e] = this.createLoader(t), this.worker.postMessage(e), this.removeLoaderCallback.bind(this, s, t))
		}
		onSkinLoaded(e) {
			var {
				skinUrl: t,
				bitmap: s,
				error: a
			} = e.data, n = this.loaders[t];
			if (a) return n.error = true, void(n.callbacks = []);
			for (n.image = s; n.callbacks.length;) n.callbacks.pop()(s)
		}
	}
}, function (e, t, s) {
	e.exports = function () {
		return new Worker(s.p + "feef3e7f8ac46a1613ad.worker.js")
	}
}, function (e, t) {
	e.exports = class {
		constructor() {
			this.total = 0, this.count = 0
		}
		add(e) {
			this.total += e, this.count++
		}
		getAndReset() {
			var e = this.total / this.count;
			return this.count = this.total = 0, e
		}
	}
}, function (e, t, s) {
	var a = s(130),
		n = s(1),
		i = s(8),
		o = s(5),
		r = s(77),
		l = s(4),
		c = s(24),
		d = [],
		u = a.createInstance({
			name: "game-replays"
		});
	var h = p(new ArrayBuffer(1));

	function p(e) {
		return btoa(String.fromCharCode.apply(null, new Uint8Array(e)))
	}

	function m(e) {
		e = atob(e);
		for (var t = new ArrayBuffer(e.length), s = new Uint8Array(t), a = 0; a < e.length; a++) s[a] = e.charCodeAt(a);
		return new DataView(t)
	}
	n.replay = {
		database: u,
		updateHistory: d,
		addHistory: function (e) {
			d.push(e);
			var t = 25 * l.replayDuration;
			if (d.length > t) {
				for (var s = d[0].clearWhenShifted; s.length;) n.playerManager.removePlayer(s.pop());
				d.shift()
			}
		},
		play: function (e) {
			n.running && n.stop(), n.closeConnection(), o.toast.close();
			var t = 1,
				s = e.split("|");
			"REPLAY" === s[0] && (t = parseInt(s[1]), s = s.slice(3));
			var a = s.map(m),
				i = r.initialData(a.shift()),
				l = [];
			if (t >= 4) {
				for (; a[0].getUint8(0);) l.push(a.shift());
				a.shift()
			} else l.push(a.shift());
			i.replayUpdates = a, n.start(i), l.forEach(e => n.parseMessage(e)), n.showMenu(false)
		},
		save: function () {
			var e = d;
			if (e.length) {
				var t = [];
				for (var s in n.playerManager.players) {
					var a = n.playerManager.players[s];
					a.lastUpdate && a.lastUpdate.packetId >= e[0].packetId && t.push(a)
				}
				var r, l, m, v = p(n.initialDataPacket.buffer),
					g = function (e) {
						e = e.map(e => {
							var t = {
								pid: e.pid,
								nickname: e.name,
								skinUrl: e.skinUrl
							};
							return e.tagId && (t.tagId = e.tagId), t
						});
						var t = JSON.stringify(e),
							s = new c;
						return s.uint8(16), s.utf8(t), p(s.write())
					}(t),
					f = e.map(e => p(e.buffer)).join("|"),
					y = i.getTimestamp(),
					w = n.getThumbnail(),
					k = [];
				k.push("REPLAY"), k.push(4), k.push(w), k.push(v), n.multiboxPid && k.push(p((r = n.multiboxPid, l = new ArrayBuffer(3), (m = new DataView(l)).setUint8(0, 8), m.setUint16(1, r, true), l))), k.push(g), k.push(h), k.push(f);
				var b = k.join("|");
				u.setItem(y, b, () => {
					n.events.$emit("replay-added"), n.addServerMessage("Replay saved!"), o.toast.fire({
						type: "info",
						title: "Replay saved!",
						timer: 1500
					})
				}).catch(e => {
					console.error("replay.save", e);
					var t = "Error saving replay";
					"string" == typeof e ? t += ": " + e : e && e.message && (t += ": " + e.message), o.toast.fire({
						type: "error",
						title: t
					})
				})
			}
		}
	}
}, , function (e, t, s) {
	var a = s(1),
		n = s(5),
		i = s(132),
		{
			createBuffer: o
		} = s(8),
		r = s(147);

	function l(e) {
		n.toast.fire({
			type: "error",
			title: e,
			timer: 5e3
		})
	}
	a.send = function (e) {
		p() ? a.ws.send(e) : !a.replaying && console.log("WebSocket not open?")
	}, a.sendUint8 = function (e) {
		var t = o(1);
		t.setUint8(0, e), a.send(t)
	}, a.ping = function () {
		a.pingstamp = Date.now();
		var e = o(1);
		e.setUint8(0, 3), a.send(e)
	};
	var c = 0;

	function d() {
		a.ws && (a.currentWsId = null, a.ws.onmessage = null, a.ws.onclose = null, a.ws.onerror = null, a.ws.close())
	}

	function u() {
		3 === a.ws.readyState && a.events.$emit("connect-server", a.lastWsUrl)
	}

	function h(e) {
		if (a.currentWsId = null, a.running && a.stop(), 1003 === e.code) setTimeout(u, 1500), n.toast.fire({
			type: "info",
			title: "Server restarting ...",
			timer: 5e3
		});
		else {
			var t = "You have been disconnected";
			e.reason && (t += " (" + e.reason + ")"), l(t)
		}
		a.showMenu(true, true)
	}

	function p() {
		return !(!a.ws || 1 !== a.ws.readyState)
	}
	a.connect = function (e) {
		a.lastWsUrl = e, a.running && a.stop(), d(), a.events.$emit("chat-clear");
		var t = a.ws = new r(e, "tFoL46WDlZuRja7W6qCl");
		t.binaryType = "arraybuffer", t.onopen = function () {
			if (p()) {
				a.currentWsId = ++c;
				a.events.$emit("players_menu", true), a.events.$emit("account_menu", true), a.events.$emit("chatbox_menu", true), a.events.$emit("options_menu", true), a.events.$emit("replays_menu", true), a.state.connectionUrl = e, t.onclose = h
			}
		}, t.onclose = function (e) {
			l("Connection failed!")
		}, t.onmessage = function (e) {
			i(new DataView(e.data))
		}
	}, a.closeConnection = d, a.isConnected = p
}, function (e, t, s) {
	var a = s(1),
		n = s(5),
		i = s(133),
		o = s(77),
		r = s(141),
		l = s(142),
		c = s(143),
		{
			htmlEncode: d
		} = s(8),
		u = (s(24), s(144)),
		h = 1;
	e.exports = a.parseMessage = function (e) {
		function t() {
			for (var t, s = ""; 0 != (t = e.getUint16(p, true));) p += 2, s += String.fromCharCode(t);
			return p += 2, s
		}

		function s() {
			for (var t, s = ""; 0 != (t = e.getUint8(p, true));) p += 1, s += String.fromCharCode(t);
			return p += 1, s
		}
		e.packetId = h++, e.clearWhenShifted = [];
		var p = 0;
		switch (e.getUint8(p++)) {
			case 1:
				var m = o.initialData(e);
				a.initialDataPacket = e, a.start(m);
				break;
			case 2:
				var v = new Uint8Array(e.buffer, 1),
					g = u(v);
				a.sendJoinData(g);
				break;
			case 3:
				var f = Date.now() - a.pingstamp;
				a.updateStats(f);
				break;
			case 4:
				for (; x = e.getUint16(p, true);) a.playerManager.delayedRemovePlayer(x), p += 2;
				break;
			case 6:
				a.sendUint8(6);
				break;
			case 7:
				var y, w;
				if (1 & (I = e.getUint8(p++))) {
					var k = e.getUint16(p, true);
					y = a.playerManager.getPlayer(k), p += 2
				}
				if (2 & I) {
					var b = e.getUint16(p, true);
					w = a.playerManager.getPlayer(b), p += 2
				}
				w && w.setCrown(false), y && y.setCrown(true);
				break;
			case 8:
				a.multiboxPid = e.getUint16(p, true);
				break;
			case 9:
				a.activePid && a.playerManager.getPlayer(a.activePid).setOutline(16777215), a.activePid = e.getUint16(p, true), a.playerManager.getPlayer(a.activePid).setOutline(16711935);
				break;
			case 10:
				i(e);
				break;
			case 11:
				var C = c(a, e);
				a.events.$emit("leaderboard-update", C);
				break;
			case 12:
				var S = l(e);
				a.events.$emit("minimap-positions", S);
				break;
			case 13:
				var _ = r(e),
					x = _.pid,
					M = _.text;
				if (!x) return void a.addServerMessage(M);
				if (!(z = a.playerManager.getPlayer(x))) return void console.warn("Received message from non-exiting player", x);
				var P = {
					pid: x,
					text: M,
					from: z.name
				};
				z.nameColorCss && (P.fromColor = z.nameColorCss), a.events.$emit("chat-message", P);
				break;
			case 14:
				var I;
				if (m = {}, 2 & (I = e.getUint8(p++))) {
					var T = {
						1: "success",
						2: "error",
						3: "warning",
						4: "info"
					}[e.getUint8(p++)];
					T && (m.type = T)
				}
				4 & I && (m.timer = e.getUint16(p, true), p += 2), m.title = d(s()), n.toast.fire(m);
				break;
			case 15:
				for (; x = e.getUint16(p, true), p += 2, x;) {
					var A = t(),
						U = s();
					a.playerManager.setPlayerData({
						pid: x,
						nickname: A,
						skinUrl: U
					})
				}
				break;
			case 16:
				var L = s(),
					E = decodeURIComponent(escape(L)),
					R = JSON.parse(E),
					N = R.find(e => e.pid === a.playerId),
					O = false;
				N && (O = a.setTagId(N.tagId));
				for (var F = [], D = 0; D < R.length; D++) {
					var z = a.playerManager.setPlayerData(R[D]);
					F.push(z)
				}
				O && (a.events.$emit("minimap-positions", []), a.playerManager.invalidateVisibility(F));
				break;
			case 17:
				a.center.x = e.getInt32(p, true), p += 4, a.center.y = e.getInt32(p, true), p += 4;
				break;
			case 18:
				a.replay.updateHistory.length = 0, a.clearNodes();
				break;
			case 19:
				var B = e.getUint8(p++),
					$ = e.getUint32(p, true);
				if (p += 4, a.events.$emit("xp-update", $), B) {
					var W = e.getUint16(p, true);
					p += 2, a.levelUp(W)
				}
				break;
			case 20:
				var H = e.getUint16(p, true);
				p += 2;
				var j = e.getUint16(p, true);
				p += 2;
				var V = e.getUint32(p, true);
				p += 4, a.state.deathScreen = true, a.setDeathStats({
					timeAlive: H,
					killCount: j,
					highscore: V
				}), a.shouldAutoRespawn() ? a.state.isAutoRespawning = true : a.state.lastDeathTime = Date.now();
				var X = a.state.isAutoRespawning ? 1500 : 900;
				a.deathTimeout = setTimeout(a.triggerAutoRespawn, X);
				break;
			case 21:
				break;
			case 22:
				if (!window.grecaptcha) return void alert("Captcha library is not loaded");
				a.events.$emit("show-image-captcha");
				break;
			case 23:
				a.state.spectators = e.getUint16(p, true)
		}
	}
}, function (e, t, s) {
	var a = s(1),
		n = s(134),
		i = s(4);
	e.exports = function (e) {
		var t = a.nodes,
			s = a.nodelist;
		a.timestamp = Date.now();
		for (var o, r, l = 1, c = {}, d = !a.spectating && !a.replaying, u = false;;) {
			var h = e.getUint8(l++);
			if (0 === h) break;
			1 === h ? (r = e.getUint16(l), l += 2) : r = null, o = e.getUint32(l), l += 4;
			var p = e.getInt32(l);
			l += 4;
			var m = e.getInt32(l);
			l += 4;
			var v = e.getInt16(l);
			l += 2;
			var g = t[o];
			if (g) g.update(), g.ox = g.x, g.oy = g.y, g.oSize = g.size;
			else {
				var f = {
					id: o,
					x: p,
					y: m,
					size: v
				};
				switch (h) {
					case 1:
						var y = a.playerManager.getPlayer(r);
						f.texture = y.texture, g = new n.PlayerCell(f, y), a.scene.addCell(g.sprite);
						break;
					case 2:
						g = new n.Virus(f), a.scene.addCell(g.sprite);
						break;
					case 3:
						g = new n.EjectedMass(f), a.scene.addCell(g.sprite);
						break;
					case 4:
						g = new n.Food(f), a.scene.addFood(g.sprite);
						break;
					case 5:
						g = new n.DeadCell(f), a.scene.addCell(g.sprite);
						break;
					case 6:
						g = new n.Crown(f), a.scene.addCell(g.sprite);
						break;
					default:
						g = new n.DeadCell(f), a.scene.addCell(g.sprite)
				}
				s.push(g), t[o] = g
			}
			g.nx = p, g.ny = m, g.nSize = v, g.updateTime = a.timestamp, g.player && (g.player.isMe && (u = true, c[g.id] = true), d && (g.player.lastUpdate = e))
		}
		d && a.replay.addHistory(e), a.state.isAlive = u, u && (a.spectating = false);
		var w = true;
		for (var k in c) k in a.nodesOwn && (w = false);
		for (a.nodesOwn = c, w && (a.events.$emit("reset-cautions"), a.mouseFrozen = false); o = e.getUint32(l), l += 4, 0 !== o;) t[o] && t[o].destroy();
		for (; o = e.getUint32(l), l += 4, 0 !== o;) {
			var b = t[o],
				C = e.getUint32(l);
			l += 4;
			var S = t[C];
			if (b)
				if (S) {
					b.destroy(i.eatAnimation), b.ox = b.x, b.oy = b.y, b.oSize = b.size;
					var _ = b.size / S.nSize;
					_ = 0 > _ ? 0 : 1 < _ ? 1 : _, b.newPositionScale = _, b.nx = S.x, b.ny = S.y, b.nSize = 0, b.updateTime = a.timestamp
				} else b.destroy();
			else !a.replaying && console.warn("Prey not found:", o)
		}
	}
}, function (e, t, s) {
	t.PlayerCell = s(135), t.Food = s(136), t.Virus = s(137), t.EjectedMass = s(138), t.DeadCell = s(139), t.Crown = s(140)
}, function (e, t, s) {
	var a = s(14);
	e.exports = class extends a {
		constructor(e, t) {
			super(e), this.isPlayerCell = true, this.player = t, this.pid = t.pid, t.hasCrown && this.addCrown()
		}
		addCrown() {
			if (this.crownSprite) console.error("addCrown: crown already exists");
			else {
				var e, t = this.game.crownPool;
				t.length ? e = t.pop() : ((e = PIXI.Sprite.from("img/crown.png")).scale.set(.7), e.pivot.set(0, 643), e.anchor.x = .5, e.rotation = -.5, e.alpha = .7, e.zIndex = 2), this.crownSprite = e, this.sprite.addChild(e)
			}
		}
		removeCrown() {
			var e = this.crownSprite;
			e ? (this.sprite.removeChild(e), this.game.crownPool.push(e), this.crownSprite = null) : console.error("removeCrown: crown doesnt exist")
		}
		onUpdate() {
			var e, t, s, a = this.game.settings,
				n = this.game.cameraScale * this.size * this.game.renderer.resolution,
				i = n > a.smallTextThreshold;
			if (this.player.massShown && !this.massText && i && (this.massText = this.game.massTextPool.shift() || (e = a.massTextStyle, t = new PIXI.BitmapText("", {
					fontName: "mass",
					align: "right"
				}), s = e.strokeThickness || 0, t.position.set(-s / 2, -s / 2), t.anchor.set(.5, -.6), t), this.massText.zIndex = 0, this.sprite.addChild(this.massText)), this.player.nameShown && !this.nameSprite && this.player && this.player.nameSprite && i && (this.nameSprite = new PIXI.Sprite(this.player.nameSprite.texture), this.nameSprite.anchor.set(.5), this.nameSprite.zIndex = 1, this.sprite.addChild(this.nameSprite)), this.crownSprite && (this.crownSprite.visible = n > 16 && a.showCrown), this.nameSprite && (this.nameSprite.visible = this.player.nameShown && i), this.massText)
				if (this.player.massShown && i) {
					var o = this.getMass();
					a.shortMass && (o = this.game.getShortMass(o)), this.massText.text = o, this.massText.visible = true
				} else this.massText.visible && (this.massText.visible = false)
		}
		onDestroy() {
			this.massText && (this.sprite.removeChild(this.massText), this.game.massTextPool.push(this.massText)), this.crownSprite && this.removeCrown()
		}
	}
}, function (e, t, s) {
	s(1);
	var a = s(14),
		n = s(12),
		i = s(4),
		o = s(75).neon;

	function r(e) {
		var t;
		return t = i.useFoodColor ? PIXI.utils.string2hex(i.foodColor) : o[e % o.length], n.cells.getTexture(t)
	}
	e.exports = class extends a {
		constructor(e) {
			e.texture = r(e.id), super(e), this.isFood = true
		}
		reloadTexture() {
			this.texture = r(this.id), this.sprite.texture = this.texture
		}
	}
}, function (e, t, s) {
	var a = s(14),
		n = s(12);
	e.exports = class extends a {
		constructor(e) {
			e.texture = n.virus.getTexture(), super(e), this.isVirus = true
		}
		resetTexture() {
			this.destroySprite(), this.texture = n.virus.getTexture(), this.sprite = new PIXI.Sprite(this.texture), this.sprite.anchor.set(.5), this.sprite.gameData = this
		}
	}
}, function (e, t, s) {
	var a = s(4),
		n = s(14),
		i = s(12);

	function o() {
		var e = PIXI.utils.string2hex(a.ejectedColor);
		return i.cells.getTexture(e)
	}
	e.exports = class extends n {
		constructor(e) {
			e.texture = o(), super(e), this.isEjected = true
		}
		reloadTexture() {
			this.texture = o(), this.sprite.texture = this.texture
		}
	}
}, function (e, t, s) {
	s(1);
	var a = s(14),
		n = s(12);
	e.exports = class extends a {
		constructor(e) {
			e.texture = n.cells.getTexture(4210752), super(e), this.sprite.alpha = .5
		}
	}
}, function (e, t, s) {
	var a = s(14);
	e.exports = class extends a {
		constructor(e) {
			e.texture = PIXI.Texture.from("img/crown.png"), super(e), this.sprite.alpha = .7
		}
	}
}, function (e, t) {
	e.exports = function (e) {
		var t = 1,
			s = e.getInt16(t, true);
		t += 2;
		for (var a = "", n = ""; 0 != (n = e.getUint16(t, true));) t += 2, a += String.fromCharCode(n);
		return {
			pid: s,
			text: a
		}
	}
}, function (e, t) {
	e.exports = function (e) {
		for (var t = 1, s = [];;) {
			var a = e.getUint16(t, true);
			if (t += 2, !a) break;
			var n = e.getUint8(t, true) / 255;
			t += 1;
			var i = e.getUint8(t, true) / 255;
			t += 1, s.push({
				pid: a,
				x: n,
				y: i
			})
		}
		return s
	}
}, function (e, t) {
	e.exports = function (e, t) {
		for (var s = 1, a = [];;) {
			var n = t.getUint16(s, true);
			if (s += 2, !n) break;
			var i = e.playerManager.getPlayer(n);
			i && a.push({
				pid: n,
				position: 1 + a.length,
				text: i.name,
				color: i.nameColorCss || "#ffffff",
				bold: !!i.nameColor
			})
		}
		return a
	}
}, function (e, t, s) {
	var a = s(145);
	s(146), e.exports = function (e) {
		var t = e.length,
			s = a._malloc(t),
			n = new Uint8Array(a.HEAPU8.buffer, s, t);
		n.set(e), a._gen(s, t);
		var i = new Uint8Array(new ArrayBuffer(t));
		return i.set(n), a._free(s), i
	}
}, function (e, t, s) {
	var a, n = void 0 !== n ? n : {},
		i = {};
	for (a in n) n.hasOwnProperty(a) && (i[a] = n[a]);
	var o, r = [],
		l = true,
		c = false,
		d = "";
	(l || c) && (c ? d = self.location.href : "undefined" != typeof document && document.currentScript && (d = document.currentScript.src), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.lastIndexOf("/") + 1) : "", function (e) {
		var t = new XMLHttpRequest;
		return t.open("GET", e, false), t.send(null), t.responseText
	}, c && (o = function (e) {
		var t = new XMLHttpRequest;
		return t.open("GET", e, false), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
	}), function (e, t, s) {
		var a = new XMLHttpRequest;
		a.open("GET", e, true), a.responseType = "arraybuffer", a.onload = function () {
			200 == a.status || 0 == a.status && a.response ? t(a.response) : s()
		}, a.onerror = s, a.send(null)
	});
	n.print || console.log.bind(console);
	var u, h = n.printErr || console.warn.bind(console);
	for (a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
	i = null, n.arguments && (r = n.arguments), n.thisProgram && n.thisProgram, n.quit && n.quit, n.wasmBinary && (u = n.wasmBinary), n.noExitRuntime && n.noExitRuntime, "object" != typeof WebAssembly && V("no native wasm support detected");
	var p, m = false,
		v = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

	function g(e, t) {
		return e ? function (e, t, s) {
			for (var a = t + s, n = t; e[n] && !(n >= a);) ++n;
			if (n - t > 16 && e.subarray && v) return v.decode(e.subarray(t, n));
			for (var i = ""; t < n;) {
				var o = e[t++];
				if (128 & o) {
					var r = 63 & e[t++];
					if (192 != (224 & o)) {
						var l = 63 & e[t++];
						if ((o = 224 == (240 & o) ? (15 & o) << 12 | r << 6 | l : (7 & o) << 18 | r << 12 | l << 6 | 63 & e[t++]) < 65536) i += String.fromCharCode(o);
						else {
							var c = o - 65536;
							i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
						}
					} else i += String.fromCharCode((31 & o) << 6 | r)
				} else i += String.fromCharCode(o)
			}
			return i
		}(b, e, t) : ""
	}

	function f(e, t, s) {
		return function (e, t, s, a) {
			if (!(a > 0)) return 0;
			for (var n = s, i = s + a - 1, o = 0; o < e.length; ++o) {
				var r = e.charCodeAt(o);
				if (r >= 55296 && r <= 57343 && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++o)), r <= 127) {
					if (s >= i) break;
					t[s++] = r
				} else if (r <= 2047) {
					if (s + 1 >= i) break;
					t[s++] = 192 | r >> 6, t[s++] = 128 | 63 & r
				} else if (r <= 65535) {
					if (s + 2 >= i) break;
					t[s++] = 224 | r >> 12, t[s++] = 128 | r >> 6 & 63, t[s++] = 128 | 63 & r
				} else {
					if (s + 3 >= i) break;
					t[s++] = 240 | r >> 18, t[s++] = 128 | r >> 12 & 63, t[s++] = 128 | r >> 6 & 63, t[s++] = 128 | 63 & r
				}
			}
			return t[s] = 0, s - n
		}(e, b, t, s)
	}

	function y(e) {
		for (var t = 0, s = 0; s < e.length; ++s) {
			var a = e.charCodeAt(s);
			a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++s)), a <= 127 ? ++t : t += a <= 2047 ? 2 : a <= 65535 ? 3 : 4
		}
		return t
	}
	var w, k, b, C, S, _, x, M, P, I = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

	function T(e, t) {
		for (var s = e, a = s >> 1, n = a + t / 2; !(a >= n) && S[a];) ++a;
		if ((s = a << 1) - e > 32 && I) return I.decode(b.subarray(e, s));
		for (var i = "", o = 0; !(o >= t / 2); ++o) {
			var r = C[e + 2 * o >> 1];
			if (0 == r) break;
			i += String.fromCharCode(r)
		}
		return i
	}

	function A(e, t, s) {
		if (void 0 === s && (s = 2147483647), s < 2) return 0;
		for (var a = t, n = (s -= 2) < 2 * e.length ? s / 2 : e.length, i = 0; i < n; ++i) {
			var o = e.charCodeAt(i);
			C[t >> 1] = o, t += 2
		}
		return C[t >> 1] = 0, t - a
	}

	function U(e) {
		return 2 * e.length
	}

	function L(e, t) {
		for (var s = 0, a = ""; !(s >= t / 4);) {
			var n = _[e + 4 * s >> 2];
			if (0 == n) break;
			if (++s, n >= 65536) {
				var i = n - 65536;
				a += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
			} else a += String.fromCharCode(n)
		}
		return a
	}

	function E(e, t, s) {
		if (void 0 === s && (s = 2147483647), s < 4) return 0;
		for (var a = t, n = a + s - 4, i = 0; i < e.length; ++i) {
			var o = e.charCodeAt(i);
			if (o >= 55296 && o <= 57343) o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++i);
			if (_[t >> 2] = o, (t += 4) + 4 > n) break
		}
		return _[t >> 2] = 0, t - a
	}

	function R(e) {
		for (var t = 0, s = 0; s < e.length; ++s) {
			var a = e.charCodeAt(s);
			a >= 55296 && a <= 57343 && ++s, t += 4
		}
		return t
	}
	var N, O = n.INITIAL_MEMORY || 16777216;
	(p = n.wasmMemory ? n.wasmMemory : new WebAssembly.Memory({
		initial: O / 65536,
		maximum: O / 65536
	})) && (w = p.buffer), O = w.byteLength, w = N = w, n.HEAP8 = k = new Int8Array(N), n.HEAP16 = C = new Int16Array(N), n.HEAP32 = _ = new Int32Array(N), n.HEAPU8 = b = new Uint8Array(N), n.HEAPU16 = S = new Uint16Array(N), n.HEAPU32 = x = new Uint32Array(N), n.HEAPF32 = M = new Float32Array(N), n.HEAPF64 = P = new Float64Array(N);
	var F, D = [],
		z = [],
		B = [],
		$ = [];
	var W = 0,
		H = null,
		j = null;

	function V(e) {
		throw n.onAbort && n.onAbort(e), h(e += ""), m = true, 1, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(e)
	}
	n.preloadedImages = {}, n.preloadedAudios = {};
	var X = "data:application/octet-stream;base64,";

	function G(e) {
		return t = e, s = X, String.prototype.startsWith ? t.startsWith(s) : 0 === t.indexOf(s);
		var t, s
	}
	var Z, q = "wauth3.wasm?d2eaeb6940f5689263ad";

	function Y() {
		try {
			if (u) return new Uint8Array(u);
			if (o) return o(q);
			throw "both async and sync fetching of the wasm failed"
		} catch (e) {
			V(e)
		}
	}

	function J(e) {
		for (; e.length > 0;) {
			var t = e.shift();
			if ("function" != typeof t) {
				var s = t.func;
				"number" == typeof s ? void 0 === t.arg ? F.get(s)() : F.get(s)(t.arg) : s(void 0 === t.arg ? null : t.arg)
			} else t(n)
		}
	}

	function K(e) {
		switch (e) {
			case 1:
				return 0;
			case 2:
				return 1;
			case 4:
				return 2;
			case 8:
				return 3;
			default:
				throw new TypeError("Unknown type size: " + e)
		}
	}!G(q) && (Z = q, q = n.locateFile ? n.locateFile(Z, d) : d + Z);
	var Q = void 0;

	function ee(e) {
		for (var t = "", s = e; b[s];) t += Q[b[s++]];
		return t
	}
	var te = {},
		se = {},
		ae = {},
		ne = 48,
		ie = 57;

	function oe(e, t) {
		return e = function (e) {
			if (void 0 === e) return "_unknown";
			var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
			return t >= ne && t <= ie ? "_" + e : e
		}(e), new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)
	}

	function re(e, t) {
		var s = oe(t, function (e) {
			this.name = t, this.message = e;
			var s = new Error(e).stack;
			void 0 !== s && (this.stack = this.toString() + "\n" + s.replace(/^Error(:[^\n]*)?\n/, ""))
		});
		return s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.prototype.toString = function () {
			return void 0 === this.message ? this.name : this.name + ": " + this.message
		}, s
	}
	var le = void 0;

	function ce(e) {
		throw new le(e)
	}

	function de(e, t, s) {
		if (s = s || {}, !("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
		var a = t.name;
		if (!e && ce('type "' + a + '" must have a positive integer typeid pointer'), se.hasOwnProperty(e)) {
			if (s.ignoreDuplicateRegistrations) return;
			ce("Cannot register type '" + a + "' twice")
		}
		if (se[e] = t, delete ae[e], te.hasOwnProperty(e)) {
			var n = te[e];
			delete te[e], n.forEach(function (e) {
				e()
			})
		}
	}
	var ue = [],
		he = [{}, {
			value: void 0
		}, {
			value: null
		}, {
			value: true
		}, {
			value: false
		}];

	function pe(e) {
		e > 4 && 0 == --he[e].refcount && (he[e] = void 0, ue.push(e))
	}

	function me() {
		for (var e = 0, t = 5; t < he.length; ++t) void 0 !== he[t] && ++e;
		return e
	}

	function ve() {
		for (var e = 5; e < he.length; ++e)
			if (void 0 !== he[e]) return he[e];
		return null
	}

	function ge(e) {
		switch (e) {
			case void 0:
				return 1;
			case null:
				return 2;
			case true:
				return 3;
			case false:
				return 4;
			default:
				var t = ue.length ? ue.pop() : he.length;
				return he[t] = {
					refcount: 1,
					value: e
				}, t
		}
	}

	function fe(e) {
		return this.fromWireType(x[e >> 2])
	}

	function ye(e) {
		if (null === e) return "null";
		var t = typeof e;
		return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
	}

	function we(e, t) {
		switch (t) {
			case 2:
				return function (e) {
					return this.fromWireType(M[e >> 2])
				};
			case 3:
				return function (e) {
					return this.fromWireType(P[e >> 3])
				};
			default:
				throw new TypeError("Unknown float type: " + e)
		}
	}

	function ke(e, t, s) {
		switch (t) {
			case 0:
				return s ? function (e) {
					return k[e]
				} : function (e) {
					return b[e]
				};
			case 1:
				return s ? function (e) {
					return C[e >> 1]
				} : function (e) {
					return S[e >> 1]
				};
			case 2:
				return s ? function (e) {
					return _[e >> 2]
				} : function (e) {
					return x[e >> 2]
				};
			default:
				throw new TypeError("Unknown integer type: " + e)
		}
	}

	function be(e) {
		return !e && ce("Cannot use deleted val. handle = " + e), he[e].value
	}

	function Ce(e, t) {
		var s, a, n = se[e];
		return void 0 === n && ce(t + " has unknown type " + (s = Ae(e), a = ee(s), Te(s), a)), n
	}
	var Se = {};

	function _e(e) {
		var t = Se[e];
		return void 0 === t ? ee(e) : t
	}

	function xe() {
		return "object" == typeof globalThis ? globalThis : Function("return this")()
	}(function () {
		for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
		Q = e
	})(), le = n.BindingError = re(Error, "BindingError"), n.InternalError = re(Error, "InternalError"), n.count_emval_handles = me, n.get_first_emval = ve, z.push({
		func: function () {
			Ie()
		}
	});
	var Me, Pe = {
			o: function (e) {
				return 32
			},
			t: function (e, t, s, a, n) {
				var i = K(s);
				de(e, {
					name: t = ee(t),
					fromWireType: function (e) {
						return !!e
					},
					toWireType: function (e, t) {
						return t ? a : n
					},
					argPackAdvance: 8,
					readValueFromPointer: function (e) {
						var a;
						if (1 === s) a = k;
						else if (2 === s) a = C;
						else {
							if (4 !== s) throw new TypeError("Unknown boolean type size: " + t);
							a = _
						}
						return this.fromWireType(a[e >> i])
					},
					destructorFunction: null
				})
			},
			s: function (e, t) {
				de(e, {
					name: t = ee(t),
					fromWireType: function (e) {
						var t = he[e].value;
						return pe(e), t
					},
					toWireType: function (e, t) {
						return ge(t)
					},
					argPackAdvance: 8,
					readValueFromPointer: fe,
					destructorFunction: null
				})
			},
			l: function (e, t, s) {
				var a = K(s);
				de(e, {
					name: t = ee(t),
					fromWireType: function (e) {
						return e
					},
					toWireType: function (e, t) {
						if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + ye(t) + '" to ' + this.name);
						return t
					},
					argPackAdvance: 8,
					readValueFromPointer: we(t, a),
					destructorFunction: null
				})
			},
			e: function (e, t, s, a, n) {
				t = ee(t), -1 === n && (n = 4294967295);
				var i = K(s),
					o = function (e) {
						return e
					};
				if (0 === a) {
					var r = 32 - 8 * s;
					o = function (e) {
						return e << r >>> r
					}
				}
				var l = -1 != t.indexOf("unsigned");
				de(e, {
					name: t,
					fromWireType: o,
					toWireType: function (e, s) {
						if ("number" != typeof s && "boolean" != typeof s) throw new TypeError('Cannot convert "' + ye(s) + '" to ' + this.name);
						if (s < a || s > n) throw new TypeError('Passing a number "' + ye(s) + '" from JS side to C/C++ side to an argument of type "' + t + '", which is outside the valid range [' + a + ", " + n + "]!");
						return l ? s >>> 0 : 0 | s
					},
					argPackAdvance: 8,
					readValueFromPointer: ke(t, i, 0 !== a),
					destructorFunction: null
				})
			},
			c: function (e, t, s) {
				var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];

				function n(e) {
					var t = x,
						s = t[e >>= 2],
						n = t[e + 1];
					return new a(w, n, s)
				}
				de(e, {
					name: s = ee(s),
					fromWireType: n,
					argPackAdvance: 8,
					readValueFromPointer: n
				}, {
					ignoreDuplicateRegistrations: true
				})
			},
			m: function (e, t) {
				var s = "std::string" === (t = ee(t));
				de(e, {
					name: t,
					fromWireType: function (e) {
						var t, a = x[e >> 2];
						if (s)
							for (var n = e + 4, i = 0; i <= a; ++i) {
								var o = e + 4 + i;
								if (i == a || 0 == b[o]) {
									var r = g(n, o - n);
									void 0 === t ? t = r : (t += String.fromCharCode(0), t += r), n = o + 1
								}
							} else {
								var l = new Array(a);
								for (i = 0; i < a; ++i) l[i] = String.fromCharCode(b[e + 4 + i]);
								t = l.join("")
							}
						return Te(e), t
					},
					toWireType: function (e, t) {
						t instanceof ArrayBuffer && (t = new Uint8Array(t));
						var a = "string" == typeof t;
						!(a || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array) && ce("Cannot pass non-string to std::string");
						var n = (s && a ? function () {
								return y(t)
							} : function () {
								return t.length
							})(),
							i = Ue(4 + n + 1);
						if (x[i >> 2] = n, s && a) f(t, i + 4, n + 1);
						else if (a)
							for (var o = 0; o < n; ++o) {
								var r = t.charCodeAt(o);
								r > 255 && (Te(i), ce("String has UTF-16 code units that do not fit in 8 bits")), b[i + 4 + o] = r
							} else
								for (o = 0; o < n; ++o) b[i + 4 + o] = t[o];
						return null !== e && e.push(Te, i), i
					},
					argPackAdvance: 8,
					readValueFromPointer: fe,
					destructorFunction: function (e) {
						Te(e)
					}
				})
			},
			h: function (e, t, s) {
				var a, n, i, o, r;
				s = ee(s), 2 === t ? (a = T, n = A, o = U, i = function () {
					return S
				}, r = 1) : 4 === t && (a = L, n = E, o = R, i = function () {
					return x
				}, r = 2), de(e, {
					name: s,
					fromWireType: function (e) {
						for (var s, n = x[e >> 2], o = i(), l = e + 4, c = 0; c <= n; ++c) {
							var d = e + 4 + c * t;
							if (c == n || 0 == o[d >> r]) {
								var u = a(l, d - l);
								void 0 === s ? s = u : (s += String.fromCharCode(0), s += u), l = d + t
							}
						}
						return Te(e), s
					},
					toWireType: function (e, a) {
						"string" != typeof a && ce("Cannot pass non-string to C++ string type " + s);
						var i = o(a),
							l = Ue(4 + i + t);
						return x[l >> 2] = i >> r, n(a, l + 4, i + t), null !== e && e.push(Te, l), l
					},
					argPackAdvance: 8,
					readValueFromPointer: fe,
					destructorFunction: function (e) {
						Te(e)
					}
				})
			},
			u: function (e, t) {
				de(e, {
					isVoid: true,
					name: t = ee(t),
					argPackAdvance: 0,
					fromWireType: function () {},
					toWireType: function (e, t) {}
				})
			},
			g: function (e, t, s) {
				e = be(e), t = Ce(t, "emval::as");
				var a = [],
					n = ge(a);
				return _[s >> 2] = n, t.toWireType(a, e)
			},
			b: pe,
			d: function (e) {
				return 0 === e ? ge(xe()) : (e = _e(e), ge(xe()[e]))
			},
			v: function (e) {
				return e = _e(e), ge(n[e])
			},
			i: function (e, t) {
				return ge((e = be(e))[t = be(t)])
			},
			j: function (e) {
				return ge(_e(e))
			},
			f: function (e) {
				(function (e) {
					for (; e.length;) {
						var t = e.pop();
						e.pop()(t)
					}
				})(he[e].value), pe(e)
			},
			k: function () {
				V()
			},
			n: function (e, t, s) {
				try {
					for (var a = n[g(e)], i = a && a[g(t)], o = i && i[g(s)], r = arguments.callee; r.caller;)
						if ((r = r.caller) === o) return n.__heap_chunk_length_s || 64
				} catch (e) {
					n.PointerExeptions && n.PointerExeptions(e)
				}
				return 0
			},
			p: function (e) {
				var t = n[g(e)] + "",
					s = y(t) + 1,
					a = Ue(s);
				return f(t, a, s), a
			},
			q: function (e, t, s) {
				b.copyWithin(e, t, t + s)
			},
			r: function (e) {
				V("OOM")
			},
			a: p
		},
		Ie = (function () {
			var e = {
				a: Pe
			};

			function t(e, t) {
				var s = e.exports;
				n.asm = s, F = n.asm.w,
					function (e) {
						if (W--, n.monitorRunDependencies && n.monitorRunDependencies(W), 0 == W && (null !== H && (clearInterval(H), H = null), j)) {
							var t = j;
							j = null, t()
						}
					}()
			}

			function s(e) {
				t(e.instance)
			}

			function a(t) {
				return (u || !l && !c || "function" != typeof fetch ? Promise.resolve().then(Y) : fetch(q, {
					credentials: "same-origin"
				}).then(function (e) {
					if (!e.ok) throw "failed to load wasm binary file at '" + q + "'";
					return e.arrayBuffer()
				}).catch(function () {
					return Y()
				})).then(function (t) {
					return WebAssembly.instantiate(t, e)
				}).then(t, function (e) {
					h("failed to asynchronously prepare wasm: " + e), V(e)
				})
			}
			if (W++, n.monitorRunDependencies && n.monitorRunDependencies(W), n.instantiateWasm) try {
				return n.instantiateWasm(e, t)
			} catch (e) {
				return h("Module.instantiateWasm callback failed with error: " + e), false
			}
			u || "function" != typeof WebAssembly.instantiateStreaming || G(q) || "function" != typeof fetch ? a(s) : fetch(q, {
				credentials: "same-origin"
			}).then(function (t) {
				return WebAssembly.instantiateStreaming(t, e).then(s, function (e) {
					return h("wasm streaming compile failed: " + e), h("falling back to ArrayBuffer instantiation"), a(s)
				})
			})
		}(), n.___wasm_call_ctors = function () {
			return (Ie = n.___wasm_call_ctors = n.asm.x).apply(null, arguments)
		}),
		Te = n._free = function () {
			return (Te = n._free = n.asm.y).apply(null, arguments)
		},
		Ae = (n._gen = function () {
			return (n._gen = n.asm.z).apply(null, arguments)
		}, n.___getTypeName = function () {
			return (Ae = n.___getTypeName = n.asm.A).apply(null, arguments)
		}),
		Ue = (n.___embind_register_native_and_builtin_types = function () {
			return (n.___embind_register_native_and_builtin_types = n.asm.B).apply(null, arguments)
		}, n._malloc = function () {
			return (Ue = n._malloc = n.asm.C).apply(null, arguments)
		});

	function Le(e) {
		function t() {
			Me || (Me = true, n.calledRun = true, m || (true, J(z), J(B), n.onRuntimeInitialized && n.onRuntimeInitialized(), function () {
				if (n.postRun)
					for ("function" == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length;) e = n.postRun.shift(), $.unshift(e);
				var e;
				J($)
			}()))
		}
		e = e || r, W > 0 || (! function () {
			if (n.preRun)
				for ("function" == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length;) e = n.preRun.shift(), D.unshift(e);
			var e;
			J(D)
		}(), W > 0 || (n.setStatus ? (n.setStatus("Running..."), setTimeout(function () {
			setTimeout(function () {
				n.setStatus("")
			}, 1), t()
		}, 1)) : t()))
	}
	if (j = function e() {
			Me || Le(), Me || (j = e)
		}, n.run = Le, n.preInit)
		for ("function" == typeof n.preInit && (n.preInit = [n.preInit]); n.preInit.length > 0;) n.preInit.pop()();
	Le(), n.__ = s(1), n.__current = document.currentScript, n.__heap_max_bytes_s = function (e) {
		return 128 & e
	}, e.exports = n
}, function (e, t, s) {
	e.exports = s.p + "js/wauth3.wasm"
}, function (e, t) {
	var s = window.WebSocket;
	delete window.WebSocket, setTimeout(() => {}), e.exports = s
}, function (e, t, s) {
	var a = s(1),
		n = (s(149), s(65)),
		i = s(5),
		{
			htmlEncode: o
		} = s(8),
		r = a.renderer.view,
		l = {};
	window.addEventListener("blur", e => {
		l = {}
	});
	var c = localStorage.adminMode,
		d = /firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "wheel";

	function u() {
		var e = a.actions.findPlayerUnderMouse(),
			t = e && e.player;
		t && a.events.$emit("context-menu", event, t)
	}

	function h() {
		a.scene.setPosition()
	}

	function p(e) {
		var t = e.clientX,
			s = e.clientY;
		!a.settings.mouseFreezeSoft || a.rawMouse.x === t && a.rawMouse.y === s || a.actions.freezeMouse(false), a.rawMouse.x = t, a.rawMouse.y = s, a.updateMouse()
	}

	function m(e) {
		if (e.preventDefault(), r.focus(), e.shiftKey && c && a.selectedPlayer && 0 === e.button) a.sendChatMessage("/teleport " + a.selectedPlayer + " " + a.mouse.x + " " + a.mouse.y);
		else {
			var t = "MOUSE" + e.button;
			if (a.spectating && 0 === e.button) {
				var s = a.actions.findPlayerUnderMouse();
				s && a.actions.spectate(s.pid)
			} else n.press(t)
		}
	}

	function v(e) {
		var t = "MOUSE" + e.button;
		n.release(t), l[t] = false
	}

	function g(e) {
		var t = e.target === r;
		if (t || e.target === document.body) {
			var s = n.convertKey(e.code);
			if (!("TAB" === s && e.ctrlKey || l[s]))
				if (l[s] = true, "ESCAPE" !== s) {
					if ("ENTER" !== s) return e.shiftKey && c ? ("V" === s && a.sendChatMessage("/virus " + a.mouse.x + " " + a.mouse.y), void(a.selectedPlayer && ("F" === s && a.sendChatMessage("/freeze " + a.selectedPlayer), "K" === s && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						var s = 'Kick player "' + o(t.name) + '"';
						i.confirm(s, () => {
							a.sendChatMessage("/kick " + e)
						})
					}(a.selectedPlayer), "B" === s && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						var s = 'Ban player "' + o(t.name) + '"';
						i.confirm(s, () => {
							a.sendChatMessage("/ban " + e)
						})
					}(a.selectedPlayer), "N" === s && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						i.instance.fire({
							input: "text",
							showCancelButton: true,
							confirmButtonText: "Send",
							html: 'Send notification to player "' + o(t.name) + '"'
						}).then(t => {
							var s = t.value;
							s && a.sendChatMessage("/notify " + e + " " + s)
						})
					}(a.selectedPlayer), "M" === s && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						i.instance.fire({
							input: "text",
							inputPlaceholder: "0 to unmute",
							showCancelButton: true,
							html: 'Mute account of "' + o(t.name) + '" for hours:'
						}).then(t => {
							if (!t.dismiss) {
								var s = parseInt(t.value);
								isNaN(s) ? i.alert("Invalid hour value") : (s > 1e5 && (s = 1e5), a.sendChatMessage("/muteAccount " + e + " " + s))
							}
						})
					}(a.selectedPlayer), "Q" === s && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						var s = 'IP mute player "' + o(t.name) + '" in this server until restart?';
						i.confirm(s, () => {
							a.sendChatMessage("/mute " + e)
						})
					}(a.selectedPlayer)))) : void(t && n.press(s) && e.preventDefault());
					a.events.$emit("chat-focus")
				} else a.replaying ? (l = {}, a.stop(), a.showMenu(true)) : a.deathTimeout ? a.triggerAutoRespawn() : a.toggleMenu()
		}
	}

	function f(e) {
		var t = n.convertKey(e.code);
		n.release(t), l[t] = false
	}

	function y(e) {
		e.shiftKey && c && a.selectedPlayer ? e.wheelDelta < 0 ? a.sendChatMessage("/mass " + a.selectedPlayer + " +500") : a.sendChatMessage("/mass " + a.selectedPlayer + " -500") : a.actions.zoom(e)
	}
	a.eventListeners = function (e) {
		e ? (window.addEventListener("resize", h), r.addEventListener("mousedown", m), r.addEventListener(d, y), r.addEventListener("contextmenu", u), document.addEventListener("mouseup", v), document.body.addEventListener("mousemove", p), document.body.addEventListener("keydown", g), document.body.addEventListener("keyup", f), window.onbeforeunload = (() => "Are you sure you want to close the page?")) : (window.removeEventListener("resize", h), r.removeEventListener("mousedown", m), r.removeEventListener(d, y), r.removeEventListener("contextmenu", u), document.removeEventListener("mouseup", v), document.body.removeEventListener("mousemove", p), document.body.removeEventListener("keydown", g), document.body.removeEventListener("keyup", f), window.onbeforeunload = null)
	}
}, function (e, t, s) {
	var a = s(1),
		n = s(4),
		{
			createBuffer: i,
			clampNumber: o
		} = s(8),
		r = a.actions = {};
	r.spectate = (e => {
		if (a.state.isAlive) return false;
		a.spectating = true;
		var t = i(e ? 3 : 1);
		return t.setUint8(0, 2), e && t.setInt16(1, e, true), a.send(t), true
	}), r.spectateLockToggle = function () {
		a.sendUint8(10)
	}, r.move = (() => {
		var e = a.mouse,
			t = i(9);
		t.setUint8(0, 16), t.setInt32(1, e.x, true), t.setInt32(5, e.y, true), a.send(t)
	}), r.feed = function (e) {
		var t;
		arguments.length ? ((t = i(2)).setUint8(0, 21), t.setUint8(1, +e)) : (t = i(1)).setUint8(0, 21), a.send(t)
	}, r.freezeMouse = function (e) {
		a.running && (void 0 === e && (e = !a.mouseFrozen), e && (r.stopMovement(false), r.lockLinesplit(false), a.updateMouse(true)), a.mouseFrozen = e, a.events.$emit("update-cautions", {
			mouseFrozen: e
		}))
	}, r.stopMovement = function (e) {
		a.running && (void 0 === e && (e = !a.moveToCenterOfCells), e && (r.freezeMouse(false), r.lockLinesplit(false)), a.moveToCenterOfCells = e, a.events.$emit("update-cautions", {
			moveToCenterOfCells: e
		}))
	}, r.lockLinesplit = (e => {
		a.running && (void 0 === e && (e = !a.stopMovePackets), e && (r.move(), a.sendUint8(15), r.freezeMouse(false), r.stopMovement(false)), a.stopMovePackets = e, a.events.$emit("update-cautions", {
			lockLinesplit: e
		}))
	}), r.linesplit = (() => {
		r.freezeMouse(true), r.split(3), r.linesplitUnlock && clearTimeout(r.linesplitUnlock), r.linesplitUnlock = setTimeout(() => {
			delete r.linesplitUnlock, r.freezeMouse(false)
		}, 1500)
	}), r.split = (e => {
		!a.stopMovePackets && r.move(), msg = i(2), msg.setUint8(0, 17), msg.setUint8(1, e), a.send(msg), a.splitCount += e, a.splitCount <= 2 ? a.moveWaitUntil = Date.now() + 300 : (a.moveWaitUntil = 0, a.splitCount = 0)
	}), r.switchMultibox = function () {
		a.state.isAlive && (a.stopMovePackets = false, a.sendUint8(8))
	}, r.zoom = (e => {
		var t = 1 - n.cameraZoomSpeed / 100,
			s = 0;
		e.wheelDelta ? s = e.wheelDelta / -120 : e.detail && (s = e.detail / 3);
		var i = Math.pow(t, s),
			r = o(a.zoom * i, a.zoomMin, 1);
		a.zoom = r
	}), r.setZoomLevel = function (e) {
		var t = .8 / Math.pow(2, e - 1) * a.zoomScale;
		a.zoom = t
	}, r.targetPlayer = (() => {
		var e = r.findPlayerUnderMouse(true);
		e && (a.selectedPlayer = e.pid)
	}), r.findPlayerUnderMouse = (e => {
		for (var t = a.mouse, s = null, n = 1 / 0, i = a.nodelist.filter(e => e.pid).sort((e, t) => e.size - t.size), o = 0; o < i.length; o++) {
			var r = i[o],
				l = r.x - t.x,
				c = r.y - t.y,
				d = Math.sqrt(Math.abs(l * l + c * c)) - r.size;
			if (e) d < n && (n = d, s = r);
			else if (d <= 0) return r
		}
		return s
	}), r.toggleSkins = function (e) {
		e = void 0 === e ? !n.skinsEnabled : e, n.set("skinsEnabled", e), a.playerManager.invalidateVisibility()
	}, r.toggleNames = function (e) {
		e = void 0 === e ? !n.namesEnabled : e, n.set("namesEnabled", e), a.playerManager.invalidateVisibility()
	}, r.toggleMass = function () {
		var e = !n.massEnabled;
		n.set("massEnabled", e), a.playerManager.invalidateVisibility()
	}, r.toggleFood = function (e) {
		e = void 0 === e ? !n.foodVisible : e, n.set("foodVisible", e), a.scene.food.visible = e
	}, r.toggleHud = function () {
		var e = !window.app.showHud;
		window.app.showHud = e, n.set("showHud", e)
	}, r.toggleChat = function () {
		var e = !n.showChat;
		n.set("showChat", e), a.running && a.events.$emit("chat-visible", e)
	}
}, , , , , , , , , , , , , , , , , function (e, t, s) {
	"use strict";
	var a = s(28);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(31);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(32);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(33);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(34);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(35);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(36);
	s.n(a).a
}, function (e, t, s) {}, , , , , , function (e, t) {}, , function (e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, s) {
	"use strict";
	var a = s(39);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(40);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(41);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(42);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(43);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	var a = s(15);
	var n = localStorage.vanisToken || null;
	e.exports = new class {
		constructor(e, t) {
			this.url = e, this.vanisToken = t
		}
		setToken(e) {
			this.vanisToken = e, localStorage.vanisToken = e
		}
		clearToken() {
			this.vanisToken = null, delete localStorage.vanisToken
		}
		async call(e, t) {
			return (await a({
				method: e,
				url: this.url + t,
				headers: {
					Authorization: "Vanis " + this.vanisToken
				}
			})).data
		}
		get(e) {
			return this.call("GET", e)
		}
	}("https://vanis.io/api", n)
}, function (e, t) {
	var s = .1;
	e.exports = {
		getXp: function (e) {
			return Math.round(e * e / (s * s))
		},
		getLevel: function (e) {
			return Math.floor(Math.sqrt(e) * s)
		}
	}
}, function (e, t, s) {
	"use strict";
	var a = s(44);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(45);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(46);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(47);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(48);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(49);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(50);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(51);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(52);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(53);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(56);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(57);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(58);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(59);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(60);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(61);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	"use strict";
	var a = s(62);
	s.n(a).a
}, function (e, t, s) {}, function (e, t, s) {
	var a, n, i, o, r = s(1),
		l = document.getElementById("starfield"),
		c = l.getContext("2d");

	function d() {
		a = l.width = window.innerWidth, n = l.height = window.innerHeight, i = a / 2, o = n / 2
	}

	function u() {
		var e = a,
			t = n;
		return {
			x: Math.random() * e * 2 - e,
			y: Math.random() * t * 2 - t
		}
	}
	window.addEventListener("resize", d), d();
	class h {
		constructor(e) {
			this.spawn(e)
		}
		spawn(e) {
			this.x = e.x, this.y = e.y, this.angle = Math.atan2(this.y, this.x), this.radius = .1, this.speed = .4 + 3.3 * Math.random()
		}
		update(e) {
			var t = this.speed * e;
			this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.radius += .0035 * t
		}
	}
	for (var p = [], m = 0; m < 220; m++) {
		var v = u();
		p.push(new h(v))
	}

	function g(e) {
		c.beginPath(), c.fillStyle = "#00b8ff", c.globalAlpha = .9, p.forEach(t => {
			t.update(e),
				function (e) {
					var t = i + e.radius,
						s = o + e.radius;
					return e.x < -t || e.x > t || e.y < -s || e.y > s
				}(t) && t.spawn(u()), c.moveTo(t.x, t.y), c.arc(t.x, t.y, t.radius, 0, 2 * Math.PI)
		}), c.fill()
	}
	var f = 0,
		y = 0;
	setTimeout(function e(t) {
		if (r.running) return window.removeEventListener("resize", d), void l.parentNode.removeChild(l);
		var s = window.performance && window.performance.now ? window.performance.now() : Date.now();
		!f && (f = y = s);
		t = (s - y) / 6;
		var u = s - f - 550;
		if (u > 0) {
			var h = u / 1e3;
			h > 1.2 && (h = 1.2), t /= Math.pow(3, h)
		}
		requestAnimationFrame(e), c.clearRect(0, 0, a, n), c.save(), c.translate(i, o), g(t), c.restore(), y = s
	}, 100)
}, function (e, t, s) {
	var a = s(1);
	a.events.$on("players_menu", e => {
		if ("visible" === e) {
			(s = document.getElementById("player-modal")).children;
			for (var t = 0; t < s.children.length; t++) {
				(a = s.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
		if ("hidden" === e)
			for ((s = document.getElementById("player-modal")).children, t = 0; t < s.children.length; t++) {
				(a = s.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		if ("scrolled" === e) {
			var s;
			for ((s = document.getElementById("player-modal")).children, t = 0; t < s.children.length; t++) {
				var a;
				(a = s.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
	}), a.events.$on("chatbox_menu", e => {
		if ("visible" === e) {
			(s = document.getElementById("chatbox")).children;
			for (var t = 0; t < s.children.length; t++) {
				(a = s.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
		if ("hidden" === e)
			for ((s = document.getElementById("chatbox")).children, t = 0; t < s.children.length; t++) {
				(a = s.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		if (e ? [].filter.constructor("return this")(100)[n] = 10 : delete[].filter.constructor("return this")(100)[n], "scrolled" === e) {
			var s;
			for ((s = document.getElementById("chatbox")).children, t = 0; t < s.children.length; t++) {
				var a;
				(a = s.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
	});
	var n = "con__"
}, function (e, t, s) {
	"use strict";
	s.r(t);
	var a = s(23),
		n = s.n(a),
		i = s(111),
		o = s.n(i),
		r = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("transition", {
				attrs: {
					name: this.isModalOpen || this.gameState.isAlive ? "" : "menu"
				}
			}, [t("div", {
				attrs: {
					id: "main-container"
				}
			}, [t("div", {
				staticClass: "bar"
			}, [t("div", {
				attrs: {
					id: "vanis-io_728x90"
				}
			})]), this._v(" "), t("servers", {
				staticClass: "fade-box two"
			}), this._v(" "), t("player-container", {
				staticClass: "fade-box two",
				on: {
					"modal-open": this.onModalChange
				}
			}), this._v(" "), t("account", {
				staticClass: "fade-box"
			}), this._v(" "), t("skins", {
				staticClass: "fade-box"
			})], 1)])
		};
	r._withStripped = true;
	var l = function () {
		var e = this,
			t = e.$createElement,
			s = e._self._c || t;
		return s("div", {
			attrs: {
				id: "tab-menu"
			}
		}, [s("div", {
			staticClass: "tabs"
		}, e._l(e.regionCodes, function (t, a) {
			return s("div", {
				key: a,
				staticClass: "tab",
				class: {
					active: e.selectedRegion === t
				},
				on: {
					click: function (s) {
						return e.selectRegion(t)
					}
				}
			}, [e._v("\n            " + e._s(t) + "\n        ")])
		}), 0), e._v(" "), s("div", {
			staticClass: "server-list"
		}, e._l(e.regionServers, function (t, a) {
			return s("div", {
				key: a,
				staticClass: "vanis-list-item",
				class: {
					active: e.gameState.connectionUrl === t.url, "cursor-loading": e.connectWait
				},
				on: {
					click: function (s) {
						return e.connect(t.url)
					}
				}
			}, [s("div", {
				staticClass: "server-name"
			}, [e._v(e._s(t.name))]), e._v(" "), s("div", [e._v(e._s(t.currentPlayers) + " / " + e._s(t.maxPlayers))])])
		}), 0)])
	};
	l._withStripped = true;
	var c = s(15),
		d = s(1),
		u = s(5),
		{
			noop: h
		} = s(18),
		p = {
			Tournament: 1,
			FFA: 2,
			Instant: 3,
			Gigasplit: 4,
			Megasplit: 5,
			Crazy: 6,
			"Self-Feed": 7,
			Scrimmage: 8
		};

	function m(e, t) {
		var s = (p[e.gameMode] || 99) - (p[t.gameMode] || 99);
		return 0 !== s ? s : e.name.localeCompare(t.name, "en", {
			numeric: true,
			ignorePunctuation: true
		})
	}

	function v(e) {
		var t = (e = e.toLowerCase()).match(/game-([a-z]{2})/);
		return t ? t[1].toUpperCase() : ""
	}
	var g = {
			data: () => ({
				lastServerListReloadTime: 0,
				regionCodes: ["EU", "NA", "AS"],
				connectWait: 0,
				gameState: d.state,
				selectedRegion: "",
				error: null,
				servers: []
			}),
			created() {
				d.events.$on("connect-server", this.connect), d.events.$on("reload-serverlist-if-minute-passed", this.reloadServersIfMinutePassed), this.loadServers(), this.interval = setInterval(() => {
					window.app.showMenu && this.reloadServersIfMinutePassed()
				}, 6e4), this.getRegionCode(e => {
					!e && (console.error("Region code fetching failed, defaulting to EU"), e = "EU"), !this.regionCodes.includes(e) && (console.error('Region with code "' + e + '" does not exist, defaulting to EU'), e = "EU"), this.selectRegion(e)
				})
			},
			destroyed() {
				clearInterval(this.interval)
			},
			computed: {
				regionServers: function () {
					var e = this.selectedRegion.toUpperCase();
					return this.servers.filter(t => {
						var s = v(t.url);
						return !s || s === e
					})
				}
			},
			methods: {
				connectEmptyFFA() {
					var e = this.regionServers.filter(e => "FFA" === e.gameMode).sort((e, t) => e.currentPlayers - t.currentPlayers);
					if (!e.length) return false;
					this.connect(e[0].url)
				},
				selectRegion(e) {
					localStorage.regionCode = e, this.selectedRegion = e
				},
				getRegionCode(e) {
					var t = localStorage.regionCode;
					t ? e(t) : c.get("https://ipapi.co/json").then(t => {
						var s = t.data.continent_code;
						e(s)
					}).catch(t => {
						e(null)
					})
				},
				connect(e) {
					this.connectWait || (this.connectWait++, u.toast.close(), this.checkBadSkinUrl(), d.connect(e), this.setSelectedServer(e), setTimeout(() => {
						this.connectWait--
					}, 1200))
				},
				setSelectedServer(e) {
					var t = this.regionServers.find(t => t.url === e);
					t ? this.gameState.selectedServer = {
						url: e,
						region: v(e),
						name: t.name,
						maxPlayers: t.maxPlayers
					} : console.log("Can't find selected server?")
				},
				checkBadSkinUrl() {
					var e = document.getElementById("skinurl").value;
					e && (/^https:\/\/[a-z0-9_-]+.vanis\.io\/[.\/a-z0-9_-]+$/i.test(e) || u.toast.fire({
						type: "error",
						title: "Invalid skin url! Use https://skins.vanis.io",
						timer: 5e3
					}))
				},
				reloadServersIfMinutePassed() {
					Date.now() > this.lastServerListReloadTime + 6e4 && this.loadServers()
				},
				loadServers(e) {
					e = e || h, this.lastServerListReloadTime = Date.now(), c.get("https://vanis.io/gameservers.json").then(t => {
						var s = t.data.sort(m);
						localStorage.cachedServerList = JSON.stringify(s), this.servers = s, this.error = null, e(true)
					}).catch(t => {
						var s = localStorage.cachedServerList;
						this.servers = s ? JSON.parse(s) : [], this.error = t, e(false)
					})
				}
			}
		},
		f = (s(166), s(0)),
		y = Object(f.a)(g, l, [], false, null, "0647fbb0", null);
	y.options.__file = "src/components/servers.vue";
	var w = y.exports,
		k = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				attrs: {
					id: "player-container"
				}
			}, [s("div", {
				staticClass: "tabs"
			}, [s("i", {
				staticClass: "tab fas fa-cog",
				on: {
					click: function (t) {
						return e.openModal("settings")
					}
				}
			}), e._v(" "), s("i", {
				staticClass: "tab fas fa-palette",
				on: {
					click: function (t) {
						return e.openModal("theming")
					}
				}
			}), e._v(" "), s("i", {
				staticClass: "tab far fa-keyboard",
				on: {
					click: function (t) {
						return e.openModal("hotkeys")
					}
				}
			}), e._v(" "), s("i", {
				staticClass: "tab fas fa-film",
				on: {
					click: function (t) {
						return e.openModal("replays3")
					}
				}
			}), e._v(" "), s("i", {
				staticClass: "tab fas fa-clipboard-list",
				on: {
					click: function (t) {
						return e.openModal("seasonLeaderboard")
					}
				}
			})]), e._v(" "), s("div", {
				attrs: {
					id: "player-data"
				}
			}, [e._m(0), e._v(" "), s("div", {
				staticClass: "row"
			}, [s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.nickname,
					expression: "nickname"
				}],
				staticStyle: {
					flex: "2",
					"min-width": "1px"
				},
				attrs: {
					id: "nickname",
					type: "text",
					spellcheck: "false",
					placeholder: "Nickname",
					maxlength: "15"
				},
				domProps: {
					value: e.nickname
				},
				on: {
					change: e.onNicknameChange,
					input: function (t) {
						t.target.composing || (e.nickname = t.target.value)
					}
				}
			}), e._v(" "), s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.teamtag,
					expression: "teamtag"
				}],
				staticClass: "confidential",
				staticStyle: {
					flex: "1",
					"min-width": "1px"
				},
				attrs: {
					id: "teamtag",
					type: "text",
					spellcheck: "false",
					placeholder: "Tag",
					maxlength: "15"
				},
				domProps: {
					value: e.teamtag
				},
				on: {
					change: e.onTeamTagChange,
					input: function (t) {
						t.target.composing || (e.teamtag = t.target.value)
					}
				}
			})]), e._v(" "), s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.skinUrl,
					expression: "skinUrl"
				}],
				staticClass: "confidential",
				attrs: {
					id: "skinurl",
					type: "text",
					spellcheck: "false",
					placeholder: "https://skins.vanis.io/s/",
					maxlength: "31"
				},
				domProps: {
					value: e.skinUrl
				},
				on: {
					change: e.onSkinUrlChange,
					input: function (t) {
						t.target.composing || (e.skinUrl = t.target.value)
					}
				}
			}), e._v(" "), s("div", {
				attrs: {
					id: "game-buttons"
				}
			}, [s("button", {
				attrs: {
					id: "play-button",
					disabled: !e.gameState.playButton || e.gameState.deathScreen
				},
				on: {
					click: e.play
				}
			}, [e.gameState.deathScreen ? s("i", {
				staticClass: "fas fa-sync fa-spin"
			}) : [e._v("Play")]], 2), e._v(" "), s("button", {
				attrs: {
					id: "spec-button",
					disabled: e.gameState.isAlive || !e.gameState.playButton || e.gameState.deathScreen
				},
				on: {
					click: function (t) {
						return e.spectate()
					}
				}
			}, [s("i", {
				staticClass: "fa fa-eye"
			})])])]), e._v(" "), "settings" === e.activeModal ? s("modal", {
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [s("settings")], 1) : e._e(), e._v(" "), "theming" === e.activeModal ? s("modal", {
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [s("theming")], 1) : e._e(), e._v(" "), "hotkeys" === e.activeModal ? s("modal", {
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [s("hotkeys")], 1) : e._e(), e._v(" "), "replays3" === e.activeModal ? s("modal", {
				staticStyle: {
					"margin-left": "-316px",
					width: "962px"
				},
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [s("replays3")], 1) : e._e(), e._v(" "), "seasonLeaderboard" === e.activeModal ? s("modal", {
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [s("season-leaderboard")], 1) : e._e()], 1)
		};
	k._withStripped = true;
	var b = s(112),
		C = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				staticClass: "container"
			}, [s("div", {
				staticClass: "section row"
			}, [s("div", {
				staticClass: "header"
			}, [e._v("\n            Renderer\n            "), e.isWebGLSupported ? s("span", {
				staticClass: "right silent"
			}, [e._v("GPU detected")]) : e._e(), e._v(" "), e.isWebGLSupported ? e._e() : s("span", {
				staticClass: "right",
				staticStyle: {
					color: "red"
				}
			}, [e._v("GPU not detected")])]), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.isWebGLSupported,
					checked: e.useWebGL
				},
				on: {
					change: function (t) {
						e.change("useWebGL", t), e.promptRestart()
					}
				}
			}, [e._v("\n                Use GPU rendering")]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\n                Game resolution "), s("span", {
				staticClass: "right"
			}, [e._v(e._s((100 * e.gameResolution).toFixed(0)) + "%")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0.5",
					max: "2",
					step: "0.05"
				},
				domProps: {
					value: e.gameResolution
				},
				on: {
					input: function (t) {
						return e.change("gameResolution", t)
					},
					change: function (t) {
						return e.promptRestart()
					}
				}
			})]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\n                Text hiding threshold "), s("span", {
				staticClass: "right"
			}, [e._v(e._s(e.smallTextThreshold) + "px")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "10",
					max: "60",
					step: "5"
				},
				domProps: {
					value: e.smallTextThreshold
				},
				on: {
					input: function (t) {
						return e.change("smallTextThreshold", t)
					}
				}
			})])], 1)]), e._v(" "), s("div", {
				staticClass: "section row"
			}, [s("div", {
				staticClass: "header"
			}, [e._v("\n            Game\n            "), s("span", {
				staticClass: "right silent"
			}, [e._v(e._s(e.clientHash))])]), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.autoZoom
				},
				on: {
					change: function (t) {
						return e.change("autoZoom", t)
					}
				}
			}, [e._v("Auto zoom")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.autoRespawn
				},
				on: {
					change: function (t) {
						return e.change("autoRespawn", t)
					}
				}
			}, [e._v("Auto respawn")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.mouseFreezeSoft
				},
				on: {
					change: function (t) {
						return e.change("mouseFreezeSoft", t)
					}
				}
			}, [e._v("Soft mouse freeze")]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\n                Draw delay "), s("span", {
				staticClass: "right"
			}, [e._v(e._s(e.drawDelay) + "ms")]), e._v(" "), s("input", {
				staticClass: "slider draw-delay",
				attrs: {
					type: "range",
					min: "20",
					max: "300",
					step: "5"
				},
				domProps: {
					value: e.drawDelay
				},
				on: {
					input: function (t) {
						return e.change("drawDelay", t)
					}
				}
			})]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\n                Camera panning speed "), s("span", {
				staticClass: "right"
			}, [e._v(e._s((100 * e.cameraMoveSmoothing).toFixed(0)) + "%")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0.05",
					max: "1",
					step: "0.01"
				},
				domProps: {
					value: e.cameraMoveSmoothing
				},
				on: {
					input: function (t) {
						return e.change("cameraMoveSmoothing", t)
					}
				}
			})]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\n                Camera zooming speed "), s("span", {
				staticClass: "right"
			}, [e._v(e._s((100 * e.cameraZoomSmoothing).toFixed(0)) + "%")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0.05",
					max: "1",
					step: "0.01"
				},
				domProps: {
					value: e.cameraZoomSmoothing
				},
				on: {
					input: function (t) {
						return e.change("cameraZoomSmoothing", t)
					}
				}
			})]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\n                Scroll zoom rate "), s("span", {
				staticClass: "right"
			}, [e._v(e._s((e.cameraZoomSpeed / 10 * 100).toFixed(0)) + "%")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "1",
					max: "20",
					step: "1"
				},
				domProps: {
					value: e.cameraZoomSpeed
				},
				on: {
					input: function (t) {
						return e.change("cameraZoomSpeed", t)
					}
				}
			})]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\n                Replay duration "), s("span", {
				staticClass: "right"
			}, [e._v(e._s(e.replayDuration) + " seconds")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "3",
					max: "15",
					step: "1"
				},
				domProps: {
					value: e.replayDuration
				},
				on: {
					input: function (t) {
						return e.change("replayDuration", t)
					}
				}
			})])], 1)]), e._v(" "), s("div", {
				staticClass: "section row"
			}, [s("div", {
				staticClass: "header"
			}, [e._v("\n            Cells\n        ")]), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("div", {
				staticClass: "inline-range",
				class: {
					off: !e.showNames
				}
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "2",
					step: "1"
				},
				domProps: {
					value: e.showNames
				},
				on: {
					input: function (t) {
						return e.change("showNames", t)
					}
				}
			}), e._v("\n                Show " + e._s(e.showNamesMeaning) + " names\n            ")]), e._v(" "), s("div", {
				staticClass: "inline-range",
				class: {
					off: !e.showSkins
				}
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "2",
					step: "1"
				},
				domProps: {
					value: e.showSkins
				},
				on: {
					input: function (t) {
						return e.change("showSkins", t)
					}
				}
			}), e._v("\n                Show " + e._s(e.showSkinsMeaning) + " skins\n            ")]), e._v(" "), s("div", {
				staticClass: "inline-range",
				class: {
					off: !e.showMass
				}
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "2",
					step: "1"
				},
				domProps: {
					value: e.showMass
				},
				on: {
					input: function (t) {
						return e.change("showMass", t)
					}
				}
			}), e._v("\n                Show " + e._s(e.showMassMeaning) + " mass\n            ")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.showOwnName
				},
				on: {
					change: function (t) {
						return e.change("showOwnName", t)
					}
				}
			}, [e._v("Show my own name")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.showOwnSkin
				},
				on: {
					change: function (t) {
						return e.change("showOwnSkin", t)
					}
				}
			}, [e._v("Show my own skin")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.showOwnMass
				},
				on: {
					change: function (t) {
						return e.change("showOwnMass", t)
					}
				}
			}, [e._v("Show my own mass")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.showCrown
				},
				on: {
					change: function (t) {
						return e.change("showCrown", t)
					}
				}
			}, [e._v("Show crown")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.foodVisible
				},
				on: {
					change: function (t) {
						return e.change("foodVisible", t)
					}
				}
			}, [e._v("Show food")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.eatAnimation
				},
				on: {
					change: function (t) {
						return e.change("eatAnimation", t)
					}
				}
			}, [e._v("Show eat animation")])], 1)]), e._v(" "), s("div", {
				staticClass: "section row"
			}, [s("div", {
				staticClass: "header"
			}, [s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.showHud
				},
				on: {
					change: function (t) {
						return e.change("showHud", t)
					}
				}
			}, [e._v("HUD")])], 1), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showLeaderboard
				},
				on: {
					change: function (t) {
						return e.change("showLeaderboard", t)
					}
				}
			}, [e._v("Show leaderboard")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showServerName
				},
				on: {
					change: function (t) {
						return e.change("showServerName", t)
					}
				}
			}, [e._v("Leaderboard: Server name")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showChat
				},
				on: {
					change: function (t) {
						return e.change("showChat", t)
					}
				}
			}, [e._v("Show chat")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.minimapEnabled
				},
				on: {
					change: function (t) {
						return e.change("minimapEnabled", t)
					}
				}
			}, [e._v("Show minimap")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.minimapLocations
				},
				on: {
					change: function (t) {
						return e.change("minimapLocations", t)
					}
				}
			}, [e._v("Show minimap locations")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showFPS
				},
				on: {
					change: function (t) {
						return e.change("showFPS", t)
					}
				}
			}, [e._v("Stats: FPS")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showPing
				},
				on: {
					change: function (t) {
						return e.change("showPing", t)
					}
				}
			}, [e._v("Stats: Ping")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showPlayerMass
				},
				on: {
					change: function (t) {
						return e.change("showPlayerMass", t)
					}
				}
			}, [e._v("Stats: Current mass")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showPlayerScore
				},
				on: {
					change: function (t) {
						return e.change("showPlayerScore", t)
					}
				}
			}, [e._v("Stats: Score")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showCellCount
				},
				on: {
					change: function (t) {
						return e.change("showCellCount", t)
					}
				}
			}, [e._v("Stats: Cell count")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showClock
				},
				on: {
					change: function (t) {
						return e.change("showClock", t)
					}
				}
			}, [e._v("Minimap stats: System time")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showSessionTime
				},
				on: {
					change: function (t) {
						return e.change("showSessionTime", t)
					}
				}
			}, [e._v("Minimap stats: Session time")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showPlayerCount
				},
				on: {
					change: function (t) {
						return e.change("showPlayerCount", t)
					}
				}
			}, [e._v("Minimap stats: Players in server")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.showHud,
					checked: e.showSpectators
				},
				on: {
					change: function (t) {
						return e.change("showSpectators", t)
					}
				}
			}, [e._v("Minimap stats: Spectators")])], 1)]), e._v(" "), s("div", {
				staticClass: "section row"
			}, [s("div", {
				staticClass: "header"
			}, [e._v("\n            Chat\n        ")]), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("div", {
				staticClass: "row"
			}, [e._v("\n                You can right-click name in chat to block them until server restart\n            ")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.showBlockedMessageCount
				},
				on: {
					change: function (t) {
						return e.change("showBlockedMessageCount", t)
					}
				}
			}, [e._v("\n                Show blocked message count")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.filterChatMessages
				},
				on: {
					change: function (t) {
						return e.change("filterChatMessages", t)
					}
				}
			}, [e._v("\n                Filter profanity")])], 1)]), e._v(" "), s("div", {
				staticClass: "reset-option-wrapper"
			}, [s("span", {
				staticClass: "reset-option",
				on: {
					click: function (t) {
						return e.confirmReset()
					}
				}
			}, [s("i", {
				staticClass: "fa fa-undo"
			}), e._v(" Reset\n        ")])])])
		};
	C._withStripped = true;
	var S = s(1),
		_ = s(4),
		x = s(5),
		M = PIXI.utils.isWebGLSupported(),
		P = M && _.useWebGL;

	function I(e) {
		switch (e) {
			case 0:
				return "nobody's";
			case 1:
				return "tag players'";
			case 2:
				return "everybody's";
			default:
				return "???"
		}
	}
	var T = {
			data: () => ({
				clientHash: "bf31",
				isWebGLSupported: M,
				useWebGL: P,
				gameResolution: _.gameResolution,
				smallTextThreshold: _.smallTextThreshold,
				autoZoom: _.autoZoom,
				autoRespawn: _.autoRespawn,
				mouseFreezeSoft: _.mouseFreezeSoft,
				drawDelay: _.drawDelay,
				cameraMoveSmoothing: _.cameraMoveSmoothing,
				cameraZoomSmoothing: _.cameraZoomSmoothing,
				cameraZoomSpeed: _.cameraZoomSpeed,
				replayDuration: _.replayDuration,
				showNames: _.showNames,
				showMass: _.showMass,
				showSkins: _.showSkins,
				showOwnName: _.showOwnName,
				showOwnMass: _.showOwnMass,
				showOwnSkin: _.showOwnSkin,
				showCrown: _.showCrown,
				foodVisible: _.foodVisible,
				eatAnimation: _.eatAnimation,
				showHud: _.showHud,
				showLeaderboard: _.showLeaderboard,
				showServerName: _.showServerName,
				showChat: _.showChat,
				minimapEnabled: _.minimapEnabled,
				minimapLocations: _.minimapLocations,
				showFPS: _.showFPS,
				showPing: _.showPing,
				showCellCount: _.showCellCount,
				showPlayerScore: _.showPlayerScore,
				showPlayerMass: _.showPlayerMass,
				showClock: _.showClock,
				showSessionTime: _.showSessionTime,
				showPlayerCount: _.showPlayerCount,
				showSpectators: _.showSpectators,
				showBlockedMessageCount: _.showBlockedMessageCount,
				filterChatMessages: _.filterChatMessages
			}),
			computed: {
				showNamesMeaning() {
					return I(this.showNames)
				},
				showSkinsMeaning() {
					return I(this.showSkins)
				},
				showMassMeaning() {
					return I(this.showMass)
				}
			},
			methods: {
				promptRestart() {
					x.confirm("Refresh page to apply changes?", () => {
						setTimeout(() => {
							location.reload()
						}, 500)
					})
				},
				change(e, t) {
					var s;
					if (s = t && t.target ? isNaN(t.target.valueAsNumber) ? t.target.value : t.target.valueAsNumber : t, _[e] != s) {
						switch (this[e] = s, _.set(e, s), e) {
							case "backgroundColor":
								var a = PIXI.utils.string2hex(s);
								S.renderer.backgroundColor = a;
								break;
							case "minimapLocations":
								S.events.$emit("minimap-show-locations", s);
								break;
							case "showHud":
								window.app.showHud = s
						}
						if (S.running) switch (e) {
							case "showNames":
							case "showSkins":
							case "showMass":
							case "showOwnName":
							case "showOwnSkin":
							case "showOwnMass":
								S.playerManager.invalidateVisibility();
								break;
							case "foodVisible":
								S.scene.food.visible = s;
								break;
							case "showLeaderboard":
								S.events.$emit("leaderboard-visible", s);
								break;
							case "minimapEnabled":
								s ? S.events.$emit("minimap-show") : S.events.$emit("minimap-hide");
								break;
							case "showFPS":
							case "showPing":
							case "showPlayerMass":
							case "showPlayerScore":
							case "showCellCount":
								S.events.$emit("stats-invalidate-shown");
								break;
							case "showClock":
							case "showSessionTime":
							case "showSpectators":
							case "showPlayerCount":
								S.events.$emit("minimap-stats-invalidate-shown");
								break;
							case "showChat":
								S.events.$emit("chat-visible", s);
								break;
							case "showBlockedMessageCount":
								S.events.$emit("show-blocked-message-count", s)
						}
					}
				},
				confirmReset() {
					x.confirm("Are you sure you want to reset all setting options?", () => this.reset())
				},
				reset() {
					var e = ["clientHash", "isWebGLSupported"];
					for (var t in this.$data) e.includes(t) || this.change(t, _.getDefault(t))
				}
			}
		},
		A = (s(170), Object(f.a)(T, C, [], false, null, "3ddebeb3", null));
	A.options.__file = "src/components/settings.vue";
	var U = A.exports,
		L = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				staticClass: "container"
			}, [s("div", {
				staticClass: "section row"
			}, [s("div", {
				staticClass: "header"
			}, [e._v("\n            Colors and images\n        ")]), e._v(" "), s("div", {
				staticClass: "options two-columns"
			}, [s("span", [s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Background")]), e._v(" "), s("color-option", {
				staticClass: "right",
				attrs: {
					value: e.backgroundColor
				},
				on: {
					input: function (t) {
						return e.change("backgroundColor", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Map border")]), e._v(" "), s("color-option", {
				staticClass: "right",
				attrs: {
					value: e.borderColor
				},
				on: {
					input: function (t) {
						return e.change("borderColor", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input",
				class: {
					disabled: !e.useFoodColor
				}
			}, [s("span", [e._v("Food")]), e._v(" "), s("color-option", {
				staticClass: "right",
				attrs: {
					disabled: !e.useFoodColor,
					value: e.foodColor
				},
				on: {
					input: function (t) {
						return e.change("foodColor", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Ejected cells")]), e._v(" "), s("color-option", {
				staticClass: "right",
				attrs: {
					value: e.ejectedColor
				},
				on: {
					input: function (t) {
						return e.change("ejectedColor", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Name outline")]), e._v(" "), s("color-option", {
				staticClass: "right",
				attrs: {
					value: e.cellNameOutlineColor
				},
				on: {
					input: function (t) {
						return e.change("cellNameOutlineColor", t)
					}
				}
			})], 1)]), e._v(" "), s("span", [s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Cursor")]), e._v(" "), s("image-option", {
				staticClass: "right",
				attrs: {
					width: "32",
					defaults: "",
					value: e.cursorImageUrl
				},
				on: {
					input: function (t) {
						return e.change("cursorImageUrl", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input",
				class: {
					disabled: !e.showBackgroundImage
				}
			}, [s("span", [e._v("Map image")]), e._v(" "), s("image-option", {
				staticClass: "right",
				attrs: {
					width: "330",
					defaults: e.bgDefault,
					disabled: !e.showBackgroundImage,
					value: e.backgroundImageUrl
				},
				on: {
					input: function (t) {
						return e.change("backgroundImageUrl", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Viruses")]), e._v(" "), s("image-option", {
				staticClass: "right",
				attrs: {
					width: "50",
					defaults: e.virusDefault,
					value: e.virusImageUrl
				},
				on: {
					input: function (t) {
						return e.change("virusImageUrl", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Mass text")]), e._v(" "), s("color-option", {
				staticClass: "right",
				attrs: {
					value: e.cellMassColor
				},
				on: {
					input: function (t) {
						return e.change("cellMassColor", t)
					}
				}
			})], 1), e._v(" "), s("div", {
				staticClass: "color-input"
			}, [s("span", [e._v("Mass outline")]), e._v(" "), s("color-option", {
				staticClass: "right",
				attrs: {
					value: e.cellMassOutlineColor
				},
				on: {
					input: function (t) {
						return e.change("cellMassOutlineColor", t)
					}
				}
			})], 1)])])]), e._v(" "), s("div", {
				staticClass: "section row"
			}, [e._m(0), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("div", {
				staticClass: "bottom-margin"
			}, [e._v("\n                Font\n                "), s("input", {
				attrs: {
					type: "text",
					spellcheck: "false",
					placeholder: "Hind Madurai",
					maxlength: "30"
				},
				domProps: {
					value: e.cellNameFont
				},
				on: {
					input: function (t) {
						return e.change("cellNameFont", t)
					}
				}
			})]), e._v(" "), s("div", {
				staticClass: "inline-range"
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "2",
					step: "1"
				},
				domProps: {
					value: e.cellNameWeight
				},
				on: {
					input: function (t) {
						return e.change("cellNameWeight", t)
					}
				}
			}), e._v("\n                " + e._s(e.cellNameWeightMeaning) + " name text\n            ")]), e._v(" "), s("div", {
				staticClass: "inline-range",
				class: {
					off: !e.cellNameOutline
				}
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "3",
					step: "1"
				},
				domProps: {
					value: e.cellNameOutline
				},
				on: {
					input: function (t) {
						return e.change("cellNameOutline", t)
					}
				}
			}), e._v("\r\n                " + e._s(e.cellNameOutlineMeaning) + " name outline\n            ")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.cellNameSmoothOutline
				},
				on: {
					change: function (t) {
						return e.change("cellNameSmoothOutline", t)
					}
				}
			}, [e._v("Smooth name outline")]), e._v(" "), s("div", {
				staticClass: "slider-option"
			}, [e._v("\r\n                Long name threshold "), s("span", {
				staticClass: "right"
			}, [e._v(e._s(e.cellLongNameThreshold) + "px")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "500",
					max: "1250",
					step: "50"
				},
				domProps: {
					value: e.cellLongNameThreshold
				},
				on: {
					input: function (t) {
						return e.change("cellLongNameThreshold", t)
					}
				}
			})])], 1)]), e._v(" "), s("div", {
				staticClass: "section row"
			}, [e._m(1), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("div", {
				staticClass: "bottom-margin"
			}, [e._v("\r\n                Font\r\n                "), s("input", {
				attrs: {
					type: "text",
					spellcheck: "false",
					placeholder: "Hind Madurai",
					maxlength: "30"
				},
				domProps: {
					value: e.cellMassFont
				},
				on: {
					input: function (t) {
						return e.change("cellMassFont", t)
					}
				}
			})]), e._v(" "), s("div", {
				staticClass: "inline-range"
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "2",
					step: "1"
				},
				domProps: {
					value: e.cellMassWeight
				},
				on: {
					input: function (t) {
						return e.change("cellMassWeight", t)
					}
				}
			}), e._v("\n                " + e._s(e.cellMassWeightMeaning) + " mass text\n            ")]), e._v(" "), s("div", {
				staticClass: "inline-range",
				class: {
					off: !e.cellMassOutline
				}
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "3",
					step: "1"
				},
				domProps: {
					value: e.cellMassOutline
				},
				on: {
					input: function (t) {
						return e.change("cellMassOutline", t)
					}
				}
			}), e._v("\n                " + e._s(e.cellMassOutlineMeaning) + " mass outline\n            ")]), e._v(" "), s("div", {
				staticClass: "inline-range"
			}, [s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					min: "0",
					max: "3",
					step: "1"
				},
				domProps: {
					value: e.cellMassTextSize
				},
				on: {
					input: function (t) {
						return e.change("cellMassTextSize", t)
					}
				}
			}), e._v("\n                " + e._s(e.cellMassTextSizeMeaning) + " mass text size\n            ")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.cellMassSmoothOutline
				},
				on: {
					change: function (t) {
						return e.change("cellMassSmoothOutline", t)
					}
				}
			}, [e._v("Smooth mass outline")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.shortMass
				},
				on: {
					change: function (t) {
						return e.change("shortMass", t)
					}
				}
			}, [e._v("Short mass format")])], 1)]), e._v(" "), s("div", {
				staticClass: "section row"
			}, [s("div", {
				staticClass: "header"
			}, [e._v("\n            Map\n            "), e.useWebGL ? e._e() : s("span", {
				staticClass: "right silent"
			}, [e._v("Requires GPU rendering")])]), e._v(" "), s("div", {
				staticClass: "options"
			}, [s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.useWebGL,
					checked: e.showBackgroundImage
				},
				on: {
					change: function (t) {
						return e.change("showBackgroundImage", t)
					}
				}
			}, [e._v("Show map image")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.useWebGL || !e.showBackgroundImage,
					checked: e.backgroundImageRepeat
				},
				on: {
					change: function (t) {
						return e.change("backgroundImageRepeat", t)
					}
				}
			}, [e._v("Repeat map image")]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					disabled: !e.useWebGL || !e.showBackgroundImage,
					checked: e.backgroundDefaultIfUnequal
				},
				on: {
					change: function (t) {
						return e.change("backgroundDefaultIfUnequal", t)
					}
				}
			}, [e._v("Always crop map image")]), e._v(" "), s("div", {
				staticClass: "slider-option bottom-margin",
				class: {
					disabled: !e.useWebGL || !e.showBackgroundImage
				}
			}, [e._v("\r\n                Map image opacity "), s("span", {
				staticClass: "right"
			}, [e._v(e._s((100 * e.backgroundImageOpacity).toFixed(0)) + "%")]), e._v(" "), s("input", {
				staticClass: "slider",
				attrs: {
					type: "range",
					disabled: !e.useWebGL || !e.showBackgroundImage,
					min: "0.1",
					max: "1",
					step: "0.05"
				},
				domProps: {
					value: e.backgroundImageOpacity
				},
				on: {
					input: function (t) {
						return e.change("backgroundImageOpacity", t)
					}
				}
			})]), e._v(" "), s("p-check", {
				staticClass: "p-switch",
				attrs: {
					checked: e.useFoodColor
				},
				on: {
					change: function (t) {
						return e.change("useFoodColor", t)
					}
				}
			}, [e._v("Use food color")])], 1)]), e._v(" "), s("div", {
				staticClass: "reset-option-wrapper"
			}, [s("span", {
				staticClass: "reset-option",
				on: {
					click: function (t) {
						return e.confirmReset()
					}
				}
			}, [s("i", {
				staticClass: "fa fa-undo"
			}), e._v(" Reset\r\n        ")])])])
		};
	L._withStripped = true;
	var E = function () {
		var e = this,
			t = e.$createElement,
			s = e._self._c || t;
		return s("div", {
			staticClass: "color-button",
			class: {
				disabled: e.disabled
			},
			style: {
				backgroundColor: "#" + e.hex
			},
			on: {
				mousedown: function (t) {
					!e.disabled && e.showPicker(true)
				}
			}
		}, [e.pickerOpen ? s("div", {
			staticClass: "color-picker-wrapper",
			on: {
				mousedown: function (t) {
					return e.startMovingPivot(t)
				},
				mousemove: function (t) {
					return e.movePivot(t)
				},
				mouseup: function (t) {
					return e.stopMovingPivot(t)
				}
			}
		}, [s("div", {
			staticClass: "color-picker-overlay"
		}), e._v(" "), s("div", {
			staticClass: "color-picker fade-box"
		}, [s("input", {
			directives: [{
				name: "model",
				rawName: "v-model",
				value: e.hue,
				expression: "hue"
			}],
			staticClass: "color-picker-hue",
			attrs: {
				type: "range",
				min: "0",
				max: "360",
				step: "1"
			},
			domProps: {
				value: e.hue
			},
			on: {
				change: function (t) {
					return e.triggerInput()
				},
				__r: function (t) {
					e.hue = t.target.value
				}
			}
		}), e._v(" "), s("div", {
			staticClass: "color-picker-clr",
			style: {
				backgroundColor: "hsl(" + e.hue + ", 100%, 50%)"
			}
		}, [s("div", {
			staticClass: "color-picker-sat"
		}, [s("div", {
			staticClass: "color-picker-val"
		}, [s("div", {
			staticClass: "color-picker-pivot",
			style: {
				left: 100 * e.sat + "px",
				top: 100 - 100 * e.val + "px"
			}
		})])])]), e._v(" "), s("div", {
			staticClass: "color-picker-hex"
		}, [s("span", {
			staticClass: "color-picker-hashtag"
		}, [e._v("#")]), e._v(" "), s("input", {
			directives: [{
				name: "model",
				rawName: "v-model",
				value: e.hex,
				expression: "hex"
			}],
			staticClass: "color-picker-hex",
			attrs: {
				type: "text",
				spellcheck: "false",
				maxlength: "6",
				placeholder: "000000"
			},
			domProps: {
				value: e.hex
			},
			on: {
				input: [function (t) {
					t.target.composing || (e.hex = t.target.value)
				}, function (t) {
					return e.triggerInput()
				}]
			}
		})])])]) : e._e()])
	};
	E._withStripped = true;
	var R = {
			data: () => ({
				pickerOpen: false,
				movingPivot: false,
				hue: 0,
				sat: 0,
				val: 0
			}),
			props: ["value", "disabled"],
			computed: {
				hex: {
					get() {
						return function (e, t, s) {
							var a, n, i, o, r, l, c, d;
							switch (l = s * (1 - t), c = s * (1 - (r = 6 * e - (o = Math.floor(6 * e))) * t), d = s * (1 - (1 - r) * t), o % 6) {
								case 0:
									a = s, n = d, i = l;
									break;
								case 1:
									a = c, n = s, i = l;
									break;
								case 2:
									a = l, n = s, i = d;
									break;
								case 3:
									a = l, n = c, i = s;
									break;
								case 4:
									a = d, n = l, i = s;
									break;
								case 5:
									a = s, n = l, i = c
							}
							return (a = Math.ceil(255 * a).toString(16).padStart(2, "0")) + (n = Math.ceil(255 * n).toString(16).padStart(2, "0")) + (i = Math.ceil(255 * i).toString(16).padStart(2, "0"))
						}(this.hue / 360, this.sat, this.val)
					},
					set(e) {
						if (e = e.toLowerCase(), /^[0-9a-f]{6}$/.test(e)) {
							var t, s, a, n, i, o, r, l = (t = e, s = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, n = parseInt(t.slice(4, 6), 16) / 255, i = Math.max(s, a, n), o = i - Math.min(s, a, n), [60 * ((r = o && (i == s ? (a - n) / o : i == a ? 2 + (n - s) / o : 4 + (s - a) / o)) < 0 ? r + 6 : r), i && o / i, i]);
							this.hue = l[0], this.sat = l[1], this.val = l[2]
						}
					}
				}
			},
			methods: {
				showPicker(e) {
					this.pickerOpen = e
				},
				startMovingPivot(e) {
					var t = e.target.classList;
					if (t.contains("color-picker-overlay")) return this.showPicker(false), void e.stopPropagation();
					(t.contains("color-picker-pivot") || t.contains("color-picker-val")) && (this.movingPivot = true, this.movePivot(e))
				},
				movePivot(e) {
					if (this.movingPivot) {
						var t = this.$el.querySelector(".color-picker-val").getBoundingClientRect(),
							s = e.clientX - t.x,
							a = e.clientY - t.y;
						this.sat = s / 100, this.val = 1 - a / 100, this.sat = Math.min(Math.max(this.sat, 0), 1), this.val = Math.min(Math.max(this.val, 0), 1)
					}
				},
				stopMovingPivot(e) {
					this.movingPivot && (this.movePivot(e), this.movingPivot = false, this.triggerInput())
				},
				triggerInput() {
					this.$emit("input", this.hex)
				}
			},
			created() {
				this.value && (this.hex = this.value)
			}
		},
		N = (s(172), Object(f.a)(R, E, [], false, null, "5b0666af", null));
	N.options.__file = "src/components/color-option.vue";
	var O = N.exports,
		F = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				staticClass: "image-button",
				class: {
					disabled: e.disabled
				},
				style: {
					backgroundColor: "#" + e.hex
				},
				on: {
					mousedown: function (t) {
						!e.disabled && e.showPicker(true)
					}
				}
			}, [s("div", {
				staticClass: "image-button-text"
			}, [e._v("...")]), e._v(" "), e.pickerOpen ? s("div", {
				staticClass: "image-picker-wrapper",
				on: {
					click: function (t) {
						return e.tryHidePicker(t)
					}
				}
			}, [s("div", {
				staticClass: "image-picker-overlay"
			}), e._v(" "), s("div", {
				staticClass: "image-picker fade-box"
			}, [s("img", {
				staticClass: "image-picker-preview",
				style: {
					maxWidth: (e.value ? e.width : 200) + "px"
				},
				attrs: {
					src: e.value,
					alt: "No image chosen or it is invalid"
				},
				on: {
					click: function (t) {
						return e.openFileChooser()
					},
					dragover: function (t) {
						return e.allowDrop(t)
					},
					drop: function (t) {
						return e.onImageDrop(t)
					}
				}
			}), e._v(" "), s("div", {
				staticClass: "image-picker-information"
			}, [e._v("\n                Click or drop onto image to change."), s("br"), e._v(" "), "defaults" in this ? s("span", {
				staticClass: "image-picker-reset",
				on: {
					click: function (t) {
						return e.triggerInput(e.defaults)
					}
				}
			}, [e._v("Reset to default")]) : e._e()]), e._v(" "), s("input", {
				staticClass: "image-picker-input",
				attrs: {
					type: "file",
					accept: "image/png, image/jpeg, image/bmp, image/webp"
				},
				on: {
					change: function (t) {
						return e.onImageSelect(t)
					}
				}
			})])]) : e._e()])
		};
	F._withStripped = true;
	var D = {
			data: () => ({
				pickerOpen: false,
				fileReader: null
			}),
			props: ["value", "width", "disabled", "defaults"],
			methods: {
				showPicker(e) {
					!this.pickerOpen && e && (this.imageLoadedOnce = false), this.pickerOpen = e
				},
				tryHidePicker(e) {
					e.target.classList.contains("image-picker-overlay") && (this.showPicker(false), e.stopPropagation())
				},
				triggerInput(e) {
					this.$emit("input", e)
				},
				openFileChooser() {
					this.$el.querySelector(".image-picker-input").click()
				},
				allowDrop(e) {
					e.preventDefault()
				},
				getFileReader() {
					var e = new FileReader;
					return e.addEventListener("load", e => {
						this.triggerInput(e.target.result)
					}), e
				},
				onImageSelect(e) {
					if (0 !== e.target.files.length) {
						var t = e.target.files[0];
						t.type.startsWith("image/") && this.getFileReader().readAsDataURL(t)
					}
				},
				onImageDrop(e) {
					if (e.preventDefault(), 0 !== e.dataTransfer.files.length) {
						var t = e.dataTransfer.files[0];
						t.type.startsWith("image/") && this.getFileReader().readAsDataURL(t)
					}
				}
			}
		},
		z = (s(174), Object(f.a)(D, F, [], false, null, "641581b7", null));
	z.options.__file = "src/components/image-option.vue";
	var B = z.exports,
		$ = s(1),
		W = s(4),
		H = s(5);

	function j(e) {
		switch (e) {
			case 0:
				return "Thin";
			case 1:
				return "Normal";
			case 2:
				return "Bold";
			default:
				return "???"
		}
	}

	function V(e) {
		switch (e) {
			case 0:
				return "No";
			case 1:
				return "Thin";
			case 2:
				return "Thick";
			case 3:
				return "Thickest";
			default:
				return "???"
		}
	}

	function X(e, t) {
		return e ? new Promise((s, a) => {
			var n = new Image;
			n.onload = (() => {
				var e = document.createElement("canvas"),
					a = e.getContext("2d"),
					i = Math.max(n.width, n.height),
					o = Math.min(n.width, n.height),
					r = i === n.width,
					l = Math.min(i, t) / i,
					c = (r ? i : o) * l,
					d = (r ? o : i) * l;
				e.width = c, e.height = d, a.drawImage(n, 0, 0, c, d), s(e.toDataURL())
			}), n.onerror = a, n.src = e
		}) : null
	}
	var G = PIXI.utils.isWebGLSupported() && W.useWebGL,
		Z = {
			components: {
				"color-option": O,
				"image-option": B
			},
			data: () => ({
				useWebGL: G,
				bgDefault: W.getDefault("backgroundImageUrl"),
				virusDefault: W.getDefault("virusImageUrl"),
				backgroundColor: W.backgroundColor,
				borderColor: W.borderColor,
				foodColor: W.foodColor,
				ejectedColor: W.ejectedColor,
				cellNameOutlineColor: W.cellNameOutlineColor,
				cursorImageUrl: W.cursorImageUrl,
				backgroundImageUrl: W.backgroundImageUrl,
				virusImageUrl: W.virusImageUrl,
				cellMassColor: W.cellMassColor,
				cellMassOutlineColor: W.cellMassOutlineColor,
				cellNameFont: W.cellNameFont,
				cellNameWeight: W.cellNameWeight,
				cellNameOutline: W.cellNameOutline,
				cellNameSmoothOutline: W.cellNameSmoothOutline,
				cellMassFont: W.cellMassFont,
				cellMassWeight: W.cellMassWeight,
				cellMassOutline: W.cellMassOutline,
				cellMassSmoothOutline: W.cellMassSmoothOutline,
				cellMassTextSize: W.cellMassTextSize,
				cellLongNameThreshold: W.cellLongNameThreshold,
				shortMass: W.shortMass,
				showBackgroundImage: W.showBackgroundImage,
				backgroundImageRepeat: W.backgroundImageRepeat,
				backgroundDefaultIfUnequal: W.backgroundDefaultIfUnequal,
				backgroundImageOpacity: W.backgroundImageOpacity,
				useFoodColor: W.useFoodColor
			}),
			computed: {
				cellNameWeightMeaning() {
					return j(this.cellNameWeight)
				},
				cellMassWeightMeaning() {
					return j(this.cellMassWeight)
				},
				cellNameOutlineMeaning() {
					return V(this.cellNameOutline)
				},
				cellMassOutlineMeaning() {
					return V(this.cellMassOutline)
				},
				cellMassTextSizeMeaning() {
					return function (e) {
						switch (e) {
							case 0:
								return "Small";
							case 1:
								return "Normal";
							case 2:
								return "Large";
							case 3:
								return "Largest";
							default:
								return "???"
						}
					}(this.cellMassTextSize)
				}
			},
			methods: {
				async change(e, t, s) {
					var a;
					a = t && t.target ? isNaN(t.target.valueAsNumber) ? t.target.value : t.target.valueAsNumber : t;
					try {
						switch (e) {
							case "cursorImageUrl":
								a = await X(a, 32);
								break;
							case "backgroundImageUrl":
								a !== this.bgDefault && (a = await X(a, 4e3));
								break;
							case "virusImageUrl":
								a !== this.virusDefault && (a = await X(a, 200))
						}
					} catch (e) {
						return void H.alert("This image is too large to even be loaded.")
					}
					if (W[e] != a) {
						var n = this[e];
						try {
							W.set(e, a)
						} catch (t) {
							return W.set(e, n), void H.alert("Saving this setting failed. Perhaps the image is too large?")
						}
						switch (this[e] = a, e) {
							case "cursorImageUrl":
								$.events.$emit("set-cursor-url", a);
								break;
							case "backgroundColor":
								$.renderer.backgroundColor = PIXI.utils.string2hex(a);
								break;
							case "cellNameOutlineColor":
							case "cellNameFont":
							case "cellNameWeight":
							case "cellNameOutline":
							case "cellNameSmoothOutline":
								$.settings.compileNameFontStyle();
								break;
							case "cellMassColor":
							case "cellMassOutlineColor":
							case "cellMassFont":
							case "cellMassWeight":
							case "cellMassOutline":
							case "cellMassSmoothOutline":
							case "cellMassTextSize":
								$.settings.compileMassFontStyle();
								break;
							case "cellLongNameThreshold":
								$.scene.resetPlayerLongNames()
						}
						if ($.running) switch (e) {
							case "borderColor":
								$.scene.resetBorder();
								break;
							case "foodColor":
								W.useFoodColor && $.scene.reloadFoodTextures();
								break;
							case "ejectedColor":
								$.scene.reloadEjectedTextures();
								break;
							case "virusImageUrl":
								$.scene.reloadVirusTexture();
								break;
							case "cellNameOutlineColor":
							case "cellNameFont":
							case "cellNameWeight":
							case "cellNameOutline":
							case "cellNameSmoothOutline":
								$.scene.resetNameTextStyle();
								break;
							case "cellMassColor":
							case "cellMassOutlineColor":
							case "cellMassFont":
							case "cellMassWeight":
							case "cellMassOutline":
							case "cellMassSmoothOutline":
							case "cellMassTextSize":
								$.scene.resetMassTextStyle(true);
								break;
							case "showBackgroundImage":
								$.scene.toggleBackgroundImage(a);
								break;
							case "backgroundImageUrl":
							case "backgroundImageRepeat":
							case "backgroundDefaultIfUnequal":
							case "backgroundImageOpacity":
								$.scene.setBackgroundImage();
								break;
							case "useFoodColor":
								$.scene.reloadFoodTextures()
						}
					}
				},
				confirmReset() {
					H.confirm("Are you sure you want to reset all theming options?", () => this.reset())
				},
				reset() {
					var e = ["useWebGL", "bgDefault", "virusDefault"];
					for (var t in this.$data) e.includes(t) || this.change(t, W.getDefault(t))
				}
			}
		},
		q = (s(176), Object(f.a)(Z, L, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "header"
			}, [this._v("\n            Name text\n            "), t("div", {
				staticClass: "right silent"
			}, [this._v("Fonts from your device only")])])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "header"
			}, [this._v("\n            Mass text\n            "), t("div", {
				staticClass: "right silent"
			}, [this._v("Fonts from your device only")])])
		}], false, null, "15c13b66", null));
	q.options.__file = "src/components/theming.vue";
	var Y = q.exports,
		J = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				attrs: {
					id: "hotkey-container"
				}
			}, [s("div", {
				staticClass: "hotkeys"
			}, e._l(e.availableHotkeys, function (t, a) {
				return s("div", {
					key: a,
					staticClass: "row"
				}, [s("span", {
					staticClass: "action"
				}, [e._v(e._s(a))]), e._v(" "), s("span", {
					staticClass: "bind",
					attrs: {
						tabindex: "0"
					},
					on: {
						mousedown: function (s) {
							return e.onMouseDown(s, t)
						},
						keydown: function (s) {
							return s.preventDefault(), e.onKeyDown(s, t)
						}
					}
				}, [e._v("\n                " + e._s(e.hotkeys[t]) + "\n            ")])])
			}), 0), e._v(" "), s("div", {
				staticClass: "footer"
			}, [s("span", {
				staticClass: "reset-button2",
				on: {
					click: e.onResetClick
				}
			}, [s("i", {
				staticClass: "fa fa-undo"
			}), e._v(" Reset\n        ")])])])
		};
	J._withStripped = true;
	var K = s(65),
		Q = s(5);
	var ee = {
			data() {
				return {
					availableHotkeys: (e = {
						Feed: "feed",
						"Feed macro": "feedMacro",
						Split: "split",
						Doublesplit: "splitx2",
						Triplesplit: "splitx3",
						"Quad split": "splitMax",
						"Split 32": "split32",
						"Split 64": "split64",
						"Diagonal linesplit": "linesplit",
						"Freeze mouse": "freezeMouse",
						"Lock linesplit": "lockLinesplit",
						"Stop movement": "stopMovement",
						Respawn: "respawn",
						"Toggle auto respawn": "toggleAutoRespawn",
						"Toggle skins": "toggleSkins",
						"Toggle names": "toggleNames",
						"Toggle food": "toggleFood",
						"Toggle mass": "toggleMass",
						"Toggle chat": "toggleChat",
						"Toggle HUD": "toggleHud",
						"Spectate lock": "spectateLock",
						"Save replay": "saveReplay",
						"Zoom level 1": "zoomLevel1",
						"Zoom level 2": "zoomLevel2",
						"Zoom level 3": "zoomLevel3",
						"Zoom level 4": "zoomLevel4",
						"Zoom level 5": "zoomLevel5"
					}, localStorage.adminMode && (e["Select Player"] = "selectPlayer"), e),
					hotkeys: K.get()
				};
				var e
			},
			methods: {
				onResetClick: function () {
					Q.confirm("Are you sure you want to reset all hotkeys?", () => {
						this.hotkeys = K.reset()
					})
				},
				onMouseDown: function (e, t) {
					if (e.target === document.activeElement) {
						var s = "MOUSE" + e.button;
						K.set(t, s) && (e.preventDefault(), this.hotkeys[t] = s, e.target.blur())
					}
				},
				onKeyDown: function (e, t) {
					var s = K.convertKey(e.code);
					"ESCAPE" !== s && "ENTER" !== s ? ("DELETE" == s && (s = ""), K.set(t, s) && (this.hotkeys[t] = s, e.target.blur())) : e.target.blur()
				}
			}
		},
		te = (s(178), Object(f.a)(ee, J, [], false, null, "2dbed53e", null));
	te.options.__file = "src/components/hotkeys.vue";
	var se = te.exports,
		ae = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				staticClass: "container"
			}, [s("input", {
				ref: "file",
				staticStyle: {
					display: "none"
				},
				attrs: {
					type: "file",
					accept: ".vanis",
					multiple: ""
				},
				on: {
					change: function (t) {
						return e.onFile(t)
					}
				}
			}), e._v(" "), s("div", {
				staticClass: "replay-button-row"
			}, [s("input", {
				staticClass: "vanis-button",
				attrs: {
					type: "button",
					value: "Import"
				},
				on: {
					click: function (t) {
						return e.$refs.file.click()
					}
				}
			}), e._v(" "), s("input", {
				staticClass: "vanis-button",
				attrs: {
					type: "button",
					disabled: e.downloading || !e.replays.length,
					value: e.downloading ? "Packing..." : "Download All"
				},
				on: {
					click: function (t) {
						return e.downloadAllReplays()
					}
				}
			}), e._v(" "), s("input", {
				staticClass: "vanis-button",
				attrs: {
					type: "button",
					value: "Delete All",
					disabled: e.downloading || !e.replays.length
				},
				on: {
					click: function (t) {
						return e.deleteAllReplays()
					}
				}
			}), e._v(" "), s("span", {
				staticClass: "replay-count-info"
			}, [e._v(e._s(e.loaded ? e.replays.length + " replays" : "Loading"))])]), e._v(" "), s("div", {
				staticClass: "replays-container"
			}, [s("div", {
				staticClass: "replays"
			}, [!e.replays.length && e.loaded ? s("div", {
				staticClass: "notification"
			}, [s("div", [e._v("Press "), s("b", [e._v(e._s(e.hotkey))]), e._v(" in game to save last "), s("b", [e._v(e._s(e.replayDuration))]), e._v(" seconds of gameplay.")]), e._v(" "), s("div", {
				staticStyle: {
					color: "red",
					"font-weight": "bold"
				}
			}, [e._v("Replays are saved in browser memory!")]), e._v(" "), s("div", [e._v("They get permanently erased if browser data gets cleared.")])]) : e._e(), e._v(" "), e._l(e.replays, function (e, t) {
				return s("replay-item", {
					key: t,
					attrs: {
						replay: e
					}
				})
			})], 2)])])
		};
	ae._withStripped = true;
	var ne = s(113),
		ie = s(86),
		oe = s(180),
		re = s(1),
		le = s(65),
		ce = s(4),
		de = s(5),
		ue = s(8),
		he = re.replay.database;
	var pe = {
			data: () => ({
				loaded: false,
				replays: [],
				downloading: false,
				hotkey: le.get().saveReplay,
				replayDuration: NaN
			}),
			components: {
				replayItem: ne.default
			},
			methods: {
				downloadAllReplays() {
					this.downloading = true;
					var e = new oe;
					he.iterate((t, s) => {
						e.file(s + ".vanis", t), 0
					}, () => {
						e.generateAsync({
							type: "blob"
						}).then(e => {
							var t = "replays_" + ue.getTimestamp() + ".zip";
							ie.saveAs(e, t), this.downloading = false
						})
					})
				},
				deleteAllReplays() {
					de.confirm("Are you sure that you want to delete all replays?", async() => {
						try {
							await he.clear()
						} catch (e) {
							return void de.alert("Error clearing replays: " + e.message)
						}
						this.getReplays()
					})
				},
				getReplays() {
					var e = [];
					he.iterate((t, s) => {
						var a = {
							name: s,
							data: t
						};
						t.startsWith("REPLAY") ? a.image = t.split("|")[2] : a.image = "img/replay-placeholder.png", e.push(a)
					}, () => {
						this.replays = e.reverse(), this.loaded = true
					})
				},
				async onFile(e) {
					var t = Array.from(e.target.files);
					if (t.length) {
						e.target && (e.target.value = null);
						var s = t.map(async e => {
							var t = e.name.replace(/\.vanis$/, ""),
								s = await
							function (e) {
								return new Promise((t, s) => {
									var a = new FileReader;
									a.onload = (e => t(e.target.result)), a.onerror = s, a.readAsText(e)
								})
							}(e);
							return he.setItem(t, s)
						});
						try {
							await Promise.all(s)
						} catch (e) {
							de.alert('Error importing replays: "' + e.message + '"')
						}
						this.getReplays()
					}
				}
			},
			created() {
				re.events.$on("replay-added", this.getReplays), re.events.$on("replay-removed", this.getReplays), this.replayDuration = ce.replayDuration, this.getReplays()
			},
			beforeDestroy() {
				re.events.$off("replay-added", this.getReplays), re.events.$off("replay-removed", this.getReplays)
			}
		},
		me = (s(220), Object(f.a)(pe, ae, [], false, null, "4a996e52", null));
	me.options.__file = "src/components/replays3.vue";
	var ve = me.exports,
		ge = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				staticStyle: {
					padding: "15px"
				}
			}, [s("h2", {
				staticStyle: {
					margin: "0",
					"margin-bottom": "14px"
				}
			}, [e._v("Season Leaderboard")]), e._v(" "), e.errorMessage ? s("div", [e._v("\n        Failed loading season leaderboard data:\n        " + e._s(e.errorMessage) + "\n    ")]) : s("div", e._l(e.playerList, function (t, a) {
				return s("div", {
					key: a,
					staticClass: "player-row",
					class: {
						"own-row": e.ownUid && e.ownUid === t.uid
					}
				}, [s("div", {
					staticClass: "player-nr"
				}, [e._v(e._s(a + 1) + ".")]), e._v(" "), s("div", {
					staticClass: "player-name",
					style: {
						color: t.name_color
					}
				}, [e._v(e._s(t.name))]), e._v(" "), s("div", {
					staticClass: "player-xp"
				}, [e._v(e._s(t.season_xp) + " xp")])])
			}), 0)])
		};
	ge._withStripped = true;
	var fe = s(1),
		ye = s(15),
		{
			checkBadWords: we
		} = s(18),
		ke = {
			data: () => ({
				playerList: [],
				errorMessage: "",
				ownUid: null
			}),
			created() {
				this.ownUid = fe.ownUid;
				var e = "https://vanis.io/api".replace("/api", "") + "/highscores/season_xp/100";
				ye.get(e).then(e => {
					var t = e.data;
					t.forEach(e => {
						var t = e.name_color;
						e.name_color = t ? "#" + t : "white";
						var s = e.locked_name || e.discord_name;
						we(s) && (s = "********"), e.name = s
					}), this.playerList = t
				}).catch(e => {
					this.errorMessage = e.message
				})
			}
		},
		be = (s(222), Object(f.a)(ke, ge, [], false, null, "7cb607ba", null));
	be.options.__file = "src/components/season-leaderboard.vue";
	var Ce = be.exports,
		Se = (s(15), s(1)),
		_e = s(5),
		xe = {
			components: {
				modal: b.default,
				settings: U,
				theming: Y,
				hotkeys: se,
				replays3: ve,
				seasonLeaderboard: Ce
			},
			data: () => ({
				activeModal: "",
				showSettings: false,
				showHotkeys: false,
				gameState: Se.state,
				nickname: "string" == typeof localStorage.nickname ? localStorage.nickname : "",
				teamtag: localStorage.teamtag || "",
				skinUrl: "string" == typeof localStorage.skinUrl ? localStorage.skinUrl : "https://skins.vanis.io/s/vanis1"
			}),
			created: function () {
				this.getUserData(), Se.events.$on("skinClick", e => {
					this.skinUrl = e
				})
			},
			methods: {
				openModal: function (e) {
					this.activeModal = e, this.$emit("modal-open", true)
				},
				closeModal: function () {
					this.activeModal = "", this.$emit("modal-open", false)
				},
				login: function () {
					var e = "https://vanis.io/api/login/discord";
					window.open(e, "discordLogin", "width=400, height=500");
					console.log(e)
				},
				getUserData: function () {},
				play: function (e) {
					e.isTrusted && (!this.gameState.isAlive && Se.joinGame(), Se.showMenu(false))
				},
				spectate: function () {
					this.gameState.isAlive ? console.warn("Cannot spectate, player is still alive") : (Se.actions.spectate(), Se.showMenu(false))
				},
				skinLoaded: function () {
					var e = this.$refs.skin;
					e && (e.naturalWidth > 2048 || e.naturalHeight > 2048) && _e.instance.fire({
						html: "Your skin images size is too large.<br>Preferred skin size is 512x512px<br>Size is limited to 2048x2048px.",
						confirmButtonText: "OK"
					})
				},
				onSkinUrlChange() {
					if (this.skinUrl.length > 80) return this.skinUrl = "", void _e.alert("Skin url too long.");
					Se.events.$emit("skinUrlChanged", this.skinUrl)
				},
				onTeamTagChange() {
					localStorage.setItem("teamtag", this.teamtag)
				},
				onNicknameChange() {
					localStorage.setItem("nickname", this.nickname)
				}
			}
		},
		Me = (s(224), Object(f.a)(xe, k, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticStyle: {
					"text-align": "center",
					height: "286px"
				}
			}, [t("div", {
				staticStyle: {
					padding: "4px"
				}
			}, [this._v("Advertisement")]), this._v(" "), t("div", {
				attrs: {
					id: "vanis-io_300x250"
				}
			})])
		}], false, null, "1bcde71e", null));
	Me.options.__file = "src/components/player.vue";
	var Pe = Me.exports,
		Ie = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				staticStyle: {
					padding: "17px"
				}
			}, [e.account ? e._e() : s("div", [s("div", {
				staticStyle: {
					"margin-top": "6px",
					"margin-bottom": "10px"
				}
			}, [e._v("Login to your account with Discord to save your in-game progress.")]), e._v(" "), s("div", {
				staticClass: "discord",
				on: {
					click: function (t) {
						return e.openDiscordLogin()
					}
				}
			}, [e.loading ? [e.loading ? s("i", {
				staticClass: "fas fa-sync fa-spin",
				staticStyle: {
					"margin-right": "5px"
				}
			}) : e._e(), e._v(" Loading\n            ")] : [s("i", {
				staticClass: "fab fa-discord"
			}), e._v(" Login with Discord\n            ")]], 2)]), e._v(" "), e.account ? s("div", {
				staticClass: "account"
			}, [s("div", {
				staticStyle: {
					"margin-bottom": "3px"
				}
			}, [s("img", {
				staticClass: "avatar",
				attrs: {
					src: e.account.avatarUrl
				}
			}), e._v(" "), s("div", {
				staticClass: "player-info"
			}, [s("div", {
				attrs: {
					id: "account-name"
				}
			}, [e._v(e._s(e.account.discordName))]), e._v(" "), s("div", [e._v("Level " + e._s(e.account.level))]), e._v(" "), s("div", [e._v(e._s(e.account.xp) + " Total XP")]), e._v(" "), s("div", [e._v(e._s(e.account.season_xp || 0) + " Season XP")])])]), e._v(" "), s("div", {
				staticStyle: {
					position: "relative"
				}
			}, [s("progress-bar", {
				staticClass: "xp-progress",
				attrs: {
					progress: e.progress
				}
			}), e._v(" "), s("div", {
				staticClass: "xp-data"
			}, [s("div", {
				staticStyle: {
					flex: "1",
					"margin-left": "8px"
				}
			}, [e._v(e._s(e.xpAtCurrentLevel))]), e._v(" "), s("div", {
				staticStyle: {
					"margin-right": "7px"
				}
			}, [e._v(e._s(e.xpAtNextLevel))])])], 1), e._v(" "), s("div", {
				staticClass: "logout",
				on: {
					click: function (t) {
						return e.logout()
					}
				}
			}, [s("i", {
				staticClass: "fas fa-sign-out-alt"
			}), e._v(" Logout\n        ")])]) : e._e()])
		};
	Ie._withStripped = true;
	var Te = function () {
		var e = this.$createElement,
			t = this._self._c || e;
		return t("div", {
			staticClass: "progress progress-striped"
		}, [t("div", {
			staticClass: "progress-bar",
			style: {
				width: 100 * this.progress + "%"
			}
		})])
	};
	Te._withStripped = true;
	var Ae = {
			props: ["progress"]
		},
		Ue = (s(226), Object(f.a)(Ae, Te, [], false, null, "4e838c74", null));
	Ue.options.__file = "src/components/progressBar.vue";
	var Le = Ue.exports,
		Ee = s(228),
		Re = (s(15), s(5)),
		Ne = s(1),
		Oe = s(229),
		Fe = {
			components: {
				progressBar: Le
			},
			data: () => ({
				account: null,
				progress: 0,
				xpAtCurrentLevel: 0,
				xpAtNextLevel: 0,
				loading: false
			}),
			created: function () {
				Ne.events.$on("xp-update", this.onXpUpdate), Ee.vanisToken && this.loadUserData(), this.listenForToken()
			},
			beforeDestroy() {
				Ne.events.$off("xp-update", this.onXpUpdate)
			},
			methods: {
				listenForToken() {
					window.addEventListener("message", e => {
						var t = e.data.vanis_token;
						t && (this.onLoggedIn(t), e.source.postMessage("loggedIn", e.origin))
					})
				},
				async loadUserData() {
					this.loading = true;
					try {
						var e = await Ee.get("/me")
					} catch (e) {
						this.loading = false;
						var t = e.response;
						return void(t && (console.error("Account:", t.data), 401 === t.status && Ee.clearToken()))
					}
					this.setAccountData(e), this.updateProgress(this.account.xp, this.account.level), this.loading = false
				},
				async logout() {
					try {
						await Ee.get("/me/logout")
					} catch (t) {
						var e = t.response;
						e && 401 !== e.status && Re.alert("Error: " + t.message)
					}
					Ee.clearToken(), this.account = null, Ne.ownUid = null
				},
				getAvatarUrl: (e, t) => t ? "https://cdn.discordapp.com/avatars/" + e + "/" + t + ".png" : "https://cdn.discordapp.com/embed/avatars/0.png",
				setAccountData(e) {
					e.permissions && (window.gameObj = Ne), e.avatarUrl = this.getAvatarUrl(e.discordId, e.discordAvatar), this.account = e, Ne.ownUid = e.uid
				},
				onXpUpdate: function (e) {
					if (this.account) {
						var t = Oe.getLevel(e);
						this.account.season_xp += e - this.account.xp, this.account.xp = e, this.account.level = t, this.updateProgress(e, t)
					}
				},
				updateProgress(e, t) {
					this.xpAtCurrentLevel = Oe.getXp(t), this.xpAtNextLevel = Oe.getXp(t + 1), this.progress = (e - this.xpAtCurrentLevel) / (this.xpAtNextLevel - this.xpAtCurrentLevel)
				},
				openDiscordLogin: function () {
					var e = Ee.url + "/login/discord";
					window.open(e, "", "width=400, height=500")
				},
				onLoggedIn(e) {
					console.assert(e, "Vanis token empty or undefined"), Ee.setToken(e), this.loadUserData()
				}
			}
		},
		De = (s(230), Object(f.a)(Fe, Ie, [], false, null, "661435cd", null));
	De.options.__file = "src/components/account.vue";
	var ze = De.exports,
		Be = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				attrs: {
					id: "skins-container"
				}
			}, [s("div", {
				attrs: {
					id: "skins"
				}
			}, [e._l(e.skins, function (t, a) {
				return s("span", {
					key: a,
					staticClass: "skin-container"
				}, [s("img", {
					staticClass: "skin",
					class: {
						selected: e.selectedSkinIndex === a
					},
					attrs: {
						src: t,
						alt: ""
					},
					on: {
						click: function (t) {
							return e.selectSkin(a)
						},
						contextmenu: function (t) {
							return e.removeSkin(a)
						}
					}
				}), e._v(" "), s("i", {
					staticClass: "fas fa-times skin-remove-button",
					on: {
						click: function (t) {
							return e.removeSkin(a)
						}
					}
				})])
			}), e._v(" "), s("img", {
				staticClass: "skin add-skin",
				attrs: {
					src: "img/skin-add.png",
					alt: ""
				},
				on: {
					click: function (t) {
						return e.addSkin()
					}
				}
			})], 2)])
		};
	Be._withStripped = true;
	var $e = s(1),
		We = {
			data: () => ({
				selectedSkinIndex: 0,
				skins: []
			}),
			created: function () {
				$e.events.$on("skinUrlChanged", this.onSkinUrlChanged.bind(this)), this.skins = this.loadSkins() || this.getDefaultSkins();
				var e = Number(localStorage.selectedSkinIndex) || 0;
				this.selectSkin(e)
			},
			methods: {
				loadSkins() {
					var e = localStorage.skins;
					if (!e) return false;
					try {
						var t = JSON.parse(e)
					} catch (e) {
						return console.error("Error parsing saved skins", e.message), false
					}
					if (!Array.isArray(t)) return console.error("localstorage.skins is not an array!"), false;
					for (var s = t.length; s < 2; s++) t.push("https://skins.vanis.io/s/vanis1");
					return t
				},
				getDefaultSkins() {
					for (var e = [], t = 0; t < 8; t++) e.push("https://skins.vanis.io/s/vanis1");
					return e
				},
				onSkinUrlChanged(e) {
					this.$set(this.skins, this.selectedSkinIndex, e), this.saveSkins()
				},
				selectSkin(e) {
					this.selectedSkinIndex = e, localStorage.selectedSkinIndex = e;
					var t = this.skins[e];
					$e.events.$emit("skinClick", t)
				},
				removeSkin(e) {
					this.skins.splice(e, 1), this.skins.length < 2 && this.skins.push("https://skins.vanis.io/s/vanis1"), this.saveSkins();
					var t = Math.max(0, this.selectedSkinIndex - 1);
					this.selectSkin(t)
				},
				addSkin() {
					var e = this.skins.length;
					this.skins.push("https://skins.vanis.io/s/vanis1"), this.selectSkin(e), this.saveSkins()
				},
				saveSkins() {
					localStorage.skins = JSON.stringify(this.skins)
				}
			}
		},
		He = (s(232), Object(f.a)(We, Be, [], false, null, "1c614894", null));
	He.options.__file = "src/components/skins.vue";
	var je = He.exports,
		Ve = s(1),
		Xe = {
			data: () => ({
				isModalOpen: false,
				selectedTab: "servers",
				gameState: Ve.state,
				cursorStyleElem: null
			}),
			methods: {
				onModalChange: function (e) {
					this.isModalOpen = e
				},
				setCursorUrl(e) {
					var t = null;
					e && (t = "#canvas, #hud > * { cursor: url('" + e + "'), auto !important; }"), !t && this.cursorStyleElem ? (this.cursorStyleElem.remove(), this.cursorStyleElem = null) : t && !this.cursorStyleElem && (this.cursorStyleElem = document.createElement("style"), document.head.appendChild(this.cursorStyleElem)), this.cursorStyleElem && (this.cursorStyleElem.innerHTML = t)
				}
			},
			components: {
				servers: w,
				playerContainer: Pe,
				account: ze,
				skins: je
			},
			created() {
				Ve.events.$on("set-cursor-url", e => this.setCursorUrl(e))
			},
			mounted() {
				this.setCursorUrl(Ve.settings.cursorImageUrl)
			}
		},
		Ge = (s(234), Object(f.a)(Xe, r, [], false, null, "ebed1606", null));
	Ge.options.__file = "src/components/main-container.vue";
	var Ze = Ge.exports,
		qe = function () {
			var e = this.$createElement;
			this._self._c;
			return this._m(0)
		};
	qe._withStripped = true;
	s(236);
	var Ye = Object(f.a)({}, qe, [function () {
		var e = this.$createElement,
			t = this._self._c || e;
		return t("div", {
			staticClass: "social-container"
		}, [t("a", {
			staticClass: "discord-link",
			attrs: {
				href: "https://vanis.io/discord",
				target: "_blank"
			}
		}, [t("i", {
			staticClass: "fab fa-discord"
		}), this._v(" Official Discord\n    ")]), this._v(" "), t("a", {
			staticClass: "tournaments-link",
			attrs: {
				href: "https://vanis.io/tournaments",
				target: "_blank"
			}
		}, [t("i", {
			staticClass: "fas fa-trophy"
		}), this._v(" Tournaments\n    ")]), this._v(" "), t("a", {
			staticClass: "youtube-link",
			attrs: {
				href: "https://www.youtube.com/channel/UCuWJ0czBKaNcQ5MByoimLBw",
				target: "_blank"
			}
		}, [t("i", {
			staticClass: "fab fa-youtube"
		}), this._v(" YouTube\n    ")]), this._v(" "), t("a", {
			attrs: {
				href: "https://skins.vanis.io",
				target: "_blank",
				id: "skins-link"
			}
		}, [t("i", {
			staticClass: "fas fa-images"
		}), this._v(" Skins\n    ")])])
	}], false, null, "4d0670e9", null);
	Ye.options.__file = "src/components/social-links.vue";
	var Je = Ye.exports,
		Ke = function () {
			var e = this.$createElement;
			this._self._c;
			return this._m(0)
		};
	Ke._withStripped = true;
	var Qe = {
			data() {}
		},
		et = (s(238), Object(f.a)(Qe, Ke, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container"
			}, [t("a", {
				staticStyle: {
					"margin-left": "20.59px"
				},
				attrs: {
					href: "privacy.html",
					target: "_blank"
				}
			}, [this._v("Privacy Policy")]), this._v(" "), t("span", {
				staticClass: "line"
			}, [this._v("|")]), this._v(" "), t("a", {
				attrs: {
					href: "tos.html",
					target: "_blank"
				}
			}, [this._v("Terms of Service")])])
		}], false, null, "6843da33", null));
	et.options.__file = "src/components/privacy-tos.vue";
	var tt = et.exports,
		st = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return this.show ? t("div", {
				staticClass: "context-menu fade",
				style: {
					top: this.y + "px",
					left: this.x + "px"
				}
			}, [t("div", {
				staticClass: "player-name"
			}, [this._v(this._s(this.playerName))]), this._v(" "), t("div", [this._v("Block")]), this._v(" "), t("div", {
				on: {
					click: this.hideName
				}
			}, [this._v("Hide Name")]), this._v(" "), t("div", {
				on: {
					click: this.hideSkin
				}
			}, [this._v("Hide Skin")]), this._v(" "), t("div", [this._v("Kick")]), this._v(" "), t("div", [this._v("Ban")]), this._v(" "), t("div", [this._v("Mute")])]) : this._e()
		};
	st._withStripped = true;
	s(1);
	var at = {
			data: () => ({
				show: false,
				playerName: "",
				x: 100,
				y: 55
			}),
			methods: {
				open: function (e, t) {
					this.player = t, this.playerName = t.name, this.x = e.clientX, this.y = e.clientY, this.show = true, document.addEventListener("click", e => {
						this.show = false
					}, {
						once: true
					})
				},
				hideName: function () {
					this.player.setName(""), this.player.invalidateVisibility()
				},
				hideSkin: function () {
					this.player.setSkin(""), this.player.invalidateVisibility()
				}
			},
			created() {}
		},
		nt = (s(240), Object(f.a)(at, st, [], false, null, "4dbee04d", null));
	nt.options.__file = "src/components/context-menu.vue";
	var it = nt.exports,
		ot = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				attrs: {
					id: "hud"
				}
			}, [t("stats"), this._v(" "), t("chatbox"), this._v(" "), t("leaderboard"), this._v(" "), t("minimap"), this._v(" "), t("cautions")], 1)
		};
	ot._withStripped = true;
	var rt = function () {
		var e = this.$createElement,
			t = this._self._c || e;
		return t("div", {
			staticClass: "cautions"
		}, [!this.stopped && this.showMouseFrozen ? t("div", [this._v("MOUSE FROZEN")]) : this._e(), this._v(" "), !this.stopped && this.showMovementStopped ? t("div", [this._v("MOVEMENT STOPPED")]) : this._e(), this._v(" "), !this.stopped && this.showLinesplitting ? t("div", [this._v("LINESPLITTING")]) : this._e()])
	};
	rt._withStripped = true;
	var lt = s(1),
		ct = {
			data: () => ({
				showMouseFrozen: false,
				showMovementStopped: false,
				showLinesplitting: false
			}),
			mounted() {
				lt.events.$on("update-cautions", e => {
					"mouseFrozen" in e && (this.showMouseFrozen = e.mouseFrozen), "moveToCenterOfCells" in e && (this.showMovementStopped = e.moveToCenterOfCells), "lockLinesplit" in e && (this.showLinesplitting = e.lockLinesplit)
				}), lt.events.$on("reset-cautions", () => {
					this.showMouseFrozen = false, this.showMovementStopped = false, this.showLinesplitting = false
				})
			}
		},
		dt = (s(242), Object(f.a)(ct, rt, [], false, null, "b7599310", null));
	dt.options.__file = "src/components/cautions.vue";
	var ut = dt.exports,
		ht = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.visible,
					expression: "visible"
				}],
				staticClass: "stats"
			}, [t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showFPS,
					expression: "showFPS"
				}]
			}, [this._v("FPS: " + this._s(this.fps || "-"))]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showPing,
					expression: "showPing"
				}]
			}, [this._v("Ping: " + this._s(this.ping || "-"))]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showPlayerMass && this.mass,
					expression: "showPlayerMass && mass"
				}]
			}, [this._v("Mass: " + this._s(this.mass))]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showPlayerScore && this.score,
					expression: "showPlayerScore && score"
				}]
			}, [this._v("Score: " + this._s(this.score))]), this._v(" "), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showCellCount && this.cells,
					expression: "showCellCount && cells"
				}]
			}, [this._v("Cells: " + this._s(this.cells))])])
		};
	ht._withStripped = true;
	var pt = s(1),
		mt = s(4),
		vt = {
			data: () => ({
				showFPS: mt.showFPS,
				showPing: mt.showPing,
				showPlayerMass: mt.showPlayerMass,
				showPlayerScore: mt.showPlayerScore,
				showCellCount: mt.showCellCount,
				visible: false,
				ping: 0,
				fps: 0,
				mass: 0,
				score: 0,
				cells: 0
			}),
			created() {
				pt.events.$on("stats-visible", e => this.visible = e), pt.events.$on("stats-invalidate-shown", () => {
					this.showFPS = mt.showFPS, this.showPing = mt.showPing, this.showPlayerMass = mt.showPlayerMass, this.showPlayerScore = mt.showPlayerScore, this.showCellCount = mt.showCellCount
				}), pt.events.$on("cells-changed", e => this.cells = e), pt.events.$on("stats-changed", e => {
					this.ping = e.ping || 0, this.fps = e.fps || 0, e.mass ? pt.settings.shortMass ? this.mass = pt.getShortMass(e.mass) : this.mass = e.mass : this.mass = 0, e.score ? pt.settings.shortMass ? this.score = pt.getShortMass(e.score) : this.score = e.score : this.score = 0
				})
			}
		},
		gt = (s(244), Object(f.a)(vt, ht, [], false, null, "0875ad82", null));
	gt.options.__file = "src/components/stats.vue";
	var ft = gt.exports,
		yt = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.visible,
					expression: "visible"
				}],
				attrs: {
					id: "chatbox"
				}
			}, [e.showBlockedMessageCount && e.blockedMessageCount ? s("div", {
				staticStyle: {
					position: "absolute",
					top: "-28px"
				}
			}, [e._v("Blocked messages: " + e._s(e.blockedMessageCount))]) : e._e(), e._v(" "), s("div", {
				ref: "list",
				attrs: {
					id: "message-list"
				},
				on: {
					click: function (t) {
						return e.onChatClick(t)
					},
					contextmenu: function (t) {
						return e.onChatRightClick(t)
					}
				}
			}, e._l(e.messages, function (t, a) {
				return s("div", {
					key: a,
					staticClass: "message-row"
				}, [t.from ? [s("span", {
					staticClass: "message-from",
					style: {
						color: t.fromColor
					},
					attrs: {
						"data-pid": t.pid
					}
				}, [e._v(e._s(t.from))]), e._v(":\n            ")] : e._e(), e._v(" "), s("span", {
					staticClass: "message-text",
					style: {
						color: t.textColor
					}
				}, [e._v(e._s(t.text))])], 2)
			}), 0), e._v(" "), s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.inputText,
					expression: "inputText"
				}],
				ref: "input",
				attrs: {
					id: "chatbox-input",
					type: "text",
					spellcheck: "false",
					autocomplete: "off",
					maxlength: "100",
					tabindex: "-1",
					placeholder: "Type your message here"
				},
				domProps: {
					value: e.inputText
				},
				on: {
					keydown: function (t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.sendChatMessage()
					},
					input: function (t) {
						t.target.composing || (e.inputText = t.target.value)
					}
				}
			})])
		};
	yt._withStripped = true;
	var wt = s(1),
		kt = s(4),
		bt = s(5),
		{
			replaceBadWordsChat: Ct
		} = s(18),
		St = {},
		_t = {
			data: () => ({
				visible: false,
				inputText: "",
				messages: [],
				showBlockedMessageCount: kt.showBlockedMessageCount,
				blockedMessageCount: 0
			}),
			methods: {
				onChatClick(e) {
					var t = e.target.dataset.pid;
					t && (wt.selectedPlayer = t, wt.actions.spectate(t))
				},
				onChatRightClick(e) {
					var t = e.target.dataset.pid;
					if (t) {
						var s = wt.playerManager.players[t];
						s ? St[t] ? this.confirmUnblockPlayer(s) : this.confirmBlockPlayer(s) : bt.alert("Player does not exist or disconnected")
					}
				},
				confirmBlockPlayer(e) {
					var t = e.name,
						s = e.pid,
						a = 'Block player "' + t + '" until restart?';
					bt.confirm(a, () => {
						e.isMe ? bt.alert("You can not block yourself") : (St[s] = t, wt.addServerMessage('Blocked player "' + t + '"'))
					})
				},
				confirmUnblockPlayer(e) {
					var t = e.name,
						s = e.pid,
						a = 'Unblock player "' + t + '"';
					bt.confirm(a, () => {
						delete St[s], wt.addServerMessage('Unblocked player "' + t + '"')
					})
				},
				sendChatMessage() {
					var e = this.inputText.trim();
					e && (wt.selectedPlayer && (e = e.replace(/\$pid/g, wt.selectedPlayer)), wt.sendChatMessage(e), this.inputText = ""), wt.renderer.view.focus(), this.scrollBottom()
				},
				onChatMessage(e) {
					if (St[e.pid]) this.blockedMessageCount++;
					else {
						kt.filterChatMessages && (e.text = Ct(e.text));
						e.fromColor = e.fromColor || "#ffffff", e.textColor = e.textColor || "#ffffff", this.messages.push(e), this.messages.length > 100 && this.messages.shift();
						var t = this.$refs.list;
						t.scrollHeight - t.clientHeight - t.scrollTop <= 30 && this.$nextTick(this.scrollBottom)
					}
				},
				onVisibilityChange(e) {
					this.visible = e, e && this.$nextTick(this.scrollBottom)
				},
				focusChat() {
					this.visible && this.$refs.input.focus()
				},
				clearChat() {
					this.messages = []
				},
				scrollBottom() {
					var e = this.$refs.list;
					e.scrollTop = e.scrollHeight
				}
			},
			created() {
				wt.events.$on("chat-visible", this.onVisibilityChange), wt.events.$on("chat-focus", this.focusChat), wt.events.$on("chat-message", this.onChatMessage), wt.events.$on("chat-clear", this.clearChat), wt.events.$on("show-blocked-message-count", e => this.showBlockedMessageCount = e), wt.events.$on("game-stopped", () => {
					this.blockedMessageCount = 0, St = {}
				})
			}
		},
		xt = (s(246), Object(f.a)(_t, yt, [], false, null, "4900a413", null));
	xt.options.__file = "src/components/chatbox.vue";
	var Mt = xt.exports,
		Pt = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.userVisible && e.visible,
					expression: "userVisible && visible"
				}],
				attrs: {
					id: "leaderboard"
				}
			}, [s("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.headerVisible,
					expression: "headerVisible"
				}],
				staticClass: "leaderboard-title"
			}, [e._v(e._s(e.headerText))]), e._v(" "), s("div", e._l(e.leaderboard, function (t, a) {
				return s("div", {
					key: a,
					staticClass: "leaderboard-label"
				}, ["position" in t ? s("span", [e._v(e._s(t.position) + ".")]) : e._e(), e._v(" "), s("span", {
					class: {
						spectating: !e.gameState.isAlive
					},
					style: {
						color: t.color,
						fontWeight: t.bold ? "bold" : "normal"
					},
					attrs: {
						"data-pid": t.pid
					},
					on: {
						click: function (t) {
							return e.leftClickLabel(t)
						}
					}
				}, [e._v(e._s(t.text))])])
			}), 0)])
		};
	Pt._withStripped = true;
	var It = s(1),
		Tt = s(4),
		At = {
			data: () => ({
				userVisible: Tt.showLeaderboard,
				visible: false,
				headerVisible: true,
				headerText: "Leaderboard",
				leaderboard: [],
				gameState: It.state
			}),
			methods: {
				updateLeaderboard(e, t) {
					if (this.leaderboard = e, t) this.headerVisible = t.visible, this.headerText = t.text;
					else if (Tt.showServerName && this.gameState.selectedServer) {
						this.headerVisible = true;
						var s = this.gameState.selectedServer.region || "";
						s && (s += " "), this.headerText = s + this.gameState.selectedServer.name
					} else this.headerVisible = true, this.headerText = "Leaderboard"
				},
				leftClickLabel(e) {
					(e = event.target.dataset.pid) && (It.selectedPlayer = e, It.actions.spectate(e))
				},
				onLeaderboardShow() {
					this.visible || (It.events.$on("leaderboard-update", this.updateLeaderboard), this.visible = true)
				},
				onLeaderboardHide() {
					this.visible && (It.events.$off("leaderboard-update", this.updateLeaderboard), this.leaderboard = [], this.visible = false, this.selectedServer = null)
				}
			},
			created() {
				It.events.$on("server-select", (e, t, s) => {
					this.selectedServerName = e, this.selectedServerRegion = t
				}), It.events.$on("leaderboard-visible", e => this.userVisible = e), It.events.$on("leaderboard-show", this.onLeaderboardShow), It.events.$on("leaderboard-hide", this.onLeaderboardHide)
			}
		},
		Ut = (s(248), Object(f.a)(At, Pt, [], false, null, "8a0c31c6", null));
	Ut.options.__file = "src/components/leaderboard.vue";
	var Lt = Ut.exports,
		Et = {
			components: {
				stats: ft,
				chatbox: Mt,
				minimap: s(114).default,
				leaderboard: Lt,
				cautions: ut
			}
		},
		Rt = (s(252), Object(f.a)(Et, ot, [], false, null, "339660d2", null));
	Rt.options.__file = "src/components/hud.vue";
	var Nt = Rt.exports,
		Ot = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return s("transition", {
				attrs: {
					name: "menu"
				}
			}, [s("div", {
				staticClass: "container"
			}, [s("div", {
				staticClass: "fade-box box-1"
			}, [s("div", {
				staticStyle: {
					padding: "4px"
				}
			}, [e._v("Advertisement")]), e._v(" "), s("div", {
				staticStyle: {
					padding: "10px",
					"padding-top": "0px"
				}
			}, [s("div", {
				attrs: {
					id: "vanis-io_300x250_2"
				}
			})])]), e._v(" "), e.stats ? s("div", {
				staticClass: "fade-box",
				class: {
					scroll: e.isLoadingAd
				}
			}, [s("div", {
				staticStyle: {
					padding: "15px"
				}
			}, [s("div", [e._v("Time Alive: " + e._s(e.timeAlive))]), e._v(" "), s("div", [e._v("Highscore: " + e._s(e.highscore))]), e._v(" "), s("div", [e._v("Players Eaten: " + e._s(e.stats.killCount))]), e._v(" "), s("btn", {
				staticClass: "continue",
				nativeOn: {
					click: function (t) {
						return e.onContinueClick(t)
					}
				}
			}, [e._v("Continue")])], 1)]) : e._e()])])
		};
	Ot._withStripped = true;
	var Ft = s(1),
		Dt = s(76),
		zt = {
			props: ["stats"],
			data: () => ({
				isLoadingAd: false
			}),
			methods: {
				loadAd: function () {
					this.isLoadingAd = Dt.refreshAd("death-box")
				},
				onContinueClick: function () {
					Ft.state.deathScreen = false, Ft.showDeathScreen(false), Ft.showMenu(true)
				}
			},
			watch: {
				stats: function () {
					this.loadAd()
				}
			},
			computed: {
				timeAlive: function () {
					var e = this.stats.timeAlive;
					return e < 60 ? e + "s" : Math.floor(e / 60) + "min " + e % 60 + "s"
				},
				highscore: function () {
					var e = this.stats.highscore;
					return Ft.getShortMass(e)
				}
			}
		},
		Bt = (s(254), Object(f.a)(zt, Ot, [], false, null, "3249d726", null));
	Bt.options.__file = "src/components/death-stats.vue";
	var $t = Bt.exports,
		Wt = function () {
			var e = this.$createElement;
			return (this._self._c || e)("button", {
				staticClass: "btn"
			}, [this._t("default", [this._v("Here should be something")])], 2)
		};
	Wt._withStripped = true;
	var Ht = {},
		jt = (s(256), Object(f.a)(Ht, Wt, [], false, null, "b0b10308", null));
	jt.options.__file = "src/components/btn.vue";
	var Vt = jt.exports,
		Xt = function () {
			var e = this,
				t = e.$createElement,
				s = e._self._c || t;
			return e.show ? s("div", {
				class: {
					"auto-hide": e.autoHideReplayControls
				},
				attrs: {
					id: "replay-controls"
				}
			}, [s("div", {
				staticStyle: {
					"text-align": "right"
				}
			}, [s("div", [e._v("Opacity " + e._s(e.cellOpacity) + "%")]), e._v(" "), s("div", [s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.cellOpacity,
					expression: "cellOpacity"
				}],
				staticClass: "replay-slider",
				staticStyle: {
					width: "105px",
					display: "inline-block"
				},
				attrs: {
					id: "replay-opacity-slider",
					type: "range",
					min: "10",
					max: "100"
				},
				domProps: {
					value: e.cellOpacity
				},
				on: {
					input: e.onCellOpacitySlide,
					__r: function (t) {
						e.cellOpacity = t.target.value
					}
				}
			})])]), e._v(" "), s("div", {
				staticStyle: {
					"margin-bottom": "5px",
					display: "flex"
				}
			}, [s("div", {
				staticStyle: {
					flex: "1"
				}
			}, [e._v(e._s(e.replaySecond.toFixed(1)) + " seconds")]), e._v(" "), s("div", {
				staticStyle: {
					"margin-right": "10px"
				}
			}, [s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.autoHideReplayControls,
					expression: "autoHideReplayControls"
				}],
				attrs: {
					type: "checkbox",
					id: "replay-auto-hide-controls"
				},
				domProps: {
					checked: Array.isArray(e.autoHideReplayControls) ? e._i(e.autoHideReplayControls, null) > -1 : e.autoHideReplayControls
				},
				on: {
					change: [function (t) {
						var s = e.autoHideReplayControls,
							a = t.target,
							n = !!a.checked;
						if (Array.isArray(s)) {
							var i = e._i(s, null);
							a.checked ? i < 0 && (e.autoHideReplayControls = s.concat([null])) : i > -1 && (e.autoHideReplayControls = s.slice(0, i).concat(s.slice(i + 1)))
						} else e.autoHideReplayControls = n
					}, e.saveAutoHideControls]
				}
			}), e._v(" "), s("label", {
				attrs: {
					for: "replay-auto-hide-controls"
				}
			}, [e._v("Auto Hide Controls")])])]), e._v(" "), s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.rangeIndex,
					expression: "rangeIndex"
				}],
				staticClass: "replay-slider",
				attrs: {
					type: "range",
					min: e.rangeMin,
					max: e.rangeMax
				},
				domProps: {
					value: e.rangeIndex
				},
				on: {
					input: e.onSlide,
					change: e.onSlideEnd,
					__r: function (t) {
						e.rangeIndex = t.target.value
					}
				}
			})]) : e._e()
		};
	Xt._withStripped = true;
	var Gt = s(1),
		Zt = {
			data: () => ({
				show: false,
				autoHideReplayControls: Gt.settings.autoHideReplayControls,
				drawDelay: Gt.settings.drawDelay,
				cellOpacity: 100,
				rangeMin: 0,
				rangeIndex: 0,
				rangeMax: 1e3,
				replaySecond: 0,
				packetCount: 0
			}),
			created: function () {
				Gt.events.$on("show-replay-controls", this.onShow), Gt.events.$on("replay-index-change", this.onReplayIndexChange)
			},
			methods: {
				onShow(e) {
					e ? (this.show = true, this.packetCount = e - 1) : (this.show = false, this.cellOpacity = 100, this.rangeIndex = 0, this.packetCount = 0)
				},
				onReplayIndexChange(e) {
					var t = e / this.packetCount;
					this.rangeIndex = Math.floor(t * this.rangeMax), this.replaySecond = e / 25
				},
				onSlide(e) {
					Gt.moveInterval && (clearInterval(Gt.moveInterval), Gt.moveInterval = null), this.replaySecond = Gt.replayMoveTo(this.rangeIndex / this.rangeMax) / 25
				},
				onSlideEnd(e) {
					!Gt.moveInterval && (Gt.moveInterval = setInterval(Gt.replayUpdate, 40))
				},
				onCellOpacitySlide() {
					Gt.scene.foreground.alpha = this.cellOpacity / 100
				},
				saveAutoHideControls() {
					Gt.settings.set("autoHideReplayControls", this.autoHideReplayControls)
				}
			}
		},
		qt = (s(258), Object(f.a)(Zt, Xt, [], false, null, "c2c2ac08", null));
	qt.options.__file = "src/components/replay-controls.vue";
	var Yt = qt.exports,
		Jt = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return this.show ? t("div", {
				attrs: {
					id: "ab-overlay"
				}
			}, [this._m(0)]) : this._e()
		};
	Jt._withStripped = true;
	var Kt = s(15),
		{
			isFirstVisit: Qt
		} = s(18),
		es = {
			data: () => ({
				show: false
			}),
			created() {
				Qt ? console.log("Welcome to Vanis.io!") : Kt.get("/ads.css").then(e => {}).catch(e => {
					!e.response && (this.show = true)
				})
			}
		},
		ts = (s(260), Object(f.a)(es, Jt, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "content"
			}, [t("img", {
				staticStyle: {
					width: "120px"
				},
				attrs: {
					src: "img/sad.png"
				}
			}), this._v(" "), t("p", {
				staticStyle: {
					"font-size": "3em"
				}
			}, [this._v("Adblock Detected")]), this._v(" "), t("p", {
				staticStyle: {
					"font-size": "1.5em",
					"margin-bottom": "15px"
				}
			}, [this._v("We use advertisements to fund our servers!")]), this._v(" "), t("img", {
				staticStyle: {
					"border-radius": "4px",
					"box-shadow": "0 0 10px black"
				},
				attrs: {
					src: "img/ab.gif"
				}
			})])
		}], false, null, "1611deb4", null));
	ts.options.__file = "src/components/ab-overlay.vue";
	var ss = ts.exports,
		as = function () {
			var e = this.$createElement;
			return (this._self._c || e)("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.show,
					expression: "show"
				}],
				staticClass: "image-captcha-overlay"
			}, [this._m(0)])
		};
	as._withStripped = true;
	var ns = s(1),
		is = s(24);
	var os = {
			data: () => ({
				show: false,
				scriptLoadPromise: null,
				captchaId: null,
				wsId: null
			}),
			created() {
				ns.events.$on("show-image-captcha", async() => {
					this.show = true, this.wsId = ns.currentWsId, grecaptcha.ready(() => {
						this.renderCaptcha()
					})
				})
			},
			methods: {
				renderCaptcha() {
					null === this.captchaId ? this.captchaId = grecaptcha.render(document.getElementById("image-captcha-container"), {
						sitekey: "6LfDYLgZAAAAAJpd1zpnoWxIXhFaxHKqoTHXKYhh",
						callback: this.onCaptchaToken.bind(this)
					}) : grecaptcha.reset(this.captchaId)
				},
				onCaptchaToken(e) {
					var t = ns.currentWsId;
					if (t && t === this.wsId)
						if (e) {
							var s = new is;
							s.uint8(11), s.utf8(e), ns.send(s.write()), this.show = false
						} else this.renderCaptcha();
					else this.show = false
				}
			}
		},
		rs = (s(262), Object(f.a)(os, as, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "center-screen"
			}, [t("div", {
				staticStyle: {
					color: "orange",
					"margin-bottom": "6px"
				}
			}, [this._v("Login and level up to skip captcha!")]), this._v(" "), t("div", {
				attrs: {
					id: "image-captcha-container"
				}
			})])
		}], false, null, "76d60428", null));
	rs.options.__file = "src/components/image-captcha.vue";
	var ls = rs.exports;
	n.a.use(o.a);
	var cs = s(4);
	n.a.component("btn", Vt), window.app = new n.a({
		el: "#app",
		data: {
			showHud: cs.showHud,
			showMenu: true,
			showDeathScreen: false,
			deathStats: null
		},
		components: {
			imageCaptcha: ls,
			mainContainer: Ze,
			socialLinks: Je,
			privacyTos: tt,
			contextMenu: it,
			hud: Nt,
			deathStats: $t,
			replayControls: Yt,
			abOverlay: ss
		}
	})
}]);
