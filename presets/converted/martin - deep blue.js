define([], function() {

"use strict;"

var pmap = {
    'baseVals' : {
        gammaadj : 1.980001,
        wave_g : 0.0,
        ib_g : 0.25,
        mv_x : 31.999998,
        warpscale : 2.0067,
        brighten : 0.0,
        mv_y : 24.000004,
        wave_scale : 0.167975,
        echo_alpha : 0.5,
        additivewave : 1.0,
        sx : 0.9999,
        ob_r : 0.0,
        sy : 1.0,
        b3x : 1.0,
        ib_size : 0.26,
        b2x : 1.0,
        warp : 0.01,
        red_blue : 0.0,
        b1x : 1.0,
        wave_mode : 1.0,
        wave_brighten : 0.0,
        wrap : 1.0,
        zoomexp : 1.0,
        mv_dx : 0.0,
        mv_dy : 0.0,
        mv_a : 0.0,
        fshader : 0.0,
        wave_r : 0.0,
        ib_r : 0.25,
        mv_b : 0.3999,
        echo_zoom : 0.999998,
        ob_size : 0.0,
        b1ed : 0.7,
        wave_smoothing : 0.0,
        warpanimspeed : 1.4595,
        wave_dots : 0.0,
        mv_g : 0.4999,
        wave_x : 0.5,
        wave_y : 0.5,
        zoom : 0.9999,
        solarize : 0.0,
        modwavealphabyvolume : 1.0,
        dx : 0.0,
        cx : 0.5,
        dy : 0.0,
        ob_a : 1.0,
        darken_center : 0.0,
        cy : 0.5,
        ob_b : 0.0,
        mv_l : 0.5,
        invert : 0.0,
        rot : 0.0,
        wave_thick : 1.0,
        modwavealphaend : 1.3,
        wave_mystery : -0.2,
        decay : 0.5,
        wave_a : 0.001,
        ob_g : 0.0,
        ib_a : 0.0,
        wave_b : 0.0,
        ib_b : 0.25,
        mv_r : 0.2999,
        rating : 0.0,
        b3n : 0.0,
        b2n : 0.0,
        modwavealphastart : 0.71,
        b1n : 0.0,
        darken : 1.0,
        echo_orient : 3.0,
    },
    'init_eqs' : function(m) {
m.p1 = 0;
m.p2 = 0;
m.p3 = 0;
m.movx = 0;
m.k1 = 0;
m.movz = 0;
m.is_beat = 0;
m.q30 = 0;
m.dec_med = 0;
m.q20 = 0;
m.q31 = 0;
m.q10 = 0;
m.q21 = 0;
m.q32 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.fade = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.q28 = 0;
m.q29 = 0;
m.p1 = 0;
m.fade = 0.9;
        return m;
    },
    'frame_eqs' : function(m) {
m.dec_med = pow(0.9, div(30,m.fps));
m.dec_slow = pow(0.99, div(30,m.fps));
m.beat = Math.max(Math.max(m.bass, m.mid), m.treb);
m.avg = ((m.avg*m.dec_slow)+(m.beat*(1-m.dec_slow)));
m.is_beat = (above(m.beat, ((0.5+m.avg)+m.peak))*above(m.time, (m.t0+0.2)));
m.t0 = ((m.is_beat*m.time)+((1-m.is_beat)*m.t0));
m.peak = ((m.is_beat*m.beat)+(((1-m.is_beat)*m.peak)*m.dec_med));
m.index = mod((m.index+m.is_beat),8);
m.q20 = m.avg;
m.q21 = m.beat;
m.q22 = m.peak;
m.q23 = m.index;
m.q24 = m.is_beat;
m.q26 = ((m.bass+m.mid)+m.treb);
m.k1 = (m.is_beat*equal(m.index, 0));
m.p1 = ((m.k1*(m.p1+1))+((1-m.k1)*m.p1));
m.p2 = ((m.dec_med*m.p2)+((1-m.dec_med)*m.p1));
m.p3 = ((m.dec_med*m.p3)+((1-m.dec_med)*m.p2));
m.rott = div((m.p3*3.1416),2);
m.q27 = (m.index+1);
m.movz = (m.movz+(div((0.001*30),m.fps)*(1.5+Math.sin(m.rott))));
m.q29 = m.movz;
m.movx = (m.movx+(div((0.001*30),m.fps)*(1+Math.sin(div(m.time,7)))));
m.q28 = m.movx;
m.q30 = (0.5*(Math.sin(div(m.time,19))+1));
m.q31 = (3*(Math.sin(div(m.time,23))+2));
m.q32 = (Math.sin(div(m.time,17))+1);
m.fade = ((m.fade*m.dec_med)+(0.98*(1-m.dec_med)));
m.q10 = m.fade;
        m.rkeys = [];
        return m;
    },
    'pixel_eqs' : function(m) {
m.warp = 0.02;
        return m;
    },
    'waves' : [
        {
        'baseVals' : {
            a : 1.0,
            enabled : 0.0,
            b : 0.5,
            g : 1.0,
            scaling : 0.067077,
            samples : 128.0,
            additive : 0.0,
            usedots : 1.0,
            spectrum : 0.0,
            r : 0.0,
            smoothing : 0.82,
            thick : 1.0,
            sep : 49.0,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {

        return m;
    },
        'point_eqs' : "",
        'init_eqs_str' : (''),
        'frame_eqs_str' : (''),
        'point_eqs_str' : (''),

        },
        {
        'baseVals' : {
            a : 0.1,
            enabled : 0.0,
            b : 1.0,
            g : 1.0,
            scaling : 0.891519,
            samples : 512.0,
            additive : 0.0,
            usedots : 0.0,
            spectrum : 0.0,
            r : 1.0,
            smoothing : 0.82,
            thick : 0.0,
            sep : 0.0,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {

        return m;
    },
        'point_eqs' : "",
        'init_eqs_str' : (''),
        'frame_eqs_str' : (''),
        'point_eqs_str' : (''),

        },
        {
        'baseVals' : {
            a : 0.1,
            enabled : 0.0,
            b : 1.0,
            g : 1.0,
            scaling : 0.01,
            samples : 100.0,
            additive : 0.0,
            usedots : 0.0,
            spectrum : 0.0,
            r : 1.0,
            smoothing : 0.82,
            thick : 1.0,
            sep : 0.0,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {

        return m;
    },
        'point_eqs' : "",
        'init_eqs_str' : (''),
        'frame_eqs_str' : (''),
        'point_eqs_str' : (''),

        },
        {
        'baseVals' : {
            a : 1.0,
            enabled : 0.0,
            b : 1.0,
            g : 1.0,
            scaling : 1.0,
            samples : 512.0,
            additive : 0.0,
            usedots : 1.0,
            spectrum : 1.0,
            r : 1.0,
            smoothing : 0.5,
            thick : 0.0,
            sep : 0.0,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {

        return m;
    },
        'point_eqs' : "",
        'init_eqs_str' : (''),
        'frame_eqs_str' : (''),
        'point_eqs_str' : (''),

        }
],
    'shapes' : [
        {
        'baseVals' : {
            r2 : 1.0,
            a : 0.1,
            enabled : 1.0,
            b : 0.0,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 1.0,
            textured : 1.0,
            g2 : 0.0,
            tex_zoom : 0.459514,
            additive : 0.0,
            border_a : 0.0,
            border_b : 0.0,
            b2 : 0.0,
            a2 : 0.0,
            r : 1.0,
            border_g : 0.0,
            rad : 1.504993,
            x : 0.5,
            y : 0.13,
            ang : 0.0,
            sides : 3.0,
            border_r : 0.7,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {

        return m;
    },
        'init_eqs_str' : (''),
        'frame_eqs_str' : (''),

        },
        {
        'baseVals' : {
            r2 : 0.0,
            a : 1.0,
            enabled : 1.0,
            b : 1.0,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 1.0,
            textured : 0.0,
            g2 : 0.3,
            tex_zoom : 0.499805,
            additive : 0.0,
            border_a : 0.0,
            border_b : 0.5,
            b2 : 0.0,
            a2 : 1.0,
            r : 0.0,
            border_g : 0.5,
            rad : 0.013478,
            x : 0.5,
            y : 0.5,
            ang : 0.0,
            sides : 8.0,
            border_r : 1.0,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {

        return m;
    },
        'init_eqs_str' : (''),
        'frame_eqs_str' : (''),

        },
        {
        'baseVals' : {
            r2 : 0.7,
            a : 0.1,
            enabled : 1.0,
            b : 0.7,
            tex_ang : 1.884956,
            thickoutline : 0.0,
            g : 0.5,
            textured : 1.0,
            g2 : 0.5,
            tex_zoom : 0.179142,
            additive : 1.0,
            border_a : 0.0,
            border_b : 0.5,
            b2 : 0.6,
            a2 : 0.0,
            r : 0.6,
            border_g : 0.5,
            rad : 0.449286,
            x : 0.59,
            y : 0.0,
            ang : 0.062832,
            sides : 24.0,
            border_r : 0.5,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {

        return m;
    },
        'init_eqs_str' : (''),
        'frame_eqs_str' : (''),

        },
        {
        'baseVals' : {
            r2 : 1.0,
            a : 0.15,
            enabled : 0.0,
            b : 0.7,
            tex_ang : 0.502655,
            thickoutline : 0.0,
            g : 0.7,
            textured : 1.0,
            g2 : 1.0,
            tex_zoom : 0.6159,
            additive : 1.0,
            border_a : 0.0,
            border_b : 0.5,
            b2 : 1.0,
            a2 : 0.0,
            r : 0.7,
            border_g : 0.5,
            rad : 0.686364,
            x : 0.76,
            y : 0.75,
            ang : 0.439823,
            sides : 63.0,
            border_r : 0.5,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {
m.x = (0.5+(0.3*Math.cos(div(m.time,59))));
m.y = (0.5+(0.3*Math.sin(div(m.time,59))));
        return m;
    },
        'init_eqs_str' : (''),
        'frame_eqs_str' : ('x = .5+.3*cos(time/59);\n' + 'y = .5+.3 *sin(time/59);'),

        }
],
    'warp' : ('highp vec3 xlat_mutablemus;\n' + 'shader_body {\n' + '   vec3 crisp2_1;\n' + '   vec3 crisp_2;\n' + '   float dy_3;\n' + '   float dx_4;\n' + '   vec2 uv6_5;\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6 = (uv - 0.5);\n' + '   vec2 P_7;\n' + '  P_7 = (uv / 4.0);\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = dot (texture2D (sampler_noise_hq, P_7), vec4(0.32, 0.49, 0.29, 0.0));\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = (tmpvar_8 * _qh.z);\n' + '   mat2 tmpvar_10;\n' + '  tmpvar_10[0].x = cos(tmpvar_9);\n' + '  tmpvar_10[0].y = sin(tmpvar_9);\n' + '  tmpvar_10[1].x = -(sin(tmpvar_9));\n' + '  tmpvar_10[1].y = cos(tmpvar_9);\n' + '  uv6_5 = (tmpvar_6 * tmpvar_10);\n' + '  uv6_5 = (uv6_5 + sin((_qh.w * tmpvar_6)));\n' + '  xlat_mutablemus = (vec3((0.2 / (\n' + '    sqrt(uv6_5.x)\n' + '   + 0.2))) * vec3(1.1, 1.0, 0.95));\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = (0.9 + (0.1 * texture2D (sampler_noise_hq, uv))).xyz;\n' + '  xlat_mutablemus = (xlat_mutablemus * tmpvar_11);\n' + '   vec2 tmpvar_12;\n' + '  tmpvar_12 = fract(uv);\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_blur1, tmpvar_12);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = ((tmpvar_13.xyz * scale1) + bias1);\n' + '   vec2 P_15;\n' + '  P_15 = (uv + vec2(0.005, 0.0));\n' + '   vec2 P_16;\n' + '  P_16 = (uv - vec2(0.005, 0.0));\n' + '   float tmpvar_17;\n' + '  tmpvar_17 = dot ((texture2D (sampler_main, P_15) - texture2D (sampler_main, P_16)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dx_4 = tmpvar_17;\n' + '   vec2 P_18;\n' + '  P_18 = (uv + vec2(0.0, 0.005));\n' + '   vec2 P_19;\n' + '  P_19 = (uv - vec2(0.0, 0.005));\n' + '   float tmpvar_20;\n' + '  tmpvar_20 = dot ((texture2D (sampler_main, P_18) - texture2D (sampler_main, P_19)), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  dy_3 = tmpvar_20;\n' + '   vec2 tmpvar_21;\n' + '  tmpvar_21.x = dx_4;\n' + '  tmpvar_21.y = dy_3;\n' + '   vec2 P_22;\n' + '  P_22 = (uv + (tmpvar_21 * 0.02));\n' + '   vec3 tmpvar_23;\n' + '  tmpvar_23 = texture2D (sampler_main, P_22).xyz;\n' + '  crisp_2 = tmpvar_23;\n' + '   vec3 tmpvar_24;\n' + '  tmpvar_24 = texture2D (sampler_main, uv).xyz;\n' + '  crisp2_1 = tmpvar_24;\n' + '  crisp_2 = (crisp_2 + (crisp2_1 / 2.0));\n' + '  crisp_2 = (crisp_2 * 0.67);\n' + '  crisp_2 = (crisp_2 + ((0.08 * xlat_mutablemus) - (\n' + '    sqrt(dot (tmpvar_21, tmpvar_21))\n' + '   * tmpvar_14)));\n' + '   vec4 tmpvar_25;\n' + '  tmpvar_25.w = 1.0;\n' + '  tmpvar_25.xyz = (((crisp_2 - \n' + '    (dot (tmpvar_14, vec3(0.32, 0.49, 0.29)) * 0.04)\n' + '  ) * _qc.y) - 0.04);\n' + '  vec4 ret4 = tmpvar_25;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec3 glow;\n' + 'uniform highp vec3 sky;\n' + 'uniform highp vec2 uv1;\n' + 'uniform highp vec2 uv2;\n' + 'uniform highp float m;\n' + 'uniform highp float dist;\n' + 'uniform highp float dist2;\n' + 'uniform highp float inten;\n' + 'uniform highp float mask;\n' + 'uniform highp float dx;\n' + 'uniform highp float dy;\n' + 'highp float xlat_mutabledist;\n' + 'highp float xlat_mutabledist2;\n' + 'highp float xlat_mutabledx;\n' + 'highp float xlat_mutabledy;\n' + 'highp vec3 xlat_mutableglow;\n' + 'highp float xlat_mutableinten;\n' + 'highp float xlat_mutablem;\n' + 'highp float xlat_mutablemask;\n' + 'highp float xlat_mutablen;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec3 xlat_mutablesky;\n' + 'highp vec2 xlat_mutableuv1;\n' + 'highp vec2 xlat_mutableuv2;\n' + 'shader_body {\n' + '  xlat_mutabledist = dist;\n' + '  xlat_mutabledist2 = dist2;\n' + '  xlat_mutabledx = dx;\n' + '  xlat_mutabledy = dy;\n' + '  xlat_mutableglow = glow;\n' + '  xlat_mutableinten = inten;\n' + '  xlat_mutablem = m;\n' + '  xlat_mutablemask = mask;\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutablesky = sky;\n' + '  xlat_mutableuv1 = uv1;\n' + '  xlat_mutableuv2 = uv2;\n' + '   vec2 uv_1;\n' + '   float t_rel_2;\n' + '   vec3 ret_3;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  t_rel_2 = _qh.x;\n' + '  xlat_mutablen = 1.0;\n' + '  for (int forever = 0; forever < 100; forever++) {\n' + '    if ((xlat_mutablen > 3.0)) {\n' + '      break;\n' + '    };\n' + '    xlat_mutablem = (xlat_mutablen - float(int(t_rel_2)));\n' + '    xlat_mutabledist = (1.0 - fract((\n' + '      (xlat_mutablen / 3.0)\n' + '     - \n' + '      (fract(-(t_rel_2)) / 3.0)\n' + '    )));\n' + '    xlat_mutabledist2 = (xlat_mutabledist * xlat_mutabledist);\n' + '    xlat_mutableinten = (pow (xlat_mutabledist, 0.3) * (1.0 - xlat_mutabledist2));\n' + '    xlat_mutableuv2 = (((2.0 * xlat_mutabledist) * (uv_1 - 0.4)) - 0.1);\n' + '     vec2 tmpvar_4;\n' + '    tmpvar_4 = fract((xlat_mutableuv2 + (\n' + '      (xlat_mutablem + _qg.w)\n' + '     * vec2(0.4, 1.0))));\n' + '     vec2 P_5;\n' + '    P_5 = (tmpvar_4 + vec2(0.004, 0.0));\n' + '     vec2 P_6;\n' + '    P_6 = (tmpvar_4 - vec2(0.004, 0.0));\n' + '     float tmpvar_7;\n' + '    tmpvar_7 = dot ((texture2D (sampler_main, P_5).xyz - texture2D (sampler_main, P_6).xyz), vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledx = tmpvar_7;\n' + '     vec2 P_8;\n' + '    P_8 = (tmpvar_4 + vec2(0.0, 0.004));\n' + '     vec2 P_9;\n' + '    P_9 = (tmpvar_4 - vec2(0.0, 0.004));\n' + '     float tmpvar_10;\n' + '    tmpvar_10 = dot ((texture2D (sampler_main, P_8).xyz - texture2D (sampler_main, P_9).xyz), vec3(0.32, 0.49, 0.29));\n' + '    xlat_mutabledy = tmpvar_10;\n' + '     vec2 tmpvar_11;\n' + '    tmpvar_11.x = xlat_mutabledx;\n' + '    tmpvar_11.y = xlat_mutabledy;\n' + '     vec4 tmpvar_12;\n' + '     vec2 P_13;\n' + '    P_13 = (tmpvar_4 + (0.5 * tmpvar_11));\n' + '    tmpvar_12 = texture2D (sampler_main, P_13);\n' + '    xlat_mutableneu = tmpvar_12.xyz;\n' + '     vec4 tmpvar_14;\n' + '    tmpvar_14 = texture2D (sampler_blur1, tmpvar_4);\n' + '    xlat_mutableglow = (((tmpvar_14.xyz * scale1) + bias1) * vec3(0.5, 1.0, 1.0));\n' + '    xlat_mutablemask = (1.0 - clamp ((8.0 * xlat_mutableneu), 0.0, 1.0)).x;\n' + '    xlat_mutableret1 = ((xlat_mutableret1 * xlat_mutablemask) + ((xlat_mutableneu + \n' + '      (2.0 * xlat_mutableglow)\n' + '    ) * xlat_mutableinten));\n' + '    xlat_mutablen += 1.0;\n' + '  };\n' + '   vec2 tmpvar_15;\n' + '  tmpvar_15.y = 0.25;\n' + '  tmpvar_15.x = ((2.0 * fract(\n' + '    (0.003 * time)\n' + '  )) - 0.55);\n' + '  xlat_mutableuv1 = ((uv_1 + tmpvar_15) - (xlat_mutableret1 / 8.0).xy);\n' + '  xlat_mutablesky = (vec3(0.08000001, 0.12, 0.4) * clamp ((0.4 - uv_1.y), 0.0, 1.0));\n' + '  ret_3 = ((xlat_mutableret1 * vec3(0.0, 1.0, 1.0)) + (xlat_mutablesky * clamp (\n' + '    (1.0 - (2.0 * xlat_mutableret1.x))\n' + '  , 0.0, 1.0)));\n' + '  ret_3 = (ret_3 + ((8.0 * ret_3) * clamp (\n' + '    (0.01 / sqrt(dot (xlat_mutableuv1, xlat_mutableuv1)))\n' + '  , 0.0, 1.0)));\n' + '   vec4 tmpvar_16;\n' + '  tmpvar_16.w = 1.0;\n' + '  tmpvar_16.xyz = ret_3;\n' + '  vec4 ret4 = tmpvar_16;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'init_eqs_str' : ('q28 = 0;\n' + ' q29 = 0;\n' + ' p1= 0;\n' + 'fade = .9;'),
    'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3 * 3.1416/2;\n' + 'q27 = index + 1;\n' + 'movz = movz + .001*30/fps*(1.5+sin(rott));\n' + 'q29 = movz ;\n' + 'movx = movx + .001*30/fps*(1+sin(time/7));\n' + 'q28 = movx;\n' + 'q30 = .5 * (sin(time/19)+1);\n' + 'q31 = 3*(sin(time/23)+2);\n' + 'q32 = sin(time/17)+1;\n' + 'fade = fade * dec_med + .98 * (1-dec_med);\n' + 'q10 = fade;'),
    'pixel_eqs_str' : ('warp = .02;'),
};

return pmap;
});