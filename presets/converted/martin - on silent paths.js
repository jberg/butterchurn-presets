define([], function() {

"use strict;"

var pmap = {
    'baseVals' : {
        gammaadj : 1.98,
        wave_g : 0.0,
        ib_g : 0.25,
        mv_x : 32.0,
        warpscale : 2.007,
        brighten : 0.0,
        mv_y : 24.0,
        wave_scale : 0.168,
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
        mv_b : 0.4,
        echo_zoom : 1.0,
        ob_size : 0.0,
        b1ed : 0.7,
        wave_smoothing : 0.0,
        warpanimspeed : 1.459,
        wave_dots : 0.0,
        mv_g : 0.5,
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
        mv_r : 0.3,
        rating : 2.0,
        b3n : 0.0,
        b2n : 0.0,
        modwavealphastart : 0.71,
        b1n : 0.0,
        darken : 1.0,
        echo_orient : 3.0,
    },
    'init_eqs' : function(m) {
m.bass_ = 0;
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
m.q10 = 0;
m.q21 = 0;
m.q22 = 0;
m.index = 0;
m.q23 = 0;
m.bass_2 = 0;
m.avg = 0;
m.q24 = 0;
m.q26 = 0;
m.q27 = 0;
m.beat = 0;
m.q28 = 0;
m.q29 = 0;
m.t0 = 0;
m.rott = 0;
m.dec_slow = 0;
m.peak = 0;
m.q28 = 0;
m.q29 = 0;
m.p1 = 0;
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
m.movz = (m.movz+(div((0.006*30),m.fps)*(1.5+Math.sin(m.rott))));
m.q29 = m.movz;
m.movx = (m.movx+(div((0.01*30),m.fps)*Math.sin(div(m.time,5))));
m.q28 = m.movx;
m.q30 = (Math.sin(div(m.time,9))+2);
m.bass_ = ((m.bass_*m.dec_slow)+((1-m.dec_slow)*m.bass_att));
m.bass_2 = ((m.bass_2*m.dec_slow)+((1-m.dec_slow)*m.bass_));
m.q10 = (m.bass_2-m.bass_);
m.q10 = (-Math.sin((m.time*0.5))*0.005);
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
            scaling : 0.06708,
            samples : 247.0,
            additive : 1.0,
            usedots : 1.0,
            spectrum : 0.0,
            r : 0.0,
            smoothing : 0.82,
            thick : 0.0,
            sep : 9.0,
            },
        'init_eqs' : function(m) {
m.mod = 0;
m.k1 = 0;
m.k2 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;
m.t1 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t2 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t3 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t4 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t5 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t6 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t7 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
m.t8 = (1+(((rand(101)*0.01)-(rand(101)*0.01))*0.3));
            m.rkeys = ['t1'];
            return m;
        },
        'frame_eqs' : function(m) {
m.t1 = 1;
m.t3 = Math.sin(div(m.time,2));
m.t3 = Math.max(m.t3, 0);
m.t3 = (4.9*Math.min(m.t3, 0.2));
        return m;
    },
        'point_eqs' : function(m) {
m.t1 = mod(((m.t1*67)+37),4096);
m.t2 = div(m.t1,4096);
m.k1 = mod(((100*m.sample)+(m.time*2)),2);
m.k2 = mod(((100*m.sample)+(m.time*5)),2);
m.x = (0.49+(0.48*Math.sin(((m.sample*31)+div((m.t2*m.time),27)))));
m.y = ((0+(0.2*m.t2))+(0.2*Math.sin(((m.sample*131)+div((m.t2*m.time),37)))));
m.mod = Math.sin(((m.sample*600)+(0.4*m.time)));
m.mod = Math.max(m.mod, 0);
m.mod = (3*Math.min(m.mod, 0.33));
m.a = 1;
m.r = 0.02;
m.b = (m.mod*0.6);
m.g = (m.mod*(0.7+div(m.t2,4)));
        return m;
    },
        'init_eqs_str' : ('t1 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't2 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't3 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't4 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't5 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't6 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't7 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;\n' + 't8 = 1 + (rand(101)*.01 - rand(101)*.01)*.3;'),
        'frame_eqs_str' : ('t1 = 1;\n' + 't3 = sin(time/2);\n' + 't3 = max (t3,0);\n' + 't3 = 4.9*min(t3,.2);'),
        'point_eqs_str' : ('t1 = (t1*67+37)%4096;\n' + 't2 = t1/4096;\n' + 'k1 = (100*sample+time*2)%2;\n' + 'k2 = (100*sample+time*5)%2;\n' + 'x = .49 + .48*sin(sample*31+t2*time/27);\n' + 'y =  0 + .2*t2 + .2*sin(sample*131+t2*time/37);\n' + 'mod = sin(sample*600+.4*time);\n' + 'mod = max (mod,0);\n' + 'mod = 3*min(mod,.33);\n' + 'a = 1;\n' + 'r = .02;\n' + 'b = mod * .6 ;\n' + ' g = mod * (.7 + t2/4);'),

        },
        {
        'baseVals' : {
            a : 0.1,
            enabled : 1.0,
            b : 1.0,
            g : 1.0,
            scaling : 0.89152,
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
m.k1 = 0;
m.px = 0;
m.py = 0;
m.t1 = 0;
m.t2 = 0;

            m.rkeys = ['t1','t2'];
            return m;
        },
        'frame_eqs' : function(m) {
m.t1 = 1;
m.t2 = 7;
        return m;
    },
        'point_eqs' : function(m) {
m.r = 0.31;
m.b = 0;
m.g = 0.0;
m.a = 1;
m.t1 = mod(((m.t1*67)+37),4096);
m.px = div((m.t1-2047),4096);
m.t2 = mod(((m.t2*67)+37),4096);
m.py = div((m.t2-0),4096);
m.k1 = mod((m.sample*100),8);
m.y = (div(m.py,5)+0.1);
m.a = below(m.py, 0.9);
m.x = (0.5+(0.4*Math.sin((m.sample*26))));
        return m;
    },
        'init_eqs_str' : (''),
        'frame_eqs_str' : ('t1 = 1;\n' + ' t2 = 7;'),
        'point_eqs_str' : ('r = .31;\n' + 'b = 0;\n' + 'g = .0;\n' + 'a = 1;\n' + 't1 = (t1*67 + 37)%4096;\n' + 'px = (t1-2047)/4096;\n' + 't2 = (t2*67 + 37)%4096;\n' + 'py = (t2-0)/4096;\n' + 'k1 = (sample*100)%8;\n' + 'y = py/5 + .1;\n' + 'a = below(py,.9);\n' + 'x = .5 + .4*sin(sample*26)  ;'),

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
            a : 1.0,
            enabled : 0.0,
            b : 0.0,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 0.0,
            textured : 1.0,
            g2 : 0.0,
            tex_zoom : 0.83479,
            additive : 0.0,
            border_a : 0.0,
            border_b : 0.0,
            b2 : 0.0,
            a2 : 0.0,
            r : 1.0,
            border_g : 0.0,
            rad : 0.50371,
            x : 0.78,
            y : 0.1,
            ang : 0.0,
            sides : 4.0,
            border_r : 0.7,
            num_inst : 1.0,
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
            a : 0.1,
            enabled : 0.0,
            b : 1.0,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 1.0,
            textured : 0.0,
            g2 : 1.0,
            tex_zoom : 0.49981,
            additive : 0.0,
            border_a : 0.0,
            border_b : 0.5,
            b2 : 1.0,
            a2 : 0.07,
            r : 1.0,
            border_g : 0.5,
            rad : 0.02217,
            x : 0.5,
            y : 0.5,
            ang : 0.0,
            sides : 63.0,
            border_r : 0.5,
            num_inst : 1.0,
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
            enabled : 0.0,
            b : 0.7,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 0.5,
            textured : 1.0,
            g2 : 0.5,
            tex_zoom : 0.51494,
            additive : 1.0,
            border_a : 0.0,
            border_b : 0.5,
            b2 : 0.6,
            a2 : 0.0,
            r : 0.6,
            border_g : 0.5,
            rad : 1.21524,
            x : 0.59,
            y : 0.0,
            ang : 0.06283,
            sides : 14.0,
            border_r : 0.5,
            num_inst : 1.0,
            },
        'init_eqs' : function(m) {


            m.rkeys = [];
            return m;
        },
        'frame_eqs' : function(m) {
m.x = (0.5+(0.3*Math.cos(div(m.time,78))));
m.y = (0.5+(0.3*Math.sin(div(m.time,78))));
m.tex_zoom = div(0.2,(Math.sin(div(m.time,31))+1.1));
        return m;
    },
        'init_eqs_str' : (''),
        'frame_eqs_str' : ('x = .5+.3*cos(time/78);\n' + 'y = .5+.3*sin(time/78);\n' + 'tex_zoom = .2 / (sin(time/31)+1.1);'),

        },
        {
        'baseVals' : {
            r2 : 1.0,
            a : 0.15,
            enabled : 0.0,
            b : 0.7,
            tex_ang : 0.50266,
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
            rad : 0.68636,
            x : 0.76,
            y : 0.75,
            ang : 0.43982,
            sides : 63.0,
            border_r : 0.5,
            num_inst : 1.0,
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
    'warp' : ('shader_body {\n' + '   float k1_1;\n' + '   float ky_2;\n' + '   float zu_3;\n' + '   vec2 uv3_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (uv - vec2(0.5, 0.5));\n' + '  uv3_4 = ((40.0 + (30.0 * rand_preset)).x * tmpvar_5);\n' + '   float tmpvar_6;\n' + '  tmpvar_6 = dot (texture2D (sampler_noise_lq, uv), vec4(0.32, 0.49, 0.29, 0.0));\n' + '  zu_3 = tmpvar_6;\n' + '  ky_2 = clamp (((\n' + '    (-(uv3_4.y) / 50.0)\n' + '   + \n' + '    ((zu_3 / (4.0 + (16.0 * rand_preset)).x) * cos((16.0 * zu_3)))\n' + '  ) + 0.2), 0.0, 1.0);\n' + '   float tmpvar_7;\n' + '  tmpvar_7 = (uv3_4.x * 2.0);\n' + '  k1_1 = (tmpvar_7 - (sign(tmpvar_7) * 24.0));\n' + '  k1_1 = (k1_1 - (sign(k1_1) * 9.0));\n' + '  k1_1 = (k1_1 - (sign(k1_1) * 5.0));\n' + '   float tmpvar_8;\n' + '  tmpvar_8 = (6.0 * rand_preset.x);\n' + '  k1_1 = (k1_1 + ((2.0 * \n' + '    (k1_1 - ((3.0 + tmpvar_8) * sign(k1_1)))\n' + '  ) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((2.0 * \n' + '    (k1_1 - (((3.0 + tmpvar_8) * 2.0) * sign(k1_1)))\n' + '  ) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((2.0 * \n' + '    (k1_1 - (((3.0 + tmpvar_8) * 3.0) * sign(k1_1)))\n' + '  ) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((2.0 * \n' + '    (k1_1 - (((3.0 + tmpvar_8) * 4.0) * sign(k1_1)))\n' + '  ) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '  k1_1 = (k1_1 + ((2.0 * \n' + '    (k1_1 - (((3.0 + tmpvar_8) * 5.0) * sign(k1_1)))\n' + '  ) * ky_2));\n' + '  ky_2 = clamp ((ky_2 - 0.1), 0.0, 1.0);\n' + '   float tmpvar_9;\n' + '  tmpvar_9 = clamp (k1_1, -1.6, 1.6);\n' + '  k1_1 = tmpvar_9;\n' + '   vec4 tmpvar_10;\n' + '  tmpvar_10.w = 1.0;\n' + '  tmpvar_10.xyz = clamp ((clamp (\n' + '    ((vec3((abs(\n' + '      cos(tmpvar_9)\n' + '    ) / 2.0)) * vec3(1.0, 0.0, 0.0)) * (1.0 - pow ((\n' + '      (3.0 * tmpvar_5.y)\n' + '     - 0.1), 4.0)))\n' + '  , 0.0, 1.0) + (vec3(0.5, 0.0, 0.0) * \n' + '    pow ((2.0 * tmpvar_5.y), 6.0)\n' + '  )), 0.0, 1.0);\n' + '  vec4 ret4 = tmpvar_10;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'comp' : ('uniform highp vec3 neu;\n' + 'uniform highp vec2 uv2;\n' + 'uniform highp vec2 uv5;\n' + 'uniform highp float dist;\n' + 'uniform highp float inten;\n' + 'uniform highp float dist2;\n' + 'highp float xlat_mutablecover;\n' + 'highp float xlat_mutabledist;\n' + 'highp float xlat_mutabledist2;\n' + 'highp float xlat_mutableinten;\n' + 'highp float xlat_mutablen;\n' + 'highp vec3 xlat_mutableneu;\n' + 'highp vec3 xlat_mutableret1;\n' + 'highp vec2 xlat_mutableuv2;\n' + 'highp vec2 xlat_mutableuv5;\n' + 'shader_body {\n' + '  xlat_mutabledist = dist;\n' + '  xlat_mutabledist2 = dist2;\n' + '  xlat_mutableinten = inten;\n' + '  xlat_mutableneu = neu;\n' + '  xlat_mutableuv2 = uv2;\n' + '  xlat_mutableuv5 = uv5;\n' + '   vec2 uv_1;\n' + '   vec3 clouds_2;\n' + '   vec2 sunpos_3;\n' + '   vec3 ret_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5.y = -0.6;\n' + '  tmpvar_5.x = (rand_preset.x - 0.5);\n' + '  sunpos_3 = tmpvar_5;\n' + '  uv_1 = (uv - 0.5);\n' + '  uv_1 = (uv_1 * aspect.xy);\n' + '  uv_1.x = uv_1.x;\n' + '  clouds_2 = ((clamp (\n' + '    (uv.y * uv.y)\n' + '  , 0.0, 1.0) * (1.0 + rand_preset)).xyz + ((\n' + '    clamp ((1.0 - uv.y), 0.0, 1.0)\n' + '   * \n' + '    (1.0 + (rand_preset * slow_roam_cos))\n' + '  ) / 2.0).xyz);\n' + '  xlat_mutablecover = 0.0;\n' + '  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n' + '  xlat_mutablen = 1.0;\n' + '  for (int forever = 0; forever < 100; forever++) {\n' + '    if ((xlat_mutablen > 6.0)) {\n' + '      break;\n' + '    };\n' + '    xlat_mutabledist = (1.0 - fract((\n' + '      (xlat_mutablen / 6.0)\n' + '     + \n' + '      (0.02 * time)\n' + '    )));\n' + '    xlat_mutabledist2 = (1.0 - fract((\n' + '      (xlat_mutablen / 6.0)\n' + '     + \n' + '      (0.01 * time)\n' + '    )));\n' + '    xlat_mutableinten = ((1.0 - xlat_mutabledist) * 2.0);\n' + '    xlat_mutableuv2.y = (uv_1.y - (0.2 * rand_preset.y));\n' + '    xlat_mutableuv2.x = (uv_1.x + ((rand_preset.z - 0.5) / 2.0));\n' + '     vec2 tmpvar_6;\n' + '    tmpvar_6.x = 0.5;\n' + '    tmpvar_6.y = ((0.25 + _qc.y) + (0.1 * rand_preset.x));\n' + '    xlat_mutableuv2 = (((\n' + '      (1.0 + (2.0 * rand_preset.x))\n' + '     * xlat_mutabledist) * xlat_mutableuv2) - tmpvar_6);\n' + '     vec2 tmpvar_7;\n' + '    tmpvar_7 = fract(xlat_mutableuv2);\n' + '    xlat_mutableuv5 = ((normalize(\n' + '      (uv_1 - sunpos_3)\n' + '    ) * 0.2) + sunpos_3);\n' + '     vec2 tmpvar_8;\n' + '    tmpvar_8 = fract(((2.0 * xlat_mutableuv5) * xlat_mutabledist2));\n' + '     vec4 tmpvar_9;\n' + '    tmpvar_9 = texture2D (sampler_blur1, tmpvar_8);\n' + '    xlat_mutablecover = (xlat_mutablecover + dot ((\n' + '      (tmpvar_9.xyz * scale1)\n' + '     + bias1), vec3(0.32, 0.49, 0.29)));\n' + '     vec4 tmpvar_10;\n' + '    tmpvar_10 = texture2D (sampler_main, tmpvar_7);\n' + '     vec4 tmpvar_11;\n' + '    tmpvar_11 = texture2D (sampler_blur1, tmpvar_7);\n' + '    xlat_mutableneu = ((tmpvar_10.xyz + (\n' + '      (tmpvar_11.xyz * scale1)\n' + '     + bias1)) / 4.0);\n' + '    xlat_mutableret1 = (xlat_mutableret1 + (xlat_mutableneu * xlat_mutableinten));\n' + '    xlat_mutablen += 1.0;\n' + '  };\n' + '   float tmpvar_12;\n' + '  tmpvar_12 = clamp ((xlat_mutablecover * 2.0), 0.0, 1.0);\n' + '  ret_4 = (clamp (clouds_2, 0.0, 1.0) * ((0.4 + \n' + '    ((vec3(tmpvar_12) * vec3(tmpvar_12)) * 0.8)\n' + '  ) * 1.5));\n' + '  ret_4 = (ret_4 * clamp ((1.0 - \n' + '    (xlat_mutableret1.x * 4.0)\n' + '  ), 0.0, 1.0));\n' + '  ret_4 = (ret_4 + ((\n' + '    ((vec3(tmpvar_12) * 0.1) * rand_preset.x)\n' + '   * \n' + '    (1.0 + rand_preset)\n' + '  .xyz) * (uv_1.y + 0.5)));\n' + '   vec4 tmpvar_13;\n' + '  tmpvar_13.w = 1.0;\n' + '  tmpvar_13.xyz = ret_4;\n' + '  vec4 ret4 = tmpvar_13;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'init_eqs_str' : ('q28 = 0;\n' + ' q29 = 0;\n' + ' p1= 0;'),
    'frame_eqs_str' : ('dec_med = pow (0.9, 30/fps);\n' + 'dec_slow = pow (0.99, 30/fps);\n' + 'beat = max (max (bass, mid), treb);\n' + 'avg = avg*dec_slow + beat*(1-dec_slow);\n' + 'is_beat = above(beat, .5+avg+peak) * above (time, t0+.2);\n' + 't0 = is_beat*time + (1-is_beat)*t0;\n' + 'peak = is_beat * beat + (1-is_beat)*peak*dec_med;\n' + 'index = (index + is_beat) %8;\n' + 'q20 = avg;\n' + 'q21 = beat;\n' + 'q22 = peak;\n' + 'q23 = index;\n' + 'q24 = is_beat;\n' + 'q26 = bass + mid + treb;\n' + 'k1 =  is_beat*equal(index,0);\n' + 'p1 =  k1*(p1+1) + (1-k1)*p1;\n' + 'p2 = dec_med * p2+ (1-dec_med)*p1;\n' + 'p3 = dec_med * p3+ (1-dec_med)*p2;\n' + 'rott = p3 * 3.1416/2;\n' + 'q27 = index + 1;\n' + 'movz = movz + .006*30/fps*(1.5+sin(rott));\n' + 'q29 = movz ;\n' + 'movx = movx + .01*30/fps*(sin(time/5));\n' + 'q28 = movx;\n' + 'q30 = sin(time/9)+2;\n' + 'bass_ = bass_*dec_slow + (1-dec_slow)*bass_att;\n' + 'bass_2 = bass_2*dec_slow + (1-dec_slow)*bass_;\n' + 'q10 = bass_2 - bass_;\n' + 'q10 = -(sin(time*.5))*.005;'),
    'pixel_eqs_str' : ('warp = .02;'),
};

return pmap;
});