"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('API funcionando');
    }
}
const indexController = new IndexController();
exports.default = indexController;
