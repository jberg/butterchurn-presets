define([], function() {

"use strict;"

var pmap = {
    'baseVals' : {
        gammaadj : 1.0,
        wave_g : 1.0,
        ib_g : 0.0,
        mv_x : 1.28,
        warpscale : 9.738,
        brighten : 0.0,
        mv_y : 1.248,
        wave_scale : 1.286,
        echo_alpha : 0.0,
        additivewave : 1.0,
        sx : 1.0,
        ob_r : 0.0,
        sy : 1.1046,
        b3x : 1.0,
        ib_size : 0.5,
        b2x : 1.0,
        warp : 7.52389,
        red_blue : 0.0,
        b1x : 0.5,
        wave_mode : 7.0,
        wave_brighten : 0.0,
        wrap : 0.0,
        zoomexp : 1.0,
        mv_dx : 0.0,
        mv_dy : 0.0,
        mv_a : 1.0,
        fshader : 0.0,
        wave_r : 1.0,
        ib_r : 0.0,
        mv_b : 0.0,
        echo_zoom : 1.007,
        ob_size : 0.5,
        b1ed : 0.0,
        wave_smoothing : 0.63,
        warpanimspeed : 0.498,
        wave_dots : 0.0,
        mv_g : 1.0,
        wave_x : 0.5,
        wave_y : 0.5,
        zoom : 1.0003,
        solarize : 0.0,
        modwavealphabyvolume : 0.0,
        dx : 0.0,
        cx : 0.5,
        dy : 0.0,
        ob_a : 1.0,
        darken_center : 0.0,
        cy : 0.5,
        ob_b : 0.0,
        mv_l : 0.0,
        invert : 0.0,
        rot : 0.0,
        wave_thick : 0.0,
        modwavealphaend : 1.3,
        wave_mystery : 0.0,
        decay : 0.925,
        wave_a : 0.001,
        ob_g : 0.0,
        ib_a : 0.0,
        wave_b : 1.0,
        ib_b : 0.0,
        mv_r : 1.0,
        rating : 1.0,
        b3n : 0.0,
        b2n : 0.0,
        modwavealphastart : 0.71,
        b1n : 0.0,
        darken : 0.0,
        echo_orient : 3.0,
    },
    'init_eqs' : function(m) {
m.bb = 0;
m.mm = 0;
m.q1 = 0;
m.tt = 0;
m.framecount = 0;
m.dm = 0;
m.initializing = 0;
m.q21 = 0;
m.q22 = 0;
m.q23 = 0;
m.q24 = 0;
m.q25 = 0;
m.ddt = 0;
m.stages = 0;
m.q26 = 0;
m.initframes = 0;
m.q27 = 0;
m.w = 0;
m.q28 = 0;
m.db = 0;
m.stage = 0;
m.initialized = 0;
m.framecount = 0;
m.stage = 1;
m.initframes = 128;
m.stages = 16;
        return m;
    },
    'frame_eqs' : function(m) {
m.initializing = below(m.framecount, m.initframes);
m.ib_a = (1-m.framecount);
m.ob_a = m.ib_a;
m.mv_a = 1;
m.wave_a = 0;
m.zoom = 1.0;
m.framecount = (m.framecount+1);
m.stage = (m.stage+equal(mod((m.framecount*m.stages),m.initframes), 0));
m.stage = ifcond(m.initializing, m.stage, 1);
m.q1 = m.stage;
m.db = ((m.db*0.98)+(m.bass*0.2));
m.bb = (m.bb+(m.db*0.1));
m.ddt = ((m.ddt*0.98)+(m.treb*0.2));
m.tt = (m.tt+(m.ddt*0.1));
m.dm = ((m.dm*0.98)+(m.mid*0.2));
m.mm = (m.mm+(m.dm*0.1));
m.q23 = (0.5+(Math.sin(((m.bb-m.mm)*0.1))*0.25));
m.q24 = (0.5+(Math.sin(((m.tt-m.mm)*0.1))*0.25));
m.w = ((m.bb-m.tt)*0.1);
m.q26 = (0.25-((m.db-m.ddt)*0.025));
m.q21 = Math.sin(m.w);
m.q22 = Math.cos(m.w);
m.q27 = Math.sin(-m.w);
m.q28 = Math.cos(-m.w);
m.q25 = div(1,m.q26);
        m.rkeys = [];
        return m;
    },
    'pixel_eqs' : "",
    'waves' : [
        {
        'baseVals' : {
            a : 1.0,
            enabled : 0.0,
            b : 1.0,
            g : 1.0,
            scaling : 1.0,
            samples : 512.0,
            additive : 0.0,
            usedots : 0.0,
            spectrum : 0.0,
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
            usedots : 0.0,
            spectrum : 0.0,
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
            usedots : 0.0,
            spectrum : 0.0,
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
            usedots : 0.0,
            spectrum : 0.0,
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
            b : 1.0,
            tex_ang : 2.51327,
            thickoutline : 0.0,
            g : 1.0,
            textured : 1.0,
            g2 : 1.0,
            tex_zoom : 1.3476,
            additive : 0.0,
            border_a : 0.0,
            border_b : 1.0,
            b2 : 1.0,
            a2 : 1.0,
            r : 1.0,
            border_g : 1.0,
            rad : 0.5427,
            x : 0.5,
            y : 0.5,
            ang : 0.0,
            sides : 54.0,
            border_r : 1.0,
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
            a : 1.0,
            enabled : 0.0,
            b : 1.0,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 1.0,
            textured : 1.0,
            g2 : 1.0,
            tex_zoom : 3.30038,
            additive : 0.0,
            border_a : 0.0,
            border_b : 1.0,
            b2 : 1.0,
            a2 : 0.0,
            r : 1.0,
            border_g : 1.0,
            rad : 0.27048,
            x : 0.5,
            y : 0.5,
            ang : 0.0,
            sides : 34.0,
            border_r : 1.0,
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
            a : 1.0,
            enabled : 0.0,
            b : 1.0,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 1.0,
            textured : 0.0,
            g2 : 1.0,
            tex_zoom : 1.0,
            additive : 0.0,
            border_a : 0.0,
            border_b : 1.0,
            b2 : 1.0,
            a2 : 1.0,
            r : 1.0,
            border_g : 1.0,
            rad : 0.24486,
            x : 0.5,
            y : 0.5,
            ang : 0.0,
            sides : 34.0,
            border_r : 1.0,
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
            r2 : 0.0,
            a : 1.0,
            enabled : 0.0,
            b : 0.0,
            tex_ang : 0.0,
            thickoutline : 0.0,
            g : 0.0,
            textured : 0.0,
            g2 : 1.0,
            tex_zoom : 1.0,
            additive : 0.0,
            border_a : 0.1,
            border_b : 1.0,
            b2 : 0.0,
            a2 : 0.0,
            r : 1.0,
            border_g : 1.0,
            rad : 0.1,
            x : 0.5,
            y : 0.5,
            ang : 0.0,
            sides : 4.0,
            border_r : 1.0,
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

        }
],
    'warp' : ('shader_body {\n' + '   int i_1;\n' + '   vec2 m_2;\n' + '   vec3 it_3;\n' + '   vec3 right_4;\n' + '   vec3 left_5;\n' + '   vec2 d_6;\n' + '   vec3 ret_7;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = mix (uv_orig, uv, vec2(0.33, 0.33));\n' + '  d_6 = texsize.zw;\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9 = (uv_orig + ((vec2(0.0, 1.0) * texsize.zw) * _qa.x));\n' + '   vec2 P_10;\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_10 = (tmpvar_9 - tmpvar_11);\n' + '   vec3 tmpvar_12;\n' + '  tmpvar_12 = texture2D (sampler_fw_main, P_10).yyy;\n' + '  left_5 = tmpvar_12;\n' + '   vec2 P_13;\n' + '  P_13 = (tmpvar_9 + tmpvar_11);\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_fw_main, P_13).yyy;\n' + '  right_4 = tmpvar_14;\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = texture2D (sampler_fw_main, tmpvar_9).yyy;\n' + '  it_3 = tmpvar_15;\n' + '  bvec3 tmpvar_16;\n' + '  tmpvar_16 = greaterThan (left_5, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_17;\n' + '  tmpvar_17 = vec3(tmpvar_16);\n' + '  left_5 = tmpvar_17;\n' + '  bvec3 tmpvar_18;\n' + '  tmpvar_18 = greaterThan (right_4, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_19;\n' + '  tmpvar_19 = vec3(tmpvar_18);\n' + '  right_4 = tmpvar_19;\n' + '  bvec3 tmpvar_20;\n' + '  tmpvar_20 = greaterThan (it_3, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_21;\n' + '  tmpvar_21 = vec3(tmpvar_20);\n' + '  it_3 = tmpvar_21;\n' + '  ret_7.y = ((left_5 * (1.0 - right_4)) + ((1.0 - left_5) * right_4)).x;\n' + '  m_2 = (vec2(0.0, 0.7) + ((\n' + '    (0.5 + ((tmpvar_8 - 0.5) * aspect.wz))\n' + '   - 0.5) * 0.6));\n' + '  i_1 = 0;\n' + '  for (int forever = 0; forever < 100; forever++) {\n' + '    bool tmpvar_22;\n' + '    if ((i_1 < 30)) {\n' + '       float tmpvar_23;\n' + '      tmpvar_23 = dot (m_2, m_2);\n' + '      tmpvar_22 = (tmpvar_23 < 5.0);\n' + '    } else {\n' + '      tmpvar_22 = bool(0);\n' + '    };\n' + '    if (!(tmpvar_22)) {\n' + '      break;\n' + '    };\n' + '     vec2 tmpvar_24;\n' + '    tmpvar_24.x = ((m_2.x * m_2.x) - (m_2.y * m_2.y));\n' + '    tmpvar_24.y = ((m_2.x * m_2.y) * 2.0);\n' + '    m_2 = (tmpvar_24 + vec2(0.3, 0.47));\n' + '    i_1++;\n' + '  };\n' + '  ret_7.x = ((dot (m_2, m_2) * 0.04) + ((0.18 - \n' + '    (m_2.x * 0.08)\n' + '  ) - (m_2.y * 0.1)));\n' + '   vec2 tmpvar_25;\n' + '  tmpvar_25 = mix (uv_orig, tmpvar_8, vec2(0.02, 0.02));\n' + '  d_6 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_26;\n' + '   vec2 P_27;\n' + '  P_27 = (tmpvar_25 + (vec2(1.0, 0.0) * d_6));\n' + '  tmpvar_26 = texture2D (sampler_blur1, P_27);\n' + '   vec4 tmpvar_28;\n' + '   vec2 P_29;\n' + '  P_29 = (tmpvar_25 - (vec2(1.0, 0.0) * d_6));\n' + '  tmpvar_28 = texture2D (sampler_blur1, P_29);\n' + '   vec4 tmpvar_30;\n' + '   vec2 P_31;\n' + '  P_31 = (tmpvar_25 + (vec2(0.0, 1.0) * d_6));\n' + '  tmpvar_30 = texture2D (sampler_blur1, P_31);\n' + '   vec4 tmpvar_32;\n' + '   vec2 P_33;\n' + '  P_33 = (tmpvar_25 - (vec2(0.0, 1.0) * d_6));\n' + '  tmpvar_32 = texture2D (sampler_blur1, P_33);\n' + '   vec2 tmpvar_34;\n' + '  tmpvar_34.x = (((2.0 * \n' + '    ((tmpvar_26.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_28.xyz * scale1) + bias1)\n' + '  )) * 0.5).z;\n' + '  tmpvar_34.y = (((2.0 * \n' + '    ((tmpvar_30.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_32.xyz * scale1) + bias1)\n' + '  )) * 0.5).z;\n' + '   vec4 tmpvar_35;\n' + '   vec2 P_36;\n' + '  P_36 = (tmpvar_25 + (tmpvar_34 * texsize.zw));\n' + '  tmpvar_35 = texture2D (sampler_fc_main, P_36);\n' + '  ret_7.z = tmpvar_35.z;\n' + '   vec2 tmpvar_37;\n' + '  tmpvar_37 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy);\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38 = texture2D (sampler_noise_lq, tmpvar_37);\n' + '  ret_7.z = (ret_7.z + ((\n' + '    (tmpvar_38.xyz - 0.5)\n' + '   * 0.04) - 0.002).x);\n' + '  ret_7.z = (ret_7.z + ((\n' + '    (-(ret_7.y) * 0.008)\n' + '   - \n' + '    (ret_7.x * 0.009)\n' + '  ) + 0.004));\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39.w = 1.0;\n' + '  tmpvar_39.xyz = ret_7;\n' + '  vec4 ret4 = tmpvar_39;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'comp' : ('highp vec2 xlat_mutablefactorA;\n' + 'shader_body {\n' + '   vec2 uv_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec2 uv_rr_4;\n' + '   vec2 uv_r_5;\n' + '  xlat_mutablefactorA = (uv - vec2(0.5, 0.5));\n' + '   vec2 tmpvar_6;\n' + '  tmpvar_6.x = -((xlat_mutablefactorA.y * -1024.0));\n' + '  tmpvar_6.y = (xlat_mutablefactorA.x * -1024.0);\n' + '   vec2 tmpvar_7;\n' + '  tmpvar_7.x = tmpvar_6.x;\n' + '  tmpvar_7.y = -(tmpvar_6.y);\n' + '  uv_1 = (vec2(-100.0, 100.0) * (tmpvar_7 / (\n' + '    (tmpvar_6.x * tmpvar_6.x)\n' + '   + \n' + '    (tmpvar_6.y * tmpvar_6.y)\n' + '  )).yx);\n' + '  uv_1 = (0.5 + ((\n' + '    (1.0 - abs(((\n' + '      fract((mix ((0.5 + \n' + '        (((0.5 + (\n' + '          (uv - 0.5)\n' + '         * vec2(1.1, 0.81))) - 0.5) * 2.0)\n' + '      ), (uv_1 + 0.5), vec2(0.5, 0.5)) * 0.5))\n' + '     * 2.0) - 1.0)))\n' + '   - 0.5) * 0.98));\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = ((uv_1 - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_9;\n' + '  tmpvar_9.x = ((_qf.y * tmpvar_8.x) - (_qf.x * tmpvar_8.y));\n' + '  tmpvar_9.y = ((_qf.x * tmpvar_8.x) + (_qf.y * tmpvar_8.y));\n' + '  uv_r_5 = (_qg.x * tmpvar_9);\n' + '  uv_r_5 = (_qf.zw + (uv_r_5 * aspect.zw));\n' + '  uv_r_5 = (1.0 - abs((\n' + '    (fract((uv_r_5 * 0.5)) * 2.0)\n' + '   - 1.0)));\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = ((uv_r_5 - _qf.zw) * aspect.xy);\n' + '   vec2 tmpvar_11;\n' + '  tmpvar_11.x = ((_qg.w * tmpvar_10.x) - (_qg.z * tmpvar_10.y));\n' + '  tmpvar_11.y = ((_qg.z * tmpvar_10.x) + (_qg.w * tmpvar_10.y));\n' + '  uv_rr_4 = (_qg.y * tmpvar_11);\n' + '  uv_rr_4 = (_qf.zw + (uv_rr_4 * aspect.zw));\n' + '  uv_1 = uv_rr_4;\n' + '   vec2 P_12;\n' + '  P_12 = (uv_rr_4 + (vec2(1.0, 0.0) * texsize.zw));\n' + '   vec2 P_13;\n' + '  P_13 = (uv_rr_4 + (vec2(-1.0, 0.0) * texsize.zw));\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = (((2.0 * texture2D (sampler_main, P_12).xyz) - (2.0 * texture2D (sampler_main, P_13).xyz)) * 0.5);\n' + '  dx_3 = tmpvar_14;\n' + '   vec2 P_15;\n' + '  P_15 = (uv_rr_4 + (vec2(0.0, 1.0) * texsize.zw));\n' + '   vec2 P_16;\n' + '  P_16 = (uv_rr_4 + (vec2(0.0, -1.0) * texsize.zw));\n' + '   vec3 tmpvar_17;\n' + '  tmpvar_17 = (((2.0 * texture2D (sampler_main, P_15).xyz) - (2.0 * texture2D (sampler_main, P_16).xyz)) * 0.5);\n' + '  dy_2 = tmpvar_17;\n' + '   vec4 tmpvar_18;\n' + '  tmpvar_18 = texture2D (sampler_main, uv_rr_4);\n' + '   vec4 tmpvar_19;\n' + '  tmpvar_19.w = 1.0;\n' + '  tmpvar_19.xyz = (((\n' + '    pow (hue_shader, vec3(4.0, 4.0, 4.0))\n' + '   * vec3(\n' + '    (((-(dx_3.z) + dy_2.z) * 8.0) + 0.1)\n' + '  )) + (tmpvar_18.z * 0.85)) - 0.08);\n' + '  vec4 ret4 = tmpvar_19;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'init_eqs_str' : ('initialized = 0;\n' + 'framecount = 0;\n' + 'stage = 1;\n' + 'initframes = 128;\n' + 'stages = 16;'),
    'frame_eqs_str' : ('initializing = below(framecount,initframes);\n' + 'ib_a = 1-framecount;\n' + 'ob_a = ib_a;\n' + 'mv_a = 1;\n' + 'wave_a = 0;\n' + 'zoom = 1.0;\n' + 'framecount = framecount + 1;\n' + 'stage = stage + equal((framecount*stages)%initframes,0);\n' + 'stage = if(initializing,stage,1);\n' + 'q1 = stage;\n' + 'db = db*0.98 + bass*0.2;\n' + 'bb = bb + db*0.1;\n' + 'ddt = ddt*0.98 + treb*0.2;\n' + 'tt = tt + ddt*0.1;\n' + 'dm = dm*0.98 + mid*0.2;\n' + 'mm = mm + dm*0.1;\n' + 'q23 = 0.5 + sin((bb-mm)*0.1)*0.25;\n' + 'q24 = 0.5 + sin((tt-mm)*0.1)*0.25;\n' + 'w = (bb-tt)*0.1;\n' + 'q26 = 0.25 - (db-ddt)*0.025;\n' + 'q21 = sin(w);\n' + 'q22 = cos(w);\n' + 'q27 = sin(-w);\n' + 'q28 = cos(-w);\n' + 'q25 = 1/q26;'),
    'pixel_eqs_str' : (''),
};

return pmap;
});