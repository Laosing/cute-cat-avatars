var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance2;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance2;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env5) {
        return 1;
      }
      hasColors(count, env5) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var isatty, tty_default;
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_read_stream();
    init_write_stream();
    init_read_stream();
    init_write_stream();
    isatty = /* @__PURE__ */ __name(function() {
      return false;
    }, "isatty");
    tty_default = {
      ReadStream,
      WriteStream,
      isatty
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS({
  "node_modules/fast-decode-uri-component/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var UTF8_ACCEPT = 12;
    var UTF8_REJECT = 0;
    var UTF8_DATA = [
      // The first part of the table maps bytes to character to a transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      7,
      7,
      10,
      9,
      9,
      9,
      11,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      // The second part of the table maps a state to a new state when adding a
      // transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      24,
      36,
      48,
      60,
      72,
      84,
      96,
      0,
      12,
      12,
      12,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // The third part maps the current transition to a mask that needs to apply
      // to the byte.
      127,
      63,
      63,
      63,
      0,
      31,
      15,
      15,
      15,
      7,
      7,
      7
    ];
    function decodeURIComponent2(uri2) {
      var percentPosition = uri2.indexOf("%");
      if (percentPosition === -1) return uri2;
      var length = uri2.length;
      var decoded = "";
      var last = 0;
      var codepoint = 0;
      var startOfOctets = percentPosition;
      var state = UTF8_ACCEPT;
      while (percentPosition > -1 && percentPosition < length) {
        var high = hexCodeToInt(uri2[percentPosition + 1], 4);
        var low = hexCodeToInt(uri2[percentPosition + 2], 0);
        var byte2 = high | low;
        var type = UTF8_DATA[byte2];
        state = UTF8_DATA[256 + state + type];
        codepoint = codepoint << 6 | byte2 & UTF8_DATA[364 + type];
        if (state === UTF8_ACCEPT) {
          decoded += uri2.slice(last, startOfOctets);
          decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(
            55232 + (codepoint >> 10),
            56320 + (codepoint & 1023)
          );
          codepoint = 0;
          last = percentPosition + 3;
          percentPosition = startOfOctets = uri2.indexOf("%", last);
        } else if (state === UTF8_REJECT) {
          return null;
        } else {
          percentPosition += 3;
          if (percentPosition < length && uri2.charCodeAt(percentPosition) === 37) continue;
          return null;
        }
      }
      return decoded + uri2.slice(last);
    }
    __name(decodeURIComponent2, "decodeURIComponent");
    var HEX = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "a": 10,
      "A": 10,
      "b": 11,
      "B": 11,
      "c": 12,
      "C": 12,
      "d": 13,
      "D": 13,
      "e": 14,
      "E": 14,
      "f": 15,
      "F": 15
    };
    function hexCodeToInt(c, shift) {
      var i = HEX[c];
      return i === void 0 ? 255 : i << shift;
    }
    __name(hexCodeToInt, "hexCodeToInt");
    module.exports = decodeURIComponent2;
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/@borewit/text-codec/lib/index.js
function textDecode(bytes, encoding = "utf-8") {
  switch (encoding.toLowerCase()) {
    case "utf-8":
    case "utf8":
      if (typeof globalThis.TextDecoder !== "undefined") {
        return new globalThis.TextDecoder("utf-8").decode(bytes);
      }
      return decodeUTF8(bytes);
    case "utf-16le":
      return decodeUTF16LE(bytes);
    case "ascii":
      return decodeASCII(bytes);
    case "latin1":
    case "iso-8859-1":
      return decodeLatin1(bytes);
    case "windows-1252":
      return decodeWindows1252(bytes);
    default:
      throw new RangeError(`Encoding '${encoding}' not supported`);
  }
}
function decodeUTF8(bytes) {
  let out = "";
  let i = 0;
  while (i < bytes.length) {
    const b1 = bytes[i++];
    if (b1 < 128) {
      out += String.fromCharCode(b1);
    } else if (b1 < 224) {
      const b2 = bytes[i++] & 63;
      out += String.fromCharCode((b1 & 31) << 6 | b2);
    } else if (b1 < 240) {
      const b2 = bytes[i++] & 63;
      const b3 = bytes[i++] & 63;
      out += String.fromCharCode((b1 & 15) << 12 | b2 << 6 | b3);
    } else {
      const b2 = bytes[i++] & 63;
      const b3 = bytes[i++] & 63;
      const b4 = bytes[i++] & 63;
      let cp = (b1 & 7) << 18 | b2 << 12 | b3 << 6 | b4;
      cp -= 65536;
      out += String.fromCharCode(55296 + (cp >> 10 & 1023), 56320 + (cp & 1023));
    }
  }
  return out;
}
function decodeUTF16LE(bytes) {
  let out = "";
  for (let i = 0; i < bytes.length; i += 2) {
    out += String.fromCharCode(bytes[i] | bytes[i + 1] << 8);
  }
  return out;
}
function decodeASCII(bytes) {
  return String.fromCharCode(...bytes.map((b) => b & 127));
}
function decodeLatin1(bytes) {
  return String.fromCharCode(...bytes);
}
function decodeWindows1252(bytes) {
  let out = "";
  for (const b of bytes) {
    if (b >= 128 && b <= 159 && WINDOWS_1252_EXTRA[b]) {
      out += WINDOWS_1252_EXTRA[b];
    } else {
      out += String.fromCharCode(b);
    }
  }
  return out;
}
var WINDOWS_1252_EXTRA, WINDOWS_1252_REVERSE;
var init_lib = __esm({
  "node_modules/@borewit/text-codec/lib/index.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    WINDOWS_1252_EXTRA = {
      128: "\u20AC",
      130: "\u201A",
      131: "\u0192",
      132: "\u201E",
      133: "\u2026",
      134: "\u2020",
      135: "\u2021",
      136: "\u02C6",
      137: "\u2030",
      138: "\u0160",
      139: "\u2039",
      140: "\u0152",
      142: "\u017D",
      145: "\u2018",
      146: "\u2019",
      147: "\u201C",
      148: "\u201D",
      149: "\u2022",
      150: "\u2013",
      151: "\u2014",
      152: "\u02DC",
      153: "\u2122",
      154: "\u0161",
      155: "\u203A",
      156: "\u0153",
      158: "\u017E",
      159: "\u0178"
    };
    WINDOWS_1252_REVERSE = {};
    for (const [code, char] of Object.entries(WINDOWS_1252_EXTRA)) {
      WINDOWS_1252_REVERSE[char] = Number.parseInt(code);
    }
    __name(textDecode, "textDecode");
    __name(decodeUTF8, "decodeUTF8");
    __name(decodeUTF16LE, "decodeUTF16LE");
    __name(decodeASCII, "decodeASCII");
    __name(decodeLatin1, "decodeLatin1");
    __name(decodeWindows1252, "decodeWindows1252");
  }
});

// node_modules/token-types/lib/index.js
function dv(array) {
  return new DataView(array.buffer, array.byteOffset);
}
var ieee754, UINT8, UINT16_LE, UINT16_BE, UINT32_LE, UINT32_BE, INT32_BE, UINT64_LE, StringType2;
var init_lib2 = __esm({
  "node_modules/token-types/lib/index.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    ieee754 = __toESM(require_ieee754(), 1);
    init_lib();
    __name(dv, "dv");
    UINT8 = {
      len: 1,
      get(array, offset) {
        return dv(array).getUint8(offset);
      },
      put(array, offset, value) {
        dv(array).setUint8(offset, value);
        return offset + 1;
      }
    };
    UINT16_LE = {
      len: 2,
      get(array, offset) {
        return dv(array).getUint16(offset, true);
      },
      put(array, offset, value) {
        dv(array).setUint16(offset, value, true);
        return offset + 2;
      }
    };
    UINT16_BE = {
      len: 2,
      get(array, offset) {
        return dv(array).getUint16(offset);
      },
      put(array, offset, value) {
        dv(array).setUint16(offset, value);
        return offset + 2;
      }
    };
    UINT32_LE = {
      len: 4,
      get(array, offset) {
        return dv(array).getUint32(offset, true);
      },
      put(array, offset, value) {
        dv(array).setUint32(offset, value, true);
        return offset + 4;
      }
    };
    UINT32_BE = {
      len: 4,
      get(array, offset) {
        return dv(array).getUint32(offset);
      },
      put(array, offset, value) {
        dv(array).setUint32(offset, value);
        return offset + 4;
      }
    };
    INT32_BE = {
      len: 4,
      get(array, offset) {
        return dv(array).getInt32(offset);
      },
      put(array, offset, value) {
        dv(array).setInt32(offset, value);
        return offset + 4;
      }
    };
    UINT64_LE = {
      len: 8,
      get(array, offset) {
        return dv(array).getBigUint64(offset, true);
      },
      put(array, offset, value) {
        dv(array).setBigUint64(offset, value, true);
        return offset + 8;
      }
    };
    StringType2 = class {
      static {
        __name(this, "StringType");
      }
      constructor(len, encoding) {
        this.len = len;
        this.encoding = encoding;
      }
      get(data, offset = 0) {
        const bytes = data.subarray(offset, offset + this.len);
        return textDecode(bytes, this.encoding);
      }
    };
  }
});

// node_modules/strtok3/lib/stream/Errors.js
var defaultMessages, EndOfStreamError, AbortError;
var init_Errors = __esm({
  "node_modules/strtok3/lib/stream/Errors.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    defaultMessages = "End-Of-Stream";
    EndOfStreamError = class extends Error {
      static {
        __name(this, "EndOfStreamError");
      }
      constructor() {
        super(defaultMessages);
        this.name = "EndOfStreamError";
      }
    };
    AbortError = class extends Error {
      static {
        __name(this, "AbortError");
      }
      constructor(message = "The operation was aborted") {
        super(message);
        this.name = "AbortError";
      }
    };
  }
});

// node_modules/strtok3/lib/stream/Deferred.js
var init_Deferred = __esm({
  "node_modules/strtok3/lib/stream/Deferred.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
  }
});

// node_modules/strtok3/lib/stream/AbstractStreamReader.js
var AbstractStreamReader;
var init_AbstractStreamReader = __esm({
  "node_modules/strtok3/lib/stream/AbstractStreamReader.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_Errors();
    AbstractStreamReader = class {
      static {
        __name(this, "AbstractStreamReader");
      }
      constructor() {
        this.endOfStream = false;
        this.interrupted = false;
        this.peekQueue = [];
      }
      async peek(uint8Array, mayBeLess = false) {
        const bytesRead = await this.read(uint8Array, mayBeLess);
        this.peekQueue.push(uint8Array.subarray(0, bytesRead));
        return bytesRead;
      }
      async read(buffer, mayBeLess = false) {
        if (buffer.length === 0) {
          return 0;
        }
        let bytesRead = this.readFromPeekBuffer(buffer);
        if (!this.endOfStream) {
          bytesRead += await this.readRemainderFromStream(buffer.subarray(bytesRead), mayBeLess);
        }
        if (bytesRead === 0 && !mayBeLess) {
          throw new EndOfStreamError();
        }
        return bytesRead;
      }
      /**
       * Read chunk from stream
       * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
       * @returns Number of bytes read
       */
      readFromPeekBuffer(buffer) {
        let remaining = buffer.length;
        let bytesRead = 0;
        while (this.peekQueue.length > 0 && remaining > 0) {
          const peekData = this.peekQueue.pop();
          if (!peekData)
            throw new Error("peekData should be defined");
          const lenCopy = Math.min(peekData.length, remaining);
          buffer.set(peekData.subarray(0, lenCopy), bytesRead);
          bytesRead += lenCopy;
          remaining -= lenCopy;
          if (lenCopy < peekData.length) {
            this.peekQueue.push(peekData.subarray(lenCopy));
          }
        }
        return bytesRead;
      }
      async readRemainderFromStream(buffer, mayBeLess) {
        let bytesRead = 0;
        while (bytesRead < buffer.length && !this.endOfStream) {
          if (this.interrupted) {
            throw new AbortError();
          }
          const chunkLen = await this.readFromStream(buffer.subarray(bytesRead), mayBeLess);
          if (chunkLen === 0)
            break;
          bytesRead += chunkLen;
        }
        if (!mayBeLess && bytesRead < buffer.length) {
          throw new EndOfStreamError();
        }
        return bytesRead;
      }
    };
  }
});

// node_modules/strtok3/lib/stream/StreamReader.js
var init_StreamReader = __esm({
  "node_modules/strtok3/lib/stream/StreamReader.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_Errors();
    init_Deferred();
    init_AbstractStreamReader();
  }
});

// node_modules/strtok3/lib/stream/WebStreamReader.js
var WebStreamReader;
var init_WebStreamReader = __esm({
  "node_modules/strtok3/lib/stream/WebStreamReader.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_AbstractStreamReader();
    WebStreamReader = class extends AbstractStreamReader {
      static {
        __name(this, "WebStreamReader");
      }
      constructor(reader) {
        super();
        this.reader = reader;
      }
      async abort() {
        return this.close();
      }
      async close() {
        this.reader.releaseLock();
      }
    };
  }
});

// node_modules/strtok3/lib/stream/WebStreamByobReader.js
var WebStreamByobReader;
var init_WebStreamByobReader = __esm({
  "node_modules/strtok3/lib/stream/WebStreamByobReader.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_WebStreamReader();
    WebStreamByobReader = class extends WebStreamReader {
      static {
        __name(this, "WebStreamByobReader");
      }
      /**
       * Read from stream
       * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
       * @param mayBeLess - If true, may fill the buffer partially
       * @protected Bytes read
       */
      async readFromStream(buffer, mayBeLess) {
        if (buffer.length === 0)
          return 0;
        const result = await this.reader.read(new Uint8Array(buffer.length), { min: mayBeLess ? void 0 : buffer.length });
        if (result.done) {
          this.endOfStream = result.done;
        }
        if (result.value) {
          buffer.set(result.value);
          return result.value.length;
        }
        return 0;
      }
    };
  }
});

// node_modules/strtok3/lib/stream/WebStreamDefaultReader.js
var WebStreamDefaultReader;
var init_WebStreamDefaultReader = __esm({
  "node_modules/strtok3/lib/stream/WebStreamDefaultReader.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_Errors();
    init_AbstractStreamReader();
    WebStreamDefaultReader = class extends AbstractStreamReader {
      static {
        __name(this, "WebStreamDefaultReader");
      }
      constructor(reader) {
        super();
        this.reader = reader;
        this.buffer = null;
      }
      /**
       * Copy chunk to target, and store the remainder in this.buffer
       */
      writeChunk(target, chunk) {
        const written = Math.min(chunk.length, target.length);
        target.set(chunk.subarray(0, written));
        if (written < chunk.length) {
          this.buffer = chunk.subarray(written);
        } else {
          this.buffer = null;
        }
        return written;
      }
      /**
       * Read from stream
       * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
       * @param mayBeLess - If true, may fill the buffer partially
       * @protected Bytes read
       */
      async readFromStream(buffer, mayBeLess) {
        if (buffer.length === 0)
          return 0;
        let totalBytesRead = 0;
        if (this.buffer) {
          totalBytesRead += this.writeChunk(buffer, this.buffer);
        }
        while (totalBytesRead < buffer.length && !this.endOfStream) {
          const result = await this.reader.read();
          if (result.done) {
            this.endOfStream = true;
            break;
          }
          if (result.value) {
            totalBytesRead += this.writeChunk(buffer.subarray(totalBytesRead), result.value);
          }
        }
        if (!mayBeLess && totalBytesRead === 0 && this.endOfStream) {
          throw new EndOfStreamError();
        }
        return totalBytesRead;
      }
      abort() {
        this.interrupted = true;
        return this.reader.cancel();
      }
      async close() {
        await this.abort();
        this.reader.releaseLock();
      }
    };
  }
});

// node_modules/strtok3/lib/stream/WebStreamReaderFactory.js
function makeWebStreamReader(stream) {
  try {
    const reader = stream.getReader({ mode: "byob" });
    if (reader instanceof ReadableStreamDefaultReader) {
      return new WebStreamDefaultReader(reader);
    }
    return new WebStreamByobReader(reader);
  } catch (error) {
    if (error instanceof TypeError) {
      return new WebStreamDefaultReader(stream.getReader());
    }
    throw error;
  }
}
var init_WebStreamReaderFactory = __esm({
  "node_modules/strtok3/lib/stream/WebStreamReaderFactory.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_WebStreamByobReader();
    init_WebStreamDefaultReader();
    __name(makeWebStreamReader, "makeWebStreamReader");
  }
});

// node_modules/strtok3/lib/stream/index.js
var init_stream = __esm({
  "node_modules/strtok3/lib/stream/index.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_Errors();
    init_StreamReader();
    init_WebStreamByobReader();
    init_WebStreamDefaultReader();
    init_WebStreamReaderFactory();
  }
});

// node_modules/strtok3/lib/AbstractTokenizer.js
var AbstractTokenizer;
var init_AbstractTokenizer = __esm({
  "node_modules/strtok3/lib/AbstractTokenizer.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_stream();
    AbstractTokenizer = class {
      static {
        __name(this, "AbstractTokenizer");
      }
      /**
       * Constructor
       * @param options Tokenizer options
       * @protected
       */
      constructor(options) {
        this.numBuffer = new Uint8Array(8);
        this.position = 0;
        this.onClose = options?.onClose;
        if (options?.abortSignal) {
          options.abortSignal.addEventListener("abort", () => {
            this.abort();
          });
        }
      }
      /**
       * Read a token from the tokenizer-stream
       * @param token - The token to read
       * @param position - If provided, the desired position in the tokenizer-stream
       * @returns Promise with token data
       */
      async readToken(token, position = this.position) {
        const uint8Array = new Uint8Array(token.len);
        const len = await this.readBuffer(uint8Array, { position });
        if (len < token.len)
          throw new EndOfStreamError();
        return token.get(uint8Array, 0);
      }
      /**
       * Peek a token from the tokenizer-stream.
       * @param token - Token to peek from the tokenizer-stream.
       * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
       * @returns Promise with token data
       */
      async peekToken(token, position = this.position) {
        const uint8Array = new Uint8Array(token.len);
        const len = await this.peekBuffer(uint8Array, { position });
        if (len < token.len)
          throw new EndOfStreamError();
        return token.get(uint8Array, 0);
      }
      /**
       * Read a numeric token from the stream
       * @param token - Numeric token
       * @returns Promise with number
       */
      async readNumber(token) {
        const len = await this.readBuffer(this.numBuffer, { length: token.len });
        if (len < token.len)
          throw new EndOfStreamError();
        return token.get(this.numBuffer, 0);
      }
      /**
       * Read a numeric token from the stream
       * @param token - Numeric token
       * @returns Promise with number
       */
      async peekNumber(token) {
        const len = await this.peekBuffer(this.numBuffer, { length: token.len });
        if (len < token.len)
          throw new EndOfStreamError();
        return token.get(this.numBuffer, 0);
      }
      /**
       * Ignore number of bytes, advances the pointer in under tokenizer-stream.
       * @param length - Number of bytes to ignore
       * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
       */
      async ignore(length) {
        if (this.fileInfo.size !== void 0) {
          const bytesLeft = this.fileInfo.size - this.position;
          if (length > bytesLeft) {
            this.position += bytesLeft;
            return bytesLeft;
          }
        }
        this.position += length;
        return length;
      }
      async close() {
        await this.abort();
        await this.onClose?.();
      }
      normalizeOptions(uint8Array, options) {
        if (!this.supportsRandomAccess() && options && options.position !== void 0 && options.position < this.position) {
          throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        }
        return {
          ...{
            mayBeLess: false,
            offset: 0,
            length: uint8Array.length,
            position: this.position
          },
          ...options
        };
      }
      abort() {
        return Promise.resolve();
      }
    };
  }
});

// node_modules/strtok3/lib/ReadStreamTokenizer.js
var maxBufferSize, ReadStreamTokenizer;
var init_ReadStreamTokenizer = __esm({
  "node_modules/strtok3/lib/ReadStreamTokenizer.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_AbstractTokenizer();
    init_stream();
    maxBufferSize = 256e3;
    ReadStreamTokenizer = class extends AbstractTokenizer {
      static {
        __name(this, "ReadStreamTokenizer");
      }
      /**
       * Constructor
       * @param streamReader stream-reader to read from
       * @param options Tokenizer options
       */
      constructor(streamReader, options) {
        super(options);
        this.streamReader = streamReader;
        this.fileInfo = options?.fileInfo ?? {};
      }
      /**
       * Read buffer from tokenizer
       * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
       * @param options - Read behaviour options
       * @returns Promise with number of bytes read
       */
      async readBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const skipBytes = normOptions.position - this.position;
        if (skipBytes > 0) {
          await this.ignore(skipBytes);
          return this.readBuffer(uint8Array, options);
        }
        if (skipBytes < 0) {
          throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        }
        if (normOptions.length === 0) {
          return 0;
        }
        const bytesRead = await this.streamReader.read(uint8Array.subarray(0, normOptions.length), normOptions.mayBeLess);
        this.position += bytesRead;
        if ((!options || !options.mayBeLess) && bytesRead < normOptions.length) {
          throw new EndOfStreamError();
        }
        return bytesRead;
      }
      /**
       * Peek (read ahead) buffer from tokenizer
       * @param uint8Array - Uint8Array (or Buffer) to write data to
       * @param options - Read behaviour options
       * @returns Promise with number of bytes peeked
       */
      async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        let bytesRead = 0;
        if (normOptions.position) {
          const skipBytes = normOptions.position - this.position;
          if (skipBytes > 0) {
            const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
            bytesRead = await this.peekBuffer(skipBuffer, { mayBeLess: normOptions.mayBeLess });
            uint8Array.set(skipBuffer.subarray(skipBytes));
            return bytesRead - skipBytes;
          }
          if (skipBytes < 0) {
            throw new Error("Cannot peek from a negative offset in a stream");
          }
        }
        if (normOptions.length > 0) {
          try {
            bytesRead = await this.streamReader.peek(uint8Array.subarray(0, normOptions.length), normOptions.mayBeLess);
          } catch (err) {
            if (options?.mayBeLess && err instanceof EndOfStreamError) {
              return 0;
            }
            throw err;
          }
          if (!normOptions.mayBeLess && bytesRead < normOptions.length) {
            throw new EndOfStreamError();
          }
        }
        return bytesRead;
      }
      async ignore(length) {
        const bufSize = Math.min(maxBufferSize, length);
        const buf = new Uint8Array(bufSize);
        let totBytesRead = 0;
        while (totBytesRead < length) {
          const remaining = length - totBytesRead;
          const bytesRead = await this.readBuffer(buf, { length: Math.min(bufSize, remaining) });
          if (bytesRead < 0) {
            return bytesRead;
          }
          totBytesRead += bytesRead;
        }
        return totBytesRead;
      }
      abort() {
        return this.streamReader.abort();
      }
      async close() {
        return this.streamReader.close();
      }
      supportsRandomAccess() {
        return false;
      }
    };
  }
});

// node_modules/strtok3/lib/BufferTokenizer.js
var BufferTokenizer;
var init_BufferTokenizer = __esm({
  "node_modules/strtok3/lib/BufferTokenizer.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_stream();
    init_AbstractTokenizer();
    BufferTokenizer = class extends AbstractTokenizer {
      static {
        __name(this, "BufferTokenizer");
      }
      /**
       * Construct BufferTokenizer
       * @param uint8Array - Uint8Array to tokenize
       * @param options Tokenizer options
       */
      constructor(uint8Array, options) {
        super(options);
        this.uint8Array = uint8Array;
        this.fileInfo = { ...options?.fileInfo ?? {}, ...{ size: uint8Array.length } };
      }
      /**
       * Read buffer from tokenizer
       * @param uint8Array - Uint8Array to tokenize
       * @param options - Read behaviour options
       * @returns {Promise<number>}
       */
      async readBuffer(uint8Array, options) {
        if (options?.position) {
          this.position = options.position;
        }
        const bytesRead = await this.peekBuffer(uint8Array, options);
        this.position += bytesRead;
        return bytesRead;
      }
      /**
       * Peek (read ahead) buffer from tokenizer
       * @param uint8Array
       * @param options - Read behaviour options
       * @returns {Promise<number>}
       */
      async peekBuffer(uint8Array, options) {
        const normOptions = this.normalizeOptions(uint8Array, options);
        const bytes2read = Math.min(this.uint8Array.length - normOptions.position, normOptions.length);
        if (!normOptions.mayBeLess && bytes2read < normOptions.length) {
          throw new EndOfStreamError();
        }
        uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read));
        return bytes2read;
      }
      close() {
        return super.close();
      }
      supportsRandomAccess() {
        return true;
      }
      setPosition(position) {
        this.position = position;
      }
    };
  }
});

// node_modules/strtok3/lib/BlobTokenizer.js
var BlobTokenizer;
var init_BlobTokenizer = __esm({
  "node_modules/strtok3/lib/BlobTokenizer.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_stream();
    init_AbstractTokenizer();
    BlobTokenizer = class extends AbstractTokenizer {
      static {
        __name(this, "BlobTokenizer");
      }
      /**
       * Construct BufferTokenizer
       * @param blob - Uint8Array to tokenize
       * @param options Tokenizer options
       */
      constructor(blob, options) {
        super(options);
        this.blob = blob;
        this.fileInfo = { ...options?.fileInfo ?? {}, ...{ size: blob.size, mimeType: blob.type } };
      }
      /**
       * Read buffer from tokenizer
       * @param uint8Array - Uint8Array to tokenize
       * @param options - Read behaviour options
       * @returns {Promise<number>}
       */
      async readBuffer(uint8Array, options) {
        if (options?.position) {
          this.position = options.position;
        }
        const bytesRead = await this.peekBuffer(uint8Array, options);
        this.position += bytesRead;
        return bytesRead;
      }
      /**
       * Peek (read ahead) buffer from tokenizer
       * @param buffer
       * @param options - Read behaviour options
       * @returns {Promise<number>}
       */
      async peekBuffer(buffer, options) {
        const normOptions = this.normalizeOptions(buffer, options);
        const bytes2read = Math.min(this.blob.size - normOptions.position, normOptions.length);
        if (!normOptions.mayBeLess && bytes2read < normOptions.length) {
          throw new EndOfStreamError();
        }
        const arrayBuffer = await this.blob.slice(normOptions.position, normOptions.position + bytes2read).arrayBuffer();
        buffer.set(new Uint8Array(arrayBuffer));
        return bytes2read;
      }
      close() {
        return super.close();
      }
      supportsRandomAccess() {
        return true;
      }
      setPosition(position) {
        this.position = position;
      }
    };
  }
});

// node_modules/strtok3/lib/core.js
function fromWebStream(webStream, options) {
  const webStreamReader = makeWebStreamReader(webStream);
  const _options = options ?? {};
  const chainedClose = _options.onClose;
  _options.onClose = async () => {
    await webStreamReader.close();
    if (chainedClose) {
      return chainedClose();
    }
  };
  return new ReadStreamTokenizer(webStreamReader, _options);
}
function fromBuffer(uint8Array, options) {
  return new BufferTokenizer(uint8Array, options);
}
function fromBlob(blob, options) {
  return new BlobTokenizer(blob, options);
}
var init_core = __esm({
  "node_modules/strtok3/lib/core.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_stream();
    init_ReadStreamTokenizer();
    init_BufferTokenizer();
    init_BlobTokenizer();
    init_stream();
    init_AbstractTokenizer();
    __name(fromWebStream, "fromWebStream");
    __name(fromBuffer, "fromBuffer");
    __name(fromBlob, "fromBlob");
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse2(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse2(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse2, "parse");
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    function setup(env5) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env5).forEach((key) => {
        createDebug[key] = env5[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      __name(selectColor, "selectColor");
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug3(...args) {
          if (!debug3.enabled) {
            return;
          }
          const self = debug3;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        __name(debug3, "debug");
        debug3.namespace = namespace;
        debug3.useColors = createDebug.useColors();
        debug3.color = createDebug.selectColor(namespace);
        debug3.extend = extend;
        debug3.destroy = createDebug.destroy;
        Object.defineProperty(debug3, "enabled", {
          enumerable: true,
          configurable: false,
          get: /* @__PURE__ */ __name(() => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          }, "get"),
          set: /* @__PURE__ */ __name((v) => {
            enableOverride = v;
          }, "set")
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug3);
        }
        return debug3;
      }
      __name(createDebug, "createDebug");
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      __name(extend, "extend");
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      __name(enable, "enable");
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      __name(disable, "disable");
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      __name(enabled, "enabled");
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      __name(toNamespace, "toNamespace");
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      __name(coerce, "coerce");
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      __name(destroy, "destroy");
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    __name(setup, "setup");
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/applewebkit\/(\d+)/);
    }
    __name(useColors, "useColors");
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    __name(formatArgs, "formatArgs");
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    __name(save, "save");
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    __name(load, "load");
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    __name(localstorage, "localstorage");
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node-built-in-modules:tty
var require_tty = __commonJS({
  "node-built-in-modules:tty"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_tty();
    module.exports = tty_default;
  }
});

// node-built-in-modules:util
import libDefault from "util";
var require_util = __commonJS({
  "node-built-in-modules:util"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault;
  }
});

// node_modules/supports-color/browser.js
var browser_exports = {};
__export(browser_exports, {
  default: () => browser_default
});
var level, colorSupport, supportsColor, browser_default;
var init_browser = __esm({
  "node_modules/supports-color/browser.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    level = (() => {
      if (!("navigator" in globalThis)) {
        return 0;
      }
      if (globalThis.navigator.userAgentData) {
        const brand = navigator.userAgentData.brands.find(({ brand: brand2 }) => brand2 === "Chromium");
        if (brand?.version > 93) {
          return 3;
        }
      }
      if (/\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent)) {
        return 1;
      }
      return 0;
    })();
    colorSupport = level !== 0 && {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
    supportsColor = {
      stdout: colorSupport,
      stderr: colorSupport
    };
    browser_default = supportsColor;
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var tty = require_tty();
    var util = require_util();
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor2 = (init_browser(), __toCommonJS(browser_exports));
      if (supportsColor2 && (supportsColor2.stderr || supportsColor2).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    __name(useColors, "useColors");
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    __name(formatArgs, "formatArgs");
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    __name(getDate, "getDate");
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    __name(log, "log");
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    __name(save, "save");
    function load() {
      return process.env.DEBUG;
    }
    __name(load, "load");
    function init(debug3) {
      debug3.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug3.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    __name(init, "init");
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});

// node_modules/@tokenizer/inflate/lib/ZipToken.js
var Signature, DataDescriptor, LocalFileHeaderToken, EndOfCentralDirectoryRecordToken, FileHeader;
var init_ZipToken = __esm({
  "node_modules/@tokenizer/inflate/lib/ZipToken.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_lib2();
    Signature = {
      LocalFileHeader: 67324752,
      DataDescriptor: 134695760,
      CentralFileHeader: 33639248,
      EndOfCentralDirectory: 101010256
    };
    DataDescriptor = {
      get(array) {
        return {
          signature: UINT32_LE.get(array, 0),
          compressedSize: UINT32_LE.get(array, 8),
          uncompressedSize: UINT32_LE.get(array, 12)
        };
      },
      len: 16
    };
    LocalFileHeaderToken = {
      get(array) {
        const flags = UINT16_LE.get(array, 6);
        return {
          signature: UINT32_LE.get(array, 0),
          minVersion: UINT16_LE.get(array, 4),
          dataDescriptor: !!(flags & 8),
          compressedMethod: UINT16_LE.get(array, 8),
          compressedSize: UINT32_LE.get(array, 18),
          uncompressedSize: UINT32_LE.get(array, 22),
          filenameLength: UINT16_LE.get(array, 26),
          extraFieldLength: UINT16_LE.get(array, 28),
          filename: null
        };
      },
      len: 30
    };
    EndOfCentralDirectoryRecordToken = {
      get(array) {
        return {
          signature: UINT32_LE.get(array, 0),
          nrOfThisDisk: UINT16_LE.get(array, 4),
          nrOfThisDiskWithTheStart: UINT16_LE.get(array, 6),
          nrOfEntriesOnThisDisk: UINT16_LE.get(array, 8),
          nrOfEntriesOfSize: UINT16_LE.get(array, 10),
          sizeOfCd: UINT32_LE.get(array, 12),
          offsetOfStartOfCd: UINT32_LE.get(array, 16),
          zipFileCommentLength: UINT16_LE.get(array, 20)
        };
      },
      len: 22
    };
    FileHeader = {
      get(array) {
        const flags = UINT16_LE.get(array, 8);
        return {
          signature: UINT32_LE.get(array, 0),
          minVersion: UINT16_LE.get(array, 6),
          dataDescriptor: !!(flags & 8),
          compressedMethod: UINT16_LE.get(array, 10),
          compressedSize: UINT32_LE.get(array, 20),
          uncompressedSize: UINT32_LE.get(array, 24),
          filenameLength: UINT16_LE.get(array, 28),
          extraFieldLength: UINT16_LE.get(array, 30),
          fileCommentLength: UINT16_LE.get(array, 32),
          relativeOffsetOfLocalHeader: UINT32_LE.get(array, 42),
          filename: null
        };
      },
      len: 46
    };
  }
});

// node_modules/@tokenizer/inflate/lib/ZipHandler.js
function signatureToArray(signature) {
  const signatureBytes = new Uint8Array(UINT32_LE.len);
  UINT32_LE.put(signatureBytes, 0, signature);
  return signatureBytes;
}
function indexOf(buffer, portion) {
  const bufferLength = buffer.length;
  const portionLength = portion.length;
  if (portionLength > bufferLength)
    return -1;
  for (let i = 0; i <= bufferLength - portionLength; i++) {
    let found = true;
    for (let j = 0; j < portionLength; j++) {
      if (buffer[i + j] !== portion[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }
  return -1;
}
function mergeArrays(chunks) {
  const totalLength = chunks.reduce((acc, curr) => acc + curr.length, 0);
  const mergedArray = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    mergedArray.set(chunk, offset);
    offset += chunk.length;
  }
  return mergedArray;
}
var import_debug, debug, syncBufferSize, ddSignatureArray, eocdSignatureBytes, ZipHandler;
var init_ZipHandler = __esm({
  "node_modules/@tokenizer/inflate/lib/ZipHandler.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_lib2();
    import_debug = __toESM(require_src(), 1);
    init_ZipToken();
    __name(signatureToArray, "signatureToArray");
    debug = (0, import_debug.default)("tokenizer:inflate");
    syncBufferSize = 256 * 1024;
    ddSignatureArray = signatureToArray(Signature.DataDescriptor);
    eocdSignatureBytes = signatureToArray(Signature.EndOfCentralDirectory);
    ZipHandler = class _ZipHandler {
      static {
        __name(this, "ZipHandler");
      }
      constructor(tokenizer) {
        this.tokenizer = tokenizer;
        this.syncBuffer = new Uint8Array(syncBufferSize);
      }
      async isZip() {
        return await this.peekSignature() === Signature.LocalFileHeader;
      }
      peekSignature() {
        return this.tokenizer.peekToken(UINT32_LE);
      }
      async findEndOfCentralDirectoryLocator() {
        const randomReadTokenizer = this.tokenizer;
        const chunkLength = Math.min(16 * 1024, randomReadTokenizer.fileInfo.size);
        const buffer = this.syncBuffer.subarray(0, chunkLength);
        await this.tokenizer.readBuffer(buffer, { position: randomReadTokenizer.fileInfo.size - chunkLength });
        for (let i = buffer.length - 4; i >= 0; i--) {
          if (buffer[i] === eocdSignatureBytes[0] && buffer[i + 1] === eocdSignatureBytes[1] && buffer[i + 2] === eocdSignatureBytes[2] && buffer[i + 3] === eocdSignatureBytes[3]) {
            return randomReadTokenizer.fileInfo.size - chunkLength + i;
          }
        }
        return -1;
      }
      async readCentralDirectory() {
        if (!this.tokenizer.supportsRandomAccess()) {
          debug("Cannot reading central-directory without random-read support");
          return;
        }
        debug("Reading central-directory...");
        const pos = this.tokenizer.position;
        const offset = await this.findEndOfCentralDirectoryLocator();
        if (offset > 0) {
          debug("Central-directory 32-bit signature found");
          const eocdHeader = await this.tokenizer.readToken(EndOfCentralDirectoryRecordToken, offset);
          const files = [];
          this.tokenizer.setPosition(eocdHeader.offsetOfStartOfCd);
          for (let n = 0; n < eocdHeader.nrOfEntriesOfSize; ++n) {
            const entry = await this.tokenizer.readToken(FileHeader);
            if (entry.signature !== Signature.CentralFileHeader) {
              throw new Error("Expected Central-File-Header signature");
            }
            entry.filename = await this.tokenizer.readToken(new StringType2(entry.filenameLength, "utf-8"));
            await this.tokenizer.ignore(entry.extraFieldLength);
            await this.tokenizer.ignore(entry.fileCommentLength);
            files.push(entry);
            debug(`Add central-directory file-entry: n=${n + 1}/${files.length}: filename=${files[n].filename}`);
          }
          this.tokenizer.setPosition(pos);
          return files;
        }
        this.tokenizer.setPosition(pos);
      }
      async unzip(fileCb) {
        const entries = await this.readCentralDirectory();
        if (entries) {
          return this.iterateOverCentralDirectory(entries, fileCb);
        }
        let stop = false;
        do {
          const zipHeader = await this.readLocalFileHeader();
          if (!zipHeader)
            break;
          const next = fileCb(zipHeader);
          stop = !!next.stop;
          let fileData;
          await this.tokenizer.ignore(zipHeader.extraFieldLength);
          if (zipHeader.dataDescriptor && zipHeader.compressedSize === 0) {
            const chunks = [];
            let len = syncBufferSize;
            debug("Compressed-file-size unknown, scanning for next data-descriptor-signature....");
            let nextHeaderIndex = -1;
            while (nextHeaderIndex < 0 && len === syncBufferSize) {
              len = await this.tokenizer.peekBuffer(this.syncBuffer, { mayBeLess: true });
              nextHeaderIndex = indexOf(this.syncBuffer.subarray(0, len), ddSignatureArray);
              const size = nextHeaderIndex >= 0 ? nextHeaderIndex : len;
              if (next.handler) {
                const data = new Uint8Array(size);
                await this.tokenizer.readBuffer(data);
                chunks.push(data);
              } else {
                await this.tokenizer.ignore(size);
              }
            }
            debug(`Found data-descriptor-signature at pos=${this.tokenizer.position}`);
            if (next.handler) {
              await this.inflate(zipHeader, mergeArrays(chunks), next.handler);
            }
          } else {
            if (next.handler) {
              debug(`Reading compressed-file-data: ${zipHeader.compressedSize} bytes`);
              fileData = new Uint8Array(zipHeader.compressedSize);
              await this.tokenizer.readBuffer(fileData);
              await this.inflate(zipHeader, fileData, next.handler);
            } else {
              debug(`Ignoring compressed-file-data: ${zipHeader.compressedSize} bytes`);
              await this.tokenizer.ignore(zipHeader.compressedSize);
            }
          }
          debug(`Reading data-descriptor at pos=${this.tokenizer.position}`);
          if (zipHeader.dataDescriptor) {
            const dataDescriptor = await this.tokenizer.readToken(DataDescriptor);
            if (dataDescriptor.signature !== 134695760) {
              throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - DataDescriptor.len}`);
            }
          }
        } while (!stop);
      }
      async iterateOverCentralDirectory(entries, fileCb) {
        for (const fileHeader of entries) {
          const next = fileCb(fileHeader);
          if (next.handler) {
            this.tokenizer.setPosition(fileHeader.relativeOffsetOfLocalHeader);
            const zipHeader = await this.readLocalFileHeader();
            if (zipHeader) {
              await this.tokenizer.ignore(zipHeader.extraFieldLength);
              const fileData = new Uint8Array(fileHeader.compressedSize);
              await this.tokenizer.readBuffer(fileData);
              await this.inflate(zipHeader, fileData, next.handler);
            }
          }
          if (next.stop)
            break;
        }
      }
      async inflate(zipHeader, fileData, cb) {
        if (zipHeader.compressedMethod === 0) {
          return cb(fileData);
        }
        if (zipHeader.compressedMethod !== 8) {
          throw new Error(`Unsupported ZIP compression method: ${zipHeader.compressedMethod}`);
        }
        debug(`Decompress filename=${zipHeader.filename}, compressed-size=${fileData.length}`);
        const uncompressedData = await _ZipHandler.decompressDeflateRaw(fileData);
        return cb(uncompressedData);
      }
      static async decompressDeflateRaw(data) {
        const input = new ReadableStream({
          start(controller) {
            controller.enqueue(data);
            controller.close();
          }
        });
        const ds = new DecompressionStream("deflate-raw");
        const output = input.pipeThrough(ds);
        try {
          const response = new Response(output);
          const buffer = await response.arrayBuffer();
          return new Uint8Array(buffer);
        } catch (err) {
          const message = err instanceof Error ? `Failed to deflate ZIP entry: ${err.message}` : "Unknown decompression error in ZIP entry";
          throw new TypeError(message);
        }
      }
      async readLocalFileHeader() {
        const signature = await this.tokenizer.peekToken(UINT32_LE);
        if (signature === Signature.LocalFileHeader) {
          const header = await this.tokenizer.readToken(LocalFileHeaderToken);
          header.filename = await this.tokenizer.readToken(new StringType2(header.filenameLength, "utf-8"));
          return header;
        }
        if (signature === Signature.CentralFileHeader) {
          return false;
        }
        if (signature === 3759263696) {
          throw new Error("Encrypted ZIP");
        }
        throw new Error("Unexpected signature");
      }
    };
    __name(indexOf, "indexOf");
    __name(mergeArrays, "mergeArrays");
  }
});

// node_modules/@tokenizer/inflate/lib/GzipHandler.js
var GzipHandler;
var init_GzipHandler = __esm({
  "node_modules/@tokenizer/inflate/lib/GzipHandler.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    GzipHandler = class {
      static {
        __name(this, "GzipHandler");
      }
      constructor(tokenizer) {
        this.tokenizer = tokenizer;
      }
      inflate() {
        const tokenizer = this.tokenizer;
        return new ReadableStream({
          async pull(controller) {
            const buffer = new Uint8Array(1024);
            const size = await tokenizer.readBuffer(buffer, { mayBeLess: true });
            if (size === 0) {
              controller.close();
              return;
            }
            controller.enqueue(buffer.subarray(0, size));
          }
        }).pipeThrough(new DecompressionStream("gzip"));
      }
    };
  }
});

// node_modules/@tokenizer/inflate/lib/index.js
var init_lib3 = __esm({
  "node_modules/@tokenizer/inflate/lib/index.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_ZipHandler();
    init_GzipHandler();
  }
});

// node_modules/uint8array-extras/index.js
function getUintBE(view) {
  const { byteLength } = view;
  if (byteLength === 6) {
    return view.getUint16(0) * 2 ** 32 + view.getUint32(2);
  }
  if (byteLength === 5) {
    return view.getUint8(0) * 2 ** 32 + view.getUint32(1);
  }
  if (byteLength === 4) {
    return view.getUint32(0);
  }
  if (byteLength === 3) {
    return view.getUint8(0) * 2 ** 16 + view.getUint16(1);
  }
  if (byteLength === 2) {
    return view.getUint16(0);
  }
  if (byteLength === 1) {
    return view.getUint8(0);
  }
}
var cachedDecoders, cachedEncoder, byteToHexLookupTable;
var init_uint8array_extras = __esm({
  "node_modules/uint8array-extras/index.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    cachedDecoders = {
      utf8: new globalThis.TextDecoder("utf8")
    };
    cachedEncoder = new globalThis.TextEncoder();
    byteToHexLookupTable = Array.from({ length: 256 }, (_, index) => index.toString(16).padStart(2, "0"));
    __name(getUintBE, "getUintBE");
  }
});

// node_modules/file-type/util.js
function stringToBytes(string, encoding) {
  if (encoding === "utf-16le") {
    const bytes = [];
    for (let index = 0; index < string.length; index++) {
      const code = string.charCodeAt(index);
      bytes.push(code & 255, code >> 8 & 255);
    }
    return bytes;
  }
  if (encoding === "utf-16be") {
    const bytes = [];
    for (let index = 0; index < string.length; index++) {
      const code = string.charCodeAt(index);
      bytes.push(code >> 8 & 255, code & 255);
    }
    return bytes;
  }
  return [...string].map((character) => character.charCodeAt(0));
}
function tarHeaderChecksumMatches(arrayBuffer, offset = 0) {
  const readSum = Number.parseInt(new StringType2(6).get(arrayBuffer, 148).replace(/\0.*$/, "").trim(), 8);
  if (Number.isNaN(readSum)) {
    return false;
  }
  let sum = 8 * 32;
  for (let index = offset; index < offset + 148; index++) {
    sum += arrayBuffer[index];
  }
  for (let index = offset + 156; index < offset + 512; index++) {
    sum += arrayBuffer[index];
  }
  return readSum === sum;
}
var uint32SyncSafeToken;
var init_util = __esm({
  "node_modules/file-type/util.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_lib2();
    __name(stringToBytes, "stringToBytes");
    __name(tarHeaderChecksumMatches, "tarHeaderChecksumMatches");
    uint32SyncSafeToken = {
      get: /* @__PURE__ */ __name((buffer, offset) => buffer[offset + 3] & 127 | buffer[offset + 2] << 7 | buffer[offset + 1] << 14 | buffer[offset] << 21, "get"),
      len: 4
    };
  }
});

// node_modules/file-type/supported.js
var extensions, mimeTypes;
var init_supported = __esm({
  "node_modules/file-type/supported.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    extensions = [
      "jpg",
      "png",
      "apng",
      "gif",
      "webp",
      "flif",
      "xcf",
      "cr2",
      "cr3",
      "orf",
      "arw",
      "dng",
      "nef",
      "rw2",
      "raf",
      "tif",
      "bmp",
      "icns",
      "jxr",
      "psd",
      "indd",
      "zip",
      "tar",
      "rar",
      "gz",
      "bz2",
      "7z",
      "dmg",
      "mp4",
      "mid",
      "mkv",
      "webm",
      "mov",
      "avi",
      "mpg",
      "mp2",
      "mp3",
      "m4a",
      "oga",
      "ogg",
      "ogv",
      "opus",
      "flac",
      "wav",
      "spx",
      "amr",
      "pdf",
      "epub",
      "elf",
      "macho",
      "exe",
      "swf",
      "rtf",
      "wasm",
      "woff",
      "woff2",
      "eot",
      "ttf",
      "otf",
      "ttc",
      "ico",
      "flv",
      "ps",
      "xz",
      "sqlite",
      "nes",
      "crx",
      "xpi",
      "cab",
      "deb",
      "ar",
      "rpm",
      "Z",
      "lz",
      "cfb",
      "mxf",
      "mts",
      "blend",
      "bpg",
      "docx",
      "pptx",
      "xlsx",
      "3gp",
      "3g2",
      "j2c",
      "jp2",
      "jpm",
      "jpx",
      "mj2",
      "aif",
      "qcp",
      "odt",
      "ods",
      "odp",
      "xml",
      "mobi",
      "heic",
      "cur",
      "ktx",
      "ape",
      "wv",
      "dcm",
      "ics",
      "glb",
      "pcap",
      "dsf",
      "lnk",
      "alias",
      "voc",
      "ac3",
      "m4v",
      "m4p",
      "m4b",
      "f4v",
      "f4p",
      "f4b",
      "f4a",
      "mie",
      "asf",
      "ogm",
      "ogx",
      "mpc",
      "arrow",
      "shp",
      "aac",
      "mp1",
      "it",
      "s3m",
      "xm",
      "skp",
      "avif",
      "eps",
      "lzh",
      "pgp",
      "asar",
      "stl",
      "chm",
      "3mf",
      "zst",
      "jxl",
      "vcf",
      "jls",
      "pst",
      "dwg",
      "parquet",
      "class",
      "arj",
      "cpio",
      "ace",
      "avro",
      "icc",
      "fbx",
      "vsdx",
      "vtt",
      "apk",
      "drc",
      "lz4",
      "potx",
      "xltx",
      "dotx",
      "xltm",
      "ott",
      "ots",
      "otp",
      "odg",
      "otg",
      "xlsm",
      "docm",
      "dotm",
      "potm",
      "pptm",
      "jar",
      "rm",
      "ppsm",
      "ppsx",
      "tar.gz",
      "reg",
      "dat"
    ];
    mimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/flif",
      "image/x-xcf",
      "image/x-canon-cr2",
      "image/x-canon-cr3",
      "image/tiff",
      "image/bmp",
      "image/vnd.ms-photo",
      "image/vnd.adobe.photoshop",
      "application/x-indesign",
      "application/epub+zip",
      "application/x-xpinstall",
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.oasis.opendocument.spreadsheet",
      "application/vnd.oasis.opendocument.presentation",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
      "application/zip",
      "application/x-tar",
      "application/x-rar-compressed",
      "application/gzip",
      "application/x-bzip2",
      "application/x-7z-compressed",
      "application/x-apple-diskimage",
      "application/vnd.apache.arrow.file",
      "video/mp4",
      "audio/midi",
      "video/matroska",
      "video/webm",
      "video/quicktime",
      "video/vnd.avi",
      "audio/wav",
      "audio/qcelp",
      "audio/x-ms-asf",
      "video/x-ms-asf",
      "application/vnd.ms-asf",
      "video/mpeg",
      "video/3gpp",
      "audio/mpeg",
      "audio/mp4",
      // RFC 4337
      "video/ogg",
      "audio/ogg",
      "audio/ogg; codecs=opus",
      "application/ogg",
      "audio/flac",
      "audio/ape",
      "audio/wavpack",
      "audio/amr",
      "application/pdf",
      "application/x-elf",
      "application/x-mach-binary",
      "application/x-msdownload",
      "application/x-shockwave-flash",
      "application/rtf",
      "application/wasm",
      "font/woff",
      "font/woff2",
      "application/vnd.ms-fontobject",
      "font/ttf",
      "font/otf",
      "font/collection",
      "image/x-icon",
      "video/x-flv",
      "application/postscript",
      "application/eps",
      "application/x-xz",
      "application/x-sqlite3",
      "application/x-nintendo-nes-rom",
      "application/x-google-chrome-extension",
      "application/vnd.ms-cab-compressed",
      "application/x-deb",
      "application/x-unix-archive",
      "application/x-rpm",
      "application/x-compress",
      "application/x-lzip",
      "application/x-cfb",
      "application/x-mie",
      "application/mxf",
      "video/mp2t",
      "application/x-blender",
      "image/bpg",
      "image/j2c",
      "image/jp2",
      "image/jpx",
      "image/jpm",
      "image/mj2",
      "audio/aiff",
      "application/xml",
      "application/x-mobipocket-ebook",
      "image/heif",
      "image/heif-sequence",
      "image/heic",
      "image/heic-sequence",
      "image/icns",
      "image/ktx",
      "application/dicom",
      "audio/x-musepack",
      "text/calendar",
      "text/vcard",
      "text/vtt",
      "model/gltf-binary",
      "application/vnd.tcpdump.pcap",
      "audio/x-dsf",
      // Non-standard
      "application/x.ms.shortcut",
      // Invented by us
      "application/x.apple.alias",
      // Invented by us
      "audio/x-voc",
      "audio/vnd.dolby.dd-raw",
      "audio/x-m4a",
      "image/apng",
      "image/x-olympus-orf",
      "image/x-sony-arw",
      "image/x-adobe-dng",
      "image/x-nikon-nef",
      "image/x-panasonic-rw2",
      "image/x-fujifilm-raf",
      "video/x-m4v",
      "video/3gpp2",
      "application/x-esri-shape",
      "audio/aac",
      "audio/x-it",
      "audio/x-s3m",
      "audio/x-xm",
      "video/MP1S",
      "video/MP2P",
      "application/vnd.sketchup.skp",
      "image/avif",
      "application/x-lzh-compressed",
      "application/pgp-encrypted",
      "application/x-asar",
      "model/stl",
      "application/vnd.ms-htmlhelp",
      "model/3mf",
      "image/jxl",
      "application/zstd",
      "image/jls",
      "application/vnd.ms-outlook",
      "image/vnd.dwg",
      "application/vnd.apache.parquet",
      "application/java-vm",
      "application/x-arj",
      "application/x-cpio",
      "application/x-ace-compressed",
      "application/avro",
      "application/vnd.iccprofile",
      "application/x.autodesk.fbx",
      // Invented by us
      "application/vnd.visio",
      "application/vnd.android.package-archive",
      "application/vnd.google.draco",
      // Invented by us
      "application/x-lz4",
      // Invented by us
      "application/vnd.openxmlformats-officedocument.presentationml.template",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
      "application/vnd.ms-excel.template.macroenabled.12",
      "application/vnd.oasis.opendocument.text-template",
      "application/vnd.oasis.opendocument.spreadsheet-template",
      "application/vnd.oasis.opendocument.presentation-template",
      "application/vnd.oasis.opendocument.graphics",
      "application/vnd.oasis.opendocument.graphics-template",
      "application/vnd.ms-excel.sheet.macroenabled.12",
      "application/vnd.ms-word.document.macroenabled.12",
      "application/vnd.ms-word.template.macroenabled.12",
      "application/vnd.ms-powerpoint.template.macroenabled.12",
      "application/vnd.ms-powerpoint.presentation.macroenabled.12",
      "application/java-archive",
      "application/vnd.rn-realmedia",
      "application/x-ms-regedit",
      "application/x-ft-windows-registry-hive"
    ];
  }
});

// node_modules/file-type/core.js
var core_exports = {};
__export(core_exports, {
  FileTypeParser: () => FileTypeParser,
  fileTypeFromBlob: () => fileTypeFromBlob,
  fileTypeFromBuffer: () => fileTypeFromBuffer,
  fileTypeFromStream: () => fileTypeFromStream,
  fileTypeFromTokenizer: () => fileTypeFromTokenizer,
  fileTypeStream: () => fileTypeStream,
  reasonableDetectionSizeInBytes: () => reasonableDetectionSizeInBytes,
  supportedExtensions: () => supportedExtensions,
  supportedMimeTypes: () => supportedMimeTypes
});
async function fileTypeFromStream(stream, options) {
  return new FileTypeParser(options).fromStream(stream);
}
async function fileTypeFromBuffer(input, options) {
  return new FileTypeParser(options).fromBuffer(input);
}
async function fileTypeFromBlob(blob, options) {
  return new FileTypeParser(options).fromBlob(blob);
}
function getFileTypeFromMimeType(mimeType) {
  mimeType = mimeType.toLowerCase();
  switch (mimeType) {
    case "application/epub+zip":
      return {
        ext: "epub",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.text":
      return {
        ext: "odt",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.text-template":
      return {
        ext: "ott",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.spreadsheet":
      return {
        ext: "ods",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.spreadsheet-template":
      return {
        ext: "ots",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.presentation":
      return {
        ext: "odp",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.presentation-template":
      return {
        ext: "otp",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.graphics":
      return {
        ext: "odg",
        mime: mimeType
      };
    case "application/vnd.oasis.opendocument.graphics-template":
      return {
        ext: "otg",
        mime: mimeType
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
      return {
        ext: "ppsx",
        mime: mimeType
      };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return {
        ext: "xlsx",
        mime: mimeType
      };
    case "application/vnd.ms-excel.sheet.macroenabled":
      return {
        ext: "xlsm",
        mime: "application/vnd.ms-excel.sheet.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
      return {
        ext: "xltx",
        mime: mimeType
      };
    case "application/vnd.ms-excel.template.macroenabled":
      return {
        ext: "xltm",
        mime: "application/vnd.ms-excel.template.macroenabled.12"
      };
    case "application/vnd.ms-powerpoint.slideshow.macroenabled":
      return {
        ext: "ppsm",
        mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return {
        ext: "docx",
        mime: mimeType
      };
    case "application/vnd.ms-word.document.macroenabled":
      return {
        ext: "docm",
        mime: "application/vnd.ms-word.document.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
      return {
        ext: "dotx",
        mime: mimeType
      };
    case "application/vnd.ms-word.template.macroenabledtemplate":
      return {
        ext: "dotm",
        mime: "application/vnd.ms-word.template.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.template":
      return {
        ext: "potx",
        mime: mimeType
      };
    case "application/vnd.ms-powerpoint.template.macroenabled":
      return {
        ext: "potm",
        mime: "application/vnd.ms-powerpoint.template.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return {
        ext: "pptx",
        mime: mimeType
      };
    case "application/vnd.ms-powerpoint.presentation.macroenabled":
      return {
        ext: "pptm",
        mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12"
      };
    case "application/vnd.ms-visio.drawing":
      return {
        ext: "vsdx",
        mime: "application/vnd.visio"
      };
    case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
      return {
        ext: "3mf",
        mime: "model/3mf"
      };
    default:
  }
}
function _check(buffer, headers, options) {
  options = {
    offset: 0,
    ...options
  };
  for (const [index, header] of headers.entries()) {
    if (options.mask) {
      if (header !== (options.mask[index] & buffer[index + options.offset])) {
        return false;
      }
    } else if (header !== buffer[index + options.offset]) {
      return false;
    }
  }
  return true;
}
async function fileTypeFromTokenizer(tokenizer, options) {
  return new FileTypeParser(options).fromTokenizer(tokenizer);
}
async function fileTypeStream(webStream, options) {
  return new FileTypeParser(options).toDetectionStream(webStream, options);
}
var reasonableDetectionSizeInBytes, FileTypeParser, supportedExtensions, supportedMimeTypes;
var init_core2 = __esm({
  "node_modules/file-type/core.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_lib2();
    init_core();
    init_lib3();
    init_uint8array_extras();
    init_util();
    init_supported();
    reasonableDetectionSizeInBytes = 4100;
    __name(fileTypeFromStream, "fileTypeFromStream");
    __name(fileTypeFromBuffer, "fileTypeFromBuffer");
    __name(fileTypeFromBlob, "fileTypeFromBlob");
    __name(getFileTypeFromMimeType, "getFileTypeFromMimeType");
    __name(_check, "_check");
    __name(fileTypeFromTokenizer, "fileTypeFromTokenizer");
    __name(fileTypeStream, "fileTypeStream");
    FileTypeParser = class {
      static {
        __name(this, "FileTypeParser");
      }
      constructor(options) {
        this.options = {
          mpegOffsetTolerance: 0,
          ...options
        };
        this.detectors = [
          ...options?.customDetectors ?? [],
          { id: "core", detect: this.detectConfident },
          { id: "core.imprecise", detect: this.detectImprecise }
        ];
        this.tokenizerOptions = {
          abortSignal: options?.signal
        };
      }
      async fromTokenizer(tokenizer) {
        const initialPosition = tokenizer.position;
        for (const detector of this.detectors) {
          const fileType2 = await detector.detect(tokenizer);
          if (fileType2) {
            return fileType2;
          }
          if (initialPosition !== tokenizer.position) {
            return void 0;
          }
        }
      }
      async fromBuffer(input) {
        if (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) {
          throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof input}\``);
        }
        const buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
        if (!(buffer?.length > 1)) {
          return;
        }
        return this.fromTokenizer(fromBuffer(buffer, this.tokenizerOptions));
      }
      async fromBlob(blob) {
        const tokenizer = fromBlob(blob, this.tokenizerOptions);
        try {
          return await this.fromTokenizer(tokenizer);
        } finally {
          await tokenizer.close();
        }
      }
      async fromStream(stream) {
        const tokenizer = fromWebStream(stream, this.tokenizerOptions);
        try {
          return await this.fromTokenizer(tokenizer);
        } finally {
          await tokenizer.close();
        }
      }
      async toDetectionStream(stream, options) {
        const { sampleSize = reasonableDetectionSizeInBytes } = options;
        let detectedFileType;
        let firstChunk;
        const reader = stream.getReader({ mode: "byob" });
        try {
          const { value: chunk, done } = await reader.read(new Uint8Array(sampleSize));
          firstChunk = chunk;
          if (!done && chunk) {
            try {
              detectedFileType = await this.fromBuffer(chunk.subarray(0, sampleSize));
            } catch (error) {
              if (!(error instanceof EndOfStreamError)) {
                throw error;
              }
              detectedFileType = void 0;
            }
          }
          firstChunk = chunk;
        } finally {
          reader.releaseLock();
        }
        const transformStream = new TransformStream({
          async start(controller) {
            controller.enqueue(firstChunk);
          },
          transform(chunk, controller) {
            controller.enqueue(chunk);
          }
        });
        const newStream = stream.pipeThrough(transformStream);
        newStream.fileType = detectedFileType;
        return newStream;
      }
      check(header, options) {
        return _check(this.buffer, header, options);
      }
      checkString(header, options) {
        return this.check(stringToBytes(header, options?.encoding), options);
      }
      // Detections with a high degree of certainty in identifying the correct file type
      detectConfident = /* @__PURE__ */ __name(async (tokenizer) => {
        this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
        if (tokenizer.fileInfo.size === void 0) {
          tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
        }
        this.tokenizer = tokenizer;
        await tokenizer.peekBuffer(this.buffer, { length: 32, mayBeLess: true });
        if (this.check([66, 77])) {
          return {
            ext: "bmp",
            mime: "image/bmp"
          };
        }
        if (this.check([11, 119])) {
          return {
            ext: "ac3",
            mime: "audio/vnd.dolby.dd-raw"
          };
        }
        if (this.check([120, 1])) {
          return {
            ext: "dmg",
            mime: "application/x-apple-diskimage"
          };
        }
        if (this.check([77, 90])) {
          return {
            ext: "exe",
            mime: "application/x-msdownload"
          };
        }
        if (this.check([37, 33])) {
          await tokenizer.peekBuffer(this.buffer, { length: 24, mayBeLess: true });
          if (this.checkString("PS-Adobe-", { offset: 2 }) && this.checkString(" EPSF-", { offset: 14 })) {
            return {
              ext: "eps",
              mime: "application/eps"
            };
          }
          return {
            ext: "ps",
            mime: "application/postscript"
          };
        }
        if (this.check([31, 160]) || this.check([31, 157])) {
          return {
            ext: "Z",
            mime: "application/x-compress"
          };
        }
        if (this.check([199, 113])) {
          return {
            ext: "cpio",
            mime: "application/x-cpio"
          };
        }
        if (this.check([96, 234])) {
          return {
            ext: "arj",
            mime: "application/x-arj"
          };
        }
        if (this.check([239, 187, 191])) {
          this.tokenizer.ignore(3);
          return this.detectConfident(tokenizer);
        }
        if (this.check([71, 73, 70])) {
          return {
            ext: "gif",
            mime: "image/gif"
          };
        }
        if (this.check([73, 73, 188])) {
          return {
            ext: "jxr",
            mime: "image/vnd.ms-photo"
          };
        }
        if (this.check([31, 139, 8])) {
          const gzipHandler = new GzipHandler(tokenizer);
          const stream = gzipHandler.inflate();
          let shouldCancelStream = true;
          try {
            let compressedFileType;
            try {
              compressedFileType = await this.fromStream(stream);
            } catch {
              shouldCancelStream = false;
            }
            if (compressedFileType && compressedFileType.ext === "tar") {
              return {
                ext: "tar.gz",
                mime: "application/gzip"
              };
            }
          } finally {
            if (shouldCancelStream) {
              await stream.cancel();
            }
          }
          return {
            ext: "gz",
            mime: "application/gzip"
          };
        }
        if (this.check([66, 90, 104])) {
          return {
            ext: "bz2",
            mime: "application/x-bzip2"
          };
        }
        if (this.checkString("ID3")) {
          await tokenizer.ignore(6);
          const id3HeaderLength = await tokenizer.readToken(uint32SyncSafeToken);
          if (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {
            return {
              ext: "mp3",
              mime: "audio/mpeg"
            };
          }
          await tokenizer.ignore(id3HeaderLength);
          return this.fromTokenizer(tokenizer);
        }
        if (this.checkString("MP+")) {
          return {
            ext: "mpc",
            mime: "audio/x-musepack"
          };
        }
        if ((this.buffer[0] === 67 || this.buffer[0] === 70) && this.check([87, 83], { offset: 1 })) {
          return {
            ext: "swf",
            mime: "application/x-shockwave-flash"
          };
        }
        if (this.check([255, 216, 255])) {
          if (this.check([247], { offset: 3 })) {
            return {
              ext: "jls",
              mime: "image/jls"
            };
          }
          return {
            ext: "jpg",
            mime: "image/jpeg"
          };
        }
        if (this.check([79, 98, 106, 1])) {
          return {
            ext: "avro",
            mime: "application/avro"
          };
        }
        if (this.checkString("FLIF")) {
          return {
            ext: "flif",
            mime: "image/flif"
          };
        }
        if (this.checkString("8BPS")) {
          return {
            ext: "psd",
            mime: "image/vnd.adobe.photoshop"
          };
        }
        if (this.checkString("MPCK")) {
          return {
            ext: "mpc",
            mime: "audio/x-musepack"
          };
        }
        if (this.checkString("FORM")) {
          return {
            ext: "aif",
            mime: "audio/aiff"
          };
        }
        if (this.checkString("icns", { offset: 0 })) {
          return {
            ext: "icns",
            mime: "image/icns"
          };
        }
        if (this.check([80, 75, 3, 4])) {
          let fileType2;
          await new ZipHandler(tokenizer).unzip((zipHeader) => {
            switch (zipHeader.filename) {
              case "META-INF/mozilla.rsa":
                fileType2 = {
                  ext: "xpi",
                  mime: "application/x-xpinstall"
                };
                return {
                  stop: true
                };
              case "META-INF/MANIFEST.MF":
                fileType2 = {
                  ext: "jar",
                  mime: "application/java-archive"
                };
                return {
                  stop: true
                };
              case "mimetype":
                return {
                  async handler(fileData) {
                    const mimeType = new TextDecoder("utf-8").decode(fileData).trim();
                    fileType2 = getFileTypeFromMimeType(mimeType);
                  },
                  stop: true
                };
              case "[Content_Types].xml":
                return {
                  async handler(fileData) {
                    let xmlContent = new TextDecoder("utf-8").decode(fileData);
                    const endPos = xmlContent.indexOf('.main+xml"');
                    if (endPos === -1) {
                      const mimeType = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
                      if (xmlContent.includes(`ContentType="${mimeType}"`)) {
                        fileType2 = getFileTypeFromMimeType(mimeType);
                      }
                    } else {
                      xmlContent = xmlContent.slice(0, Math.max(0, endPos));
                      const firstPos = xmlContent.lastIndexOf('"');
                      const mimeType = xmlContent.slice(Math.max(0, firstPos + 1));
                      fileType2 = getFileTypeFromMimeType(mimeType);
                    }
                  },
                  stop: true
                };
              default:
                if (/classes\d*\.dex/.test(zipHeader.filename)) {
                  fileType2 = {
                    ext: "apk",
                    mime: "application/vnd.android.package-archive"
                  };
                  return { stop: true };
                }
                return {};
            }
          }).catch((error) => {
            if (!(error instanceof EndOfStreamError)) {
              throw error;
            }
          });
          return fileType2 ?? {
            ext: "zip",
            mime: "application/zip"
          };
        }
        if (this.checkString("OggS")) {
          await tokenizer.ignore(28);
          const type = new Uint8Array(8);
          await tokenizer.readBuffer(type);
          if (_check(type, [79, 112, 117, 115, 72, 101, 97, 100])) {
            return {
              ext: "opus",
              mime: "audio/ogg; codecs=opus"
            };
          }
          if (_check(type, [128, 116, 104, 101, 111, 114, 97])) {
            return {
              ext: "ogv",
              mime: "video/ogg"
            };
          }
          if (_check(type, [1, 118, 105, 100, 101, 111, 0])) {
            return {
              ext: "ogm",
              mime: "video/ogg"
            };
          }
          if (_check(type, [127, 70, 76, 65, 67])) {
            return {
              ext: "oga",
              mime: "audio/ogg"
            };
          }
          if (_check(type, [83, 112, 101, 101, 120, 32, 32])) {
            return {
              ext: "spx",
              mime: "audio/ogg"
            };
          }
          if (_check(type, [1, 118, 111, 114, 98, 105, 115])) {
            return {
              ext: "ogg",
              mime: "audio/ogg"
            };
          }
          return {
            ext: "ogx",
            mime: "application/ogg"
          };
        }
        if (this.check([80, 75]) && (this.buffer[2] === 3 || this.buffer[2] === 5 || this.buffer[2] === 7) && (this.buffer[3] === 4 || this.buffer[3] === 6 || this.buffer[3] === 8)) {
          return {
            ext: "zip",
            mime: "application/zip"
          };
        }
        if (this.checkString("MThd")) {
          return {
            ext: "mid",
            mime: "audio/midi"
          };
        }
        if (this.checkString("wOFF") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) {
          return {
            ext: "woff",
            mime: "font/woff"
          };
        }
        if (this.checkString("wOF2") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) {
          return {
            ext: "woff2",
            mime: "font/woff2"
          };
        }
        if (this.check([212, 195, 178, 161]) || this.check([161, 178, 195, 212])) {
          return {
            ext: "pcap",
            mime: "application/vnd.tcpdump.pcap"
          };
        }
        if (this.checkString("DSD ")) {
          return {
            ext: "dsf",
            mime: "audio/x-dsf"
            // Non-standard
          };
        }
        if (this.checkString("LZIP")) {
          return {
            ext: "lz",
            mime: "application/x-lzip"
          };
        }
        if (this.checkString("fLaC")) {
          return {
            ext: "flac",
            mime: "audio/flac"
          };
        }
        if (this.check([66, 80, 71, 251])) {
          return {
            ext: "bpg",
            mime: "image/bpg"
          };
        }
        if (this.checkString("wvpk")) {
          return {
            ext: "wv",
            mime: "audio/wavpack"
          };
        }
        if (this.checkString("%PDF")) {
          return {
            ext: "pdf",
            mime: "application/pdf"
          };
        }
        if (this.check([0, 97, 115, 109])) {
          return {
            ext: "wasm",
            mime: "application/wasm"
          };
        }
        if (this.check([73, 73])) {
          const fileType2 = await this.readTiffHeader(false);
          if (fileType2) {
            return fileType2;
          }
        }
        if (this.check([77, 77])) {
          const fileType2 = await this.readTiffHeader(true);
          if (fileType2) {
            return fileType2;
          }
        }
        if (this.checkString("MAC ")) {
          return {
            ext: "ape",
            mime: "audio/ape"
          };
        }
        if (this.check([26, 69, 223, 163])) {
          async function readField() {
            const msb = await tokenizer.peekNumber(UINT8);
            let mask = 128;
            let ic = 0;
            while ((msb & mask) === 0 && mask !== 0) {
              ++ic;
              mask >>= 1;
            }
            const id = new Uint8Array(ic + 1);
            await tokenizer.readBuffer(id);
            return id;
          }
          __name(readField, "readField");
          async function readElement() {
            const idField = await readField();
            const lengthField = await readField();
            lengthField[0] ^= 128 >> lengthField.length - 1;
            const nrLength = Math.min(6, lengthField.length);
            const idView = new DataView(idField.buffer);
            const lengthView = new DataView(lengthField.buffer, lengthField.length - nrLength, nrLength);
            return {
              id: getUintBE(idView),
              len: getUintBE(lengthView)
            };
          }
          __name(readElement, "readElement");
          async function readChildren(children) {
            while (children > 0) {
              const element = await readElement();
              if (element.id === 17026) {
                const rawValue = await tokenizer.readToken(new StringType2(element.len));
                return rawValue.replaceAll(/\00.*$/g, "");
              }
              await tokenizer.ignore(element.len);
              --children;
            }
          }
          __name(readChildren, "readChildren");
          const re = await readElement();
          const documentType = await readChildren(re.len);
          switch (documentType) {
            case "webm":
              return {
                ext: "webm",
                mime: "video/webm"
              };
            case "matroska":
              return {
                ext: "mkv",
                mime: "video/matroska"
              };
            default:
              return;
          }
        }
        if (this.checkString("SQLi")) {
          return {
            ext: "sqlite",
            mime: "application/x-sqlite3"
          };
        }
        if (this.check([78, 69, 83, 26])) {
          return {
            ext: "nes",
            mime: "application/x-nintendo-nes-rom"
          };
        }
        if (this.checkString("Cr24")) {
          return {
            ext: "crx",
            mime: "application/x-google-chrome-extension"
          };
        }
        if (this.checkString("MSCF") || this.checkString("ISc(")) {
          return {
            ext: "cab",
            mime: "application/vnd.ms-cab-compressed"
          };
        }
        if (this.check([237, 171, 238, 219])) {
          return {
            ext: "rpm",
            mime: "application/x-rpm"
          };
        }
        if (this.check([197, 208, 211, 198])) {
          return {
            ext: "eps",
            mime: "application/eps"
          };
        }
        if (this.check([40, 181, 47, 253])) {
          return {
            ext: "zst",
            mime: "application/zstd"
          };
        }
        if (this.check([127, 69, 76, 70])) {
          return {
            ext: "elf",
            mime: "application/x-elf"
          };
        }
        if (this.check([33, 66, 68, 78])) {
          return {
            ext: "pst",
            mime: "application/vnd.ms-outlook"
          };
        }
        if (this.checkString("PAR1") || this.checkString("PARE")) {
          return {
            ext: "parquet",
            mime: "application/vnd.apache.parquet"
          };
        }
        if (this.checkString("ttcf")) {
          return {
            ext: "ttc",
            mime: "font/collection"
          };
        }
        if (this.check([207, 250, 237, 254])) {
          return {
            ext: "macho",
            mime: "application/x-mach-binary"
          };
        }
        if (this.check([4, 34, 77, 24])) {
          return {
            ext: "lz4",
            mime: "application/x-lz4"
            // Invented by us
          };
        }
        if (this.checkString("regf")) {
          return {
            ext: "dat",
            mime: "application/x-ft-windows-registry-hive"
          };
        }
        if (this.check([79, 84, 84, 79, 0])) {
          return {
            ext: "otf",
            mime: "font/otf"
          };
        }
        if (this.checkString("#!AMR")) {
          return {
            ext: "amr",
            mime: "audio/amr"
          };
        }
        if (this.checkString("{\\rtf")) {
          return {
            ext: "rtf",
            mime: "application/rtf"
          };
        }
        if (this.check([70, 76, 86, 1])) {
          return {
            ext: "flv",
            mime: "video/x-flv"
          };
        }
        if (this.checkString("IMPM")) {
          return {
            ext: "it",
            mime: "audio/x-it"
          };
        }
        if (this.checkString("-lh0-", { offset: 2 }) || this.checkString("-lh1-", { offset: 2 }) || this.checkString("-lh2-", { offset: 2 }) || this.checkString("-lh3-", { offset: 2 }) || this.checkString("-lh4-", { offset: 2 }) || this.checkString("-lh5-", { offset: 2 }) || this.checkString("-lh6-", { offset: 2 }) || this.checkString("-lh7-", { offset: 2 }) || this.checkString("-lzs-", { offset: 2 }) || this.checkString("-lz4-", { offset: 2 }) || this.checkString("-lz5-", { offset: 2 }) || this.checkString("-lhd-", { offset: 2 })) {
          return {
            ext: "lzh",
            mime: "application/x-lzh-compressed"
          };
        }
        if (this.check([0, 0, 1, 186])) {
          if (this.check([33], { offset: 4, mask: [241] })) {
            return {
              ext: "mpg",
              // May also be .ps, .mpeg
              mime: "video/MP1S"
            };
          }
          if (this.check([68], { offset: 4, mask: [196] })) {
            return {
              ext: "mpg",
              // May also be .mpg, .m2p, .vob or .sub
              mime: "video/MP2P"
            };
          }
        }
        if (this.checkString("ITSF")) {
          return {
            ext: "chm",
            mime: "application/vnd.ms-htmlhelp"
          };
        }
        if (this.check([202, 254, 186, 190])) {
          return {
            ext: "class",
            mime: "application/java-vm"
          };
        }
        if (this.checkString(".RMF")) {
          return {
            ext: "rm",
            mime: "application/vnd.rn-realmedia"
          };
        }
        if (this.checkString("DRACO")) {
          return {
            ext: "drc",
            mime: "application/vnd.google.draco"
            // Invented by us
          };
        }
        if (this.check([253, 55, 122, 88, 90, 0])) {
          return {
            ext: "xz",
            mime: "application/x-xz"
          };
        }
        if (this.checkString("<?xml ")) {
          return {
            ext: "xml",
            mime: "application/xml"
          };
        }
        if (this.check([55, 122, 188, 175, 39, 28])) {
          return {
            ext: "7z",
            mime: "application/x-7z-compressed"
          };
        }
        if (this.check([82, 97, 114, 33, 26, 7]) && (this.buffer[6] === 0 || this.buffer[6] === 1)) {
          return {
            ext: "rar",
            mime: "application/x-rar-compressed"
          };
        }
        if (this.checkString("solid ")) {
          return {
            ext: "stl",
            mime: "model/stl"
          };
        }
        if (this.checkString("AC")) {
          const version2 = new StringType2(4, "latin1").get(this.buffer, 2);
          if (version2.match("^d*") && version2 >= 1e3 && version2 <= 1050) {
            return {
              ext: "dwg",
              mime: "image/vnd.dwg"
            };
          }
        }
        if (this.checkString("070707")) {
          return {
            ext: "cpio",
            mime: "application/x-cpio"
          };
        }
        if (this.checkString("BLENDER")) {
          return {
            ext: "blend",
            mime: "application/x-blender"
          };
        }
        if (this.checkString("!<arch>")) {
          await tokenizer.ignore(8);
          const string = await tokenizer.readToken(new StringType2(13, "ascii"));
          if (string === "debian-binary") {
            return {
              ext: "deb",
              mime: "application/x-deb"
            };
          }
          return {
            ext: "ar",
            mime: "application/x-unix-archive"
          };
        }
        if (this.checkString("WEBVTT") && // One of LF, CR, tab, space, or end of file must follow "WEBVTT" per the spec (see `fixture/fixture-vtt-*.vtt` for examples). Note that `\0` is technically the null character (there is no such thing as an EOF character). However, checking for `\0` gives us the same result as checking for the end of the stream.
        ["\n", "\r", "	", " ", "\0"].some((char7) => this.checkString(char7, { offset: 6 }))) {
          return {
            ext: "vtt",
            mime: "text/vtt"
          };
        }
        if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
          await tokenizer.ignore(8);
          async function readChunkHeader() {
            return {
              length: await tokenizer.readToken(INT32_BE),
              type: await tokenizer.readToken(new StringType2(4, "latin1"))
            };
          }
          __name(readChunkHeader, "readChunkHeader");
          do {
            const chunk = await readChunkHeader();
            if (chunk.length < 0) {
              return;
            }
            switch (chunk.type) {
              case "IDAT":
                return {
                  ext: "png",
                  mime: "image/png"
                };
              case "acTL":
                return {
                  ext: "apng",
                  mime: "image/apng"
                };
              default:
                await tokenizer.ignore(chunk.length + 4);
            }
          } while (tokenizer.position + 8 < tokenizer.fileInfo.size);
          return {
            ext: "png",
            mime: "image/png"
          };
        }
        if (this.check([65, 82, 82, 79, 87, 49, 0, 0])) {
          return {
            ext: "arrow",
            mime: "application/vnd.apache.arrow.file"
          };
        }
        if (this.check([103, 108, 84, 70, 2, 0, 0, 0])) {
          return {
            ext: "glb",
            mime: "model/gltf-binary"
          };
        }
        if (this.check([102, 114, 101, 101], { offset: 4 }) || this.check([109, 100, 97, 116], { offset: 4 }) || this.check([109, 111, 111, 118], { offset: 4 }) || this.check([119, 105, 100, 101], { offset: 4 })) {
          return {
            ext: "mov",
            mime: "video/quicktime"
          };
        }
        if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24])) {
          return {
            ext: "orf",
            mime: "image/x-olympus-orf"
          };
        }
        if (this.checkString("gimp xcf ")) {
          return {
            ext: "xcf",
            mime: "image/x-xcf"
          };
        }
        if (this.checkString("ftyp", { offset: 4 }) && (this.buffer[8] & 96) !== 0) {
          const brandMajor = new StringType2(4, "latin1").get(this.buffer, 8).replace("\0", " ").trim();
          switch (brandMajor) {
            case "avif":
            case "avis":
              return { ext: "avif", mime: "image/avif" };
            case "mif1":
              return { ext: "heic", mime: "image/heif" };
            case "msf1":
              return { ext: "heic", mime: "image/heif-sequence" };
            case "heic":
            case "heix":
              return { ext: "heic", mime: "image/heic" };
            case "hevc":
            case "hevx":
              return { ext: "heic", mime: "image/heic-sequence" };
            case "qt":
              return { ext: "mov", mime: "video/quicktime" };
            case "M4V":
            case "M4VH":
            case "M4VP":
              return { ext: "m4v", mime: "video/x-m4v" };
            case "M4P":
              return { ext: "m4p", mime: "video/mp4" };
            case "M4B":
              return { ext: "m4b", mime: "audio/mp4" };
            case "M4A":
              return { ext: "m4a", mime: "audio/x-m4a" };
            case "F4V":
              return { ext: "f4v", mime: "video/mp4" };
            case "F4P":
              return { ext: "f4p", mime: "video/mp4" };
            case "F4A":
              return { ext: "f4a", mime: "audio/mp4" };
            case "F4B":
              return { ext: "f4b", mime: "audio/mp4" };
            case "crx":
              return { ext: "cr3", mime: "image/x-canon-cr3" };
            default:
              if (brandMajor.startsWith("3g")) {
                if (brandMajor.startsWith("3g2")) {
                  return { ext: "3g2", mime: "video/3gpp2" };
                }
                return { ext: "3gp", mime: "video/3gpp" };
              }
              return { ext: "mp4", mime: "video/mp4" };
          }
        }
        if (this.checkString("REGEDIT4\r\n")) {
          return {
            ext: "reg",
            mime: "application/x-ms-regedit"
          };
        }
        if (this.check([82, 73, 70, 70])) {
          if (this.checkString("WEBP", { offset: 8 })) {
            return {
              ext: "webp",
              mime: "image/webp"
            };
          }
          if (this.check([65, 86, 73], { offset: 8 })) {
            return {
              ext: "avi",
              mime: "video/vnd.avi"
            };
          }
          if (this.check([87, 65, 86, 69], { offset: 8 })) {
            return {
              ext: "wav",
              mime: "audio/wav"
            };
          }
          if (this.check([81, 76, 67, 77], { offset: 8 })) {
            return {
              ext: "qcp",
              mime: "audio/qcelp"
            };
          }
        }
        if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) {
          return {
            ext: "rw2",
            mime: "image/x-panasonic-rw2"
          };
        }
        if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
          async function readHeader() {
            const guid = new Uint8Array(16);
            await tokenizer.readBuffer(guid);
            return {
              id: guid,
              size: Number(await tokenizer.readToken(UINT64_LE))
            };
          }
          __name(readHeader, "readHeader");
          await tokenizer.ignore(30);
          while (tokenizer.position + 24 < tokenizer.fileInfo.size) {
            const header = await readHeader();
            let payload = header.size - 24;
            if (_check(header.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
              const typeId = new Uint8Array(16);
              payload -= await tokenizer.readBuffer(typeId);
              if (_check(typeId, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
                return {
                  ext: "asf",
                  mime: "audio/x-ms-asf"
                };
              }
              if (_check(typeId, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
                return {
                  ext: "asf",
                  mime: "video/x-ms-asf"
                };
              }
              break;
            }
            await tokenizer.ignore(payload);
          }
          return {
            ext: "asf",
            mime: "application/vnd.ms-asf"
          };
        }
        if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) {
          return {
            ext: "ktx",
            mime: "image/ktx"
          };
        }
        if ((this.check([126, 16, 4]) || this.check([126, 24, 4])) && this.check([48, 77, 73, 69], { offset: 4 })) {
          return {
            ext: "mie",
            mime: "application/x-mie"
          };
        }
        if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })) {
          return {
            ext: "shp",
            mime: "application/x-esri-shape"
          };
        }
        if (this.check([255, 79, 255, 81])) {
          return {
            ext: "j2c",
            mime: "image/j2c"
          };
        }
        if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
          await tokenizer.ignore(20);
          const type = await tokenizer.readToken(new StringType2(4, "ascii"));
          switch (type) {
            case "jp2 ":
              return {
                ext: "jp2",
                mime: "image/jp2"
              };
            case "jpx ":
              return {
                ext: "jpx",
                mime: "image/jpx"
              };
            case "jpm ":
              return {
                ext: "jpm",
                mime: "image/jpm"
              };
            case "mjp2":
              return {
                ext: "mj2",
                mime: "image/mj2"
              };
            default:
              return;
          }
        }
        if (this.check([255, 10]) || this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) {
          return {
            ext: "jxl",
            mime: "image/jxl"
          };
        }
        if (this.check([254, 255])) {
          if (this.checkString("<?xml ", { offset: 2, encoding: "utf-16be" })) {
            return {
              ext: "xml",
              mime: "application/xml"
            };
          }
          return void 0;
        }
        if (this.check([208, 207, 17, 224, 161, 177, 26, 225])) {
          return {
            ext: "cfb",
            mime: "application/x-cfb"
          };
        }
        await tokenizer.peekBuffer(this.buffer, { length: Math.min(256, tokenizer.fileInfo.size), mayBeLess: true });
        if (this.check([97, 99, 115, 112], { offset: 36 })) {
          return {
            ext: "icc",
            mime: "application/vnd.iccprofile"
          };
        }
        if (this.checkString("**ACE", { offset: 7 }) && this.checkString("**", { offset: 12 })) {
          return {
            ext: "ace",
            mime: "application/x-ace-compressed"
          };
        }
        if (this.checkString("BEGIN:")) {
          if (this.checkString("VCARD", { offset: 6 })) {
            return {
              ext: "vcf",
              mime: "text/vcard"
            };
          }
          if (this.checkString("VCALENDAR", { offset: 6 })) {
            return {
              ext: "ics",
              mime: "text/calendar"
            };
          }
        }
        if (this.checkString("FUJIFILMCCD-RAW")) {
          return {
            ext: "raf",
            mime: "image/x-fujifilm-raf"
          };
        }
        if (this.checkString("Extended Module:")) {
          return {
            ext: "xm",
            mime: "audio/x-xm"
          };
        }
        if (this.checkString("Creative Voice File")) {
          return {
            ext: "voc",
            mime: "audio/x-voc"
          };
        }
        if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
          const jsonSize = new DataView(this.buffer.buffer).getUint32(12, true);
          if (jsonSize > 12 && this.buffer.length >= jsonSize + 16) {
            try {
              const header = new TextDecoder().decode(this.buffer.subarray(16, jsonSize + 16));
              const json = JSON.parse(header);
              if (json.files) {
                return {
                  ext: "asar",
                  mime: "application/x-asar"
                };
              }
            } catch {
            }
          }
        }
        if (this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) {
          return {
            ext: "mxf",
            mime: "application/mxf"
          };
        }
        if (this.checkString("SCRM", { offset: 44 })) {
          return {
            ext: "s3m",
            mime: "audio/x-s3m"
          };
        }
        if (this.check([71]) && this.check([71], { offset: 188 })) {
          return {
            ext: "mts",
            mime: "video/mp2t"
          };
        }
        if (this.check([71], { offset: 4 }) && this.check([71], { offset: 196 })) {
          return {
            ext: "mts",
            mime: "video/mp2t"
          };
        }
        if (this.check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) {
          return {
            ext: "mobi",
            mime: "application/x-mobipocket-ebook"
          };
        }
        if (this.check([68, 73, 67, 77], { offset: 128 })) {
          return {
            ext: "dcm",
            mime: "application/dicom"
          };
        }
        if (this.check([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) {
          return {
            ext: "lnk",
            mime: "application/x.ms.shortcut"
            // Invented by us
          };
        }
        if (this.check([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) {
          return {
            ext: "alias",
            mime: "application/x.apple.alias"
            // Invented by us
          };
        }
        if (this.checkString("Kaydara FBX Binary  \0")) {
          return {
            ext: "fbx",
            mime: "application/x.autodesk.fbx"
            // Invented by us
          };
        }
        if (this.check([76, 80], { offset: 34 }) && (this.check([0, 0, 1], { offset: 8 }) || this.check([1, 0, 2], { offset: 8 }) || this.check([2, 0, 2], { offset: 8 }))) {
          return {
            ext: "eot",
            mime: "application/vnd.ms-fontobject"
          };
        }
        if (this.check([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) {
          return {
            ext: "indd",
            mime: "application/x-indesign"
          };
        }
        await tokenizer.peekBuffer(this.buffer, { length: Math.min(512, tokenizer.fileInfo.size), mayBeLess: true });
        if (this.checkString("ustar", { offset: 257 }) && (this.checkString("\0", { offset: 262 }) || this.checkString(" ", { offset: 262 })) || this.check([0, 0, 0, 0, 0, 0], { offset: 257 }) && tarHeaderChecksumMatches(this.buffer)) {
          return {
            ext: "tar",
            mime: "application/x-tar"
          };
        }
        if (this.check([255, 254])) {
          const encoding = "utf-16le";
          if (this.checkString("<?xml ", { offset: 2, encoding })) {
            return {
              ext: "xml",
              mime: "application/xml"
            };
          }
          if (this.check([255, 14], { offset: 2 }) && this.checkString("SketchUp Model", { offset: 4, encoding })) {
            return {
              ext: "skp",
              mime: "application/vnd.sketchup.skp"
            };
          }
          if (this.checkString("Windows Registry Editor Version 5.00\r\n", { offset: 2, encoding })) {
            return {
              ext: "reg",
              mime: "application/x-ms-regedit"
            };
          }
          return void 0;
        }
        if (this.checkString("-----BEGIN PGP MESSAGE-----")) {
          return {
            ext: "pgp",
            mime: "application/pgp-encrypted"
          };
        }
      }, "detectConfident");
      // Detections with limited supporting data, resulting in a higher likelihood of false positives
      detectImprecise = /* @__PURE__ */ __name(async (tokenizer) => {
        this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
        await tokenizer.peekBuffer(this.buffer, { length: Math.min(8, tokenizer.fileInfo.size), mayBeLess: true });
        if (this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179])) {
          return {
            ext: "mpg",
            mime: "video/mpeg"
          };
        }
        if (this.check([0, 1, 0, 0, 0])) {
          return {
            ext: "ttf",
            mime: "font/ttf"
          };
        }
        if (this.check([0, 0, 1, 0])) {
          return {
            ext: "ico",
            mime: "image/x-icon"
          };
        }
        if (this.check([0, 0, 2, 0])) {
          return {
            ext: "cur",
            mime: "image/x-icon"
          };
        }
        await tokenizer.peekBuffer(this.buffer, { length: Math.min(2 + this.options.mpegOffsetTolerance, tokenizer.fileInfo.size), mayBeLess: true });
        if (this.buffer.length >= 2 + this.options.mpegOffsetTolerance) {
          for (let depth = 0; depth <= this.options.mpegOffsetTolerance; ++depth) {
            const type = this.scanMpeg(depth);
            if (type) {
              return type;
            }
          }
        }
      }, "detectImprecise");
      async readTiffTag(bigEndian) {
        const tagId = await this.tokenizer.readToken(bigEndian ? UINT16_BE : UINT16_LE);
        this.tokenizer.ignore(10);
        switch (tagId) {
          case 50341:
            return {
              ext: "arw",
              mime: "image/x-sony-arw"
            };
          case 50706:
            return {
              ext: "dng",
              mime: "image/x-adobe-dng"
            };
          default:
        }
      }
      async readTiffIFD(bigEndian) {
        const numberOfTags = await this.tokenizer.readToken(bigEndian ? UINT16_BE : UINT16_LE);
        for (let n = 0; n < numberOfTags; ++n) {
          const fileType2 = await this.readTiffTag(bigEndian);
          if (fileType2) {
            return fileType2;
          }
        }
      }
      async readTiffHeader(bigEndian) {
        const version2 = (bigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 2);
        const ifdOffset = (bigEndian ? UINT32_BE : UINT32_LE).get(this.buffer, 4);
        if (version2 === 42) {
          if (ifdOffset >= 6) {
            if (this.checkString("CR", { offset: 8 })) {
              return {
                ext: "cr2",
                mime: "image/x-canon-cr2"
              };
            }
            if (ifdOffset >= 8) {
              const someId1 = (bigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 8);
              const someId2 = (bigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 10);
              if (someId1 === 28 && someId2 === 254 || someId1 === 31 && someId2 === 11) {
                return {
                  ext: "nef",
                  mime: "image/x-nikon-nef"
                };
              }
            }
          }
          await this.tokenizer.ignore(ifdOffset);
          const fileType2 = await this.readTiffIFD(bigEndian);
          return fileType2 ?? {
            ext: "tif",
            mime: "image/tiff"
          };
        }
        if (version2 === 43) {
          return {
            ext: "tif",
            mime: "image/tiff"
          };
        }
      }
      /**
      	Scan check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE).
      
      	@param offset - Offset to scan for sync-preamble.
      	@returns {{ext: string, mime: string}}
      	*/
      scanMpeg(offset) {
        if (this.check([255, 224], { offset, mask: [255, 224] })) {
          if (this.check([16], { offset: offset + 1, mask: [22] })) {
            if (this.check([8], { offset: offset + 1, mask: [8] })) {
              return {
                ext: "aac",
                mime: "audio/aac"
              };
            }
            return {
              ext: "aac",
              mime: "audio/aac"
            };
          }
          if (this.check([2], { offset: offset + 1, mask: [6] })) {
            return {
              ext: "mp3",
              mime: "audio/mpeg"
            };
          }
          if (this.check([4], { offset: offset + 1, mask: [6] })) {
            return {
              ext: "mp2",
              mime: "audio/mpeg"
            };
          }
          if (this.check([6], { offset: offset + 1, mask: [6] })) {
            return {
              ext: "mp1",
              mime: "audio/mpeg"
            };
          }
        }
      }
    };
    supportedExtensions = new Set(extensions);
    supportedMimeTypes = new Set(mimeTypes);
  }
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = parseCookie2;
    exports.parse = parseCookie2;
    exports.stringifyCookie = stringifyCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    exports.parseSetCookie = parseSetCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var maxAgeRegExp = /^-?\d+$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = /* @__PURE__ */ __name(function() {
      }, "C");
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parseCookie2(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode4;
      let index = 0;
      do {
        const eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1)
          break;
        const endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const key = valueSlice(str, index, eqIdx);
        if (obj[key] === void 0) {
          obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    __name(parseCookie2, "parseCookie");
    function stringifyCookie(cookie, options) {
      const enc = options?.encode || encodeURIComponent;
      const cookieStrings = [];
      for (const name of Object.keys(cookie)) {
        const val = cookie[name];
        if (val === void 0)
          continue;
        if (!cookieNameRegExp.test(name)) {
          throw new TypeError(`cookie name is invalid: ${name}`);
        }
        const value = enc(val);
        if (!cookieValueRegExp.test(value)) {
          throw new TypeError(`cookie val is invalid: ${val}`);
        }
        cookieStrings.push(`${name}=${value}`);
      }
      return cookieStrings.join("; ");
    }
    __name(stringifyCookie, "stringifyCookie");
    function stringifySetCookie(_name, _val, _opts) {
      const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
      const options = typeof _val === "object" ? _val : _opts;
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError(`argument name is invalid: ${cookie.name}`);
      }
      const value = cookie.value ? enc(cookie.value) : "";
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${cookie.value}`);
      }
      let str = cookie.name + "=" + value;
      if (cookie.maxAge !== void 0) {
        if (!Number.isInteger(cookie.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
        }
        str += "; Max-Age=" + cookie.maxAge;
      }
      if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
          throw new TypeError(`option domain is invalid: ${cookie.domain}`);
        }
        str += "; Domain=" + cookie.domain;
      }
      if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
          throw new TypeError(`option path is invalid: ${cookie.path}`);
        }
        str += "; Path=" + cookie.path;
      }
      if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${cookie.expires}`);
        }
        str += "; Expires=" + cookie.expires.toUTCString();
      }
      if (cookie.httpOnly) {
        str += "; HttpOnly";
      }
      if (cookie.secure) {
        str += "; Secure";
      }
      if (cookie.partitioned) {
        str += "; Partitioned";
      }
      if (cookie.priority) {
        const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${cookie.priority}`);
        }
      }
      if (cookie.sameSite) {
        const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
        }
      }
      return str;
    }
    __name(stringifySetCookie, "stringifySetCookie");
    function parseSetCookie(str, options) {
      const dec = options?.decode || decode4;
      const len = str.length;
      const endIdx = endIndex(str, 0, len);
      const eqIdx = eqIndex(str, 0, endIdx);
      const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
      };
      let index = endIdx + 1;
      while (index < len) {
        const endIdx2 = endIndex(str, index, len);
        const eqIdx2 = eqIndex(str, index, endIdx2);
        const attr = eqIdx2 === -1 ? valueSlice(str, index, endIdx2) : valueSlice(str, index, eqIdx2);
        const val = eqIdx2 === -1 ? void 0 : valueSlice(str, eqIdx2 + 1, endIdx2);
        switch (attr.toLowerCase()) {
          case "httponly":
            setCookie.httpOnly = true;
            break;
          case "secure":
            setCookie.secure = true;
            break;
          case "partitioned":
            setCookie.partitioned = true;
            break;
          case "domain":
            setCookie.domain = val;
            break;
          case "path":
            setCookie.path = val;
            break;
          case "max-age":
            if (val && maxAgeRegExp.test(val))
              setCookie.maxAge = Number(val);
            break;
          case "expires":
            if (!val)
              break;
            const date2 = new Date(val);
            if (Number.isFinite(date2.valueOf()))
              setCookie.expires = date2;
            break;
          case "priority":
            if (!val)
              break;
            const priority = val.toLowerCase();
            if (priority === "low" || priority === "medium" || priority === "high") {
              setCookie.priority = priority;
            }
            break;
          case "samesite":
            if (!val)
              break;
            const sameSite = val.toLowerCase();
            if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
              setCookie.sameSite = sameSite;
            }
            break;
        }
        index = endIdx2 + 1;
      }
      return setCookie;
    }
    __name(parseSetCookie, "parseSetCookie");
    function endIndex(str, min, len) {
      const index = str.indexOf(";", min);
      return index === -1 ? len : index;
    }
    __name(endIndex, "endIndex");
    function eqIndex(str, min, max) {
      const index = str.indexOf("=", min);
      return index < max ? index : -1;
    }
    __name(eqIndex, "eqIndex");
    function valueSlice(str, min, max) {
      let start = min;
      let end = max;
      do {
        const code = str.charCodeAt(start);
        if (code !== 32 && code !== 9)
          break;
      } while (++start < end);
      while (end > start) {
        const code = str.charCodeAt(end - 1);
        if (code !== 32 && code !== 9)
          break;
        end--;
      }
      return str.slice(start, end);
    }
    __name(valueSlice, "valueSlice");
    function decode4(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    __name(decode4, "decode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
    __name(isDate, "isDate");
  }
});

// node_modules/@alloc/quick-lru/index.js
var require_quick_lru = __commonJS({
  "node_modules/@alloc/quick-lru/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var QuickLRU = class {
      static {
        __name(this, "QuickLRU");
      }
      constructor(options = {}) {
        if (!(options.maxSize && options.maxSize > 0)) {
          throw new TypeError("`maxSize` must be a number greater than 0");
        }
        if (typeof options.maxAge === "number" && options.maxAge === 0) {
          throw new TypeError("`maxAge` must be a number greater than 0");
        }
        this.maxSize = options.maxSize;
        this.maxAge = options.maxAge || Infinity;
        this.onEviction = options.onEviction;
        this.cache = /* @__PURE__ */ new Map();
        this.oldCache = /* @__PURE__ */ new Map();
        this._size = 0;
      }
      _emitEvictions(cache) {
        if (typeof this.onEviction !== "function") {
          return;
        }
        for (const [key, item] of cache) {
          this.onEviction(key, item.value);
        }
      }
      _deleteIfExpired(key, item) {
        if (typeof item.expiry === "number" && item.expiry <= Date.now()) {
          if (typeof this.onEviction === "function") {
            this.onEviction(key, item.value);
          }
          return this.delete(key);
        }
        return false;
      }
      _getOrDeleteIfExpired(key, item) {
        const deleted = this._deleteIfExpired(key, item);
        if (deleted === false) {
          return item.value;
        }
      }
      _getItemValue(key, item) {
        return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
      }
      _peek(key, cache) {
        const item = cache.get(key);
        return this._getItemValue(key, item);
      }
      _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
          this._size = 0;
          this._emitEvictions(this.oldCache);
          this.oldCache = this.cache;
          this.cache = /* @__PURE__ */ new Map();
        }
      }
      _moveToRecent(key, item) {
        this.oldCache.delete(key);
        this._set(key, item);
      }
      *_entriesAscending() {
        for (const item of this.oldCache) {
          const [key, value] = item;
          if (!this.cache.has(key)) {
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
              yield item;
            }
          }
        }
        for (const item of this.cache) {
          const [key, value] = item;
          const deleted = this._deleteIfExpired(key, value);
          if (deleted === false) {
            yield item;
          }
        }
      }
      get(key) {
        if (this.cache.has(key)) {
          const item = this.cache.get(key);
          return this._getItemValue(key, item);
        }
        if (this.oldCache.has(key)) {
          const item = this.oldCache.get(key);
          if (this._deleteIfExpired(key, item) === false) {
            this._moveToRecent(key, item);
            return item.value;
          }
        }
      }
      set(key, value, { maxAge = this.maxAge === Infinity ? void 0 : Date.now() + this.maxAge } = {}) {
        if (this.cache.has(key)) {
          this.cache.set(key, {
            value,
            maxAge
          });
        } else {
          this._set(key, { value, expiry: maxAge });
        }
      }
      has(key) {
        if (this.cache.has(key)) {
          return !this._deleteIfExpired(key, this.cache.get(key));
        }
        if (this.oldCache.has(key)) {
          return !this._deleteIfExpired(key, this.oldCache.get(key));
        }
        return false;
      }
      peek(key) {
        if (this.cache.has(key)) {
          return this._peek(key, this.cache);
        }
        if (this.oldCache.has(key)) {
          return this._peek(key, this.oldCache);
        }
      }
      delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
          this._size--;
        }
        return this.oldCache.delete(key) || deleted;
      }
      clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
      }
      resize(newSize) {
        if (!(newSize && newSize > 0)) {
          throw new TypeError("`maxSize` must be a number greater than 0");
        }
        const items = [...this._entriesAscending()];
        const removeCount = items.length - newSize;
        if (removeCount < 0) {
          this.cache = new Map(items);
          this.oldCache = /* @__PURE__ */ new Map();
          this._size = items.length;
        } else {
          if (removeCount > 0) {
            this._emitEvictions(items.slice(0, removeCount));
          }
          this.oldCache = new Map(items.slice(removeCount));
          this.cache = /* @__PURE__ */ new Map();
          this._size = 0;
        }
        this.maxSize = newSize;
      }
      *keys() {
        for (const [key] of this) {
          yield key;
        }
      }
      *values() {
        for (const [, value] of this) {
          yield value;
        }
      }
      *[Symbol.iterator]() {
        for (const item of this.cache) {
          const [key, value] = item;
          const deleted = this._deleteIfExpired(key, value);
          if (deleted === false) {
            yield [key, value.value];
          }
        }
        for (const item of this.oldCache) {
          const [key, value] = item;
          if (!this.cache.has(key)) {
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
              yield [key, value.value];
            }
          }
        }
      }
      *entriesDescending() {
        let items = [...this.cache];
        for (let i = items.length - 1; i >= 0; --i) {
          const item = items[i];
          const [key, value] = item;
          const deleted = this._deleteIfExpired(key, value);
          if (deleted === false) {
            yield [key, value.value];
          }
        }
        items = [...this.oldCache];
        for (let i = items.length - 1; i >= 0; --i) {
          const item = items[i];
          const [key, value] = item;
          if (!this.cache.has(key)) {
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
              yield [key, value.value];
            }
          }
        }
      }
      *entriesAscending() {
        for (const [key, value] of this._entriesAscending()) {
          yield [key, value.value];
        }
      }
      get size() {
        if (!this._size) {
          return this.oldCache.size;
        }
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()) {
          if (!this.cache.has(key)) {
            oldCacheSize++;
          }
        }
        return Math.min(this._size + oldCacheSize, this.maxSize);
      }
    };
    module.exports = QuickLRU;
  }
});

// .wrangler/tmp/bundle-piSYoY/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// .wrangler/tmp/bundle-piSYoY/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/memoirist/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var createNode = /* @__PURE__ */ __name((part, inert) => {
  const inertMap = inert?.length ? {} : null;
  if (inertMap)
    for (const child of inert)
      inertMap[child.part.charCodeAt(0)] = child;
  return {
    part,
    store: null,
    inert: inertMap,
    params: null,
    wildcardStore: null
  };
}, "createNode");
var cloneNode = /* @__PURE__ */ __name((node, part) => ({
  ...node,
  part
}), "cloneNode");
var createParamNode = /* @__PURE__ */ __name((name) => ({
  name,
  store: null,
  inert: null
}), "createParamNode");
var Memoirist = class _Memoirist {
  static {
    __name(this, "_Memoirist");
  }
  constructor(config2 = {}) {
    this.config = config2;
    if (config2.lazy)
      this.find = this.lazyFind;
    if (config2.onParam && !Array.isArray(config2.onParam))
      this.config.onParam = [
        this.config.onParam
      ];
  }
  root = {};
  history = [];
  deferred = [];
  static regex = {
    static: /:.+?(?=\/|$)/,
    params: /:.+?(?=\/|$)/g,
    optionalParams: /(\/:\w+\?)/g
  };
  lazyFind = /* @__PURE__ */ __name((method, url) => {
    if (!this.config.lazy)
      return this.find;
    this.build();
    return this.find(method, url);
  }, "lazyFind");
  build() {
    if (!this.config.lazy)
      return;
    for (const [method, path, store] of this.deferred)
      this.add(method, path, store, { lazy: false, ignoreHistory: true });
    this.deferred = [];
    this.find = (method, url) => {
      const root = this.root[method];
      if (!root)
        return null;
      return matchRoute(
        url,
        url.length,
        root,
        0,
        this.config.onParam
      );
    };
  }
  add(method, path, store, {
    ignoreError = false,
    ignoreHistory = false,
    lazy = this.config.lazy
  } = {}) {
    if (lazy) {
      this.find = this.lazyFind;
      this.deferred.push([method, path, store]);
      return store;
    }
    if (typeof path !== "string")
      throw new TypeError("Route path must be a string");
    if (path === "")
      path = "/";
    else if (path[0] !== "/")
      path = `/${path}`;
    const isWildcard = path[path.length - 1] === "*";
    const optionalParams = path.match(_Memoirist.regex.optionalParams);
    if (optionalParams) {
      const originalPath = path.replaceAll("?", "");
      this.add(method, originalPath, store, {
        ignoreError,
        ignoreHistory,
        lazy
      });
      for (let i = 0; i < optionalParams.length; i++) {
        let newPath = path.replace(optionalParams[i], "");
        this.add(method, newPath, store, {
          ignoreError: true,
          ignoreHistory,
          lazy
        });
      }
      return store;
    }
    if (optionalParams)
      path = path.replaceAll("?", "");
    if (this.history.find(([m, p, s]) => m === method && p === path))
      return store;
    if (isWildcard || optionalParams && path.charCodeAt(path.length - 1) === 63)
      path = path.slice(0, -1);
    if (!ignoreHistory)
      this.history.push([method, path, store]);
    const inertParts = path.split(_Memoirist.regex.static);
    const paramParts = path.match(_Memoirist.regex.params) || [];
    if (inertParts[inertParts.length - 1] === "")
      inertParts.pop();
    let node;
    if (!this.root[method])
      node = this.root[method] = createNode("/");
    else
      node = this.root[method];
    let paramPartsIndex = 0;
    for (let i = 0; i < inertParts.length; ++i) {
      let part = inertParts[i];
      if (i > 0) {
        const param = paramParts[paramPartsIndex++].slice(1);
        if (node.params === null)
          node.params = createParamNode(param);
        else if (node.params.name !== param) {
          if (ignoreError)
            return store;
          else
            throw new Error(
              `Cannot create route "${path}" with parameter "${param}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`
            );
        }
        const params = node.params;
        if (params.inert === null) {
          node = params.inert = createNode(part);
          continue;
        }
        node = params.inert;
      }
      for (let j = 0; ; ) {
        if (j === part.length) {
          if (j < node.part.length) {
            const childNode = cloneNode(node, node.part.slice(j));
            Object.assign(node, createNode(part, [childNode]));
          }
          break;
        }
        if (j === node.part.length) {
          if (node.inert === null)
            node.inert = {};
          const inert = node.inert[part.charCodeAt(j)];
          if (inert) {
            node = inert;
            part = part.slice(j);
            j = 0;
            continue;
          }
          const childNode = createNode(part.slice(j));
          node.inert[part.charCodeAt(j)] = childNode;
          node = childNode;
          break;
        }
        if (part[j] !== node.part[j]) {
          const existingChild = cloneNode(node, node.part.slice(j));
          const newChild = createNode(part.slice(j));
          Object.assign(
            node,
            createNode(node.part.slice(0, j), [
              existingChild,
              newChild
            ])
          );
          node = newChild;
          break;
        }
        ++j;
      }
    }
    if (paramPartsIndex < paramParts.length) {
      const param = paramParts[paramPartsIndex];
      const name = param.slice(1);
      if (node.params === null)
        node.params = createParamNode(name);
      else if (node.params.name !== name) {
        if (ignoreError)
          return store;
        else
          throw new Error(
            `Cannot create route "${path}" with parameter "${name}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`
          );
      }
      if (node.params.store === null)
        node.params.store = store;
      return node.params.store;
    }
    if (isWildcard) {
      if (node.wildcardStore === null)
        node.wildcardStore = store;
      return node.wildcardStore;
    }
    if (node.store === null)
      node.store = store;
    return node.store;
  }
  find(method, url) {
    const root = this.root[method];
    if (!root)
      return null;
    return matchRoute(
      url,
      url.length,
      root,
      0,
      this.config.onParam
    );
  }
};
var matchRoute = /* @__PURE__ */ __name((url, urlLength, node, startIndex, onParam) => {
  const part = node.part;
  const length = part.length;
  const endIndex = startIndex + length;
  if (length > 1) {
    if (endIndex > urlLength)
      return null;
    if (length < 15) {
      for (let i = 1, j = startIndex + 1; i < length; ++i, ++j)
        if (part.charCodeAt(i) !== url.charCodeAt(j))
          return null;
    } else if (url.slice(startIndex, endIndex) !== part)
      return null;
  }
  if (endIndex === urlLength) {
    if (node.store !== null)
      return {
        store: node.store,
        params: {}
      };
    if (node.wildcardStore !== null)
      return {
        store: node.wildcardStore,
        params: { "*": "" }
      };
    return null;
  }
  if (node.inert !== null) {
    const inert = node.inert[url.charCodeAt(endIndex)];
    if (inert !== void 0) {
      const route = matchRoute(url, urlLength, inert, endIndex, onParam);
      if (route !== null)
        return route;
    }
  }
  if (node.params !== null) {
    const { store, name, inert } = node.params;
    const slashIndex = url.indexOf("/", endIndex);
    if (slashIndex !== endIndex) {
      if (slashIndex === -1 || slashIndex >= urlLength) {
        if (store !== null) {
          const params = {};
          params[name] = url.substring(endIndex, urlLength);
          if (onParam)
            for (let i = 0; i < onParam.length; i++) {
              let temp = onParam[i](params[name], name);
              if (temp !== void 0)
                params[name] = temp;
            }
          return {
            store,
            params
          };
        }
      } else if (inert !== null) {
        const route = matchRoute(
          url,
          urlLength,
          inert,
          slashIndex,
          onParam
        );
        if (route !== null) {
          route.params[name] = url.substring(endIndex, slashIndex);
          if (onParam)
            for (let i = 0; i < onParam.length; i++) {
              let temp = onParam[i](route.params[name], name);
              if (temp !== void 0)
                route.params[name] = temp;
            }
          return route;
        }
      }
    }
  }
  if (node.wildcardStore !== null)
    return {
      store: node.wildcardStore,
      params: {
        "*": url.substring(endIndex, urlLength)
      }
    };
  return null;
}, "matchRoute");

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var value_exports = {};
__export(value_exports, {
  HasPropertyKey: () => HasPropertyKey,
  IsArray: () => IsArray,
  IsAsyncIterator: () => IsAsyncIterator,
  IsBigInt: () => IsBigInt,
  IsBoolean: () => IsBoolean,
  IsDate: () => IsDate,
  IsFunction: () => IsFunction,
  IsIterator: () => IsIterator,
  IsNull: () => IsNull,
  IsNumber: () => IsNumber,
  IsObject: () => IsObject,
  IsRegExp: () => IsRegExp,
  IsString: () => IsString,
  IsSymbol: () => IsSymbol,
  IsUint8Array: () => IsUint8Array,
  IsUndefined: () => IsUndefined
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function HasPropertyKey(value, key) {
  return key in value;
}
__name(HasPropertyKey, "HasPropertyKey");
function IsAsyncIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
__name(IsAsyncIterator, "IsAsyncIterator");
function IsArray(value) {
  return Array.isArray(value);
}
__name(IsArray, "IsArray");
function IsBigInt(value) {
  return typeof value === "bigint";
}
__name(IsBigInt, "IsBigInt");
function IsBoolean(value) {
  return typeof value === "boolean";
}
__name(IsBoolean, "IsBoolean");
function IsDate(value) {
  return value instanceof globalThis.Date;
}
__name(IsDate, "IsDate");
function IsFunction(value) {
  return typeof value === "function";
}
__name(IsFunction, "IsFunction");
function IsIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
__name(IsIterator, "IsIterator");
function IsNull(value) {
  return value === null;
}
__name(IsNull, "IsNull");
function IsNumber(value) {
  return typeof value === "number";
}
__name(IsNumber, "IsNumber");
function IsObject(value) {
  return typeof value === "object" && value !== null;
}
__name(IsObject, "IsObject");
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
__name(IsRegExp, "IsRegExp");
function IsString(value) {
  return typeof value === "string";
}
__name(IsString, "IsString");
function IsSymbol(value) {
  return typeof value === "symbol";
}
__name(IsSymbol, "IsSymbol");
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
__name(IsUint8Array, "IsUint8Array");
function IsUndefined(value) {
  return value === void 0;
}
__name(IsUndefined, "IsUndefined");

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
__name(ArrayType, "ArrayType");
function DateType(value) {
  return new Date(value.getTime());
}
__name(DateType, "DateType");
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
__name(Uint8ArrayType, "Uint8ArrayType");
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
__name(RegExpType, "RegExpType");
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
__name(ObjectType, "ObjectType");
function Visit(value) {
  return IsArray(value) ? ArrayType(value) : IsDate(value) ? DateType(value) : IsUint8Array(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject(value) ? ObjectType(value) : value;
}
__name(Visit, "Visit");
function Clone(value) {
  return Visit(value);
}
__name(Clone, "Clone");

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneType(schema, options) {
  return options === void 0 ? Clone(schema) : Clone({ ...options, ...schema });
}
__name(CloneType, "CloneType");

// node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function IsAsyncIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.asyncIterator in value;
}
__name(IsAsyncIterator2, "IsAsyncIterator");
function IsIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.iterator in value;
}
__name(IsIterator2, "IsIterator");
function IsStandardObject(value) {
  return IsObject2(value) && (globalThis.Object.getPrototypeOf(value) === Object.prototype || globalThis.Object.getPrototypeOf(value) === null);
}
__name(IsStandardObject, "IsStandardObject");
function IsPromise(value) {
  return value instanceof globalThis.Promise;
}
__name(IsPromise, "IsPromise");
function IsDate2(value) {
  return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
__name(IsDate2, "IsDate");
function IsMap(value) {
  return value instanceof globalThis.Map;
}
__name(IsMap, "IsMap");
function IsSet(value) {
  return value instanceof globalThis.Set;
}
__name(IsSet, "IsSet");
function IsTypedArray(value) {
  return globalThis.ArrayBuffer.isView(value);
}
__name(IsTypedArray, "IsTypedArray");
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
__name(IsUint8Array2, "IsUint8Array");
function HasPropertyKey2(value, key) {
  return key in value;
}
__name(HasPropertyKey2, "HasPropertyKey");
function IsObject2(value) {
  return value !== null && typeof value === "object";
}
__name(IsObject2, "IsObject");
function IsArray2(value) {
  return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
__name(IsArray2, "IsArray");
function IsUndefined2(value) {
  return value === void 0;
}
__name(IsUndefined2, "IsUndefined");
function IsNull2(value) {
  return value === null;
}
__name(IsNull2, "IsNull");
function IsBoolean2(value) {
  return typeof value === "boolean";
}
__name(IsBoolean2, "IsBoolean");
function IsNumber2(value) {
  return typeof value === "number";
}
__name(IsNumber2, "IsNumber");
function IsInteger(value) {
  return globalThis.Number.isInteger(value);
}
__name(IsInteger, "IsInteger");
function IsBigInt2(value) {
  return typeof value === "bigint";
}
__name(IsBigInt2, "IsBigInt");
function IsString2(value) {
  return typeof value === "string";
}
__name(IsString2, "IsString");
function IsFunction2(value) {
  return typeof value === "function";
}
__name(IsFunction2, "IsFunction");
function IsSymbol2(value) {
  return typeof value === "symbol";
}
__name(IsSymbol2, "IsSymbol");
function IsValueType(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNull2(value) || IsNumber2(value) || IsString2(value) || IsSymbol2(value) || IsUndefined2(value);
}
__name(IsValueType, "IsValueType");

// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.InstanceMode = "default";
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
  }
  __name(IsExactOptionalProperty, "IsExactOptionalProperty");
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject2 = IsObject2(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject2 : isObject2 && !IsArray2(value);
  }
  __name(IsObjectLike, "IsObjectLike");
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  __name(IsRecordLike, "IsRecordLike");
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber2(value) : Number.isFinite(value);
  }
  __name(IsNumberLike, "IsNumberLike");
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined2(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  __name(IsVoidLike, "IsVoidLike");
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));

// node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ImmutableArray(value) {
  return globalThis.Object.freeze(value).map((value2) => Immutable(value2));
}
__name(ImmutableArray, "ImmutableArray");
function ImmutableDate(value) {
  return value;
}
__name(ImmutableDate, "ImmutableDate");
function ImmutableUint8Array(value) {
  return value;
}
__name(ImmutableUint8Array, "ImmutableUint8Array");
function ImmutableRegExp(value) {
  return value;
}
__name(ImmutableRegExp, "ImmutableRegExp");
function ImmutableObject(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Immutable(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Immutable(value[key]);
  }
  return globalThis.Object.freeze(result);
}
__name(ImmutableObject, "ImmutableObject");
function Immutable(value) {
  return IsArray(value) ? ImmutableArray(value) : IsDate(value) ? ImmutableDate(value) : IsUint8Array(value) ? ImmutableUint8Array(value) : IsRegExp(value) ? ImmutableRegExp(value) : IsObject(value) ? ImmutableObject(value) : value;
}
__name(Immutable, "Immutable");

// node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
function CreateType(schema, options) {
  const result = options !== void 0 ? { ...options, ...schema } : schema;
  switch (TypeSystemPolicy.InstanceMode) {
    case "freeze":
      return Immutable(result);
    case "clone":
      return Clone(result);
    default:
      return result;
  }
}
__name(CreateType, "CreateType");

// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TypeBoxError = class extends Error {
  static {
    __name(this, "TypeBoxError");
  }
  constructor(message) {
    super(message);
  }
};

// node_modules/@sinclair/typebox/build/esm/type/guard/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
__name(IsReadonly, "IsReadonly");
function IsOptional(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
__name(IsOptional, "IsOptional");
function IsAny(value) {
  return IsKindOf(value, "Any");
}
__name(IsAny, "IsAny");
function IsArgument(value) {
  return IsKindOf(value, "Argument");
}
__name(IsArgument, "IsArgument");
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
__name(IsArray3, "IsArray");
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
__name(IsAsyncIterator3, "IsAsyncIterator");
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
__name(IsBigInt3, "IsBigInt");
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
__name(IsBoolean3, "IsBoolean");
function IsComputed(value) {
  return IsKindOf(value, "Computed");
}
__name(IsComputed, "IsComputed");
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
__name(IsConstructor, "IsConstructor");
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
__name(IsDate3, "IsDate");
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
__name(IsFunction3, "IsFunction");
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
__name(IsInteger2, "IsInteger");
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
__name(IsIntersect, "IsIntersect");
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
__name(IsIterator3, "IsIterator");
function IsKindOf(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
__name(IsKindOf, "IsKindOf");
function IsLiteralValue(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
__name(IsLiteralValue, "IsLiteralValue");
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
__name(IsLiteral, "IsLiteral");
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
__name(IsMappedKey, "IsMappedKey");
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
__name(IsMappedResult, "IsMappedResult");
function IsNever(value) {
  return IsKindOf(value, "Never");
}
__name(IsNever, "IsNever");
function IsNot(value) {
  return IsKindOf(value, "Not");
}
__name(IsNot, "IsNot");
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
__name(IsNull3, "IsNull");
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
__name(IsNumber3, "IsNumber");
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
__name(IsObject3, "IsObject");
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
__name(IsPromise2, "IsPromise");
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
__name(IsRecord, "IsRecord");
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
__name(IsRef, "IsRef");
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
__name(IsRegExp2, "IsRegExp");
function IsString3(value) {
  return IsKindOf(value, "String");
}
__name(IsString3, "IsString");
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
__name(IsSymbol3, "IsSymbol");
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
__name(IsTemplateLiteral, "IsTemplateLiteral");
function IsThis(value) {
  return IsKindOf(value, "This");
}
__name(IsThis, "IsThis");
function IsTransform(value) {
  return IsObject(value) && TransformKind in value;
}
__name(IsTransform, "IsTransform");
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
__name(IsTuple, "IsTuple");
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
__name(IsUndefined3, "IsUndefined");
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
__name(IsUnion, "IsUnion");
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
__name(IsUint8Array3, "IsUint8Array");
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
__name(IsUnknown, "IsUnknown");
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
__name(IsUnsafe, "IsUnsafe");
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
__name(IsVoid, "IsVoid");
function IsKind(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]);
}
__name(IsKind, "IsKind");
function IsSchema(value) {
  return IsAny(value) || IsArgument(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsComputed(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}
__name(IsSchema, "IsSchema");

// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var type_exports = {};
__export(type_exports, {
  IsAny: () => IsAny2,
  IsArgument: () => IsArgument2,
  IsArray: () => IsArray4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsBigInt: () => IsBigInt4,
  IsBoolean: () => IsBoolean4,
  IsComputed: () => IsComputed2,
  IsConstructor: () => IsConstructor2,
  IsDate: () => IsDate4,
  IsFunction: () => IsFunction4,
  IsImport: () => IsImport,
  IsInteger: () => IsInteger3,
  IsIntersect: () => IsIntersect2,
  IsIterator: () => IsIterator4,
  IsKind: () => IsKind2,
  IsKindOf: () => IsKindOf2,
  IsLiteral: () => IsLiteral2,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralString: () => IsLiteralString,
  IsLiteralValue: () => IsLiteralValue2,
  IsMappedKey: () => IsMappedKey2,
  IsMappedResult: () => IsMappedResult2,
  IsNever: () => IsNever2,
  IsNot: () => IsNot2,
  IsNull: () => IsNull4,
  IsNumber: () => IsNumber4,
  IsObject: () => IsObject4,
  IsOptional: () => IsOptional2,
  IsPromise: () => IsPromise3,
  IsProperties: () => IsProperties,
  IsReadonly: () => IsReadonly2,
  IsRecord: () => IsRecord2,
  IsRecursive: () => IsRecursive,
  IsRef: () => IsRef2,
  IsRegExp: () => IsRegExp3,
  IsSchema: () => IsSchema2,
  IsString: () => IsString4,
  IsSymbol: () => IsSymbol4,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsThis: () => IsThis2,
  IsTransform: () => IsTransform2,
  IsTuple: () => IsTuple2,
  IsUint8Array: () => IsUint8Array4,
  IsUndefined: () => IsUndefined4,
  IsUnion: () => IsUnion2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnknown: () => IsUnknown2,
  IsUnsafe: () => IsUnsafe2,
  IsVoid: () => IsVoid2,
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TypeGuardUnknownTypeError = class extends TypeBoxError {
  static {
    __name(this, "TypeGuardUnknownTypeError");
  }
};
var KnownTypes = [
  "Argument",
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Computed",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
__name(IsPattern, "IsPattern");
function IsControlCharacterFree(value) {
  if (!IsString(value))
    return false;
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
__name(IsControlCharacterFree, "IsControlCharacterFree");
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
__name(IsAdditionalProperties, "IsAdditionalProperties");
function IsOptionalBigInt(value) {
  return IsUndefined(value) || IsBigInt(value);
}
__name(IsOptionalBigInt, "IsOptionalBigInt");
function IsOptionalNumber(value) {
  return IsUndefined(value) || IsNumber(value);
}
__name(IsOptionalNumber, "IsOptionalNumber");
function IsOptionalBoolean(value) {
  return IsUndefined(value) || IsBoolean(value);
}
__name(IsOptionalBoolean, "IsOptionalBoolean");
function IsOptionalString(value) {
  return IsUndefined(value) || IsString(value);
}
__name(IsOptionalString, "IsOptionalString");
function IsOptionalPattern(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
}
__name(IsOptionalPattern, "IsOptionalPattern");
function IsOptionalFormat(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value);
}
__name(IsOptionalFormat, "IsOptionalFormat");
function IsOptionalSchema(value) {
  return IsUndefined(value) || IsSchema2(value);
}
__name(IsOptionalSchema, "IsOptionalSchema");
function IsReadonly2(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
__name(IsReadonly2, "IsReadonly");
function IsOptional2(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
__name(IsOptional2, "IsOptional");
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
__name(IsAny2, "IsAny");
function IsArgument2(value) {
  return IsKindOf2(value, "Argument") && IsNumber(value.index);
}
__name(IsArgument2, "IsArgument");
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
__name(IsArray4, "IsArray");
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
__name(IsAsyncIterator4, "IsAsyncIterator");
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
__name(IsBigInt4, "IsBigInt");
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
__name(IsBoolean4, "IsBoolean");
function IsComputed2(value) {
  return IsKindOf2(value, "Computed") && IsString(value.target) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema));
}
__name(IsComputed2, "IsComputed");
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
__name(IsConstructor2, "IsConstructor");
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
__name(IsDate4, "IsDate");
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
__name(IsFunction4, "IsFunction");
function IsImport(value) {
  return IsKindOf2(value, "Import") && HasPropertyKey(value, "$defs") && IsObject(value.$defs) && IsProperties(value.$defs) && HasPropertyKey(value, "$ref") && IsString(value.$ref) && value.$ref in value.$defs;
}
__name(IsImport, "IsImport");
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
__name(IsInteger3, "IsInteger");
function IsProperties(value) {
  return IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
__name(IsProperties, "IsProperties");
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString(value.type) && value.type !== "object" ? false : true) && IsArray(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
__name(IsIntersect2, "IsIntersect");
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
__name(IsIterator4, "IsIterator");
function IsKindOf2(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
__name(IsKindOf2, "IsKindOf");
function IsLiteralString(value) {
  return IsLiteral2(value) && IsString(value.const);
}
__name(IsLiteralString, "IsLiteralString");
function IsLiteralNumber(value) {
  return IsLiteral2(value) && IsNumber(value.const);
}
__name(IsLiteralNumber, "IsLiteralNumber");
function IsLiteralBoolean(value) {
  return IsLiteral2(value) && IsBoolean(value.const);
}
__name(IsLiteralBoolean, "IsLiteralBoolean");
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue2(value.const);
}
__name(IsLiteral2, "IsLiteral");
function IsLiteralValue2(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
__name(IsLiteralValue2, "IsLiteralValue");
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray(value.keys) && value.keys.every((key) => IsNumber(key) || IsString(key));
}
__name(IsMappedKey2, "IsMappedKey");
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties(value.properties);
}
__name(IsMappedResult2, "IsMappedResult");
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
__name(IsNever2, "IsNever");
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
__name(IsNot2, "IsNot");
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
__name(IsNull4, "IsNull");
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
__name(IsNumber4, "IsNumber");
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
__name(IsObject4, "IsObject");
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
__name(IsPromise3, "IsPromise");
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
__name(IsRecord2, "IsRecord");
function IsRecursive(value) {
  return IsObject(value) && Hint in value && value[Hint] === "Recursive";
}
__name(IsRecursive, "IsRecursive");
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString(value.$ref);
}
__name(IsRef2, "IsRef");
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString(value.source) && IsString(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
__name(IsRegExp3, "IsRegExp");
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
__name(IsString4, "IsString");
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
__name(IsSymbol4, "IsSymbol");
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
__name(IsTemplateLiteral2, "IsTemplateLiteral");
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString(value.$ref);
}
__name(IsThis2, "IsThis");
function IsTransform2(value) {
  return IsObject(value) && TransformKind in value;
}
__name(IsTransform2, "IsTransform");
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber(value.minItems) && IsNumber(value.maxItems) && value.minItems === value.maxItems && // empty
  (IsUndefined(value.items) && IsUndefined(value.additionalItems) && value.minItems === 0 || IsArray(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
__name(IsTuple2, "IsTuple");
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
__name(IsUndefined4, "IsUndefined");
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
__name(IsUnionLiteral, "IsUnionLiteral");
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject(value) && IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
__name(IsUnion2, "IsUnion");
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
__name(IsUint8Array4, "IsUint8Array");
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
__name(IsUnknown2, "IsUnknown");
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
__name(IsUnsafe2, "IsUnsafe");
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
__name(IsVoid2, "IsVoid");
function IsKind2(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
__name(IsKind2, "IsKind");
function IsSchema2(value) {
  return IsObject(value) && (IsAny2(value) || IsArgument2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsComputed2(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}
__name(IsSchema2, "IsSchema");

// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
var PatternBooleanExact = `^${PatternBoolean}$`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;

// node_modules/@sinclair/typebox/build/esm/type/registry/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var format_exports = {};
__export(format_exports, {
  Clear: () => Clear,
  Delete: () => Delete,
  Entries: () => Entries,
  Get: () => Get,
  Has: () => Has,
  Set: () => Set2
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var map = /* @__PURE__ */ new Map();
function Entries() {
  return new Map(map);
}
__name(Entries, "Entries");
function Clear() {
  return map.clear();
}
__name(Clear, "Clear");
function Delete(format) {
  return map.delete(format);
}
__name(Delete, "Delete");
function Has(format) {
  return map.has(format);
}
__name(Has, "Has");
function Set2(format, func) {
  map.set(format, func);
}
__name(Set2, "Set");
function Get(format) {
  return map.get(format);
}
__name(Get, "Get");

// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var type_exports2 = {};
__export(type_exports2, {
  Clear: () => Clear2,
  Delete: () => Delete2,
  Entries: () => Entries2,
  Get: () => Get2,
  Has: () => Has2,
  Set: () => Set3
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var map2 = /* @__PURE__ */ new Map();
function Entries2() {
  return new Map(map2);
}
__name(Entries2, "Entries");
function Clear2() {
  return map2.clear();
}
__name(Clear2, "Clear");
function Delete2(kind) {
  return map2.delete(kind);
}
__name(Delete2, "Delete");
function Has2(kind) {
  return map2.has(kind);
}
__name(Has2, "Has");
function Set3(kind, func) {
  map2.set(kind, func);
}
__name(Set3, "Set");
function Get2(kind) {
  return map2.get(kind);
}
__name(Get2, "Get");

// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function SetIncludes(T, S) {
  return T.includes(S);
}
__name(SetIncludes, "SetIncludes");
function SetDistinct(T) {
  return [...new Set(T)];
}
__name(SetDistinct, "SetDistinct");
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
__name(SetIntersect, "SetIntersect");
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
__name(SetIntersectManyResolve, "SetIntersectManyResolve");
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
__name(SetIntersectMany, "SetIntersectMany");
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}
__name(SetUnionMany, "SetUnionMany");

// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Any(options) {
  return CreateType({ [Kind]: "Any" }, options);
}
__name(Any, "Any");

// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Array2(items, options) {
  return CreateType({ [Kind]: "Array", type: "array", items }, options);
}
__name(Array2, "Array");

// node_modules/@sinclair/typebox/build/esm/type/argument/argument.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Argument(index) {
  return CreateType({ [Kind]: "Argument", index });
}
__name(Argument, "Argument");

// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function AsyncIterator(items, options) {
  return CreateType({ [Kind]: "AsyncIterator", type: "AsyncIterator", items }, options);
}
__name(AsyncIterator, "AsyncIterator");

// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Computed(target, parameters, options) {
  return CreateType({ [Kind]: "Computed", target, parameters }, options);
}
__name(Computed, "Computed");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function DiscardKey(value, key) {
  const { [key]: _, ...rest } = value;
  return rest;
}
__name(DiscardKey, "DiscardKey");
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}
__name(Discard, "Discard");

// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Never(options) {
  return CreateType({ [Kind]: "Never", not: {} }, options);
}
__name(Never, "Never");

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function MappedResult(properties) {
  return CreateType({
    [Kind]: "MappedResult",
    properties
  });
}
__name(MappedResult, "MappedResult");

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Constructor(parameters, returns, options) {
  return CreateType({ [Kind]: "Constructor", type: "Constructor", parameters, returns }, options);
}
__name(Constructor, "Constructor");

// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Function2(parameters, returns, options) {
  return CreateType({ [Kind]: "Function", type: "Function", parameters, returns }, options);
}
__name(Function2, "Function");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function UnionCreate(T, options) {
  return CreateType({ [Kind]: "Union", anyOf: T }, options);
}
__name(UnionCreate, "UnionCreate");

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
  return types.some((type) => IsOptional(type));
}
__name(IsUnionOptional, "IsUnionOptional");
function RemoveOptionalFromRest(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType(left) : left);
}
__name(RemoveOptionalFromRest, "RemoveOptionalFromRest");
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
__name(RemoveOptionalFromType, "RemoveOptionalFromType");
function ResolveUnion(types, options) {
  const isOptional2 = IsUnionOptional(types);
  return isOptional2 ? Optional(UnionCreate(RemoveOptionalFromRest(types), options)) : UnionCreate(RemoveOptionalFromRest(types), options);
}
__name(ResolveUnion, "ResolveUnion");
function UnionEvaluated(T, options) {
  return T.length === 1 ? CreateType(T[0], options) : T.length === 0 ? Never(options) : ResolveUnion(T, options);
}
__name(UnionEvaluated, "UnionEvaluated");

// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Union(types, options) {
  return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}
__name(Union, "Union");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TemplateLiteralParserError = class extends TypeBoxError {
  static {
    __name(this, "TemplateLiteralParserError");
  }
};
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
__name(Unescape, "Unescape");
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
__name(IsNonEscaped, "IsNonEscaped");
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
__name(IsOpenParen, "IsOpenParen");
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
__name(IsCloseParen, "IsCloseParen");
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
__name(IsSeparator, "IsSeparator");
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
__name(IsGroup, "IsGroup");
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
__name(InGroup, "InGroup");
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
__name(IsPrecedenceOr, "IsPrecedenceOr");
function IsPrecedenceAnd(pattern) {
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
__name(IsPrecedenceAnd, "IsPrecedenceAnd");
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
__name(Or, "Or");
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index; scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  __name(Group, "Group");
  function Range(pattern2, index) {
    for (let scan = index; scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  __name(Range, "Range");
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
__name(And, "And");
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
__name(TemplateLiteralParse, "TemplateLiteralParse");
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}
__name(TemplateLiteralParseExact, "TemplateLiteralParseExact");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
var TemplateLiteralFiniteError = class extends TypeBoxError {
  static {
    __name(this, "TemplateLiteralFiniteError");
  }
};
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
__name(IsNumberExpression, "IsNumberExpression");
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
__name(IsBooleanExpression, "IsBooleanExpression");
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
__name(IsStringExpression, "IsStringExpression");
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
__name(IsTemplateLiteralExpressionFinite, "IsTemplateLiteralExpressionFinite");
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}
__name(IsTemplateLiteralFinite, "IsTemplateLiteralFinite");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TemplateLiteralGenerateError = class extends TypeBoxError {
  static {
    __name(this, "TemplateLiteralGenerateError");
  }
};
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
__name(GenerateReduce, "GenerateReduce");
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
__name(GenerateAnd, "GenerateAnd");
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
__name(GenerateOr, "GenerateOr");
function* GenerateConst(expression) {
  return yield expression.const;
}
__name(GenerateConst, "GenerateConst");
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
__name(TemplateLiteralExpressionGenerate, "TemplateLiteralExpressionGenerate");
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}
__name(TemplateLiteralGenerate, "TemplateLiteralGenerate");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Literal(value, options) {
  return CreateType({
    [Kind]: "Literal",
    const: value,
    type: typeof value
  }, options);
}
__name(Literal, "Literal");

// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Boolean2(options) {
  return CreateType({ [Kind]: "Boolean", type: "boolean" }, options);
}
__name(Boolean2, "Boolean");

// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function BigInt2(options) {
  return CreateType({ [Kind]: "BigInt", type: "bigint" }, options);
}
__name(BigInt2, "BigInt");

// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Number2(options) {
  return CreateType({ [Kind]: "Number", type: "number" }, options);
}
__name(Number2, "Number");

// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function String2(options) {
  return CreateType({ [Kind]: "String", type: "string" }, options);
}
__name(String2, "String");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal) => Literal(literal.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
__name(FromUnion, "FromUnion");
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2; i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
__name(FromTerminal, "FromTerminal");
function* FromSyntax(syntax) {
  for (let i = 0; i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
__name(FromSyntax, "FromSyntax");
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}
__name(TemplateLiteralSyntax, "TemplateLiteralSyntax");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TemplateLiteralPatternError = class extends TypeBoxError {
  static {
    __name(this, "TemplateLiteralPatternError");
  }
};
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
__name(Escape, "Escape");
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
__name(Visit2, "Visit");
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}
__name(TemplateLiteralPattern, "TemplateLiteralPattern");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}
__name(TemplateLiteralToUnion, "TemplateLiteralToUnion");

// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function TemplateLiteral(unresolved, options) {
  const pattern = IsString(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return CreateType({ [Kind]: "TemplateLiteral", type: "string", pattern }, options);
}
__name(TemplateLiteral, "TemplateLiteral");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(templateLiteral) {
  const keys = TemplateLiteralGenerate(templateLiteral);
  return keys.map((key) => key.toString());
}
__name(FromTemplateLiteral, "FromTemplateLiteral");
function FromUnion2(types) {
  const result = [];
  for (const type of types)
    result.push(...IndexPropertyKeys(type));
  return result;
}
__name(FromUnion2, "FromUnion");
function FromLiteral(literalValue) {
  return [literalValue.toString()];
}
__name(FromLiteral, "FromLiteral");
function IndexPropertyKeys(type) {
  return [...new Set(IsTemplateLiteral(type) ? FromTemplateLiteral(type) : IsUnion(type) ? FromUnion2(type.anyOf) : IsLiteral(type) ? FromLiteral(type.const) : IsNumber3(type) ? ["[number]"] : IsInteger2(type) ? ["[number]"] : [])];
}
__name(IndexPropertyKeys, "IndexPropertyKeys");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromProperties(type, properties, options) {
  const result = {};
  for (const K2 of Object.getOwnPropertyNames(properties)) {
    result[K2] = Index(type, IndexPropertyKeys(properties[K2]), options);
  }
  return result;
}
__name(FromProperties, "FromProperties");
function FromMappedResult(type, mappedResult, options) {
  return FromProperties(type, mappedResult.properties, options);
}
__name(FromMappedResult, "FromMappedResult");
function IndexFromMappedResult(type, mappedResult, options) {
  const properties = FromMappedResult(type, mappedResult, options);
  return MappedResult(properties);
}
__name(IndexFromMappedResult, "IndexFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(types, key) {
  return types.map((type) => IndexFromPropertyKey(type, key));
}
__name(FromRest, "FromRest");
function FromIntersectRest(types) {
  return types.filter((type) => !IsNever(type));
}
__name(FromIntersectRest, "FromIntersectRest");
function FromIntersect(types, key) {
  return IntersectEvaluated(FromIntersectRest(FromRest(types, key)));
}
__name(FromIntersect, "FromIntersect");
function FromUnionRest(types) {
  return types.some((L) => IsNever(L)) ? [] : types;
}
__name(FromUnionRest, "FromUnionRest");
function FromUnion3(types, key) {
  return UnionEvaluated(FromUnionRest(FromRest(types, key)));
}
__name(FromUnion3, "FromUnion");
function FromTuple(types, key) {
  return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
__name(FromTuple, "FromTuple");
function FromArray(type, key) {
  return key === "[number]" ? type : Never();
}
__name(FromArray, "FromArray");
function FromProperty(properties, propertyKey) {
  return propertyKey in properties ? properties[propertyKey] : Never();
}
__name(FromProperty, "FromProperty");
function IndexFromPropertyKey(type, propertyKey) {
  return IsIntersect(type) ? FromIntersect(type.allOf, propertyKey) : IsUnion(type) ? FromUnion3(type.anyOf, propertyKey) : IsTuple(type) ? FromTuple(type.items ?? [], propertyKey) : IsArray3(type) ? FromArray(type.items, propertyKey) : IsObject3(type) ? FromProperty(type.properties, propertyKey) : Never();
}
__name(IndexFromPropertyKey, "IndexFromPropertyKey");
function IndexFromPropertyKeys(type, propertyKeys) {
  return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type, propertyKey));
}
__name(IndexFromPropertyKeys, "IndexFromPropertyKeys");
function FromSchema(type, propertyKeys) {
  return UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys));
}
__name(FromSchema, "FromSchema");
function Index(type, key, options) {
  if (IsRef(type) || IsRef(key)) {
    const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
    if (!IsSchema(type) || !IsSchema(key))
      throw new TypeBoxError(error);
    return Computed("Index", [type, key]);
  }
  if (IsMappedResult(key))
    return IndexFromMappedResult(type, key, options);
  if (IsMappedKey(key))
    return IndexFromMappedKey(type, key, options);
  return CreateType(IsSchema(key) ? FromSchema(type, IndexPropertyKeys(key)) : FromSchema(type, key), options);
}
__name(Index, "Index");

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type, key, options) {
  return { [key]: Index(type, [key], Clone(options)) };
}
__name(MappedIndexPropertyKey, "MappedIndexPropertyKey");
function MappedIndexPropertyKeys(type, propertyKeys, options) {
  return propertyKeys.reduce((result, left) => {
    return { ...result, ...MappedIndexPropertyKey(type, left, options) };
  }, {});
}
__name(MappedIndexPropertyKeys, "MappedIndexPropertyKeys");
function MappedIndexProperties(type, mappedKey, options) {
  return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
__name(MappedIndexProperties, "MappedIndexProperties");
function IndexFromMappedKey(type, mappedKey, options) {
  const properties = MappedIndexProperties(type, mappedKey, options);
  return MappedResult(properties);
}
__name(IndexFromMappedKey, "IndexFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Iterator(items, options) {
  return CreateType({ [Kind]: "Iterator", type: "Iterator", items }, options);
}
__name(Iterator, "Iterator");

// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function RequiredKeys(properties) {
  const keys = [];
  for (let key in properties) {
    if (!IsOptional(properties[key]))
      keys.push(key);
  }
  return keys;
}
__name(RequiredKeys, "RequiredKeys");
function _Object(properties, options) {
  const required = RequiredKeys(properties);
  const schematic = required.length > 0 ? { [Kind]: "Object", type: "object", properties, required } : { [Kind]: "Object", type: "object", properties };
  return CreateType(schematic, options);
}
__name(_Object, "_Object");
var Object2 = _Object;

// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Promise2(item, options) {
  return CreateType({ [Kind]: "Promise", type: "Promise", item }, options);
}
__name(Promise2, "Promise");

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function RemoveReadonly(schema) {
  return CreateType(Discard(schema, [ReadonlyKind]));
}
__name(RemoveReadonly, "RemoveReadonly");
function AddReadonly(schema) {
  return CreateType({ ...schema, [ReadonlyKind]: "Readonly" });
}
__name(AddReadonly, "AddReadonly");
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
__name(ReadonlyWithFlag, "ReadonlyWithFlag");
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}
__name(Readonly, "Readonly");

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties2(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
__name(FromProperties2, "FromProperties");
function FromMappedResult2(R, F) {
  return FromProperties2(R.properties, F);
}
__name(FromMappedResult2, "FromMappedResult");
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult2(R, F);
  return MappedResult(P);
}
__name(ReadonlyFromMappedResult, "ReadonlyFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Tuple(types, options) {
  return CreateType(types.length > 0 ? { [Kind]: "Tuple", type: "array", items: types, additionalItems: false, minItems: types.length, maxItems: types.length } : { [Kind]: "Tuple", type: "array", minItems: types.length, maxItems: types.length }, options);
}
__name(Tuple, "Tuple");

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult3(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
__name(FromMappedResult3, "FromMappedResult");
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
__name(MappedKeyToKnownMappedResultProperties, "MappedKeyToKnownMappedResultProperties");
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
__name(MappedKeyToUnknownMappedResultProperties, "MappedKeyToUnknownMappedResultProperties");
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
__name(MappedKeyToMappedResultProperties, "MappedKeyToMappedResultProperties");
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult3(K, R);
}
__name(FromMappedKey, "FromMappedKey");
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
__name(FromRest2, "FromRest");
function FromProperties3(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
__name(FromProperties3, "FromProperties");
function FromSchemaType(K, T) {
  const options = { ...T };
  return (
    // unevaluated modifier types
    IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : (
      // unevaluated mapped types
      IsMappedResult(T) ? FromMappedResult3(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : (
        // unevaluated types
        IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items), options) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items), options) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf), options) : IsUnion(T) ? Union(FromRest2(K, T.anyOf), options) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? []), options) : IsObject3(T) ? Object2(FromProperties3(K, T.properties), options) : IsArray3(T) ? Array2(FromSchemaType(K, T.items), options) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item), options) : T
      )
    )
  );
}
__name(FromSchemaType, "FromSchemaType");
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
__name(MappedFunctionReturnType, "MappedFunctionReturnType");
function Mapped(key, map3, options) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return Object2(R, options);
}
__name(Mapped, "Mapped");

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function RemoveOptional(schema) {
  return CreateType(Discard(schema, [OptionalKind]));
}
__name(RemoveOptional, "RemoveOptional");
function AddOptional(schema) {
  return CreateType({ ...schema, [OptionalKind]: "Optional" });
}
__name(AddOptional, "AddOptional");
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
__name(OptionalWithFlag, "OptionalWithFlag");
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}
__name(Optional, "Optional");

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties4(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
__name(FromProperties4, "FromProperties");
function FromMappedResult4(R, F) {
  return FromProperties4(R.properties, F);
}
__name(FromMappedResult4, "FromMappedResult");
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult4(R, F);
  return MappedResult(P);
}
__name(OptionalFromMappedResult, "OptionalFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function IntersectCreate(T, options = {}) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
  return CreateType(options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: T } : { ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: T }, options);
}
__name(IntersectCreate, "IntersectCreate");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
  return types.every((left) => IsOptional(left));
}
__name(IsIntersectOptional, "IsIntersectOptional");
function RemoveOptionalFromType2(type) {
  return Discard(type, [OptionalKind]);
}
__name(RemoveOptionalFromType2, "RemoveOptionalFromType");
function RemoveOptionalFromRest2(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType2(left) : left);
}
__name(RemoveOptionalFromRest2, "RemoveOptionalFromRest");
function ResolveIntersect(types, options) {
  return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest2(types), options)) : IntersectCreate(RemoveOptionalFromRest2(types), options);
}
__name(ResolveIntersect, "ResolveIntersect");
function IntersectEvaluated(types, options = {}) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(types, options);
}
__name(IntersectEvaluated, "IntersectEvaluated");

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Intersect(types, options) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(types, options);
}
__name(Intersect, "Intersect");

// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Ref(...args) {
  const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
  if (typeof $ref !== "string")
    throw new TypeBoxError("Ref: $ref must be a string");
  return CreateType({ [Kind]: "Ref", $ref }, options);
}
__name(Ref, "Ref");

// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed(target, parameters) {
  return Computed("Awaited", [Computed(target, parameters)]);
}
__name(FromComputed, "FromComputed");
function FromRef($ref) {
  return Computed("Awaited", [Ref($ref)]);
}
__name(FromRef, "FromRef");
function FromIntersect2(types) {
  return Intersect(FromRest3(types));
}
__name(FromIntersect2, "FromIntersect");
function FromUnion4(types) {
  return Union(FromRest3(types));
}
__name(FromUnion4, "FromUnion");
function FromPromise(type) {
  return Awaited(type);
}
__name(FromPromise, "FromPromise");
function FromRest3(types) {
  return types.map((type) => Awaited(type));
}
__name(FromRest3, "FromRest");
function Awaited(type, options) {
  return CreateType(IsComputed(type) ? FromComputed(type.target, type.parameters) : IsIntersect(type) ? FromIntersect2(type.allOf) : IsUnion(type) ? FromUnion4(type.anyOf) : IsPromise2(type) ? FromPromise(type.item) : IsRef(type) ? FromRef(type.$ref) : type, options);
}
__name(Awaited, "Awaited");

// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromRest4(types) {
  const result = [];
  for (const L of types)
    result.push(KeyOfPropertyKeys(L));
  return result;
}
__name(FromRest4, "FromRest");
function FromIntersect3(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetUnionMany(propertyKeysArray);
  return propertyKeys;
}
__name(FromIntersect3, "FromIntersect");
function FromUnion5(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetIntersectMany(propertyKeysArray);
  return propertyKeys;
}
__name(FromUnion5, "FromUnion");
function FromTuple2(types) {
  return types.map((_, indexer) => indexer.toString());
}
__name(FromTuple2, "FromTuple");
function FromArray2(_) {
  return ["[number]"];
}
__name(FromArray2, "FromArray");
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
__name(FromProperties5, "FromProperties");
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
__name(FromPatternProperties, "FromPatternProperties");
function KeyOfPropertyKeys(type) {
  return IsIntersect(type) ? FromIntersect3(type.allOf) : IsUnion(type) ? FromUnion5(type.anyOf) : IsTuple(type) ? FromTuple2(type.items ?? []) : IsArray3(type) ? FromArray2(type.items) : IsObject3(type) ? FromProperties5(type.properties) : IsRecord(type) ? FromPatternProperties(type.patternProperties) : [];
}
__name(KeyOfPropertyKeys, "KeyOfPropertyKeys");
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern = keys.map((key) => `(${key})`);
  return `^(${pattern.join("|")})$`;
}
__name(KeyOfPattern, "KeyOfPattern");

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed2(target, parameters) {
  return Computed("KeyOf", [Computed(target, parameters)]);
}
__name(FromComputed2, "FromComputed");
function FromRef2($ref) {
  return Computed("KeyOf", [Ref($ref)]);
}
__name(FromRef2, "FromRef");
function KeyOfFromType(type, options) {
  const propertyKeys = KeyOfPropertyKeys(type);
  const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
  const result = UnionEvaluated(propertyKeyTypes);
  return CreateType(result, options);
}
__name(KeyOfFromType, "KeyOfFromType");
function KeyOfPropertyKeysToRest(propertyKeys) {
  return propertyKeys.map((L) => L === "[number]" ? Number2() : Literal(L));
}
__name(KeyOfPropertyKeysToRest, "KeyOfPropertyKeysToRest");
function KeyOf(type, options) {
  return IsComputed(type) ? FromComputed2(type.target, type.parameters) : IsRef(type) ? FromRef2(type.$ref) : IsMappedResult(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options);
}
__name(KeyOf, "KeyOf");

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(properties, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = KeyOf(properties[K2], Clone(options));
  return result;
}
__name(FromProperties6, "FromProperties");
function FromMappedResult5(mappedResult, options) {
  return FromProperties6(mappedResult.properties, options);
}
__name(FromMappedResult5, "FromMappedResult");
function KeyOfFromMappedResult(mappedResult, options) {
  const properties = FromMappedResult5(mappedResult, options);
  return MappedResult(properties);
}
__name(KeyOfFromMappedResult, "KeyOfFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}
__name(KeyOfPropertyEntries, "KeyOfPropertyEntries");

// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
__name(CompositeKeys, "CompositeKeys");
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
__name(FilterNever, "FilterNever");
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
__name(CompositeProperty, "CompositeProperty");
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
__name(CompositeProperties, "CompositeProperties");
function Composite(T, options) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}
__name(Composite, "Composite");

// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Date2(options) {
  return CreateType({ [Kind]: "Date", type: "Date" }, options);
}
__name(Date2, "Date");

// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Null(options) {
  return CreateType({ [Kind]: "Null", type: "null" }, options);
}
__name(Null, "Null");

// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Symbol2(options) {
  return CreateType({ [Kind]: "Symbol", type: "symbol" }, options);
}
__name(Symbol2, "Symbol");

// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Undefined(options) {
  return CreateType({ [Kind]: "Undefined", type: "undefined" }, options);
}
__name(Undefined, "Undefined");

// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Uint8Array2(options) {
  return CreateType({ [Kind]: "Uint8Array", type: "Uint8Array" }, options);
}
__name(Uint8Array2, "Uint8Array");

// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Unknown(options) {
  return CreateType({ [Kind]: "Unknown" }, options);
}
__name(Unknown, "Unknown");

// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray3(T) {
  return T.map((L) => FromValue(L, false));
}
__name(FromArray3, "FromArray");
function FromProperties7(value) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value))
    Acc[K] = Readonly(FromValue(value[K], false));
  return Acc;
}
__name(FromProperties7, "FromProperties");
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
__name(ConditionalReadonly, "ConditionalReadonly");
function FromValue(value, root) {
  return IsAsyncIterator(value) ? ConditionalReadonly(Any(), root) : IsIterator(value) ? ConditionalReadonly(Any(), root) : IsArray(value) ? Readonly(Tuple(FromArray3(value))) : IsUint8Array(value) ? Uint8Array2() : IsDate(value) ? Date2() : IsObject(value) ? ConditionalReadonly(Object2(FromProperties7(value)), root) : IsFunction(value) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined(value) ? Undefined() : IsNull(value) ? Null() : IsSymbol(value) ? Symbol2() : IsBigInt(value) ? BigInt2() : IsNumber(value) ? Literal(value) : IsBoolean(value) ? Literal(value) : IsString(value) ? Literal(value) : Object2({});
}
__name(FromValue, "FromValue");
function Const(T, options) {
  return CreateType(FromValue(T, true), options);
}
__name(Const, "Const");

// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ConstructorParameters(schema, options) {
  return IsConstructor(schema) ? Tuple(schema.parameters, options) : Never(options);
}
__name(ConstructorParameters, "ConstructorParameters");

// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Enum(item, options) {
  if (IsUndefined(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value) => Literal(value));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}
__name(Enum, "Enum");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ExtendsResolverError = class extends TypeBoxError {
  static {
    __name(this, "ExtendsResolverError");
  }
};
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
__name(IntoBooleanResult, "IntoBooleanResult");
function Throw(message) {
  throw new ExtendsResolverError(message);
}
__name(Throw, "Throw");
function IsStructuralRight(right) {
  return type_exports.IsNever(right) || type_exports.IsIntersect(right) || type_exports.IsUnion(right) || type_exports.IsUnknown(right) || type_exports.IsAny(right);
}
__name(IsStructuralRight, "IsStructuralRight");
function StructuralRight(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
__name(StructuralRight, "StructuralRight");
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
__name(FromAnyRight, "FromAnyRight");
function FromAny(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) && right.anyOf.some((schema) => type_exports.IsAny(schema) || type_exports.IsUnknown(schema)) ? ExtendsResult.True : type_exports.IsUnion(right) ? ExtendsResult.Union : type_exports.IsUnknown(right) ? ExtendsResult.True : type_exports.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
__name(FromAny, "FromAny");
function FromArrayRight(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : type_exports.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromArrayRight, "FromArrayRight");
function FromArray4(left, right) {
  return type_exports.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
__name(FromArray4, "FromArray");
function FromAsyncIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
__name(FromAsyncIterator, "FromAsyncIterator");
function FromBigInt(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromBigInt, "FromBigInt");
function FromBooleanRight(left, right) {
  return type_exports.IsLiteralBoolean(left) ? ExtendsResult.True : type_exports.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromBooleanRight, "FromBooleanRight");
function FromBoolean(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromBoolean, "FromBoolean");
function FromConstructor(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
__name(FromConstructor, "FromConstructor");
function FromDate(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromDate, "FromDate");
function FromFunction(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
__name(FromFunction, "FromFunction");
function FromIntegerRight(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsNumber(left.const) ? ExtendsResult.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromIntegerRight, "FromIntegerRight");
function FromInteger(left, right) {
  return type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
__name(FromInteger, "FromInteger");
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromIntersectRight, "FromIntersectRight");
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromIntersect4, "FromIntersect");
function FromIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
__name(FromIterator, "FromIterator");
function FromLiteral2(left, right) {
  return type_exports.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsString(right) ? FromStringRight(left, right) : type_exports.IsNumber(right) ? FromNumberRight(left, right) : type_exports.IsInteger(right) ? FromIntegerRight(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
__name(FromLiteral2, "FromLiteral");
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
__name(FromNeverRight, "FromNeverRight");
function FromNever(left, right) {
  return ExtendsResult.True;
}
__name(FromNever, "FromNever");
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!type_exports.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
__name(UnwrapTNot, "UnwrapTNot");
function FromNot(left, right) {
  return type_exports.IsNot(left) ? Visit3(UnwrapTNot(left), right) : type_exports.IsNot(right) ? Visit3(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
__name(FromNot, "FromNot");
function FromNull(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromNull, "FromNull");
function FromNumberRight(left, right) {
  return type_exports.IsLiteralNumber(left) ? ExtendsResult.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromNumberRight, "FromNumberRight");
function FromNumber(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromNumber, "FromNumber");
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
__name(IsObjectPropertyCount, "IsObjectPropertyCount");
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
__name(IsObjectStringLike, "IsObjectStringLike");
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && type_exports.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (type_exports.IsString(schema.properties.description.anyOf[0]) && type_exports.IsUndefined(schema.properties.description.anyOf[1]) || type_exports.IsString(schema.properties.description.anyOf[1]) && type_exports.IsUndefined(schema.properties.description.anyOf[0]));
}
__name(IsObjectSymbolLike, "IsObjectSymbolLike");
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectNumberLike, "IsObjectNumberLike");
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectBooleanLike, "IsObjectBooleanLike");
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectBigIntLike, "IsObjectBigIntLike");
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectDateLike, "IsObjectDateLike");
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
__name(IsObjectUint8ArrayLike, "IsObjectUint8ArrayLike");
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
__name(IsObjectFunctionLike, "IsObjectFunctionLike");
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
__name(IsObjectConstructorLike, "IsObjectConstructorLike");
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
__name(IsObjectArrayLike, "IsObjectArrayLike");
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit3(schema.properties["then"], then)) === ExtendsResult.True;
}
__name(IsObjectPromiseLike, "IsObjectPromiseLike");
function Property(left, right) {
  return Visit3(left, right) === ExtendsResult.False ? ExtendsResult.False : type_exports.IsOptional(left) && !type_exports.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
__name(Property, "Property");
function FromObjectRight(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : type_exports.IsNever(left) || type_exports.IsLiteralString(left) && IsObjectStringLike(right) || type_exports.IsLiteralNumber(left) && IsObjectNumberLike(right) || type_exports.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports.IsBigInt(left) && IsObjectBigIntLike(right) || type_exports.IsString(left) && IsObjectStringLike(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports.IsNumber(left) && IsObjectNumberLike(right) || type_exports.IsInteger(left) && IsObjectNumberLike(right) || type_exports.IsBoolean(left) && IsObjectBooleanLike(right) || type_exports.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || type_exports.IsDate(left) && IsObjectDateLike(right) || type_exports.IsConstructor(left) && IsObjectConstructorLike(right) || type_exports.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : type_exports.IsRecord(left) && type_exports.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : type_exports.IsRecord(left) && type_exports.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
__name(FromObjectRight, "FromObjectRight");
function FromObject(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : !type_exports.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
__name(FromObject, "FromObject");
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !type_exports.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.item, right.item));
}
__name(FromPromise2, "FromPromise");
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : PatternStringExact in schema.patternProperties ? String2() : Throw("Unknown record key pattern");
}
__name(RecordKey, "RecordKey");
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : PatternStringExact in schema.patternProperties ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
__name(RecordValue, "RecordValue");
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return type_exports.IsLiteralString(left) && type_exports.IsNumber(Key) && IntoBooleanResult(Visit3(left, Value)) === ExtendsResult.True ? ExtendsResult.True : type_exports.IsUint8Array(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsString(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsArray(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
__name(FromRecordRight, "FromRecordRight");
function FromRecord(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsRecord(right) ? ExtendsResult.False : Visit3(RecordValue(left), RecordValue(right));
}
__name(FromRecord, "FromRecord");
function FromRegExp(left, right) {
  const L = type_exports.IsRegExp(left) ? String2() : left;
  const R = type_exports.IsRegExp(right) ? String2() : right;
  return Visit3(L, R);
}
__name(FromRegExp, "FromRegExp");
function FromStringRight(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsString(left.const) ? ExtendsResult.True : type_exports.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromStringRight, "FromStringRight");
function FromString(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromString, "FromString");
function FromSymbol(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromSymbol, "FromSymbol");
function FromTemplateLiteral2(left, right) {
  return type_exports.IsTemplateLiteral(left) ? Visit3(TemplateLiteralToUnion(left), right) : type_exports.IsTemplateLiteral(right) ? Visit3(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
__name(FromTemplateLiteral2, "FromTemplateLiteral");
function IsArrayOfTuple(left, right) {
  return type_exports.IsArray(right) && left.items !== void 0 && left.items.every((schema) => Visit3(schema, right.items) === ExtendsResult.True);
}
__name(IsArrayOfTuple, "IsArrayOfTuple");
function FromTupleRight(left, right) {
  return type_exports.IsNever(left) ? ExtendsResult.True : type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
__name(FromTupleRight, "FromTupleRight");
function FromTuple3(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : type_exports.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !type_exports.IsTuple(right) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) || !value_exports.IsUndefined(left.items) && value_exports.IsUndefined(right.items) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit3(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromTuple3, "FromTuple");
function FromUint8Array(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUint8Array, "FromUint8Array");
function FromUndefined(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsVoid(right) ? FromVoidRight(left, right) : type_exports.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUndefined, "FromUndefined");
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUnionRight, "FromUnionRight");
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUnion6, "FromUnion");
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
__name(FromUnknownRight, "FromUnknownRight");
function FromUnknown(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : type_exports.IsString(right) ? FromStringRight(left, right) : type_exports.IsNumber(right) ? FromNumberRight(left, right) : type_exports.IsInteger(right) ? FromIntegerRight(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight(left, right) : type_exports.IsArray(right) ? FromArrayRight(left, right) : type_exports.IsTuple(right) ? FromTupleRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromUnknown, "FromUnknown");
function FromVoidRight(left, right) {
  return type_exports.IsUndefined(left) ? ExtendsResult.True : type_exports.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromVoidRight, "FromVoidRight");
function FromVoid(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
__name(FromVoid, "FromVoid");
function Visit3(left, right) {
  return (
    // resolvable
    type_exports.IsTemplateLiteral(left) || type_exports.IsTemplateLiteral(right) ? FromTemplateLiteral2(left, right) : type_exports.IsRegExp(left) || type_exports.IsRegExp(right) ? FromRegExp(left, right) : type_exports.IsNot(left) || type_exports.IsNot(right) ? FromNot(left, right) : (
      // standard
      type_exports.IsAny(left) ? FromAny(left, right) : type_exports.IsArray(left) ? FromArray4(left, right) : type_exports.IsBigInt(left) ? FromBigInt(left, right) : type_exports.IsBoolean(left) ? FromBoolean(left, right) : type_exports.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : type_exports.IsConstructor(left) ? FromConstructor(left, right) : type_exports.IsDate(left) ? FromDate(left, right) : type_exports.IsFunction(left) ? FromFunction(left, right) : type_exports.IsInteger(left) ? FromInteger(left, right) : type_exports.IsIntersect(left) ? FromIntersect4(left, right) : type_exports.IsIterator(left) ? FromIterator(left, right) : type_exports.IsLiteral(left) ? FromLiteral2(left, right) : type_exports.IsNever(left) ? FromNever(left, right) : type_exports.IsNull(left) ? FromNull(left, right) : type_exports.IsNumber(left) ? FromNumber(left, right) : type_exports.IsObject(left) ? FromObject(left, right) : type_exports.IsRecord(left) ? FromRecord(left, right) : type_exports.IsString(left) ? FromString(left, right) : type_exports.IsSymbol(left) ? FromSymbol(left, right) : type_exports.IsTuple(left) ? FromTuple3(left, right) : type_exports.IsPromise(left) ? FromPromise2(left, right) : type_exports.IsUint8Array(left) ? FromUint8Array(left, right) : type_exports.IsUndefined(left) ? FromUndefined(left, right) : type_exports.IsUnion(left) ? FromUnion6(left, right) : type_exports.IsUnknown(left) ? FromUnknown(left, right) : type_exports.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`)
    )
  );
}
__name(Visit3, "Visit");
function ExtendsCheck(left, right) {
  return Visit3(left, right);
}
__name(ExtendsCheck, "ExtendsCheck");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromProperties8(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, Clone(options));
  return Acc;
}
__name(FromProperties8, "FromProperties");
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties8(Left.properties, Right, True, False, options);
}
__name(FromMappedResult6, "FromMappedResult");
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}
__name(ExtendsFromMappedResult, "ExtendsFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
__name(ExtendsResolve, "ExtendsResolve");
function Extends(L, R, T, F, options) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CreateType(ExtendsFromMappedKey(L, R, T, F, options)) : CreateType(ExtendsResolve(L, R, T, F), options);
}
__name(Extends, "Extends");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, Clone(options))
  };
}
__name(FromPropertyKey, "FromPropertyKey");
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
__name(FromPropertyKeys, "FromPropertyKeys");
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
__name(FromMappedKey2, "FromMappedKey");
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}
__name(ExtendsFromMappedKey, "ExtendsFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
__name(Intersect2, "Intersect");
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
__name(Union2, "Union");
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
__name(Not, "Not");
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}
__name(ExtendsUndefinedCheck, "ExtendsUndefinedCheck");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}
__name(ExcludeFromTemplateLiteral, "ExcludeFromTemplateLiteral");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
__name(ExcludeRest, "ExcludeRest");
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CreateType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExcludeFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}
__name(Exclude, "Exclude");

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties9(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
__name(FromProperties9, "FromProperties");
function FromMappedResult7(R, T) {
  return FromProperties9(R.properties, T);
}
__name(FromMappedResult7, "FromMappedResult");
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}
__name(ExcludeFromMappedResult, "ExcludeFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}
__name(ExtractFromTemplateLiteral, "ExtractFromTemplateLiteral");

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
__name(ExtractRest, "ExtractRest");
function Extract(L, R, options) {
  if (IsTemplateLiteral(L))
    return CreateType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExtractFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}
__name(Extract, "Extract");

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties10(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
__name(FromProperties10, "FromProperties");
function FromMappedResult8(R, T) {
  return FromProperties10(R.properties, T);
}
__name(FromMappedResult8, "FromMappedResult");
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}
__name(ExtractFromMappedResult, "ExtractFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function InstanceType(schema, options) {
  return IsConstructor(schema) ? CreateType(schema.returns, options) : Never(options);
}
__name(InstanceType, "InstanceType");

// node_modules/@sinclair/typebox/build/esm/type/instantiate/instantiate.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}
__name(ReadonlyOptional, "ReadonlyOptional");

// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function RecordCreateFromPattern(pattern, T, options) {
  return CreateType({ [Kind]: "Record", type: "object", patternProperties: { [pattern]: T } }, options);
}
__name(RecordCreateFromPattern, "RecordCreateFromPattern");
function RecordCreateFromKeys(K, T, options) {
  const result = {};
  for (const K2 of K)
    result[K2] = T;
  return Object2(result, { ...options, [Hint]: "Record" });
}
__name(RecordCreateFromKeys, "RecordCreateFromKeys");
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
__name(FromTemplateLiteralKey, "FromTemplateLiteralKey");
function FromUnionKey(key, type, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type, options);
}
__name(FromUnionKey, "FromUnionKey");
function FromLiteralKey(key, type, options) {
  return RecordCreateFromKeys([key.toString()], type, options);
}
__name(FromLiteralKey, "FromLiteralKey");
function FromRegExpKey(key, type, options) {
  return RecordCreateFromPattern(key.source, type, options);
}
__name(FromRegExpKey, "FromRegExpKey");
function FromStringKey(key, type, options) {
  const pattern = IsUndefined(key.pattern) ? PatternStringExact : key.pattern;
  return RecordCreateFromPattern(pattern, type, options);
}
__name(FromStringKey, "FromStringKey");
function FromAnyKey(_, type, options) {
  return RecordCreateFromPattern(PatternStringExact, type, options);
}
__name(FromAnyKey, "FromAnyKey");
function FromNeverKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNeverExact, type, options);
}
__name(FromNeverKey, "FromNeverKey");
function FromBooleanKey(_key, type, options) {
  return Object2({ true: type, false: type }, options);
}
__name(FromBooleanKey, "FromBooleanKey");
function FromIntegerKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
__name(FromIntegerKey, "FromIntegerKey");
function FromNumberKey(_, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
__name(FromNumberKey, "FromNumberKey");
function Record(key, type, options = {}) {
  return IsUnion(key) ? FromUnionKey(key.anyOf, type, options) : IsTemplateLiteral(key) ? FromTemplateLiteralKey(key, type, options) : IsLiteral(key) ? FromLiteralKey(key.const, type, options) : IsBoolean3(key) ? FromBooleanKey(key, type, options) : IsInteger2(key) ? FromIntegerKey(key, type, options) : IsNumber3(key) ? FromNumberKey(key, type, options) : IsRegExp2(key) ? FromRegExpKey(key, type, options) : IsString3(key) ? FromStringKey(key, type, options) : IsAny(key) ? FromAnyKey(key, type, options) : IsNever(key) ? FromNeverKey(key, type, options) : Never(options);
}
__name(Record, "Record");
function RecordPattern(record) {
  return globalThis.Object.getOwnPropertyNames(record.patternProperties)[0];
}
__name(RecordPattern, "RecordPattern");
function RecordKey2(type) {
  const pattern = RecordPattern(type);
  return pattern === PatternStringExact ? String2() : pattern === PatternNumberExact ? Number2() : String2({ pattern });
}
__name(RecordKey2, "RecordKey");
function RecordValue2(type) {
  return type.patternProperties[RecordPattern(type)];
}
__name(RecordValue2, "RecordValue");

// node_modules/@sinclair/typebox/build/esm/type/instantiate/instantiate.mjs
function FromConstructor2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
__name(FromConstructor2, "FromConstructor");
function FromFunction2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
__name(FromFunction2, "FromFunction");
function FromIntersect5(args, type) {
  type.allOf = FromTypes(args, type.allOf);
  return type;
}
__name(FromIntersect5, "FromIntersect");
function FromUnion7(args, type) {
  type.anyOf = FromTypes(args, type.anyOf);
  return type;
}
__name(FromUnion7, "FromUnion");
function FromTuple4(args, type) {
  if (IsUndefined(type.items))
    return type;
  type.items = FromTypes(args, type.items);
  return type;
}
__name(FromTuple4, "FromTuple");
function FromArray5(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
__name(FromArray5, "FromArray");
function FromAsyncIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
__name(FromAsyncIterator2, "FromAsyncIterator");
function FromIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
__name(FromIterator2, "FromIterator");
function FromPromise3(args, type) {
  type.item = FromType(args, type.item);
  return type;
}
__name(FromPromise3, "FromPromise");
function FromObject2(args, type) {
  const mappedProperties = FromProperties11(args, type.properties);
  return { ...type, ...Object2(mappedProperties) };
}
__name(FromObject2, "FromObject");
function FromRecord2(args, type) {
  const mappedKey = FromType(args, RecordKey2(type));
  const mappedValue = FromType(args, RecordValue2(type));
  const result = Record(mappedKey, mappedValue);
  return { ...type, ...result };
}
__name(FromRecord2, "FromRecord");
function FromArgument(args, argument) {
  return argument.index in args ? args[argument.index] : Unknown();
}
__name(FromArgument, "FromArgument");
function FromProperty2(args, type) {
  const isReadonly = IsReadonly(type);
  const isOptional2 = IsOptional(type);
  const mapped = FromType(args, type);
  return isReadonly && isOptional2 ? ReadonlyOptional(mapped) : isReadonly && !isOptional2 ? Readonly(mapped) : !isReadonly && isOptional2 ? Optional(mapped) : mapped;
}
__name(FromProperty2, "FromProperty");
function FromProperties11(args, properties) {
  return globalThis.Object.getOwnPropertyNames(properties).reduce((result, key) => {
    return { ...result, [key]: FromProperty2(args, properties[key]) };
  }, {});
}
__name(FromProperties11, "FromProperties");
function FromTypes(args, types) {
  return types.map((type) => FromType(args, type));
}
__name(FromTypes, "FromTypes");
function FromType(args, type) {
  return IsConstructor(type) ? FromConstructor2(args, type) : IsFunction3(type) ? FromFunction2(args, type) : IsIntersect(type) ? FromIntersect5(args, type) : IsUnion(type) ? FromUnion7(args, type) : IsTuple(type) ? FromTuple4(args, type) : IsArray3(type) ? FromArray5(args, type) : IsAsyncIterator3(type) ? FromAsyncIterator2(args, type) : IsIterator3(type) ? FromIterator2(args, type) : IsPromise2(type) ? FromPromise3(args, type) : IsObject3(type) ? FromObject2(args, type) : IsRecord(type) ? FromRecord2(args, type) : IsArgument(type) ? FromArgument(args, type) : type;
}
__name(FromType, "FromType");
function Instantiate(type, args) {
  return FromType(args, CloneType(type));
}
__name(Instantiate, "Instantiate");

// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Integer(options) {
  return CreateType({ [Kind]: "Integer", type: "integer" }, options);
}
__name(Integer, "Integer");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, Clone(options))
  };
}
__name(MappedIntrinsicPropertyKey, "MappedIntrinsicPropertyKey");
function MappedIntrinsicPropertyKeys(K, M, options) {
  const result = K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
  return result;
}
__name(MappedIntrinsicPropertyKeys, "MappedIntrinsicPropertyKeys");
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
__name(MappedIntrinsicProperties, "MappedIntrinsicProperties");
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}
__name(IntrinsicFromMappedKey, "IntrinsicFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
__name(ApplyUncapitalize, "ApplyUncapitalize");
function ApplyCapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
__name(ApplyCapitalize, "ApplyCapitalize");
function ApplyUppercase(value) {
  return value.toUpperCase();
}
__name(ApplyUppercase, "ApplyUppercase");
function ApplyLowercase(value) {
  return value.toLowerCase();
}
__name(ApplyLowercase, "ApplyLowercase");
function FromTemplateLiteral3(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite = IsTemplateLiteralExpressionFinite(expression);
  if (!finite)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value) => Literal(value));
  const mapped = FromRest5(literals, mode);
  const union = Union(mapped);
  return TemplateLiteral([union], options);
}
__name(FromTemplateLiteral3, "FromTemplateLiteral");
function FromLiteralValue(value, mode) {
  return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
__name(FromLiteralValue, "FromLiteralValue");
function FromRest5(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
__name(FromRest5, "FromRest");
function Intrinsic(schema, mode, options = {}) {
  return (
    // Intrinsic-Mapped-Inference
    IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : (
      // Standard-Inference
      IsTemplateLiteral(schema) ? FromTemplateLiteral3(schema, mode, options) : IsUnion(schema) ? Union(FromRest5(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : (
        // Default Type
        CreateType(schema, options)
      )
    )
  );
}
__name(Intrinsic, "Intrinsic");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}
__name(Capitalize, "Capitalize");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}
__name(Lowercase, "Lowercase");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}
__name(Uncapitalize, "Uncapitalize");

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}
__name(Uppercase, "Uppercase");

// node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromProperties12(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Omit(properties[K2], propertyKeys, Clone(options));
  return result;
}
__name(FromProperties12, "FromProperties");
function FromMappedResult9(mappedResult, propertyKeys, options) {
  return FromProperties12(mappedResult.properties, propertyKeys, options);
}
__name(FromMappedResult9, "FromMappedResult");
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult9(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}
__name(OmitFromMappedResult, "OmitFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect6(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
__name(FromIntersect6, "FromIntersect");
function FromUnion8(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
__name(FromUnion8, "FromUnion");
function FromProperty3(properties, key) {
  const { [key]: _, ...R } = properties;
  return R;
}
__name(FromProperty3, "FromProperty");
function FromProperties13(properties, propertyKeys) {
  return propertyKeys.reduce((T, K2) => FromProperty3(T, K2), properties);
}
__name(FromProperties13, "FromProperties");
function FromObject3(properties, propertyKeys) {
  const options = Discard(properties, [TransformKind, "$id", "required", "properties"]);
  const omittedProperties = FromProperties13(properties["properties"], propertyKeys);
  return Object2(omittedProperties, options);
}
__name(FromObject3, "FromObject");
function UnionFromPropertyKeys(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
__name(UnionFromPropertyKeys, "UnionFromPropertyKeys");
function OmitResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect6(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion8(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject3(properties, propertyKeys) : Object2({});
}
__name(OmitResolve, "OmitResolve");
function Omit(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? OmitFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? OmitFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type, typeKey], options) : CreateType({ ...OmitResolve(type, propertyKeys), ...options });
}
__name(Omit, "Omit");

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(type, key, options) {
  return { [key]: Omit(type, [key], Clone(options)) };
}
__name(FromPropertyKey2, "FromPropertyKey");
function FromPropertyKeys2(type, propertyKeys, options) {
  return propertyKeys.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(type, LK, options) };
  }, {});
}
__name(FromPropertyKeys2, "FromPropertyKeys");
function FromMappedKey3(type, mappedKey, options) {
  return FromPropertyKeys2(type, mappedKey.keys, options);
}
__name(FromMappedKey3, "FromMappedKey");
function OmitFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey3(type, mappedKey, options);
  return MappedResult(properties);
}
__name(OmitFromMappedKey, "OmitFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromProperties14(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Pick(properties[K2], propertyKeys, Clone(options));
  return result;
}
__name(FromProperties14, "FromProperties");
function FromMappedResult10(mappedResult, propertyKeys, options) {
  return FromProperties14(mappedResult.properties, propertyKeys, options);
}
__name(FromMappedResult10, "FromMappedResult");
function PickFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult10(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}
__name(PickFromMappedResult, "PickFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect7(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
__name(FromIntersect7, "FromIntersect");
function FromUnion9(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
__name(FromUnion9, "FromUnion");
function FromProperties15(properties, propertyKeys) {
  const result = {};
  for (const K2 of propertyKeys)
    if (K2 in properties)
      result[K2] = properties[K2];
  return result;
}
__name(FromProperties15, "FromProperties");
function FromObject4(T, K) {
  const options = Discard(T, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties15(T["properties"], K);
  return Object2(properties, options);
}
__name(FromObject4, "FromObject");
function UnionFromPropertyKeys2(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
__name(UnionFromPropertyKeys2, "UnionFromPropertyKeys");
function PickResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect7(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion9(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject4(properties, propertyKeys) : Object2({});
}
__name(PickResolve, "PickResolve");
function Pick(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys2(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? PickFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? PickFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type, typeKey], options) : CreateType({ ...PickResolve(type, propertyKeys), ...options });
}
__name(Pick, "Pick");

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(type, key, options) {
  return {
    [key]: Pick(type, [key], Clone(options))
  };
}
__name(FromPropertyKey3, "FromPropertyKey");
function FromPropertyKeys3(type, propertyKeys, options) {
  return propertyKeys.reduce((result, leftKey) => {
    return { ...result, ...FromPropertyKey3(type, leftKey, options) };
  }, {});
}
__name(FromPropertyKeys3, "FromPropertyKeys");
function FromMappedKey4(type, mappedKey, options) {
  return FromPropertyKeys3(type, mappedKey.keys, options);
}
__name(FromMappedKey4, "FromMappedKey");
function PickFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey4(type, mappedKey, options);
  return MappedResult(properties);
}
__name(PickFromMappedKey, "PickFromMappedKey");

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromComputed3(target, parameters) {
  return Computed("Partial", [Computed(target, parameters)]);
}
__name(FromComputed3, "FromComputed");
function FromRef3($ref) {
  return Computed("Partial", [Ref($ref)]);
}
__name(FromRef3, "FromRef");
function FromProperties16(properties) {
  const partialProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    partialProperties[K] = Optional(properties[K]);
  return partialProperties;
}
__name(FromProperties16, "FromProperties");
function FromObject5(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties16(type["properties"]);
  return Object2(properties, options);
}
__name(FromObject5, "FromObject");
function FromRest6(types) {
  return types.map((type) => PartialResolve(type));
}
__name(FromRest6, "FromRest");
function PartialResolve(type) {
  return (
    // Mappable
    IsComputed(type) ? FromComputed3(type.target, type.parameters) : IsRef(type) ? FromRef3(type.$ref) : IsIntersect(type) ? Intersect(FromRest6(type.allOf)) : IsUnion(type) ? Union(FromRest6(type.anyOf)) : IsObject3(type) ? FromObject5(type) : (
      // Intrinsic
      IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : (
        // Passthrough
        Object2({})
      )
    )
  );
}
__name(PartialResolve, "PartialResolve");
function Partial(type, options) {
  if (IsMappedResult(type)) {
    return PartialFromMappedResult(type, options);
  } else {
    return CreateType({ ...PartialResolve(type), ...options });
  }
}
__name(Partial, "Partial");

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties17(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], Clone(options));
  return Acc;
}
__name(FromProperties17, "FromProperties");
function FromMappedResult11(R, options) {
  return FromProperties17(R.properties, options);
}
__name(FromMappedResult11, "FromMappedResult");
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult11(R, options);
  return MappedResult(P);
}
__name(PartialFromMappedResult, "PartialFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromComputed4(target, parameters) {
  return Computed("Required", [Computed(target, parameters)]);
}
__name(FromComputed4, "FromComputed");
function FromRef4($ref) {
  return Computed("Required", [Ref($ref)]);
}
__name(FromRef4, "FromRef");
function FromProperties18(properties) {
  const requiredProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    requiredProperties[K] = Discard(properties[K], [OptionalKind]);
  return requiredProperties;
}
__name(FromProperties18, "FromProperties");
function FromObject6(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties18(type["properties"]);
  return Object2(properties, options);
}
__name(FromObject6, "FromObject");
function FromRest7(types) {
  return types.map((type) => RequiredResolve(type));
}
__name(FromRest7, "FromRest");
function RequiredResolve(type) {
  return (
    // Mappable
    IsComputed(type) ? FromComputed4(type.target, type.parameters) : IsRef(type) ? FromRef4(type.$ref) : IsIntersect(type) ? Intersect(FromRest7(type.allOf)) : IsUnion(type) ? Union(FromRest7(type.anyOf)) : IsObject3(type) ? FromObject6(type) : (
      // Intrinsic
      IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : (
        // Passthrough
        Object2({})
      )
    )
  );
}
__name(RequiredResolve, "RequiredResolve");
function Required(type, options) {
  if (IsMappedResult(type)) {
    return RequiredFromMappedResult(type, options);
  } else {
    return CreateType({ ...RequiredResolve(type), ...options });
  }
}
__name(Required, "Required");

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
__name(FromProperties19, "FromProperties");
function FromMappedResult12(R, options) {
  return FromProperties19(R.properties, options);
}
__name(FromMappedResult12, "FromMappedResult");
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}
__name(RequiredFromMappedResult, "RequiredFromMappedResult");

// node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
function DereferenceParameters(moduleProperties, types) {
  return types.map((type) => {
    return IsRef(type) ? Dereference(moduleProperties, type.$ref) : FromType2(moduleProperties, type);
  });
}
__name(DereferenceParameters, "DereferenceParameters");
function Dereference(moduleProperties, ref2) {
  return ref2 in moduleProperties ? IsRef(moduleProperties[ref2]) ? Dereference(moduleProperties, moduleProperties[ref2].$ref) : FromType2(moduleProperties, moduleProperties[ref2]) : Never();
}
__name(Dereference, "Dereference");
function FromAwaited(parameters) {
  return Awaited(parameters[0]);
}
__name(FromAwaited, "FromAwaited");
function FromIndex(parameters) {
  return Index(parameters[0], parameters[1]);
}
__name(FromIndex, "FromIndex");
function FromKeyOf(parameters) {
  return KeyOf(parameters[0]);
}
__name(FromKeyOf, "FromKeyOf");
function FromPartial(parameters) {
  return Partial(parameters[0]);
}
__name(FromPartial, "FromPartial");
function FromOmit(parameters) {
  return Omit(parameters[0], parameters[1]);
}
__name(FromOmit, "FromOmit");
function FromPick(parameters) {
  return Pick(parameters[0], parameters[1]);
}
__name(FromPick, "FromPick");
function FromRequired(parameters) {
  return Required(parameters[0]);
}
__name(FromRequired, "FromRequired");
function FromComputed5(moduleProperties, target, parameters) {
  const dereferenced = DereferenceParameters(moduleProperties, parameters);
  return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
__name(FromComputed5, "FromComputed");
function FromArray6(moduleProperties, type) {
  return Array2(FromType2(moduleProperties, type));
}
__name(FromArray6, "FromArray");
function FromAsyncIterator3(moduleProperties, type) {
  return AsyncIterator(FromType2(moduleProperties, type));
}
__name(FromAsyncIterator3, "FromAsyncIterator");
function FromConstructor3(moduleProperties, parameters, instanceType) {
  return Constructor(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, instanceType));
}
__name(FromConstructor3, "FromConstructor");
function FromFunction3(moduleProperties, parameters, returnType) {
  return Function2(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, returnType));
}
__name(FromFunction3, "FromFunction");
function FromIntersect8(moduleProperties, types) {
  return Intersect(FromTypes2(moduleProperties, types));
}
__name(FromIntersect8, "FromIntersect");
function FromIterator3(moduleProperties, type) {
  return Iterator(FromType2(moduleProperties, type));
}
__name(FromIterator3, "FromIterator");
function FromObject7(moduleProperties, properties) {
  return Object2(globalThis.Object.keys(properties).reduce((result, key) => {
    return { ...result, [key]: FromType2(moduleProperties, properties[key]) };
  }, {}));
}
__name(FromObject7, "FromObject");
function FromRecord3(moduleProperties, type) {
  const [value, pattern] = [FromType2(moduleProperties, RecordValue2(type)), RecordPattern(type)];
  const result = CloneType(type);
  result.patternProperties[pattern] = value;
  return result;
}
__name(FromRecord3, "FromRecord");
function FromTransform(moduleProperties, transform) {
  return IsRef(transform) ? { ...Dereference(moduleProperties, transform.$ref), [TransformKind]: transform[TransformKind] } : transform;
}
__name(FromTransform, "FromTransform");
function FromTuple5(moduleProperties, types) {
  return Tuple(FromTypes2(moduleProperties, types));
}
__name(FromTuple5, "FromTuple");
function FromUnion10(moduleProperties, types) {
  return Union(FromTypes2(moduleProperties, types));
}
__name(FromUnion10, "FromUnion");
function FromTypes2(moduleProperties, types) {
  return types.map((type) => FromType2(moduleProperties, type));
}
__name(FromTypes2, "FromTypes");
function FromType2(moduleProperties, type) {
  return (
    // Modifiers
    IsOptional(type) ? CreateType(FromType2(moduleProperties, Discard(type, [OptionalKind])), type) : IsReadonly(type) ? CreateType(FromType2(moduleProperties, Discard(type, [ReadonlyKind])), type) : (
      // Transform
      IsTransform(type) ? CreateType(FromTransform(moduleProperties, type), type) : (
        // Types
        IsArray3(type) ? CreateType(FromArray6(moduleProperties, type.items), type) : IsAsyncIterator3(type) ? CreateType(FromAsyncIterator3(moduleProperties, type.items), type) : IsComputed(type) ? CreateType(FromComputed5(moduleProperties, type.target, type.parameters)) : IsConstructor(type) ? CreateType(FromConstructor3(moduleProperties, type.parameters, type.returns), type) : IsFunction3(type) ? CreateType(FromFunction3(moduleProperties, type.parameters, type.returns), type) : IsIntersect(type) ? CreateType(FromIntersect8(moduleProperties, type.allOf), type) : IsIterator3(type) ? CreateType(FromIterator3(moduleProperties, type.items), type) : IsObject3(type) ? CreateType(FromObject7(moduleProperties, type.properties), type) : IsRecord(type) ? CreateType(FromRecord3(moduleProperties, type)) : IsTuple(type) ? CreateType(FromTuple5(moduleProperties, type.items || []), type) : IsUnion(type) ? CreateType(FromUnion10(moduleProperties, type.anyOf), type) : type
      )
    )
  );
}
__name(FromType2, "FromType");
function ComputeType(moduleProperties, key) {
  return key in moduleProperties ? FromType2(moduleProperties, moduleProperties[key]) : Never();
}
__name(ComputeType, "ComputeType");
function ComputeModuleProperties(moduleProperties) {
  return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
    return { ...result, [key]: ComputeType(moduleProperties, key) };
  }, {});
}
__name(ComputeModuleProperties, "ComputeModuleProperties");

// node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
var TModule = class {
  static {
    __name(this, "TModule");
  }
  constructor($defs) {
    const computed = ComputeModuleProperties($defs);
    const identified = this.WithIdentifiers(computed);
    this.$defs = identified;
  }
  /** `[Json]` Imports a Type by Key. */
  Import(key, options) {
    const $defs = { ...this.$defs, [key]: CreateType(this.$defs[key], options) };
    return CreateType({ [Kind]: "Import", $defs, $ref: key });
  }
  // prettier-ignore
  WithIdentifiers($defs) {
    return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
      return { ...result, [key]: { ...$defs[key], $id: key } };
    }, {});
  }
};
function Module(properties) {
  return new TModule(properties);
}
__name(Module, "Module");

// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Not2(type, options) {
  return CreateType({ [Kind]: "Not", not: type }, options);
}
__name(Not2, "Not");

// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Parameters(schema, options) {
  return IsFunction3(schema) ? Tuple(schema.parameters, options) : Never();
}
__name(Parameters, "Parameters");

// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = CloneType(callback({ [Kind]: "This", $ref: `${options.$id}` }));
  thisType.$id = options.$id;
  return CreateType({ [Hint]: "Recursive", ...thisType }, options);
}
__name(Recursive, "Recursive");

// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function RegExp2(unresolved, options) {
  const expr = IsString(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return CreateType({ [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags }, options);
}
__name(RegExp2, "RegExp");

// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function RestResolve(T) {
  return IsIntersect(T) ? T.allOf : IsUnion(T) ? T.anyOf : IsTuple(T) ? T.items ?? [] : [];
}
__name(RestResolve, "RestResolve");
function Rest(T) {
  return RestResolve(T);
}
__name(Rest, "Rest");

// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ReturnType(schema, options) {
  return IsFunction3(schema) ? CreateType(schema.returns, options) : Never(options);
}
__name(ReturnType, "ReturnType");

// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TransformDecodeBuilder = class {
  static {
    __name(this, "TransformDecodeBuilder");
  }
  constructor(schema) {
    this.schema = schema;
  }
  Decode(decode4) {
    return new TransformEncodeBuilder(this.schema, decode4);
  }
};
var TransformEncodeBuilder = class {
  static {
    __name(this, "TransformEncodeBuilder");
  }
  constructor(schema, decode4) {
    this.schema = schema;
    this.decode = decode4;
  }
  EncodeTransform(encode, schema) {
    const Encode2 = /* @__PURE__ */ __name((value) => schema[TransformKind].Encode(encode(value)), "Encode");
    const Decode2 = /* @__PURE__ */ __name((value) => this.decode(schema[TransformKind].Decode(value)), "Decode");
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema, [TransformKind]: Codec };
  }
  EncodeSchema(encode, schema) {
    const Codec = { Decode: this.decode, Encode: encode };
    return { ...schema, [TransformKind]: Codec };
  }
  Encode(encode) {
    return IsTransform(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
  }
};
function Transform(schema) {
  return new TransformDecodeBuilder(schema);
}
__name(Transform, "Transform");

// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Unsafe(options = {}) {
  return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}
__name(Unsafe, "Unsafe");

// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Void(options) {
  return CreateType({ [Kind]: "Void", type: "void" }, options);
}
__name(Void, "Void");

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var type_exports3 = {};
__export(type_exports3, {
  Any: () => Any,
  Argument: () => Argument,
  Array: () => Array2,
  AsyncIterator: () => AsyncIterator,
  Awaited: () => Awaited,
  BigInt: () => BigInt2,
  Boolean: () => Boolean2,
  Capitalize: () => Capitalize,
  Composite: () => Composite,
  Const: () => Const,
  Constructor: () => Constructor,
  ConstructorParameters: () => ConstructorParameters,
  Date: () => Date2,
  Enum: () => Enum,
  Exclude: () => Exclude,
  Extends: () => Extends,
  Extract: () => Extract,
  Function: () => Function2,
  Index: () => Index,
  InstanceType: () => InstanceType,
  Instantiate: () => Instantiate,
  Integer: () => Integer,
  Intersect: () => Intersect,
  Iterator: () => Iterator,
  KeyOf: () => KeyOf,
  Literal: () => Literal,
  Lowercase: () => Lowercase,
  Mapped: () => Mapped,
  Module: () => Module,
  Never: () => Never,
  Not: () => Not2,
  Null: () => Null,
  Number: () => Number2,
  Object: () => Object2,
  Omit: () => Omit,
  Optional: () => Optional,
  Parameters: () => Parameters,
  Partial: () => Partial,
  Pick: () => Pick,
  Promise: () => Promise2,
  Readonly: () => Readonly,
  ReadonlyOptional: () => ReadonlyOptional,
  Record: () => Record,
  Recursive: () => Recursive,
  Ref: () => Ref,
  RegExp: () => RegExp2,
  Required: () => Required,
  Rest: () => Rest,
  ReturnType: () => ReturnType,
  String: () => String2,
  Symbol: () => Symbol2,
  TemplateLiteral: () => TemplateLiteral,
  Transform: () => Transform,
  Tuple: () => Tuple,
  Uint8Array: () => Uint8Array2,
  Uncapitalize: () => Uncapitalize,
  Undefined: () => Undefined,
  Union: () => Union,
  Unknown: () => Unknown,
  Unsafe: () => Unsafe,
  Uppercase: () => Uppercase,
  Void: () => Void
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = type_exports3;

// node_modules/elysia/dist/index.mjs
var import_fast_decode_uri_component4 = __toESM(require_fast_decode_uri_component(), 1);

// node_modules/elysia/dist/type-system/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/type-system/utils.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function DefaultErrorFunction(error) {
  switch (error.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Expected required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
__name(DefaultErrorFunction, "DefaultErrorFunction");
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}
__name(GetErrorFunction, "GetErrorFunction");

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TypeDereferenceError = class extends TypeBoxError {
  static {
    __name(this, "TypeDereferenceError");
  }
  constructor(schema) {
    super(`Unable to dereference schema with $id '${schema.$ref}'`);
    this.schema = schema;
  }
};
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === void 0)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
__name(Resolve, "Resolve");
function Pushref(schema, references) {
  if (!IsString2(schema.$id) || references.some((target) => target.$id === schema.$id))
    return references;
  references.push(schema);
  return references;
}
__name(Pushref, "Pushref");
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}
__name(Deref, "Deref");

// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ValueHashError = class extends TypeBoxError {
  static {
    __name(this, "ValueHashError");
  }
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
};
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt(
  "18446744073709551616"
  /* 2 ^ 64 */
)];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i = 0; i < byteCount; i++) {
    yield value >> 8 * (byteCount - 1 - i) & 255;
  }
}
__name(NumberToBytes, "NumberToBytes");
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit4(item);
  }
}
__name(ArrayType2, "ArrayType");
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
__name(BooleanType, "BooleanType");
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte2 of F64Out) {
    FNV1A64(byte2);
  }
}
__name(BigIntType, "BigIntType");
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit4(value.getTime());
}
__name(DateType2, "DateType");
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
__name(NullType, "NullType");
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte2 of F64Out) {
    FNV1A64(byte2);
  }
}
__name(NumberType, "NumberType");
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit4(key);
    Visit4(value[key]);
  }
}
__name(ObjectType2, "ObjectType");
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i = 0; i < value.length; i++) {
    for (const byte2 of NumberToBytes(value.charCodeAt(i))) {
      FNV1A64(byte2);
    }
  }
}
__name(StringType, "StringType");
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit4(value.description);
}
__name(SymbolType, "SymbolType");
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0; i < value.length; i++) {
    FNV1A64(value[i]);
  }
}
__name(Uint8ArrayType2, "Uint8ArrayType");
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
__name(UndefinedType, "UndefinedType");
function Visit4(value) {
  if (IsArray2(value))
    return ArrayType2(value);
  if (IsBoolean2(value))
    return BooleanType(value);
  if (IsBigInt2(value))
    return BigIntType(value);
  if (IsDate2(value))
    return DateType2(value);
  if (IsNull2(value))
    return NullType(value);
  if (IsNumber2(value))
    return NumberType(value);
  if (IsObject2(value))
    return ObjectType2(value);
  if (IsString2(value))
    return StringType(value);
  if (IsSymbol2(value))
    return SymbolType(value);
  if (IsUint8Array2(value))
    return Uint8ArrayType2(value);
  if (IsUndefined2(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
__name(Visit4, "Visit");
function FNV1A64(byte2) {
  Accumulator = Accumulator ^ Bytes[byte2];
  Accumulator = Accumulator * Prime % Size;
}
__name(FNV1A64, "FNV1A64");
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit4(value);
  return Accumulator;
}
__name(Hash, "Hash");

// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ValueCheckUnknownTypeError = class extends TypeBoxError {
  static {
    __name(this, "ValueCheckUnknownTypeError");
  }
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
};
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
__name(IsAnyOrUnknown, "IsAnyOrUnknown");
function IsDefined(value) {
  return value !== void 0;
}
__name(IsDefined, "IsDefined");
function FromAny2(schema, references, value) {
  return true;
}
__name(FromAny2, "FromAny");
function FromArgument2(schema, references, value) {
  return true;
}
__name(FromArgument2, "FromArgument");
function FromArray7(schema, references, value) {
  if (!IsArray2(value))
    return false;
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit5(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !(function() {
    const set2 = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  })()) {
    return false;
  }
  if (!(IsDefined(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit5(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
__name(FromArray7, "FromArray");
function FromAsyncIterator4(schema, references, value) {
  return IsAsyncIterator2(value);
}
__name(FromAsyncIterator4, "FromAsyncIterator");
function FromBigInt2(schema, references, value) {
  if (!IsBigInt2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
__name(FromBigInt2, "FromBigInt");
function FromBoolean2(schema, references, value) {
  return IsBoolean2(value);
}
__name(FromBoolean2, "FromBoolean");
function FromConstructor4(schema, references, value) {
  return Visit5(schema.returns, references, value.prototype);
}
__name(FromConstructor4, "FromConstructor");
function FromDate2(schema, references, value) {
  if (!IsDate2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
__name(FromDate2, "FromDate");
function FromFunction4(schema, references, value) {
  return IsFunction2(value);
}
__name(FromFunction4, "FromFunction");
function FromImport(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit5(target, [...references, ...definitions], value);
}
__name(FromImport, "FromImport");
function FromInteger2(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
__name(FromInteger2, "FromInteger");
function FromIntersect9(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit5(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit5(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
__name(FromIntersect9, "FromIntersect");
function FromIterator4(schema, references, value) {
  return IsIterator2(value);
}
__name(FromIterator4, "FromIterator");
function FromLiteral3(schema, references, value) {
  return value === schema.const;
}
__name(FromLiteral3, "FromLiteral");
function FromNever2(schema, references, value) {
  return false;
}
__name(FromNever2, "FromNever");
function FromNot2(schema, references, value) {
  return !Visit5(schema.not, references, value);
}
__name(FromNot2, "FromNot");
function FromNull2(schema, references, value) {
  return IsNull2(value);
}
__name(FromNull2, "FromNull");
function FromNumber2(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
__name(FromNumber2, "FromNumber");
function FromObject8(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit5(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit5(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit5(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
__name(FromObject8, "FromObject");
function FromPromise4(schema, references, value) {
  return IsPromise(value);
}
__name(FromPromise4, "FromPromise");
function FromRecord4(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex2 = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex2.test(key) ? Visit5(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex2.test(key) ? Visit5(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex2.test(key);
  }) : true;
  return check1 && check2 && check3;
}
__name(FromRecord4, "FromRecord");
function FromRef5(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
__name(FromRef5, "FromRef");
function FromRegExp2(schema, references, value) {
  const regex2 = new RegExp(schema.source, schema.flags);
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex2.test(value);
}
__name(FromRegExp2, "FromRegExp");
function FromString2(schema, references, value) {
  if (!IsString2(value)) {
    return false;
  }
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined(schema.pattern)) {
    const regex2 = new RegExp(schema.pattern);
    if (!regex2.test(value))
      return false;
  }
  if (IsDefined(schema.format)) {
    if (!format_exports.Has(schema.format))
      return false;
    const func = format_exports.Get(schema.format);
    return func(value);
  }
  return true;
}
__name(FromString2, "FromString");
function FromSymbol2(schema, references, value) {
  return IsSymbol2(value);
}
__name(FromSymbol2, "FromSymbol");
function FromTemplateLiteral4(schema, references, value) {
  return IsString2(value) && new RegExp(schema.pattern).test(value);
}
__name(FromTemplateLiteral4, "FromTemplateLiteral");
function FromThis(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
__name(FromThis, "FromThis");
function FromTuple6(schema, references, value) {
  if (!IsArray2(value)) {
    return false;
  }
  if (schema.items === void 0 && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0; i < schema.items.length; i++) {
    if (!Visit5(schema.items[i], references, value[i]))
      return false;
  }
  return true;
}
__name(FromTuple6, "FromTuple");
function FromUndefined2(schema, references, value) {
  return IsUndefined2(value);
}
__name(FromUndefined2, "FromUndefined");
function FromUnion11(schema, references, value) {
  return schema.anyOf.some((inner) => Visit5(inner, references, value));
}
__name(FromUnion11, "FromUnion");
function FromUint8Array2(schema, references, value) {
  if (!IsUint8Array2(value)) {
    return false;
  }
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
__name(FromUint8Array2, "FromUint8Array");
function FromUnknown2(schema, references, value) {
  return true;
}
__name(FromUnknown2, "FromUnknown");
function FromVoid2(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
__name(FromVoid2, "FromVoid");
function FromKind(schema, references, value) {
  if (!type_exports2.Has(schema[Kind]))
    return false;
  const func = type_exports2.Get(schema[Kind]);
  return func(schema, value);
}
__name(FromKind, "FromKind");
function Visit5(schema, references, value) {
  const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny2(schema_, references_, value);
    case "Argument":
      return FromArgument2(schema_, references_, value);
    case "Array":
      return FromArray7(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_, value);
    case "BigInt":
      return FromBigInt2(schema_, references_, value);
    case "Boolean":
      return FromBoolean2(schema_, references_, value);
    case "Constructor":
      return FromConstructor4(schema_, references_, value);
    case "Date":
      return FromDate2(schema_, references_, value);
    case "Function":
      return FromFunction4(schema_, references_, value);
    case "Import":
      return FromImport(schema_, references_, value);
    case "Integer":
      return FromInteger2(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Iterator":
      return FromIterator4(schema_, references_, value);
    case "Literal":
      return FromLiteral3(schema_, references_, value);
    case "Never":
      return FromNever2(schema_, references_, value);
    case "Not":
      return FromNot2(schema_, references_, value);
    case "Null":
      return FromNull2(schema_, references_, value);
    case "Number":
      return FromNumber2(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Promise":
      return FromPromise4(schema_, references_, value);
    case "Record":
      return FromRecord4(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "RegExp":
      return FromRegExp2(schema_, references_, value);
    case "String":
      return FromString2(schema_, references_, value);
    case "Symbol":
      return FromSymbol2(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis(schema_, references_, value);
    case "Tuple":
      return FromTuple6(schema_, references_, value);
    case "Undefined":
      return FromUndefined2(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array2(schema_, references_, value);
    case "Unknown":
      return FromUnknown2(schema_, references_, value);
    case "Void":
      return FromVoid2(schema_, references_, value);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind(schema_, references_, value);
  }
}
__name(Visit5, "Visit");
function Check(...args) {
  return args.length === 3 ? Visit5(args[0], args[1], args[2]) : Visit5(args[0], [], args[1]);
}
__name(Check, "Check");

// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));
var ValueErrorsUnknownTypeError = class extends TypeBoxError {
  static {
    __name(this, "ValueErrorsUnknownTypeError");
  }
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
};
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
__name(EscapeKey, "EscapeKey");
function IsDefined2(value) {
  return value !== void 0;
}
__name(IsDefined2, "IsDefined");
var ValueErrorIterator = class {
  static {
    __name(this, "ValueErrorIterator");
  }
  constructor(iterator) {
    this.iterator = iterator;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  /** Returns the first value error or undefined if no errors */
  First() {
    const next = this.iterator.next();
    return next.done ? void 0 : next.value;
  }
};
function Create(errorType, schema, path, value, errors = []) {
  return {
    type: errorType,
    schema,
    path,
    value,
    message: GetErrorFunction()({ errorType, path, schema, value, errors }),
    errors
  };
}
__name(Create, "Create");
function* FromAny3(schema, references, path, value) {
}
__name(FromAny3, "FromAny");
function* FromArgument3(schema, references, path, value) {
}
__name(FromArgument3, "FromArgument");
function* FromArray8(schema, references, path, value) {
  if (!IsArray2(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i = 0; i < value.length; i++) {
    yield* Visit6(schema.items, references, `${path}/${i}`, value[i]);
  }
  if (schema.uniqueItems === true && !(function() {
    const set2 = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  })()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined2(schema.contains) || IsDefined2(schema.minContains) || IsDefined2(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit6(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
__name(FromArray8, "FromArray");
function* FromAsyncIterator5(schema, references, path, value) {
  if (!IsAsyncIterator2(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
__name(FromAsyncIterator5, "FromAsyncIterator");
function* FromBigInt3(schema, references, path, value) {
  if (!IsBigInt2(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
__name(FromBigInt3, "FromBigInt");
function* FromBoolean3(schema, references, path, value) {
  if (!IsBoolean2(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
__name(FromBoolean3, "FromBoolean");
function* FromConstructor5(schema, references, path, value) {
  yield* Visit6(schema.returns, references, path, value.prototype);
}
__name(FromConstructor5, "FromConstructor");
function* FromDate3(schema, references, path, value) {
  if (!IsDate2(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
__name(FromDate3, "FromDate");
function* FromFunction5(schema, references, path, value) {
  if (!IsFunction2(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
__name(FromFunction5, "FromFunction");
function* FromImport2(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  yield* Visit6(target, [...references, ...definitions], path, value);
}
__name(FromImport2, "FromImport");
function* FromInteger3(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
__name(FromInteger3, "FromInteger");
function* FromIntersect10(schema, references, path, value) {
  let hasError = false;
  for (const inner of schema.allOf) {
    for (const error of Visit6(inner, references, path, value)) {
      hasError = true;
      yield error;
    }
  }
  if (hasError) {
    return yield Create(ValueErrorType.Intersect, schema, path, value);
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit6(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
__name(FromIntersect10, "FromIntersect");
function* FromIterator5(schema, references, path, value) {
  if (!IsIterator2(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
__name(FromIterator5, "FromIterator");
function* FromLiteral4(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
__name(FromLiteral4, "FromLiteral");
function* FromNever3(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
__name(FromNever3, "FromNever");
function* FromNot3(schema, references, path, value) {
  if (Visit6(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
__name(FromNot3, "FromNot");
function* FromNull3(schema, references, path, value) {
  if (!IsNull2(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
__name(FromNull3, "FromNull");
function* FromNumber3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
__name(FromNumber3, "FromNumber");
function* FromObject9(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
__name(FromObject9, "FromObject");
function* FromPromise5(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
__name(FromPromise5, "FromPromise");
function* FromRecord5(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex2 = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex2.test(propertyKey))
      yield* Visit6(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex2.test(propertyKey))
        yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex2.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
__name(FromRecord5, "FromRecord");
function* FromRef6(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
__name(FromRef6, "FromRef");
function* FromRegExp3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex2 = new RegExp(schema.source, schema.flags);
  if (!regex2.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
__name(FromRegExp3, "FromRegExp");
function* FromString3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString2(schema.pattern)) {
    const regex2 = new RegExp(schema.pattern);
    if (!regex2.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString2(schema.format)) {
    if (!format_exports.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = format_exports.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
__name(FromString3, "FromString");
function* FromSymbol3(schema, references, path, value) {
  if (!IsSymbol2(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
__name(FromSymbol3, "FromSymbol");
function* FromTemplateLiteral5(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex2 = new RegExp(schema.pattern);
  if (!regex2.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
__name(FromTemplateLiteral5, "FromTemplateLiteral");
function* FromThis2(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
__name(FromThis2, "FromThis");
function* FromTuple7(schema, references, path, value) {
  if (!IsArray2(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === void 0 && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0; i < schema.items.length; i++) {
    yield* Visit6(schema.items[i], references, `${path}/${i}`, value[i]);
  }
}
__name(FromTuple7, "FromTuple");
function* FromUndefined3(schema, references, path, value) {
  if (!IsUndefined2(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
__name(FromUndefined3, "FromUndefined");
function* FromUnion12(schema, references, path, value) {
  if (Check(schema, references, value))
    return;
  const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit6(variant, references, path, value)));
  yield Create(ValueErrorType.Union, schema, path, value, errors);
}
__name(FromUnion12, "FromUnion");
function* FromUint8Array3(schema, references, path, value) {
  if (!IsUint8Array2(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
__name(FromUint8Array3, "FromUint8Array");
function* FromUnknown3(schema, references, path, value) {
}
__name(FromUnknown3, "FromUnknown");
function* FromVoid3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
__name(FromVoid3, "FromVoid");
function* FromKind2(schema, references, path, value) {
  const check = type_exports2.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
__name(FromKind2, "FromKind");
function* Visit6(schema, references, path, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny3(schema_, references_, path, value);
    case "Argument":
      return yield* FromArgument3(schema_, references_, path, value);
    case "Array":
      return yield* FromArray8(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator5(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt3(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean3(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor5(schema_, references_, path, value);
    case "Date":
      return yield* FromDate3(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction5(schema_, references_, path, value);
    case "Import":
      return yield* FromImport2(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger3(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect10(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator5(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral4(schema_, references_, path, value);
    case "Never":
      return yield* FromNever3(schema_, references_, path, value);
    case "Not":
      return yield* FromNot3(schema_, references_, path, value);
    case "Null":
      return yield* FromNull3(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber3(schema_, references_, path, value);
    case "Object":
      return yield* FromObject9(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise5(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord5(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef6(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp3(schema_, references_, path, value);
    case "String":
      return yield* FromString3(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol3(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral5(schema_, references_, path, value);
    case "This":
      return yield* FromThis2(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple7(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined3(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion12(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array3(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown3(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid3(schema_, references_, path, value);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind2(schema_, references_, path, value);
  }
}
__name(Visit6, "Visit");
function Errors(...args) {
  const iterator = args.length === 3 ? Visit6(args[0], args[1], "", args[2]) : Visit6(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator);
}
__name(Errors, "Errors");

// node_modules/@sinclair/typebox/build/esm/value/assert/assert.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AssertError_instances;
var _AssertError_iterator;
var _AssertError_Iterator;
var AssertError = class extends TypeBoxError {
  static {
    __name(this, "AssertError");
  }
  constructor(iterator) {
    const error = iterator.First();
    super(error === void 0 ? "Invalid Value" : error.message);
    _AssertError_instances.add(this);
    _AssertError_iterator.set(this, void 0);
    __classPrivateFieldSet(this, _AssertError_iterator, iterator, "f");
    this.error = error;
  }
  /** Returns an iterator for each error in this value. */
  Errors() {
    return new ValueErrorIterator(__classPrivateFieldGet(this, _AssertError_instances, "m", _AssertError_Iterator).call(this));
  }
};
_AssertError_iterator = /* @__PURE__ */ new WeakMap(), _AssertError_instances = /* @__PURE__ */ new WeakSet(), _AssertError_Iterator = /* @__PURE__ */ __name(function* _AssertError_Iterator2() {
  if (this.error)
    yield this.error;
  yield* __classPrivateFieldGet(this, _AssertError_iterator, "f");
}, "_AssertError_Iterator");
function AssertValue(schema, references, value) {
  if (Check(schema, references, value))
    return;
  throw new AssertError(Errors(schema, references, value));
}
__name(AssertValue, "AssertValue");
function Assert(...args) {
  return args.length === 3 ? AssertValue(args[0], args[1], args[2]) : AssertValue(args[0], [], args[1]);
}
__name(Assert, "Assert");

// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromObject10(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
__name(FromObject10, "FromObject");
function FromArray9(value) {
  return value.map((element) => Clone2(element));
}
__name(FromArray9, "FromArray");
function FromTypedArray(value) {
  return value.slice();
}
__name(FromTypedArray, "FromTypedArray");
function FromMap(value) {
  return new Map(Clone2([...value.entries()]));
}
__name(FromMap, "FromMap");
function FromSet(value) {
  return new Set(Clone2([...value.entries()]));
}
__name(FromSet, "FromSet");
function FromDate4(value) {
  return new Date(value.toISOString());
}
__name(FromDate4, "FromDate");
function FromValue2(value) {
  return value;
}
__name(FromValue2, "FromValue");
function Clone2(value) {
  if (IsArray2(value))
    return FromArray9(value);
  if (IsDate2(value))
    return FromDate4(value);
  if (IsTypedArray(value))
    return FromTypedArray(value);
  if (IsMap(value))
    return FromMap(value);
  if (IsSet(value))
    return FromSet(value);
  if (IsObject2(value))
    return FromObject10(value);
  if (IsValueType(value))
    return FromValue2(value);
  throw new Error("ValueClone: Unable to clone value");
}
__name(Clone2, "Clone");

// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
var ValueCreateError = class extends TypeBoxError {
  static {
    __name(this, "ValueCreateError");
  }
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
function FromDefault(value) {
  return IsFunction2(value) ? value() : Clone2(value);
}
__name(FromDefault, "FromDefault");
function FromAny4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
__name(FromAny4, "FromAny");
function FromArgument4(schema, references) {
  return {};
}
__name(FromArgument4, "FromArgument");
function FromArray10(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== void 0) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
__name(FromArray10, "FromArray");
function FromAsyncIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return (async function* () {
    })();
  }
}
__name(FromAsyncIterator6, "FromAsyncIterator");
function FromBigInt4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
__name(FromBigInt4, "FromBigInt");
function FromBoolean4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
__name(FromBoolean4, "FromBoolean");
function FromConstructor6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit7(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self = this;
            self[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
__name(FromConstructor6, "FromConstructor");
function FromDate5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== void 0) {
    return new Date(schema.minimumTimestamp);
  } else {
    return /* @__PURE__ */ new Date();
  }
}
__name(FromDate5, "FromDate");
function FromFunction6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
__name(FromFunction6, "FromFunction");
function FromImport3(schema, references) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit7(target, [...references, ...definitions]);
}
__name(FromImport3, "FromImport");
function FromInteger4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
__name(FromInteger4, "FromInteger");
function FromIntersect11(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
__name(FromIntersect11, "FromIntersect");
function FromIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return (function* () {
    })();
  }
}
__name(FromIterator6, "FromIterator");
function FromLiteral5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
__name(FromLiteral5, "FromLiteral");
function FromNever4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
__name(FromNever4, "FromNever");
function FromNot4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
__name(FromNot4, "FromNot");
function FromNull4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
__name(FromNull4, "FromNull");
function FromNumber4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
__name(FromNumber4, "FromNumber");
function FromObject11(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
__name(FromObject11, "FromObject");
function FromPromise6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
__name(FromPromise6, "FromPromise");
function FromRecord6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
__name(FromRecord6, "FromRecord");
function FromRef7(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
__name(FromRef7, "FromRef");
function FromRegExp4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
__name(FromRegExp4, "FromRegExp");
function FromString4(schema, references) {
  if (schema.pattern !== void 0) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== void 0) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey2(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== void 0) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
__name(FromString4, "FromString");
function FromSymbol4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
__name(FromSymbol4, "FromSymbol");
function FromTemplateLiteral6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
__name(FromTemplateLiteral6, "FromTemplateLiteral");
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
__name(FromThis3, "FromThis");
function FromTuple8(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === void 0) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
}
__name(FromTuple8, "FromTuple");
function FromUndefined4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
__name(FromUndefined4, "FromUndefined");
function FromUnion13(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
__name(FromUnion13, "FromUnion");
function FromUint8Array4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== void 0) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
__name(FromUint8Array4, "FromUint8Array");
function FromUnknown4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
__name(FromUnknown4, "FromUnknown");
function FromVoid4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
__name(FromVoid4, "FromVoid");
function FromKind3(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
__name(FromKind3, "FromKind");
function Visit7(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Argument":
      return FromArgument4(schema_, references_);
    case "Array":
      return FromArray10(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator6(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Date":
      return FromDate5(schema_, references_);
    case "Function":
      return FromFunction6(schema_, references_);
    case "Import":
      return FromImport3(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect11(schema_, references_);
    case "Iterator":
      return FromIterator6(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise6(schema_, references_);
    case "Record":
      return FromRecord6(schema_, references_);
    case "Ref":
      return FromRef7(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral6(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple8(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion13(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
__name(Visit7, "Visit");
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}
__name(Create2, "Create");

// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
var ValueCastError = class extends TypeBoxError {
  static {
    __name(this, "ValueCastError");
  }
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
function ScoreUnion(schema, references, value) {
  if (schema[Kind] === "Object" && typeof value === "object" && !IsNull2(value)) {
    const object = schema;
    const keys = Object.getOwnPropertyNames(value);
    const entries = Object.entries(object.properties);
    return entries.reduce((acc, [key, schema2]) => {
      const literal = schema2[Kind] === "Literal" && schema2.const === value[key] ? 100 : 0;
      const checks = Check(schema2, references, value[key]) ? 10 : 0;
      const exists = keys.includes(key) ? 1 : 0;
      return acc + (literal + checks + exists);
    }, 0);
  } else if (schema[Kind] === "Union") {
    const schemas = schema.anyOf.map((schema2) => Deref(schema2, references));
    const scores = schemas.map((schema2) => ScoreUnion(schema2, references, value));
    return Math.max(...scores);
  } else {
    return Check(schema, references, value) ? 1 : 0;
  }
}
__name(ScoreUnion, "ScoreUnion");
function SelectUnion(union, references, value) {
  const schemas = union.anyOf.map((schema) => Deref(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
__name(SelectUnion, "SelectUnion");
function CastUnion(union, references, value) {
  if ("default" in union) {
    return typeof value === "function" ? union.default : Clone2(union.default);
  } else {
    const schema = SelectUnion(union, references, value);
    return Cast(schema, references, value);
  }
}
__name(CastUnion, "CastUnion");
function DefaultClone(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : Create2(schema, references);
}
__name(DefaultClone, "DefaultClone");
function Default(schema, references, value) {
  return Check(schema, references, value) ? value : Create2(schema, references);
}
__name(Default, "Default");
function FromArray11(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  const created = IsArray2(value) ? Clone2(value) : Create2(schema, references);
  const minimum = IsNumber2(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber2(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value2) => Visit8(schema.items, references, value2));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
__name(FromArray11, "FromArray");
function FromConstructor7(schema, references, value) {
  if (Check(schema, references, value))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = /* @__PURE__ */ __name(function() {
  }, "result");
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value.prototype[key] === void 0)
      continue;
    result.prototype[key] = Visit8(property, references, value.prototype[key]);
  }
  return result;
}
__name(FromConstructor7, "FromConstructor");
function FromImport4(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit8(target, [...references, ...definitions], value);
}
__name(FromImport4, "FromImport");
function IntersectAssign(correct, value) {
  if (IsObject2(correct) && !IsObject2(value) || !IsObject2(correct) && IsObject2(value))
    return correct;
  if (!IsObject2(correct) || !IsObject2(value))
    return value;
  return globalThis.Object.getOwnPropertyNames(correct).reduce((result, key) => {
    const property = key in value ? IntersectAssign(correct[key], value[key]) : correct[key];
    return { ...result, [key]: property };
  }, {});
}
__name(IntersectAssign, "IntersectAssign");
function FromIntersect12(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  const correct = Create2(schema, references);
  const assigned = IntersectAssign(correct, value);
  return Check(schema, references, assigned) ? assigned : correct;
}
__name(FromIntersect12, "FromIntersect");
function FromNever5(schema, references, value) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
__name(FromNever5, "FromNever");
function FromObject12(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  if (value === null || typeof value !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value[key] === void 0)
      continue;
    result[key] = Visit8(property, references, value[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value[propertyName]);
    }
  }
  return result;
}
__name(FromObject12, "FromObject");
function FromRecord7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
}
__name(FromRecord7, "FromRecord");
function FromRef8(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
__name(FromRef8, "FromRef");
function FromThis4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
__name(FromThis4, "FromThis");
function FromTuple9(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (!IsArray2(value))
    return Create2(schema, references);
  if (schema.items === void 0)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value[index]));
}
__name(FromTuple9, "FromTuple");
function FromUnion14(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : CastUnion(schema, references, value);
}
__name(FromUnion14, "FromUnion");
function Visit8(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    // --------------------------------------------------------------
    // Structural
    // --------------------------------------------------------------
    case "Array":
      return FromArray11(schema_, references_, value);
    case "Constructor":
      return FromConstructor7(schema_, references_, value);
    case "Import":
      return FromImport4(schema_, references_, value);
    case "Intersect":
      return FromIntersect12(schema_, references_, value);
    case "Never":
      return FromNever5(schema_, references_, value);
    case "Object":
      return FromObject12(schema_, references_, value);
    case "Record":
      return FromRecord7(schema_, references_, value);
    case "Ref":
      return FromRef8(schema_, references_, value);
    case "This":
      return FromThis4(schema_, references_, value);
    case "Tuple":
      return FromTuple9(schema_, references_, value);
    case "Union":
      return FromUnion14(schema_, references_, value);
    // --------------------------------------------------------------
    // DefaultClone
    // --------------------------------------------------------------
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value);
    // --------------------------------------------------------------
    // Default
    // --------------------------------------------------------------
    default:
      return Default(schema_, references_, value);
  }
}
__name(Visit8, "Visit");
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}
__name(Cast, "Cast");

// node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function IsCheckable(schema) {
  return IsKind(schema) && schema[Kind] !== "Unsafe";
}
__name(IsCheckable, "IsCheckable");
function FromArray12(schema, references, value) {
  if (!IsArray2(value))
    return value;
  return value.map((value2) => Visit9(schema.items, references, value2));
}
__name(FromArray12, "FromArray");
function FromImport5(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit9(target, [...references, ...definitions], value);
}
__name(FromImport5, "FromImport");
function FromIntersect13(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value)));
  const composite = intersections.reduce((acc, value2) => IsObject2(value2) ? { ...acc, ...value2 } : value2, {});
  if (!IsObject2(value) || !IsObject2(composite) || !IsKind(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
__name(FromIntersect13, "FromIntersect");
function FromObject13(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (HasPropertyKey2(schema.properties, key)) {
      value[key] = Visit9(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
__name(FromObject13, "FromObject");
function FromRecord8(schema, references, value) {
  if (!IsObject2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit9(propertySchema, references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
__name(FromRecord8, "FromRecord");
function FromRef9(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
__name(FromRef9, "FromRef");
function FromThis5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
__name(FromThis5, "FromThis");
function FromTuple10(schema, references, value) {
  if (!IsArray2(value))
    return value;
  if (IsUndefined2(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i = 0; i < length; i++) {
    value[i] = Visit9(schema.items[i], references, value[i]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
__name(FromTuple10, "FromTuple");
function FromUnion15(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit9(inner, references, value);
    }
  }
  return value;
}
__name(FromUnion15, "FromUnion");
function Visit9(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, value);
    case "Import":
      return FromImport5(schema_, references_, value);
    case "Intersect":
      return FromIntersect13(schema_, references_, value);
    case "Object":
      return FromObject13(schema_, references_, value);
    case "Record":
      return FromRecord8(schema_, references_, value);
    case "Ref":
      return FromRef9(schema_, references_, value);
    case "This":
      return FromThis5(schema_, references_, value);
    case "Tuple":
      return FromTuple10(schema_, references_, value);
    case "Union":
      return FromUnion15(schema_, references_, value);
    default:
      return value;
  }
}
__name(Visit9, "Visit");
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}
__name(Clean, "Clean");

// node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function IsStringNumeric(value) {
  return IsString2(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
__name(IsStringNumeric, "IsStringNumeric");
function IsValueToString(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNumber2(value);
}
__name(IsValueToString, "IsValueToString");
function IsValueTrue(value) {
  return value === true || IsNumber2(value) && value === 1 || IsBigInt2(value) && value === BigInt("1") || IsString2(value) && (value.toLowerCase() === "true" || value === "1");
}
__name(IsValueTrue, "IsValueTrue");
function IsValueFalse(value) {
  return value === false || IsNumber2(value) && (value === 0 || Object.is(value, -0)) || IsBigInt2(value) && value === BigInt("0") || IsString2(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
}
__name(IsValueFalse, "IsValueFalse");
function IsTimeStringWithTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
__name(IsTimeStringWithTimeZone, "IsTimeStringWithTimeZone");
function IsTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
__name(IsTimeStringWithoutTimeZone, "IsTimeStringWithoutTimeZone");
function IsDateTimeStringWithTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
__name(IsDateTimeStringWithTimeZone, "IsDateTimeStringWithTimeZone");
function IsDateTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
__name(IsDateTimeStringWithoutTimeZone, "IsDateTimeStringWithoutTimeZone");
function IsDateString(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
__name(IsDateString, "IsDateString");
function TryConvertLiteralString(value, target) {
  const conversion = TryConvertString(value);
  return conversion === target ? conversion : value;
}
__name(TryConvertLiteralString, "TryConvertLiteralString");
function TryConvertLiteralNumber(value, target) {
  const conversion = TryConvertNumber(value);
  return conversion === target ? conversion : value;
}
__name(TryConvertLiteralNumber, "TryConvertLiteralNumber");
function TryConvertLiteralBoolean(value, target) {
  const conversion = TryConvertBoolean(value);
  return conversion === target ? conversion : value;
}
__name(TryConvertLiteralBoolean, "TryConvertLiteralBoolean");
function TryConvertLiteral(schema, value) {
  return IsString2(schema.const) ? TryConvertLiteralString(value, schema.const) : IsNumber2(schema.const) ? TryConvertLiteralNumber(value, schema.const) : IsBoolean2(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : value;
}
__name(TryConvertLiteral, "TryConvertLiteral");
function TryConvertBoolean(value) {
  return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
__name(TryConvertBoolean, "TryConvertBoolean");
function TryConvertBigInt(value) {
  const truncateInteger = /* @__PURE__ */ __name((value2) => value2.split(".")[0], "truncateInteger");
  return IsStringNumeric(value) ? BigInt(truncateInteger(value)) : IsNumber2(value) ? BigInt(Math.trunc(value)) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
__name(TryConvertBigInt, "TryConvertBigInt");
function TryConvertString(value) {
  return IsSymbol2(value) && value.description !== void 0 ? value.description.toString() : IsValueToString(value) ? value.toString() : value;
}
__name(TryConvertString, "TryConvertString");
function TryConvertNumber(value) {
  return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
__name(TryConvertNumber, "TryConvertNumber");
function TryConvertInteger(value) {
  return IsStringNumeric(value) ? parseInt(value) : IsNumber2(value) ? Math.trunc(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
__name(TryConvertInteger, "TryConvertInteger");
function TryConvertNull(value) {
  return IsString2(value) && value.toLowerCase() === "null" ? null : value;
}
__name(TryConvertNull, "TryConvertNull");
function TryConvertUndefined(value) {
  return IsString2(value) && value === "undefined" ? void 0 : value;
}
__name(TryConvertUndefined, "TryConvertUndefined");
function TryConvertDate(value) {
  return IsDate2(value) ? value : IsNumber2(value) ? new Date(value) : IsValueTrue(value) ? /* @__PURE__ */ new Date(1) : IsValueFalse(value) ? /* @__PURE__ */ new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`) : value;
}
__name(TryConvertDate, "TryConvertDate");
function Default2(value) {
  return value;
}
__name(Default2, "Default");
function FromArray13(schema, references, value) {
  const elements = IsArray2(value) ? value : [value];
  return elements.map((element) => Visit10(schema.items, references, element));
}
__name(FromArray13, "FromArray");
function FromBigInt5(schema, references, value) {
  return TryConvertBigInt(value);
}
__name(FromBigInt5, "FromBigInt");
function FromBoolean5(schema, references, value) {
  return TryConvertBoolean(value);
}
__name(FromBoolean5, "FromBoolean");
function FromDate6(schema, references, value) {
  return TryConvertDate(value);
}
__name(FromDate6, "FromDate");
function FromImport6(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit10(target, [...references, ...definitions], value);
}
__name(FromImport6, "FromImport");
function FromInteger5(schema, references, value) {
  return TryConvertInteger(value);
}
__name(FromInteger5, "FromInteger");
function FromIntersect14(schema, references, value) {
  return schema.allOf.reduce((value2, schema2) => Visit10(schema2, references, value2), value);
}
__name(FromIntersect14, "FromIntersect");
function FromLiteral6(schema, references, value) {
  return TryConvertLiteral(schema, value);
}
__name(FromLiteral6, "FromLiteral");
function FromNull5(schema, references, value) {
  return TryConvertNull(value);
}
__name(FromNull5, "FromNull");
function FromNumber5(schema, references, value) {
  return TryConvertNumber(value);
}
__name(FromNumber5, "FromNumber");
function FromObject14(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  for (const propertyKey of Object.getOwnPropertyNames(schema.properties)) {
    if (!HasPropertyKey2(value, propertyKey))
      continue;
    value[propertyKey] = Visit10(schema.properties[propertyKey], references, value[propertyKey]);
  }
  return value;
}
__name(FromObject14, "FromObject");
function FromRecord9(schema, references, value) {
  const isConvertable = IsObject2(value) && !IsArray2(value);
  if (!isConvertable)
    return value;
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  for (const [propKey, propValue] of Object.entries(value)) {
    value[propKey] = Visit10(property, references, propValue);
  }
  return value;
}
__name(FromRecord9, "FromRecord");
function FromRef10(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
__name(FromRef10, "FromRef");
function FromString5(schema, references, value) {
  return TryConvertString(value);
}
__name(FromString5, "FromString");
function FromSymbol5(schema, references, value) {
  return IsString2(value) || IsNumber2(value) ? Symbol(value) : value;
}
__name(FromSymbol5, "FromSymbol");
function FromThis6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
__name(FromThis6, "FromThis");
function FromTuple11(schema, references, value) {
  const isConvertable = IsArray2(value) && !IsUndefined2(schema.items);
  if (!isConvertable)
    return value;
  return value.map((value2, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value2) : value2;
  });
}
__name(FromTuple11, "FromTuple");
function FromUndefined5(schema, references, value) {
  return TryConvertUndefined(value);
}
__name(FromUndefined5, "FromUndefined");
function FromUnion16(schema, references, value) {
  for (const subschema of schema.anyOf) {
    if (Check(subschema, references, value)) {
      return value;
    }
  }
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, Clone2(value));
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value;
}
__name(FromUnion16, "FromUnion");
function Visit10(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_, value);
    case "BigInt":
      return FromBigInt5(schema_, references_, value);
    case "Boolean":
      return FromBoolean5(schema_, references_, value);
    case "Date":
      return FromDate6(schema_, references_, value);
    case "Import":
      return FromImport6(schema_, references_, value);
    case "Integer":
      return FromInteger5(schema_, references_, value);
    case "Intersect":
      return FromIntersect14(schema_, references_, value);
    case "Literal":
      return FromLiteral6(schema_, references_, value);
    case "Null":
      return FromNull5(schema_, references_, value);
    case "Number":
      return FromNumber5(schema_, references_, value);
    case "Object":
      return FromObject14(schema_, references_, value);
    case "Record":
      return FromRecord9(schema_, references_, value);
    case "Ref":
      return FromRef10(schema_, references_, value);
    case "String":
      return FromString5(schema_, references_, value);
    case "Symbol":
      return FromSymbol5(schema_, references_, value);
    case "This":
      return FromThis6(schema_, references_, value);
    case "Tuple":
      return FromTuple11(schema_, references_, value);
    case "Undefined":
      return FromUndefined5(schema_, references_, value);
    case "Union":
      return FromUnion16(schema_, references_, value);
    default:
      return Default2(value);
  }
}
__name(Visit10, "Visit");
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}
__name(Convert, "Convert");

// node_modules/@sinclair/typebox/build/esm/value/decode/decode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TransformDecodeCheckError = class extends TypeBoxError {
  static {
    __name(this, "TransformDecodeCheckError");
  }
  constructor(schema, value, error) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
};
var TransformDecodeError = class extends TypeBoxError {
  static {
    __name(this, "TransformDecodeError");
  }
  constructor(schema, path, value, error) {
    super(error instanceof Error ? error.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
};
function Default3(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error) {
    throw new TransformDecodeError(schema, path, value, error);
  }
}
__name(Default3, "Default");
function FromArray14(schema, references, path, value) {
  return IsArray2(value) ? Default3(schema, path, value.map((value2, index) => Visit11(schema.items, references, `${path}/${index}`, value2))) : Default3(schema, path, value);
}
__name(FromArray14, "FromArray");
function FromIntersect15(schema, references, path, value) {
  if (!IsObject2(value) || IsValueType(value))
    return Default3(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit11(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
__name(FromIntersect15, "FromIntersect");
function FromImport7(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Visit11(target, [...references, ...additional], path, value);
  return Default3(schema, path, result);
}
__name(FromImport7, "FromImport");
function FromNot5(schema, references, path, value) {
  return Default3(schema, path, Visit11(schema.not, references, path, value));
}
__name(FromNot5, "FromNot");
function FromObject15(schema, references, path, value) {
  if (!IsObject2(value))
    return Default3(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit11(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
__name(FromObject15, "FromObject");
function FromRecord10(schema, references, path, value) {
  if (!IsObject2(value))
    return Default3(schema, path, value);
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit11(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
__name(FromRecord10, "FromRecord");
function FromRef11(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default3(schema, path, Visit11(target, references, path, value));
}
__name(FromRef11, "FromRef");
function FromThis7(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default3(schema, path, Visit11(target, references, path, value));
}
__name(FromThis7, "FromThis");
function FromTuple12(schema, references, path, value) {
  return IsArray2(value) && IsArray2(schema.items) ? Default3(schema, path, schema.items.map((schema2, index) => Visit11(schema2, references, `${path}/${index}`, value[index]))) : Default3(schema, path, value);
}
__name(FromTuple12, "FromTuple");
function FromUnion17(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit11(subschema, references, path, value);
    return Default3(schema, path, decoded);
  }
  return Default3(schema, path, value);
}
__name(FromUnion17, "FromUnion");
function Visit11(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray14(schema_, references_, path, value);
    case "Import":
      return FromImport7(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect15(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject15(schema_, references_, path, value);
    case "Record":
      return FromRecord10(schema_, references_, path, value);
    case "Ref":
      return FromRef11(schema_, references_, path, value);
    case "Symbol":
      return Default3(schema_, path, value);
    case "This":
      return FromThis7(schema_, references_, path, value);
    case "Tuple":
      return FromTuple12(schema_, references_, path, value);
    case "Union":
      return FromUnion17(schema_, references_, path, value);
    default:
      return Default3(schema_, path, value);
  }
}
__name(Visit11, "Visit");
function TransformDecode(schema, references, value) {
  return Visit11(schema, references, "", value);
}
__name(TransformDecode, "TransformDecode");

// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TransformEncodeCheckError = class extends TypeBoxError {
  static {
    __name(this, "TransformEncodeCheckError");
  }
  constructor(schema, value, error) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
};
var TransformEncodeError = class extends TypeBoxError {
  static {
    __name(this, "TransformEncodeError");
  }
  constructor(schema, path, value, error) {
    super(`${error instanceof Error ? error.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
};
function Default4(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error) {
    throw new TransformEncodeError(schema, path, value, error);
  }
}
__name(Default4, "Default");
function FromArray15(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  return IsArray2(defaulted) ? defaulted.map((value2, index) => Visit12(schema.items, references, `${path}/${index}`, value2)) : defaulted;
}
__name(FromArray15, "FromArray");
function FromImport8(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Default4(schema, path, value);
  return Visit12(target, [...references, ...additional], path, result);
}
__name(FromImport8, "FromImport");
function FromIntersect16(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject2(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit12(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
__name(FromIntersect16, "FromIntersect");
function FromNot6(schema, references, path, value) {
  return Default4(schema.not, path, Default4(schema, path, value));
}
__name(FromNot6, "FromNot");
function FromObject16(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit12(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
__name(FromObject16, "FromObject");
function FromRecord11(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject2(value))
    return defaulted;
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit12(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default4(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
__name(FromRecord11, "FromRecord");
function FromRef12(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path, value);
  return Default4(schema, path, resolved);
}
__name(FromRef12, "FromRef");
function FromThis8(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path, value);
  return Default4(schema, path, resolved);
}
__name(FromThis8, "FromThis");
function FromTuple13(schema, references, path, value) {
  const value1 = Default4(schema, path, value);
  return IsArray2(schema.items) ? schema.items.map((schema2, index) => Visit12(schema2, references, `${path}/${index}`, value1[index])) : [];
}
__name(FromTuple13, "FromTuple");
function FromUnion18(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit12(subschema, references, path, value);
    return Default4(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit12(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default4(schema, path, value1);
  }
  return Default4(schema, path, value);
}
__name(FromUnion18, "FromUnion");
function Visit12(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray15(schema_, references_, path, value);
    case "Import":
      return FromImport8(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect16(schema_, references_, path, value);
    case "Not":
      return FromNot6(schema_, references_, path, value);
    case "Object":
      return FromObject16(schema_, references_, path, value);
    case "Record":
      return FromRecord11(schema_, references_, path, value);
    case "Ref":
      return FromRef12(schema_, references_, path, value);
    case "This":
      return FromThis8(schema_, references_, path, value);
    case "Tuple":
      return FromTuple13(schema_, references_, path, value);
    case "Union":
      return FromUnion18(schema_, references_, path, value);
    default:
      return Default4(schema_, path, value);
  }
}
__name(Visit12, "Visit");
function TransformEncode(schema, references, value) {
  return Visit12(schema, references, "", value);
}
__name(TransformEncode, "TransformEncode");

// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function FromArray16(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
__name(FromArray16, "FromArray");
function FromAsyncIterator7(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
__name(FromAsyncIterator7, "FromAsyncIterator");
function FromConstructor8(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
__name(FromConstructor8, "FromConstructor");
function FromFunction7(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
__name(FromFunction7, "FromFunction");
function FromIntersect17(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit13(schema2, references));
}
__name(FromIntersect17, "FromIntersect");
function FromImport9(schema, references) {
  const additional = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => [...result, schema.$defs[key]], []);
  const target = schema.$defs[schema.$ref];
  return IsTransform(schema) || Visit13(target, [...additional, ...references]);
}
__name(FromImport9, "FromImport");
function FromIterator7(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
__name(FromIterator7, "FromIterator");
function FromNot7(schema, references) {
  return IsTransform(schema) || Visit13(schema.not, references);
}
__name(FromNot7, "FromNot");
function FromObject17(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema2) => Visit13(schema2, references)) || IsSchema(schema.additionalProperties) && Visit13(schema.additionalProperties, references);
}
__name(FromObject17, "FromObject");
function FromPromise7(schema, references) {
  return IsTransform(schema) || Visit13(schema.item, references);
}
__name(FromPromise7, "FromPromise");
function FromRecord12(schema, references) {
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern];
  return IsTransform(schema) || Visit13(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
}
__name(FromRecord12, "FromRecord");
function FromRef13(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
__name(FromRef13, "FromRef");
function FromThis9(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
__name(FromThis9, "FromThis");
function FromTuple14(schema, references) {
  return IsTransform(schema) || !IsUndefined2(schema.items) && schema.items.some((schema2) => Visit13(schema2, references));
}
__name(FromTuple14, "FromTuple");
function FromUnion19(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema2) => Visit13(schema2, references));
}
__name(FromUnion19, "FromUnion");
function Visit13(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray16(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator7(schema_, references_);
    case "Constructor":
      return FromConstructor8(schema_, references_);
    case "Function":
      return FromFunction7(schema_, references_);
    case "Import":
      return FromImport9(schema_, references_);
    case "Intersect":
      return FromIntersect17(schema_, references_);
    case "Iterator":
      return FromIterator7(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject17(schema_, references_);
    case "Promise":
      return FromPromise7(schema_, references_);
    case "Record":
      return FromRecord12(schema_, references_);
    case "Ref":
      return FromRef13(schema_, references_);
    case "This":
      return FromThis9(schema_, references_);
    case "Tuple":
      return FromTuple14(schema_, references_);
    case "Union":
      return FromUnion19(schema_, references_);
    default:
      return IsTransform(schema);
  }
}
__name(Visit13, "Visit");
var visited = /* @__PURE__ */ new Set();
function HasTransform(schema, references) {
  visited.clear();
  return Visit13(schema, references);
}
__name(HasTransform, "HasTransform");

// node_modules/@sinclair/typebox/build/esm/value/decode/decode.mjs
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}
__name(Decode, "Decode");

// node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ValueOrDefault(schema, value) {
  const defaultValue = HasPropertyKey2(schema, "default") ? schema.default : void 0;
  const clone = IsFunction2(defaultValue) ? defaultValue() : Clone2(defaultValue);
  return IsUndefined2(value) ? clone : IsObject2(value) && IsObject2(clone) ? Object.assign(clone, value) : value;
}
__name(ValueOrDefault, "ValueOrDefault");
function HasDefaultProperty(schema) {
  return IsKind(schema) && "default" in schema;
}
__name(HasDefaultProperty, "HasDefaultProperty");
function FromArray17(schema, references, value) {
  if (IsArray2(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = Visit14(schema.items, references, value[i]);
    }
    return value;
  }
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted))
    return defaulted;
  for (let i = 0; i < defaulted.length; i++) {
    defaulted[i] = Visit14(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
__name(FromArray17, "FromArray");
function FromDate7(schema, references, value) {
  return IsDate2(value) ? value : ValueOrDefault(schema, value);
}
__name(FromDate7, "FromDate");
function FromImport10(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit14(target, [...references, ...definitions], value);
}
__name(FromImport10, "FromImport");
function FromIntersect18(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit14(schema2, references, defaulted);
    return IsObject2(next) ? { ...acc, ...next } : next;
  }, {});
}
__name(FromIntersect18, "FromIntersect");
function FromObject18(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    const propertyValue = Visit14(schema.properties[key], references, defaulted[key]);
    if (IsUndefined2(propertyValue))
      continue;
    defaulted[key] = Visit14(schema.properties[key], references, defaulted[key]);
  }
  if (!HasDefaultProperty(schema.additionalProperties))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit14(schema.additionalProperties, references, defaulted[key]);
  }
  return defaulted;
}
__name(FromObject18, "FromObject");
function FromRecord13(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && HasDefaultProperty(propertySchema)))
      continue;
    defaulted[key] = Visit14(propertySchema, references, defaulted[key]);
  }
  if (!HasDefaultProperty(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit14(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
__name(FromRecord13, "FromRecord");
function FromRef14(schema, references, value) {
  return Visit14(Deref(schema, references), references, ValueOrDefault(schema, value));
}
__name(FromRef14, "FromRef");
function FromThis10(schema, references, value) {
  return Visit14(Deref(schema, references), references, value);
}
__name(FromThis10, "FromThis");
function FromTuple15(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted) || IsUndefined2(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0; i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit14(items[i], references, defaulted[i]);
  }
  return defaulted;
}
__name(FromTuple15, "FromTuple");
function FromUnion20(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit14(inner, references, Clone2(defaulted));
    if (Check(inner, references, result)) {
      return result;
    }
  }
  return defaulted;
}
__name(FromUnion20, "FromUnion");
function Visit14(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray17(schema_, references_, value);
    case "Date":
      return FromDate7(schema_, references_, value);
    case "Import":
      return FromImport10(schema_, references_, value);
    case "Intersect":
      return FromIntersect18(schema_, references_, value);
    case "Object":
      return FromObject18(schema_, references_, value);
    case "Record":
      return FromRecord13(schema_, references_, value);
    case "Ref":
      return FromRef14(schema_, references_, value);
    case "This":
      return FromThis10(schema_, references_, value);
    case "Tuple":
      return FromTuple15(schema_, references_, value);
    case "Union":
      return FromUnion20(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
__name(Visit14, "Visit");
function Default5(...args) {
  return args.length === 3 ? Visit14(args[0], args[1], args[2]) : Visit14(args[0], [], args[1]);
}
__name(Default5, "Default");

// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/pointer/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var pointer_exports = {};
__export(pointer_exports, {
  Delete: () => Delete3,
  Format: () => Format,
  Get: () => Get3,
  Has: () => Has3,
  Set: () => Set4,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  ValuePointerRootSetError: () => ValuePointerRootSetError
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ValuePointerRootSetError = class extends TypeBoxError {
  static {
    __name(this, "ValuePointerRootSetError");
  }
  constructor(value, path, update) {
    super("Cannot set root value");
    this.value = value;
    this.path = path;
    this.update = update;
  }
};
var ValuePointerRootDeleteError = class extends TypeBoxError {
  static {
    __name(this, "ValuePointerRootDeleteError");
  }
  constructor(value, path) {
    super("Cannot delete root value");
    this.value = value;
    this.path = path;
  }
};
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
__name(Escape2, "Escape");
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0; i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
__name(Format, "Format");
function Set4(value, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value, pointer, update);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
__name(Set4, "Set");
function Delete3(value, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value, pointer);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0 || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
__name(Delete3, "Delete");
function Has3(value, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
__name(Has3, "Has");
function Get3(value, pointer) {
  if (pointer === "")
    return value;
  let current = value;
  for (const component of Format(pointer)) {
    if (current[component] === void 0)
      return void 0;
    current = current[component];
  }
  return current;
}
__name(Get3, "Get");

// node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function ObjectType3(left, right) {
  if (!IsObject2(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
__name(ObjectType3, "ObjectType");
function DateType3(left, right) {
  return IsDate2(right) && left.getTime() === right.getTime();
}
__name(DateType3, "DateType");
function ArrayType3(left, right) {
  if (!IsArray2(right) || left.length !== right.length)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
__name(ArrayType3, "ArrayType");
function TypedArrayType(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
__name(TypedArrayType, "TypedArrayType");
function ValueType(left, right) {
  return left === right;
}
__name(ValueType, "ValueType");
function Equal(left, right) {
  if (IsDate2(left))
    return DateType3(left, right);
  if (IsTypedArray(left))
    return TypedArrayType(left, right);
  if (IsArray2(left))
    return ArrayType3(left, right);
  if (IsObject2(left))
    return ObjectType3(left, right);
  if (IsValueType(left))
    return ValueType(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}
__name(Equal, "Equal");

// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);
var ValueDiffError = class extends TypeBoxError {
  static {
    __name(this, "ValueDiffError");
  }
  constructor(value, message) {
    super(message);
    this.value = value;
  }
};
function CreateUpdate(path, value) {
  return { type: "update", path, value };
}
__name(CreateUpdate, "CreateUpdate");
function CreateInsert(path, value) {
  return { type: "insert", path, value };
}
__name(CreateInsert, "CreateInsert");
function CreateDelete(path) {
  return { type: "delete", path };
}
__name(CreateDelete, "CreateDelete");
function AssertDiffable(value) {
  if (globalThis.Object.getOwnPropertySymbols(value).length > 0)
    throw new ValueDiffError(value, "Cannot diff objects with symbols");
}
__name(AssertDiffable, "AssertDiffable");
function* ObjectType4(path, current, next) {
  AssertDiffable(current);
  AssertDiffable(next);
  if (!IsStandardObject(next))
    return yield CreateUpdate(path, next);
  const currentKeys = globalThis.Object.getOwnPropertyNames(current);
  const nextKeys = globalThis.Object.getOwnPropertyNames(next);
  for (const key of nextKeys) {
    if (HasPropertyKey2(current, key))
      continue;
    yield CreateInsert(`${path}/${key}`, next[key]);
  }
  for (const key of currentKeys) {
    if (!HasPropertyKey2(next, key))
      continue;
    if (Equal(current, next))
      continue;
    yield* Visit15(`${path}/${key}`, current[key], next[key]);
  }
  for (const key of currentKeys) {
    if (HasPropertyKey2(next, key))
      continue;
    yield CreateDelete(`${path}/${key}`);
  }
}
__name(ObjectType4, "ObjectType");
function* ArrayType4(path, current, next) {
  if (!IsArray2(next))
    return yield CreateUpdate(path, next);
  for (let i = 0; i < Math.min(current.length, next.length); i++) {
    yield* Visit15(`${path}/${i}`, current[i], next[i]);
  }
  for (let i = 0; i < next.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path}/${i}`, next[i]);
  }
  for (let i = current.length - 1; i >= 0; i--) {
    if (i < next.length)
      continue;
    yield CreateDelete(`${path}/${i}`);
  }
}
__name(ArrayType4, "ArrayType");
function* TypedArrayType2(path, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path, next);
  for (let i = 0; i < Math.min(current.length, next.length); i++) {
    yield* Visit15(`${path}/${i}`, current[i], next[i]);
  }
}
__name(TypedArrayType2, "TypedArrayType");
function* ValueType2(path, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path, next);
}
__name(ValueType2, "ValueType");
function* Visit15(path, current, next) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path, current, next);
  if (IsArray2(current))
    return yield* ArrayType4(path, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next);
  throw new ValueDiffError(current, "Unable to diff value");
}
__name(Visit15, "Visit");
function Diff(current, next) {
  return [...Visit15("", current, next)];
}
__name(Diff, "Diff");
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
__name(IsRootUpdate, "IsRootUpdate");
function IsIdentity(edits) {
  return edits.length === 0;
}
__name(IsIdentity, "IsIdentity");
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "update": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "delete": {
        pointer_exports.Delete(clone, edit.path);
        break;
      }
    }
  }
  return clone;
}
__name(Patch, "Patch");

// node_modules/@sinclair/typebox/build/esm/value/encode/encode.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors(schema, references, encoded).First());
  return encoded;
}
__name(Encode, "Encode");

// node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function IsStandardObject2(value) {
  return IsObject2(value) && !IsArray2(value);
}
__name(IsStandardObject2, "IsStandardObject");
var ValueMutateError = class extends TypeBoxError {
  static {
    __name(this, "ValueMutateError");
  }
  constructor(message) {
    super(message);
  }
};
function ObjectType5(root, path, current, next) {
  if (!IsStandardObject2(current)) {
    pointer_exports.Set(root, path, Clone2(next));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit16(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
}
__name(ObjectType5, "ObjectType");
function ArrayType5(root, path, current, next) {
  if (!IsArray2(current)) {
    pointer_exports.Set(root, path, Clone2(next));
  } else {
    for (let index = 0; index < next.length; index++) {
      Visit16(root, `${path}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
}
__name(ArrayType5, "ArrayType");
function TypedArrayType3(root, path, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i = 0; i < current.length; i++) {
      current[i] = next[i];
    }
  } else {
    pointer_exports.Set(root, path, Clone2(next));
  }
}
__name(TypedArrayType3, "TypedArrayType");
function ValueType3(root, path, current, next) {
  if (current === next)
    return;
  pointer_exports.Set(root, path, next);
}
__name(ValueType3, "ValueType");
function Visit16(root, path, current, next) {
  if (IsArray2(next))
    return ArrayType5(root, path, current, next);
  if (IsTypedArray(next))
    return TypedArrayType3(root, path, current, next);
  if (IsStandardObject2(next))
    return ObjectType5(root, path, current, next);
  if (IsValueType(next))
    return ValueType3(root, path, current, next);
}
__name(Visit16, "Visit");
function IsNonMutableValue(value) {
  return IsTypedArray(value) || IsValueType(value);
}
__name(IsNonMutableValue, "IsNonMutableValue");
function IsMismatchedValue(current, next) {
  return IsStandardObject2(current) && IsArray2(next) || IsArray2(current) && IsStandardObject2(next);
}
__name(IsMismatchedValue, "IsMismatchedValue");
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit16(current, "", current, next);
}
__name(Mutate, "Mutate");

// node_modules/@sinclair/typebox/build/esm/value/parse/parse.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ParseError = class extends TypeBoxError {
  static {
    __name(this, "ParseError");
  }
  constructor(message) {
    super(message);
  }
};
var ParseRegistry;
(function(ParseRegistry2) {
  const registry = /* @__PURE__ */ new Map([
    ["Assert", (type, references, value) => {
      Assert(type, references, value);
      return value;
    }],
    ["Cast", (type, references, value) => Cast(type, references, value)],
    ["Clean", (type, references, value) => Clean(type, references, value)],
    ["Clone", (_type, _references, value) => Clone2(value)],
    ["Convert", (type, references, value) => Convert(type, references, value)],
    ["Decode", (type, references, value) => HasTransform(type, references) ? TransformDecode(type, references, value) : value],
    ["Default", (type, references, value) => Default5(type, references, value)],
    ["Encode", (type, references, value) => HasTransform(type, references) ? TransformEncode(type, references, value) : value]
  ]);
  function Delete5(key) {
    registry.delete(key);
  }
  __name(Delete5, "Delete");
  ParseRegistry2.Delete = Delete5;
  function Set5(key, callback) {
    registry.set(key, callback);
  }
  __name(Set5, "Set");
  ParseRegistry2.Set = Set5;
  function Get4(key) {
    return registry.get(key);
  }
  __name(Get4, "Get");
  ParseRegistry2.Get = Get4;
})(ParseRegistry || (ParseRegistry = {}));
var ParseDefault = [
  "Clone",
  "Clean",
  "Default",
  "Convert",
  "Assert",
  "Decode"
];
function ParseValue(operations, type, references, value) {
  return operations.reduce((value2, operationKey) => {
    const operation = ParseRegistry.Get(operationKey);
    if (IsUndefined2(operation))
      throw new ParseError(`Unable to find Parse operation '${operationKey}'`);
    return operation(type, references, value2);
  }, value);
}
__name(ParseValue, "ParseValue");
function Parse(...args) {
  const [operations, schema, references, value] = args.length === 4 ? [args[0], args[1], args[2], args[3]] : args.length === 3 ? IsArray2(args[0]) ? [args[0], args[1], [], args[2]] : [ParseDefault, args[0], args[1], args[2]] : args.length === 2 ? [ParseDefault, args[0], [], args[1]] : (() => {
    throw new ParseError("Invalid Arguments");
  })();
  return ParseValue(operations, schema, references, value);
}
__name(Parse, "Parse");

// node_modules/@sinclair/typebox/build/esm/value/value/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var value_exports2 = {};
__export(value_exports2, {
  Assert: () => Assert,
  Cast: () => Cast,
  Check: () => Check,
  Clean: () => Clean,
  Clone: () => Clone2,
  Convert: () => Convert,
  Create: () => Create2,
  Decode: () => Decode,
  Default: () => Default5,
  Diff: () => Diff,
  Edit: () => Edit,
  Encode: () => Encode,
  Equal: () => Equal,
  Errors: () => Errors,
  Hash: () => Hash,
  Mutate: () => Mutate,
  Parse: () => Parse,
  Patch: () => Patch,
  ValueErrorIterator: () => ValueErrorIterator
});
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var TypeCheck = class {
  static {
    __name(this, "TypeCheck");
  }
  constructor(schema, references, checkFunc, code) {
    this.schema = schema;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema, references);
  }
  /** Returns the generated assertion code used to validate this type. */
  Code() {
    return this.code;
  }
  /** Returns the schema type used to validate */
  Schema() {
    return this.schema;
  }
  /** Returns reference types used to validate */
  References() {
    return this.references;
  }
  /** Returns an iterator for each error in this value. */
  Errors(value) {
    return Errors(this.schema, this.references, value);
  }
  /** Returns true if the value matches the compiled type. */
  Check(value) {
    return this.checkFunc(value);
  }
  /** Decodes a value or throws if error */
  Decode(value) {
    if (!this.checkFunc(value))
      throw new TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value) : value;
  }
  /** Encodes a value or throws if error */
  Encode(value) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value) : value;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
    return encoded;
  }
};
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  __name(DollarSign, "DollarSign");
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  __name(IsUnderscore, "IsUnderscore");
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  __name(IsAlpha, "IsAlpha");
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  __name(IsNumeric, "IsNumeric");
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value) {
    if (value.length === 0)
      return false;
    return Character.IsNumeric(value.charCodeAt(0));
  }
  __name(IsFirstCharacterNumeric, "IsFirstCharacterNumeric");
  function IsAccessor(value) {
    if (IsFirstCharacterNumeric(value))
      return false;
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      const check = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check)
        return false;
    }
    return true;
  }
  __name(IsAccessor, "IsAccessor");
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  __name(EscapeHyphen, "EscapeHyphen");
  function Encode2(object, key) {
    return IsAccessor(key) ? `${object}.${key}` : `${object}['${EscapeHyphen(key)}']`;
  }
  __name(Encode2, "Encode");
  MemberExpression2.Encode = Encode2;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode2($id) {
    const buffer = [];
    for (let i = 0; i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  __name(Encode2, "Encode");
  Identifier2.Encode = Encode2;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape3(content) {
    return content.replace(/'/g, "\\'");
  }
  __name(Escape3, "Escape");
  LiteralString2.Escape = Escape3;
})(LiteralString || (LiteralString = {}));
var TypeCompilerUnknownTypeError = class extends TypeBoxError {
  static {
    __name(this, "TypeCompilerUnknownTypeError");
  }
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
};
var TypeCompilerTypeGuardError = class extends TypeBoxError {
  static {
    __name(this, "TypeCompilerTypeGuardError");
  }
  constructor(schema) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema;
  }
};
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value} ? ${expression} : true)` : `(${MemberExpression.Encode(value, key)} !== undefined ? ${expression} : true)`;
  }
  __name(IsExactOptionalProperty, "IsExactOptionalProperty");
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
  }
  __name(IsObjectLike, "IsObjectLike");
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
  }
  __name(IsRecordLike, "IsRecordLike");
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value} === 'number'` : `Number.isFinite(${value})`;
  }
  __name(IsNumberLike, "IsNumberLike");
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
  }
  __name(IsVoidLike, "IsVoidLike");
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema) {
    return schema[Kind] === "Any" || schema[Kind] === "Unknown";
  }
  __name(IsAnyOrUnknown2, "IsAnyOrUnknown");
  function* FromAny5(schema, references, value) {
    yield "true";
  }
  __name(FromAny5, "FromAny");
  function* FromArgument5(schema, references, value) {
    yield "true";
  }
  __name(FromArgument5, "FromArgument");
  function* FromArray18(schema, references, value) {
    yield `Array.isArray(${value})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber2(schema.maxItems))
      yield `${value}.length <= ${schema.maxItems}`;
    if (IsNumber2(schema.minItems))
      yield `${value}.length >= ${schema.minItems}`;
    const elementExpression = CreateExpression(schema.items, references, "value");
    yield `${value}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema2(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains)) {
      const containsSchema = IsSchema2(schema.contains) ? schema.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber2(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
      const checkMaxContains = IsNumber2(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check}})(${value})`;
    }
    if (schema.uniqueItems === true) {
      const check = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check} }`;
      yield `((${parameter}) => { ${block} )(${value})`;
    }
  }
  __name(FromArray18, "FromArray");
  function* FromAsyncIterator8(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
  }
  __name(FromAsyncIterator8, "FromAsyncIterator");
  function* FromBigInt6(schema, references, value) {
    yield `(typeof ${value} === 'bigint')`;
    if (IsBigInt2(schema.exclusiveMaximum))
      yield `${value} < BigInt(${schema.exclusiveMaximum})`;
    if (IsBigInt2(schema.exclusiveMinimum))
      yield `${value} > BigInt(${schema.exclusiveMinimum})`;
    if (IsBigInt2(schema.maximum))
      yield `${value} <= BigInt(${schema.maximum})`;
    if (IsBigInt2(schema.minimum))
      yield `${value} >= BigInt(${schema.minimum})`;
    if (IsBigInt2(schema.multipleOf))
      yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
  }
  __name(FromBigInt6, "FromBigInt");
  function* FromBoolean6(schema, references, value) {
    yield `(typeof ${value} === 'boolean')`;
  }
  __name(FromBoolean6, "FromBoolean");
  function* FromConstructor9(schema, references, value) {
    yield* Visit17(schema.returns, references, `${value}.prototype`);
  }
  __name(FromConstructor9, "FromConstructor");
  function* FromDate8(schema, references, value) {
    yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
    if (IsNumber2(schema.exclusiveMaximumTimestamp))
      yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
    if (IsNumber2(schema.exclusiveMinimumTimestamp))
      yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
    if (IsNumber2(schema.maximumTimestamp))
      yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
    if (IsNumber2(schema.minimumTimestamp))
      yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
    if (IsNumber2(schema.multipleOfTimestamp))
      yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
  }
  __name(FromDate8, "FromDate");
  function* FromFunction8(schema, references, value) {
    yield `(typeof ${value} === 'function')`;
  }
  __name(FromFunction8, "FromFunction");
  function* FromImport11(schema, references, value) {
    const members = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => {
      return [...result, schema.$defs[key]];
    }, []);
    yield* Visit17(Ref(schema.$ref), [...references, ...members], value);
  }
  __name(FromImport11, "FromImport");
  function* FromInteger6(schema, references, value) {
    yield `Number.isInteger(${value})`;
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  __name(FromInteger6, "FromInteger");
  function* FromIntersect19(schema, references, value) {
    const check1 = schema.allOf.map((schema2) => CreateExpression(schema2, references, value)).join(" && ");
    if (schema.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check2})`;
    } else if (IsSchema2(schema.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
      yield `(${check1} && ${check2})`;
    } else {
      yield `(${check1})`;
    }
  }
  __name(FromIntersect19, "FromIntersect");
  function* FromIterator8(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
  }
  __name(FromIterator8, "FromIterator");
  function* FromLiteral7(schema, references, value) {
    if (typeof schema.const === "number" || typeof schema.const === "boolean") {
      yield `(${value} === ${schema.const})`;
    } else {
      yield `(${value} === '${LiteralString.Escape(schema.const)}')`;
    }
  }
  __name(FromLiteral7, "FromLiteral");
  function* FromNever6(schema, references, value) {
    yield `false`;
  }
  __name(FromNever6, "FromNever");
  function* FromNot8(schema, references, value) {
    const expression = CreateExpression(schema.not, references, value);
    yield `(!${expression})`;
  }
  __name(FromNot8, "FromNot");
  function* FromNull6(schema, references, value) {
    yield `(${value} === null)`;
  }
  __name(FromNull6, "FromNull");
  function* FromNumber6(schema, references, value) {
    yield Policy.IsNumberLike(value);
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  __name(FromNumber6, "FromNumber");
  function* FromObject19(schema, references, value) {
    yield Policy.IsObjectLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value, knownKey);
      const property = schema.properties[knownKey];
      if (schema.required && schema.required.includes(knownKey)) {
        yield* Visit17(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value, knownKey, expression);
      }
    }
    if (schema.additionalProperties === false) {
      if (schema.required && schema.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema.additionalProperties === "object") {
      const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  __name(FromObject19, "FromObject");
  function* FromPromise8(schema, references, value) {
    yield `${value} instanceof Promise`;
  }
  __name(FromPromise8, "FromPromise");
  function* FromRecord14(schema, references, value) {
    yield Policy.IsRecordLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check2 = IsSchema2(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
    yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
  }
  __name(FromRecord14, "FromRecord");
  function* FromRef15(schema, references, value) {
    const target = Deref(schema, references);
    if (state.functions.has(schema.$ref))
      return yield `${CreateFunctionName(schema.$ref)}(${value})`;
    yield* Visit17(target, references, value);
  }
  __name(FromRef15, "FromRef");
  function* FromRegExp5(schema, references, value) {
    const variable = CreateVariable(`${new RegExp(schema.source, schema.flags)};`);
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    yield `${variable}.test(${value})`;
  }
  __name(FromRegExp5, "FromRegExp");
  function* FromString6(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    if (schema.pattern !== void 0) {
      const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
      yield `${variable}.test(${value})`;
    }
    if (schema.format !== void 0) {
      yield `format('${schema.format}', ${value})`;
    }
  }
  __name(FromString6, "FromString");
  function* FromSymbol6(schema, references, value) {
    yield `(typeof ${value} === 'symbol')`;
  }
  __name(FromSymbol6, "FromSymbol");
  function* FromTemplateLiteral7(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
    yield `${variable}.test(${value})`;
  }
  __name(FromTemplateLiteral7, "FromTemplateLiteral");
  function* FromThis11(schema, references, value) {
    yield `${CreateFunctionName(schema.$ref)}(${value})`;
  }
  __name(FromThis11, "FromThis");
  function* FromTuple16(schema, references, value) {
    yield `Array.isArray(${value})`;
    if (schema.items === void 0)
      return yield `${value}.length === 0`;
    yield `(${value}.length === ${schema.maxItems})`;
    for (let i = 0; i < schema.items.length; i++) {
      const expression = CreateExpression(schema.items[i], references, `${value}[${i}]`);
      yield `${expression}`;
    }
  }
  __name(FromTuple16, "FromTuple");
  function* FromUndefined6(schema, references, value) {
    yield `${value} === undefined`;
  }
  __name(FromUndefined6, "FromUndefined");
  function* FromUnion21(schema, references, value) {
    const expressions = schema.anyOf.map((schema2) => CreateExpression(schema2, references, value));
    yield `(${expressions.join(" || ")})`;
  }
  __name(FromUnion21, "FromUnion");
  function* FromUint8Array5(schema, references, value) {
    yield `${value} instanceof Uint8Array`;
    if (IsNumber2(schema.maxByteLength))
      yield `(${value}.length <= ${schema.maxByteLength})`;
    if (IsNumber2(schema.minByteLength))
      yield `(${value}.length >= ${schema.minByteLength})`;
  }
  __name(FromUint8Array5, "FromUint8Array");
  function* FromUnknown5(schema, references, value) {
    yield "true";
  }
  __name(FromUnknown5, "FromUnknown");
  function* FromVoid5(schema, references, value) {
    yield Policy.IsVoidLike(value);
  }
  __name(FromVoid5, "FromVoid");
  function* FromKind4(schema, references, value) {
    const instance = state.instances.size;
    state.instances.set(instance, schema);
    yield `kind('${schema[Kind]}', ${instance}, ${value})`;
  }
  __name(FromKind4, "FromKind");
  function* Visit17(schema, references, value, useHoisting = true) {
    const references_ = IsString2(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    if (useHoisting && IsString2(schema.$id)) {
      const functionName = CreateFunctionName(schema.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value})`;
      } else {
        state.functions.set(functionName, "<deferred>");
        const functionCode = CreateFunction(functionName, schema, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny5(schema_, references_, value);
      case "Argument":
        return yield* FromArgument5(schema_, references_, value);
      case "Array":
        return yield* FromArray18(schema_, references_, value);
      case "AsyncIterator":
        return yield* FromAsyncIterator8(schema_, references_, value);
      case "BigInt":
        return yield* FromBigInt6(schema_, references_, value);
      case "Boolean":
        return yield* FromBoolean6(schema_, references_, value);
      case "Constructor":
        return yield* FromConstructor9(schema_, references_, value);
      case "Date":
        return yield* FromDate8(schema_, references_, value);
      case "Function":
        return yield* FromFunction8(schema_, references_, value);
      case "Import":
        return yield* FromImport11(schema_, references_, value);
      case "Integer":
        return yield* FromInteger6(schema_, references_, value);
      case "Intersect":
        return yield* FromIntersect19(schema_, references_, value);
      case "Iterator":
        return yield* FromIterator8(schema_, references_, value);
      case "Literal":
        return yield* FromLiteral7(schema_, references_, value);
      case "Never":
        return yield* FromNever6(schema_, references_, value);
      case "Not":
        return yield* FromNot8(schema_, references_, value);
      case "Null":
        return yield* FromNull6(schema_, references_, value);
      case "Number":
        return yield* FromNumber6(schema_, references_, value);
      case "Object":
        return yield* FromObject19(schema_, references_, value);
      case "Promise":
        return yield* FromPromise8(schema_, references_, value);
      case "Record":
        return yield* FromRecord14(schema_, references_, value);
      case "Ref":
        return yield* FromRef15(schema_, references_, value);
      case "RegExp":
        return yield* FromRegExp5(schema_, references_, value);
      case "String":
        return yield* FromString6(schema_, references_, value);
      case "Symbol":
        return yield* FromSymbol6(schema_, references_, value);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral7(schema_, references_, value);
      case "This":
        return yield* FromThis11(schema_, references_, value);
      case "Tuple":
        return yield* FromTuple16(schema_, references_, value);
      case "Undefined":
        return yield* FromUndefined6(schema_, references_, value);
      case "Union":
        return yield* FromUnion21(schema_, references_, value);
      case "Uint8Array":
        return yield* FromUint8Array5(schema_, references_, value);
      case "Unknown":
        return yield* FromUnknown5(schema_, references_, value);
      case "Void":
        return yield* FromVoid5(schema_, references_, value);
      default:
        if (!type_exports2.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema);
        return yield* FromKind4(schema_, references_, value);
    }
  }
  __name(Visit17, "Visit");
  const state = {
    language: "javascript",
    // target language
    functions: /* @__PURE__ */ new Map(),
    // local functions
    variables: /* @__PURE__ */ new Map(),
    // local variables
    instances: /* @__PURE__ */ new Map()
    // exterior kind instances
  };
  function CreateExpression(schema, references, value, useHoisting = true) {
    return `(${[...Visit17(schema, references, value, useHoisting)].join(" && ")})`;
  }
  __name(CreateExpression, "CreateExpression");
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  __name(CreateFunctionName, "CreateFunctionName");
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  __name(CreateVariable, "CreateVariable");
  function CreateFunction(name, schema, references, value, useHoisting = true) {
    const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit17(schema, references, value, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})
}`;
  }
  __name(CreateFunction, "CreateFunction");
  function CreateParameter(name, type) {
    const annotation = state.language === "typescript" ? `: ${type}` : "";
    return `${name}${annotation}`;
  }
  __name(CreateParameter, "CreateParameter");
  function CreateReturns(type) {
    return state.language === "typescript" ? `: ${type}` : "";
  }
  __name(CreateReturns, "CreateReturns");
  function Build(schema, references, options) {
    const functionCode = CreateFunction("check", schema, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString2(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join("\n");
  }
  __name(Build, "Build");
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema, references, options] = args.length === 2 && IsArray2(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray2(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema))
      throw new TypeCompilerTypeGuardError(schema);
    for (const schema2 of references)
      if (!IsSchema2(schema2))
        throw new TypeCompilerTypeGuardError(schema2);
    return Build(schema, references, options);
  }
  __name(Code, "Code");
  TypeCompiler2.Code = Code;
  function Compile(schema, references = []) {
    const generatedCode = Code(schema, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value) {
      if (!type_exports2.Has(kind) || !instances.has(instance))
        return false;
      const checkFunc = type_exports2.Get(kind);
      const schema2 = instances.get(instance);
      return checkFunc(schema2, value);
    }
    __name(typeRegistryFunction, "typeRegistryFunction");
    function formatRegistryFunction(format, value) {
      if (!format_exports.Has(format))
        return false;
      const checkFunc = format_exports.Get(format);
      return checkFunc(value);
    }
    __name(formatRegistryFunction, "formatRegistryFunction");
    function hashFunction(value) {
      return Hash(value);
    }
    __name(hashFunction, "hashFunction");
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema, references, checkFunction, generatedCode);
  }
  __name(Compile, "Compile");
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));

// node_modules/elysia/dist/universal/file.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/universal/utils.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var isBun = typeof Bun < "u";

// node_modules/elysia/dist/universal/file.mjs
var mime = {
  aac: "audio/aac",
  abw: "application/x-abiword",
  ai: "application/postscript",
  arc: "application/octet-stream",
  avi: "video/x-msvideo",
  azw: "application/vnd.amazon.ebook",
  bin: "application/octet-stream",
  bz: "application/x-bzip",
  bz2: "application/x-bzip2",
  csh: "application/x-csh",
  css: "text/css",
  csv: "text/csv",
  doc: "application/msword",
  dll: "application/octet-stream",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  ics: "text/calendar",
  jar: "application/java-archive",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "application/javascript",
  json: "application/json",
  mid: "audio/midi",
  midi: "audio/midi",
  mp2: "audio/mpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpa: "video/mpeg",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpkg: "application/vnd.apple.installer+xml",
  odp: "application/vnd.oasis.opendocument.presentation",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odt: "application/vnd.oasis.opendocument.text",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  otf: "font/otf",
  png: "image/png",
  pdf: "application/pdf",
  ppt: "application/vnd.ms-powerpoint",
  rar: "application/x-rar-compressed",
  rtf: "application/rtf",
  sh: "application/x-sh",
  svg: "image/svg+xml",
  swf: "application/x-shockwave-flash",
  tar: "application/x-tar",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "application/typescript",
  ttf: "font/ttf",
  txt: "text/plain",
  vsd: "application/vnd.visio",
  wav: "audio/x-wav",
  weba: "audio/webm",
  webm: "video/webm",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
  xhtml: "application/xhtml+xml",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.ms-excel",
  xlsx_OLD: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xml: "application/xml",
  xul: "application/vnd.mozilla.xul+xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "3gp_DOES_NOT_CONTAIN_VIDEO": "audio/3gpp",
  "3gp2": "video/3gpp2",
  "3gp2_DOES_NOT_CONTAIN_VIDEO": "audio/3gpp2",
  "7z": "application/x-7z-compressed"
};
var getFileExtension = /* @__PURE__ */ __name((path) => {
  const index = path.lastIndexOf(".");
  return index === -1 ? "" : path.slice(index + 1);
}, "getFileExtension");
var createReadStream;
var stat;
var ElysiaFile = class {
  static {
    __name(this, "ElysiaFile");
  }
  constructor(path) {
    this.path = path;
    if (isBun) this.value = Bun.file(path);
    else {
      if (!createReadStream || !stat) {
        if (typeof window < "u") {
          console.warn("Browser environment does not support file");
          return;
        }
        const warnMissing = /* @__PURE__ */ __name((name) => console.warn(
          new Error(
            `[elysia] \`file\` require \`fs${name ? "." + name : ""}\` ${name?.includes(".") ? "module " : ""}which is not available in this environment`
          )
        ), "warnMissing");
        if (typeof process > "u" || typeof process.getBuiltinModule != "function") {
          warnMissing();
          return;
        }
        const fs = process.getBuiltinModule("fs");
        if (!fs) {
          warnMissing();
          return;
        }
        if (typeof fs.createReadStream != "function") {
          warnMissing();
          return;
        }
        if (typeof fs.promises?.stat != "function") {
          warnMissing();
          return;
        }
        createReadStream = fs.createReadStream, stat = fs.promises.stat;
      }
      this.value = createReadStream(path), this.stats = stat(path);
    }
  }
  get type() {
    return (
      // @ts-ignore
      mime[getFileExtension(this.path)] || "application/octet-stream"
    );
  }
  get length() {
    return isBun ? this.value.size : this.stats?.then((x) => x.size) ?? 0;
  }
};

// node_modules/elysia/dist/error.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/utils.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var hasHeaderShorthand = "toJSON" in new Headers();
var replaceUrlPath = /* @__PURE__ */ __name((url, pathname) => {
  const urlObject = new URL(url);
  return urlObject.pathname = pathname, urlObject.toString();
}, "replaceUrlPath");
var isClass = /* @__PURE__ */ __name((v) => typeof v == "function" && /^\s*class\s+/.test(v.toString()) || // Handle Object.create(null)
v.toString && // Handle import * as Sentry from '@sentry/bun'
// This also handle [object Date], [object Array]
// and FFI value like [object Prisma]
v.toString().startsWith("[object ") && v.toString() !== "[object Object]" || // If object prototype is not pure, then probably a class-like object
isNotEmpty(Object.getPrototypeOf(v)), "isClass");
var isObject = /* @__PURE__ */ __name((item) => item && typeof item == "object" && !Array.isArray(item), "isObject");
var mergeDeep = /* @__PURE__ */ __name((target, source, options) => {
  const skipKeys = options?.skipKeys, override = options?.override ?? true, mergeArray = options?.mergeArray ?? false;
  if (!isObject(target) || !isObject(source)) return target;
  for (const [key, value] of Object.entries(source))
    if (!(skipKeys?.includes(key) || ["__proto__", "constructor", "prototype"].includes(key))) {
      if (mergeArray && Array.isArray(value)) {
        target[key] = Array.isArray(
          target[key]
        ) ? [...target[key], ...value] : target[key] = value;
        continue;
      }
      if (!isObject(value) || !(key in target) || isClass(value)) {
        if ((override || !(key in target)) && !Object.isFrozen(target))
          try {
            target[key] = value;
          } catch {
          }
        continue;
      }
      if (!Object.isFrozen(target[key]))
        try {
          target[key] = mergeDeep(
            target[key],
            value,
            { skipKeys, override, mergeArray }
          );
        } catch {
        }
    }
  return target;
}, "mergeDeep");
var mergeCookie = /* @__PURE__ */ __name((a, b) => {
  const v = mergeDeep(Object.assign({}, a), b, {
    skipKeys: ["properties"],
    mergeArray: false
  });
  return v.properties && delete v.properties, v;
}, "mergeCookie");
var mergeObjectArray = /* @__PURE__ */ __name((a, b) => {
  if (!b) return a;
  const array = [], checksums = [];
  if (a) {
    Array.isArray(a) || (a = [a]);
    for (const item of a)
      array.push(item), item.checksum && checksums.push(item.checksum);
  }
  if (b) {
    Array.isArray(b) || (b = [b]);
    for (const item of b)
      checksums.includes(item.checksum) || array.push(item);
  }
  return array;
}, "mergeObjectArray");
var primitiveHooks = [
  "start",
  "request",
  "parse",
  "transform",
  "resolve",
  "beforeHandle",
  "afterHandle",
  "mapResponse",
  "afterResponse",
  "trace",
  "error",
  "stop",
  "body",
  "headers",
  "params",
  "query",
  "response",
  "type",
  "detail"
];
var primitiveHookMap = primitiveHooks.reduce(
  (acc, x) => (acc[x] = true, acc),
  {}
);
var isRecordNumber = /* @__PURE__ */ __name((x) => typeof x == "object" && Object.keys(x).every((x2) => !isNaN(+x2)), "isRecordNumber");
var mergeResponse = /* @__PURE__ */ __name((a, b) => isRecordNumber(a) && isRecordNumber(b) ? Object.assign({}, a, b) : a && !isRecordNumber(a) && isRecordNumber(b) ? Object.assign({ 200: a }, b) : b ?? a, "mergeResponse");
var mergeSchemaValidator = /* @__PURE__ */ __name((a, b) => !a && !b ? {
  body: void 0,
  headers: void 0,
  params: void 0,
  query: void 0,
  cookie: void 0,
  response: void 0
} : {
  body: b?.body ?? a?.body,
  headers: b?.headers ?? a?.headers,
  params: b?.params ?? a?.params,
  query: b?.query ?? a?.query,
  cookie: b?.cookie ?? a?.cookie,
  // @ts-ignore ? This order is correct - SaltyAom
  response: mergeResponse(
    // @ts-ignore
    a?.response,
    // @ts-ignore
    b?.response
  )
}, "mergeSchemaValidator");
var mergeHook = /* @__PURE__ */ __name((a, b) => {
  if (!b) return a ?? {};
  if (!a) return b ?? {};
  if (!Object.values(b).find((x) => x != null))
    return { ...a };
  const hook = {
    ...a,
    ...b,
    // Merge local hook first
    // @ts-ignore
    body: b.body ?? a.body,
    // @ts-ignore
    headers: b.headers ?? a.headers,
    // @ts-ignore
    params: b.params ?? a.params,
    // @ts-ignore
    query: b.query ?? a.query,
    // @ts-ignore
    cookie: b.cookie ?? a.cookie,
    // ? This order is correct - SaltyAom
    response: mergeResponse(
      // @ts-ignore
      a.response,
      // @ts-ignore
      b.response
    ),
    type: a.type || b.type,
    detail: mergeDeep(
      // @ts-ignore
      b.detail ?? {},
      // @ts-ignore
      a.detail ?? {}
    ),
    parse: mergeObjectArray(a.parse, b.parse),
    transform: mergeObjectArray(a.transform, b.transform),
    beforeHandle: mergeObjectArray(
      mergeObjectArray(
        // @ts-ignore
        fnToContainer(a.resolve, "resolve"),
        a.beforeHandle
      ),
      mergeObjectArray(
        fnToContainer(b.resolve, "resolve"),
        b.beforeHandle
      )
    ),
    afterHandle: mergeObjectArray(a.afterHandle, b.afterHandle),
    mapResponse: mergeObjectArray(a.mapResponse, b.mapResponse),
    afterResponse: mergeObjectArray(
      a.afterResponse,
      b.afterResponse
    ),
    trace: mergeObjectArray(a.trace, b.trace),
    error: mergeObjectArray(a.error, b.error),
    // @ts-ignore
    standaloneSchema: (
      // @ts-ignore
      a.standaloneSchema || b.standaloneSchema ? (
        // @ts-ignore
        a.standaloneSchema && !b.standaloneSchema ? (
          // @ts-ignore
          a.standaloneSchema
        ) : (
          // @ts-ignore
          b.standaloneSchema && !a.standaloneSchema ? b.standaloneSchema : [
            // @ts-ignore
            ...a.standaloneSchema ?? [],
            ...b.standaloneSchema ?? []
          ]
        )
      ) : void 0
    )
  };
  return hook.resolve && delete hook.resolve, hook;
}, "mergeHook");
var lifeCycleToArray = /* @__PURE__ */ __name((a) => {
  a.parse && !Array.isArray(a.parse) && (a.parse = [a.parse]), a.transform && !Array.isArray(a.transform) && (a.transform = [a.transform]), a.afterHandle && !Array.isArray(a.afterHandle) && (a.afterHandle = [a.afterHandle]), a.mapResponse && !Array.isArray(a.mapResponse) && (a.mapResponse = [a.mapResponse]), a.afterResponse && !Array.isArray(a.afterResponse) && (a.afterResponse = [a.afterResponse]), a.trace && !Array.isArray(a.trace) && (a.trace = [a.trace]), a.error && !Array.isArray(a.error) && (a.error = [a.error]);
  let beforeHandle = [];
  return a.resolve && (beforeHandle = fnToContainer(
    // @ts-expect-error
    Array.isArray(a.resolve) ? a.resolve : [a.resolve],
    "resolve"
  ), delete a.resolve), a.beforeHandle && (beforeHandle.length ? beforeHandle = beforeHandle.concat(
    Array.isArray(a.beforeHandle) ? a.beforeHandle : [a.beforeHandle]
  ) : beforeHandle = Array.isArray(a.beforeHandle) ? a.beforeHandle : [a.beforeHandle]), beforeHandle.length && (a.beforeHandle = beforeHandle), a;
}, "lifeCycleToArray");
var isBun2 = typeof Bun < "u";
var hasBunHash = isBun2 && typeof Bun.hash == "function";
var checksum = /* @__PURE__ */ __name((s) => {
  let h = 9;
  for (let i = 0; i < s.length; ) h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return h = h ^ h >>> 9;
}, "checksum");
var injectChecksum = /* @__PURE__ */ __name((checksum2, x) => {
  if (!x) return;
  if (!Array.isArray(x)) {
    const fn = x;
    return checksum2 && !fn.checksum && (fn.checksum = checksum2), fn.scope === "scoped" && (fn.scope = "local"), fn;
  }
  const fns = [...x];
  for (const fn of fns)
    checksum2 && !fn.checksum && (fn.checksum = checksum2), fn.scope === "scoped" && (fn.scope = "local");
  return fns;
}, "injectChecksum");
var mergeLifeCycle = /* @__PURE__ */ __name((a, b, checksum2) => ({
  start: mergeObjectArray(
    a.start,
    injectChecksum(checksum2, b?.start)
  ),
  request: mergeObjectArray(
    a.request,
    injectChecksum(checksum2, b?.request)
  ),
  parse: mergeObjectArray(
    a.parse,
    injectChecksum(checksum2, b?.parse)
  ),
  transform: mergeObjectArray(
    a.transform,
    injectChecksum(checksum2, b?.transform)
  ),
  beforeHandle: mergeObjectArray(
    mergeObjectArray(
      // @ts-ignore
      fnToContainer(a.resolve, "resolve"),
      a.beforeHandle
    ),
    injectChecksum(
      checksum2,
      mergeObjectArray(
        fnToContainer(b?.resolve, "resolve"),
        b?.beforeHandle
      )
    )
  ),
  afterHandle: mergeObjectArray(
    a.afterHandle,
    injectChecksum(checksum2, b?.afterHandle)
  ),
  mapResponse: mergeObjectArray(
    a.mapResponse,
    injectChecksum(checksum2, b?.mapResponse)
  ),
  afterResponse: mergeObjectArray(
    a.afterResponse,
    injectChecksum(checksum2, b?.afterResponse)
  ),
  // Already merged on Elysia._use, also logic is more complicated, can't directly merge
  trace: mergeObjectArray(
    a.trace,
    injectChecksum(checksum2, b?.trace)
  ),
  error: mergeObjectArray(
    a.error,
    injectChecksum(checksum2, b?.error)
  ),
  stop: mergeObjectArray(
    a.stop,
    injectChecksum(checksum2, b?.stop)
  )
}), "mergeLifeCycle");
var asHookType = /* @__PURE__ */ __name((fn, inject, { skipIfHasType = false }) => {
  if (!fn) return fn;
  if (!Array.isArray(fn))
    return skipIfHasType ? fn.scope ??= inject : fn.scope = inject, fn;
  for (const x of fn)
    skipIfHasType ? x.scope ??= inject : x.scope = inject;
  return fn;
}, "asHookType");
var filterGlobal = /* @__PURE__ */ __name((fn) => {
  if (!fn) return fn;
  if (!Array.isArray(fn))
    switch (fn.scope) {
      case "global":
      case "scoped":
        return { ...fn };
      default:
        return { fn };
    }
  const array = [];
  for (const x of fn)
    switch (x.scope) {
      case "global":
      case "scoped":
        array.push({
          ...x
        });
        break;
    }
  return array;
}, "filterGlobal");
var filterGlobalHook = /* @__PURE__ */ __name((hook) => ({
  // rest is validator
  ...hook,
  type: hook?.type,
  detail: hook?.detail,
  parse: filterGlobal(hook?.parse),
  transform: filterGlobal(hook?.transform),
  beforeHandle: filterGlobal(hook?.beforeHandle),
  afterHandle: filterGlobal(hook?.afterHandle),
  mapResponse: filterGlobal(hook?.mapResponse),
  afterResponse: filterGlobal(hook?.afterResponse),
  error: filterGlobal(hook?.error),
  trace: filterGlobal(hook?.trace)
}), "filterGlobalHook");
var StatusMap = {
  Continue: 100,
  "Switching Protocols": 101,
  Processing: 102,
  "Early Hints": 103,
  OK: 200,
  Created: 201,
  Accepted: 202,
  "Non-Authoritative Information": 203,
  "No Content": 204,
  "Reset Content": 205,
  "Partial Content": 206,
  "Multi-Status": 207,
  "Already Reported": 208,
  "Multiple Choices": 300,
  "Moved Permanently": 301,
  Found: 302,
  "See Other": 303,
  "Not Modified": 304,
  "Temporary Redirect": 307,
  "Permanent Redirect": 308,
  "Bad Request": 400,
  Unauthorized: 401,
  "Payment Required": 402,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  "Not Acceptable": 406,
  "Proxy Authentication Required": 407,
  "Request Timeout": 408,
  Conflict: 409,
  Gone: 410,
  "Length Required": 411,
  "Precondition Failed": 412,
  "Payload Too Large": 413,
  "URI Too Long": 414,
  "Unsupported Media Type": 415,
  "Range Not Satisfiable": 416,
  "Expectation Failed": 417,
  "I'm a teapot": 418,
  "Enhance Your Calm": 420,
  "Misdirected Request": 421,
  "Unprocessable Content": 422,
  Locked: 423,
  "Failed Dependency": 424,
  "Too Early": 425,
  "Upgrade Required": 426,
  "Precondition Required": 428,
  "Too Many Requests": 429,
  "Request Header Fields Too Large": 431,
  "Unavailable For Legal Reasons": 451,
  "Internal Server Error": 500,
  "Not Implemented": 501,
  "Bad Gateway": 502,
  "Service Unavailable": 503,
  "Gateway Timeout": 504,
  "HTTP Version Not Supported": 505,
  "Variant Also Negotiates": 506,
  "Insufficient Storage": 507,
  "Loop Detected": 508,
  "Not Extended": 510,
  "Network Authentication Required": 511
};
var InvertedStatusMap = Object.fromEntries(
  Object.entries(StatusMap).map(([k, v]) => [v, k])
);
function removeTrailingEquals(digest) {
  let trimmedDigest = digest;
  for (; trimmedDigest.endsWith("="); )
    trimmedDigest = trimmedDigest.slice(0, -1);
  return trimmedDigest;
}
__name(removeTrailingEquals, "removeTrailingEquals");
var encoder = new TextEncoder();
var signCookie = /* @__PURE__ */ __name(async (val, secret) => {
  if (typeof val == "object" ? val = JSON.stringify(val) : typeof val != "string" && (val = val + ""), secret === null) throw new TypeError("Secret key must be provided.");
  const secretKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  ), hmacBuffer = await crypto.subtle.sign(
    "HMAC",
    secretKey,
    encoder.encode(val)
  );
  return val + "." + removeTrailingEquals(Buffer.from(hmacBuffer).toString("base64"));
}, "signCookie");
var unsignCookie = /* @__PURE__ */ __name(async (input, secret) => {
  if (typeof input != "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (secret === null) throw new TypeError("Secret key must be provided.");
  const tentativeValue = input.slice(0, input.lastIndexOf("."));
  return await signCookie(tentativeValue, secret) === input ? tentativeValue : false;
}, "unsignCookie");
var insertStandaloneValidator = /* @__PURE__ */ __name((hook, name, value) => {
  if (!hook.standaloneValidator?.length || !Array.isArray(hook.standaloneValidator)) {
    hook.standaloneValidator = [
      {
        [name]: value
      }
    ];
    return;
  }
  const last = hook.standaloneValidator[hook.standaloneValidator.length - 1];
  name in last ? hook.standaloneValidator.push({
    [name]: value
  }) : last[name] = value;
}, "insertStandaloneValidator");
var parseNumericString = /* @__PURE__ */ __name((message) => {
  if (typeof message == "number") return message;
  if (message.length < 16) {
    if (message.trim().length === 0) return null;
    const length = Number(message);
    return Number.isNaN(length) ? null : length;
  }
  if (message.length === 16) {
    if (message.trim().length === 0) return null;
    const number = Number(message);
    return Number.isNaN(number) || number.toString() !== message ? null : number;
  }
  return null;
}, "parseNumericString");
var isNumericString = /* @__PURE__ */ __name((message) => parseNumericString(message) !== null, "isNumericString");
var PromiseGroup = class {
  static {
    __name(this, "PromiseGroup");
  }
  constructor(onError = console.error, onFinally = () => {
  }) {
    this.onError = onError;
    this.onFinally = onFinally;
    this.root = null;
    this.promises = [];
  }
  /**
   * The number of promises still being awaited.
   */
  get size() {
    return this.promises.length;
  }
  /**
   * Add a promise to the group.
   * @returns The promise that was added.
   */
  add(promise) {
    return this.promises.push(promise), this.root ||= this.drain(), this.promises.length === 1 && this.then(this.onFinally), promise;
  }
  async drain() {
    for (; this.promises.length > 0; ) {
      try {
        await this.promises[0];
      } catch (error) {
        this.onError(error);
      }
      this.promises.shift();
    }
    this.root = null;
  }
  // Allow the group to be awaited.
  then(onfulfilled, onrejected) {
    return (this.root ?? Promise.resolve()).then(onfulfilled, onrejected);
  }
};
var fnToContainer = /* @__PURE__ */ __name((fn, subType) => {
  if (!fn) return fn;
  if (!Array.isArray(fn)) {
    if (typeof fn == "function" || typeof fn == "string")
      return subType ? { fn, subType } : { fn };
    if ("fn" in fn) return fn;
  }
  const fns = [];
  for (const x of fn)
    typeof x == "function" || typeof x == "string" ? fns.push(subType ? { fn: x, subType } : { fn: x }) : "fn" in x && fns.push(x);
  return fns;
}, "fnToContainer");
var localHookToLifeCycleStore = /* @__PURE__ */ __name((a) => (a.start && (a.start = fnToContainer(a.start)), a.request && (a.request = fnToContainer(a.request)), a.parse && (a.parse = fnToContainer(a.parse)), a.transform && (a.transform = fnToContainer(a.transform)), a.beforeHandle && (a.beforeHandle = fnToContainer(a.beforeHandle)), a.afterHandle && (a.afterHandle = fnToContainer(a.afterHandle)), a.mapResponse && (a.mapResponse = fnToContainer(a.mapResponse)), a.afterResponse && (a.afterResponse = fnToContainer(a.afterResponse)), a.trace && (a.trace = fnToContainer(a.trace)), a.error && (a.error = fnToContainer(a.error)), a.stop && (a.stop = fnToContainer(a.stop)), a), "localHookToLifeCycleStore");
var lifeCycleToFn = /* @__PURE__ */ __name((a) => {
  const lifecycle = /* @__PURE__ */ Object.create(null);
  return a.start?.map && (lifecycle.start = a.start.map((x) => x.fn)), a.request?.map && (lifecycle.request = a.request.map((x) => x.fn)), a.parse?.map && (lifecycle.parse = a.parse.map((x) => x.fn)), a.transform?.map && (lifecycle.transform = a.transform.map((x) => x.fn)), a.beforeHandle?.map && (lifecycle.beforeHandle = a.beforeHandle.map((x) => x.fn)), a.afterHandle?.map && (lifecycle.afterHandle = a.afterHandle.map((x) => x.fn)), a.mapResponse?.map && (lifecycle.mapResponse = a.mapResponse.map((x) => x.fn)), a.afterResponse?.map && (lifecycle.afterResponse = a.afterResponse.map((x) => x.fn)), a.error?.map && (lifecycle.error = a.error.map((x) => x.fn)), a.stop?.map && (lifecycle.stop = a.stop.map((x) => x.fn)), a.trace?.map ? lifecycle.trace = a.trace.map((x) => x.fn) : lifecycle.trace = [], lifecycle;
}, "lifeCycleToFn");
var cloneInference = /* @__PURE__ */ __name((inference) => ({
  body: inference.body,
  cookie: inference.cookie,
  headers: inference.headers,
  query: inference.query,
  set: inference.set,
  server: inference.server,
  path: inference.path,
  route: inference.route,
  url: inference.url
}), "cloneInference");
var redirect = /* @__PURE__ */ __name((url, status2 = 302) => Response.redirect(url, status2), "redirect");
var ELYSIA_FORM_DATA = Symbol("ElysiaFormData");
var ELYSIA_REQUEST_ID = Symbol("ElysiaRequestId");
var form = /* @__PURE__ */ __name((items) => {
  const formData = new FormData();
  if (formData[ELYSIA_FORM_DATA] = {}, items)
    for (const [key, value] of Object.entries(items)) {
      if (Array.isArray(value)) {
        formData[ELYSIA_FORM_DATA][key] = [];
        for (const v of value)
          value instanceof File ? formData.append(key, value, value.name) : value instanceof ElysiaFile ? formData.append(key, value.value, value.value?.name) : formData.append(key, value), formData[ELYSIA_FORM_DATA][key].push(value);
        continue;
      }
      value instanceof File ? formData.append(key, value, value.name) : value instanceof ElysiaFile ? formData.append(key, value.value, value.value?.name) : formData.append(key, value), formData[ELYSIA_FORM_DATA][key] = value;
    }
  return formData;
}, "form");
var randomId = typeof crypto > "u" ? () => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length;
  for (let i = 0; i < 16; i++)
    result += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  return result;
} : () => {
  const uuid = crypto.randomUUID();
  return uuid.slice(0, 8) + uuid.slice(24, 32);
};
var deduplicateChecksum = /* @__PURE__ */ __name((array) => {
  if (!array.length) return [];
  const hashes = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    item.checksum && (hashes.includes(item.checksum) && (array.splice(i, 1), i--), hashes.push(item.checksum));
  }
  return array;
}, "deduplicateChecksum");
var promoteEvent = /* @__PURE__ */ __name((events, as = "scoped") => {
  if (events) {
    if (as === "scoped") {
      for (const event of events)
        "scope" in event && event.scope === "local" && (event.scope = "scoped");
      return;
    }
    for (const event of events) "scope" in event && (event.scope = "global");
  }
}, "promoteEvent");
var getLoosePath = /* @__PURE__ */ __name((path) => path.charCodeAt(path.length - 1) === 47 ? path.slice(0, path.length - 1) : path + "/", "getLoosePath");
var isNotEmpty = /* @__PURE__ */ __name((obj) => {
  if (!obj) return false;
  for (const _ in obj) return true;
  return false;
}, "isNotEmpty");
var encodePath = /* @__PURE__ */ __name((path, { dynamic = false } = {}) => {
  let encoded = encodeURIComponent(path).replace(/%2F/g, "/");
  return dynamic && (encoded = encoded.replace(/%3A/g, ":").replace(/%3F/g, "?")), encoded;
}, "encodePath");
var supportPerMethodInlineHandler = !!(typeof Bun > "u" || Bun.semver?.satisfies?.(Bun.version, ">=1.2.14"));
async function getResponseLength(response) {
  if (response.bodyUsed || !response.body) return 0;
  let length = 0;
  const reader = response.body.getReader();
  for (; ; ) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
  }
  return length;
}
__name(getResponseLength, "getResponseLength");
var emptySchema = {
  headers: true,
  cookie: true,
  query: true,
  params: true,
  body: true,
  response: true
};

// node_modules/elysia/dist/error.mjs
var env2 = typeof Bun < "u" ? Bun.env : typeof process < "u" ? process?.env : void 0;
var ERROR_CODE = Symbol("ElysiaErrorCode");
var isProduction = (env2?.NODE_ENV ?? env2?.ENV) === "production";
var emptyHttpStatus = {
  101: void 0,
  204: void 0,
  205: void 0,
  304: void 0,
  307: void 0,
  308: void 0
};
var ElysiaCustomStatusResponse = class {
  static {
    __name(this, "ElysiaCustomStatusResponse");
  }
  constructor(code, response) {
    const res = response ?? (code in InvertedStatusMap ? (
      // @ts-expect-error Always correct
      InvertedStatusMap[code]
    ) : code);
    this.code = StatusMap[code] ?? code, code in emptyHttpStatus ? this.response = void 0 : this.response = res;
  }
};
var status = /* @__PURE__ */ __name((code, response) => new ElysiaCustomStatusResponse(code, response), "status");
var NotFoundError = class extends Error {
  static {
    __name(this, "NotFoundError");
  }
  constructor(message) {
    super(message ?? "NOT_FOUND");
    this.code = "NOT_FOUND";
    this.status = 404;
  }
};
var ParseError2 = class extends Error {
  static {
    __name(this, "ParseError");
  }
  constructor(cause) {
    super("Bad Request", {
      cause
    });
    this.code = "PARSE";
    this.status = 400;
  }
};
var InvalidCookieSignature = class extends Error {
  static {
    __name(this, "InvalidCookieSignature");
  }
  constructor(key, message) {
    super(message ?? `"${key}" has invalid cookie signature`);
    this.key = key;
    this.code = "INVALID_COOKIE_SIGNATURE";
    this.status = 400;
  }
};
var mapValueError = /* @__PURE__ */ __name((error) => {
  if (!error)
    return {
      summary: void 0
    };
  let { message, path, value, type } = error;
  Array.isArray(path) && (path = path[0]);
  const property = typeof path == "string" ? path.slice(1).replaceAll("/", ".") : "unknown", isRoot = path === "";
  switch (type) {
    case 42:
      return {
        ...error,
        summary: isRoot ? "Value should not be provided" : `Property '${property}' should not be provided`
      };
    case 45:
      return {
        ...error,
        summary: isRoot ? "Value is missing" : `Property '${property}' is missing`
      };
    case 50:
      const quoteIndex = message.indexOf("'"), format = message.slice(
        quoteIndex + 1,
        message.indexOf("'", quoteIndex + 1)
      );
      return {
        ...error,
        summary: isRoot ? "Value should be an email" : `Property '${property}' should be ${format}`
      };
    case 54:
      return {
        ...error,
        summary: `${message.slice(0, 9).trim()} property '${property}' to be ${message.slice(8).trim()} but found: ${value}`
      };
    case 62:
      const union = error.schema.anyOf.map((x) => `'${x?.format ?? x.type}'`).join(", ");
      return {
        ...error,
        summary: isRoot ? `Value should be one of ${union}` : `Property '${property}' should be one of: ${union}`
      };
    default:
      return { summary: message, ...error };
  }
}, "mapValueError");
var InvalidFileType = class _InvalidFileType extends Error {
  static {
    __name(this, "InvalidFileType");
  }
  constructor(property, expected, message = `"${property}" has invalid file type`) {
    super(message);
    this.property = property;
    this.expected = expected;
    this.message = message;
    this.code = "INVALID_FILE_TYPE";
    this.status = 422;
    Object.setPrototypeOf(this, _InvalidFileType.prototype);
  }
  toResponse(headers) {
    return isProduction ? new Response(
      JSON.stringify({
        type: "validation",
        on: "body"
      }),
      {
        status: 422,
        headers: {
          ...headers,
          "content-type": "application/json"
        }
      }
    ) : new Response(
      JSON.stringify({
        type: "validation",
        on: "body",
        summary: "Invalid file type",
        message: this.message,
        property: this.property,
        expected: this.expected
      }),
      {
        status: 422,
        headers: {
          ...headers,
          "content-type": "application/json"
        }
      }
    );
  }
};
var ValidationError = class _ValidationError extends Error {
  static {
    __name(this, "ValidationError");
  }
  constructor(type, validator, value, allowUnsafeValidationDetails = false, errors) {
    let message = "", error, expected, customError;
    if (
      // @ts-ignore
      validator?.provider === "standard" || "~standard" in validator || // @ts-ignore
      validator.schema && "~standard" in validator.schema
    ) {
      const standard = (
        // @ts-ignore
        ("~standard" in validator ? validator : validator.schema)["~standard"]
      );
      error = (errors ?? standard.validate(value).issues)?.[0], isProduction ? message = JSON.stringify({
        type: "validation",
        on: type,
        found: value
      }) : message = JSON.stringify(
        {
          type: "validation",
          on: type,
          property: error.path?.[0] || "root",
          message: error?.message,
          summary: error?.problem,
          expected,
          found: value,
          errors
        },
        null,
        2
      ), customError = error?.message;
    } else {
      value && typeof value == "object" && value instanceof ElysiaCustomStatusResponse && (value = value.response), error = errors?.First() ?? ("Errors" in validator ? validator.Errors(value).First() : value_exports2.Errors(validator, value).First());
      const accessor = error?.path || "root", schema = validator?.schema ?? validator;
      if (!isProduction && !allowUnsafeValidationDetails)
        try {
          expected = value_exports2.Create(schema);
        } catch (error2) {
          expected = {
            type: "Could not create expected value",
            // @ts-expect-error
            message: error2?.message,
            error: error2
          };
        }
      customError = error?.schema?.message || error?.schema?.error !== void 0 ? typeof error.schema.error == "function" ? error.schema.error(
        isProduction && !allowUnsafeValidationDetails ? {
          type: "validation",
          on: type,
          found: value
        } : {
          type: "validation",
          on: type,
          value,
          property: accessor,
          message: error?.message,
          summary: mapValueError(error).summary,
          found: value,
          expected,
          errors: "Errors" in validator ? [
            ...validator.Errors(
              value
            )
          ].map(mapValueError) : [
            ...value_exports2.Errors(
              validator,
              value
            )
          ].map(mapValueError)
        },
        validator
      ) : error.schema.error : void 0, customError !== void 0 ? message = typeof customError == "object" ? JSON.stringify(customError) : customError + "" : isProduction && !allowUnsafeValidationDetails ? message = JSON.stringify({
        type: "validation",
        on: type,
        found: value
      }) : message = JSON.stringify(
        {
          type: "validation",
          on: type,
          property: accessor,
          message: error?.message,
          summary: mapValueError(error).summary,
          expected,
          found: value,
          errors: "Errors" in validator ? [...validator.Errors(value)].map(
            mapValueError
          ) : [...value_exports2.Errors(validator, value)].map(
            mapValueError
          )
        },
        null,
        2
      );
    }
    super(message);
    this.type = type;
    this.validator = validator;
    this.value = value;
    this.allowUnsafeValidationDetails = allowUnsafeValidationDetails;
    this.code = "VALIDATION";
    this.status = 422;
    this.valueError = error, this.expected = expected, this.customError = customError, Object.setPrototypeOf(this, _ValidationError.prototype);
  }
  /**
   * Alias of `valueError`
   */
  get messageValue() {
    return this.valueError;
  }
  get all() {
    return (
      // @ts-ignore
      this.validator?.provider === "standard" || "~standard" in this.validator || // @ts-ignore
      "schema" in this.validator && // @ts-ignore
      this.validator.schema && // @ts-ignore
      "~standard" in this.validator.schema ? (
        /* @ts-ignore */
        ("~standard" in this.validator ? this.validator : (
          // @ts-ignore
          this.validator.schema
        ))["~standard"].validate(this.value).issues?.map((issue) => ({
          summary: issue.message,
          path: issue.path?.join(".") || "root",
          message: issue.message,
          value: this.value
        })) || []
      ) : "Errors" in this.validator ? [...this.validator.Errors(this.value)].map(mapValueError) : (
        // @ts-ignore
        [...value_exports2.Errors(this.validator, this.value)].map(mapValueError)
      )
    );
  }
  static simplifyModel(validator) {
    const model = "schema" in validator ? validator.schema : validator;
    try {
      return value_exports2.Create(model);
    } catch {
      return model;
    }
  }
  get model() {
    return "~standard" in this.validator ? this.validator : _ValidationError.simplifyModel(this.validator);
  }
  toResponse(headers) {
    return new Response(this.message, {
      status: 400,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    });
  }
  /**
   * Utility function to inherit add custom error and keep the original Validation error
   *
   * @since 1.3.14
   *
   * @example
   * ```ts
   * new Elysia()
   *		.onError(({ error, code }) => {
   *			if (code === 'VALIDATION') return error.detail(error.message)
   *		})
   *		.post('/', () => 'Hello World!', {
   *			body: t.Object({
   *				x: t.Number({
   *					error: 'x must be a number'
   *				})
   *			})
   *		})
   * ```
   */
  detail(message, allowUnsafeValidatorDetails = this.allowUnsafeValidationDetails) {
    if (!this.customError) return this.message;
    const value = this.value, expected = this.expected, errors = this.all;
    return isProduction && !allowUnsafeValidatorDetails ? {
      type: "validation",
      on: this.type,
      found: value,
      message
    } : {
      type: "validation",
      on: this.type,
      property: this.valueError?.path || "root",
      message,
      summary: mapValueError(this.valueError).summary,
      found: value,
      expected,
      errors
    };
  }
};

// node_modules/elysia/dist/type-system/utils.mjs
var tryParse = /* @__PURE__ */ __name((v, schema) => {
  try {
    return JSON.parse(v);
  } catch {
    throw new ValidationError("property", schema, v);
  }
}, "tryParse");
function createType(kind, func) {
  return type_exports2.Has(kind) || type_exports2.Set(kind, func), (options = {}) => Unsafe({ ...options, [Kind]: kind });
}
__name(createType, "createType");
var compile = /* @__PURE__ */ __name((schema) => {
  try {
    const compiler = TypeCompiler.Compile(schema);
    return compiler.Create = () => value_exports2.Create(schema), compiler.Error = (v) => (
      // @ts-ignore
      new ValidationError("property", schema, v, compiler.Errors(v))
    ), compiler;
  } catch {
    return {
      Check: /* @__PURE__ */ __name((v) => value_exports2.Check(schema, v), "Check"),
      CheckThrow: /* @__PURE__ */ __name((v) => {
        if (!value_exports2.Check(schema, v))
          throw new ValidationError(
            "property",
            schema,
            v,
            // @ts-ignore
            value_exports2.Errors(schema, v)
          );
      }, "CheckThrow"),
      Decode: /* @__PURE__ */ __name((v) => value_exports2.Decode(schema, v), "Decode"),
      Create: /* @__PURE__ */ __name(() => value_exports2.Create(schema), "Create"),
      Error: /* @__PURE__ */ __name((v) => new ValidationError(
        "property",
        schema,
        v,
        // @ts-ignore
        value_exports2.Errors(schema, v)
      ), "Error")
    };
  }
}, "compile");
var parseFileUnit = /* @__PURE__ */ __name((size) => {
  if (typeof size == "string")
    switch (size.slice(-1)) {
      case "k":
        return +size.slice(0, size.length - 1) * 1024;
      case "m":
        return +size.slice(0, size.length - 1) * 1048576;
      default:
        return +size;
    }
  return size;
}, "parseFileUnit");
var checkFileExtension = /* @__PURE__ */ __name((type, extension) => type.startsWith(extension) ? true : extension.charCodeAt(extension.length - 1) === 42 && extension.charCodeAt(extension.length - 2) === 47 && type.startsWith(extension.slice(0, -1)), "checkFileExtension");
var _fileTypeFromBlobWarn = false;
var warnIfFileTypeIsNotInstalled = /* @__PURE__ */ __name(() => {
  _fileTypeFromBlobWarn || (console.warn(
    "[Elysia] Attempt to validate file type without 'file-type'. This may lead to security risks. We recommend installing 'file-type' to properly validate file extension."
  ), _fileTypeFromBlobWarn = true);
}, "warnIfFileTypeIsNotInstalled");
var loadFileType = /* @__PURE__ */ __name(async () => Promise.resolve().then(() => (init_core2(), core_exports)).then((x) => (_fileTypeFromBlob = x.fileTypeFromBlob, _fileTypeFromBlob)).catch(warnIfFileTypeIsNotInstalled), "loadFileType");
var _fileTypeFromBlob;
var fileTypeFromBlob2 = /* @__PURE__ */ __name((file2) => _fileTypeFromBlob ? _fileTypeFromBlob(file2) : loadFileType().then((mod) => {
  if (mod) return mod(file2);
}), "fileTypeFromBlob");
var fileType = /* @__PURE__ */ __name(async (file2, extension, name = file2?.name ?? "") => {
  if (Array.isArray(file2))
    return await Promise.all(file2.map((f) => fileType(f, extension, name))), true;
  if (!file2) return false;
  const result = await fileTypeFromBlob2(file2);
  if (!result) throw new InvalidFileType(name, extension);
  if (typeof extension == "string" && !checkFileExtension(result.mime, extension))
    throw new InvalidFileType(name, extension);
  for (let i = 0; i < extension.length; i++)
    if (checkFileExtension(result.mime, extension[i])) return true;
  throw new InvalidFileType(name, extension);
}, "fileType");
var validateFile = /* @__PURE__ */ __name((options, value) => {
  if (value instanceof ElysiaFile) return true;
  if (!(value instanceof Blob) || options.minSize && value.size < parseFileUnit(options.minSize) || options.maxSize && value.size > parseFileUnit(options.maxSize))
    return false;
  if (options.extension) {
    if (typeof options.extension == "string")
      return checkFileExtension(value.type, options.extension);
    for (let i = 0; i < options.extension.length; i++)
      if (checkFileExtension(value.type, options.extension[i]))
        return true;
    return false;
  }
  return true;
}, "validateFile");

// node_modules/elysia/dist/type-system/format.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var fullFormats = {
  // date: http://tools.ietf.org/html/rfc3339#section-5.6
  date,
  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
  time: getTime(true),
  "date-time": getDateTime(true),
  "iso-time": getTime(false),
  "iso-date-time": getDateTime(false),
  // duration: https://tools.ietf.org/html/rfc3339#appendix-A
  duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
  uri,
  "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  // uri-template: https://tools.ietf.org/html/rfc6570
  "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
  // For the source: https://gist.github.com/dperini/729294
  // For test cases: https://mathiasbynens.be/demo/url-regex
  url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
  ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
  regex,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
  "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
  // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
  // byte: https://github.com/miguelmota/is-base64
  byte,
  // signed 32 bit integer
  int32: { type: "number", validate: validateInt32 },
  // signed 64 bit integer
  int64: { type: "number", validate: validateInt64 },
  // C-type float
  float: { type: "number", validate: validateNumber },
  // C-type double
  double: { type: "number", validate: validateNumber },
  // hint to the UI to hide input strings
  password: true,
  // unchecked string payload
  binary: true
};
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
__name(isLeapYear, "isLeapYear");
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function date(str) {
  const matches = DATE.exec(str);
  if (!matches) return false;
  const year = +matches[1], month = +matches[2], day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
__name(date, "date");
var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
function getTime(strictTimeZone) {
  return function(str) {
    const matches = TIME.exec(str);
    if (!matches) return false;
    const hr = +matches[1], min = +matches[2], sec = +matches[3], tz = matches[4], tzSign = matches[5] === "-" ? -1 : 1, tzH = +(matches[6] || 0), tzM = +(matches[7] || 0);
    if (tzH > 23 || tzM > 59 || strictTimeZone && !tz) return false;
    if (hr <= 23 && min <= 59 && sec < 60) return true;
    const utcMin = min - tzM * tzSign, utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
    return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
  };
}
__name(getTime, "getTime");
var parseDateTimeEmptySpace = /* @__PURE__ */ __name((str) => str.charCodeAt(str.length - 6) === 32 ? str.slice(0, -6) + "+" + str.slice(-5) : str, "parseDateTimeEmptySpace");
var DATE_TIME_SEPARATOR = /t|\s/i;
function getDateTime(strictTimeZone) {
  const time = getTime(strictTimeZone);
  return function(str) {
    const dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
  };
}
__name(getDateTime, "getDateTime");
var NOT_URI_FRAGMENT = /\/|:/;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}
__name(uri, "uri");
var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
function byte(str) {
  return BYTE.lastIndex = 0, BYTE.test(str);
}
__name(byte, "byte");
var MIN_INT32 = -(2 ** 31);
var MAX_INT32 = 2 ** 31 - 1;
function validateInt32(value) {
  return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
}
__name(validateInt32, "validateInt32");
function validateInt64(value) {
  return Number.isInteger(value);
}
__name(validateInt64, "validateInt64");
function validateNumber() {
  return true;
}
__name(validateNumber, "validateNumber");
var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str)) return false;
  try {
    return new RegExp(str), true;
  } catch {
    return false;
  }
}
__name(regex, "regex");
var isISO8601 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var isFormalDate = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/;
var isShortenDate = /^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/;
var _validateDate = fullFormats.date;
var _validateDateTime = fullFormats["date-time"];
format_exports.Has("date") || format_exports.Set("date", (value) => {
  const temp = parseDateTimeEmptySpace(value).replace(/"/g, "");
  if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDate(temp)) {
    const date2 = new Date(temp);
    if (!Number.isNaN(date2.getTime())) return true;
  }
  return false;
}), format_exports.Has("date-time") || format_exports.Set("date-time", (value) => {
  const temp = value.replace(/"/g, "");
  if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDateTime(temp)) {
    const date2 = new Date(temp);
    if (!Number.isNaN(date2.getTime())) return true;
  }
  return false;
}), Object.entries(fullFormats).forEach((formatEntry) => {
  const [formatName, formatValue] = formatEntry;
  format_exports.Has(formatName) || (formatValue instanceof RegExp ? format_exports.Set(formatName, (value) => formatValue.test(value)) : typeof formatValue == "function" && format_exports.Set(formatName, formatValue));
}), format_exports.Has("numeric") || format_exports.Set("numeric", (value) => !!value && !isNaN(+value)), format_exports.Has("integer") || format_exports.Set(
  "integer",
  (value) => !!value && Number.isInteger(+value)
), format_exports.Has("boolean") || format_exports.Set(
  "boolean",
  (value) => value === "true" || value === "false"
), format_exports.Has("ObjectString") || format_exports.Set("ObjectString", (value) => {
  let start = value.charCodeAt(0);
  if ((start === 9 || start === 10 || start === 32) && (start = value.trimStart().charCodeAt(0)), start !== 123 && start !== 91) return false;
  try {
    return JSON.parse(value), true;
  } catch {
    return false;
  }
}), format_exports.Has("ArrayString") || format_exports.Set("ArrayString", (value) => {
  let start = value.charCodeAt(0);
  if ((start === 9 || start === 10 || start === 32) && (start = value.trimStart().charCodeAt(0)), start !== 123 && start !== 91) return false;
  try {
    return JSON.parse(value), true;
  } catch {
    return false;
  }
});

// node_modules/elysia/dist/type-system/index.mjs
var t = Object.assign({}, Type);
createType(
  "UnionEnum",
  (schema, value) => (typeof value == "number" || typeof value == "string" || value === null) && schema.enum.includes(value)
), createType(
  "ArrayBuffer",
  (schema, value) => value instanceof ArrayBuffer
);
var internalFiles = createType(
  "Files",
  (options, value) => {
    if (options.minItems && options.minItems > 1 && !Array.isArray(value))
      return false;
    if (!Array.isArray(value)) return validateFile(options, value);
    if (options.minItems && value.length < options.minItems || options.maxItems && value.length > options.maxItems) return false;
    for (let i = 0; i < value.length; i++)
      if (!validateFile(options, value[i])) return false;
    return true;
  }
);
var internalFormData = createType(
  "ElysiaForm",
  ({ compiler, ...schema }, value) => {
    if (!(value instanceof FormData)) return false;
    if (compiler) {
      if (!(ELYSIA_FORM_DATA in value))
        throw new ValidationError("property", schema, value);
      if (!compiler.Check(value[ELYSIA_FORM_DATA]))
        throw compiler.Error(value[ELYSIA_FORM_DATA]);
    }
    return true;
  }
);
var ElysiaType = {
  // @ts-ignore
  String: /* @__PURE__ */ __name((property) => Type.String(property), "String"),
  Numeric: /* @__PURE__ */ __name((property) => {
    const schema = Type.Number(property), compiler = compile(schema);
    return t.Transform(
      t.Union(
        [
          t.String({
            format: "numeric",
            default: 0
          }),
          t.Number(property)
        ],
        property
      )
    ).Decode((value) => {
      const number = +value;
      if (isNaN(number)) return value;
      if (property && !compiler.Check(number))
        throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  }, "Numeric"),
  NumericEnum(item, property) {
    const schema = Type.Enum(item, property), compiler = compile(schema);
    return t.Transform(
      t.Union([t.String({ format: "numeric" }), t.Number()], property)
    ).Decode((value) => {
      const number = +value;
      if (isNaN(number) || !compiler.Check(number)) throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  },
  Integer: /* @__PURE__ */ __name((property) => {
    const schema = Type.Integer(property), compiler = compile(schema);
    return t.Transform(
      t.Union(
        [
          t.String({
            format: "integer",
            default: 0
          }),
          Type.Integer(property)
        ],
        property
      )
    ).Decode((value) => {
      const number = +value;
      if (!compiler.Check(number)) throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  }, "Integer"),
  Date: /* @__PURE__ */ __name((property) => {
    const schema = Type.Date(property), compiler = compile(schema), _default = property?.default ? new Date(property.default) : void 0;
    return t.Transform(
      t.Union(
        [
          Type.Date(property),
          t.String({
            format: "date-time",
            default: _default?.toISOString()
          }),
          t.String({
            format: "date",
            default: _default?.toISOString()
          }),
          t.Number({ default: _default?.getTime() })
        ],
        property
      )
    ).Decode((value) => {
      if (typeof value == "number") {
        const date22 = new Date(value);
        if (!compiler.Check(date22)) throw compiler.Error(date22);
        return date22;
      }
      if (value instanceof Date) return value;
      const date2 = new Date(parseDateTimeEmptySpace(value));
      if (!date2 || isNaN(date2.getTime()))
        throw new ValidationError("property", schema, date2);
      if (!compiler.Check(date2)) throw compiler.Error(date2);
      return date2;
    }).Encode((value) => {
      if (value instanceof Date) return value.toISOString();
      if (typeof value == "string") {
        if (isNaN(
          new Date(parseDateTimeEmptySpace(value)).getTime()
        ))
          throw new ValidationError("property", schema, value);
        return value;
      }
      if (!compiler.Check(value)) throw compiler.Error(value);
      return value;
    });
  }, "Date"),
  BooleanString: /* @__PURE__ */ __name((property) => {
    const schema = Type.Boolean(property), compiler = compile(schema);
    return t.Transform(
      t.Union(
        [
          t.Boolean(property),
          t.String({
            format: "boolean",
            default: false
          })
        ],
        property
      )
    ).Decode((value) => {
      if (typeof value == "string") return value === "true";
      if (value !== void 0 && !compiler.Check(value))
        throw compiler.Error(value);
      return value;
    }).Encode((value) => value);
  }, "BooleanString"),
  ObjectString: /* @__PURE__ */ __name((properties, options) => {
    const schema = t.Object(properties, options), compiler = compile(schema);
    return t.Transform(
      t.Union(
        [
          t.String({
            format: "ObjectString",
            default: "{}"
          }),
          schema
        ],
        {
          elysiaMeta: "ObjectString"
        }
      )
    ).Decode((value) => {
      if (typeof value == "string") {
        if (value.charCodeAt(0) !== 123)
          throw new ValidationError("property", schema, value);
        if (!compiler.Check(value = tryParse(value, schema)))
          throw compiler.Error(value);
        return compiler.Decode(value);
      }
      return value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value)) throw compiler.Error(value);
      return original ?? JSON.stringify(value);
    });
  }, "ObjectString"),
  ArrayString: /* @__PURE__ */ __name((children = t.String(), options) => {
    const schema = t.Array(children, options), compiler = compile(schema), decode4 = /* @__PURE__ */ __name((value, isProperty = false) => {
      if (value.charCodeAt(0) === 91) {
        if (!compiler.Check(value = tryParse(value, schema)))
          throw compiler.Error(value);
        return compiler.Decode(value);
      }
      if (isProperty) return value;
      throw new ValidationError("property", schema, value);
    }, "decode");
    return t.Transform(
      t.Union([
        t.String({
          format: "ArrayString",
          default: options?.default
        }),
        schema
      ])
    ).Decode((value) => {
      if (Array.isArray(value)) {
        let values = [];
        for (let i = 0; i < value.length; i++) {
          const v = value[i];
          if (typeof v == "string") {
            const t2 = decode4(v, true);
            Array.isArray(t2) ? values = values.concat(t2) : values.push(t2);
            continue;
          }
          values.push(v);
        }
        return values;
      }
      return typeof value == "string" ? decode4(value) : value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw new ValidationError("property", schema, value);
      return original ?? JSON.stringify(value);
    });
  }, "ArrayString"),
  ArrayQuery: /* @__PURE__ */ __name((children = t.String(), options) => {
    const schema = t.Array(children, options), compiler = compile(schema), decode4 = /* @__PURE__ */ __name((value) => value.indexOf(",") !== -1 ? compiler.Decode(value.split(",")) : [value], "decode");
    return t.Transform(
      t.Union(
        [
          t.String({
            default: options?.default
          }),
          schema
        ],
        {
          elysiaMeta: "ArrayQuery"
        }
      )
    ).Decode((value) => {
      if (Array.isArray(value)) {
        let values = [];
        for (let i = 0; i < value.length; i++) {
          const v = value[i];
          if (typeof v == "string") {
            const t2 = decode4(v);
            Array.isArray(t2) ? values = values.concat(t2) : values.push(t2);
            continue;
          }
          values.push(v);
        }
        return values;
      }
      return typeof value == "string" ? decode4(value) : value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw new ValidationError("property", schema, value);
      return original ?? JSON.stringify(value);
    });
  }, "ArrayQuery"),
  File: createType(
    "File",
    validateFile
  ),
  Files: /* @__PURE__ */ __name((options = {}) => t.Transform(internalFiles(options)).Decode((value) => Array.isArray(value) ? value : [value]).Encode((value) => value), "Files"),
  Nullable: /* @__PURE__ */ __name((schema, options) => t.Union([schema, t.Null()], {
    ...options,
    nullable: true
  }), "Nullable"),
  /**
   * Allow Optional, Nullable and Undefined
   */
  MaybeEmpty: /* @__PURE__ */ __name((schema, options) => t.Union([schema, t.Null(), t.Undefined()], options), "MaybeEmpty"),
  Cookie: /* @__PURE__ */ __name((properties, {
    domain: domain2,
    expires,
    httpOnly,
    maxAge,
    path,
    priority,
    sameSite,
    secure,
    secrets,
    sign,
    ...options
  } = {}) => {
    const v = t.Object(properties, options);
    return v.config = {
      domain: domain2,
      expires,
      httpOnly,
      maxAge,
      path,
      priority,
      sameSite,
      secure,
      secrets,
      sign
    }, v;
  }, "Cookie"),
  UnionEnum: /* @__PURE__ */ __name((values, options = {}) => {
    const type = values.every((value) => typeof value == "string") ? { type: "string" } : values.every((value) => typeof value == "number") ? { type: "number" } : values.every((value) => value === null) ? { type: "null" } : {};
    if (values.some((x) => typeof x == "object" && x !== null))
      throw new Error("This type does not support objects or arrays");
    return {
      // default is need for generating error message
      default: values[0],
      ...options,
      [Kind]: "UnionEnum",
      ...type,
      enum: values
    };
  }, "UnionEnum"),
  NoValidate: /* @__PURE__ */ __name((v, enabled = true) => (v.noValidate = enabled, v), "NoValidate"),
  Form: /* @__PURE__ */ __name((v, options = {}) => {
    const schema = t.Object(v, {
      default: form({}),
      ...options
    }), compiler = compile(schema);
    return t.Union([
      schema,
      // @ts-expect-error
      internalFormData({
        compiler
      })
    ]);
  }, "Form"),
  ArrayBuffer(options = {}) {
    return {
      // default is need for generating error message
      default: [1, 2, 3],
      ...options,
      [Kind]: "ArrayBuffer"
    };
  },
  Uint8Array: /* @__PURE__ */ __name((options) => {
    const schema = Type.Uint8Array(options), compiler = compile(schema);
    return t.Transform(t.Union([t.ArrayBuffer(), Type.Uint8Array(options)])).Decode((value) => {
      if (value instanceof ArrayBuffer) {
        if (!compiler.Check(value = new Uint8Array(value)))
          throw compiler.Error(value);
        return value;
      }
      return value;
    }).Encode((value) => value);
  }, "Uint8Array")
};
t.BooleanString = ElysiaType.BooleanString, t.ObjectString = ElysiaType.ObjectString, t.ArrayString = ElysiaType.ArrayString, t.ArrayQuery = ElysiaType.ArrayQuery, t.Numeric = ElysiaType.Numeric, t.NumericEnum = ElysiaType.NumericEnum, t.Integer = ElysiaType.Integer, t.File = (arg) => (arg?.type && loadFileType(), ElysiaType.File({
  default: "File",
  ...arg,
  extension: arg?.type,
  type: "string",
  format: "binary"
})), t.Files = (arg) => (arg?.type && loadFileType(), ElysiaType.Files({
  ...arg,
  elysiaMeta: "Files",
  default: "Files",
  extension: arg?.type,
  type: "array",
  items: {
    ...arg,
    default: "Files",
    type: "string",
    format: "binary"
  }
})), t.Nullable = ElysiaType.Nullable, t.MaybeEmpty = ElysiaType.MaybeEmpty, t.Cookie = ElysiaType.Cookie, t.Date = ElysiaType.Date, t.UnionEnum = ElysiaType.UnionEnum, t.NoValidate = ElysiaType.NoValidate, t.Form = ElysiaType.Form, t.ArrayBuffer = ElysiaType.ArrayBuffer, t.Uint8Array = ElysiaType.Uint8Array;

// node_modules/elysia/dist/sucrose.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/adapter/cloudflare-worker/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/adapter/web-standard/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/adapter/web-standard/handler.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/adapter/utils.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/cookies.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var import_cookie = __toESM(require_dist(), 1);
var import_fast_decode_uri_component = __toESM(require_fast_decode_uri_component(), 1);
var hashString = /* @__PURE__ */ __name((str) => {
  let hash = 2166136261;
  const len = str.length;
  for (let i = 0; i < len; i++)
    hash ^= str.charCodeAt(i), hash = Math.imul(hash, 16777619);
  return hash >>> 0;
}, "hashString");
var Cookie = class {
  static {
    __name(this, "Cookie");
  }
  constructor(name, jar, initial = {}) {
    this.name = name;
    this.jar = jar;
    this.initial = initial;
  }
  get cookie() {
    return this.jar[this.name] ?? this.initial;
  }
  set cookie(jar) {
    this.name in this.jar || (this.jar[this.name] = this.initial), this.jar[this.name] = jar, this.valueHash = void 0;
  }
  get setCookie() {
    return this.name in this.jar || (this.jar[this.name] = this.initial), this.jar[this.name];
  }
  set setCookie(jar) {
    this.cookie = jar;
  }
  get value() {
    return this.cookie.value;
  }
  set value(value) {
    const current = this.cookie.value;
    if (current !== value) {
      if (typeof current == "object" && current !== null && typeof value == "object" && value !== null)
        try {
          const valueStr = JSON.stringify(value), newHash = hashString(valueStr);
          if (this.valueHash !== void 0 && this.valueHash !== newHash)
            this.valueHash = newHash;
          else {
            if (JSON.stringify(current) === valueStr) {
              this.valueHash = newHash;
              return;
            }
            this.valueHash = newHash;
          }
        } catch {
        }
      this.name in this.jar || (this.jar[this.name] = { ...this.initial }), this.jar[this.name].value = value;
    }
  }
  get expires() {
    return this.cookie.expires;
  }
  set expires(expires) {
    this.setCookie.expires = expires;
  }
  get maxAge() {
    return this.cookie.maxAge;
  }
  set maxAge(maxAge) {
    this.setCookie.maxAge = maxAge;
  }
  get domain() {
    return this.cookie.domain;
  }
  set domain(domain2) {
    this.setCookie.domain = domain2;
  }
  get path() {
    return this.cookie.path;
  }
  set path(path) {
    this.setCookie.path = path;
  }
  get secure() {
    return this.cookie.secure;
  }
  set secure(secure) {
    this.setCookie.secure = secure;
  }
  get httpOnly() {
    return this.cookie.httpOnly;
  }
  set httpOnly(httpOnly) {
    this.setCookie.httpOnly = httpOnly;
  }
  get sameSite() {
    return this.cookie.sameSite;
  }
  set sameSite(sameSite) {
    this.setCookie.sameSite = sameSite;
  }
  get priority() {
    return this.cookie.priority;
  }
  set priority(priority) {
    this.setCookie.priority = priority;
  }
  get partitioned() {
    return this.cookie.partitioned;
  }
  set partitioned(partitioned) {
    this.setCookie.partitioned = partitioned;
  }
  get secrets() {
    return this.cookie.secrets;
  }
  set secrets(secrets) {
    this.setCookie.secrets = secrets;
  }
  update(config2) {
    return this.setCookie = Object.assign(
      this.cookie,
      typeof config2 == "function" ? config2(this.cookie) : config2
    ), this;
  }
  set(config2) {
    return this.setCookie = Object.assign(
      {
        ...this.initial,
        value: this.value
      },
      typeof config2 == "function" ? config2(this.cookie) : config2
    ), this;
  }
  remove() {
    if (this.value !== void 0)
      return this.set({
        expires: /* @__PURE__ */ new Date(0),
        maxAge: 0,
        value: ""
      }), this;
  }
  toString() {
    return typeof this.value == "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
};
var createCookieJar = /* @__PURE__ */ __name((set2, store, initial) => (set2.cookie || (set2.cookie = {}), new Proxy(store, {
  get(_, key) {
    return key in store ? new Cookie(
      key,
      set2.cookie,
      Object.assign({}, initial ?? {}, store[key])
    ) : new Cookie(
      key,
      set2.cookie,
      Object.assign({}, initial)
    );
  }
})), "createCookieJar");
var parseCookie = /* @__PURE__ */ __name(async (set2, cookieString, {
  secrets,
  sign,
  ...initial
} = {}) => {
  if (!cookieString) return createCookieJar(set2, {}, initial);
  const isStringKey = typeof secrets == "string";
  sign && sign !== true && !Array.isArray(sign) && (sign = [sign]);
  const jar = {}, cookies = (0, import_cookie.parse)(cookieString);
  for (const [name, v] of Object.entries(cookies)) {
    if (v === void 0) continue;
    let value = (0, import_fast_decode_uri_component.default)(v);
    if (value) {
      const starts = value.charCodeAt(0), ends = value.charCodeAt(value.length - 1);
      if (starts === 123 && ends === 125 || starts === 91 && ends === 93)
        try {
          value = JSON.parse(value);
        } catch {
        }
    }
    if (sign === true || sign?.includes(name)) {
      if (!secrets)
        throw new Error("No secret is provided to cookie plugin");
      if (isStringKey) {
        const temp = await unsignCookie(value, secrets);
        if (temp === false) throw new InvalidCookieSignature(name);
        value = temp;
      } else {
        let decoded = true;
        for (let i = 0; i < secrets.length; i++) {
          const temp = await unsignCookie(value, secrets[i]);
          if (temp !== false) {
            decoded = true, value = temp;
            break;
          }
        }
        if (!decoded) throw new InvalidCookieSignature(name);
      }
    }
    jar[name] = {
      value
    };
  }
  return createCookieJar(set2, jar, initial);
}, "parseCookie");
var serializeCookie = /* @__PURE__ */ __name((cookies) => {
  if (!cookies || !isNotEmpty(cookies)) return;
  const set2 = [];
  for (const [key, property] of Object.entries(cookies)) {
    if (!key || !property) continue;
    const value = property.value;
    value != null && set2.push(
      (0, import_cookie.serialize)(
        key,
        typeof value == "object" ? JSON.stringify(value) : value + "",
        property
      )
    );
  }
  if (set2.length !== 0)
    return set2.length === 1 ? set2[0] : set2;
}, "serializeCookie");

// node_modules/elysia/dist/universal/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/universal/env.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var env3 = isBun ? Bun.env : typeof process < "u" && process?.env ? process.env : {};

// node_modules/elysia/dist/adapter/utils.mjs
var handleFile = /* @__PURE__ */ __name((response, set2) => {
  if (!isBun && response instanceof Promise)
    return response.then((res) => handleFile(res, set2));
  const size = response.size, immutable = set2 && (set2.status === 206 || set2.status === 304 || set2.status === 412 || set2.status === 416), defaultHeader = immutable ? {} : {
    "accept-ranges": "bytes",
    "content-range": size ? `bytes 0-${size - 1}/${size}` : void 0
  };
  if (!set2 && !size) return new Response(response);
  if (!set2)
    return new Response(response, {
      headers: defaultHeader
    });
  if (set2.headers instanceof Headers) {
    for (const key of Object.keys(defaultHeader))
      key in set2.headers && set2.headers.append(key, defaultHeader[key]);
    return immutable && (set2.headers.delete("content-length"), set2.headers.delete("accept-ranges")), new Response(response, set2);
  }
  return isNotEmpty(set2.headers) ? new Response(response, {
    status: set2.status,
    headers: Object.assign(defaultHeader, set2.headers)
  }) : new Response(response, {
    status: set2.status,
    headers: defaultHeader
  });
}, "handleFile");
var parseSetCookies = /* @__PURE__ */ __name((headers, setCookie) => {
  if (!headers) return headers;
  headers.delete("set-cookie");
  for (let i = 0; i < setCookie.length; i++) {
    const index = setCookie[i].indexOf("=");
    headers.append(
      "set-cookie",
      `${setCookie[i].slice(0, index)}=${setCookie[i].slice(index + 1) || ""}`
    );
  }
  return headers;
}, "parseSetCookies");
var responseToSetHeaders = /* @__PURE__ */ __name((response, set2) => {
  if (set2?.headers) {
    if (response)
      if (hasHeaderShorthand)
        Object.assign(set2.headers, response.headers.toJSON());
      else
        for (const [key, value] of response.headers.entries())
          key in set2.headers && (set2.headers[key] = value);
    return set2.status === 200 && (set2.status = response.status), set2.headers["content-encoding"] && delete set2.headers["content-encoding"], set2;
  }
  if (!response)
    return {
      headers: {},
      status: set2?.status ?? 200
    };
  if (hasHeaderShorthand)
    return set2 = {
      headers: response.headers.toJSON(),
      status: set2?.status ?? 200
    }, set2.headers["content-encoding"] && delete set2.headers["content-encoding"], set2;
  set2 = {
    headers: {},
    status: set2?.status ?? 200
  };
  for (const [key, value] of response.headers.entries())
    key !== "content-encoding" && key in set2.headers && (set2.headers[key] = value);
  return set2;
}, "responseToSetHeaders");
var allowRapidStream = env3.ELYSIA_RAPID_STREAM === "true";
var createStreamHandler = /* @__PURE__ */ __name(({ mapResponse: mapResponse3, mapCompactResponse: mapCompactResponse3 }) => async (generator, set2, request) => {
  let init = generator.next?.();
  if (set2 && handleSet(set2), init instanceof Promise && (init = await init), init?.value instanceof ReadableStream)
    generator = init.value;
  else if (init && (typeof init?.done > "u" || init?.done))
    return set2 ? mapResponse3(init.value, set2, request) : mapCompactResponse3(init.value, request);
  const isSSE = (
    // @ts-ignore First SSE result is wrapped with sse()
    init?.value?.sse ?? // @ts-ignore ReadableStream is wrapped with sse()
    generator?.sse ?? // User explicitly set content-type to SSE
    set2?.headers["content-type"]?.startsWith("text/event-stream")
  ), format = isSSE ? (data) => `data: ${data}

` : (data) => data, contentType = isSSE ? "text/event-stream" : init?.value && typeof init?.value == "object" ? "application/json" : "text/plain";
  set2?.headers ? (set2.headers["transfer-encoding"] || (set2.headers["transfer-encoding"] = "chunked"), set2.headers["content-type"] || (set2.headers["content-type"] = contentType), set2.headers["cache-control"] || (set2.headers["cache-control"] = "no-cache")) : set2 = {
    status: 200,
    headers: {
      "content-type": contentType,
      "transfer-encoding": "chunked",
      "cache-control": "no-cache",
      connection: "keep-alive"
    }
  };
  const isBrowser = request?.headers.has("Origin");
  return new Response(
    new ReadableStream({
      async start(controller) {
        let end = false;
        if (request?.signal?.addEventListener("abort", () => {
          end = true;
          try {
            controller.close();
          } catch {
          }
        }), !(!init || init.value instanceof ReadableStream)) {
          if (init.value !== void 0 && init.value !== null)
            if (init.value.toSSE)
              controller.enqueue(init.value.toSSE());
            else if (typeof init.value == "object")
              try {
                controller.enqueue(
                  format(JSON.stringify(init.value))
                );
              } catch {
                controller.enqueue(
                  format(init.value.toString())
                );
              }
            else controller.enqueue(format(init.value.toString()));
        }
        try {
          for await (const chunk of generator) {
            if (end) break;
            if (chunk != null)
              if (chunk.toSSE)
                controller.enqueue(chunk.toSSE());
              else {
                if (typeof chunk == "object")
                  try {
                    controller.enqueue(
                      format(JSON.stringify(chunk))
                    );
                  } catch {
                    controller.enqueue(
                      format(chunk.toString())
                    );
                  }
                else
                  controller.enqueue(format(chunk.toString()));
                !allowRapidStream && isBrowser && !isSSE && await new Promise(
                  (resolve) => setTimeout(() => resolve(), 0)
                );
              }
          }
        } catch (error) {
          console.warn(error);
        }
        try {
          controller.close();
        } catch {
        }
      }
    }),
    set2
  );
}, "createStreamHandler");
async function* streamResponse(response) {
  const body = response.body;
  if (!body) return;
  const reader = body.getReader(), decoder = new TextDecoder();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) break;
      typeof value == "string" ? yield value : yield decoder.decode(value);
    }
  } finally {
    reader.releaseLock();
  }
}
__name(streamResponse, "streamResponse");
var handleSet = /* @__PURE__ */ __name((set2) => {
  if (typeof set2.status == "string" && (set2.status = StatusMap[set2.status]), set2.cookie && isNotEmpty(set2.cookie)) {
    const cookie = serializeCookie(set2.cookie);
    cookie && (set2.headers["set-cookie"] = cookie);
  }
  set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"]) && (set2.headers = parseSetCookies(
    new Headers(set2.headers),
    set2.headers["set-cookie"]
  ));
}, "handleSet");
var createResponseHandler = /* @__PURE__ */ __name((handler) => {
  const handleStream3 = createStreamHandler(handler);
  return (response, set2, request) => {
    let isCookieSet = false;
    if (set2.headers instanceof Headers)
      for (const key of set2.headers.keys())
        if (key === "set-cookie") {
          if (isCookieSet) continue;
          isCookieSet = true;
          for (const cookie of set2.headers.getSetCookie())
            response.headers.append("set-cookie", cookie);
        } else response.headers.append(key, set2.headers?.get(key) ?? "");
    else
      for (const key in set2.headers)
        response.headers.append(
          key,
          set2.headers[key]
        );
    const status2 = set2.status ?? 200;
    if (response.status !== status2 && status2 !== 200 && (response.status <= 300 || response.status > 400)) {
      const newResponse = new Response(response.body, {
        headers: response.headers,
        status: set2.status
      });
      return !newResponse.headers.has("content-length") && newResponse.headers.get("transfer-encoding") === "chunked" ? handleStream3(
        streamResponse(newResponse),
        responseToSetHeaders(newResponse, set2),
        request
      ) : newResponse;
    }
    return !response.headers.has("content-length") && response.headers.get("transfer-encoding") === "chunked" ? handleStream3(
      streamResponse(response),
      responseToSetHeaders(response, set2),
      request
    ) : response;
  };
}, "createResponseHandler");
async function tee(source, branches = 2) {
  const buffer = [];
  let done = false, waiting = [];
  (async () => {
    for await (const value of source)
      buffer.push(value), waiting.forEach((w) => w.resolve()), waiting = [];
    done = true, waiting.forEach((w) => w.resolve());
  })();
  async function* makeIterator() {
    let i = 0;
    for (; ; )
      if (i < buffer.length)
        yield buffer[i++];
      else {
        if (done)
          return;
        await new Promise((resolve) => waiting.push({ resolve }));
      }
  }
  __name(makeIterator, "makeIterator");
  return Array.from({ length: branches }, makeIterator);
}
__name(tee, "tee");

// node_modules/elysia/dist/adapter/web-standard/handler.mjs
var handleElysiaFile = /* @__PURE__ */ __name((file2, set2 = {
  headers: {}
}) => {
  const path = file2.path, contentType = mime[path.slice(path.lastIndexOf(".") + 1)];
  return contentType && (set2.headers["content-type"] = contentType), file2.stats && set2.status !== 206 && set2.status !== 304 && set2.status !== 412 && set2.status !== 416 ? file2.stats.then((stat2) => {
    const size = stat2.size;
    return size !== void 0 && (set2.headers["content-range"] = `bytes 0-${size - 1}/${size}`, set2.headers["content-length"] = size), handleFile(file2.value, set2);
  }) : handleFile(file2.value, set2);
}, "handleElysiaFile");
var mapResponse = /* @__PURE__ */ __name((response, set2, request) => {
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
    switch (handleSet(set2), response?.constructor?.name) {
      case "String":
        return set2.headers["content-type"] = "text/plain", new Response(response, set2);
      case "Array":
      case "Object":
        return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
      case "ElysiaFile":
        return handleElysiaFile(response, set2);
      case "File":
        return handleFile(response, set2);
      case "Blob":
        return handleFile(response, set2);
      case "ElysiaCustomStatusResponse":
        return set2.status = response.code, mapResponse(
          response.response,
          set2,
          request
        );
      case void 0:
        return response ? new Response(JSON.stringify(response), set2) : new Response("", set2);
      case "Response":
        return handleResponse(response, set2, request);
      case "Error":
        return errorToResponse(response, set2);
      case "Promise":
        return response.then(
          (x) => mapResponse(x, set2, request)
        );
      case "Function":
        return mapResponse(response(), set2, request);
      case "Number":
      case "Boolean":
        return new Response(
          response.toString(),
          set2
        );
      case "Cookie":
        return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response, set2);
      default:
        if (response instanceof Response)
          return handleResponse(response, set2, request);
        if (response instanceof Promise)
          return response.then((x) => mapResponse(x, set2));
        if (response instanceof Error)
          return errorToResponse(response, set2);
        if (response instanceof ElysiaCustomStatusResponse)
          return set2.status = response.code, mapResponse(
            response.response,
            set2,
            request
          );
        if (
          // @ts-expect-error
          typeof response?.next == "function" || response instanceof ReadableStream
        )
          return handleStream(response, set2, request);
        if (typeof response?.then == "function")
          return response.then((x) => mapResponse(x, set2));
        if (typeof response?.toResponse == "function")
          return mapResponse(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91)
            return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(
              JSON.stringify(response),
              set2
            );
        }
        return new Response(response, set2);
    }
  return (
    // @ts-expect-error
    typeof response?.next == "function" || response instanceof ReadableStream ? handleStream(response, set2, request) : mapCompactResponse(response, request)
  );
}, "mapResponse");
var mapEarlyResponse = /* @__PURE__ */ __name((response, set2, request) => {
  if (response != null)
    if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
      switch (handleSet(set2), response?.constructor?.name) {
        case "String":
          return set2.headers["content-type"] = "text/plain", new Response(response, set2);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleElysiaFile(response, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse(
            response.response,
            set2,
            request
          );
        case void 0:
          return response ? new Response(JSON.stringify(response), set2) : void 0;
        case "Response":
          return handleResponse(response, set2, request);
        case "Promise":
          return response.then(
            (x) => mapEarlyResponse(x, set2)
          );
        case "Error":
          return errorToResponse(response, set2);
        case "Function":
          return mapEarlyResponse(response(), set2);
        case "Number":
        case "Boolean":
          return new Response(
            response.toString(),
            set2
          );
        case "FormData":
          return new Response(response);
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        default:
          if (response instanceof Response)
            return handleResponse(response, set2, request);
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse(x, set2));
          if (response instanceof Error)
            return errorToResponse(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse(
              response.response,
              set2,
              request
            );
          if (
            // @ts-expect-error
            typeof response?.next == "function" || response instanceof ReadableStream
          )
            return handleStream(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(
                JSON.stringify(response),
                set2
              );
          }
          return new Response(response, set2);
      }
    else
      switch (response?.constructor?.name) {
        case "String":
          return set2.headers["content-type"] = "text/plain", new Response(response);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleElysiaFile(response, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse(
            response.response,
            set2,
            request
          );
        case void 0:
          return response ? new Response(JSON.stringify(response), {
            headers: {
              "content-type": "application/json"
            }
          }) : new Response("");
        case "Response":
          return response;
        case "Promise":
          return response.then((x) => {
            const r = mapEarlyResponse(x, set2);
            if (r !== void 0) return r;
          });
        case "Error":
          return errorToResponse(response, set2);
        case "Function":
          return mapCompactResponse(response(), request);
        case "Number":
        case "Boolean":
          return new Response(response.toString());
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        case "FormData":
          return new Response(response);
        default:
          if (response instanceof Response) return response;
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse(x, set2));
          if (response instanceof Error)
            return errorToResponse(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse(
              response.response,
              set2,
              request
            );
          if (
            // @ts-expect-error
            typeof response?.next == "function" || response instanceof ReadableStream
          )
            return handleStream(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(
                JSON.stringify(response),
                set2
              );
          }
          return new Response(response);
      }
}, "mapEarlyResponse");
var mapCompactResponse = /* @__PURE__ */ __name((response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response, {
        headers: {
          "Content-Type": "text/plain"
        }
      });
    case "Object":
    case "Array":
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json"
        }
      });
    case "ElysiaFile":
      return handleElysiaFile(response);
    case "File":
      return handleFile(response);
    case "Blob":
      return handleFile(response);
    case "ElysiaCustomStatusResponse":
      return mapResponse(
        response.response,
        {
          status: response.code,
          headers: {}
        }
      );
    case void 0:
      return response ? new Response(JSON.stringify(response), {
        headers: {
          "content-type": "application/json"
        }
      }) : new Response("");
    case "Response":
      return response;
    case "Error":
      return errorToResponse(response);
    case "Promise":
      return response.then(
        (x) => mapCompactResponse(x, request)
      );
    // ? Maybe response or Blob
    case "Function":
      return mapCompactResponse(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response) return response;
      if (response instanceof Promise)
        return response.then(
          (x) => mapCompactResponse(x, request)
        );
      if (response instanceof Error)
        return errorToResponse(response);
      if (response instanceof ElysiaCustomStatusResponse)
        return mapResponse(
          response.response,
          {
            status: response.code,
            headers: {}
          }
        );
      if (
        // @ts-expect-error
        typeof response?.next == "function" || response instanceof ReadableStream
      )
        return handleStream(response, void 0, request);
      if (typeof response?.then == "function")
        return response.then((x) => mapResponse(x, set));
      if (typeof response?.toResponse == "function")
        return mapCompactResponse(response.toResponse());
      if ("charCodeAt" in response) {
        const code = response.charCodeAt(0);
        if (code === 123 || code === 91)
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
      }
      return new Response(response);
  }
}, "mapCompactResponse");
var errorToResponse = /* @__PURE__ */ __name((error, set2) => {
  if (typeof error?.toResponse == "function") {
    const raw = error.toResponse(), targetSet = set2 ?? { headers: {}, status: 200, redirect: "" }, apply = /* @__PURE__ */ __name((resolved) => (resolved instanceof Response && (targetSet.status = resolved.status), mapResponse(resolved, targetSet)), "apply");
    return typeof raw?.then == "function" ? raw.then(apply) : apply(raw);
  }
  return new Response(
    JSON.stringify({
      name: error?.name,
      message: error?.message,
      cause: error?.cause
    }),
    {
      status: set2?.status !== 200 ? set2?.status ?? 500 : 500,
      headers: set2?.headers
    }
  );
}, "errorToResponse");
var createStaticHandler = /* @__PURE__ */ __name((handle, hooks, setHeaders = {}) => {
  if (typeof handle == "function") return;
  const response = mapResponse(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return () => response.clone();
}, "createStaticHandler");
var handleResponse = createResponseHandler({
  mapResponse,
  mapCompactResponse
});
var handleStream = createStreamHandler({
  mapResponse,
  mapCompactResponse
});

// node_modules/elysia/dist/adapter/web-standard/index.mjs
var WebStandardAdapter = {
  name: "web-standard",
  isWebStandard: true,
  handler: {
    mapResponse,
    mapEarlyResponse,
    mapCompactResponse,
    createStaticHandler
  },
  composeHandler: {
    mapResponseContext: "c.request",
    preferWebstandardHeaders: true,
    // @ts-ignore Bun specific
    headers: `c.headers={}
for(const [k,v] of c.request.headers.entries())c.headers[k]=v
`,
    parser: {
      json(isOptional2) {
        return isOptional2 ? `try{c.body=await c.request.json()}catch{}
` : `c.body=await c.request.json()
`;
      },
      text() {
        return `c.body=await c.request.text()
`;
      },
      urlencoded() {
        return `c.body=parseQuery(await c.request.text())
`;
      },
      arrayBuffer() {
        return `c.body=await c.request.arrayBuffer()
`;
      },
      formData(isOptional2) {
        let fnLiteral = `
c.body={}
`;
        return isOptional2 ? fnLiteral += "let form;try{form=await c.request.formData()}catch{}" : fnLiteral += `const form=await c.request.formData()
`, fnLiteral + `for(const key of form.keys()){if(c.body[key]) continue
const value=form.getAll(key)
if(value.length===1)c.body[key]=value[0]
else c.body[key]=value}`;
      }
    }
  },
  async stop(app2, closeActiveConnections) {
    if (!app2.server)
      throw new Error(
        "Elysia isn't running. Call `app.listen` to start the server."
      );
    if (app2.server && (await app2.server.stop(closeActiveConnections), app2.server = null, app2.event.stop?.length))
      for (let i = 0; i < app2.event.stop.length; i++)
        app2.event.stop[i].fn(app2);
  },
  composeGeneralHandler: {
    parameters: "r",
    createContext(app2) {
      let decoratorsLiteral = "", fnLiteral = "";
      const defaultHeaders = app2.setHeaders;
      for (const key of Object.keys(app2.decorator))
        decoratorsLiteral += `,'${key}':decorator['${key}']`;
      const standardHostname = app2.config.handler?.standardHostname ?? true, hasTrace = !!app2.event.trace?.length;
      return fnLiteral += `const u=r.url,s=u.indexOf('/',${standardHostname ? 11 : 7}),qi=u.indexOf('?',s+1),p=u.substring(s,qi===-1?undefined:qi)
`, hasTrace && (fnLiteral += `const id=randomId()
`), fnLiteral += "const c={request:r,store,qi,path:p,url:u,redirect,status,set:{headers:", fnLiteral += Object.keys(defaultHeaders ?? {}).length ? "Object.assign({},app.setHeaders)" : "Object.create(null)", fnLiteral += ",status:200}", app2.inference.server && (fnLiteral += ",get server(){return app.getServer()}"), hasTrace && (fnLiteral += ",[ELYSIA_REQUEST_ID]:id"), fnLiteral += decoratorsLiteral, fnLiteral += `}
`, fnLiteral;
    },
    error404(hasEventHook, hasErrorHook, afterHandle = "") {
      let findDynamicRoute = "if(route===null){" + afterHandle + (hasErrorHook ? "" : "c.set.status=404") + `
return `;
      return hasErrorHook ? findDynamicRoute += `app.handleError(c,notFound,false,${this.parameters})` : findDynamicRoute += hasEventHook ? "c.response=c.responseValue=new Response(error404Message,{status:c.set.status===200?404:c.set.status,headers:c.set.headers})" : "c.response=c.responseValue=error404.clone()", findDynamicRoute += "}", {
        declare: hasErrorHook ? "" : `const error404Message=notFound.message.toString()
const error404=new Response(error404Message,{status:404})
`,
        code: findDynamicRoute
      };
    }
  },
  composeError: {
    mapResponseContext: "",
    validationError: "set.headers['content-type']='application/json';return mapResponse(error.message,set)",
    unknownError: "set.status=error.status??set.status??500;return mapResponse(error.message,set)"
  },
  listen() {
    return () => {
      throw new Error(
        "WebStandard does not support listen, you might want to export default Elysia.fetch instead"
      );
    };
  }
};

// node_modules/elysia/dist/adapter/cloudflare-worker/index.mjs
function isCloudflareWorker() {
  try {
    if (
      // @ts-ignore
      typeof caches < "u" && // @ts-ignore
      typeof caches.default < "u" || typeof WebSocketPair < "u"
    ) return true;
  } catch {
    return false;
  }
  return false;
}
__name(isCloudflareWorker, "isCloudflareWorker");
var CloudflareAdapter = {
  ...WebStandardAdapter,
  name: "cloudflare-worker",
  composeGeneralHandler: {
    ...WebStandardAdapter.composeGeneralHandler,
    error404(hasEventHook, hasErrorHook, afterHandle) {
      const { code } = WebStandardAdapter.composeGeneralHandler.error404(
        hasEventHook,
        hasErrorHook,
        afterHandle
      );
      return {
        code,
        declare: hasErrorHook ? "" : (
          // This only work because Elysia only clone the Response via .clone()
          `const error404Message=notFound.message.toString()
const error404={clone:()=>new Response(error404Message,{status:404})}
`
        )
      };
    }
  },
  beforeCompile(app2) {
    for (const route of app2.routes) route.compile();
  },
  listen(app2) {
    return (options, callback) => {
      console.warn(
        "Cloudflare Worker does not support listen method. Please export default Elysia instance instead."
      ), app2.compile();
    };
  }
};

// node_modules/elysia/dist/sucrose.mjs
var separateFunction = /* @__PURE__ */ __name((code) => {
  code.startsWith("async") && (code = code.slice(5)), code = code.trimStart();
  let index = -1;
  if (code.charCodeAt(0) === 40 && (index = code.indexOf("=>", code.indexOf(")")), index !== -1)) {
    let bracketEndIndex = index;
    for (; bracketEndIndex > 0 && code.charCodeAt(--bracketEndIndex) !== 41; )
      ;
    let body = code.slice(index + 2);
    return body.charCodeAt(0) === 32 && (body = body.trimStart()), [
      code.slice(1, bracketEndIndex),
      body,
      {
        isArrowReturn: body.charCodeAt(0) !== 123
      }
    ];
  }
  if (/^(\w+)=>/g.test(code) && (index = code.indexOf("=>"), index !== -1)) {
    let body = code.slice(index + 2);
    return body.charCodeAt(0) === 32 && (body = body.trimStart()), [
      code.slice(0, index),
      body,
      {
        isArrowReturn: body.charCodeAt(0) !== 123
      }
    ];
  }
  if (code.startsWith("function")) {
    index = code.indexOf("(");
    const end = code.indexOf(")");
    return [
      code.slice(index + 1, end),
      code.slice(end + 2),
      {
        isArrowReturn: false
      }
    ];
  }
  const start = code.indexOf("(");
  if (start !== -1) {
    const sep = code.indexOf(`
`, 2), parameter = code.slice(0, sep), end = parameter.lastIndexOf(")") + 1, body = code.slice(sep + 1);
    return [
      parameter.slice(start, end),
      "{" + body,
      {
        isArrowReturn: false
      }
    ];
  }
  const x = code.split(`
`, 2);
  return [x[0], x[1], { isArrowReturn: false }];
}, "separateFunction");
var bracketPairRange = /* @__PURE__ */ __name((parameter) => {
  const start = parameter.indexOf("{");
  if (start === -1) return [-1, 0];
  let end = start + 1, deep = 1;
  for (; end < parameter.length; end++) {
    const char = parameter.charCodeAt(end);
    if (char === 123 ? deep++ : char === 125 && deep--, deep === 0) break;
  }
  return deep !== 0 ? [0, parameter.length] : [start, end + 1];
}, "bracketPairRange");
var bracketPairRangeReverse = /* @__PURE__ */ __name((parameter) => {
  const end = parameter.lastIndexOf("}");
  if (end === -1) return [-1, 0];
  let start = end - 1, deep = 1;
  for (; start >= 0; start--) {
    const char = parameter.charCodeAt(start);
    if (char === 125 ? deep++ : char === 123 && deep--, deep === 0) break;
  }
  return deep !== 0 ? [-1, 0] : [start, end + 1];
}, "bracketPairRangeReverse");
var removeColonAlias = /* @__PURE__ */ __name((parameter) => {
  for (; ; ) {
    const start = parameter.indexOf(":");
    if (start === -1) break;
    let end = parameter.indexOf(",", start);
    end === -1 && (end = parameter.indexOf("}", start) - 1), end === -2 && (end = parameter.length), parameter = parameter.slice(0, start) + parameter.slice(end);
  }
  return parameter;
}, "removeColonAlias");
var retrieveRootParamters = /* @__PURE__ */ __name((parameter) => {
  let hasParenthesis = false;
  parameter.charCodeAt(0) === 40 && (parameter = parameter.slice(1, -1)), parameter.charCodeAt(0) === 123 && (hasParenthesis = true, parameter = parameter.slice(1, -1)), parameter = parameter.replace(/( |\t|\n)/g, "").trim();
  let parameters = [];
  for (; ; ) {
    let [start, end] = bracketPairRange(parameter);
    if (start === -1) break;
    parameters.push(parameter.slice(0, start - 1)), parameter.charCodeAt(end) === 44 && end++, parameter = parameter.slice(end);
  }
  parameter = removeColonAlias(parameter), parameter && (parameters = parameters.concat(parameter.split(",")));
  const parameterMap = /* @__PURE__ */ Object.create(null);
  for (const p of parameters) {
    if (p.indexOf(",") === -1) {
      parameterMap[p] = true;
      continue;
    }
    for (const q of p.split(",")) parameterMap[q.trim()] = true;
  }
  return {
    hasParenthesis,
    parameters: parameterMap
  };
}, "retrieveRootParamters");
var findParameterReference = /* @__PURE__ */ __name((parameter, inference) => {
  const { parameters, hasParenthesis } = retrieveRootParamters(parameter);
  return parameters.query && (inference.query = true), parameters.headers && (inference.headers = true), parameters.body && (inference.body = true), parameters.cookie && (inference.cookie = true), parameters.set && (inference.set = true), parameters.server && (inference.server = true), parameters.route && (inference.route = true), parameters.url && (inference.url = true), parameters.path && (inference.path = true), hasParenthesis ? `{ ${Object.keys(parameters).join(", ")} }` : Object.keys(parameters).join(", ");
}, "findParameterReference");
var findEndIndex = /* @__PURE__ */ __name((type, content, index) => {
  const regex2 = new RegExp(
    `${type.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\n\\t,; ]`
  );
  index !== void 0 && (regex2.lastIndex = index);
  const match = regex2.exec(content);
  return match ? match.index : -1;
}, "findEndIndex");
var findAlias = /* @__PURE__ */ __name((type, body, depth = 0) => {
  if (depth > 5) return [];
  const aliases = [];
  let content = body;
  for (; ; ) {
    let index = findEndIndex(" = " + type, content);
    if (index === -1 && (index = findEndIndex("=" + type, content)), index === -1) {
      let lastIndex = content.indexOf(" = " + type);
      if (lastIndex === -1 && (lastIndex = content.indexOf("=" + type)), lastIndex + 3 + type.length !== content.length) break;
      index = lastIndex;
    }
    const part = content.slice(0, index), lastPart = part.lastIndexOf(" ");
    let variable = part.slice(lastPart !== -1 ? lastPart + 1 : -1);
    if (variable === "}") {
      const [start, end] = bracketPairRangeReverse(part);
      aliases.push(removeColonAlias(content.slice(start, end))), content = content.slice(index + 3 + type.length);
      continue;
    }
    for (; variable.charCodeAt(0) === 44; ) variable = variable.slice(1);
    for (; variable.charCodeAt(0) === 9; ) variable = variable.slice(1);
    variable.includes("(") || aliases.push(variable), content = content.slice(index + 3 + type.length);
  }
  for (const alias of aliases) {
    if (alias.charCodeAt(0) === 123) continue;
    const deepAlias = findAlias(alias, body);
    deepAlias.length > 0 && aliases.push(...deepAlias);
  }
  return aliases;
}, "findAlias");
var extractMainParameter = /* @__PURE__ */ __name((parameter) => {
  if (!parameter) return;
  if (parameter.charCodeAt(0) !== 123) return parameter;
  if (parameter = parameter.slice(2, -2), !parameter.includes(","))
    return parameter.indexOf("...") !== -1 ? parameter.slice(parameter.indexOf("...") + 3) : void 0;
  const spreadIndex = parameter.indexOf("...");
  if (spreadIndex !== -1)
    return parameter.slice(spreadIndex + 3).trimEnd();
}, "extractMainParameter");
var inferBodyReference = /* @__PURE__ */ __name((code, aliases, inference) => {
  const access = /* @__PURE__ */ __name((type, alias) => new RegExp(
    `${alias}\\.(${type})|${alias}\\["${type}"\\]|${alias}\\['${type}'\\]`
  ).test(code), "access");
  for (const alias of aliases)
    if (alias) {
      if (alias.charCodeAt(0) === 123) {
        const parameters = retrieveRootParamters(alias).parameters;
        parameters.query && (inference.query = true), parameters.headers && (inference.headers = true), parameters.body && (inference.body = true), parameters.cookie && (inference.cookie = true), parameters.set && (inference.set = true), parameters.server && (inference.server = true), parameters.url && (inference.url = true), parameters.route && (inference.route = true), parameters.path && (inference.path = true);
        continue;
      }
      if (!inference.query && (access("query", alias) || code.includes("return " + alias) || code.includes("return " + alias + ".query")) && (inference.query = true), !inference.headers && access("headers", alias) && (inference.headers = true), !inference.body && access("body", alias) && (inference.body = true), !inference.cookie && access("cookie", alias) && (inference.cookie = true), !inference.set && access("set", alias) && (inference.set = true), !inference.server && access("server", alias) && (inference.server = true), !inference.route && access("route", alias) && (inference.route = true), !inference.url && access("url", alias) && (inference.url = true), !inference.path && access("path", alias) && (inference.path = true), inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.route && inference.url && inference.path)
        break;
    }
  return aliases;
}, "inferBodyReference");
var isContextPassToFunction = /* @__PURE__ */ __name((context, body, inference) => {
  try {
    const captureFunction = new RegExp(`\\w\\((.*?)?${context}`, "gs");
    captureFunction.test(body);
    const nextChar = body.charCodeAt(captureFunction.lastIndex);
    return nextChar === 41 || nextChar === 44 ? (inference.query = true, inference.headers = true, inference.body = true, inference.cookie = true, inference.set = true, inference.server = true, inference.url = true, inference.route = true, inference.path = true, true) : false;
  } catch {
    return console.log(
      "[Sucrose] warning: unexpected isContextPassToFunction error, you may continue development as usual but please report the following to maintainers:"
    ), console.log("--- body ---"), console.log(body), console.log("--- context ---"), console.log(context), true;
  }
}, "isContextPassToFunction");
var pendingGC;
var caches2 = {};
var clearSucroseCache = /* @__PURE__ */ __name((delay) => {
  delay === null || isCloudflareWorker() || (delay === void 0 && (delay = 4 * 60 * 1e3 + 55 * 1e3), pendingGC && clearTimeout(pendingGC), pendingGC = setTimeout(() => {
    caches2 = {}, pendingGC = void 0, isBun && Bun.gc(false);
  }, delay));
}, "clearSucroseCache");
var mergeInference = /* @__PURE__ */ __name((a, b) => ({
  body: a.body || b.body,
  cookie: a.cookie || b.cookie,
  headers: a.headers || b.headers,
  query: a.query || b.query,
  set: a.set || b.set,
  server: a.server || b.server,
  url: a.url || b.url,
  route: a.route || b.route,
  path: a.path || b.path
}), "mergeInference");
var sucrose = /* @__PURE__ */ __name((lifeCycle, inference = {
  query: false,
  headers: false,
  body: false,
  cookie: false,
  set: false,
  server: false,
  url: false,
  route: false,
  path: false
}, settings = {}) => {
  const events = [];
  lifeCycle.request?.length && events.push(...lifeCycle.request), lifeCycle.beforeHandle?.length && events.push(...lifeCycle.beforeHandle), lifeCycle.parse?.length && events.push(...lifeCycle.parse), lifeCycle.error?.length && events.push(...lifeCycle.error), lifeCycle.transform?.length && events.push(...lifeCycle.transform), lifeCycle.afterHandle?.length && events.push(...lifeCycle.afterHandle), lifeCycle.mapResponse?.length && events.push(...lifeCycle.mapResponse), lifeCycle.afterResponse?.length && events.push(...lifeCycle.afterResponse), lifeCycle.handler && typeof lifeCycle.handler == "function" && events.push(lifeCycle.handler);
  for (let i = 0; i < events.length; i++) {
    const e = events[i];
    if (!e) continue;
    const event = typeof e == "object" ? e.fn : e;
    if (typeof event != "function") continue;
    const content = event.toString(), key = checksum(content), cachedInference = caches2[key];
    if (cachedInference) {
      inference = mergeInference(inference, cachedInference);
      continue;
    }
    clearSucroseCache(settings.gcTime);
    const fnInference = {
      query: false,
      headers: false,
      body: false,
      cookie: false,
      set: false,
      server: false,
      url: false,
      route: false,
      path: false
    }, [parameter, body] = separateFunction(content), rootParameters = findParameterReference(parameter, fnInference), mainParameter = extractMainParameter(rootParameters);
    if (mainParameter) {
      const aliases = findAlias(mainParameter, body.slice(1, -1));
      aliases.splice(0, -1, mainParameter);
      let code = body;
      code.charCodeAt(0) === 123 && code.charCodeAt(body.length - 1) === 125 && (code = code.slice(1, -1)), isContextPassToFunction(mainParameter, code, fnInference) || inferBodyReference(code, aliases, fnInference), !fnInference.query && code.includes("return " + mainParameter + ".query") && (fnInference.query = true);
    }
    if (caches2[key] || (caches2[key] = fnInference), inference = mergeInference(inference, fnInference), inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.url && inference.route && inference.path)
      break;
  }
  return inference;
}, "sucrose");

// node_modules/elysia/dist/adapter/bun/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/adapter/bun/compose.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/elysia/dist/adapter/bun/handler.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var mapResponse2 = /* @__PURE__ */ __name((response, set2, request) => {
  if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
    switch (handleSet(set2), response?.constructor?.name) {
      case "String":
        return new Response(response, set2);
      case "Array":
      case "Object":
        return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
      case "ElysiaFile":
        return handleFile(
          response.value,
          set2
        );
      case "File":
        return handleFile(response, set2);
      case "Blob":
        return handleFile(response, set2);
      case "ElysiaCustomStatusResponse":
        return set2.status = response.code, mapResponse2(
          response.response,
          set2,
          request
        );
      case void 0:
        return response ? new Response(JSON.stringify(response), set2) : new Response("", set2);
      case "Response":
        return handleResponse2(response, set2, request);
      case "Error":
        return errorToResponse2(response, set2);
      case "Promise":
        return response.then(
          (x) => mapResponse2(x, set2, request)
        );
      case "Function":
        return mapResponse2(response(), set2, request);
      case "Number":
      case "Boolean":
        return new Response(
          response.toString(),
          set2
        );
      case "Cookie":
        return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
      case "FormData":
        return new Response(response, set2);
      default:
        if (response instanceof Response)
          return handleResponse2(response, set2, request);
        if (response instanceof Promise)
          return response.then((x) => mapResponse2(x, set2));
        if (response instanceof Error)
          return errorToResponse2(response, set2);
        if (response instanceof ElysiaCustomStatusResponse)
          return set2.status = response.code, mapResponse2(
            response.response,
            set2,
            request
          );
        if (
          // @ts-expect-error
          typeof response?.next == "function" || response instanceof ReadableStream
        )
          return handleStream2(response, set2, request);
        if (typeof response?.then == "function")
          return response.then((x) => mapResponse2(x, set2));
        if (typeof response?.toResponse == "function")
          return mapResponse2(response.toResponse(), set2);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91)
            return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(
              JSON.stringify(response),
              set2
            );
        }
        return new Response(response, set2);
    }
  return (
    // @ts-expect-error
    typeof response?.next == "function" || response instanceof ReadableStream ? handleStream2(response, set2, request) : mapCompactResponse2(response, request)
  );
}, "mapResponse");
var mapEarlyResponse2 = /* @__PURE__ */ __name((response, set2, request) => {
  if (response != null)
    if (isNotEmpty(set2.headers) || set2.status !== 200 || set2.cookie)
      switch (handleSet(set2), response?.constructor?.name) {
        case "String":
          return new Response(response, set2);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleFile(response.value, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse2(
            response.response,
            set2,
            request
          );
        case void 0:
          return response ? new Response(JSON.stringify(response), set2) : void 0;
        case "Response":
          return handleResponse2(response, set2, request);
        case "Promise":
          return response.then(
            (x) => mapEarlyResponse2(x, set2)
          );
        case "Error":
          return errorToResponse2(response, set2);
        case "Function":
          return mapEarlyResponse2(response(), set2);
        case "Number":
        case "Boolean":
          return new Response(
            response.toString(),
            set2
          );
        case "FormData":
          return new Response(response);
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        default:
          if (response instanceof Response)
            return handleResponse2(response, set2, request);
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (response instanceof Error)
            return errorToResponse2(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse2(
              response.response,
              set2,
              request
            );
          if (
            // @ts-expect-error
            typeof response?.next == "function" || response instanceof ReadableStream
          )
            return handleStream2(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse2(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(
                JSON.stringify(response),
                set2
              );
          }
          return new Response(response, set2);
      }
    else
      switch (response?.constructor?.name) {
        case "String":
          return new Response(response);
        case "Array":
        case "Object":
          return set2.headers["content-type"] = "application/json", new Response(JSON.stringify(response), set2);
        case "ElysiaFile":
          return handleFile(response.value, set2);
        case "File":
          return handleFile(response, set2);
        case "Blob":
          return handleFile(response, set2);
        case "ElysiaCustomStatusResponse":
          return set2.status = response.code, mapEarlyResponse2(
            response.response,
            set2,
            request
          );
        case void 0:
          return response ? new Response(JSON.stringify(response), {
            headers: {
              "content-type": "application/json"
            }
          }) : new Response("");
        case "Response":
          return response;
        case "Promise":
          return response.then((x) => {
            const r = mapEarlyResponse2(x, set2);
            if (r !== void 0) return r;
          });
        case "Error":
          return errorToResponse2(response, set2);
        case "Function":
          return mapCompactResponse2(response(), request);
        case "Number":
        case "Boolean":
          return new Response(response.toString());
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set2) : new Response(response?.toString(), set2);
        case "FormData":
          return new Response(response);
        default:
          if (response instanceof Response) return response;
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (response instanceof Error)
            return errorToResponse2(response, set2);
          if (response instanceof ElysiaCustomStatusResponse)
            return set2.status = response.code, mapEarlyResponse2(
              response.response,
              set2,
              request
            );
          if (
            // @ts-expect-error
            typeof response?.next == "function" || response instanceof ReadableStream
          )
            return handleStream2(response, set2, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse2(x, set2));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse2(response.toResponse(), set2);
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set2.headers["Content-Type"] || (set2.headers["Content-Type"] = "application/json"), new Response(
                JSON.stringify(response),
                set2
              );
          }
          return new Response(response);
      }
}, "mapEarlyResponse");
var mapCompactResponse2 = /* @__PURE__ */ __name((response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response);
    case "Object":
    case "Array":
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json"
        }
      });
    case "ElysiaFile":
      return handleFile(response.value);
    case "File":
      return handleFile(response);
    case "Blob":
      return handleFile(response);
    case "ElysiaCustomStatusResponse":
      return mapResponse2(
        response.response,
        {
          status: response.code,
          headers: {}
        }
      );
    case void 0:
      return response ? new Response(JSON.stringify(response), {
        headers: {
          "content-type": "application/json"
        }
      }) : new Response("");
    case "Response":
      return response;
    case "Error":
      return errorToResponse2(response);
    case "Promise":
      return response.then(
        (x) => mapCompactResponse2(x, request)
      );
    // ? Maybe response or Blob
    case "Function":
      return mapCompactResponse2(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response) return response;
      if (response instanceof Promise)
        return response.then(
          (x) => mapCompactResponse2(x, request)
        );
      if (response instanceof Error)
        return errorToResponse2(response);
      if (response instanceof ElysiaCustomStatusResponse)
        return mapResponse2(
          response.response,
          {
            status: response.code,
            headers: {}
          }
        );
      if (
        // @ts-expect-error
        typeof response?.next == "function" || response instanceof ReadableStream
      )
        return handleStream2(response, void 0, request);
      if (typeof response?.then == "function")
        return response.then((x) => mapResponse2(x, set));
      if (typeof response?.toResponse == "function")
        return mapCompactResponse2(response.toResponse());
      if ("charCodeAt" in response) {
        const code = response.charCodeAt(0);
        if (code === 123 || code === 91)
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
      }
      return new Response(response);
  }
}, "mapCompactResponse");
var errorToResponse2 = /* @__PURE__ */ __name((error, set2) => {
  if (typeof error?.toResponse == "function") {
    const raw = error.toResponse(), targetSet = set2 ?? { headers: {}, status: 200, redirect: "" }, apply = /* @__PURE__ */ __name((resolved) => (resolved instanceof Response && (targetSet.status = resolved.status), mapResponse2(resolved, targetSet)), "apply");
    return typeof raw?.then == "function" ? raw.then(apply) : apply(raw);
  }
  return new Response(
    JSON.stringify({
      name: error?.name,
      message: error?.message,
      cause: error?.cause
    }),
    {
      status: set2?.status !== 200 ? set2?.status ?? 500 : 500,
      headers: set2?.headers
    }
  );
}, "errorToResponse");
var createStaticHandler2 = /* @__PURE__ */ __name((handle, hooks, setHeaders = {}) => {
  if (typeof handle == "function") return;
  const response = mapResponse2(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return () => response.clone();
}, "createStaticHandler");
var handleResponse2 = createResponseHandler({
  mapResponse: mapResponse2,
  mapCompactResponse: mapCompactResponse2
});
var handleStream2 = createStreamHandler({
  mapResponse: mapResponse2,
  mapCompactResponse: mapCompactResponse2
});

// node_modules/elysia/dist/compose.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var import_fast_decode_uri_component3 = __toESM(require_fast_decode_uri_component(), 1);

// node_modules/elysia/dist/parse-query.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var import_fast_decode_uri_component2 = __toESM(require_fast_decode_uri_component(), 1);
var KEY_HAS_PLUS = 1;
var KEY_NEEDS_DECODE = 2;
var VALUE_HAS_PLUS = 4;
var VALUE_NEEDS_DECODE = 8;
function parseQueryFromURL(input, startIndex = 0, array, object) {
  const result = /* @__PURE__ */ Object.create(null);
  let flags = 0;
  const inputLength = input.length;
  let startingIndex = startIndex - 1, equalityIndex = startingIndex;
  for (let i = 0; i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      // '&'
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      // '='
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      // '+'
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      // '%'
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    const hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0) return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = (0, import_fast_decode_uri_component2.default)(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = (0, import_fast_decode_uri_component2.default)(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    const currentValue = result[finalKey];
    array && array?.[finalKey] ? finalValue.charCodeAt(0) === 91 ? (object && object?.[finalKey] ? finalValue = JSON.parse(finalValue) : finalValue = finalValue.slice(1, -1).split(","), currentValue === void 0 ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(...finalValue) : (result[finalKey] = finalValue, result[finalKey].unshift(currentValue))) : currentValue === void 0 ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue] : result[finalKey] = finalValue;
  }
  __name(processKeyValuePair, "processKeyValuePair");
}
__name(parseQueryFromURL, "parseQueryFromURL");
function parseQueryStandardSchema(input, startIndex = 0) {
  const result = /* @__PURE__ */ Object.create(null);
  let flags = 0;
  const inputLength = input.length;
  let startingIndex = startIndex - 1, equalityIndex = startingIndex;
  for (let i = 0; i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      // '&'
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      // '='
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      // '+'
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      // '%'
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    const hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0) return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = (0, import_fast_decode_uri_component2.default)(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = (0, import_fast_decode_uri_component2.default)(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    const currentValue = result[finalKey];
    if (finalValue.charCodeAt(0) === 91 && finalValue.charCodeAt(finalValue.length - 1) === 93) {
      try {
        finalValue = JSON.parse(finalValue);
      } catch {
      }
      currentValue === void 0 ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
    } else if (finalValue.charCodeAt(0) === 123 && finalValue.charCodeAt(finalValue.length - 1) === 125) {
      try {
        finalValue = JSON.parse(finalValue);
      } catch {
      }
      currentValue === void 0 ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
    } else
      finalValue.includes(",") && (finalValue = finalValue.split(",")), currentValue === void 0 ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
  }
  __name(processKeyValuePair, "processKeyValuePair");
}
__name(parseQueryStandardSchema, "parseQueryStandardSchema");
function parseQuery(input) {
  const result = /* @__PURE__ */ Object.create(null);
  let flags = 0;
  const inputLength = input.length;
  let startingIndex = -1, equalityIndex = -1;
  for (let i = 0; i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      // '&'
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      // '='
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      // '+'
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      // '%'
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    const hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0) return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = (0, import_fast_decode_uri_component2.default)(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = (0, import_fast_decode_uri_component2.default)(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    const currentValue = result[finalKey];
    currentValue === void 0 ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
  }
  __name(processKeyValuePair, "processKeyValuePair");
}
__name(parseQuery, "parseQuery");

// node_modules/elysia/dist/trace.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var ELYSIA_TRACE = Symbol("ElysiaTrace");
var createProcess = /* @__PURE__ */ __name(() => {
  const { promise, resolve } = Promise.withResolvers(), { promise: end, resolve: resolveEnd } = Promise.withResolvers(), { promise: error, resolve: resolveError } = Promise.withResolvers(), callbacks = [], callbacksEnd = [];
  return [
    (callback) => (callback && callbacks.push(callback), promise),
    (process2) => {
      const processes = [], resolvers = [];
      let groupError = null;
      for (let i = 0; i < (process2.total ?? 0); i++) {
        const { promise: promise2, resolve: resolve2 } = Promise.withResolvers(), { promise: end2, resolve: resolveEnd2 } = Promise.withResolvers(), { promise: error2, resolve: resolveError2 } = Promise.withResolvers(), callbacks2 = [], callbacksEnd2 = [];
        processes.push((callback) => (callback && callbacks2.push(callback), promise2)), resolvers.push((process22) => {
          const result2 = {
            ...process22,
            end: end2,
            error: error2,
            index: i,
            onStop(callback) {
              return callback && callbacksEnd2.push(callback), end2;
            }
          };
          resolve2(result2);
          for (let i2 = 0; i2 < callbacks2.length; i2++)
            callbacks2[i2](result2);
          return (error3 = null) => {
            const end3 = performance.now();
            error3 && (groupError = error3);
            const detail = {
              end: end3,
              error: error3,
              get elapsed() {
                return end3 - process22.begin;
              }
            };
            for (let i2 = 0; i2 < callbacksEnd2.length; i2++)
              callbacksEnd2[i2](detail);
            resolveEnd2(end3), resolveError2(error3);
          };
        });
      }
      const result = {
        ...process2,
        end,
        error,
        onEvent(callback) {
          for (let i = 0; i < processes.length; i++)
            processes[i](callback);
        },
        onStop(callback) {
          return callback && callbacksEnd.push(callback), end;
        }
      };
      resolve(result);
      for (let i = 0; i < callbacks.length; i++) callbacks[i](result);
      return {
        resolveChild: resolvers,
        resolve(error2 = null) {
          const end2 = performance.now();
          !error2 && groupError && (error2 = groupError);
          const detail = {
            end: end2,
            error: error2,
            get elapsed() {
              return end2 - process2.begin;
            }
          };
          for (let i = 0; i < callbacksEnd.length; i++)
            callbacksEnd[i](detail);
          resolveEnd(end2), resolveError(error2);
        }
      };
    }
  ];
}, "createProcess");
var createTracer = /* @__PURE__ */ __name((traceListener) => (context) => {
  const [onRequest, resolveRequest] = createProcess(), [onParse, resolveParse] = createProcess(), [onTransform, resolveTransform] = createProcess(), [onBeforeHandle, resolveBeforeHandle] = createProcess(), [onHandle, resolveHandle] = createProcess(), [onAfterHandle, resolveAfterHandle] = createProcess(), [onError, resolveError] = createProcess(), [onMapResponse, resolveMapResponse] = createProcess(), [onAfterResponse, resolveAfterResponse] = createProcess();
  return traceListener({
    // @ts-ignore
    id: context[ELYSIA_REQUEST_ID],
    context,
    set: context.set,
    // @ts-ignore
    onRequest,
    // @ts-ignore
    onParse,
    // @ts-ignore
    onTransform,
    // @ts-ignore
    onBeforeHandle,
    // @ts-ignore
    onHandle,
    // @ts-ignore
    onAfterHandle,
    // @ts-ignore
    onMapResponse,
    // @ts-ignore
    onAfterResponse,
    // @ts-ignore
    onError,
    time: Date.now(),
    store: context.store
  }), {
    request: resolveRequest,
    parse: resolveParse,
    transform: resolveTransform,
    beforeHandle: resolveBeforeHandle,
    handle: resolveHandle,
    afterHandle: resolveAfterHandle,
    error: resolveError,
    mapResponse: resolveMapResponse,
    afterResponse: resolveAfterResponse
  };
}, "createTracer");

// node_modules/elysia/dist/schema.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// node_modules/exact-mirror/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var Kind2 = Symbol.for("TypeBox.Kind");
var Hint2 = Symbol.for("TypeBox.Hint");
var isSpecialProperty = /* @__PURE__ */ __name((name) => /(\ |-|\t|\n|\.|\[|\]|\{|\})/.test(name) || !isNaN(+name[0]), "isSpecialProperty");
var joinProperty = /* @__PURE__ */ __name((v1, v2, isOptional2 = false) => {
  if (typeof v2 === "number") return `${v1}[${v2}]`;
  if (isSpecialProperty(v2)) return `${v1}${isOptional2 ? "?." : ""}["${v2}"]`;
  return `${v1}${isOptional2 ? "?" : ""}.${v2}`;
}, "joinProperty");
var encodeProperty = /* @__PURE__ */ __name((v) => isSpecialProperty(v) ? `"${v}"` : v, "encodeProperty");
var sanitize = /* @__PURE__ */ __name((key, sanitize2 = 0, schema) => {
  if (schema.type !== "string" || schema.const || schema.trusted) return key;
  let hof = "";
  for (let i = sanitize2 - 1; i >= 0; i--) hof += `d.h${i}(`;
  return hof + key + ")".repeat(sanitize2);
}, "sanitize");
var mergeObjectIntersection = /* @__PURE__ */ __name((schema) => {
  if (!schema.allOf || Kind2 in schema && (schema[Kind2] !== "Intersect" || schema.type !== "object"))
    return schema;
  const { allOf, ...newSchema } = schema;
  newSchema.properties = {};
  if (Kind2 in newSchema) newSchema[Kind2] = "Object";
  for (const type of allOf) {
    if (type.type !== "object") continue;
    const { properties, required, type: _, [Kind2]: __, ...rest } = type;
    if (required)
      newSchema.required = newSchema.required ? newSchema.required.concat(required) : required;
    Object.assign(newSchema, rest);
    for (const property in type.properties)
      newSchema.properties[property] = mergeObjectIntersection(
        type.properties[property]
      );
  }
  return newSchema;
}, "mergeObjectIntersection");
var handleRecord = /* @__PURE__ */ __name((schema, property, instruction) => {
  const child = schema.patternProperties["^(.*)$"] ?? schema.patternProperties[Object.keys(schema.patternProperties)[0]];
  if (!child) return property;
  const i = instruction.array;
  instruction.array++;
  let v = `(()=>{const ar${i}s=Object.keys(${property}),ar${i}v={};for(let i=0;i<ar${i}s.length;i++){const ar${i}p=${property}[ar${i}s[i]];ar${i}v[ar${i}s[i]]=${mirror(child, `ar${i}p`, instruction)}`;
  const optionals = instruction.optionalsInArray[i + 1];
  if (optionals)
    for (let oi = 0; oi < optionals.length; oi++) {
      const target = `ar${i}v[ar${i}s[i]]${optionals[oi]}`;
      v += `;if(${target}===undefined)delete ${target}`;
    }
  v += `}return ar${i}v})()`;
  return v;
}, "handleRecord");
var handleTuple = /* @__PURE__ */ __name((schema, property, instruction) => {
  const i = instruction.array;
  instruction.array++;
  const isRoot = property === "v" && !instruction.unions.length;
  let v = "";
  if (!isRoot) v = `(()=>{`;
  v += `const ar${i}v=[`;
  for (let i2 = 0; i2 < schema.length; i2++) {
    if (i2 !== 0) v += ",";
    v += mirror(
      schema[i2],
      joinProperty(property, i2, instruction.parentIsOptional),
      instruction
    );
  }
  v += `];`;
  if (!isRoot) v += `return ar${i}v})()`;
  return v;
}, "handleTuple");
function deepClone(source, weak = /* @__PURE__ */ new WeakMap()) {
  if (source === null || typeof source !== "object" || typeof source === "function")
    return source;
  if (weak.has(source)) return weak.get(source);
  if (Array.isArray(source)) {
    const copy = new Array(source.length);
    weak.set(source, copy);
    for (let i = 0; i < source.length; i++)
      copy[i] = deepClone(source[i], weak);
    return copy;
  }
  if (typeof source === "object") {
    const keys = Object.keys(source).concat(
      Object.getOwnPropertySymbols(source)
    );
    const cloned = {};
    for (const key of keys)
      cloned[key] = deepClone(source[key], weak);
    return cloned;
  }
  return source;
}
__name(deepClone, "deepClone");
var handleUnion = /* @__PURE__ */ __name((schemas, property, instruction) => {
  if (instruction.TypeCompiler === void 0) {
    if (!instruction.typeCompilerWanred) {
      console.warn(
        new Error(
          "[exact-mirror] TypeBox's TypeCompiler is required to use Union"
        )
      );
      instruction.typeCompilerWanred = true;
    }
    return property;
  }
  instruction.unionKeys[property] = 1;
  const ui = instruction.unions.length;
  const typeChecks = instruction.unions[ui] = [];
  let v = `(()=>{
`;
  const unwrapRef = /* @__PURE__ */ __name((type) => {
    if (!(Kind2 in type) || !type.$ref) return type;
    if (type[Kind2] === "This") {
      return deepClone(instruction.definitions[type.$ref]);
    } else if (type[Kind2] === "Ref") {
      if (!instruction.modules)
        console.warn(
          new Error(
            "[exact-mirror] modules is required when using nested cyclic reference"
          )
        );
      else
        return instruction.modules.Import(
          type.$ref
        );
    }
    return type;
  }, "unwrapRef");
  let cleanThenCheck = "";
  for (let i = 0; i < schemas.length; i++) {
    let type = unwrapRef(schemas[i]);
    if (Array.isArray(type.anyOf))
      for (let i2 = 0; i2 < type.anyOf.length; i2++)
        type.anyOf[i2] = unwrapRef(type.anyOf[i2]);
    else if (type.items) {
      if (Array.isArray(type.items))
        for (let i2 = 0; i2 < type.items.length; i2++)
          type.items[i2] = unwrapRef(type.items[i2]);
      else type.items = unwrapRef(type.items);
    }
    typeChecks.push(TypeCompiler.Compile(type));
    v += `if(d.unions[${ui}][${i}].Check(${property})){return ${mirror(
      type,
      property,
      {
        ...instruction,
        recursion: instruction.recursion + 1,
        parentIsOptional: true
      }
    )}}
`;
    cleanThenCheck += (i ? "" : "let ") + "tmp=" + mirror(type, property, {
      ...instruction,
      recursion: instruction.recursion + 1,
      parentIsOptional: true
    }) + `
if(d.unions[${ui}][${i}].Check(tmp))return tmp
`;
  }
  if (cleanThenCheck) v += cleanThenCheck;
  v += `return ${instruction.removeUnknownUnionType ? "undefined" : property}`;
  return v + `})()`;
}, "handleUnion");
var mirror = /* @__PURE__ */ __name((schema, property, instruction) => {
  if (!schema) return "";
  const isRoot = property === "v" && !instruction.unions.length;
  if (Kind2 in schema && schema[Kind2] === "Import" && schema.$ref in schema.$defs)
    return mirror(schema.$defs[schema.$ref], property, {
      ...instruction,
      definitions: Object.assign(instruction.definitions, schema.$defs)
    });
  if (isRoot && schema.type !== "object" && schema.type !== "array" && !schema.anyOf)
    return `return ${sanitize("v", instruction.sanitize?.length, schema)}`;
  if (instruction.recursion >= instruction.recursionLimit) return property;
  let v = "";
  if (schema.$id && Hint2 in schema)
    instruction.definitions[schema.$id] = schema;
  switch (schema.type) {
    case "object":
      if (schema[Kind2] === "Record") {
        v = handleRecord(schema, property, instruction);
        break;
      }
      schema = mergeObjectIntersection(schema);
      v += "{";
      if (schema.additionalProperties) v += `...${property},`;
      const keys = Object.keys(schema.properties);
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        let isOptional2 = (
          // all fields are optional
          !schema.required || // field is explicitly required
          schema.required && !schema.required.includes(key) || Array.isArray(schema.properties[key].anyOf)
        );
        const name = joinProperty(
          property,
          key,
          instruction.parentIsOptional
        );
        if (isOptional2) {
          const index = instruction.array;
          if (property.startsWith("ar")) {
            const dotIndex = name.indexOf(".");
            let refName;
            if (dotIndex >= 0) {
              refName = name.slice(dotIndex);
            } else {
              refName = name.slice(property.length);
            }
            if (refName.startsWith("?.")) {
              if (refName.charAt(2) === "[") {
                refName = refName.slice(2);
              } else {
                refName = refName.slice(1);
              }
            }
            const array = instruction.optionalsInArray;
            if (array[index]) array[index].push(refName);
            else array[index] = [refName];
          } else {
            instruction.optionals.push(name);
          }
        }
        const child = schema.properties[key];
        if (i2 !== 0) v += ",";
        v += `${encodeProperty(key)}:${isOptional2 ? `${name}===undefined?undefined:` : ""}${mirror(
          child,
          name,
          {
            ...instruction,
            recursion: instruction.recursion + 1,
            parentIsOptional: isOptional2
          }
        )}`;
      }
      v += "}";
      break;
    case "array":
      if (schema.items.type !== "object" && schema.items.type !== "array") {
        if (Array.isArray(schema.items)) {
          v = handleTuple(schema.items, property, instruction);
          break;
        } else if (isRoot && !Array.isArray(schema.items.anyOf))
          return "return v";
        else if (Kind2 in schema.items && schema.items.$ref && (schema.items[Kind2] === "Ref" || schema.items[Kind2] === "This"))
          v = mirror(
            deepClone(instruction.definitions[schema.items.$ref]),
            property,
            {
              ...instruction,
              parentIsOptional: true,
              recursion: instruction.recursion + 1
            }
          );
        else if (!Array.isArray(schema.items.anyOf)) {
          v = property;
          break;
        }
      }
      const i = instruction.array;
      instruction.array++;
      let reference = property;
      if (isRoot) v = `const ar${i}v=new Array(${property}.length);`;
      else {
        reference = `ar${i}s`;
        v = `((${reference})=>{const ar${i}v=new Array(${reference}.length);`;
      }
      v += `for(let i=0;i<${reference}.length;i++){const ar${i}p=${reference}[i];ar${i}v[i]=${mirror(schema.items, `ar${i}p`, instruction)}`;
      const optionals = instruction.optionalsInArray[i + 1];
      if (optionals) {
        for (let oi = 0; oi < optionals.length; oi++) {
          const target = `ar${i}v[i]${optionals[oi]}`;
          v += `;if(${target}===undefined)delete ${target}`;
        }
      }
      v += `}`;
      if (!isRoot) v += `return ar${i}v})(${property})`;
      break;
    default:
      if (schema.$ref && schema.$ref in instruction.definitions)
        return mirror(
          instruction.definitions[schema.$ref],
          property,
          instruction
        );
      if (Array.isArray(schema.anyOf)) {
        v = handleUnion(schema.anyOf, property, instruction);
        break;
      }
      v = sanitize(property, instruction.sanitize?.length, schema);
      break;
  }
  if (!isRoot) return v;
  if (schema.type === "array") {
    v = `${v}const x=ar0v;`;
  } else {
    v = `const x=${v}
`;
  }
  for (let i = 0; i < instruction.optionals.length; i++) {
    const key = instruction.optionals[i];
    const prop = key.slice(1);
    v += `if(${key}===undefined`;
    if (instruction.unionKeys[key]) v += `||x${prop}===undefined`;
    const shouldQuestion = prop.charCodeAt(0) !== 63 && schema.type !== "array";
    v += `)delete x${shouldQuestion ? prop.charCodeAt(0) === 91 ? "?." : "?" : ""}${prop}
`;
  }
  return `${v}return x`;
}, "mirror");
var createMirror = /* @__PURE__ */ __name((schema, {
  TypeCompiler: TypeCompiler2,
  modules,
  definitions,
  sanitize: sanitize2,
  recursionLimit = 8,
  removeUnknownUnionType = false
} = {}) => {
  const unions = [];
  if (typeof sanitize2 === "function") sanitize2 = [sanitize2];
  const f = mirror(schema, "v", {
    optionals: [],
    optionalsInArray: [],
    array: 0,
    parentIsOptional: false,
    unions,
    unionKeys: {},
    TypeCompiler: TypeCompiler2,
    modules,
    // @ts-ignore private property
    definitions: definitions ?? modules?.$defs ?? {},
    sanitize: sanitize2,
    recursion: 0,
    recursionLimit,
    removeUnknownUnionType
  });
  if (!unions.length && !sanitize2?.length) return Function("v", f);
  let hof;
  if (sanitize2?.length) {
    hof = {};
    for (let i = 0; i < sanitize2.length; i++) hof[`h${i}`] = sanitize2[i];
  }
  return Function(
    "d",
    `return function mirror(v){${f}}`
  )({
    unions,
    ...hof
  });
}, "createMirror");

// node_modules/elysia/dist/schema.mjs
var isOptional = /* @__PURE__ */ __name((schema) => schema ? schema?.[Kind] === "Import" && schema.References ? schema.References().some(isOptional) : (schema.schema && (schema = schema.schema), !!schema && OptionalKind in schema) : false, "isOptional");
var hasAdditionalProperties = /* @__PURE__ */ __name((_schema) => {
  if (!_schema) return false;
  const schema = _schema?.schema ?? _schema;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some(hasAdditionalProperties);
  if (schema.anyOf) return schema.anyOf.some(hasAdditionalProperties);
  if (schema.someOf) return schema.someOf.some(hasAdditionalProperties);
  if (schema.allOf) return schema.allOf.some(hasAdditionalProperties);
  if (schema.not) return schema.not.some(hasAdditionalProperties);
  if (schema.type === "object") {
    const properties = schema.properties;
    if ("additionalProperties" in schema) return schema.additionalProperties;
    if ("patternProperties" in schema) return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasAdditionalProperties(property)) return true;
      } else if (property.anyOf) {
        for (let i = 0; i < property.anyOf.length; i++)
          if (hasAdditionalProperties(property.anyOf[i])) return true;
      }
      return property.additionalProperties;
    }
    return false;
  }
  return schema.type === "array" && schema.items && !Array.isArray(schema.items) ? hasAdditionalProperties(schema.items) : false;
}, "hasAdditionalProperties");
var hasType = /* @__PURE__ */ __name((type, schema) => {
  if (!schema) return false;
  if (Kind in schema && schema[Kind] === type) return true;
  if (schema.type === "object") {
    const properties = schema.properties;
    if (!properties) return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasType(type, property)) return true;
      } else if (property.anyOf) {
        for (let i = 0; i < property.anyOf.length; i++)
          if (hasType(type, property.anyOf[i])) return true;
      }
      if (Kind in property && property[Kind] === type) return true;
    }
    return false;
  }
  return !!schema.properties && Kind in schema.properties && schema.properties[Kind] === type;
}, "hasType");
var hasElysiaMeta = /* @__PURE__ */ __name((meta, _schema) => {
  if (!_schema) return false;
  const schema = _schema?.schema ?? _schema;
  if (schema.elysiaMeta === meta) return true;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.anyOf)
    return schema.anyOf.some(
      (schema2) => hasElysiaMeta(meta, schema2)
    );
  if (schema.someOf)
    return schema.someOf.some(
      (schema2) => hasElysiaMeta(meta, schema2)
    );
  if (schema.allOf)
    return schema.allOf.some(
      (schema2) => hasElysiaMeta(meta, schema2)
    );
  if (schema.not)
    return schema.not.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.type === "object") {
    const properties = schema.properties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasElysiaMeta(meta, property)) return true;
      } else if (property.anyOf) {
        for (let i = 0; i < property.anyOf.length; i++)
          if (hasElysiaMeta(meta, property.anyOf[i])) return true;
      }
      return schema.elysiaMeta === meta;
    }
    return false;
  }
  return schema.type === "array" && schema.items && !Array.isArray(schema.items) ? hasElysiaMeta(meta, schema.items) : false;
}, "hasElysiaMeta");
var hasProperty = /* @__PURE__ */ __name((expectedProperty, _schema) => {
  if (!_schema) return;
  const schema = _schema.schema ?? _schema;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some((schema2) => hasProperty(expectedProperty, schema2));
  if (schema.type === "object") {
    const properties = schema.properties;
    if (!properties) return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (expectedProperty in property) return true;
      if (property.type === "object") {
        if (hasProperty(expectedProperty, property)) return true;
      } else if (property.anyOf) {
        for (let i = 0; i < property.anyOf.length; i++)
          if (hasProperty(expectedProperty, property.anyOf[i]))
            return true;
      }
    }
    return false;
  }
  return expectedProperty in schema;
}, "hasProperty");
var hasRef = /* @__PURE__ */ __name((schema) => {
  if (!schema) return false;
  if (schema.oneOf) {
    for (let i = 0; i < schema.oneOf.length; i++)
      if (hasRef(schema.oneOf[i])) return true;
  }
  if (schema.anyOf) {
    for (let i = 0; i < schema.anyOf.length; i++)
      if (hasRef(schema.anyOf[i])) return true;
  }
  if (schema.oneOf) {
    for (let i = 0; i < schema.oneOf.length; i++)
      if (hasRef(schema.oneOf[i])) return true;
  }
  if (schema.allOf) {
    for (let i = 0; i < schema.allOf.length; i++)
      if (hasRef(schema.allOf[i])) return true;
  }
  if (schema.not && hasRef(schema.not)) return true;
  if (schema.type === "object" && schema.properties) {
    const properties = schema.properties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (hasRef(property) || property.type === "array" && property.items && hasRef(property.items))
        return true;
    }
  }
  return schema.type === "array" && schema.items && hasRef(schema.items) ? true : schema[Kind] === "Ref" && "$ref" in schema;
}, "hasRef");
var hasTransform = /* @__PURE__ */ __name((schema) => {
  if (!schema) return false;
  if (schema.$ref && schema.$defs && schema.$ref in schema.$defs && hasTransform(schema.$defs[schema.$ref]))
    return true;
  if (schema.oneOf) {
    for (let i = 0; i < schema.oneOf.length; i++)
      if (hasTransform(schema.oneOf[i])) return true;
  }
  if (schema.anyOf) {
    for (let i = 0; i < schema.anyOf.length; i++)
      if (hasTransform(schema.anyOf[i])) return true;
  }
  if (schema.allOf) {
    for (let i = 0; i < schema.allOf.length; i++)
      if (hasTransform(schema.allOf[i])) return true;
  }
  if (schema.not && hasTransform(schema.not)) return true;
  if (schema.type === "object" && schema.properties) {
    const properties = schema.properties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (hasTransform(property) || property.type === "array" && property.items && hasTransform(property.items))
        return true;
    }
  }
  return schema.type === "array" && schema.items && hasTransform(schema.items) ? true : TransformKind in schema;
}, "hasTransform");
var replaceSchemaType = /* @__PURE__ */ __name((schema, options, _config = {}) => {
  const config2 = _config;
  if (config2.root = true, !Array.isArray(options))
    return options.original = schema, _replaceSchemaType(schema, options, config2);
  for (const option of options)
    option.original = schema, schema = _replaceSchemaType(schema, option, config2);
  return schema;
}, "replaceSchemaType");
var _replaceSchemaType = /* @__PURE__ */ __name((schema, options, config2) => {
  if (!schema) return schema;
  const root = config2.root;
  if (options.onlyFirst && schema.type === options.onlyFirst)
    return options.to(schema) ?? schema;
  if (options.untilObjectFound && !root && schema.type === "object")
    return schema;
  const fromSymbol = options.from[Kind];
  if (schema.oneOf) {
    for (let i = 0; i < schema.oneOf.length; i++)
      schema.oneOf[i] = _replaceSchemaType(
        schema.oneOf[i],
        options,
        config2
      );
    return schema;
  }
  if (schema.anyOf) {
    for (let i = 0; i < schema.anyOf.length; i++)
      schema.anyOf[i] = _replaceSchemaType(
        schema.anyOf[i],
        options,
        config2
      );
    return schema;
  }
  if (schema.allOf) {
    for (let i = 0; i < schema.allOf.length; i++)
      schema.allOf[i] = _replaceSchemaType(
        schema.allOf[i],
        options,
        config2
      );
    return schema;
  }
  if (schema.not) return _replaceSchemaType(schema.not, options, config2);
  const isRoot = root && !!options.excludeRoot;
  if (schema[Kind] === fromSymbol) {
    const { anyOf, oneOf, allOf, not, properties: properties2, items, ...rest } = schema, to = options.to(rest);
    if (!to) return schema;
    let transform;
    const composeProperties = /* @__PURE__ */ __name((schema2) => {
      const v = _composeProperties(schema2);
      return v.$id && delete v.$id, v;
    }, "composeProperties"), _composeProperties = /* @__PURE__ */ __name((v) => {
      if (properties2 && v.type === "object") {
        const newProperties = {};
        for (const [key, value2] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(
            value2,
            options,
            {
              ...config2,
              root: false
            }
          );
        return {
          ...rest,
          ...v,
          properties: newProperties
        };
      }
      if (items && v.type === "array")
        return {
          ...rest,
          ...v,
          items: _replaceSchemaType(items, options, {
            ...config2,
            root: false
          })
        };
      const value = {
        ...rest,
        ...v
      };
      return delete value.required, properties2 && v.type === "string" && v.format === "ObjectString" && v.default === "{}" ? (transform = t.ObjectString(properties2, rest), value.properties = properties2) : items && v.type === "string" && v.format === "ArrayString" && v.default === "[]" && (transform = t.ArrayString(items, rest), value.items = items), value;
    }, "_composeProperties");
    if (isRoot) {
      if (properties2) {
        const newProperties = {};
        for (const [key, value] of Object.entries(properties2))
          newProperties[key] = _replaceSchemaType(
            value,
            options,
            {
              ...config2,
              root: false
            }
          );
        return {
          ...rest,
          properties: newProperties
        };
      } else if (items?.map)
        return {
          ...rest,
          items: items.map(
            (v) => _replaceSchemaType(v, options, {
              ...config2,
              root: false
            })
          )
        };
      return rest;
    }
    if (to.anyOf)
      for (let i = 0; i < to.anyOf.length; i++)
        to.anyOf[i] = composeProperties(to.anyOf[i]);
    else if (to.oneOf)
      for (let i = 0; i < to.oneOf.length; i++)
        to.oneOf[i] = composeProperties(to.oneOf[i]);
    else if (to.allOf)
      for (let i = 0; i < to.allOf.length; i++)
        to.allOf[i] = composeProperties(to.allOf[i]);
    else to.not && (to.not = composeProperties(to.not));
    if (transform && (to[TransformKind] = transform[TransformKind]), to.anyOf || to.oneOf || to.allOf || to.not) return to;
    if (properties2) {
      const newProperties = {};
      for (const [key, value] of Object.entries(properties2))
        newProperties[key] = _replaceSchemaType(
          value,
          options,
          {
            ...config2,
            root: false
          }
        );
      return {
        ...rest,
        ...to,
        properties: newProperties
      };
    } else if (items?.map)
      return {
        ...rest,
        ...to,
        items: items.map(
          (v) => _replaceSchemaType(v, options, {
            ...config2,
            root: false
          })
        )
      };
    return {
      ...rest,
      ...to
    };
  }
  const properties = schema?.properties;
  if (properties && root && options.rootOnly !== true)
    for (const [key, value] of Object.entries(properties))
      switch (value[Kind]) {
        case fromSymbol:
          const { anyOf, oneOf, allOf, not, type, ...rest } = value, to = options.to(rest);
          if (!to) return schema;
          if (to.anyOf)
            for (let i = 0; i < to.anyOf.length; i++)
              to.anyOf[i] = { ...rest, ...to.anyOf[i] };
          else if (to.oneOf)
            for (let i = 0; i < to.oneOf.length; i++)
              to.oneOf[i] = { ...rest, ...to.oneOf[i] };
          else if (to.allOf)
            for (let i = 0; i < to.allOf.length; i++)
              to.allOf[i] = { ...rest, ...to.allOf[i] };
          else to.not && (to.not = { ...rest, ...to.not });
          properties[key] = {
            ...rest,
            ..._replaceSchemaType(rest, options, {
              ...config2,
              root: false
            })
          };
          break;
        case "Object":
        case "Union":
          properties[key] = _replaceSchemaType(value, options, {
            ...config2,
            root: false
          });
          break;
        default:
          if (Array.isArray(value.items))
            for (let i = 0; i < value.items.length; i++)
              value.items[i] = _replaceSchemaType(
                value.items[i],
                options,
                {
                  ...config2,
                  root: false
                }
              );
          else value.anyOf || value.oneOf || value.allOf || value.not ? properties[key] = _replaceSchemaType(value, options, {
            ...config2,
            root: false
          }) : value.type === "array" && (value.items = _replaceSchemaType(value.items, options, {
            ...config2,
            root: false
          }));
          break;
      }
  return schema.type === "array" && schema.items && (Array.isArray(schema.items) ? schema.items = schema.items.map(
    (item) => _replaceSchemaType(item, options, {
      ...config2,
      root: false
    })
  ) : schema.items = _replaceSchemaType(schema.items, options, {
    ...config2,
    root: false
  })), schema;
}, "_replaceSchemaType");
var createCleaner = /* @__PURE__ */ __name((schema) => (value) => {
  if (typeof value == "object")
    try {
      return value_exports2.Clean(schema, value);
    } catch {
    }
  return value;
}, "createCleaner");
var getSchemaValidator = /* @__PURE__ */ __name((s, {
  models = {},
  dynamic = false,
  modules,
  normalize = false,
  additionalProperties = false,
  forceAdditionalProperties = false,
  coerce = false,
  additionalCoerce = [],
  validators,
  sanitize: sanitize2
} = {}) => {
  if (validators = validators?.filter((x) => x), !s) {
    if (!validators?.length) return;
    s = validators[0], validators = validators.slice(1);
  }
  let doesHaveRef;
  const replaceSchema = /* @__PURE__ */ __name((schema2) => coerce ? replaceSchemaType(schema2, [
    {
      from: t.Number(),
      to: /* @__PURE__ */ __name((options) => t.Numeric(options), "to"),
      untilObjectFound: true
    },
    {
      from: t.Boolean(),
      to: /* @__PURE__ */ __name((options) => t.BooleanString(options), "to"),
      untilObjectFound: true
    },
    ...Array.isArray(additionalCoerce) ? additionalCoerce : [additionalCoerce]
  ]) : replaceSchemaType(schema2, additionalCoerce), "replaceSchema"), mapSchema = /* @__PURE__ */ __name((s2) => {
    if (s2 && typeof s2 != "string" && "~standard" in s2)
      return s2;
    if (!s2) return;
    let schema2;
    if (typeof s2 != "string") schema2 = s2;
    else if (schema2 = // @ts-expect-error private property
    modules && s2 in modules.$defs ? modules.Import(s2) : models[s2], !schema2) return;
    if (Kind in schema2)
      if (schema2[Kind] === "Import")
        hasRef(schema2.$defs[schema2.$ref]) || (schema2 = schema2.$defs[schema2.$ref], (coerce || additionalCoerce) && (schema2 = replaceSchema(schema2)));
      else if (hasRef(schema2)) {
        const id = randomId();
        schema2 = t.Module({
          // @ts-expect-error private property
          ...modules?.$defs,
          [id]: schema2
        }).Import(id);
      } else (coerce || additionalCoerce) && (schema2 = replaceSchema(schema2));
    return schema2;
  }, "mapSchema");
  let schema = mapSchema(s), _validators = validators;
  if ("~standard" in schema || validators?.length && validators.some(
    (x) => x && typeof x != "string" && "~standard" in x
  )) {
    const typeboxSubValidator = /* @__PURE__ */ __name((schema2) => {
      let mirror2;
      if (normalize === true || normalize === "exactMirror")
        try {
          mirror2 = createMirror(schema2, {
            TypeCompiler,
            sanitize: sanitize2?.(),
            modules
          });
        } catch {
          console.warn(
            "Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"
          ), console.warn(schema2), mirror2 = createCleaner(schema2);
        }
      const vali = getSchemaValidator(schema2, {
        models,
        modules,
        dynamic,
        normalize,
        additionalProperties: true,
        forceAdditionalProperties: true,
        coerce,
        additionalCoerce
      });
      return vali.Decode = mirror2, (v) => vali.Check(v) ? {
        value: vali.Decode(v)
      } : {
        issues: [...vali.Errors(v)]
      };
    }, "typeboxSubValidator"), mainCheck = schema["~standard"] ? schema["~standard"].validate : typeboxSubValidator(schema);
    let checkers = [];
    if (validators?.length) {
      for (const validator2 of validators)
        if (validator2 && typeof validator2 != "string") {
          if (validator2?.["~standard"]) {
            checkers.push(validator2["~standard"]);
            continue;
          }
          if (Kind in validator2) {
            checkers.push(typeboxSubValidator(validator2));
            continue;
          }
        }
    }
    async function Check2(value) {
      let v = mainCheck(value);
      if (v instanceof Promise && (v = await v), v.issues) return v;
      const values = [];
      v && typeof v == "object" && values.push(v.value);
      for (let i = 0; i < checkers.length; i++) {
        if (v = checkers[i].validate(value), v instanceof Promise && (v = await v), v.issues) return v;
        v && typeof v == "object" && values.push(v.value);
      }
      if (!values.length) return { value: v };
      if (values.length === 1) return { value: values[0] };
      if (values.length === 2)
        return { value: mergeDeep(values[0], values[1]) };
      let newValue = mergeDeep(values[0], values[1]);
      for (let i = 2; i < values.length; i++)
        newValue = mergeDeep(newValue, values[i]);
      return { value: newValue };
    }
    __name(Check2, "Check");
    const validator = {
      provider: "standard",
      schema,
      references: "",
      checkFunc: /* @__PURE__ */ __name(() => {
      }, "checkFunc"),
      code: "",
      // @ts-ignore
      Check: Check2,
      // @ts-ignore
      Errors: /* @__PURE__ */ __name((value) => Check2(value)?.then?.((x) => x?.issues), "Errors"),
      Code: /* @__PURE__ */ __name(() => "", "Code"),
      // @ts-ignore
      Decode: Check2,
      // @ts-ignore
      Encode: /* @__PURE__ */ __name((value) => value, "Encode"),
      hasAdditionalProperties: false,
      hasDefault: false,
      isOptional: false,
      hasTransform: false,
      hasRef: false
    };
    return validator.parse = (v) => {
      try {
        return validator.Decode(validator.Clean?.(v) ?? v);
      } catch {
        throw [...validator.Errors(v)].map(mapValueError);
      }
    }, validator.safeParse = (v) => {
      try {
        return {
          success: true,
          data: validator.Decode(validator.Clean?.(v) ?? v),
          error: null
        };
      } catch {
        const errors = [...compiled.Errors(v)].map(mapValueError);
        return {
          success: false,
          data: null,
          error: errors[0]?.summary,
          errors
        };
      }
    }, validator;
  } else if (validators?.length) {
    let hasAdditional = false;
    const validators2 = _validators, { schema: mergedObjectSchema, notObjects } = mergeObjectSchemas([
      schema,
      ...validators2.map(mapSchema)
    ]);
    notObjects && (schema = t.Intersect([
      ...mergedObjectSchema ? [mergedObjectSchema] : [],
      ...notObjects.map((x) => {
        const schema2 = mapSchema(x);
        return schema2.type === "object" && "additionalProperties" in schema2 && (!hasAdditional && schema2.additionalProperties === false && (hasAdditional = true), delete schema2.additionalProperties), schema2;
      })
    ]), schema.type === "object" && hasAdditional && (schema.additionalProperties = false));
  } else
    schema.type === "object" && (!("additionalProperties" in schema) || forceAdditionalProperties) ? schema.additionalProperties = additionalProperties : schema = replaceSchemaType(schema, {
      onlyFirst: "object",
      from: t.Object({}),
      // @ts-ignore
      to({ properties, ...options }) {
        if (properties && !("additionalProperties" in schema))
          return t.Object(properties, {
            ...options,
            additionalProperties: false
          });
      }
    });
  if (dynamic)
    if (Kind in schema) {
      const validator = {
        provider: "typebox",
        schema,
        references: "",
        checkFunc: /* @__PURE__ */ __name(() => {
        }, "checkFunc"),
        code: "",
        // @ts-expect-error
        Check: /* @__PURE__ */ __name((value) => value_exports2.Check(schema, value), "Check"),
        Errors: /* @__PURE__ */ __name((value) => value_exports2.Errors(schema, value), "Errors"),
        Code: /* @__PURE__ */ __name(() => "", "Code"),
        Clean: createCleaner(schema),
        Decode: /* @__PURE__ */ __name((value) => value_exports2.Decode(schema, value), "Decode"),
        Encode: /* @__PURE__ */ __name((value) => value_exports2.Encode(schema, value), "Encode"),
        get hasAdditionalProperties() {
          return "~hasAdditionalProperties" in this ? this["~hasAdditionalProperties"] : this["~hasAdditionalProperties"] = hasAdditionalProperties(schema);
        },
        get hasDefault() {
          return "~hasDefault" in this ? this["~hasDefault"] : this["~hasDefault"] = hasProperty(
            "default",
            schema
          );
        },
        get isOptional() {
          return "~isOptional" in this ? this["~isOptional"] : this["~isOptional"] = isOptional(schema);
        },
        get hasTransform() {
          return "~hasTransform" in this ? this["~hasTransform"] : this["~hasTransform"] = hasTransform(schema);
        },
        "~hasRef": doesHaveRef,
        get hasRef() {
          return "~hasRef" in this ? this["~hasRef"] : this["~hasRef"] = hasTransform(schema);
        }
      };
      if (schema.config && (validator.config = schema.config, validator?.schema?.config && delete validator.schema.config), normalize && schema.additionalProperties === false)
        if (normalize === true || normalize === "exactMirror")
          try {
            validator.Clean = createMirror(schema, {
              TypeCompiler,
              sanitize: sanitize2?.(),
              modules
            });
          } catch {
            console.warn(
              "Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"
            ), console.warn(schema), validator.Clean = createCleaner(schema);
          }
        else validator.Clean = createCleaner(schema);
      return validator.parse = (v) => {
        try {
          return validator.Decode(validator.Clean?.(v) ?? v);
        } catch {
          throw [...validator.Errors(v)].map(mapValueError);
        }
      }, validator.safeParse = (v) => {
        try {
          return {
            success: true,
            data: validator.Decode(validator.Clean?.(v) ?? v),
            error: null
          };
        } catch {
          const errors = [...compiled.Errors(v)].map(mapValueError);
          return {
            success: false,
            data: null,
            error: errors[0]?.summary,
            errors
          };
        }
      }, validator;
    } else {
      const validator = {
        provider: "standard",
        schema,
        references: "",
        checkFunc: /* @__PURE__ */ __name(() => {
        }, "checkFunc"),
        code: "",
        // @ts-ignore
        Check: /* @__PURE__ */ __name((v) => schema["~standard"].validate(v), "Check"),
        // @ts-ignore
        Errors(value) {
          const response = schema["~standard"].validate(value);
          if (response instanceof Promise)
            throw Error(
              "Async validation is not supported in non-dynamic schema"
            );
          return response.issues;
        },
        Code: /* @__PURE__ */ __name(() => "", "Code"),
        // @ts-ignore
        Decode(value) {
          const response = schema["~standard"].validate(value);
          if (response instanceof Promise)
            throw Error(
              "Async validation is not supported in non-dynamic schema"
            );
          return response;
        },
        // @ts-ignore
        Encode: /* @__PURE__ */ __name((value) => value, "Encode"),
        hasAdditionalProperties: false,
        hasDefault: false,
        isOptional: false,
        hasTransform: false,
        hasRef: false
      };
      return validator.parse = (v) => {
        try {
          return validator.Decode(validator.Clean?.(v) ?? v);
        } catch {
          throw [...validator.Errors(v)].map(mapValueError);
        }
      }, validator.safeParse = (v) => {
        try {
          return {
            success: true,
            data: validator.Decode(validator.Clean?.(v) ?? v),
            error: null
          };
        } catch {
          const errors = [...compiled.Errors(v)].map(mapValueError);
          return {
            success: false,
            data: null,
            error: errors[0]?.summary,
            errors
          };
        }
      }, validator;
    }
  let compiled;
  if (Kind in schema)
    if (compiled = TypeCompiler.Compile(
      schema,
      Object.values(models).filter((x) => Kind in x)
    ), compiled.provider = "typebox", schema.config && (compiled.config = schema.config, compiled?.schema?.config && delete compiled.schema.config), normalize === true || normalize === "exactMirror")
      try {
        compiled.Clean = createMirror(schema, {
          TypeCompiler,
          sanitize: sanitize2?.(),
          modules
        });
      } catch {
        console.warn(
          "Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"
        ), console.dir(schema, {
          depth: null
        }), compiled.Clean = createCleaner(schema);
      }
    else normalize === "typebox" && (compiled.Clean = createCleaner(schema));
  else
    compiled = {
      provider: "standard",
      schema,
      references: "",
      checkFunc(value) {
        const response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error(
            "Async validation is not supported in non-dynamic schema"
          );
        return response;
      },
      code: "",
      // @ts-ignore
      Check: /* @__PURE__ */ __name((v) => schema["~standard"].validate(v), "Check"),
      // @ts-ignore
      Errors(value) {
        const response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error(
            "Async validation is not supported in non-dynamic schema"
          );
        return response.issues;
      },
      Code: /* @__PURE__ */ __name(() => "", "Code"),
      // @ts-ignore
      Decode(value) {
        const response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error(
            "Async validation is not supported in non-dynamic schema"
          );
        return response;
      },
      // @ts-ignore
      Encode: /* @__PURE__ */ __name((value) => value, "Encode"),
      hasAdditionalProperties: false,
      hasDefault: false,
      isOptional: false,
      hasTransform: false,
      hasRef: false
    };
  return compiled.parse = (v) => {
    try {
      return compiled.Decode(compiled.Clean?.(v) ?? v);
    } catch {
      throw [...compiled.Errors(v)].map(mapValueError);
    }
  }, compiled.safeParse = (v) => {
    try {
      return {
        success: true,
        data: compiled.Decode(compiled.Clean?.(v) ?? v),
        error: null
      };
    } catch {
      const errors = [...compiled.Errors(v)].map(mapValueError);
      return {
        success: false,
        data: null,
        error: errors[0]?.summary,
        errors
      };
    }
  }, Kind in schema && Object.assign(compiled, {
    get hasAdditionalProperties() {
      return "~hasAdditionalProperties" in this ? this["~hasAdditionalProperties"] : this["~hasAdditionalProperties"] = hasAdditionalProperties(compiled);
    },
    get hasDefault() {
      return "~hasDefault" in this ? this["~hasDefault"] : this["~hasDefault"] = hasProperty("default", compiled);
    },
    get isOptional() {
      return "~isOptional" in this ? this["~isOptional"] : this["~isOptional"] = isOptional(compiled);
    },
    get hasTransform() {
      return "~hasTransform" in this ? this["~hasTransform"] : this["~hasTransform"] = hasTransform(schema);
    },
    get hasRef() {
      return "~hasRef" in this ? this["~hasRef"] : this["~hasRef"] = hasRef(schema);
    },
    "~hasRef": doesHaveRef
  }), compiled;
}, "getSchemaValidator");
var isUnion = /* @__PURE__ */ __name((schema) => schema[Kind] === "Union" || !schema.schema && !!schema.anyOf, "isUnion");
var mergeObjectSchemas = /* @__PURE__ */ __name((schemas) => {
  if (schemas.length === 0)
    return {
      schema: void 0,
      notObjects: []
    };
  if (schemas.length === 1)
    return schemas[0].type === "object" ? {
      schema: schemas[0],
      notObjects: []
    } : {
      schema: void 0,
      notObjects: schemas
    };
  let newSchema;
  const notObjects = [];
  let additionalPropertiesIsTrue = false, additionalPropertiesIsFalse = false;
  for (const schema of schemas) {
    if (schema.type !== "object") {
      notObjects.push(schema);
      continue;
    }
    if ("additionalProperties" in schema && (schema.additionalProperties === true ? additionalPropertiesIsTrue = true : schema.additionalProperties === false && (additionalPropertiesIsFalse = true)), !newSchema) {
      newSchema = schema;
      continue;
    }
    newSchema = {
      ...newSchema,
      ...schema,
      properties: {
        ...newSchema.properties,
        ...schema.properties
      },
      required: [...newSchema?.required ?? [], ...schema.required ?? []]
    };
  }
  return newSchema && (newSchema.required && (newSchema.required = [...new Set(newSchema.required)]), additionalPropertiesIsFalse ? newSchema.additionalProperties = false : additionalPropertiesIsTrue && (newSchema.additionalProperties = true)), {
    schema: newSchema,
    notObjects
  };
}, "mergeObjectSchemas");
var getResponseSchemaValidator = /* @__PURE__ */ __name((s, {
  models = {},
  modules,
  dynamic = false,
  normalize = false,
  additionalProperties = false,
  validators = [],
  sanitize: sanitize2
}) => {
  if (validators = validators.filter((x) => x), !s) {
    if (!validators?.length) return;
    s = validators[0], validators = validators.slice(1);
  }
  let maybeSchemaOrRecord;
  if (typeof s != "string") maybeSchemaOrRecord = s;
  else if (maybeSchemaOrRecord = // @ts-expect-error private property
  modules && s in modules.$defs ? modules.Import(s) : models[s], !maybeSchemaOrRecord) return;
  if (!maybeSchemaOrRecord) return;
  if (Kind in maybeSchemaOrRecord || "~standard" in maybeSchemaOrRecord)
    return {
      200: getSchemaValidator(
        maybeSchemaOrRecord,
        {
          modules,
          models,
          additionalProperties,
          dynamic,
          normalize,
          coerce: false,
          additionalCoerce: [],
          validators: validators.map((x) => x[200]),
          sanitize: sanitize2
        }
      )
    };
  const record = {};
  return Object.keys(maybeSchemaOrRecord).forEach((status2) => {
    if (isNaN(+status2)) return;
    const maybeNameOrSchema = maybeSchemaOrRecord[+status2];
    if (typeof maybeNameOrSchema == "string") {
      if (maybeNameOrSchema in models) {
        const schema = models[maybeNameOrSchema];
        if (!schema) return;
        record[+status2] = Kind in schema || "~standard" in schema ? getSchemaValidator(schema, {
          modules,
          models,
          additionalProperties,
          dynamic,
          normalize,
          coerce: false,
          additionalCoerce: [],
          validators: validators.map((x) => x[+status2]),
          sanitize: sanitize2
        }) : schema;
      }
      return;
    }
    record[+status2] = Kind in maybeNameOrSchema || "~standard" in maybeNameOrSchema ? getSchemaValidator(maybeNameOrSchema, {
      modules,
      models,
      additionalProperties,
      dynamic,
      normalize,
      coerce: false,
      additionalCoerce: [],
      validators: validators.map((x) => x[+status2]),
      sanitize: sanitize2
    }) : maybeNameOrSchema;
  }), record;
}, "getResponseSchemaValidator");
var _stringToStructureCoercions;
var stringToStructureCoercions = /* @__PURE__ */ __name(() => (_stringToStructureCoercions || (_stringToStructureCoercions = [
  {
    from: t.Object({}),
    to: /* @__PURE__ */ __name(() => t.ObjectString({}), "to"),
    excludeRoot: true
  },
  {
    from: t.Array(t.Any()),
    to: /* @__PURE__ */ __name(() => t.ArrayString(t.Any()), "to")
  }
]), _stringToStructureCoercions), "stringToStructureCoercions");
var _queryCoercions;
var queryCoercions = /* @__PURE__ */ __name(() => (_queryCoercions || (_queryCoercions = [
  {
    from: t.Object({}),
    to: /* @__PURE__ */ __name(() => t.ObjectString({}), "to"),
    excludeRoot: true
  },
  {
    from: t.Array(t.Any()),
    to: /* @__PURE__ */ __name(() => t.ArrayQuery(t.Any()), "to")
  }
]), _queryCoercions), "queryCoercions");
var _coercePrimitiveRoot;
var coercePrimitiveRoot = /* @__PURE__ */ __name(() => (_coercePrimitiveRoot || (_coercePrimitiveRoot = [
  {
    from: t.Number(),
    to: /* @__PURE__ */ __name((options) => t.Numeric(options), "to"),
    rootOnly: true
  },
  {
    from: t.Boolean(),
    to: /* @__PURE__ */ __name((options) => t.BooleanString(options), "to"),
    rootOnly: true
  }
]), _coercePrimitiveRoot), "coercePrimitiveRoot");
var getCookieValidator = /* @__PURE__ */ __name(({
  validator,
  modules,
  defaultConfig = {},
  config: config2,
  dynamic,
  normalize = false,
  models,
  validators,
  sanitize: sanitize2
}) => {
  let cookieValidator = (
    // @ts-ignore
    validator?.provider ? validator : (
      // @ts-ignore
      getSchemaValidator(validator, {
        modules,
        dynamic,
        models,
        normalize,
        additionalProperties: true,
        coerce: true,
        additionalCoerce: stringToStructureCoercions(),
        validators,
        sanitize: sanitize2
      })
    )
  );
  return cookieValidator ? cookieValidator.config = mergeCookie(cookieValidator.config, config2) : (cookieValidator = getSchemaValidator(t.Cookie(t.Any()), {
    modules,
    dynamic,
    models,
    additionalProperties: true,
    validators,
    sanitize: sanitize2
  }), cookieValidator.config = defaultConfig), cookieValidator;
}, "getCookieValidator");
var unwrapImportSchema = /* @__PURE__ */ __name((schema) => schema && schema[Kind] === "Import" && schema.$defs[schema.$ref][Kind] === "Object" ? schema.$defs[schema.$ref] : schema, "unwrapImportSchema");

// node_modules/elysia/dist/compose.mjs
var allocateIf = /* @__PURE__ */ __name((value, condition) => condition ? value : "", "allocateIf");
var defaultParsers = [
  "json",
  "text",
  "urlencoded",
  "arrayBuffer",
  "formdata",
  "application/json",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "text/plain",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "application/x-www-form-urlencoded",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "application/octet-stream",
  // eslint-disable-next-line sonarjs/no-duplicate-string
  "multipart/form-data"
];
var createReport = /* @__PURE__ */ __name(({
  context = "c",
  trace = [],
  addFn
}) => {
  if (!trace.length)
    return () => ({
      resolveChild() {
        return () => {
        };
      },
      resolve() {
      }
    });
  for (let i = 0; i < trace.length; i++)
    addFn(
      `let report${i},reportChild${i},reportErr${i},reportErrChild${i};let trace${i}=${context}[ELYSIA_TRACE]?.[${i}]??trace[${i}](${context});
`
    );
  return (event, {
    name,
    total = 0,
    alias
  } = {}) => {
    name || (name = "anonymous");
    const reporter = event === "error" ? "reportErr" : "report";
    for (let i = 0; i < trace.length; i++)
      addFn(
        `${alias ? "const " : ""}${alias ?? reporter}${i}=trace${i}.${event}({id,event:'${event}',name:'${name}',begin:performance.now(),total:${total}})
`
      ), alias && addFn(`${reporter}${i}=${alias}${i}
`);
    return {
      resolve() {
        for (let i = 0; i < trace.length; i++)
          addFn(`${alias ?? reporter}${i}.resolve()
`);
      },
      resolveChild(name2) {
        for (let i = 0; i < trace.length; i++)
          addFn(
            `${reporter}Child${i}=${reporter}${i}.resolveChild?.shift()?.({id,event:'${event}',name:'${name2}',begin:performance.now()})
`
          );
        return (binding2) => {
          for (let i = 0; i < trace.length; i++)
            addFn(
              binding2 ? `if(${binding2} instanceof Error){${reporter}Child${i}?.(${binding2}) }else{${reporter}Child${i}?.()}` : `${reporter}Child${i}?.()
`
            );
        };
      }
    };
  };
}, "createReport");
var composeCleaner = /* @__PURE__ */ __name(({
  schema,
  name,
  type,
  typeAlias = type,
  normalize,
  ignoreTryCatch = false
}) => !normalize || !schema.Clean ? "" : normalize === true || normalize === "exactMirror" ? ignoreTryCatch ? `${name}=validator.${typeAlias}.Clean(${name})
` : `try{${name}=validator.${typeAlias}.Clean(${name})
}catch{}` : normalize === "typebox" ? `${name}=validator.${typeAlias}.Clean(${name})
` : "", "composeCleaner");
var composeValidationFactory = /* @__PURE__ */ __name(({
  injectResponse = "",
  normalize = false,
  validator,
  encodeSchema = false,
  isStaticResponse = false,
  hasSanitize = false,
  allowUnsafeValidationDetails = false
}) => ({
  validate: /* @__PURE__ */ __name((type, value = `c.${type}`, error) => `c.set.status=422;throw new ValidationError('${type}',validator.${type},${value},${allowUnsafeValidationDetails}${error ? "," + error : ""})`, "validate"),
  response: /* @__PURE__ */ __name((name = "r") => {
    if (isStaticResponse || !validator.response) return "";
    let code = injectResponse + `
`;
    code += `if(${name} instanceof ElysiaCustomStatusResponse){c.set.status=${name}.code
${name}=${name}.response}if(${name} instanceof Response === false && typeof ${name}?.next !== 'function' && !(${name} instanceof ReadableStream))switch(c.set.status){`;
    for (const [status2, value] of Object.entries(validator.response)) {
      if (code += `
case ${status2}:
`, value.provider === "standard") {
        code += `let vare${status2}=validator.response[${status2}].Check(${name})
if(vare${status2} instanceof Promise)vare${status2}=await vare${status2}
if(vare${status2}.issues)throw new ValidationError('response',validator.response[${status2}],${name},${allowUnsafeValidationDetails},vare${status2}.issues)
${name}=vare${status2}.value
c.set.status=${status2}
break
`;
        continue;
      }
      let noValidate = value.schema?.noValidate === true;
      if (!noValidate && value.schema?.$ref && value.schema?.$defs) {
        const refKey = value.schema.$ref, defKey = typeof refKey == "string" && refKey.includes("/") ? refKey.split("/").pop() : refKey;
        value.schema.$defs[defKey]?.noValidate === true && (noValidate = true);
      }
      const appliedCleaner = noValidate || hasSanitize, clean = /* @__PURE__ */ __name(({ ignoreTryCatch = false } = {}) => composeCleaner({
        name,
        schema: value,
        type: "response",
        typeAlias: `response[${status2}]`,
        normalize,
        ignoreTryCatch
      }), "clean");
      appliedCleaner && (code += clean());
      const applyErrorCleaner = !appliedCleaner && normalize && !noValidate;
      encodeSchema && value.hasTransform && !noValidate ? (code += `try{${name}=validator.response[${status2}].Encode(${name})
`, appliedCleaner || (code += clean({ ignoreTryCatch: true })), code += `c.set.status=${status2}}catch{` + (applyErrorCleaner ? `try{
` + clean({ ignoreTryCatch: true }) + `${name}=validator.response[${status2}].Encode(${name})
}catch{throw new ValidationError('response',validator.response[${status2}],${name},${allowUnsafeValidationDetails})}` : `throw new ValidationError('response',validator.response[${status2}],${name}),${allowUnsafeValidationDetails}`) + "}") : (appliedCleaner || (code += clean()), noValidate || (code += `if(validator.response[${status2}].Check(${name})===false)throw new ValidationError('response',validator.response[${status2}],${name},${allowUnsafeValidationDetails})
c.set.status=${status2}
`)), code += `break
`;
    }
    return code + "}";
  }, "response")
}), "composeValidationFactory");
var isAsyncName = /* @__PURE__ */ __name((v) => (v?.fn ?? v).constructor.name === "AsyncFunction", "isAsyncName");
var matchResponseClone = /=>\s?response\.clone\(/;
var matchFnReturn = /(?:return|=>)\s?\S+\(|a(?:sync|wait)/;
var isAsync = /* @__PURE__ */ __name((v) => {
  const isObject2 = typeof v == "object";
  if (isObject2 && v.isAsync !== void 0) return v.isAsync;
  const fn = isObject2 ? v.fn : v;
  if (fn.constructor.name === "AsyncFunction") return true;
  const literal = fn.toString();
  if (matchResponseClone.test(literal))
    return isObject2 && (v.isAsync = false), false;
  const result = matchFnReturn.test(literal);
  return isObject2 && (v.isAsync = result), result;
}, "isAsync");
var hasReturn = /* @__PURE__ */ __name((v) => {
  const isObject2 = typeof v == "object";
  if (isObject2 && v.hasReturn !== void 0) return v.hasReturn;
  const fnLiteral = isObject2 ? v.fn.toString() : typeof v == "string" ? v.toString() : v, parenthesisEnd = fnLiteral.indexOf(")");
  if (fnLiteral.charCodeAt(parenthesisEnd + 2) === 61 && fnLiteral.charCodeAt(parenthesisEnd + 5) !== 123)
    return isObject2 && (v.hasReturn = true), true;
  const result = fnLiteral.includes("return");
  return isObject2 && (v.hasReturn = result), result;
}, "hasReturn");
var isGenerator = /* @__PURE__ */ __name((v) => {
  const fn = v?.fn ?? v;
  return fn.constructor.name === "AsyncGeneratorFunction" || fn.constructor.name === "GeneratorFunction";
}, "isGenerator");
var coerceTransformDecodeError = /* @__PURE__ */ __name((fnLiteral, type, allowUnsafeValidationDetails = false, value = `c.${type}`) => `try{${fnLiteral}}catch(error){if(error.constructor.name === 'TransformDecodeError'){c.set.status=422
throw error.error ?? new ValidationError('${type}',validator.${type},${value},${allowUnsafeValidationDetails})}}`, "coerceTransformDecodeError");
var composeHandler = /* @__PURE__ */ __name(({
  app: app2,
  path,
  method,
  hooks,
  validator,
  handler,
  allowMeta = false,
  inference
}) => {
  const adapter = app2["~adapter"].composeHandler, adapterHandler = app2["~adapter"].handler, isHandleFn = typeof handler == "function";
  if (!isHandleFn) {
    handler = adapterHandler.mapResponse(handler, {
      // @ts-expect-error private property
      headers: app2.setHeaders ?? {}
    });
    const isResponse = handler instanceof Response || // @ts-ignore If it's not instanceof Response, it might be a polyfill (only on Node)
    handler?.constructor?.name === "Response" && typeof handler?.clone == "function";
    if (hooks.parse?.length && hooks.transform?.length && hooks.beforeHandle?.length && hooks.afterHandle?.length)
      return isResponse ? Function(
        "a",
        `"use strict";
return function(){return a.clone()}`
      )(handler) : Function(
        "a",
        `"use strict";
return function(){return a}`
      )(handler);
    if (isResponse) {
      const response = handler;
      handler = /* @__PURE__ */ __name(() => response.clone(), "handler");
    }
  }
  const handle = isHandleFn ? "handler(c)" : "handler", hasTrace = !!hooks.trace?.length;
  let fnLiteral = "";
  if (inference = sucrose(
    Object.assign({ handler }, hooks),
    inference,
    app2.config.sucrose
  ), adapter.declare) {
    const literal = adapter.declare(inference);
    literal && (fnLiteral += literal);
  }
  inference.server && (fnLiteral += `Object.defineProperty(c,'server',{get:function(){return getServer()}})
`), validator.createBody?.(), validator.createQuery?.(), validator.createHeaders?.(), validator.createParams?.(), validator.createCookie?.(), validator.createResponse?.();
  const hasValidation = !!validator.body || !!validator.headers || !!validator.params || !!validator.query || !!validator.cookie || !!validator.response, hasQuery = inference.query || !!validator.query, requestNoBody = hooks.parse?.length === 1 && // @ts-expect-error
  hooks.parse[0].fn === "none", hasBody = method !== "" && method !== "GET" && method !== "HEAD" && (inference.body || !!validator.body || !!hooks.parse?.length) && !requestNoBody, defaultHeaders = app2.setHeaders, hasDefaultHeaders = defaultHeaders && !!Object.keys(defaultHeaders).length, hasHeaders = inference.headers || !!validator.headers || adapter.preferWebstandardHeaders !== true && inference.body, hasCookie = inference.cookie || !!validator.cookie, cookieMeta = validator.cookie?.config ? mergeCookie(validator?.cookie?.config, app2.config.cookie) : app2.config.cookie;
  let _encodeCookie = "";
  const encodeCookie = /* @__PURE__ */ __name(() => {
    if (_encodeCookie) return _encodeCookie;
    if (cookieMeta?.sign) {
      if (!cookieMeta.secrets)
        throw new Error(
          `t.Cookie required secret which is not set in (${method}) ${path}.`
        );
      const secret = cookieMeta.secrets ? typeof cookieMeta.secrets == "string" ? cookieMeta.secrets : cookieMeta.secrets[0] : void 0;
      if (_encodeCookie += `const _setCookie = c.set.cookie
if(_setCookie){`, cookieMeta.sign === true)
        _encodeCookie += `for(const [key, cookie] of Object.entries(_setCookie)){c.set.cookie[key].value=await signCookie(cookie.value,${secret ? JSON.stringify(secret) : "undefined"})}`;
      else {
        typeof cookieMeta.sign == "string" && (cookieMeta.sign = [cookieMeta.sign]);
        for (const name of cookieMeta.sign)
          _encodeCookie += `if(_setCookie[${JSON.stringify(name)}]?.value)c.set.cookie[${JSON.stringify(name)}].value=await signCookie(_setCookie[${JSON.stringify(name)}].value,${secret ? JSON.stringify(secret) : "undefined"})
`;
      }
      _encodeCookie += `}
`;
    }
    return _encodeCookie;
  }, "encodeCookie"), normalize = app2.config.normalize, encodeSchema = app2.config.encodeSchema, allowUnsafeValidationDetails = app2.config.allowUnsafeValidationDetails, validation = composeValidationFactory({
    normalize,
    validator,
    encodeSchema,
    isStaticResponse: handler instanceof Response,
    hasSanitize: !!app2.config.sanitize,
    allowUnsafeValidationDetails
  });
  hasHeaders && (fnLiteral += adapter.headers), hasTrace && (fnLiteral += `const id=c[ELYSIA_REQUEST_ID]
`);
  const report2 = createReport({
    trace: hooks.trace,
    addFn: /* @__PURE__ */ __name((word) => {
      fnLiteral += word;
    }, "addFn")
  });
  if (fnLiteral += "try{", hasCookie) {
    const get = /* @__PURE__ */ __name((name, defaultValue) => {
      const value = cookieMeta?.[name] ?? defaultValue;
      return value === void 0 ? "" : value ? typeof value == "string" ? `${name}:${JSON.stringify(value)},` : value instanceof Date ? `${name}: new Date(${value.getTime()}),` : `${name}:${value},` : typeof defaultValue == "string" ? `${name}:"${defaultValue}",` : `${name}:${defaultValue},`;
    }, "get"), options = cookieMeta ? `{secrets:${cookieMeta.secrets !== void 0 ? typeof cookieMeta.secrets == "string" ? JSON.stringify(cookieMeta.secrets) : "[" + cookieMeta.secrets.map((x) => JSON.stringify(x)).join(",") + "]" : "undefined"},sign:${cookieMeta.sign === true ? true : cookieMeta.sign !== void 0 ? typeof cookieMeta.sign == "string" ? JSON.stringify(cookieMeta.sign) : "[" + cookieMeta.sign.map((x) => JSON.stringify(x)).join(",") + "]" : "undefined"},` + get("domain") + get("expires") + get("httpOnly") + get("maxAge") + get("path", "/") + get("priority") + get("sameSite") + get("secure") + "}" : "undefined";
    hasHeaders ? fnLiteral += `
c.cookie=await parseCookie(c.set,c.headers.cookie,${options})
` : fnLiteral += `
c.cookie=await parseCookie(c.set,c.request.headers.get('cookie'),${options})
`;
  }
  if (hasQuery) {
    let arrayProperties = {}, objectProperties = {}, hasArrayProperty = false, hasObjectProperty = false;
    if (validator.query?.schema) {
      const schema = unwrapImportSchema(validator.query?.schema);
      if (Kind in schema && schema.properties)
        for (const [key, value] of Object.entries(schema.properties))
          hasElysiaMeta("ArrayQuery", value) && (arrayProperties[key] = true, hasArrayProperty = true), hasElysiaMeta("ObjectString", value) && (objectProperties[key] = true, hasObjectProperty = true);
    }
    fnLiteral += `if(c.qi===-1){c.query=Object.create(null)}else{c.query=parseQueryFromURL(c.url,c.qi+1${//
    hasArrayProperty ? "," + JSON.stringify(arrayProperties) : hasObjectProperty ? ",undefined" : ""}${//
    hasObjectProperty ? "," + JSON.stringify(objectProperties) : ""})}`;
  }
  const isAsyncHandler = typeof handler == "function" && isAsync(handler), saveResponse = hasTrace || hooks.afterResponse?.length ? "c.response=c.responseValue= " : "", responseKeys = Object.keys(validator.response ?? {}), hasMultipleResponses = responseKeys.length > 1, hasSingle200 = responseKeys.length === 0 || responseKeys.length === 1 && responseKeys[0] === "200", maybeAsync = hasCookie || hasBody || isAsyncHandler || !!hooks.parse?.length || !!hooks.afterHandle?.some(isAsync) || !!hooks.beforeHandle?.some(isAsync) || !!hooks.transform?.some(isAsync) || !!hooks.mapResponse?.some(isAsync) || validator.body?.provider === "standard" || validator.headers?.provider === "standard" || validator.query?.provider === "standard" || validator.params?.provider === "standard" || validator.cookie?.provider === "standard" || Object.values(validator.response ?? {}).find(
    (x) => x.provider === "standard"
  ), maybeStream = (typeof handler == "function" ? isGenerator(handler) : false) || !!hooks.beforeHandle?.some(isGenerator) || !!hooks.afterHandle?.some(isGenerator) || !!hooks.transform?.some(isGenerator), hasSet = inference.cookie || inference.set || hasHeaders || hasTrace || hasMultipleResponses || !hasSingle200 || isHandleFn && hasDefaultHeaders || maybeStream;
  let _afterResponse;
  const afterResponse = /* @__PURE__ */ __name((hasStream = true) => {
    if (_afterResponse !== void 0) return _afterResponse;
    if (!hooks.afterResponse?.length && !hasTrace) return "";
    let afterResponse2 = "";
    afterResponse2 += `
setImmediate(async()=>{if(c.responseValue){if(c.responseValue instanceof ElysiaCustomStatusResponse) c.set.status=c.responseValue.code
` + (hasStream ? `if(typeof afterHandlerStreamListener!=='undefined')for await(const v of afterHandlerStreamListener){}
` : "") + `}
`;
    const reporter = createReport({
      trace: hooks.trace,
      addFn: /* @__PURE__ */ __name((word) => {
        afterResponse2 += word;
      }, "addFn")
    })("afterResponse", {
      total: hooks.afterResponse?.length
    });
    if (hooks.afterResponse?.length && hooks.afterResponse)
      for (let i = 0; i < hooks.afterResponse.length; i++) {
        const endUnit = reporter.resolveChild(
          hooks.afterResponse[i].fn.name
        ), prefix = isAsync(hooks.afterResponse[i]) ? "await " : "";
        afterResponse2 += `
${prefix}e.afterResponse[${i}](c)
`, endUnit();
      }
    return reporter.resolve(), afterResponse2 += `})
`, _afterResponse = afterResponse2;
  }, "afterResponse"), mapResponse3 = /* @__PURE__ */ __name((r = "r") => {
    const after = afterResponse(), response = `${hasSet ? "mapResponse" : "mapCompactResponse"}(${saveResponse}${r}${hasSet ? ",c.set" : ""}${mapResponseContext})
`;
    return after ? `const _res=${response}` + after + "return _res" : `return ${response}`;
  }, "mapResponse"), mapResponseContext = maybeStream && adapter.mapResponseContext ? `,${adapter.mapResponseContext}` : "";
  (hasTrace || inference.route) && (fnLiteral += `c.route=\`${path}\`
`), (hasTrace || hooks.afterResponse?.length) && (fnLiteral += `let afterHandlerStreamListener
`);
  const parseReporter = report2("parse", {
    total: hooks.parse?.length
  });
  if (hasBody) {
    const hasBodyInference = !!hooks.parse?.length || inference.body || validator.body;
    adapter.parser.declare && (fnLiteral += adapter.parser.declare), fnLiteral += `
try{`;
    let parser = typeof hooks.parse == "string" ? hooks.parse : Array.isArray(hooks.parse) && hooks.parse.length === 1 ? typeof hooks.parse[0] == "string" ? hooks.parse[0] : typeof hooks.parse[0].fn == "string" ? hooks.parse[0].fn : void 0 : void 0;
    if (!parser && validator.body && !hooks.parse?.length) {
      const schema = validator.body.schema;
      schema && schema.anyOf && schema[Kind] === "Union" && schema.anyOf?.length === 2 && schema.anyOf?.find((x) => x[Kind] === "ElysiaForm") && (parser = "formdata");
    }
    if (parser && defaultParsers.includes(parser)) {
      const reporter = report2("parse", {
        total: hooks.parse?.length
      }), isOptionalBody = !!validator.body?.isOptional;
      switch (parser) {
        case "json":
        case "application/json":
          fnLiteral += adapter.parser.json(isOptionalBody);
          break;
        case "text":
        case "text/plain":
          fnLiteral += adapter.parser.text(isOptionalBody);
          break;
        case "urlencoded":
        case "application/x-www-form-urlencoded":
          fnLiteral += adapter.parser.urlencoded(isOptionalBody);
          break;
        case "arrayBuffer":
        case "application/octet-stream":
          fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
          break;
        case "formdata":
        case "multipart/form-data":
          fnLiteral += adapter.parser.formData(isOptionalBody);
          break;
        default:
          parser[0] in app2["~parser"] && (fnLiteral += hasHeaders ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", fnLiteral += `
if(contentType){const index=contentType.indexOf(';')
if(index!==-1)contentType=contentType.substring(0,index)}
else{contentType=''}c.contentType=contentType
let result=parser['${parser}'](c, contentType)
if(result instanceof Promise)result=await result
if(result instanceof ElysiaCustomStatusResponse)throw result
if(result!==undefined)c.body=result
delete c.contentType
`);
          break;
      }
      reporter.resolve();
    } else if (hasBodyInference) {
      fnLiteral += `
`, fnLiteral += `let contentType
if(c.request.body)`, fnLiteral += hasHeaders ? `contentType=c.headers['content-type']
` : `contentType=c.request.headers.get('content-type')
`;
      let hasDefaultParser = false;
      if (hooks.parse?.length)
        fnLiteral += `if(contentType){
const index=contentType.indexOf(';')

if(index!==-1)contentType=contentType.substring(0,index)}else{contentType=''}let used=false
c.contentType=contentType
`;
      else {
        hasDefaultParser = true;
        const isOptionalBody = !!validator.body?.isOptional;
        fnLiteral += `if(contentType)switch(contentType.charCodeAt(12)){
case 106:` + adapter.parser.json(isOptionalBody) + `break
case 120:` + adapter.parser.urlencoded(isOptionalBody) + `break
case 111:` + adapter.parser.arrayBuffer(isOptionalBody) + `break
case 114:` + adapter.parser.formData(isOptionalBody) + `break
default:if(contentType.charCodeAt(0)===116){` + adapter.parser.text(isOptionalBody) + `}break
}`;
      }
      const reporter = report2("parse", {
        total: hooks.parse?.length
      });
      if (hooks.parse)
        for (let i = 0; i < hooks.parse.length; i++) {
          const name = `bo${i}`;
          if (i !== 0 && (fnLiteral += `
if(!used){`), typeof hooks.parse[i].fn == "string") {
            const endUnit = reporter.resolveChild(
              hooks.parse[i].fn
            ), isOptionalBody = !!validator.body?.isOptional;
            switch (hooks.parse[i].fn) {
              case "json":
              case "application/json":
                hasDefaultParser = true, fnLiteral += adapter.parser.json(isOptionalBody);
                break;
              case "text":
              case "text/plain":
                hasDefaultParser = true, fnLiteral += adapter.parser.text(isOptionalBody);
                break;
              case "urlencoded":
              case "application/x-www-form-urlencoded":
                hasDefaultParser = true, fnLiteral += adapter.parser.urlencoded(isOptionalBody);
                break;
              case "arrayBuffer":
              case "application/octet-stream":
                hasDefaultParser = true, fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
                break;
              case "formdata":
              case "multipart/form-data":
                hasDefaultParser = true, fnLiteral += adapter.parser.formData(isOptionalBody);
                break;
              default:
                fnLiteral += `let ${name}=parser['${hooks.parse[i].fn}'](c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true;}
`;
            }
            endUnit();
          } else {
            const endUnit = reporter.resolveChild(
              hooks.parse[i].fn.name
            );
            fnLiteral += `let ${name}=e.parse[${i}]
${name}=${name}(c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true}`, endUnit();
          }
          if (i !== 0 && (fnLiteral += "}"), hasDefaultParser) break;
        }
      if (reporter.resolve(), !hasDefaultParser) {
        const isOptionalBody = !!validator.body?.isOptional;
        hooks.parse?.length && (fnLiteral += `
if(!used){
`), fnLiteral += `switch(contentType){case 'application/json':
` + adapter.parser.json(isOptionalBody) + `break
case 'text/plain':` + adapter.parser.text(isOptionalBody) + `break
case 'application/x-www-form-urlencoded':` + adapter.parser.urlencoded(isOptionalBody) + `break
case 'application/octet-stream':` + adapter.parser.arrayBuffer(isOptionalBody) + `break
case 'multipart/form-data':` + adapter.parser.formData(isOptionalBody) + `break
`;
        for (const key of Object.keys(app2["~parser"]))
          fnLiteral += `case '${key}':let bo${key}=parser['${key}'](c,contentType)
if(bo${key} instanceof Promise)bo${key}=await bo${key}
if(bo${key} instanceof ElysiaCustomStatusResponse){` + mapResponse3(`bo${key}`) + `}if(bo${key}!==undefined)c.body=bo${key}
break
`;
        hooks.parse?.length && (fnLiteral += "}"), fnLiteral += "}";
      }
      hooks.parse?.length && (fnLiteral += `
delete c.contentType`);
    }
    fnLiteral += "}catch(error){throw new ParseError(error)}";
  }
  if (parseReporter.resolve(), hooks?.transform || hasTrace) {
    const reporter = report2("transform", {
      total: hooks.transform?.length
    });
    if (hooks.transform?.length) {
      fnLiteral += `let transformed
`;
      for (let i = 0; i < hooks.transform.length; i++) {
        const transform = hooks.transform[i], endUnit = reporter.resolveChild(transform.fn.name);
        fnLiteral += isAsync(transform) ? `transformed=await e.transform[${i}](c)
` : `transformed=e.transform[${i}](c)
`, transform.subType === "mapDerive" ? fnLiteral += "if(transformed instanceof ElysiaCustomStatusResponse){" + mapResponse3("transformed") + `}else{transformed.request=c.request
transformed.store=c.store
transformed.qi=c.qi
transformed.path=c.path
transformed.url=c.url
transformed.redirect=c.redirect
transformed.set=c.set
transformed.error=c.error
c=transformed}` : fnLiteral += "if(transformed instanceof ElysiaCustomStatusResponse){" + mapResponse3("transformed") + `}else Object.assign(c,transformed)
`, endUnit();
      }
    }
    reporter.resolve();
  }
  const fileUnions = [];
  if (validator) {
    if (validator.headers) {
      if (validator.headers.hasDefault)
        for (const [key, value] of Object.entries(
          value_exports2.Default(
            // @ts-ignore
            validator.headers.schema,
            {}
          )
        )) {
          const parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
          parsed !== void 0 && (fnLiteral += `c.headers['${key}']??=${parsed}
`);
        }
      fnLiteral += composeCleaner({
        name: "c.headers",
        schema: validator.headers,
        type: "headers",
        normalize
      }), validator.headers.isOptional && (fnLiteral += "if(isNotEmpty(c.headers)){"), validator.headers?.provider === "standard" ? fnLiteral += `let vah=validator.headers.Check(c.headers)
if(vah instanceof Promise)vah=await vah
if(vah.issues){` + validation.validate("headers", void 0, "vah.issues") + `}else{c.headers=vah.value}
` : validator.headers?.schema?.noValidate !== true && (fnLiteral += "if(validator.headers.Check(c.headers) === false){" + validation.validate("headers") + "}"), validator.headers.hasTransform && (fnLiteral += coerceTransformDecodeError(
        `c.headers=validator.headers.Decode(c.headers)
`,
        "headers",
        allowUnsafeValidationDetails
      )), validator.headers.isOptional && (fnLiteral += "}");
    }
    if (validator.params) {
      if (validator.params.hasDefault)
        for (const [key, value] of Object.entries(
          value_exports2.Default(
            // @ts-ignore
            validator.params.schema,
            {}
          )
        )) {
          const parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
          parsed !== void 0 && (fnLiteral += `c.params['${key}']??=${parsed}
`);
        }
      validator.params.provider === "standard" ? fnLiteral += `let vap=validator.params.Check(c.params)
if(vap instanceof Promise)vap=await vap
if(vap.issues){` + validation.validate("params", void 0, "vap.issues") + `}else{c.params=vap.value}
` : validator.params?.schema?.noValidate !== true && (fnLiteral += "if(validator.params.Check(c.params)===false){" + validation.validate("params") + "}"), validator.params.hasTransform && (fnLiteral += coerceTransformDecodeError(
        `c.params=validator.params.Decode(c.params)
`,
        "params",
        allowUnsafeValidationDetails
      ));
    }
    if (validator.query) {
      if (Kind in validator.query?.schema && validator.query.hasDefault)
        for (const [key, value] of Object.entries(
          value_exports2.Default(
            // @ts-ignore
            validator.query.schema,
            {}
          )
        )) {
          const parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
          parsed !== void 0 && (fnLiteral += `if(c.query['${key}']===undefined)c.query['${key}']=${parsed}
`);
        }
      fnLiteral += composeCleaner({
        name: "c.query",
        schema: validator.query,
        type: "query",
        normalize
      }), validator.query.isOptional && (fnLiteral += "if(isNotEmpty(c.query)){"), validator.query.provider === "standard" ? fnLiteral += `let vaq=validator.query.Check(c.query)
if(vaq instanceof Promise)vaq=await vaq
if(vaq.issues){` + validation.validate("query", void 0, "vaq.issues") + `}else{c.query=vaq.value}
` : validator.query?.schema?.noValidate !== true && (fnLiteral += "if(validator.query.Check(c.query)===false){" + validation.validate("query") + "}"), validator.query.hasTransform && (fnLiteral += coerceTransformDecodeError(
        `c.query=validator.query.Decode(c.query)
`,
        "query",
        allowUnsafeValidationDetails
      ), fnLiteral += coerceTransformDecodeError(
        `c.query=validator.query.Decode(c.query)
`,
        "query",
        allowUnsafeValidationDetails
      )), validator.query.isOptional && (fnLiteral += "}");
    }
    if (hasBody && validator.body) {
      (validator.body.hasTransform || validator.body.isOptional) && (fnLiteral += `const isNotEmptyObject=c.body&&(typeof c.body==="object"&&(isNotEmpty(c.body)||c.body instanceof ArrayBuffer))
`);
      const hasUnion = isUnion(validator.body.schema);
      let hasNonUnionFileWithDefault = false;
      if (validator.body.hasDefault) {
        let value = value_exports2.Default(
          validator.body.schema,
          validator.body.schema.type === "object" || unwrapImportSchema(validator.body.schema)[Kind] === "Object" ? {} : void 0
        );
        const schema = unwrapImportSchema(validator.body.schema);
        if (!hasUnion && value && typeof value == "object" && (hasType("File", schema) || hasType("Files", schema))) {
          hasNonUnionFileWithDefault = true;
          for (const [k, v] of Object.entries(value))
            (v === "File" || v === "Files") && delete value[k];
          isNotEmpty(value) || (value = void 0);
        }
        const parsed = typeof value == "object" ? JSON.stringify(value) : typeof value == "string" ? `'${value}'` : value;
        value != null && (Array.isArray(value) ? fnLiteral += `if(!c.body)c.body=${parsed}
` : typeof value == "object" ? fnLiteral += `c.body=Object.assign(${parsed},c.body)
` : fnLiteral += `c.body=${parsed}
`), fnLiteral += composeCleaner({
          name: "c.body",
          schema: validator.body,
          type: "body",
          normalize
        }), validator.body.provider === "standard" ? fnLiteral += `let vab=validator.body.Check(c.body)
if(vab instanceof Promise)vab=await vab
if(vab.issues){` + validation.validate("body", void 0, "vab.issues") + `}else{c.body=vab.value}
` : validator.body?.schema?.noValidate !== true && (validator.body.isOptional ? fnLiteral += "if(isNotEmptyObject&&validator.body.Check(c.body)===false){" + validation.validate("body") + "}" : fnLiteral += "if(validator.body.Check(c.body)===false){" + validation.validate("body") + "}");
      } else
        fnLiteral += composeCleaner({
          name: "c.body",
          schema: validator.body,
          type: "body",
          normalize
        }), validator.body.provider === "standard" ? fnLiteral += `let vab=validator.body.Check(c.body)
if(vab instanceof Promise)vab=await vab
if(vab.issues){` + validation.validate("body", void 0, "vab.issues") + `}else{c.body=vab.value}
` : validator.body?.schema?.noValidate !== true && (validator.body.isOptional ? fnLiteral += "if(isNotEmptyObject&&validator.body.Check(c.body)===false){" + validation.validate("body") + "}" : fnLiteral += "if(validator.body.Check(c.body)===false){" + validation.validate("body") + "}");
      if (validator.body.hasTransform && (fnLiteral += coerceTransformDecodeError(
        `if(isNotEmptyObject)c.body=validator.body.Decode(c.body)
`,
        "body",
        allowUnsafeValidationDetails
      )), hasUnion && validator.body.schema.anyOf?.length) {
        const iterator = Object.values(
          validator.body.schema.anyOf
        );
        for (let i = 0; i < iterator.length; i++) {
          const type = iterator[i];
          if (hasType("File", type) || hasType("Files", type)) {
            const candidate = getSchemaValidator(type, {
              // @ts-expect-error private property
              modules: app2.definitions.typebox,
              dynamic: !app2.config.aot,
              // @ts-expect-error private property
              models: app2.definitions.type,
              normalize: app2.config.normalize,
              additionalCoerce: coercePrimitiveRoot(),
              sanitize: /* @__PURE__ */ __name(() => app2.config.sanitize, "sanitize")
            });
            if (candidate) {
              const isFirst = fileUnions.length === 0, iterator2 = Object.entries(
                type.properties
              );
              let validator2 = isFirst ? `
` : " else ";
              validator2 += `if(fileUnions[${fileUnions.length}].Check(c.body)){`;
              let validateFile2 = "", validatorLength = 0;
              for (let i2 = 0; i2 < iterator2.length; i2++) {
                const [k, v] = iterator2[i2];
                !v.extension || v[Kind] !== "File" && v[Kind] !== "Files" || (validatorLength && (validateFile2 += ","), validateFile2 += `fileType(c.body.${k},${JSON.stringify(v.extension)},'body.${k}')`, validatorLength++);
              }
              validateFile2 && (validatorLength === 1 ? validator2 += `await ${validateFile2}
` : validatorLength > 1 && (validator2 += `await Promise.all([${validateFile2}])
`), validator2 += "}", fnLiteral += validator2, fileUnions.push(candidate));
            }
          }
        }
      } else if (hasNonUnionFileWithDefault || !hasUnion && (hasType(
        "File",
        unwrapImportSchema(validator.body.schema)
      ) || hasType(
        "Files",
        unwrapImportSchema(validator.body.schema)
      ))) {
        let validateFile2 = "", i = 0;
        for (const [k, v] of Object.entries(
          unwrapImportSchema(validator.body.schema).properties
        ))
          !v.extension || v[Kind] !== "File" && v[Kind] !== "Files" || (i && (validateFile2 += ","), validateFile2 += `fileType(c.body.${k},${JSON.stringify(v.extension)},'body.${k}')`, i++);
        i && (fnLiteral += `
`), i === 1 ? fnLiteral += `await ${validateFile2}
` : i > 1 && (fnLiteral += `await Promise.all([${validateFile2}])
`);
      }
    }
    validator.cookie && (validator.cookie.config = mergeCookie(
      validator.cookie.config,
      validator.cookie?.config ?? {}
    ), fnLiteral += `let cookieValue={}
for(const [key,value] of Object.entries(c.cookie))cookieValue[key]=value.value
`, validator.cookie.isOptional && (fnLiteral += "if(isNotEmpty(c.cookie)){"), validator.cookie.provider === "standard" ? (fnLiteral += `let vac=validator.cookie.Check(cookieValue)
if(vac instanceof Promise)vac=await vac
if(vac.issues){` + validation.validate("cookie", void 0, "vac.issues") + `}else{cookieValue=vac.value}
`, fnLiteral += `for(const k of Object.keys(cookieValue))c.cookie[k].value=cookieValue[k]
`) : validator.body?.schema?.noValidate !== true && (fnLiteral += "if(validator.cookie.Check(cookieValue)===false){" + validation.validate("cookie", "cookieValue") + "}", validator.cookie.hasTransform && (fnLiteral += coerceTransformDecodeError(
      "for(const [key,value] of Object.entries(validator.cookie.Decode(cookieValue))){c.cookie[key].cookie.value = value}",
      "cookie",
      allowUnsafeValidationDetails
    ))), validator.cookie.isOptional && (fnLiteral += "}"));
  }
  if (hooks?.beforeHandle || hasTrace) {
    const reporter = report2("beforeHandle", {
      total: hooks.beforeHandle?.length
    });
    let hasResolve = false;
    if (hooks.beforeHandle?.length)
      for (let i = 0; i < hooks.beforeHandle.length; i++) {
        const beforeHandle = hooks.beforeHandle[i], endUnit = reporter.resolveChild(beforeHandle.fn.name), returning = hasReturn(beforeHandle);
        if (beforeHandle.subType === "resolve" || beforeHandle.subType === "mapResolve")
          hasResolve || (hasResolve = true, fnLiteral += `
let resolved
`), fnLiteral += isAsync(beforeHandle) ? `resolved=await e.beforeHandle[${i}](c);
` : `resolved=e.beforeHandle[${i}](c);
`, beforeHandle.subType === "mapResolve" ? fnLiteral += "if(resolved instanceof ElysiaCustomStatusResponse){" + mapResponse3("resolved") + `}else{resolved.request=c.request
resolved.store=c.store
resolved.qi=c.qi
resolved.path=c.path
resolved.url=c.url
resolved.redirect=c.redirect
resolved.set=c.set
resolved.error=c.error
c=resolved}` : fnLiteral += "if(resolved instanceof ElysiaCustomStatusResponse){" + mapResponse3("resolved") + `}else Object.assign(c, resolved)
`, endUnit();
        else if (!returning)
          fnLiteral += isAsync(beforeHandle) ? `await e.beforeHandle[${i}](c)
` : `e.beforeHandle[${i}](c)
`, endUnit();
        else {
          if (fnLiteral += isAsync(beforeHandle) ? `be=await e.beforeHandle[${i}](c)
` : `be=e.beforeHandle[${i}](c)
`, endUnit("be"), fnLiteral += "if(be!==undefined){", reporter.resolve(), hooks.afterHandle?.length || hasTrace) {
            report2("handle", {
              name: isHandleFn ? handler.name : void 0
            }).resolve();
            const reporter2 = report2("afterHandle", {
              total: hooks.afterHandle?.length
            });
            if (hooks.afterHandle?.length)
              for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
                const hook = hooks.afterHandle[i2], returning2 = hasReturn(hook), endUnit2 = reporter2.resolveChild(
                  hook.fn.name
                );
                fnLiteral += `c.response=c.responseValue=be
`, returning2 ? (fnLiteral += isAsync(hook.fn) ? `af=await e.afterHandle[${i2}](c)
` : `af=e.afterHandle[${i2}](c)
`, fnLiteral += `if(af!==undefined) c.response=c.responseValue=be=af
`) : fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i2}](c, be)
` : `e.afterHandle[${i2}](c, be)
`, endUnit2("af");
              }
            reporter2.resolve();
          }
          validator.response && (fnLiteral += validation.response("be"));
          const mapResponseReporter = report2("mapResponse", {
            total: hooks.mapResponse?.length
          });
          if (hooks.mapResponse?.length) {
            fnLiteral += `c.response=c.responseValue=be
`;
            for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
              const mapResponse22 = hooks.mapResponse[i2], endUnit2 = mapResponseReporter.resolveChild(
                mapResponse22.fn.name
              );
              fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse22) ? "await " : ""}e.mapResponse[${i2}](c)
if(mr!==undefined)be=c.response=c.responseValue=mr}`, endUnit2();
            }
          }
          mapResponseReporter.resolve(), fnLiteral += afterResponse(), fnLiteral += encodeCookie(), fnLiteral += `return mapEarlyResponse(${saveResponse}be,c.set${mapResponseContext})}
`;
        }
      }
    reporter.resolve();
  }
  function reportHandler(name) {
    const handleReporter = report2("handle", {
      name,
      alias: "reportHandler"
    });
    return () => {
      hasTrace && (fnLiteral += 'if(r&&(r[Symbol.iterator]||r[Symbol.asyncIterator])&&typeof r.next==="function"){' + (maybeAsync ? "" : "(async()=>{") + `const stream=await tee(r,3)
r=stream[0]
const listener=stream[1]
` + (hasTrace || hooks.afterResponse?.length ? `afterHandlerStreamListener=stream[2]
` : "") + `setImmediate(async ()=>{if(listener)for await(const v of listener){}
`, handleReporter.resolve(), fnLiteral += "})" + (maybeAsync ? "" : "})()") + "}else{", handleReporter.resolve(), fnLiteral += `}
`);
    };
  }
  __name(reportHandler, "reportHandler");
  if (hooks.afterHandle?.length || hasTrace) {
    const resolveHandler = reportHandler(
      isHandleFn ? handler.name : void 0
    );
    hooks.afterHandle?.length ? fnLiteral += isAsyncHandler ? `let r=c.response=c.responseValue=await ${handle}
` : `let r=c.response=c.responseValue=${handle}
` : fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, resolveHandler();
    const reporter = report2("afterHandle", {
      total: hooks.afterHandle?.length
    });
    if (hooks.afterHandle?.length)
      for (let i = 0; i < hooks.afterHandle.length; i++) {
        const hook = hooks.afterHandle[i], returning = hasReturn(hook), endUnit = reporter.resolveChild(hook.fn.name);
        returning ? (fnLiteral += isAsync(hook.fn) ? `af=await e.afterHandle[${i}](c)
` : `af=e.afterHandle[${i}](c)
`, endUnit("af"), validator.response ? (fnLiteral += "if(af!==undefined){", reporter.resolve(), fnLiteral += validation.response("af"), fnLiteral += "c.response=c.responseValue=af}") : (fnLiteral += "if(af!==undefined){", reporter.resolve(), fnLiteral += "c.response=c.responseValue=af}")) : (fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i}](c)
` : `e.afterHandle[${i}](c)
`, endUnit());
      }
    reporter.resolve(), hooks.afterHandle?.length && (fnLiteral += `r=c.response
`), validator.response && (fnLiteral += validation.response()), fnLiteral += encodeCookie();
    const mapResponseReporter = report2("mapResponse", {
      total: hooks.mapResponse?.length
    });
    if (hooks.mapResponse?.length)
      for (let i = 0; i < hooks.mapResponse.length; i++) {
        const mapResponse22 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(
          mapResponse22.fn.name
        );
        fnLiteral += `mr=${isAsyncName(mapResponse22) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr
`, endUnit();
      }
    mapResponseReporter.resolve(), fnLiteral += mapResponse3();
  } else {
    const resolveHandler = reportHandler(
      isHandleFn ? handler.name : void 0
    );
    if (validator.response || hooks.mapResponse?.length || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, resolveHandler(), validator.response && (fnLiteral += validation.response());
      const mapResponseReporter = report2("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += `
c.response=c.responseValue=r
`;
        for (let i = 0; i < hooks.mapResponse.length; i++) {
          const mapResponse22 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(
            mapResponse22.fn.name
          );
          fnLiteral += `
if(mr===undefined){mr=${isAsyncName(mapResponse22) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr}
`, endUnit();
        }
      }
      mapResponseReporter.resolve(), fnLiteral += encodeCookie(), handler instanceof Response ? (fnLiteral += afterResponse(), fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})
else return ${handle}.clone()` : `return ${handle}.clone()`, fnLiteral += `
`) : fnLiteral += mapResponse3();
    } else if (hasCookie || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, resolveHandler();
      const mapResponseReporter = report2("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += `c.response=c.responseValue= r
`;
        for (let i = 0; i < hooks.mapResponse.length; i++) {
          const mapResponse22 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(
            mapResponse22.fn.name
          );
          fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse22) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr}`, endUnit();
        }
      }
      mapResponseReporter.resolve(), fnLiteral += encodeCookie() + mapResponse3();
    } else {
      resolveHandler();
      const handled = isAsyncHandler ? `await ${handle}` : handle;
      handler instanceof Response ? (fnLiteral += afterResponse(), fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})
else return ${handle}.clone()
` : `return ${handle}.clone()
`) : fnLiteral += mapResponse3(handled);
    }
  }
  if (fnLiteral += `
}catch(error){`, !maybeAsync && hooks.error?.length && (fnLiteral += "return(async()=>{"), fnLiteral += `const set=c.set
if(!set.status||set.status<300)set.status=error?.status||500
`, hasCookie && (fnLiteral += encodeCookie()), hasTrace && hooks.trace)
    for (let i = 0; i < hooks.trace.length; i++)
      fnLiteral += `report${i}?.resolve(error);reportChild${i}?.(error)
`;
  const errorReporter = report2("error", {
    total: hooks.error?.length
  });
  if (hooks.error?.length) {
    fnLiteral += `c.error=error
`, hasValidation ? fnLiteral += `if(error instanceof TypeBoxError){c.code="VALIDATION"
c.set.status=422}else{c.code=error.code??error[ERROR_CODE]??"UNKNOWN"}` : fnLiteral += `c.code=error.code??error[ERROR_CODE]??"UNKNOWN"
`, fnLiteral += `let er
`, hooks.mapResponse?.length && (fnLiteral += `let mep
`);
    for (let i = 0; i < hooks.error.length; i++) {
      const endUnit = errorReporter.resolveChild(hooks.error[i].fn.name);
      if (isAsync(hooks.error[i]) ? fnLiteral += `er=await e.error[${i}](c)
` : fnLiteral += `er=e.error[${i}](c)
if(er instanceof Promise)er=await er
`, endUnit(), hooks.mapResponse?.length) {
        const mapResponseReporter = report2("mapResponse", {
          total: hooks.mapResponse?.length
        });
        for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
          const mapResponse22 = hooks.mapResponse[i2], endUnit2 = mapResponseReporter.resolveChild(
            mapResponse22.fn.name
          );
          fnLiteral += `c.response=c.responseValue=er
mep=e.mapResponse[${i2}](c)
if(mep instanceof Promise)er=await er
if(mep!==undefined)er=mep
`, endUnit2();
        }
        mapResponseReporter.resolve();
      }
      if (fnLiteral += `er=mapEarlyResponse(er,set${mapResponseContext})
`, fnLiteral += "if(er){", hasTrace && hooks.trace) {
        for (let i2 = 0; i2 < hooks.trace.length; i2++)
          fnLiteral += `report${i2}.resolve()
`;
        errorReporter.resolve();
      }
      fnLiteral += afterResponse(false), fnLiteral += "return er}";
    }
  }
  errorReporter.resolve(), fnLiteral += "return handleError(c,error,true)", !maybeAsync && hooks.error?.length && (fnLiteral += "})()"), fnLiteral += "}";
  const adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  let init = "const {handler,handleError,hooks:e, " + allocateIf("validator,", hasValidation) + "mapResponse,mapCompactResponse,mapEarlyResponse,isNotEmpty,utils:{" + allocateIf("parseQuery,", hasBody) + allocateIf("parseQueryFromURL,", hasQuery) + "},error:{" + allocateIf("ValidationError,", hasValidation) + allocateIf("ParseError", hasBody) + "},fileType,schema,definitions,tee,ERROR_CODE," + allocateIf("parseCookie,", hasCookie) + allocateIf("signCookie,", hasCookie) + allocateIf("decodeURIComponent,", hasQuery) + "ElysiaCustomStatusResponse," + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + allocateIf("parser,", hooks.parse?.length) + allocateIf("getServer,", inference.server) + allocateIf("fileUnions,", fileUnions.length) + adapterVariables + allocateIf("TypeBoxError", hasValidation) + `}=hooks
const trace=e.trace
return ${maybeAsync ? "async " : ""}function handle(c){`;
  hooks.beforeHandle?.length && (init += `let be
`), hooks.afterHandle?.length && (init += `let af
`), hooks.mapResponse?.length && (init += `let mr
`), allowMeta && (init += `c.schema=schema
c.defs=definitions
`), fnLiteral = init + fnLiteral + "}", init = "";
  try {
    return Function(
      "hooks",
      `"use strict";
` + fnLiteral
    )({
      handler,
      hooks: lifeCycleToFn(hooks),
      validator: hasValidation ? validator : void 0,
      // @ts-expect-error
      handleError: app2.handleError,
      mapResponse: adapterHandler.mapResponse,
      mapCompactResponse: adapterHandler.mapCompactResponse,
      mapEarlyResponse: adapterHandler.mapEarlyResponse,
      isNotEmpty,
      utils: {
        parseQuery: hasBody ? parseQuery : void 0,
        parseQueryFromURL: hasQuery ? validator.query?.provider === "standard" ? parseQueryStandardSchema : parseQueryFromURL : void 0
      },
      error: {
        ValidationError: hasValidation ? ValidationError : void 0,
        ParseError: hasBody ? ParseError2 : void 0
      },
      fileType,
      schema: app2.router.history,
      // @ts-expect-error
      definitions: app2.definitions.type,
      tee,
      ERROR_CODE,
      parseCookie: hasCookie ? parseCookie : void 0,
      signCookie: hasCookie ? signCookie : void 0,
      Cookie: hasCookie ? Cookie : void 0,
      decodeURIComponent: hasQuery ? import_fast_decode_uri_component3.default : void 0,
      ElysiaCustomStatusResponse,
      ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : void 0,
      ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : void 0,
      // @ts-expect-error private property
      getServer: inference.server ? () => app2.getServer() : void 0,
      fileUnions: fileUnions.length ? fileUnions : void 0,
      TypeBoxError: hasValidation ? TypeBoxError : void 0,
      parser: app2["~parser"],
      ...adapter.inject
    });
  } catch (error) {
    const debugHooks = lifeCycleToFn(hooks);
    console.log("[Composer] failed to generate optimized handler"), console.log("---"), console.log({
      handler: typeof handler == "function" ? handler.toString() : handler,
      instruction: fnLiteral,
      hooks: {
        ...debugHooks,
        // @ts-ignore
        transform: debugHooks?.transform?.map?.((x) => x.toString()),
        // @ts-ignore
        resolve: debugHooks?.resolve?.map?.((x) => x.toString()),
        // @ts-ignore
        beforeHandle: debugHooks?.beforeHandle?.map?.(
          (x) => x.toString()
        ),
        // @ts-ignore
        afterHandle: debugHooks?.afterHandle?.map?.(
          (x) => x.toString()
        ),
        // @ts-ignore
        mapResponse: debugHooks?.mapResponse?.map?.(
          (x) => x.toString()
        ),
        // @ts-ignore
        parse: debugHooks?.parse?.map?.((x) => x.toString()),
        // @ts-ignore
        error: debugHooks?.error?.map?.((x) => x.toString()),
        // @ts-ignore
        afterResponse: debugHooks?.afterResponse?.map?.(
          (x) => x.toString()
        ),
        // @ts-ignore
        stop: debugHooks?.stop?.map?.((x) => x.toString())
      },
      validator,
      // @ts-expect-error
      definitions: app2.definitions.type,
      error
    }), console.log("---"), process.exit(1);
  }
}, "composeHandler");
var createOnRequestHandler = /* @__PURE__ */ __name((app2, addFn) => {
  let fnLiteral = "";
  const reporter = createReport({
    trace: app2.event.trace,
    addFn: addFn ?? ((word) => {
      fnLiteral += word;
    })
  })("request", {
    total: app2.event.request?.length
  });
  if (app2.event.request?.length) {
    fnLiteral += "try{";
    for (let i = 0; i < app2.event.request.length; i++) {
      const hook = app2.event.request[i], withReturn = hasReturn(hook), maybeAsync = isAsync(hook), endUnit = reporter.resolveChild(app2.event.request[i].fn.name);
      withReturn ? (fnLiteral += `re=mapEarlyResponse(${maybeAsync ? "await " : ""}onRequest[${i}](c),c.set)
`, endUnit("re"), fnLiteral += `if(re!==undefined)return re
`) : (fnLiteral += `${maybeAsync ? "await " : ""}onRequest[${i}](c)
`, endUnit());
    }
    fnLiteral += "}catch(error){return app.handleError(c,error,false)}";
  }
  return reporter.resolve(), fnLiteral;
}, "createOnRequestHandler");
var createHoc = /* @__PURE__ */ __name((app2, fnName = "map") => {
  const hoc = app2.extender.higherOrderFunctions;
  if (!hoc.length) return "return " + fnName;
  const adapter = app2["~adapter"].composeGeneralHandler;
  let handler = fnName;
  for (let i = 0; i < hoc.length; i++)
    handler = `hoc[${i}](${handler},${adapter.parameters})`;
  return `return function hocMap(${adapter.parameters}){return ${handler}(${adapter.parameters})}`;
}, "createHoc");
var composeGeneralHandler = /* @__PURE__ */ __name((app2) => {
  const adapter = app2["~adapter"].composeGeneralHandler;
  app2.router.http.build();
  const isWebstandard = app2["~adapter"].isWebStandard, hasTrace = app2.event.trace?.length;
  let fnLiteral = "";
  const router = app2.router;
  let findDynamicRoute = router.http.root.WS ? "const route=router.find(r.method==='GET'&&r.headers.get('upgrade')==='websocket'?'WS':r.method,p)" : "const route=router.find(r.method,p)";
  findDynamicRoute += router.http.root.ALL ? `??router.find('ALL',p)
` : `
`, isWebstandard && (findDynamicRoute += 'if(r.method==="HEAD"){const route=router.find("GET",p);if(route){c.params=route.params;const _res=route.store.handler?route.store.handler(c):route.store.compile()(c);if(_res)return Promise.resolve(_res).then((_res)=>{if(!_res.headers)_res.headers=new Headers();return getResponseLength(_res).then((length)=>{_res.headers.set("content-length", length);return new Response(null,{status:_res.status,statusText:_res.statusText,headers:_res.headers});})});}}');
  let afterResponse = `c.error=notFound
`;
  if (app2.event.afterResponse?.length && !app2.event.error) {
    afterResponse = `
c.error=notFound
`;
    const prefix = app2.event.afterResponse.some(isAsync) ? "async" : "";
    afterResponse += `
setImmediate(${prefix}()=>{if(c.responseValue instanceof ElysiaCustomStatusResponse) c.set.status=c.responseValue.code
`;
    for (let i = 0; i < app2.event.afterResponse.length; i++) {
      const fn2 = app2.event.afterResponse[i].fn;
      afterResponse += `
${isAsyncName(fn2) ? "await " : ""}afterResponse[${i}](c)
`;
    }
    afterResponse += `})
`;
  }
  app2.inference.query && (afterResponse += `
if(c.qi===-1){c.query={}}else{c.query=parseQueryFromURL(c.url,c.qi+1)}`);
  const error404 = adapter.error404(
    !!app2.event.request?.length,
    !!app2.event.error?.length,
    afterResponse
  );
  findDynamicRoute += error404.code, findDynamicRoute += `
c.params=route.params
if(route.store.handler)return route.store.handler(c)
return route.store.compile()(c)
`;
  let switchMap = "";
  for (const [path, methods] of Object.entries(router.static)) {
    switchMap += `case'${path}':`, app2.config.strictPath !== true && (switchMap += `case'${getLoosePath(path)}':`);
    const encoded = encodePath(path);
    path !== encoded && (switchMap += `case'${encoded}':`), switchMap += "switch(r.method){", ("GET" in methods || "WS" in methods) && (switchMap += "case 'GET':", "WS" in methods && (switchMap += `if(r.headers.get('upgrade')==='websocket')return ht[${methods.WS}].composed(c)
`, "GET" in methods || ("ALL" in methods ? switchMap += `return ht[${methods.ALL}].composed(c)
` : switchMap += `break map
`)), "GET" in methods && (switchMap += `return ht[${methods.GET}].composed(c)
`)), isWebstandard && ("GET" in methods || "ALL" in methods) && !("HEAD" in methods) && (switchMap += `case 'HEAD':return Promise.resolve(ht[${methods.GET ?? methods.ALL}].composed(c)).then(_ht=>getResponseLength(_ht).then((length)=>{_ht.headers.set('content-length', length)
return new Response(null,{status:_ht.status,statusText:_ht.statusText,headers:_ht.headers})
}))
`);
    for (const [method, index] of Object.entries(methods))
      method === "ALL" || method === "GET" || method === "WS" || (switchMap += `case '${method}':return ht[${index}].composed(c)
`);
    "ALL" in methods ? switchMap += `default:return ht[${methods.ALL}].composed(c)
` : switchMap += `default:break map
`, switchMap += "}";
  }
  const maybeAsync = !!app2.event.request?.some(isAsync), adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  fnLiteral += `
const {app,mapEarlyResponse,NotFoundError,randomId,handleError,status,redirect,getResponseLength,ElysiaCustomStatusResponse,` + // @ts-ignore
  allocateIf("parseQueryFromURL,", app2.inference.query) + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + adapterVariables + `}=data
const store=app.singleton.store
const decorator=app.singleton.decorator
const staticRouter=app.router.static.http
const ht=app.router.history
const router=app.router.http
const trace=app.event.trace?.map(x=>typeof x==='function'?x:x.fn)??[]
const notFound=new NotFoundError()
const hoc=app.extender.higherOrderFunctions.map(x=>x.fn)
`, app2.event.request?.length && (fnLiteral += `const onRequest=app.event.request.map(x=>x.fn)
`), app2.event.afterResponse?.length && (fnLiteral += `const afterResponse=app.event.afterResponse.map(x=>x.fn)
`), fnLiteral += error404.declare, app2.event.trace?.length && (fnLiteral += "const " + app2.event.trace.map((_, i) => `tr${i}=app.event.trace[${i}].fn`).join(",") + `
`), fnLiteral += `${maybeAsync ? "async " : ""}function map(${adapter.parameters}){`, app2.event.request?.length && (fnLiteral += `let re
`), fnLiteral += adapter.createContext(app2), app2.event.trace?.length && (fnLiteral += "c[ELYSIA_TRACE]=[" + app2.event.trace.map((_, i) => `tr${i}(c)`).join(",") + `]
`), fnLiteral += createOnRequestHandler(app2), switchMap && (fnLiteral += `
map: switch(p){
` + switchMap + "}"), fnLiteral += findDynamicRoute + `}
` + createHoc(app2);
  const handleError = composeErrorHandler(app2);
  app2.handleError = handleError;
  const fn = Function(
    "data",
    `"use strict";
` + fnLiteral
  )({
    app: app2,
    mapEarlyResponse: app2["~adapter"].handler.mapEarlyResponse,
    NotFoundError,
    randomId,
    handleError,
    status,
    redirect,
    getResponseLength,
    ElysiaCustomStatusResponse,
    // @ts-ignore
    parseQueryFromURL: app2.inference.query ? parseQueryFromURL : void 0,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : void 0,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : void 0,
    ...adapter.inject
  });
  return isBun && Bun.gc(false), fn;
}, "composeGeneralHandler");
var composeErrorHandler = /* @__PURE__ */ __name((app2) => {
  const hooks = app2.event;
  let fnLiteral = "";
  const adapter = app2["~adapter"].composeError, adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "", hasTrace = !!app2.event.trace?.length;
  fnLiteral += "const {mapResponse,ERROR_CODE,ElysiaCustomStatusResponse,ValidationError,TransformDecodeError," + allocateIf("onError,", app2.event.error) + allocateIf("afterResponse,", app2.event.afterResponse) + allocateIf("trace,", app2.event.trace) + allocateIf("onMapResponse,", app2.event.mapResponse) + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + adapterVariables + `}=inject
`, fnLiteral += "return async function(context,error,skipGlobal){", fnLiteral += "", hasTrace && (fnLiteral += `const id=context[ELYSIA_REQUEST_ID]
`);
  const report2 = createReport({
    context: "context",
    trace: hooks.trace,
    addFn: /* @__PURE__ */ __name((word) => {
      fnLiteral += word;
    }, "addFn")
  }), afterResponse = /* @__PURE__ */ __name(() => {
    if (!hooks.afterResponse?.length && !hasTrace) return "";
    let afterResponse2 = "";
    const prefix = hooks.afterResponse?.some(isAsync) ? "async" : "";
    afterResponse2 += `
setImmediate(${prefix}()=>{`;
    const reporter = createReport({
      context: "context",
      trace: hooks.trace,
      addFn: /* @__PURE__ */ __name((word) => {
        afterResponse2 += word;
      }, "addFn")
    })("afterResponse", {
      total: hooks.afterResponse?.length,
      name: "context"
    });
    if (hooks.afterResponse?.length && hooks.afterResponse)
      for (let i = 0; i < hooks.afterResponse.length; i++) {
        const fn = hooks.afterResponse[i].fn, endUnit = reporter.resolveChild(fn.name);
        afterResponse2 += `
${isAsyncName(fn) ? "await " : ""}afterResponse[${i}](context)
`, endUnit();
      }
    return reporter.resolve(), afterResponse2 += `})
`, afterResponse2;
  }, "afterResponse");
  fnLiteral += `const set=context.set
let _r
if(!context.code)context.code=error.code??error[ERROR_CODE]
if(!(context.error instanceof Error))context.error=error
if(error instanceof ElysiaCustomStatusResponse){set.status=error.status=error.code
error.message=error.response}`, adapter.declare && (fnLiteral += adapter.declare);
  const saveResponse = hasTrace || hooks.afterResponse?.length ? "context.response = " : "";
  if (fnLiteral += `if(typeof error?.toResponse==='function'&&!(error instanceof ValidationError)&&!(error instanceof TransformDecodeError)){try{let raw=error.toResponse()
if(typeof raw?.then==='function')raw=await raw
if(raw instanceof Response)set.status=raw.status
context.response=context.responseValue=raw
}catch(toResponseError){
}
}
`, app2.event.error)
    for (let i = 0; i < app2.event.error.length; i++) {
      const handler = app2.event.error[i], response = `${isAsync(handler) ? "await " : ""}onError[${i}](context)
`;
      if (fnLiteral += "if(skipGlobal!==true&&!context.response){", hasReturn(handler)) {
        fnLiteral += `_r=${response}
if(_r!==undefined){if(_r instanceof Response){` + afterResponse() + `return mapResponse(_r,set${adapter.mapResponseContext})}if(_r instanceof ElysiaCustomStatusResponse){error.status=error.code
error.message = error.response}if(set.status===200||!set.status)set.status=error.status
`;
        const mapResponseReporter2 = report2("mapResponse", {
          total: hooks.mapResponse?.length,
          name: "context"
        });
        if (hooks.mapResponse?.length)
          for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
            const mapResponse3 = hooks.mapResponse[i2], endUnit = mapResponseReporter2.resolveChild(
              mapResponse3.fn.name
            );
            fnLiteral += `context.response=context.responseValue=_r_r=${isAsyncName(mapResponse3) ? "await " : ""}onMapResponse[${i2}](context)
`, endUnit();
          }
        mapResponseReporter2.resolve(), fnLiteral += afterResponse() + `return mapResponse(${saveResponse}_r,set${adapter.mapResponseContext})}`;
      } else fnLiteral += response;
      fnLiteral += "}";
    }
  fnLiteral += `if(error instanceof ValidationError||error instanceof TransformDecodeError){
if(error.error)error=error.error
set.status=error.status??422
` + afterResponse() + adapter.validationError + `
}
`, fnLiteral += "if(!context.response&&error instanceof Error){" + afterResponse() + adapter.unknownError + `
}`;
  const mapResponseReporter = report2("mapResponse", {
    total: hooks.mapResponse?.length,
    name: "context"
  });
  if (fnLiteral += `
if(!context.response)context.response=context.responseValue=error.message??error
`, hooks.mapResponse?.length) {
    fnLiteral += `let mr
`;
    for (let i = 0; i < hooks.mapResponse.length; i++) {
      const mapResponse3 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(
        mapResponse3.fn.name
      );
      fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse3) ? "await " : ""}onMapResponse[${i}](context)
if(mr!==undefined)error=context.response=context.responseValue=mr}`, endUnit();
    }
  }
  mapResponseReporter.resolve(), fnLiteral += afterResponse() + `
return mapResponse(${saveResponse}error,set${adapter.mapResponseContext})}`;
  const mapFn = /* @__PURE__ */ __name((x) => typeof x == "function" ? x : x.fn, "mapFn");
  return Function(
    "inject",
    `"use strict";
` + fnLiteral
  )({
    mapResponse: app2["~adapter"].handler.mapResponse,
    ERROR_CODE,
    ElysiaCustomStatusResponse,
    ValidationError,
    TransformDecodeError,
    onError: app2.event.error?.map(mapFn),
    afterResponse: app2.event.afterResponse?.map(mapFn),
    trace: app2.event.trace?.map(mapFn),
    onMapResponse: app2.event.mapResponse?.map(mapFn),
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : void 0,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : void 0,
    ...adapter.inject
  });
}, "composeErrorHandler");

// node_modules/elysia/dist/adapter/bun/compose.mjs
var allocateIf2 = /* @__PURE__ */ __name((value, condition) => condition ? value : "", "allocateIf");
var createContext = /* @__PURE__ */ __name((app2, route, inference, isInline = false) => {
  let fnLiteral = "";
  const defaultHeaders = app2.setHeaders, hasTrace = !!app2.event.trace?.length;
  hasTrace && (fnLiteral += `const id=randomId()
`);
  const isDynamic = /[:*]/.test(route.path), getQi = `const u=request.url,s=u.indexOf('/',${app2.config.handler?.standardHostname ?? true ? 11 : 7}),qi=u.indexOf('?', s + 1)
`, needsQuery = inference.query || !!route.hooks.query || !!route.hooks.standaloneValidator?.find(
    (x) => x.query
  ) || app2.event.request?.length;
  needsQuery && (fnLiteral += getQi);
  const getPath = inference.path ? isDynamic ? "get path(){" + (needsQuery ? "" : getQi) + `if(qi===-1)return u.substring(s)
return u.substring(s,qi)
},` : `path:'${route.path}',` : "";
  fnLiteral += allocateIf2("const c=", !isInline) + "{request,store," + allocateIf2("qi,", needsQuery) + allocateIf2("params:request.params,", isDynamic) + getPath + allocateIf2(
    "url:request.url,",
    hasTrace || inference.url || needsQuery
  ) + "redirect,status,set:{headers:" + (isNotEmpty(defaultHeaders) ? "Object.assign({},app.setHeaders)" : "Object.create(null)") + ",status:200}", inference.server && (fnLiteral += ",get server(){return app.getServer()}"), hasTrace && (fnLiteral += ",[ELYSIA_REQUEST_ID]:id");
  {
    let decoratorsLiteral = "";
    for (const key of Object.keys(app2.singleton.decorator))
      decoratorsLiteral += `,'${key}':decorator['${key}']`;
    fnLiteral += decoratorsLiteral;
  }
  return fnLiteral += `}
`, fnLiteral;
}, "createContext");
var createBunRouteHandler = /* @__PURE__ */ __name((app2, route) => {
  const hasTrace = !!app2.event.trace?.length, hasHoc = !!app2.extender.higherOrderFunctions.length;
  let inference = sucrose(
    route.hooks,
    // @ts-expect-error
    app2.inference
  );
  inference = sucrose(
    {
      handler: route.handler
    },
    inference
  );
  let fnLiteral = "const handler=data.handler,app=data.app,store=data.store,decorator=data.decorator,redirect=data.redirect,route=data.route,mapEarlyResponse=data.mapEarlyResponse," + allocateIf2("randomId=data.randomId,", hasTrace) + allocateIf2("ELYSIA_REQUEST_ID=data.ELYSIA_REQUEST_ID,", hasTrace) + allocateIf2("ELYSIA_TRACE=data.ELYSIA_TRACE,", hasTrace) + allocateIf2("trace=data.trace,", hasTrace) + allocateIf2("hoc=data.hoc,", hasHoc) + `status=data.status
`;
  app2.event.request?.length && (fnLiteral += `const onRequest=app.event.request.map(x=>x.fn)
`), fnLiteral += `${app2.event.request?.find(isAsync) ? "async" : ""} function map(request){`;
  const needsQuery = inference.query || !!route.hooks.query || !!route.hooks.standaloneValidator?.find(
    (x) => x.query
  );
  return hasTrace || needsQuery || app2.event.request?.length ? (fnLiteral += createContext(app2, route, inference), fnLiteral += createOnRequestHandler(app2), fnLiteral += "return handler(c)}") : fnLiteral += `return handler(${createContext(app2, route, inference, true)})}`, fnLiteral += createHoc(app2), Function(
    "data",
    fnLiteral
  )({
    app: app2,
    handler: route.compile?.() ?? route.composed,
    redirect,
    status,
    // @ts-expect-error private property
    hoc: app2.extender.higherOrderFunctions.map((x) => x.fn),
    store: app2.store,
    decorator: app2.decorator,
    route: route.path,
    randomId: hasTrace ? randomId : void 0,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : void 0,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : void 0,
    trace: hasTrace ? app2.event.trace?.map((x) => x?.fn ?? x) : void 0,
    mapEarlyResponse: mapEarlyResponse2
  });
}, "createBunRouteHandler");

// node_modules/elysia/dist/adapter/bun/handler-native.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var createNativeStaticHandler = /* @__PURE__ */ __name((handle, hooks, set2) => {
  if (typeof handle == "function" || handle instanceof Blob) return;
  if (isHTMLBundle(handle)) return () => handle;
  const response = mapResponse2(
    handle,
    set2 ?? {
      headers: {}
    }
  );
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return response instanceof Promise ? response.then((response2) => {
      if (response2)
        return response2.headers.has("content-type") || response2.headers.append("content-type", "text/plain"), response2.clone();
    }) : (response.headers.has("content-type") || response.headers.append("content-type", "text/plain"), () => response.clone());
}, "createNativeStaticHandler");

// node_modules/elysia/dist/ws/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var websocket = {
  open(ws) {
    ws.data.open?.(ws);
  },
  message(ws, message) {
    ws.data.message?.(ws, message);
  },
  drain(ws) {
    ws.data.drain?.(ws);
  },
  close(ws, code, reason) {
    ws.data.close?.(ws, code, reason);
  },
  ping(ws) {
    ws.data.ping?.(ws);
  },
  pong(ws) {
    ws.data.pong?.(ws);
  }
};
var ElysiaWS = class {
  static {
    __name(this, "ElysiaWS");
  }
  constructor(raw, data, body = void 0) {
    this.raw = raw;
    this.data = data;
    this.body = body;
    this.validator = raw.data?.validator, this.sendText = raw.sendText.bind(raw), this.sendBinary = raw.sendBinary.bind(raw), this.close = raw.close.bind(raw), this.terminate = raw.terminate.bind(raw), this.publishText = raw.publishText.bind(raw), this.publishBinary = raw.publishBinary.bind(raw), this.subscribe = raw.subscribe.bind(raw), this.unsubscribe = raw.unsubscribe.bind(raw), this.isSubscribed = raw.isSubscribed.bind(raw), this.cork = raw.cork.bind(raw), this.remoteAddress = raw.remoteAddress, this.binaryType = raw.binaryType, this.data = raw.data, this.send = this.send.bind(this), this.ping = this.ping.bind(this), this.pong = this.pong.bind(this), this.publish = this.publish.bind(this);
  }
  /**
   * Sends a message to the client.
   *
   * @param data The data to send.
   * @param compress Should the data be compressed? If the client does not support compression, this is ignored.
   * @example
   * ws.send("Hello!");
   * ws.send("Compress this.", true);
   * ws.send(new Uint8Array([1, 2, 3, 4]));
   */
  send(data, compress) {
    return Buffer.isBuffer(data) ? this.raw.send(data, compress) : this.validator?.Check(data) === false ? this.raw.send(
      new ValidationError("message", this.validator, data).message
    ) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.send(data, compress));
  }
  /**
   * Sends a ping.
   *
   * @param data The data to send
   */
  ping(data) {
    return Buffer.isBuffer(data) ? this.raw.ping(data) : this.validator?.Check(data) === false ? this.raw.send(
      new ValidationError("message", this.validator, data).message
    ) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.ping(data));
  }
  /**
   * Sends a pong.
   *
   * @param data The data to send
   */
  pong(data) {
    return Buffer.isBuffer(data) ? this.raw.pong(data) : this.validator?.Check(data) === false ? this.raw.send(
      new ValidationError("message", this.validator, data).message
    ) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.pong(data));
  }
  /**
   * Sends a message to subscribers of the topic.
   *
   * @param topic The topic name.
   * @param data The data to send.
   * @param compress Should the data be compressed? If the client does not support compression, this is ignored.
   * @example
   * ws.publish("chat", "Hello!");
   * ws.publish("chat", "Compress this.", true);
   * ws.publish("chat", new Uint8Array([1, 2, 3, 4]));
   */
  publish(topic, data, compress) {
    return Buffer.isBuffer(data) ? this.raw.publish(
      topic,
      data,
      compress
    ) : this.validator?.Check(data) === false ? this.raw.send(
      new ValidationError("message", this.validator, data).message
    ) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.publish(topic, data, compress));
  }
  get readyState() {
    return this.raw.readyState;
  }
  get id() {
    return this.data.id;
  }
};
var createWSMessageParser = /* @__PURE__ */ __name((parse2) => {
  const parsers = typeof parse2 == "function" ? [parse2] : parse2;
  return async function(ws, message) {
    if (typeof message == "string") {
      const start = message?.charCodeAt(0);
      if (start === 34 || start === 47 || start === 91 || start === 123)
        try {
          message = JSON.parse(message);
        } catch {
        }
      else isNumericString(message) ? message = +message : message === "true" ? message = true : message === "false" ? message = false : message === "null" && (message = null);
    }
    if (parsers)
      for (let i = 0; i < parsers.length; i++) {
        let temp = parsers[i](ws, message);
        if (temp instanceof Promise && (temp = await temp), temp !== void 0) return temp;
      }
    return message;
  };
}, "createWSMessageParser");
var createHandleWSResponse = /* @__PURE__ */ __name((responseValidator) => {
  const handleWSResponse = /* @__PURE__ */ __name((ws, data) => {
    if (data instanceof Promise)
      return data.then((data2) => handleWSResponse(ws, data2));
    if (Buffer.isBuffer(data)) return ws.send(data.toString());
    if (data === void 0) return;
    const validateResponse = responseValidator ? (
      // @ts-ignore
      responseValidator.provider === "standard" ? (data2) => (
        // @ts-ignore
        responseValidator.schema["~standard"].validate(data2).issues
      ) : (data2) => responseValidator.Check(data2) === false
    ) : void 0, send2 = /* @__PURE__ */ __name((datum) => {
      if (validateResponse && validateResponse(datum) === false)
        return ws.send(
          new ValidationError("message", responseValidator, datum).message
        );
      if (typeof datum == "object") return ws.send(JSON.stringify(datum));
      ws.send(datum);
    }, "send");
    if (typeof data?.next != "function")
      return void send2(data);
    const init = data.next();
    if (init instanceof Promise)
      return (async () => {
        const first = await init;
        if (validateResponse && validateResponse(first))
          return ws.send(
            new ValidationError("message", responseValidator, first).message
          );
        if (send2(first.value), !first.done)
          for await (const datum of data) send2(datum);
      })();
    if (send2(init.value), !init.done) for (const datum of data) send2(datum);
  }, "handleWSResponse");
  return handleWSResponse;
}, "createHandleWSResponse");

// node_modules/elysia/dist/adapter/bun/index.mjs
var optionalParam = /:.+?\?(?=\/|$)/;
var getPossibleParams = /* @__PURE__ */ __name((path) => {
  const match = optionalParam.exec(path);
  if (!match) return [path];
  const routes = [], head = path.slice(0, match.index), param = match[0].slice(0, -1), tail = path.slice(match.index + match[0].length);
  routes.push(head.slice(0, -1)), routes.push(head + param);
  for (const fragment of getPossibleParams(tail))
    fragment && (fragment.startsWith("/:") || routes.push(head.slice(0, -1) + fragment), routes.push(head + param + fragment));
  return routes;
}, "getPossibleParams");
var isHTMLBundle = /* @__PURE__ */ __name((handle) => typeof handle == "object" && handle !== null && (handle.toString() === "[object HTMLBundle]" || typeof handle.index == "string"), "isHTMLBundle");
var supportedMethods = {
  GET: true,
  HEAD: true,
  OPTIONS: true,
  DELETE: true,
  PATCH: true,
  POST: true,
  PUT: true
};
var mapRoutes = /* @__PURE__ */ __name((app2) => {
  if (!app2.config.aot || !app2.config.systemRouter) return;
  const routes = {}, add = /* @__PURE__ */ __name((route, handler) => {
    const path = encodeURI(route.path);
    routes[path] ? routes[path][route.method] || (routes[path][route.method] = handler) : routes[path] = {
      [route.method]: handler
    };
  }, "add"), tree = app2.routeTree;
  for (const route of app2.router.history) {
    if (typeof route.handler != "function") continue;
    const method = route.method;
    if (method === "GET" && `WS_${route.path}` in tree || method === "WS" || route.path.charCodeAt(route.path.length - 1) === 42 || !(method in supportedMethods))
      continue;
    if (method === "ALL") {
      `WS_${route.path}` in tree || (routes[route.path] = route.hooks?.config?.mount ? route.hooks.trace || app2.event.trace || // @ts-expect-error private property
      app2.extender.higherOrderFunctions ? createBunRouteHandler(app2, route) : route.hooks.mount || route.handler : route.handler);
      continue;
    }
    let compiled;
    const handler = app2.config.precompile ? createBunRouteHandler(app2, route) : (request) => compiled ? compiled(request) : (compiled = createBunRouteHandler(app2, route))(
      request
    );
    for (const path of getPossibleParams(route.path))
      add(
        {
          method,
          path
        },
        handler
      );
  }
  return routes;
}, "mapRoutes");
var mergeRoutes = /* @__PURE__ */ __name((r1, r2) => {
  if (!r2) return r1;
  for (const key of Object.keys(r2))
    if (r1[key] !== r2[key]) {
      if (!r1[key]) {
        r1[key] = r2[key];
        continue;
      }
      if (r1[key] && r2[key]) {
        if (typeof r1[key] == "function" || r1[key] instanceof Response) {
          r1[key] = r2[key];
          continue;
        }
        r1[key] = {
          ...r1[key],
          ...r2[key]
        };
      }
    }
  return r1;
}, "mergeRoutes");
var BunAdapter = {
  ...WebStandardAdapter,
  name: "bun",
  handler: {
    mapResponse: mapResponse2,
    mapEarlyResponse: mapEarlyResponse2,
    mapCompactResponse: mapCompactResponse2,
    createStaticHandler: createStaticHandler2,
    createNativeStaticHandler
  },
  composeHandler: {
    ...WebStandardAdapter.composeHandler,
    headers: hasHeaderShorthand ? `c.headers=c.request.headers.toJSON()
` : `c.headers={}
for(const [k,v] of c.request.headers.entries())c.headers[k]=v
`
  },
  listen(app2) {
    return (options, callback) => {
      if (typeof Bun > "u")
        throw new Error(
          ".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch"
        );
      if (app2.compile(), typeof options == "string") {
        if (!isNumericString(options))
          throw new Error("Port must be a numeric value");
        options = parseInt(options);
      }
      const createStaticRoute = /* @__PURE__ */ __name((iterator, { withAsync = false } = {}) => {
        const staticRoutes = {}, ops = [];
        for (let [path, route] of Object.entries(iterator))
          if (path = encodeURI(path), supportPerMethodInlineHandler) {
            if (!route) continue;
            for (const [method, value] of Object.entries(route))
              if (!(!value || !(method in supportedMethods))) {
                if (value instanceof Promise) {
                  withAsync && (staticRoutes[path] || (staticRoutes[path] = {}), ops.push(
                    value.then((awaited) => {
                      awaited instanceof Response && (staticRoutes[path][method] = awaited), isHTMLBundle(awaited) && (staticRoutes[path][method] = awaited);
                    })
                  ));
                  continue;
                }
                !(value instanceof Response) && !isHTMLBundle(value) || (staticRoutes[path] || (staticRoutes[path] = {}), staticRoutes[path][method] = value);
              }
          } else {
            if (!route) continue;
            if (route instanceof Promise) {
              withAsync && (staticRoutes[path] || (staticRoutes[path] = {}), ops.push(
                route.then((awaited) => {
                  awaited instanceof Response && (staticRoutes[path] = awaited);
                })
              ));
              continue;
            }
            if (!(route instanceof Response)) continue;
            staticRoutes[path] = route;
          }
        return withAsync ? Promise.all(ops).then(() => staticRoutes) : staticRoutes;
      }, "createStaticRoute"), serve = typeof options == "object" ? {
        development: !isProduction,
        reusePort: true,
        idleTimeout: 30,
        ...app2.config.serve || {},
        ...options || {},
        // @ts-ignore
        routes: mergeRoutes(
          mergeRoutes(
            createStaticRoute(app2.router.response),
            mapRoutes(app2)
          ),
          // @ts-ignore
          app2.config.serve?.routes
        ),
        websocket: {
          ...app2.config.websocket || {},
          ...websocket || {},
          ...options.websocket || {}
        },
        fetch: app2.fetch
      } : {
        development: !isProduction,
        reusePort: true,
        idleTimeout: 30,
        ...app2.config.serve || {},
        // @ts-ignore
        routes: mergeRoutes(
          mergeRoutes(
            createStaticRoute(app2.router.response),
            mapRoutes(app2)
          ),
          // @ts-ignore
          app2.config.serve?.routes
        ),
        websocket: {
          ...app2.config.websocket || {},
          ...websocket || {}
        },
        port: options,
        fetch: app2.fetch
      };
      if (app2.server = Bun.serve(serve), app2.event.start)
        for (let i = 0; i < app2.event.start.length; i++)
          app2.event.start[i].fn(app2);
      callback && callback(app2.server), process.on("beforeExit", async () => {
        if (app2.server && (await app2.server.stop?.(), app2.server = null, app2.event.stop))
          for (let i = 0; i < app2.event.stop.length; i++)
            app2.event.stop[i].fn(app2);
      }), app2.promisedModules.then(async () => {
        app2.server?.reload({
          ...serve,
          fetch: app2.fetch,
          // @ts-ignore
          routes: mergeRoutes(
            mergeRoutes(
              await createStaticRoute(app2.router.response, {
                withAsync: true
              }),
              mapRoutes(app2)
            ),
            // @ts-ignore
            app2.config.serve?.routes
          )
        }), Bun?.gc(false);
      });
    };
  },
  async stop(app2, closeActiveConnections) {
    if (app2.server) {
      if (await app2.server.stop(closeActiveConnections), app2.server = null, app2.event.stop?.length)
        for (let i = 0; i < app2.event.stop.length; i++)
          app2.event.stop[i].fn(app2);
    } else
      console.log(
        "Elysia isn't running. Call `app.listen` to start the server.",
        new Error().stack
      );
  },
  ws(app2, path, options) {
    const { parse: parse2, body, response, ...rest } = options, messageValidator = getSchemaValidator(body, {
      // @ts-expect-error private property
      modules: app2.definitions.typebox,
      // @ts-expect-error private property
      models: app2.definitions.type,
      normalize: app2.config.normalize
    }), validateMessage = messageValidator ? messageValidator.provider === "standard" ? (data) => messageValidator.schema["~standard"].validate(data).issues : (data) => messageValidator.Check(data) === false : void 0, responseValidator = getSchemaValidator(response, {
      // @ts-expect-error private property
      modules: app2.definitions.typebox,
      // @ts-expect-error private property
      models: app2.definitions.type,
      normalize: app2.config.normalize
    });
    app2.route(
      "WS",
      path,
      async (context) => {
        const server = context.server ?? app2.server, { set: set2, path: path2, qi, headers, query, params } = context;
        if (context.validator = responseValidator, options.upgrade)
          if (typeof options.upgrade == "function") {
            const temp = options.upgrade(context);
            temp instanceof Promise && await temp;
          } else options.upgrade && Object.assign(
            set2.headers,
            options.upgrade
          );
        if (set2.cookie && isNotEmpty(set2.cookie)) {
          const cookie = serializeCookie(set2.cookie);
          cookie && (set2.headers["set-cookie"] = cookie);
        }
        set2.headers["set-cookie"] && Array.isArray(set2.headers["set-cookie"]) && (set2.headers = parseSetCookies(
          new Headers(set2.headers),
          set2.headers["set-cookie"]
        ));
        const handleResponse3 = createHandleWSResponse(responseValidator), parseMessage = createWSMessageParser(parse2);
        let _id;
        if (typeof options.beforeHandle == "function") {
          const result = options.beforeHandle(context);
          result instanceof Promise && await result;
        }
        const errorHandlers = [
          ...options.error ? Array.isArray(options.error) ? options.error : [options.error] : [],
          ...(app2.event.error ?? []).map(
            (x) => typeof x == "function" ? x : x.fn
          )
        ].filter((x) => x), hasCustomErrorHandlers = errorHandlers.length > 0, handleErrors = hasCustomErrorHandlers ? async (ws, error) => {
          for (const handleError of errorHandlers) {
            let response2 = handleError(
              Object.assign(context, { error })
            );
            if (response2 instanceof Promise && (response2 = await response2), await handleResponse3(ws, response2), response2) break;
          }
        } : () => {
        };
        if (!server?.upgrade(context.request, {
          headers: isNotEmpty(set2.headers) ? set2.headers : void 0,
          data: {
            ...context,
            get id() {
              return _id || (_id = randomId());
            },
            validator: responseValidator,
            ping(ws, data) {
              options.ping?.(ws, data);
            },
            pong(ws, data) {
              options.pong?.(ws, data);
            },
            open: /* @__PURE__ */ __name(async (ws) => {
              try {
                await handleResponse3(
                  ws,
                  options.open?.(
                    new ElysiaWS(ws, context)
                  )
                );
              } catch (error) {
                handleErrors(ws, error);
              }
            }, "open"),
            message: /* @__PURE__ */ __name(async (ws, _message) => {
              const message = await parseMessage(ws, _message);
              if (validateMessage && validateMessage(message)) {
                const validationError = new ValidationError(
                  "message",
                  messageValidator,
                  message
                );
                return hasCustomErrorHandlers ? handleErrors(ws, validationError) : void ws.send(
                  validationError.message
                );
              }
              try {
                await handleResponse3(
                  ws,
                  options.message?.(
                    new ElysiaWS(
                      ws,
                      context,
                      message
                    ),
                    message
                  )
                );
              } catch (error) {
                handleErrors(ws, error);
              }
            }, "message"),
            drain: /* @__PURE__ */ __name(async (ws) => {
              try {
                await handleResponse3(
                  ws,
                  options.drain?.(
                    new ElysiaWS(ws, context)
                  )
                );
              } catch (error) {
                handleErrors(ws, error);
              }
            }, "drain"),
            close: /* @__PURE__ */ __name(async (ws, code, reason) => {
              try {
                await handleResponse3(
                  ws,
                  options.close?.(
                    new ElysiaWS(ws, context),
                    code,
                    reason
                  )
                );
              } catch (error) {
                handleErrors(ws, error);
              }
            }, "close")
          }
        }))
          return status(400, "Expected a websocket connection");
      },
      {
        ...rest,
        websocket: options
      }
    );
  }
};

// node_modules/elysia/dist/dynamic-handle.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var injectDefaultValues = /* @__PURE__ */ __name((typeChecker, obj) => {
  let schema = typeChecker.schema;
  if (schema && (schema.$defs?.[schema.$ref] && (schema = schema.$defs[schema.$ref]), !!schema?.properties))
    for (const [key, keySchema] of Object.entries(schema.properties))
      obj[key] ??= keySchema.default;
}, "injectDefaultValues");
var createDynamicHandler = /* @__PURE__ */ __name((app2) => {
  const { mapResponse: mapResponse3, mapEarlyResponse: mapEarlyResponse3 } = app2["~adapter"].handler, defaultHeader = app2.setHeaders;
  return async (request) => {
    const url = request.url, s = url.indexOf("/", 11), qi = url.indexOf("?", s + 1), path = qi === -1 ? url.substring(s) : url.substring(s, qi), set2 = {
      cookie: {},
      status: 200,
      headers: defaultHeader ? { ...defaultHeader } : {}
    }, context = Object.assign(
      {},
      // @ts-expect-error
      app2.singleton.decorator,
      {
        set: set2,
        // @ts-expect-error
        store: app2.singleton.store,
        request,
        path,
        qi,
        error: status,
        status,
        redirect
      }
    );
    try {
      if (app2.event.request)
        for (let i = 0; i < app2.event.request.length; i++) {
          const onRequest = app2.event.request[i].fn;
          let response2 = onRequest(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 = mapEarlyResponse3(response2, set2), response2) return context.response = response2;
        }
      const methodKey = request.method === "GET" && request.headers.get("upgrade")?.toLowerCase() === "websocket" ? "WS" : request.method, handler = app2.router.dynamic.find(request.method, path) ?? app2.router.dynamic.find(methodKey, path) ?? app2.router.dynamic.find("ALL", path);
      if (!handler)
        throw context.query = qi === -1 ? {} : parseQuery(url.substring(qi + 1)), new NotFoundError();
      const { handle, hooks, validator, content, route } = handler.store;
      let body;
      if (request.method !== "GET" && request.method !== "HEAD")
        if (content)
          switch (content) {
            case "application/json":
              body = await request.json();
              break;
            case "text/plain":
              body = await request.text();
              break;
            case "application/x-www-form-urlencoded":
              body = parseQuery(await request.text());
              break;
            case "application/octet-stream":
              body = await request.arrayBuffer();
              break;
            case "multipart/form-data": {
              body = {};
              const form2 = await request.formData();
              for (const key of form2.keys()) {
                if (body[key]) continue;
                const value = form2.getAll(key);
                value.length === 1 ? body[key] = value[0] : body[key] = value;
              }
              break;
            }
          }
        else {
          let contentType;
          if (request.body && (contentType = request.headers.get("content-type")), contentType) {
            const index = contentType.indexOf(";");
            if (index !== -1 && (contentType = contentType.slice(0, index)), context.contentType = contentType, hooks.parse)
              for (let i = 0; i < hooks.parse.length; i++) {
                const hook = hooks.parse[i].fn;
                if (typeof hook == "string")
                  switch (hook) {
                    case "json":
                    case "application/json":
                      body = await request.json();
                      break;
                    case "text":
                    case "text/plain":
                      body = await request.text();
                      break;
                    case "urlencoded":
                    case "application/x-www-form-urlencoded":
                      body = parseQuery(
                        await request.text()
                      );
                      break;
                    case "arrayBuffer":
                    case "application/octet-stream":
                      body = await request.arrayBuffer();
                      break;
                    case "formdata":
                    case "multipart/form-data": {
                      body = {};
                      const form2 = await request.formData();
                      for (const key of form2.keys()) {
                        if (body[key]) continue;
                        const value = form2.getAll(key);
                        value.length === 1 ? body[key] = value[0] : body[key] = value;
                      }
                      break;
                    }
                    default: {
                      const parser = app2["~parser"][hook];
                      if (parser) {
                        let temp = parser(
                          context,
                          contentType
                        );
                        if (temp instanceof Promise && (temp = await temp), temp) {
                          body = temp;
                          break;
                        }
                      }
                      break;
                    }
                  }
                else {
                  let temp = hook(context, contentType);
                  if (temp instanceof Promise && (temp = await temp), temp) {
                    body = temp;
                    break;
                  }
                }
              }
            if (delete context.contentType, body === void 0)
              switch (contentType) {
                case "application/json":
                  body = await request.json();
                  break;
                case "text/plain":
                  body = await request.text();
                  break;
                case "application/x-www-form-urlencoded":
                  body = parseQuery(await request.text());
                  break;
                case "application/octet-stream":
                  body = await request.arrayBuffer();
                  break;
                case "multipart/form-data": {
                  body = {};
                  const form2 = await request.formData();
                  for (const key of form2.keys()) {
                    if (body[key]) continue;
                    const value = form2.getAll(key);
                    value.length === 1 ? body[key] = value[0] : body[key] = value;
                  }
                  break;
                }
              }
          }
        }
      context.route = route, context.body = body, context.params = handler?.params || void 0, context.query = qi === -1 ? {} : parseQuery(url.substring(qi + 1)), context.headers = {};
      for (const [key, value] of request.headers.entries())
        context.headers[key] = value;
      const cookieMeta = {
        domain: app2.config.cookie?.domain ?? // @ts-expect-error
        validator?.cookie?.config.domain,
        expires: app2.config.cookie?.expires ?? // @ts-expect-error
        validator?.cookie?.config.expires,
        httpOnly: app2.config.cookie?.httpOnly ?? // @ts-expect-error
        validator?.cookie?.config.httpOnly,
        maxAge: app2.config.cookie?.maxAge ?? // @ts-expect-error
        validator?.cookie?.config.maxAge,
        // @ts-expect-error
        path: app2.config.cookie?.path ?? validator?.cookie?.config.path,
        priority: app2.config.cookie?.priority ?? // @ts-expect-error
        validator?.cookie?.config.priority,
        partitioned: app2.config.cookie?.partitioned ?? // @ts-expect-error
        validator?.cookie?.config.partitioned,
        sameSite: app2.config.cookie?.sameSite ?? // @ts-expect-error
        validator?.cookie?.config.sameSite,
        secure: app2.config.cookie?.secure ?? // @ts-expect-error
        validator?.cookie?.config.secure,
        secrets: app2.config.cookie?.secrets ?? // @ts-expect-error
        validator?.cookie?.config.secrets,
        // @ts-expect-error
        sign: app2.config.cookie?.sign ?? validator?.cookie?.config.sign
      }, cookieHeaderValue = request.headers.get("cookie");
      context.cookie = await parseCookie(
        context.set,
        cookieHeaderValue,
        cookieMeta
      );
      const headerValidator = validator?.createHeaders?.();
      headerValidator && injectDefaultValues(headerValidator, context.headers);
      const paramsValidator = validator?.createParams?.();
      paramsValidator && injectDefaultValues(paramsValidator, context.params);
      const queryValidator = validator?.createQuery?.();
      if (queryValidator && injectDefaultValues(queryValidator, context.query), hooks.transform)
        for (let i = 0; i < hooks.transform.length; i++) {
          const hook = hooks.transform[i];
          let response2 = hook.fn(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 instanceof ElysiaCustomStatusResponse) {
            const result = mapEarlyResponse3(response2, context.set);
            if (result)
              return context.response = result;
          }
          hook.subType === "derive" && Object.assign(context, response2);
        }
      if (validator) {
        if (headerValidator) {
          const _header = structuredClone(context.headers);
          for (const [key, value] of request.headers)
            _header[key] = value;
          if (validator.headers.Check(_header) === false)
            throw new ValidationError(
              "header",
              validator.headers,
              _header
            );
        } else validator.headers?.Decode && (context.headers = validator.headers.Decode(context.headers));
        if (paramsValidator?.Check(context.params) === false)
          throw new ValidationError(
            "params",
            validator.params,
            context.params
          );
        if (validator.params?.Decode && (context.params = validator.params.Decode(context.params)), validator.query?.schema) {
          let schema = validator.query.schema;
          schema.$defs?.[schema.$ref] && (schema = schema.$defs[schema.$ref]);
          const properties = schema.properties;
          for (const property of Object.keys(properties)) {
            const value = properties[property];
            (value.type === "array" || value.items?.type === "string") && typeof context.query[property] == "string" && context.query[property] && (context.query[property] = context.query[property].split(","));
          }
        }
        if (queryValidator?.Check(context.query) === false)
          throw new ValidationError(
            "query",
            validator.query,
            context.query
          );
        if (validator.query?.Decode && (context.query = validator.query.Decode(context.query)), validator.createCookie?.()) {
          let cookieValue = {};
          for (const [key, value] of Object.entries(context.cookie))
            cookieValue[key] = value.value;
          if (validator.cookie.Check(cookieValue) === false)
            throw new ValidationError(
              "cookie",
              validator.cookie,
              cookieValue
            );
          validator.cookie?.Decode && (cookieValue = validator.cookie.Decode(
            cookieValue
          ));
        }
        if (validator.createBody?.()?.Check(body) === false)
          throw new ValidationError("body", validator.body, body);
        validator.body?.Decode && (context.body = validator.body.Decode(body));
      }
      if (hooks.beforeHandle)
        for (let i = 0; i < hooks.beforeHandle.length; i++) {
          const hook = hooks.beforeHandle[i];
          let response2 = hook.fn(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 instanceof ElysiaCustomStatusResponse) {
            const result = mapEarlyResponse3(response2, context.set);
            if (result)
              return context.response = result;
          }
          if (hook.subType === "resolve") {
            Object.assign(context, response2);
            continue;
          }
          if (response2 !== void 0) {
            if (context.response = response2, hooks.afterHandle)
              for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
                let newResponse = hooks.afterHandle[i2].fn(
                  context
                );
                newResponse instanceof Promise && (newResponse = await newResponse), newResponse && (response2 = newResponse);
              }
            const result = mapEarlyResponse3(response2, context.set);
            if (result) return context.response = result;
          }
        }
      let response = typeof handle == "function" ? handle(context) : handle;
      if (response instanceof Promise && (response = await response), hooks.afterHandle?.length) {
        context.response = response;
        for (let i = 0; i < hooks.afterHandle.length; i++) {
          let response2 = hooks.afterHandle[i].fn(
            context
          );
          response2 instanceof Promise && (response2 = await response2);
          const isCustomStatuResponse = response2 instanceof ElysiaCustomStatusResponse, status2 = isCustomStatuResponse ? response2.code : set2.status ? typeof set2.status == "string" ? StatusMap[set2.status] : set2.status : 200;
          isCustomStatuResponse && (set2.status = status2, response2 = response2.response);
          const responseValidator = validator?.createResponse?.()?.[status2];
          if (responseValidator?.Check(response2) === false)
            if (responseValidator?.Clean) {
              const temp = responseValidator.Clean(response2);
              if (responseValidator?.Check(temp) === false)
                throw new ValidationError(
                  "response",
                  responseValidator,
                  response2
                );
              response2 = temp;
            } else
              throw new ValidationError(
                "response",
                responseValidator,
                response2
              );
          responseValidator?.Encode && (context.response = response2 = responseValidator.Encode(response2)), responseValidator?.Clean && (context.response = response2 = responseValidator.Clean(response2));
          const result = mapEarlyResponse3(response2, context.set);
          if (result !== void 0) return context.response = result;
        }
      } else {
        const isCustomStatuResponse = response instanceof ElysiaCustomStatusResponse, status2 = isCustomStatuResponse ? response.code : set2.status ? typeof set2.status == "string" ? StatusMap[set2.status] : set2.status : 200;
        isCustomStatuResponse && (set2.status = status2, response = response.response);
        const responseValidator = validator?.createResponse?.()?.[status2];
        if (responseValidator?.Check(response) === false)
          if (responseValidator?.Clean) {
            const temp = responseValidator.Clean(response);
            if (responseValidator?.Check(temp) === false)
              throw new ValidationError(
                "response",
                responseValidator,
                response
              );
            response = temp;
          } else
            throw new ValidationError(
              "response",
              responseValidator,
              response
            );
        responseValidator?.Encode && (response = responseValidator.Encode(response)), responseValidator?.Clean && (response = responseValidator.Clean(response));
      }
      if (context.set.cookie && cookieMeta?.sign) {
        const secret = cookieMeta.secrets ? typeof cookieMeta.secrets == "string" ? cookieMeta.secrets : cookieMeta.secrets[0] : void 0;
        if (cookieMeta.sign === true) {
          if (secret)
            for (const [key, cookie] of Object.entries(
              context.set.cookie
            ))
              context.set.cookie[key].value = await signCookie(
                cookie.value,
                secret
              );
        } else {
          const properties = validator?.cookie?.schema?.properties;
          if (secret)
            for (const name of cookieMeta.sign)
              name in properties && context.set.cookie[name]?.value && (context.set.cookie[name].value = await signCookie(
                context.set.cookie[name].value,
                secret
              ));
        }
      }
      return mapResponse3(context.response = response, context.set);
    } catch (error) {
      const reportedError = error instanceof TransformDecodeError && error.error ? error.error : error;
      return app2.handleError(context, reportedError);
    } finally {
      app2.event.afterResponse && setImmediate(async () => {
        for (const afterResponse of app2.event.afterResponse)
          await afterResponse.fn(context);
      });
    }
  };
}, "createDynamicHandler");
var createDynamicErrorHandler = /* @__PURE__ */ __name((app2) => {
  const { mapResponse: mapResponse3 } = app2["~adapter"].handler;
  return async (context, error) => {
    const errorContext = Object.assign(context, { error, code: error.code });
    if (errorContext.set = context.set, // @ts-expect-error
    typeof error?.toResponse == "function" && !(error instanceof ValidationError) && !(error instanceof TransformDecodeError))
      try {
        let raw = error.toResponse();
        typeof raw?.then == "function" && (raw = await raw), raw instanceof Response && (context.set.status = raw.status), context.response = raw;
      } catch {
      }
    if (!context.response && app2.event.error)
      for (let i = 0; i < app2.event.error.length; i++) {
        let response = app2.event.error[i].fn(errorContext);
        if (response instanceof Promise && (response = await response), response != null)
          return context.response = mapResponse3(
            response,
            context.set
          );
      }
    if (context.response) {
      if (app2.event.mapResponse)
        for (let i = 0; i < app2.event.mapResponse.length; i++) {
          let response = app2.event.mapResponse[i].fn(errorContext);
          response instanceof Promise && (response = await response), response != null && (context.response = response);
        }
      return mapResponse3(context.response, context.set);
    }
    return context.set.status = error.status ?? 500, mapResponse3(
      typeof error.cause == "string" ? error.cause : error.message,
      context.set
    );
  };
}, "createDynamicErrorHandler");

// node_modules/elysia/dist/index.mjs
var _a;
_a = Symbol.dispose;
var _Elysia = class _Elysia2 {
  static {
    __name(this, "_Elysia");
  }
  constructor(config2 = {}) {
    this.server = null;
    this.dependencies = {};
    this["~Prefix"] = "";
    this["~Singleton"] = null;
    this["~Definitions"] = null;
    this["~Metadata"] = null;
    this["~Ephemeral"] = null;
    this["~Volatile"] = null;
    this["~Routes"] = null;
    this.singleton = {
      decorator: {},
      store: {},
      derive: {},
      resolve: {}
    };
    this.definitions = {
      typebox: t.Module({}),
      type: {},
      error: {}
    };
    this.extender = {
      macro: {},
      higherOrderFunctions: []
    };
    this.validator = {
      global: null,
      scoped: null,
      local: null,
      getCandidate() {
        return !this.global && !this.scoped && !this.local ? {
          body: void 0,
          headers: void 0,
          params: void 0,
          query: void 0,
          cookie: void 0,
          response: void 0
        } : mergeSchemaValidator(
          mergeSchemaValidator(this.global, this.scoped),
          this.local
        );
      }
    };
    this.standaloneValidator = {
      global: null,
      scoped: null,
      local: null
    };
    this.event = {};
    this.router = {
      "~http": void 0,
      get http() {
        return this["~http"] || (this["~http"] = new Memoirist({
          lazy: true,
          onParam: import_fast_decode_uri_component4.default
        })), this["~http"];
      },
      "~dynamic": void 0,
      // Use in non-AOT mode
      get dynamic() {
        return this["~dynamic"] || (this["~dynamic"] = new Memoirist({
          onParam: import_fast_decode_uri_component4.default
        })), this["~dynamic"];
      },
      // Static Router
      static: {},
      // Native Static Response
      response: {},
      history: []
    };
    this.routeTree = {};
    this.inference = {
      body: false,
      cookie: false,
      headers: false,
      query: false,
      set: false,
      server: false,
      path: false,
      route: false,
      url: false
    };
    this["~parser"] = {};
    this.handle = async (request) => this.fetch(request);
    this.fetch = (request) => (this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this))(request);
    this.handleError = async (context, error) => (this.handleError = this.config.aot ? composeErrorHandler(this) : createDynamicErrorHandler(this))(context, error);
    this.listen = (options, callback) => (this["~adapter"].listen(this)(options, callback), this);
    this.stop = async (closeActiveConnections) => (await this["~adapter"].stop?.(this, closeActiveConnections), this);
    this[_a] = () => {
      this.server && this.stop();
    };
    config2.tags && (config2.detail ? config2.detail.tags = config2.tags : config2.detail = {
      tags: config2.tags
    }), this.config = {
      aot: env3.ELYSIA_AOT !== "false",
      nativeStaticResponse: true,
      systemRouter: true,
      encodeSchema: true,
      normalize: true,
      ...config2,
      prefix: config2.prefix ? config2.prefix.charCodeAt(0) === 47 ? config2.prefix : `/${config2.prefix}` : void 0,
      cookie: {
        path: "/",
        ...config2?.cookie
      },
      experimental: config2?.experimental ?? {},
      seed: config2?.seed === void 0 ? "" : config2?.seed
    }, this["~adapter"] = config2.adapter ?? (typeof Bun < "u" ? BunAdapter : WebStandardAdapter), config2?.analytic && (config2?.name || config2?.seed !== void 0) && (this.telemetry = {
      stack: new Error().stack
    });
  }
  get store() {
    return this.singleton.store;
  }
  get decorator() {
    return this.singleton.decorator;
  }
  get routes() {
    return this.router.history;
  }
  getGlobalRoutes() {
    return this.router.history;
  }
  getGlobalDefinitions() {
    return this.definitions;
  }
  getServer() {
    return this.server;
  }
  getParent() {
    return null;
  }
  get promisedModules() {
    return this._promisedModules || (this._promisedModules = new PromiseGroup(console.error, () => {
    })), this._promisedModules;
  }
  env(model, _env = env3) {
    if (getSchemaValidator(model, {
      modules: this.definitions.typebox,
      dynamic: true,
      additionalProperties: true,
      coerce: true,
      sanitize: /* @__PURE__ */ __name(() => this.config.sanitize, "sanitize")
    }).Check(_env) === false) {
      const error = new ValidationError("env", model, _env);
      throw new Error(error.all.map((x) => x.summary).join(`
`));
    }
    return this;
  }
  /**
   * @private DO_NOT_USE_OR_YOU_WILL_BE_FIRED
   * @version 1.1.0
   *
   * ! Do not use unless you know exactly what you are doing
   * ? Add Higher order function to Elysia.fetch
   */
  wrap(fn) {
    return this.extender.higherOrderFunctions.push({
      checksum: checksum(
        JSON.stringify({
          name: this.config.name,
          seed: this.config.seed,
          content: fn.toString()
        })
      ),
      fn
    }), this;
  }
  get models() {
    const models = {};
    for (const name of Object.keys(this.definitions.type))
      models[name] = getSchemaValidator(
        this.definitions.typebox.Import(name)
      );
    return models.modules = this.definitions.typebox, models;
  }
  add(method, path, handle, localHook, options) {
    const skipPrefix = options?.skipPrefix ?? false, allowMeta = options?.allowMeta ?? false;
    localHook ??= {}, this.applyMacro(localHook);
    let standaloneValidators = [];
    if (localHook.standaloneValidator && (standaloneValidators = standaloneValidators.concat(
      localHook.standaloneValidator
    )), this.standaloneValidator.local && (standaloneValidators = standaloneValidators.concat(
      this.standaloneValidator.local
    )), this.standaloneValidator.scoped && (standaloneValidators = standaloneValidators.concat(
      this.standaloneValidator.scoped
    )), this.standaloneValidator.global && (standaloneValidators = standaloneValidators.concat(
      this.standaloneValidator.global
    )), path !== "" && path.charCodeAt(0) !== 47 && (path = "/" + path), this.config.prefix && !skipPrefix && (path = this.config.prefix + path), localHook?.type)
      switch (localHook.type) {
        case "text":
          localHook.type = "text/plain";
          break;
        case "json":
          localHook.type = "application/json";
          break;
        case "formdata":
          localHook.type = "multipart/form-data";
          break;
        case "urlencoded":
          localHook.type = "application/x-www-form-urlencoded";
          break;
        case "arrayBuffer":
          localHook.type = "application/octet-stream";
          break;
        default:
          break;
      }
    const instanceValidator = this.validator.getCandidate(), cloned = {
      body: localHook?.body ?? instanceValidator?.body,
      headers: localHook?.headers ?? instanceValidator?.headers,
      params: localHook?.params ?? instanceValidator?.params,
      query: localHook?.query ?? instanceValidator?.query,
      cookie: localHook?.cookie ?? instanceValidator?.cookie,
      response: localHook?.response ?? instanceValidator?.response
    }, shouldPrecompile = this.config.precompile === true || typeof this.config.precompile == "object" && this.config.precompile.compose === true, createValidator = /* @__PURE__ */ __name(() => {
      const models = this.definitions.type, dynamic = !this.config.aot, normalize = this.config.normalize, modules = this.definitions.typebox, sanitize2 = /* @__PURE__ */ __name(() => this.config.sanitize, "sanitize"), cookieValidator = /* @__PURE__ */ __name(() => {
        if (cloned.cookie || standaloneValidators.find((x) => x.cookie))
          return getCookieValidator({
            modules,
            validator: cloned.cookie,
            defaultConfig: this.config.cookie,
            normalize,
            config: cloned.cookie?.config ?? {},
            dynamic,
            models,
            validators: standaloneValidators.map((x) => x.cookie),
            sanitize: sanitize2
          });
      }, "cookieValidator");
      return shouldPrecompile ? {
        body: getSchemaValidator(cloned.body, {
          modules,
          dynamic,
          models,
          normalize,
          additionalCoerce: coercePrimitiveRoot(),
          validators: standaloneValidators.map((x) => x.body),
          sanitize: sanitize2
        }),
        headers: getSchemaValidator(cloned.headers, {
          modules,
          dynamic,
          models,
          additionalProperties: true,
          coerce: true,
          additionalCoerce: stringToStructureCoercions(),
          validators: standaloneValidators.map(
            (x) => x.headers
          ),
          sanitize: sanitize2
        }),
        params: getSchemaValidator(cloned.params, {
          modules,
          dynamic,
          models,
          coerce: true,
          additionalCoerce: stringToStructureCoercions(),
          validators: standaloneValidators.map(
            (x) => x.params
          ),
          sanitize: sanitize2
        }),
        query: getSchemaValidator(cloned.query, {
          modules,
          dynamic,
          models,
          normalize,
          coerce: true,
          additionalCoerce: queryCoercions(),
          validators: standaloneValidators.map(
            (x) => x.query
          ),
          sanitize: sanitize2
        }),
        cookie: cookieValidator(),
        response: getResponseSchemaValidator(cloned.response, {
          modules,
          dynamic,
          models,
          normalize,
          validators: standaloneValidators.map(
            (x) => x.response
          ),
          sanitize: sanitize2
        })
      } : {
        createBody() {
          return this.body ? this.body : this.body = getSchemaValidator(
            cloned.body,
            {
              modules,
              dynamic,
              models,
              normalize,
              additionalCoerce: coercePrimitiveRoot(),
              validators: standaloneValidators.map(
                (x) => x.body
              ),
              sanitize: sanitize2
            }
          );
        },
        createHeaders() {
          return this.headers ? this.headers : this.headers = getSchemaValidator(
            cloned.headers,
            {
              modules,
              dynamic,
              models,
              normalize,
              additionalProperties: !normalize,
              coerce: true,
              additionalCoerce: stringToStructureCoercions(),
              validators: standaloneValidators.map(
                (x) => x.headers
              ),
              sanitize: sanitize2
            }
          );
        },
        createParams() {
          return this.params ? this.params : this.params = getSchemaValidator(
            cloned.params,
            {
              modules,
              dynamic,
              models,
              normalize,
              coerce: true,
              additionalCoerce: stringToStructureCoercions(),
              validators: standaloneValidators.map(
                (x) => x.params
              ),
              sanitize: sanitize2
            }
          );
        },
        createQuery() {
          return this.query ? this.query : this.query = getSchemaValidator(
            cloned.query,
            {
              modules,
              dynamic,
              models,
              normalize,
              coerce: true,
              additionalCoerce: queryCoercions(),
              validators: standaloneValidators.map(
                (x) => x.query
              ),
              sanitize: sanitize2
            }
          );
        },
        createCookie() {
          return this.cookie ? this.cookie : this.cookie = cookieValidator();
        },
        createResponse() {
          return this.response ? this.response : this.response = getResponseSchemaValidator(
            cloned.response,
            {
              modules,
              dynamic,
              models,
              normalize,
              validators: standaloneValidators.map(
                (x) => x.response
              ),
              sanitize: sanitize2
            }
          );
        }
      };
    }, "createValidator");
    (instanceValidator.body || instanceValidator.cookie || instanceValidator.headers || instanceValidator.params || instanceValidator.query || instanceValidator.response) && (localHook = mergeHook(localHook, instanceValidator)), localHook.tags && (localHook.detail ? localHook.detail.tags = localHook.tags : localHook.detail = {
      tags: localHook.tags
    }), isNotEmpty(this.config.detail) && (localHook.detail = mergeDeep(
      Object.assign({}, this.config.detail),
      localHook.detail
    ));
    const hooks = isNotEmpty(this.event) ? mergeHook(this.event, localHookToLifeCycleStore(localHook)) : { ...lifeCycleToArray(localHookToLifeCycleStore(localHook)) };
    if (standaloneValidators.length && Object.assign(hooks, {
      standaloneValidator: standaloneValidators
    }), this.config.aot === false) {
      const validator = createValidator();
      this.router.dynamic.add(method, path, {
        validator,
        hooks,
        content: localHook?.type,
        handle,
        route: path
      });
      const encoded = encodePath(path, { dynamic: true });
      if (path !== encoded && this.router.dynamic.add(method, encoded, {
        validator,
        hooks,
        content: localHook?.type,
        handle,
        route: path
      }), !this.config.strictPath) {
        const loosePath = getLoosePath(path);
        this.router.dynamic.add(method, loosePath, {
          validator,
          hooks,
          content: localHook?.type,
          handle,
          route: path
        });
        const encoded2 = encodePath(loosePath);
        loosePath !== encoded2 && this.router.dynamic.add(method, loosePath, {
          validator,
          hooks,
          content: localHook?.type,
          handle,
          route: path
        });
      }
      this.router.history.push({
        method,
        path,
        composed: null,
        handler: handle,
        compile: void 0,
        hooks
      });
      return;
    }
    const adapter = this["~adapter"].handler, nativeStaticHandler = typeof handle != "function" ? () => {
      const context = {
        redirect,
        request: this["~adapter"].isWebStandard ? new Request(`http://ely.sia${path}`, {
          method
        }) : void 0,
        server: null,
        set: {
          headers: Object.assign({}, this.setHeaders)
        },
        status,
        store: this.store
      };
      try {
        this.event.request?.map((x) => {
          if (typeof x.fn == "function")
            return x.fn(context);
          if (typeof x == "function") return x(context);
        });
      } catch (error) {
        let res;
        context.error = error, this.event.error?.some((x) => {
          if (typeof x.fn == "function")
            return res = x.fn(context);
          if (typeof x == "function")
            return res = x(context);
        }), res !== void 0 && (handle = res);
      }
      const fn = adapter.createNativeStaticHandler?.(
        handle,
        hooks,
        context.set
      );
      return fn instanceof Promise ? fn.then((fn2) => {
        if (fn2) return fn2;
      }) : fn?.();
    } : void 0, useNativeStaticResponse = this.config.nativeStaticResponse === true, addResponsePath = /* @__PURE__ */ __name((path2) => {
      !useNativeStaticResponse || !nativeStaticHandler || (supportPerMethodInlineHandler ? this.router.response[path2] ? this.router.response[path2][method] = nativeStaticHandler() : this.router.response[path2] = {
        [method]: nativeStaticHandler()
      } : this.router.response[path2] = nativeStaticHandler());
    }, "addResponsePath");
    addResponsePath(path);
    const compile2 = /* @__PURE__ */ __name(() => {
      const compiled = composeHandler({
        app: this,
        path,
        method,
        hooks,
        validator: createValidator(),
        handler: typeof handle != "function" && typeof adapter.createStaticHandler != "function" ? () => handle : handle,
        allowMeta,
        inference: this.inference
      });
      return this.router.history[index] && (this.router.history[index].composed = compiled), compiled;
    }, "compile");
    let oldIndex;
    if (`${method}_${path}` in this.routeTree)
      for (let i = 0; i < this.router.history.length; i++) {
        const route2 = this.router.history[i];
        if (route2.path === path && route2.method === method) {
          oldIndex = i;
          break;
        }
      }
    else this.routeTree[`${method}_${path}`] = this.router.history.length;
    const index = oldIndex ?? this.router.history.length, route = this.router.history, mainHandler = shouldPrecompile ? compile2() : (ctx) => (route[index].composed = compile2())(
      ctx
    );
    oldIndex !== void 0 ? this.router.history[oldIndex] = Object.assign(
      {
        method,
        path,
        composed: mainHandler,
        compile: compile2,
        handler: handle,
        hooks
      },
      standaloneValidators.length ? {
        standaloneValidators
      } : void 0,
      localHook.webSocket ? { websocket: localHook.websocket } : void 0
    ) : this.router.history.push(
      Object.assign(
        {
          method,
          path,
          composed: mainHandler,
          compile: compile2,
          handler: handle,
          hooks
        },
        localHook.webSocket ? { websocket: localHook.websocket } : void 0
      )
    );
    const handler = {
      handler: shouldPrecompile ? route[index].composed : void 0,
      compile() {
        return this.handler = compile2();
      }
    }, staticRouter = this.router.static, isStaticPath = path.indexOf(":") === -1 && path.indexOf("*") === -1;
    if (method === "WS") {
      if (isStaticPath) {
        path in staticRouter ? staticRouter[path][method] = index : staticRouter[path] = {
          [method]: index
        };
        return;
      }
      this.router.http.add("WS", path, handler), this.config.strictPath || this.router.http.add("WS", getLoosePath(path), handler);
      const encoded = encodePath(path, { dynamic: true });
      path !== encoded && this.router.http.add("WS", encoded, handler);
      return;
    }
    if (isStaticPath)
      path in staticRouter ? staticRouter[path][method] = index : staticRouter[path] = {
        [method]: index
      }, this.config.strictPath || addResponsePath(getLoosePath(path));
    else {
      if (this.router.http.add(method, path, handler), !this.config.strictPath) {
        const loosePath = getLoosePath(path);
        addResponsePath(loosePath), this.router.http.add(method, loosePath, handler);
      }
      const encoded = encodePath(path, { dynamic: true });
      path !== encoded && (this.router.http.add(method, encoded, handler), addResponsePath(encoded));
    }
  }
  headers(header) {
    return header ? (this.setHeaders || (this.setHeaders = {}), this.setHeaders = mergeDeep(this.setHeaders, header), this) : this;
  }
  /**
   * ### start | Life cycle event
   * Called after server is ready for serving
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onStart(({ server }) => {
   *         console.log("Running at ${server?.url}:${server?.port}")
   *     })
   *     .listen(3000)
   * ```
   */
  onStart(handler) {
    return this.on("start", handler), this;
  }
  onRequest(handler) {
    return this.on("request", handler), this;
  }
  onParse(options, handler) {
    return handler ? this.on(
      options,
      "parse",
      handler
    ) : typeof options == "string" ? this.on("parse", this["~parser"][options]) : this.on("parse", options);
  }
  /**
   * ### parse | Life cycle event
   * Callback function to handle body parsing
   *
   * If truthy value is returned, will be assigned to `context.body`
   * Otherwise will skip the callback and look for the next one.
   *
   * Equivalent to Express's body parser
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onParse((request, contentType) => {
   *         if(contentType === "application/json")
   *             return request.json()
   *     })
   * ```
   */
  parser(name, parser) {
    return this["~parser"][name] = parser, this;
  }
  onTransform(options, handler) {
    return handler ? this.on(
      options,
      "transform",
      handler
    ) : this.on("transform", options);
  }
  resolve(optionsOrResolve, resolve) {
    resolve || (resolve = optionsOrResolve, optionsOrResolve = { as: "local" });
    const hook = {
      subType: "resolve",
      fn: resolve
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  mapResolve(optionsOrResolve, mapper) {
    mapper || (mapper = optionsOrResolve, optionsOrResolve = { as: "local" });
    const hook = {
      subType: "mapResolve",
      fn: mapper
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  onBeforeHandle(options, handler) {
    return handler ? this.on(
      options,
      "beforeHandle",
      handler
    ) : this.on("beforeHandle", options);
  }
  onAfterHandle(options, handler) {
    return handler ? this.on(
      options,
      "afterHandle",
      handler
    ) : this.on("afterHandle", options);
  }
  mapResponse(options, handler) {
    return handler ? this.on(
      options,
      "mapResponse",
      handler
    ) : this.on("mapResponse", options);
  }
  onAfterResponse(options, handler) {
    return handler ? this.on(
      options,
      "afterResponse",
      handler
    ) : this.on("afterResponse", options);
  }
  /**
   * ### After Handle | Life cycle event
   * Intercept request **after** main handler is called.
   *
   * If truthy value is returned, will be assigned as `Response`
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onAfterHandle((context, response) => {
   *         if(typeof response === "object")
   *             return JSON.stringify(response)
   *     })
   * ```
   */
  trace(options, handler) {
    handler || (handler = options, options = { as: "local" }), Array.isArray(handler) || (handler = [handler]);
    for (const fn of handler)
      this.on(
        options,
        "trace",
        createTracer(fn)
      );
    return this;
  }
  error(name, error) {
    switch (typeof name) {
      case "string":
        return error.prototype[ERROR_CODE] = name, this.definitions.error[name] = error, this;
      case "function":
        return this.definitions.error = name(this.definitions.error), this;
    }
    for (const [code, error2] of Object.entries(name))
      error2.prototype[ERROR_CODE] = code, this.definitions.error[code] = error2;
    return this;
  }
  /**
   * ### Error | Life cycle event
   * Called when error is thrown during processing request
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onError(({ code }) => {
   *         if(code === "NOT_FOUND")
   *             return "Path not found :("
   *     })
   * ```
   */
  onError(options, handler) {
    return handler ? this.on(
      options,
      "error",
      handler
    ) : this.on("error", options);
  }
  /**
   * ### stop | Life cycle event
   * Called after server stop serving request
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .onStop((app) => {
   *         cleanup()
   *     })
   * ```
   */
  onStop(handler) {
    return this.on("stop", handler), this;
  }
  on(optionsOrType, typeOrHandlers, handlers) {
    let type;
    switch (typeof optionsOrType) {
      case "string":
        type = optionsOrType, handlers = typeOrHandlers;
        break;
      case "object":
        type = typeOrHandlers, !Array.isArray(typeOrHandlers) && typeof typeOrHandlers == "object" && (handlers = typeOrHandlers);
        break;
    }
    Array.isArray(handlers) ? handlers = fnToContainer(handlers) : typeof handlers == "function" ? handlers = [
      {
        fn: handlers
      }
    ] : handlers = [handlers];
    const handles = handlers;
    for (const handle of handles)
      handle.scope = typeof optionsOrType == "string" ? "local" : optionsOrType?.as ?? "local", (type === "resolve" || type === "derive") && (handle.subType = type);
    type !== "trace" && (this.inference = sucrose(
      {
        [type]: handles.map((x) => x.fn)
      },
      this.inference,
      this.config.sucrose
    ));
    for (const handle of handles) {
      const fn = asHookType(handle, "global", { skipIfHasType: true });
      switch (type) {
        case "start":
          this.event.start ??= [], this.event.start.push(fn);
          break;
        case "request":
          this.event.request ??= [], this.event.request.push(fn);
          break;
        case "parse":
          this.event.parse ??= [], this.event.parse.push(fn);
          break;
        case "transform":
          this.event.transform ??= [], this.event.transform.push(fn);
          break;
        // @ts-expect-error
        case "derive":
          this.event.transform ??= [], this.event.transform.push(
            fnToContainer(fn, "derive")
          );
          break;
        case "beforeHandle":
          this.event.beforeHandle ??= [], this.event.beforeHandle.push(fn);
          break;
        // @ts-expect-error
        // eslint-disable-next-line sonarjs/no-duplicated-branches
        case "resolve":
          this.event.beforeHandle ??= [], this.event.beforeHandle.push(
            fnToContainer(fn, "resolve")
          );
          break;
        case "afterHandle":
          this.event.afterHandle ??= [], this.event.afterHandle.push(fn);
          break;
        case "mapResponse":
          this.event.mapResponse ??= [], this.event.mapResponse.push(fn);
          break;
        case "afterResponse":
          this.event.afterResponse ??= [], this.event.afterResponse.push(fn);
          break;
        case "trace":
          this.event.trace ??= [], this.event.trace.push(fn);
          break;
        case "error":
          this.event.error ??= [], this.event.error.push(fn);
          break;
        case "stop":
          this.event.stop ??= [], this.event.stop.push(fn);
          break;
      }
    }
    return this;
  }
  as(type) {
    return promoteEvent(this.event.parse, type), promoteEvent(this.event.transform, type), promoteEvent(this.event.beforeHandle, type), promoteEvent(this.event.afterHandle, type), promoteEvent(this.event.mapResponse, type), promoteEvent(this.event.afterResponse, type), promoteEvent(this.event.trace, type), promoteEvent(this.event.error, type), type === "scoped" ? (this.validator.scoped = mergeSchemaValidator(
      this.validator.scoped,
      this.validator.local
    ), this.validator.local = null, this.standaloneValidator.local !== null && (this.standaloneValidator.scoped ||= [], this.standaloneValidator.scoped.push(
      ...this.standaloneValidator.local
    ), this.standaloneValidator.local = null)) : type === "global" && (this.validator.global = mergeSchemaValidator(
      this.validator.global,
      mergeSchemaValidator(
        this.validator.scoped,
        this.validator.local
      )
    ), this.validator.scoped = null, this.validator.local = null, this.standaloneValidator.local !== null && (this.standaloneValidator.scoped ||= [], this.standaloneValidator.scoped.push(
      ...this.standaloneValidator.local
    ), this.standaloneValidator.local = null), this.standaloneValidator.scoped !== null && (this.standaloneValidator.global ||= [], this.standaloneValidator.global.push(
      ...this.standaloneValidator.scoped
    ), this.standaloneValidator.scoped = null)), this;
  }
  /**
   * ### group
   * Encapsulate and group path with prefix
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .group('/v1', app => app
   *         .get('/', () => 'Hi')
   *         .get('/name', () => 'Elysia')
   *     })
   * ```
   */
  group(prefix, schemaOrRun, run) {
    const instance = new _Elysia2({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton }, instance.definitions = { ...this.definitions }, instance.getServer = () => this.getServer(), instance.inference = cloneInference(this.inference), instance.extender = { ...this.extender }, instance["~parser"] = this["~parser"], instance.standaloneValidator = {
      local: [...this.standaloneValidator.local ?? []],
      scoped: [...this.standaloneValidator.scoped ?? []],
      global: [...this.standaloneValidator.global ?? []]
    };
    const isSchema = typeof schemaOrRun == "object", sandbox = (isSchema ? run : schemaOrRun)(instance);
    return this.singleton = mergeDeep(this.singleton, instance.singleton), this.definitions = mergeDeep(this.definitions, instance.definitions), sandbox.event.request?.length && (this.event.request = [
      ...this.event.request || [],
      ...sandbox.event.request || []
    ]), sandbox.event.mapResponse?.length && (this.event.mapResponse = [
      ...this.event.mapResponse || [],
      ...sandbox.event.mapResponse || []
    ]), this.model(sandbox.definitions.type), Object.values(instance.router.history).forEach(
      ({ method, path, handler, hooks }) => {
        if (path = (isSchema ? "" : this.config.prefix ?? "") + prefix + path, isSchema) {
          const {
            body,
            headers,
            query,
            params,
            cookie,
            response,
            ...hook
          } = schemaOrRun, localHook = hooks, hasStandaloneSchema = body || headers || query || params || cookie || response;
          this.add(
            method,
            path,
            handler,
            mergeHook(hook, {
              ...localHook || {},
              error: localHook.error ? Array.isArray(localHook.error) ? [
                ...localHook.error ?? [],
                ...sandbox.event.error ?? []
              ] : [
                localHook.error,
                ...sandbox.event.error ?? []
              ] : sandbox.event.error,
              standaloneValidator: hasStandaloneSchema ? [
                ...localHook.standaloneValidator ?? [],
                {
                  body,
                  headers,
                  query,
                  params,
                  cookie,
                  response
                }
              ] : localHook.standaloneValidator
            }),
            void 0
          );
        } else
          this.add(
            method,
            path,
            handler,
            mergeHook(hooks, {
              error: sandbox.event.error
            }),
            {
              skipPrefix: true
            }
          );
      }
    ), this;
  }
  /**
   * ### guard
   * Encapsulate and pass hook into all child handler
   *
   * ---
   * @example
   * ```typescript
   * import { t } from 'elysia'
   *
   * new Elysia()
   *     .guard({
   *          body: t.Object({
   *              username: t.String(),
   *              password: t.String()
   *          })
   *     }, app => app
   *         .get("/", () => 'Hi')
   *         .get("/name", () => 'Elysia')
   *     })
   * ```
   */
  guard(hook, run) {
    if (!run) {
      if (typeof hook == "object") {
        this.applyMacro(hook), hook.detail && (this.config.detail ? this.config.detail = mergeDeep(
          Object.assign({}, this.config.detail),
          hook.detail
        ) : this.config.detail = hook.detail), hook.tags && (this.config.detail ? this.config.detail.tags = hook.tags : this.config.detail = {
          tags: hook.tags
        });
        const type = hook.as ?? "local";
        if (hook.schema === "standalone") {
          this.standaloneValidator[type] || (this.standaloneValidator[type] = []);
          const response = hook?.response ? typeof hook.response == "string" || Kind in hook.response || "~standard" in hook.response ? {
            200: hook.response
          } : hook?.response : void 0;
          this.standaloneValidator[type].push({
            body: hook.body,
            headers: hook.headers,
            params: hook.params,
            query: hook.query,
            response,
            cookie: hook.cookie
          });
        } else
          this.validator[type] = {
            body: hook.body ?? this.validator[type]?.body,
            headers: hook.headers ?? this.validator[type]?.headers,
            params: hook.params ?? this.validator[type]?.params,
            query: hook.query ?? this.validator[type]?.query,
            response: hook.response ?? this.validator[type]?.response,
            cookie: hook.cookie ?? this.validator[type]?.cookie
          };
        return hook.parse && this.on({ as: type }, "parse", hook.parse), hook.transform && this.on({ as: type }, "transform", hook.transform), hook.derive && this.on({ as: type }, "derive", hook.derive), hook.beforeHandle && this.on({ as: type }, "beforeHandle", hook.beforeHandle), hook.resolve && this.on({ as: type }, "resolve", hook.resolve), hook.afterHandle && this.on({ as: type }, "afterHandle", hook.afterHandle), hook.mapResponse && this.on({ as: type }, "mapResponse", hook.mapResponse), hook.afterResponse && this.on({ as: type }, "afterResponse", hook.afterResponse), hook.error && this.on({ as: type }, "error", hook.error), this;
      }
      return this.guard({}, hook);
    }
    const instance = new _Elysia2({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton }, instance.definitions = { ...this.definitions }, instance.inference = cloneInference(this.inference), instance.extender = { ...this.extender }, instance.getServer = () => this.getServer();
    const sandbox = run(instance);
    return this.singleton = mergeDeep(this.singleton, instance.singleton), this.definitions = mergeDeep(this.definitions, instance.definitions), sandbox.getServer = () => this.server, sandbox.event.request?.length && (this.event.request = [
      ...this.event.request || [],
      ...sandbox.event.request || []
    ]), sandbox.event.mapResponse?.length && (this.event.mapResponse = [
      ...this.event.mapResponse || [],
      ...sandbox.event.mapResponse || []
    ]), this.model(sandbox.definitions.type), Object.values(instance.router.history).forEach(
      ({ method, path, handler, hooks: localHook }) => {
        const {
          body,
          headers,
          query,
          params,
          cookie,
          response,
          ...guardHook
        } = hook, hasStandaloneSchema = body || headers || query || params || cookie || response;
        this.add(
          method,
          path,
          handler,
          mergeHook(guardHook, {
            ...localHook || {},
            error: localHook.error ? Array.isArray(localHook.error) ? [
              ...localHook.error ?? [],
              ...sandbox.event.error ?? []
            ] : [
              localHook.error,
              ...sandbox.event.error ?? []
            ] : sandbox.event.error,
            standaloneValidator: hasStandaloneSchema ? [
              ...localHook.standaloneValidator ?? [],
              {
                body,
                headers,
                query,
                params,
                cookie,
                response
              }
            ] : localHook.standaloneValidator
          })
        );
      }
    ), this;
  }
  /**
   * ### use
   * Merge separate logic of Elysia with current
   *
   * ---
   * @example
   * ```typescript
   * const plugin = (app: Elysia) => app
   *     .get('/plugin', () => 'hi')
   *
   * new Elysia()
   *     .use(plugin)
   * ```
   */
  use(plugin2) {
    if (!plugin2) return this;
    if (Array.isArray(plugin2)) {
      let app2 = this;
      for (const p of plugin2) app2 = app2.use(p);
      return app2;
    }
    return plugin2 instanceof Promise ? (this.promisedModules.add(
      plugin2.then((plugin22) => {
        if (typeof plugin22 == "function") return plugin22(this);
        if (plugin22 instanceof _Elysia2)
          return this._use(plugin22).compile();
        if (plugin22.constructor?.name === "Elysia")
          return this._use(
            plugin22
          ).compile();
        if (typeof plugin22.default == "function")
          return plugin22.default(this);
        if (plugin22.default instanceof _Elysia2)
          return this._use(plugin22.default);
        if (plugin22.constructor?.name === "Elysia")
          return this._use(plugin22.default);
        if (plugin22.constructor?.name === "_Elysia")
          return this._use(plugin22.default);
        try {
          return this._use(plugin22.default);
        } catch (error) {
          throw console.error(
            'Invalid plugin type. Expected Elysia instance, function, or module with "default" as Elysia instance or function that returns Elysia instance.'
          ), error;
        }
      }).then((v) => (v && typeof v.compile == "function" && v.compile(), v))
    ), this) : this._use(plugin2);
  }
  propagatePromiseModules(plugin2) {
    if (plugin2.promisedModules.size <= 0) return this;
    for (const promise of plugin2.promisedModules.promises)
      this.promisedModules.add(
        promise.then((v) => {
          if (!v) return;
          const t3 = this._use(v);
          return t3 instanceof Promise ? t3.then((v2) => {
            v2 ? v2.compile() : v.compile();
          }) : v.compile();
        })
      );
    return this;
  }
  _use(plugin2) {
    if (typeof plugin2 == "function") {
      const instance = plugin2(this);
      return instance instanceof Promise ? (this.promisedModules.add(
        instance.then((plugin22) => {
          if (plugin22 instanceof _Elysia2) {
            plugin22.getServer = () => this.getServer(), plugin22.getGlobalRoutes = () => this.getGlobalRoutes(), plugin22.getGlobalDefinitions = () => this.getGlobalDefinitions(), plugin22.model(this.definitions.type), plugin22.error(this.definitions.error);
            for (const {
              method,
              path,
              handler,
              hooks
            } of Object.values(plugin22.router.history))
              this.add(
                method,
                path,
                handler,
                hooks,
                void 0
              );
            return plugin22 === this ? void 0 : (this.propagatePromiseModules(plugin22), plugin22);
          }
          return typeof plugin22 == "function" ? plugin22(
            this
          ) : typeof plugin22.default == "function" ? plugin22.default(
            this
          ) : this._use(plugin22);
        }).then((v) => (v && typeof v.compile == "function" && v.compile(), v))
      ), this) : instance;
    }
    this.propagatePromiseModules(plugin2);
    const name = plugin2.config.name, seed = plugin2.config.seed;
    if (plugin2.getParent = () => this, plugin2.getServer = () => this.getServer(), plugin2.getGlobalRoutes = () => this.getGlobalRoutes(), plugin2.getGlobalDefinitions = () => this.getGlobalDefinitions(), plugin2.standaloneValidator?.scoped && (this.standaloneValidator.local ? this.standaloneValidator.local = this.standaloneValidator.local.concat(
      plugin2.standaloneValidator.scoped
    ) : this.standaloneValidator.local = plugin2.standaloneValidator.scoped), plugin2.standaloneValidator?.global && (this.standaloneValidator.global ? this.standaloneValidator.global = this.standaloneValidator.global.concat(
      plugin2.standaloneValidator.global
    ) : this.standaloneValidator.global = plugin2.standaloneValidator.global), isNotEmpty(plugin2["~parser"]) && (this["~parser"] = {
      ...plugin2["~parser"],
      ...this["~parser"]
    }), plugin2.setHeaders && this.headers(plugin2.setHeaders), name) {
      name in this.dependencies || (this.dependencies[name] = []);
      const current = seed !== void 0 ? checksum(name + JSON.stringify(seed)) : 0;
      this.dependencies[name].some(
        ({ checksum: checksum3 }) => current === checksum3
      ) || (this.extender.macro = {
        ...this.extender.macro,
        ...plugin2.extender.macro
      }, this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(
        plugin2.extender.higherOrderFunctions
      ));
    } else
      isNotEmpty(plugin2.extender.macro) && (this.extender.macro = {
        ...this.extender.macro,
        ...plugin2.extender.macro
      }), plugin2.extender.higherOrderFunctions.length && (this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(
        plugin2.extender.higherOrderFunctions
      ));
    if (plugin2.extender.higherOrderFunctions.length) {
      deduplicateChecksum(this.extender.higherOrderFunctions);
      const hofHashes = [];
      for (let i = 0; i < this.extender.higherOrderFunctions.length; i++) {
        const hof = this.extender.higherOrderFunctions[i];
        hof.checksum && (hofHashes.includes(hof.checksum) && (this.extender.higherOrderFunctions.splice(i, 1), i--), hofHashes.push(hof.checksum));
      }
      hofHashes.length = 0;
    }
    this.inference = mergeInference(this.inference, plugin2.inference), isNotEmpty(plugin2.singleton.decorator) && this.decorate(plugin2.singleton.decorator), isNotEmpty(plugin2.singleton.store) && this.state(plugin2.singleton.store), isNotEmpty(plugin2.definitions.type) && this.model(plugin2.definitions.type), isNotEmpty(plugin2.definitions.error) && this.error(plugin2.definitions.error), isNotEmpty(plugin2.extender.macro) && (this.extender.macro = {
      ...this.extender.macro,
      ...plugin2.extender.macro
    });
    for (const { method, path, handler, hooks } of Object.values(
      plugin2.router.history
    ))
      this.add(method, path, handler, hooks);
    if (name) {
      name in this.dependencies || (this.dependencies[name] = []);
      const current = seed !== void 0 ? checksum(name + JSON.stringify(seed)) : 0;
      if (this.dependencies[name].some(
        ({ checksum: checksum3 }) => current === checksum3
      ))
        return this;
      this.dependencies[name].push(
        this.config?.analytic ? {
          name: plugin2.config.name,
          seed: plugin2.config.seed,
          checksum: current,
          dependencies: plugin2.dependencies,
          stack: plugin2.telemetry?.stack,
          routes: plugin2.router.history,
          decorators: plugin2.singleton,
          store: plugin2.singleton.store,
          error: plugin2.definitions.error,
          derive: plugin2.event.transform?.filter((x) => x?.subType === "derive").map((x) => ({
            fn: x.toString(),
            stack: new Error().stack ?? ""
          })),
          resolve: plugin2.event.transform?.filter((x) => x?.subType === "resolve").map((x) => ({
            fn: x.toString(),
            stack: new Error().stack ?? ""
          }))
        } : {
          name: plugin2.config.name,
          seed: plugin2.config.seed,
          checksum: current,
          dependencies: plugin2.dependencies
        }
      ), isNotEmpty(plugin2.event) && (this.event = mergeLifeCycle(
        this.event,
        filterGlobalHook(plugin2.event),
        current
      ));
    } else
      isNotEmpty(plugin2.event) && (this.event = mergeLifeCycle(
        this.event,
        filterGlobalHook(plugin2.event)
      ));
    return plugin2.validator.global && (this.validator.global = mergeHook(this.validator.global, {
      ...plugin2.validator.global
    })), plugin2.validator.scoped && (this.validator.local = mergeHook(this.validator.local, {
      ...plugin2.validator.scoped
    })), this;
  }
  macro(macroOrName, macro) {
    if (typeof macroOrName == "string" && !macro)
      throw new Error("Macro function is required");
    return typeof macroOrName == "string" ? this.extender.macro[macroOrName] = macro : this.extender.macro = {
      ...this.extender.macro,
      ...macroOrName
    }, this;
  }
  applyMacro(localHook, appliable = localHook, {
    iteration = 0,
    applied = {}
  } = {}) {
    if (iteration >= 16) return;
    const macro = this.extender.macro;
    for (let [key, value] of Object.entries(appliable)) {
      if (!(key in macro)) continue;
      const macroHook = typeof macro[key] == "function" ? macro[key](value) : macro[key];
      if (!macroHook || typeof macro[key] == "object" && value === false)
        return;
      const seed = checksum(key + JSON.stringify(macroHook.seed ?? value));
      if (!(seed in applied)) {
        applied[seed] = true;
        for (let [k, value2] of Object.entries(macroHook))
          if (k !== "seed") {
            if (k in emptySchema) {
              insertStandaloneValidator(
                localHook,
                k,
                value2
              ), delete localHook[key];
              continue;
            }
            if (k === "introspect") {
              value2?.(localHook), delete localHook[key];
              continue;
            }
            if (k === "detail") {
              localHook.detail || (localHook.detail = {}), localHook.detail = mergeDeep(localHook.detail, value2, {
                mergeArray: true
              }), delete localHook[key];
              continue;
            }
            if (k in macro) {
              this.applyMacro(
                localHook,
                { [k]: value2 },
                { applied, iteration: iteration + 1 }
              ), delete localHook[key];
              continue;
            }
            switch ((k === "derive" || k === "resolve") && typeof value2 == "function" && (value2 = {
              fn: value2,
              subType: k
            }), typeof localHook[k]) {
              case "function":
                localHook[k] = [localHook[k], value2];
                break;
              case "object":
                Array.isArray(localHook[k]) ? localHook[k].push(value2) : localHook[k] = [localHook[k], value2];
                break;
              case "undefined":
                localHook[k] = value2;
                break;
            }
            delete localHook[key];
          }
      }
    }
  }
  mount(path, handleOrConfig, config2) {
    if (path instanceof _Elysia2 || typeof path == "function" || path.length === 0 || path === "/") {
      const run = typeof path == "function" ? path : path instanceof _Elysia2 ? path.compile().fetch : handleOrConfig instanceof _Elysia2 ? handleOrConfig.compile().fetch : typeof handleOrConfig == "function" ? handleOrConfig : (() => {
        throw new Error("Invalid handler");
      })(), handler2 = /* @__PURE__ */ __name(({ request, path: path2 }) => run(
        new Request(replaceUrlPath(request.url, path2), {
          method: request.method,
          headers: request.headers,
          signal: request.signal,
          credentials: request.credentials,
          referrerPolicy: request.referrerPolicy,
          duplex: request.duplex,
          redirect: request.redirect,
          mode: request.mode,
          keepalive: request.keepalive,
          integrity: request.integrity,
          body: request.body
        })
      ), "handler2");
      return this.route("ALL", "/*", handler2, {
        parse: "none",
        ...config2,
        detail: {
          ...config2?.detail,
          hide: true
        },
        config: {
          mount: run
        }
      }), this;
    }
    const handle = handleOrConfig instanceof _Elysia2 ? handleOrConfig.compile().fetch : typeof handleOrConfig == "function" ? handleOrConfig : (() => {
      throw new Error("Invalid handler");
    })(), length = path.length - (path.endsWith("*") ? 1 : 0), handler = /* @__PURE__ */ __name(({ request, path: path2 }) => handle(
      new Request(
        replaceUrlPath(request.url, path2.slice(length) || "/"),
        {
          method: request.method,
          headers: request.headers,
          signal: request.signal,
          credentials: request.credentials,
          referrerPolicy: request.referrerPolicy,
          duplex: request.duplex,
          redirect: request.redirect,
          mode: request.mode,
          keepalive: request.keepalive,
          integrity: request.integrity,
          body: request.body
        }
      )
    ), "handler");
    return this.route("ALL", path, handler, {
      parse: "none",
      ...config2,
      detail: {
        ...config2?.detail,
        hide: true
      },
      config: {
        mount: handle
      }
    }), this.route(
      "ALL",
      path + (path.endsWith("/") ? "*" : "/*"),
      handler,
      {
        parse: "none",
        ...config2,
        detail: {
          ...config2?.detail,
          hide: true
        },
        config: {
          mount: handle
        }
      }
    ), this;
  }
  /**
   * ### get
   * Register handler for path with method [GET]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .get('/', () => 'hi')
   *     .get('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  get(path, handler, hook) {
    return this.add("GET", path, handler, hook), this;
  }
  /**
   * ### post
   * Register handler for path with method [POST]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .post('/', () => 'hi')
   *     .post('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  post(path, handler, hook) {
    return this.add("POST", path, handler, hook), this;
  }
  /**
   * ### put
   * Register handler for path with method [PUT]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .put('/', () => 'hi')
   *     .put('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  put(path, handler, hook) {
    return this.add("PUT", path, handler, hook), this;
  }
  /**
   * ### patch
   * Register handler for path with method [PATCH]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .patch('/', () => 'hi')
   *     .patch('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  patch(path, handler, hook) {
    return this.add("PATCH", path, handler, hook), this;
  }
  /**
   * ### delete
   * Register handler for path with method [DELETE]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .delete('/', () => 'hi')
   *     .delete('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  delete(path, handler, hook) {
    return this.add("DELETE", path, handler, hook), this;
  }
  /**
   * ### options
   * Register handler for path with method [POST]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .options('/', () => 'hi')
   *     .options('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  options(path, handler, hook) {
    return this.add("OPTIONS", path, handler, hook), this;
  }
  /**
   * ### all
   * Register handler for path with method [ALL]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .all('/', () => 'hi')
   *     .all('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  all(path, handler, hook) {
    return this.add("ALL", path, handler, hook), this;
  }
  /**
   * ### head
   * Register handler for path with method [HEAD]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .head('/', () => 'hi')
   *     .head('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  head(path, handler, hook) {
    return this.add("HEAD", path, handler, hook), this;
  }
  /**
   * ### connect
   * Register handler for path with method [CONNECT]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .connect('/', () => 'hi')
   *     .connect('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  connect(path, handler, hook) {
    return this.add("CONNECT", path, handler, hook), this;
  }
  /**
   * ### route
   * Register handler for path with method [ROUTE]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .route('/', () => 'hi')
   *     .route('/with-hook', () => 'hi', {
   *         response: t.String()
   *     })
   * ```
   */
  route(method, path, handler, hook) {
    return this.add(method.toUpperCase(), path, handler, hook, hook?.config), this;
  }
  /**
   * ### ws
   * Register handler for path with method [ws]
   *
   * ---
   * @example
   * ```typescript
   * import { Elysia, t } from 'elysia'
   *
   * new Elysia()
   *     .ws('/', {
   *         message(ws, message) {
   *             ws.send(message)
   *         }
   *     })
   * ```
   */
  ws(path, options) {
    return this["~adapter"].ws ? this["~adapter"].ws(this, path, options) : console.warn("Current adapter doesn't support WebSocket"), this;
  }
  /**
   * ### state
   * Assign global mutatable state accessible for all handler
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .state('counter', 0)
   *     .get('/', (({ counter }) => ++counter)
   * ```
   */
  state(options, name, value) {
    name === void 0 ? (value = options, options = { as: "append" }, name = "") : value === void 0 && (typeof options == "string" ? (value = name, name = options, options = { as: "append" }) : typeof options == "object" && (value = name, name = ""));
    const { as } = options;
    if (typeof name != "string") return this;
    switch (typeof value) {
      case "object":
        return !value || !isNotEmpty(value) ? this : name ? (name in this.singleton.store ? this.singleton.store[name] = mergeDeep(
          this.singleton.store[name],
          value,
          {
            override: as === "override"
          }
        ) : this.singleton.store[name] = value, this) : value === null ? this : (this.singleton.store = mergeDeep(this.singleton.store, value, {
          override: as === "override"
        }), this);
      case "function":
        return name ? (as === "override" || !(name in this.singleton.store)) && (this.singleton.store[name] = value) : this.singleton.store = value(this.singleton.store), this;
      default:
        return (as === "override" || !(name in this.singleton.store)) && (this.singleton.store[name] = value), this;
    }
  }
  /**
   * ### decorate
   * Define custom method to `Context` accessible for all handler
   *
   * ---
   * @example
   * ```typescript
   * new Elysia()
   *     .decorate('getDate', () => Date.now())
   *     .get('/', (({ getDate }) => getDate())
   * ```
   */
  decorate(options, name, value) {
    name === void 0 ? (value = options, options = { as: "append" }, name = "") : value === void 0 && (typeof options == "string" ? (value = name, name = options, options = { as: "append" }) : typeof options == "object" && (value = name, name = ""));
    const { as } = options;
    if (typeof name != "string") return this;
    switch (typeof value) {
      case "object":
        return name ? (name in this.singleton.decorator ? this.singleton.decorator[name] = mergeDeep(
          this.singleton.decorator[name],
          value,
          {
            override: as === "override"
          }
        ) : this.singleton.decorator[name] = value, this) : value === null ? this : (this.singleton.decorator = mergeDeep(
          this.singleton.decorator,
          value,
          {
            override: as === "override"
          }
        ), this);
      case "function":
        return name ? (as === "override" || !(name in this.singleton.decorator)) && (this.singleton.decorator[name] = value) : this.singleton.decorator = value(this.singleton.decorator), this;
      default:
        return (as === "override" || !(name in this.singleton.decorator)) && (this.singleton.decorator[name] = value), this;
    }
  }
  derive(optionsOrTransform, transform) {
    transform || (transform = optionsOrTransform, optionsOrTransform = { as: "local" });
    const hook = {
      subType: "derive",
      fn: transform
    };
    return this.onTransform(optionsOrTransform, hook);
  }
  model(name, model) {
    const onlyTypebox = /* @__PURE__ */ __name((a) => {
      const res = {};
      for (const key in a) "~standard" in a[key] || (res[key] = a[key]);
      return res;
    }, "onlyTypebox");
    switch (typeof name) {
      case "object":
        const parsedTypebox = {}, kvs = Object.entries(name);
        if (!kvs.length) return this;
        for (const [key, value] of kvs)
          key in this.definitions.type || ("~standard" in value ? this.definitions.type[key] = value : (parsedTypebox[key] = this.definitions.type[key] = value, parsedTypebox[key].$id ??= `#/components/schemas/${key}`));
        return this.definitions.typebox = t.Module({
          ...this.definitions.typebox.$defs,
          ...parsedTypebox
        }), this;
      case "function":
        const result = name(this.definitions.type);
        return this.definitions.type = result, this.definitions.typebox = t.Module(onlyTypebox(result)), this;
      case "string":
        if (!model) break;
        if (this.definitions.type[name] = model, "~standard" in model) return this;
        const newModel = {
          ...model,
          id: model.$id ?? `#/components/schemas/${name}`
        };
        return this.definitions.typebox = t.Module({
          ...this.definitions.typebox.$defs,
          ...newModel
        }), this;
    }
    return model ? (this.definitions.type[name] = model, "~standard" in model ? this : (this.definitions.typebox = t.Module({
      ...this.definitions.typebox.$defs,
      [name]: model
    }), this)) : this;
  }
  Ref(key) {
    return t.Ref(key);
  }
  mapDerive(optionsOrDerive, mapper) {
    mapper || (mapper = optionsOrDerive, optionsOrDerive = { as: "local" });
    const hook = {
      subType: "mapDerive",
      fn: mapper
    };
    return this.onTransform(optionsOrDerive, hook);
  }
  affix(base, type, word) {
    if (word === "") return this;
    const delimieter = ["_", "-", " "], capitalize = /* @__PURE__ */ __name((word2) => word2[0].toUpperCase() + word2.slice(1), "capitalize"), joinKey = base === "prefix" ? (prefix, word2) => delimieter.includes(prefix.at(-1) ?? "") ? prefix + word2 : prefix + capitalize(word2) : delimieter.includes(word.at(-1) ?? "") ? (suffix, word2) => word2 + suffix : (suffix, word2) => word2 + capitalize(suffix), remap = /* @__PURE__ */ __name((type2) => {
      const store = {};
      switch (type2) {
        case "decorator":
          for (const key in this.singleton.decorator)
            store[joinKey(word, key)] = this.singleton.decorator[key];
          this.singleton.decorator = store;
          break;
        case "state":
          for (const key in this.singleton.store)
            store[joinKey(word, key)] = this.singleton.store[key];
          this.singleton.store = store;
          break;
        case "model":
          for (const key in this.definitions.type)
            store[joinKey(word, key)] = this.definitions.type[key];
          this.definitions.type = store;
          break;
        case "error":
          for (const key in this.definitions.error)
            store[joinKey(word, key)] = this.definitions.error[key];
          this.definitions.error = store;
          break;
      }
    }, "remap"), types = Array.isArray(type) ? type : [type];
    for (const type2 of types.some((x) => x === "all") ? ["decorator", "state", "model", "error"] : types)
      remap(type2);
    return this;
  }
  prefix(type, word) {
    return this.affix("prefix", type, word);
  }
  suffix(type, word) {
    return this.affix("suffix", type, word);
  }
  compile() {
    return this["~adapter"].beforeCompile?.(this), this["~adapter"].isWebStandard ? (this.fetch = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this), typeof this.server?.reload == "function" && this.server.reload({
      ...this.server || {},
      fetch: this.fetch
    }), this) : (typeof this.server?.reload == "function" && this.server.reload(this.server || {}), this._handle = composeGeneralHandler(this), this);
  }
  /**
   * Wait until all lazy loaded modules all load is fully
   */
  get modules() {
    return this.promisedModules;
  }
};
var Elysia = _Elysia;

// node_modules/@elysiajs/cors/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var isBun3 = typeof new Headers()?.toJSON === "function";
var processHeaders = /* @__PURE__ */ __name((headers) => {
  if (isBun3) return Object.keys(headers.toJSON()).join(", ");
  let keys = "";
  let i = 0;
  headers.forEach((_, key) => {
    if (i) keys = keys + ", " + key;
    else keys = key;
    i++;
  });
  return keys;
}, "processHeaders");
var cors = /* @__PURE__ */ __name((config2) => {
  let {
    aot = true,
    origin = true,
    methods = true,
    allowedHeaders = true,
    exposeHeaders = true,
    credentials = true,
    maxAge = 5,
    preflight = true
  } = config2 ?? {};
  if (Array.isArray(allowedHeaders))
    allowedHeaders = allowedHeaders.join(", ");
  if (Array.isArray(exposeHeaders)) exposeHeaders = exposeHeaders.join(", ");
  const origins = typeof origin === "boolean" ? void 0 : Array.isArray(origin) ? origin : [origin];
  const app2 = new Elysia({
    name: "@elysiajs/cors",
    seed: config2,
    aot
  });
  const anyOrigin = origins?.some((o) => o === "*");
  const originMap = {};
  if (origins) {
    for (const origin2 of origins)
      if (typeof origin2 === "string") originMap[origin2] = true;
  }
  const processOrigin = /* @__PURE__ */ __name((origin2, request, from) => {
    if (Array.isArray(origin2))
      return origin2.some((o) => processOrigin(o, request, from));
    switch (typeof origin2) {
      case "string":
        if (from in originMap) return true;
        const fromProtocol = from.indexOf("://");
        if (fromProtocol !== -1) from = from.slice(fromProtocol + 3);
        return origin2 === from;
      case "function":
        return origin2(request) === true;
      case "object":
        if (origin2 instanceof RegExp) return origin2.test(from);
    }
    return false;
  }, "processOrigin");
  const handleOrigin = /* @__PURE__ */ __name((set2, request) => {
    if (origin === true) {
      set2.headers.vary = "*";
      set2.headers["access-control-allow-origin"] = request.headers.get("Origin") || "*";
      return;
    }
    if (anyOrigin) {
      set2.headers.vary = "*";
      set2.headers["access-control-allow-origin"] = "*";
      return;
    }
    if (!origins?.length) return;
    const headers = [];
    if (origins.length) {
      const from = request.headers.get("Origin") ?? "";
      for (let i = 0; i < origins.length; i++) {
        const value = processOrigin(origins[i], request, from);
        if (value === true) {
          set2.headers.vary = origin ? "Origin" : "*";
          set2.headers["access-control-allow-origin"] = from || "*";
          return;
        }
      }
    }
    set2.headers.vary = "Origin";
    if (headers.length)
      set2.headers["access-control-allow-origin"] = headers.join(", ");
  }, "handleOrigin");
  const handleMethod = /* @__PURE__ */ __name((set2, method) => {
    if (!method) return;
    if (methods === true)
      return set2.headers["access-control-allow-methods"] = method ?? "*";
    if (methods === false || !methods?.length) return;
    if (methods === "*")
      return set2.headers["access-control-allow-methods"] = "*";
    if (!Array.isArray(methods))
      return set2.headers["access-control-allow-methods"] = methods;
    set2.headers["access-control-allow-methods"] = methods.join(", ");
  }, "handleMethod");
  const defaultHeaders = {};
  if (typeof exposeHeaders === "string")
    defaultHeaders["access-control-expose-headers"] = exposeHeaders;
  if (typeof allowedHeaders === "string")
    defaultHeaders["access-control-allow-headers"] = allowedHeaders;
  if (credentials === true)
    defaultHeaders["access-control-allow-credentials"] = "true";
  app2.headers(defaultHeaders);
  function handleOption({ set: set2, request, headers }) {
    handleOrigin(set2, request);
    handleMethod(set2, request.headers.get("access-control-request-method"));
    if (allowedHeaders === true || exposeHeaders === true) {
      if (allowedHeaders === true)
        set2.headers["access-control-allow-headers"] = headers["access-control-request-headers"];
      if (exposeHeaders === true)
        set2.headers["access-control-expose-headers"] = Object.keys(headers).join(",");
    }
    if (maxAge) set2.headers["access-control-max-age"] = maxAge.toString();
    return new Response(null, {
      status: 204
    });
  }
  __name(handleOption, "handleOption");
  if (preflight) app2.options("/", handleOption).options("/*", handleOption);
  return app2.onRequest(/* @__PURE__ */ __name(function processCors({ set: set2, request }) {
    handleOrigin(set2, request);
    handleMethod(set2, request.method);
    if (allowedHeaders === true || exposeHeaders === true) {
      const headers = processHeaders(request.headers);
      if (allowedHeaders === true)
        set2.headers["access-control-allow-headers"] = headers;
      if (exposeHeaders === true)
        set2.headers["access-control-expose-headers"] = headers;
    }
  }, "processCors"));
}, "cors");

// node_modules/elysia-rate-limit/dist/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var import_debug2 = __toESM(require_src(), 1);
var import_quick_lru = __toESM(require_quick_lru(), 1);
var debugCache = /* @__PURE__ */ new Map();
var logger = /* @__PURE__ */ __name((unit, formatter, ...params) => {
  const key = `elysia-rate-limit:${unit}`;
  let debugInstance = debugCache.get(key);
  if (!debugInstance) {
    debugInstance = (0, import_debug2.default)(key);
    debugCache.set(key, debugInstance);
  }
  debugInstance(formatter, ...params);
}, "logger");
var defaultKeyGenerator = /* @__PURE__ */ __name((request, server) => {
  if (!server || !request) {
    console.warn("[elysia-rate-limit] failed to determine client address (reason: server or request is undefined)");
    return "";
  }
  const requestIpResult = server.requestIP(request);
  const clientAddress = requestIpResult?.address;
  logger("generator", "clientAddress: %s", clientAddress);
  if (clientAddress === void 0) {
    let reason;
    if (requestIpResult === null) reason = ".requestIP() returns null";
    else if (requestIpResult.address === void 0) reason = ".requestIP()?.address returns undefined";
    else reason = "unknown";
    console.warn(`[elysia-rate-limit] failed to determine client address (reason: ${reason})`);
    return "";
  }
  return clientAddress;
}, "defaultKeyGenerator");
var defaultOptions = {
  duration: 6e4,
  max: 10,
  errorResponse: "rate-limit reached",
  scoping: "global",
  countFailedRequest: false,
  generator: defaultKeyGenerator,
  headers: true,
  skip: /* @__PURE__ */ __name(() => false, "skip")
};
var DefaultContext = class {
  static {
    __name(this, "DefaultContext");
  }
  id = (Math.random() + 1).toString(36).substring(7);
  maxSize;
  store;
  duration;
  constructor(maxSize = 5e3) {
    this.maxSize = maxSize;
  }
  init(options) {
    logger(`context:${this.id}`, "initialized with maxSize: %d, and expire duration of %d seconds", this.maxSize, options.duration / 1e3);
    this.duration = options.duration;
    this.store = new import_quick_lru.default({ maxSize: this.maxSize });
  }
  async increment(key) {
    const now = /* @__PURE__ */ new Date();
    let item = this.store.get(key);
    if (item === void 0 || item.nextReset < now) {
      logger(`context:${this.id}`, "created new item for key: %s (reason: %s)", key, item === void 0 ? "not found" : "expired");
      item = {
        count: 1,
        nextReset: new Date(now.getTime() + this.duration)
      };
    } else {
      logger(`context:${this.id}`, "incremented count for key: %s", key);
      item.count++;
    }
    this.store.set(key, item);
    return item;
  }
  async decrement(key) {
    const item = this.store.get(key);
    if (item !== void 0) {
      logger(`context:${this.id}`, "decremented count for key: %s", key);
      item.count--;
      this.store.set(key, item);
    }
  }
  async reset(key) {
    logger(`context:${this.id}`, "resetting target %s", key ?? "all");
    if (typeof key === "string") this.store.delete(key);
    else this.store.clear();
  }
  kill() {
    logger(`context:${this.id}`, "clearing the store");
    this.store.clear();
  }
};
var plugin = /* @__PURE__ */ __name(function rateLimitPlugin(userOptions) {
  const options = {
    ...defaultOptions,
    ...userOptions,
    context: userOptions?.context ?? new DefaultContext()
  };
  options.context.init(options);
  return /* @__PURE__ */ __name(function registerRateLimitPlugin(app2) {
    const plugin$1 = new Elysia({
      name: "elysia-rate-limit",
      seed: options.max
    });
    plugin$1.onBeforeHandle({ as: options.scoping }, /* @__PURE__ */ __name(async function onBeforeHandleRateLimitHandler({ set: set2, request, query, path, store, cookie, error, body, params, headers, qi, ...rest }) {
      let clientKey;
      const enhancedRequest = Object.defineProperty(request, "cookie", { value: cookie });
      if (options.skip.length >= 2) clientKey = await options.generator(enhancedRequest, options.injectServer?.() ?? app2.server, rest);
      if (await options.skip(enhancedRequest, clientKey) === false) {
        if (options.skip.length < 2) clientKey = await options.generator(enhancedRequest, options.injectServer?.() ?? app2.server, rest);
        const { count, nextReset } = await options.context.increment(clientKey);
        const payload = {
          limit: options.max,
          current: count,
          remaining: Math.max(options.max - count, 0),
          nextReset
        };
        const reset = Math.max(0, Math.ceil((nextReset.getTime() - Date.now()) / 1e3));
        const builtHeaders = {
          "RateLimit-Limit": String(options.max),
          "RateLimit-Remaining": String(payload.remaining),
          "RateLimit-Reset": String(reset)
        };
        if (payload.current >= payload.limit + 1) {
          logger("plugin", "rate limit exceeded for clientKey: %s (resetting in %d seconds)", clientKey, reset);
          builtHeaders["Retry-After"] = String(Math.ceil(options.duration / 1e3));
          if (options.errorResponse instanceof Error) throw options.errorResponse;
          if (options.errorResponse instanceof Response) {
            const clonedResponse = options.errorResponse.clone();
            if (options.headers) for (const [key, value] of Object.entries(builtHeaders)) clonedResponse.headers.set(key, value);
            return clonedResponse;
          }
          if (options.headers) for (const [key, value] of Object.entries(builtHeaders)) set2.headers[key] = value;
          set2.status = 429;
          return options.errorResponse;
        }
        if (options.headers) for (const [key, value] of Object.entries(builtHeaders)) set2.headers[key] = value;
        logger("plugin", "clientKey %s passed through with %d/%d request used (resetting in %d seconds)", clientKey, options.max - payload.remaining, options.max, reset);
      }
    }, "onBeforeHandleRateLimitHandler"));
    plugin$1.onError({ as: options.scoping }, /* @__PURE__ */ __name(async function onErrorRateLimitHandler({ set: set2, request, query, path, store, cookie, error, body, params, headers, qi, code, ...rest }) {
      if (!options.countFailedRequest) {
        const enhancedRequest = Object.defineProperty(request, "cookie", { value: cookie });
        const clientKey = await options.generator(enhancedRequest, options.injectServer?.() ?? app2.server, rest);
        logger("plugin", "request failed for clientKey: %s, refunding", clientKey);
        await options.context.decrement(clientKey);
      }
    }, "onErrorRateLimitHandler"));
    plugin$1.onStop(/* @__PURE__ */ __name(async function onStopRateLimitHandler() {
      logger("plugin", "kill signal received");
      await options.context.kill();
    }, "onStopRateLimitHandler"));
    return app2.use(plugin$1);
  }, "registerRateLimitPlugin");
}, "rateLimitPlugin");

// src/api.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/services/cat.service.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// src/cats.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var cats = [
  "announcer",
  "art",
  "award",
  "book",
  "bug",
  "cat",
  "comic",
  "gaming",
  "general",
  "groups",
  "idea",
  "news",
  "support",
  "tv"
];
var cats_default = cats;

// src/services/cat.service.ts
import { env as env4 } from "cloudflare:workers";
var CatService = class {
  static {
    __name(this, "CatService");
  }
  getCatUrl(id) {
    if (id >= cats_default.length) {
      id = id % cats_default.length;
    }
    if (id >= cats_default.length) {
      id = id % cats_default.length;
    }
    const catName = cats_default[id];
    return `/img/api/v1/${catName}.svg`;
  }
  getCatUrlByIndex(index) {
    return this.getCatUrl(index);
  }
  getCatUrlById(id) {
    const catsArray = cats_default;
    if (catsArray.includes(id)) {
      const index = catsArray.indexOf(id);
      return this.getCatUrl(index);
    } else if (!isNaN(Number(id))) {
      return this.getCatUrl(Number(id));
    } else {
      return this.getCatUrl(id.length);
    }
  }
  getRandomCatUrl() {
    const randomNum = Math.floor(Math.random() * cats_default.length);
    return this.getCatUrl(randomNum);
  }
  getCats() {
    return cats_default;
  }
  async fetchAsset(path, requestUrl) {
    const url = new URL(path, requestUrl);
    let asset;
    if (env4?.ASSETS) {
      asset = await env4.ASSETS.fetch(url);
    } else {
      asset = await fetch(url);
    }
    return asset;
  }
};

// src/api.ts
var catService = new CatService();
var api = new Elysia({ prefix: "/api" }).get("/", () => ({
  seed: "/api/v1/:seed[0-14]",
  name: "/api/v1/:name",
  random: "/api/v1/random",
  cats: "/api/v1/cats"
})).group(
  "/v1",
  (app2) => app2.get("/cats", () => catService.getCats()).get("/random", async ({ request }) => {
    const catUrlPath = catService.getRandomCatUrl();
    const asset = await catService.fetchAsset(catUrlPath, request.url);
    return new Response(asset.body, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400"
      }
    });
  }).get(
    "/:id",
    async ({ params: { id }, request }) => {
      const catUrlPath = catService.getCatUrlById(id);
      if (catUrlPath) {
        const asset = await catService.fetchAsset(catUrlPath, request.url);
        if (asset.ok) {
          return new Response(asset.body, {
            headers: {
              "Content-Type": "image/svg+xml",
              "Cache-Control": "public, max-age=86400"
            }
          });
        }
      }
      return new Response("Not Found", { status: 404 });
    },
    {
      params: t.Object({
        id: t.String()
      })
    }
  )
);

// src/index.ts
var app = new Elysia({ aot: false }).onRequest(({ set: set2 }) => {
  set2.headers["X-Content-Type-Options"] = "nosniff";
  set2.headers["X-Frame-Options"] = "DENY";
  set2.headers["X-XSS-Protection"] = "1; mode=block";
  set2.headers["Referrer-Policy"] = "no-referrer";
  set2.headers["Content-Security-Policy"] = "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';";
}).use(cors()).use(plugin({
  max: 50,
  generator: /* @__PURE__ */ __name((req) => req.headers.get("CF-Connecting-IP") ?? "unknown", "generator")
})).use(api);
var src_default = new Elysia({ aot: false, adapter: CloudflareAdapter }).use(app);

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env5, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env5);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env5, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env5);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-piSYoY/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env5, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env5, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env5, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env5, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-piSYoY/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env5, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env5, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env5, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env5, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env5, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env5, ctx) => {
      this.env = env5;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  app,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

elysia/dist/type-system/format.mjs:
  (**
   * @license
   *
   * MIT License
   *
   * Copyright (c) 2020 Evgeny Poberezkin
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)
*/
//# sourceMappingURL=index.js.map
