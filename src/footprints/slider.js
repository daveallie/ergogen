module.exports = {
  nets: {
    left: undefined,
    common: undefined, // Previously known as 'to'
    right: undefined, // Previously known as 'from'
    case: undefined
  },
  params: {
    class: 'T', // for Toggle
    side: 'F'
  },
  body: p => {
    const netStr = (net) => net ? net.str : '';
    const left = p.param.side === 'F' ? '-' : '';
    const right = p.param.side === 'F' ? '' : '-';

    return `
      (module E73:SPDT_C128955 (layer F.Cu) (tstamp 5BF2CC3C)

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${'' /* outline */}
        (fp_line (start 1.95 -1.35) (end -1.95 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 0 -1.35) (end -3.3 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -3.3 -1.35) (end -3.3 1.5) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -3.3 1.5) (end 3.3 1.5) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 3.3 1.5) (end 3.3 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 0 -1.35) (end 3.3 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        
        ${'' /* extra indicator for the slider */}
        (fp_line (start -1.95 -3.85) (end 1.95 -3.85) (layer Dwgs.User) (width 0.15))
        (fp_line (start 1.95 -3.85) (end 1.95 -1.35) (layer Dwgs.User) (width 0.15))
        (fp_line (start -1.95 -1.35) (end -1.95 -3.85) (layer Dwgs.User) (width 0.15))
        
        ${'' /* bottom cutouts */}
        (pad "" np_thru_hole circle (at 1.5 0) (size 1 1) (drill 0.9) (layers *.Mask))
        (pad "" np_thru_hole circle (at -1.5 0) (size 1 1) (drill 0.9) (layers *.Mask))

        ${'' /* pins */}
        (pad 1 smd rect (at ${right}2.25 2.075 ${p.rot}) (size 0.9 1.25) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${netStr(p.net.right)})
        (pad 2 smd rect (at ${left}0.75 2.075 ${p.rot}) (size 0.9 1.25) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${netStr(p.net.common)})
        (pad 3 smd rect (at ${left}2.25 2.075 ${p.rot}) (size 0.9 1.25) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${netStr(p.net.left)})
        
        ${'' /* side mounts */}
        (pad "" smd rect (at 3.7 -1.1 ${p.rot}) (size 0.9 0.9) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${netStr(p.net.case)})
        (pad "" smd rect (at 3.7 1.1 ${p.rot}) (size 0.9 0.9) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${netStr(p.net.case)})
        (pad "" smd rect (at -3.7 1.1 ${p.rot}) (size 0.9 0.9) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${netStr(p.net.case)})
        (pad "" smd rect (at -3.7 -1.1 ${p.rot}) (size 0.9 0.9) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${netStr(p.net.case)})
    )
    `;
  }
}
