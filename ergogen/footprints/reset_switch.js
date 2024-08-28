module.exports = {
  params: {
    designator: "S",
    reverse: true,
    r1: { type: "net", value: "r1" },
    r2: { type: "net", value: "r2" },
  },
  body: (p) => `
        (footprint 434121025816 (layer F.Cu) (tedit 63B6D2D4)
            ${p.at /* parametric position */}
            (descr "SMD Tact Switch 4x3mm,2 pins")
            (fp_text reference "${p.ref}" (at 0 0 ${p.rot}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0 ${p.rot}) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            (fp_text user "reset" (at 0 0 ${p.rot + 90}) (layer B.SilkS)
              (effects (font (size 0.5 0.5) (thickness 0.1)) (justify mirror))
            )

            (fp_text user "reset" (at 0 0 ${p.rot + 90}) (layer F.SilkS)
              (effects (font (size 0.5 0.5) (thickness 0.1)) (justify))
            )
            (fp_line (start -2.0 1.5) (end 2.0 1.5) (layer F.Fab) (width 0.1))
            (fp_line (start 2.0 1.5) (end 2.0 -1.5) (layer F.Fab) (width 0.1))
            (fp_line (start 2.0 -1.5) (end -2.0 -1.5) (layer F.Fab) (width 0.1))
            (fp_line (start -2.0 -1.5) (end -2.0 1.5) (layer F.Fab) (width 0.1))

            (fp_line (start -2 -1) (end -2 -2) (layer B.SilkS) (width 0.1))
            (fp_line (start -2 -2) (end 2 -2) (layer B.SilkS) (width 0.1))
            (fp_line (start 2 -2) (end 2 -1) (layer B.SilkS) (width 0.1))
            (fp_line (start -2 1) (end -2 2) (layer B.SilkS) (width 0.1))
            (fp_line (start -2 2) (end 2 2) (layer B.SilkS) (width 0.1))
            (fp_line (start 2 2) (end 2 1) (layer B.SilkS) (width 0.1))

            (fp_line (start -2 -1) (end -2 -2) (layer F.SilkS) (width 0.1))
            (fp_line (start -2 -2) (end 2 -2) (layer F.SilkS) (width 0.1))
            (fp_line (start 2 -2) (end 2 -1) (layer F.SilkS) (width 0.1))
            (fp_line (start -2 1) (end -2 2) (layer F.SilkS) (width 0.1))
            (fp_line (start -2 2) (end 2 2) (layer F.SilkS) (width 0.1))
            (fp_line (start 2 2) (end 2 1) (layer F.SilkS) (width 0.1))

            (pad 1 thru_hole rect (at -2 0.0 ${p.rot}) (size 1.3 1) (drill 0.3) (layers *.Cu *.Mask) ${p.r1.str})
            (pad 2 thru_hole rect (at 2 0.0 ${p.rot}) (size 1.3 1) (drill 0.3) (layers *.Cu *.Mask) ${p.r2.str})
        )
    `,
};
