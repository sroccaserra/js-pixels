export function colorMap1(px, offset, v) {
    px[offset  ] = 255*(.5+.5*Math.sin(Math.PI*v));
    px[offset+1] = 255*(.5+.5*Math.cos(Math.PI*v));
    px[offset+2] = 0;
    px[offset+3] = 255;
}

export function colorMap2(px, offset, v) {
    px[offset  ] = 255;
    px[offset+1] = 255*(.5+.5*Math.cos(Math.PI*v));
    px[offset+2] = 255*(.5+.5*Math.sin(Math.PI*v));
    px[offset+3] = 255;
}

export function colorMap3(px, offset, v) {
    px[offset  ] = 255*(.5+.5*Math.sin(Math.PI*v));
    px[offset+1] = 255*(.5+.5*Math.sin(Math.PI*v+2*Math.PI/3));
    px[offset+2] = 255*(.5+.5*Math.sin(Math.PI*v+4*Math.PI/3));
    px[offset+3] = 255;
}

export function colorMap4(px, offset, v) {
    var c = .5+.5*Math.sin(Math.PI*v*5);
    px[offset  ] = 255*c;
    px[offset+1] = 255*c;
    px[offset+2] = 255*c;
    px[offset+3] = 255;
}

export function colorMapBlue(px, offset, v) {
    var c = 100*(.5+.5*v*.8)+155;
    if (Math.random() > 1.99) {
        c = 0;
    }
    px[offset  ] = c*0.1;
    px[offset+1] = c*0.1;
    px[offset+2] = c;
    px[offset+3] = 255;
}


