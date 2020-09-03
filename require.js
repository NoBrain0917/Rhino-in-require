require = function(path) {
    let file = new java.io.File(path);
    let read = new java.util.Scanner(path).useDelimiter("\\Z").next();
    let module = {exports: {}};
    let exports = {};
    let newFunc = new Function("module", "exports", read);
    newFunc(module, exports);
    return Object.keys(exports).length == 0 ? module.exports : module;
}
