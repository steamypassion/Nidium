/**
 * Copyright 2017 Nidium Inc. All rights reserved.
 * Use of this source code is governed by a MIT license
 * that can be found in the LICENSE file.
 */

{
    const Elements = require("Elements");
    const { StyleContainer, ElementStyle } = require("ElementsStyles");

    Elements.nodeoverlay = class extends Elements.Element {
        constructor(attributes) {
            super(attributes);

            this.style.position = "absolute";
        }

        paint(ctx, width, height) {
            ctx.fillStyle = "rgba(111, 108, 220, 0.6)";
            ctx.fillRect(0, 0, width, height);
        }

        goto(elem) {
            let { aleft, atop, width, height } = elem.getDimensions();

            setAnimation((elem) => {
                elem.left   = aleft;
                elem.top    = atop;
                elem.width  = width;
                elem.height = height;
            }, 160, Easing.Exponential.Out, this);
        }
    }

    ElementStyle.Inherit(Elements.nodeoverlay);
}