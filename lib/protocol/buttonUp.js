/**
 *
 * Releases the mouse button previously held (where the mouse is currently at). Must
 * be called once for every buttondown command issued. See the note in click and
 * buttondown about implications of out-of-order commands.
 *
 * @param {Number} button  Which button, enum: *{LEFT = 0, MIDDLE = 1 , RIGHT = 2}*. Defaults to the left mouse button if not specified.
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/buttonup
 * @type protocol
 *
 */

var handleMouseButtonProtocol = require('../helpers/handleMouseButtonProtocol');

module.exports = function buttonUp (button) {

    return handleMouseButtonProtocol.call(
        this,
        '/session/:sessionId/buttonup',
        button
    );

};