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
        rating : 0.0,
        b3n : 0.0,
        b2n : 0.0,
        modwavealphastart : 0.71,
        b1n : 0.0,
        darken : 0.0,
        echo_orient : 3.0,
    },
    'init_eqs' : function(m) {
m.q1 = 0;
m.framecount = 0;
m.initializing = 0;
m.stages = 0;
m.initframes = 0;
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
    'warp' : ('shader_body {\n' + '   int i_1;\n' + '   vec2 m_2;\n' + '   vec3 it_3;\n' + '   vec3 right_4;\n' + '   vec3 left_5;\n' + '   vec2 d_6;\n' + '   vec3 ret_7;\n' + '  d_6 = texsize.zw;\n' + '   vec2 tmpvar_8;\n' + '  tmpvar_8 = (uv_orig + ((vec2(0.0, 1.0) * texsize.zw) * _qa.x));\n' + '   vec2 P_9;\n' + '   vec2 tmpvar_10;\n' + '  tmpvar_10 = (vec2(1.0, 0.0) * texsize.zw);\n' + '  P_9 = (tmpvar_8 - tmpvar_10);\n' + '   vec3 tmpvar_11;\n' + '  tmpvar_11 = texture2D (sampler_fw_main, P_9).yyy;\n' + '  left_5 = tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (tmpvar_8 + tmpvar_10);\n' + '   vec3 tmpvar_13;\n' + '  tmpvar_13 = texture2D (sampler_fw_main, P_12).yyy;\n' + '  right_4 = tmpvar_13;\n' + '   vec3 tmpvar_14;\n' + '  tmpvar_14 = texture2D (sampler_fw_main, tmpvar_8).yyy;\n' + '  it_3 = tmpvar_14;\n' + '  bvec3 tmpvar_15;\n' + '  tmpvar_15 = greaterThan (left_5, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_16;\n' + '  tmpvar_16 = vec3(tmpvar_15);\n' + '  left_5 = tmpvar_16;\n' + '  bvec3 tmpvar_17;\n' + '  tmpvar_17 = greaterThan (right_4, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_18;\n' + '  tmpvar_18 = vec3(tmpvar_17);\n' + '  right_4 = tmpvar_18;\n' + '  bvec3 tmpvar_19;\n' + '  tmpvar_19 = greaterThan (it_3, vec3(0.5, 0.5, 0.5));\n' + '   vec3 tmpvar_20;\n' + '  tmpvar_20 = vec3(tmpvar_19);\n' + '  it_3 = tmpvar_20;\n' + '  ret_7.y = ((left_5 * (1.0 - right_4)) + ((1.0 - left_5) * right_4)).x;\n' + '  m_2 = (vec2(0.0, 0.7) + ((\n' + '    (0.5 + ((uv - 0.5) * aspect.wz))\n' + '   - 0.5) * 0.6));\n' + '  i_1 = 0;\n' + '  for (int forever = 0; forever < 100; forever++) {\n' + '    bool tmpvar_21;\n' + '    if ((i_1 < 30)) {\n' + '       float tmpvar_22;\n' + '      tmpvar_22 = dot (m_2, m_2);\n' + '      tmpvar_21 = (tmpvar_22 < 5.0);\n' + '    } else {\n' + '      tmpvar_21 = bool(0);\n' + '    };\n' + '    if (!(tmpvar_21)) {\n' + '      break;\n' + '    };\n' + '     vec2 tmpvar_23;\n' + '    tmpvar_23.x = ((m_2.x * m_2.x) - (m_2.y * m_2.y));\n' + '    tmpvar_23.y = ((m_2.x * m_2.y) * 2.0);\n' + '    m_2 = (tmpvar_23 + vec2(0.3, 0.47));\n' + '    i_1++;\n' + '  };\n' + '  ret_7.x = ((dot (m_2, m_2) * 0.04) + ((0.18 - \n' + '    (m_2.x * 0.08)\n' + '  ) - (m_2.y * 0.1)));\n' + '   vec2 tmpvar_24;\n' + '  tmpvar_24 = mix (uv_orig, uv, vec2(0.015, 0.015));\n' + '  d_6 = (texsize.zw * 8.0);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (tmpvar_24 + (vec2(1.0, 0.0) * d_6));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '   vec4 tmpvar_27;\n' + '   vec2 P_28;\n' + '  P_28 = (tmpvar_24 - (vec2(1.0, 0.0) * d_6));\n' + '  tmpvar_27 = texture2D (sampler_blur1, P_28);\n' + '   vec4 tmpvar_29;\n' + '   vec2 P_30;\n' + '  P_30 = (tmpvar_24 + (vec2(0.0, 1.0) * d_6));\n' + '  tmpvar_29 = texture2D (sampler_blur1, P_30);\n' + '   vec4 tmpvar_31;\n' + '   vec2 P_32;\n' + '  P_32 = (tmpvar_24 - (vec2(0.0, 1.0) * d_6));\n' + '  tmpvar_31 = texture2D (sampler_blur1, P_32);\n' + '   vec2 tmpvar_33;\n' + '  tmpvar_33.x = (((2.0 * \n' + '    ((tmpvar_25.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_27.xyz * scale1) + bias1)\n' + '  )) * 0.5).z;\n' + '  tmpvar_33.y = (((2.0 * \n' + '    ((tmpvar_29.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_31.xyz * scale1) + bias1)\n' + '  )) * 0.5).z;\n' + '   vec4 tmpvar_34;\n' + '   vec2 P_35;\n' + '  P_35 = (tmpvar_24 + (tmpvar_33 * texsize.zw));\n' + '  tmpvar_34 = texture2D (sampler_fc_main, P_35);\n' + '  ret_7.z = tmpvar_34.z;\n' + '   vec2 tmpvar_36;\n' + '  tmpvar_36 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.2)) + rand_frame.xy);\n' + '   vec4 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_noise_lq, tmpvar_36);\n' + '  ret_7.z = (ret_7.z + ((\n' + '    (tmpvar_37.xyz - 0.5)\n' + '   * 0.04) - 0.002).x);\n' + '  ret_7.z = (ret_7.z + ((\n' + '    -(ret_7.y)\n' + '   * 0.008) + (ret_7.x * 0.006)));\n' + '   vec4 tmpvar_38;\n' + '  tmpvar_38.w = 1.0;\n' + '  tmpvar_38.xyz = ret_7;\n' + '  vec4 ret4 = tmpvar_38;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'comp' : ('shader_body {\n' + '   vec2 uv1_1;\n' + '   vec3 dy_2;\n' + '   vec3 dx_3;\n' + '   vec3 ret_4;\n' + '   vec2 tmpvar_5;\n' + '  tmpvar_5 = (texsize.zw * 3.0);\n' + '   vec4 tmpvar_6;\n' + '   vec2 P_7;\n' + '  P_7 = (uv + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_6 = texture2D (sampler_blur1, P_7);\n' + '   vec4 tmpvar_8;\n' + '   vec2 P_9;\n' + '  P_9 = (uv + (vec2(-1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_8 = texture2D (sampler_blur1, P_9);\n' + '   vec3 tmpvar_10;\n' + '  tmpvar_10 = (((2.0 * \n' + '    ((tmpvar_6.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_8.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec4 tmpvar_11;\n' + '   vec2 P_12;\n' + '  P_12 = (uv + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_11 = texture2D (sampler_blur1, P_12);\n' + '   vec4 tmpvar_13;\n' + '   vec2 P_14;\n' + '  P_14 = (uv + (vec2(0.0, -1.0) * tmpvar_5));\n' + '  tmpvar_13 = texture2D (sampler_blur1, P_14);\n' + '   vec3 tmpvar_15;\n' + '  tmpvar_15 = (((2.0 * \n' + '    ((tmpvar_11.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_13.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec2 tmpvar_16;\n' + '  tmpvar_16.x = tmpvar_10.y;\n' + '  tmpvar_16.y = tmpvar_15.y;\n' + '   vec2 tmpvar_17;\n' + '  tmpvar_17.x = tmpvar_10.z;\n' + '  tmpvar_17.y = tmpvar_15.z;\n' + '   vec2 tmpvar_18;\n' + '  tmpvar_18 = fract(((0.5 + \n' + '    (uv - 0.5)\n' + '  ) + (_qe.zw * vec2(-1.0, 1.0))));\n' + '   vec4 tmpvar_19;\n' + '   vec2 P_20;\n' + '  P_20 = (tmpvar_18 + (vec2(1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_19 = texture2D (sampler_blur1, P_20);\n' + '   vec4 tmpvar_21;\n' + '   vec2 P_22;\n' + '  P_22 = (tmpvar_18 + (vec2(-1.0, 0.0) * tmpvar_5));\n' + '  tmpvar_21 = texture2D (sampler_blur1, P_22);\n' + '  dx_3 = (((2.0 * \n' + '    ((tmpvar_19.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_21.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec4 tmpvar_23;\n' + '   vec2 P_24;\n' + '  P_24 = (tmpvar_18 + (vec2(0.0, 1.0) * tmpvar_5));\n' + '  tmpvar_23 = texture2D (sampler_blur1, P_24);\n' + '   vec4 tmpvar_25;\n' + '   vec2 P_26;\n' + '  P_26 = (tmpvar_18 + (vec2(0.0, -1.0) * tmpvar_5));\n' + '  tmpvar_25 = texture2D (sampler_blur1, P_26);\n' + '  dy_2 = (((2.0 * \n' + '    ((tmpvar_23.xyz * scale1) + bias1)\n' + '  ) - (2.0 * \n' + '    ((tmpvar_25.xyz * scale1) + bias1)\n' + '  )) * 0.5);\n' + '   vec2 tmpvar_27;\n' + '  tmpvar_27.x = dx_3.x;\n' + '  tmpvar_27.y = dy_2.x;\n' + '  uv1_1 = (fract((\n' + '    (uv - tmpvar_16)\n' + '   - \n' + '    ((tmpvar_17 * rad) * 2.0)\n' + '  )) - (tmpvar_27 * 4.0));\n' + '   vec4 tmpvar_28;\n' + '  tmpvar_28 = texture2D (sampler_blur2, uv1_1);\n' + '   vec3 tmpvar_29;\n' + '  tmpvar_29 = texture2D (sampler_main, uv).yyy;\n' + '   vec2 tmpvar_30;\n' + '  tmpvar_30.x = dx_3.x;\n' + '  tmpvar_30.y = dy_2.x;\n' + '   vec2 P_31;\n' + '  P_31 = (uv - (tmpvar_30 * 0.2));\n' + '   float tmpvar_32;\n' + '  tmpvar_32 = clamp ((1.0 - (rad * 1.5)), 0.0, 1.0);\n' + '   vec3 tmpvar_33;\n' + '  tmpvar_33 = vec3((texture2D (sampler_main, P_31).z * tmpvar_32));\n' + '   vec2 tmpvar_34;\n' + '  tmpvar_34.x = dx_3.x;\n' + '  tmpvar_34.y = dy_2.x;\n' + '   vec4 tmpvar_35;\n' + '   vec2 P_36;\n' + '  P_36 = (tmpvar_18 + (tmpvar_34 * 0.3));\n' + '  tmpvar_35 = texture2D (sampler_blur1, P_36);\n' + '   vec3 tmpvar_37;\n' + '  tmpvar_37 = texture2D (sampler_main, tmpvar_18).xxx;\n' + '   vec3 tmpvar_38;\n' + '  tmpvar_38 = mix (mix (mix (\n' + '    mix (mix (ret_4, vec3(1.0, 1.0, 1.0), ((tmpvar_28.xyz * scale2) + bias2).yyy), vec3(1.0, 0.5, 0.0), tmpvar_29)\n' + '  , vec3(1.0, 1.0, 1.0), tmpvar_33), vec3(1.0, 1.0, 1.0), (\n' + '    (tmpvar_35.xyz * scale1)\n' + '   + bias1).xxx), vec3(0.5, 0.0, 1.0), tmpvar_37);\n' + '  ret_4 = tmpvar_38;\n' + '   vec4 tmpvar_39;\n' + '  tmpvar_39.w = 1.0;\n' + '  tmpvar_39.xyz = tmpvar_38;\n' + '  vec4 ret4 = tmpvar_39;\n' + '\n' + '  ret = ret4.xyz;\n}\n'),
    'init_eqs_str' : ('initialized = 0;\n' + 'framecount = 0;\n' + 'stage = 1;\n' + 'initframes = 128;\n' + 'stages = 16;'),
    'frame_eqs_str' : ('initializing = below(framecount,initframes);\n' + 'ib_a = 1-framecount;\n' + 'ob_a = ib_a;\n' + 'mv_a = 1;\n' + 'wave_a = 0;\n' + 'zoom = 1.0;\n' + 'framecount = framecount + 1;\n' + 'stage = stage + equal((framecount*stages)%initframes,0);\n' + 'stage = if(initializing,stage,1);\n' + 'q1 = stage;'),
    'pixel_eqs_str' : (''),
};

return pmap;
});