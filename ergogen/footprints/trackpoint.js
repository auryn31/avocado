module.exports = {
  params: {
    pos: { type: "net", value: "pos" },
    gnd: { type: "net", value: "gnd" },
    dta: { type: "net", value: "dta" },
    clk: { type: "net", value: "clk" },
    rst: { type: "net", value: "rst" },
  },
  body: (p) => {
    let lineWidth = 0.1;
    return `
        (footprint "TrackPoint"
            ${p.at}
            (descr "Lenovo LVC9 TrackPoint")
            (attr through_hole)

            (fp_text reference "${p.ref}" (at 1 -2.55 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text value "" (at 1 7.45 ${p.rot}) (layer "F.Fab") hide
                (effects (font (size 1 1) (thickness 0.15)))
            )

#            (fp_circle (center 6.75 7.75)  (end 8 7.75)     (stroke (width ${lineWidth}) (type default)) (fill none) (layer "Edge.Cuts"))

#            (fp_circle (center 25.75 7.75) (end 27 7.75)    (stroke (width ${lineWidth}) (type default)) (fill none) (layer "Edge.Cuts"))

#(fp_arc (start 25.75 7.75) (end 27 7.75) (angle 169) (layer "Edge.Cuts") (width ${lineWidth}))
#           (fp_arc (start 25.75 7.75) (end 26.5 7.75) (angle 160) (layer "Edge.Cuts") (width ${lineWidth}))
#           (fp_arc (start 25.75 7.75) (end 27 7.75) (angle -169) (layer "Edge.Cuts") (width ${lineWidth}))
#           (fp_arc (start 25.75 7.75) (end 26.5 7.75) (angle -160) (layer "Edge.Cuts") (width ${lineWidth}))
#           (fp_line (start 24.53 7.975) (end 25.05 8) (layer "Edge.Cuts") (width ${lineWidth}))
#           (fp_line (start 24.53 7.525) (end 25.05 7.5) (layer "Edge.Cuts") (width ${lineWidth}))

            # use the hole if you dont want to break it out
            #(fp_circle (center 16 7.75)    (end 20.25 7.75) (stroke (width ${lineWidth}) (type default)) (fill none) (layer "Edge.Cuts"))
            # use arc instead of hole to break it out on one side
            (fp_arc (start 16 7.75) (end 20.25 7.75) (angle 180) (layer "Edge.Cuts") (width ${lineWidth}))
            (fp_arc (start 16 7.75) (end 19.75 7.75) (angle 180) (layer "Edge.Cuts") (width ${lineWidth}))
            (fp_line (start 19.75 7.75) (end 20.25 7.75) (layer "Edge.Cuts") (width ${lineWidth}))
            (fp_line (start 12.25 7.75) (end 11.75 7.75) (layer "Edge.Cuts") (width ${lineWidth}))

            (fp_arc (start 16 7.5) (end 20.25 7.5) (angle -180) (layer "Edge.Cuts") (width ${lineWidth}))
            (fp_arc (start 16 7.5) (end 19.75 7.5) (angle -180) (layer "Edge.Cuts") (width ${lineWidth}))
            (fp_line (start 19.75 7.5) (end 20.25 7.5) (layer "Edge.Cuts") (width ${lineWidth}))
            (fp_line (start 12.25 7.5) (end 11.75 7.5) (layer "Edge.Cuts") (width ${lineWidth}))

  



#            (fp_circle (center 24.75 16)   (end 26 16)      (stroke (width ${lineWidth}) (type default)) (fill none) (layer "Edge.Cuts"))
#            (fp_circle (center 8 16)       (end 9.25 16)    (stroke (width ${lineWidth}) (type default)) (fill none) (layer "Edge.Cuts"))

            (pad "POS" thru_hole circle (at 19 22.5 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.pos.str})
            (fp_text user "POS" (at 19 21 ${p.rot + 90}) (layer B.SilkS)
              (effects (font (size 0.5 0.5) (thickness 0.1)) (justify mirror))
            )
            (pad "RST" thru_hole circle (at 17 22.5 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.rst.str})
            (fp_text user "RST" (at 17 21 ${p.rot + 90}) (layer B.SilkS)
              (effects (font (size 0.5 0.5) (thickness 0.1)) (justify mirror))
            )
            (pad "DTA" thru_hole circle (at 13 22.5 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.dta.str})
            (fp_text user "DTA" (at 13 21 ${p.rot + 90}) (layer B.SilkS)
              (effects (font (size 0.5 0.5) (thickness 0.1)) (justify mirror))
            )
            (pad "CLK" thru_hole circle (at 15 22.5 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.clk.str})
            (fp_text user "CLK" (at 15 21 ${p.rot + 90}) (layer B.SilkS)
              (effects (font (size 0.5 0.5) (thickness 0.1)) (justify mirror))
            )
            (pad "GND" thru_hole circle (at 11 22.5 ${p.rot}) (size 1.2 1.75) (drill 0.75) (layers "*.Cu" "*.Mask") ${p.gnd.str})
            (fp_text user "GND" (at 11 21 ${p.rot + 90}) (layer B.SilkS)
              (effects (font (size 0.5 0.5) (thickness 0.1)) (justify mirror))
            )

            (fp_line (start 0 0) (end 29 0) (layer F.CrtYd) (width 0.05))
            (fp_line (start 29 0) (end 29 36) (layer F.CrtYd) (width 0.05))
            (fp_line (start 29 36) (end 0 36) (layer F.CrtYd) (width 0.05))
            (fp_line (start 0 36) (end 0 0) (layer F.CrtYd) (width 0.05))
        )
    `;
  },
};
