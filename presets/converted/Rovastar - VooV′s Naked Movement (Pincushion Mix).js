define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 2.995,
		wave_g : 0.7,
		ib_g : 0.0,
		mv_x : 64.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 48.0,
		wave_scale : 1.186471,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 7.0,
		wave_brighten : 1.0,
		wrap : 0.0,
		zoomexp : 0.351767,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 1.0,
		fshader : 1.0,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.980296,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 1.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 1.0,
		mv_l : 0.25,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 0.95,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 1.0,
		ob_g : 0.0,
		ib_a : 1.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.75,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.zz = 0;
m.q2 = 0;
m.q3 = 0;
m.mode = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.oldzz = 0;
m.oldq8 = 0;
m.change = 0;
m.newzoom = 0;
m.newrad = 0;
m.beat = 0;
m.oldchange = 0;
m.newx = 0;
m.newy = 0;
m.newang = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.warp = 0;
m.q8 = ((m.oldq8+(0.003*(((((div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 6),m.fps)+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 5),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 4),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 3),m.fps))+div(pow(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)), 2),m.fps))+div(((((((1.2*m.bass)+(0.4*m.bass_att))+(0.1*m.treb))+(0.1*m.treb_att))+(0.1*m.mid))+(0.1*m.mid_att)),m.fps))))+div(1,(m.fps*5)));
m.oldq8 = m.q8;
m.q1 = (((0.5+(0.15*Math.sin((0.416*m.q8))))+(0.15*Math.sin((0.832*m.q8))))+(0.1*Math.sin((1.324*m.q8))));
m.q2 = (((0.5+(0.15*Math.sin((0.341*m.q8))))+(0.15*Math.sin((0.768*m.q8))))+(0.1*Math.sin((1.523*m.q8))));
m.q6 = (((0.5+(0.15*Math.sin((0.287*m.q8))))+(0.15*Math.sin((0.913*m.q8))))+(0.1*Math.sin((1.142*m.q8))));
m.q7 = (((0.5+(0.15*Math.sin((0.531*m.q8))))+(0.15*Math.sin((0.671*m.q8))))+(0.1*Math.sin((1.442*m.q8))));
m.change = ifcond(m.beat, (rand(10)+3), m.oldchange);
m.oldchange = m.change;
m.change = 10;
m.q4 = (((m.change+(0.2*Math.sin((m.q8*0.385))))+(0.2*Math.sin((m.q8*0.641))))+(0.2*Math.sin((m.q8*0.846))));
m.zz = ifcond(m.beat, (rand(13)+3), m.oldzz);
m.oldzz = m.zz;
m.zz = 6;
m.q5 = (((m.zz+(0.2*Math.sin((m.q8*0.385))))+(0.2*Math.sin((m.q8*0.641))))+(0.2*Math.sin((m.q8*0.846))));
m.q3 = m.mode;
m.wave_a = 0;
m.monitor = m.mode;
m.decay = 0.3;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.newx = (m.x-m.q1);
m.newy = (m.y-m.q6);
m.newrad = Math.min((sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2), sqrt(2));
m.newang = Math.atan2(m.newx, m.newy);
m.newzoom = pow((0.995+(0.05*Math.sin((m.q4*m.newang)))), pow(Math.sin((m.newrad*m.newrad)), m.newrad));
m.dx = ((m.newx*m.newzoom)-m.newx);
m.dy = ((m.newy*m.newzoom)-m.newy);
m.newx = (m.x-m.q2);
m.newy = (m.y-m.q7);
m.newrad = Math.min((sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2), sqrt(2));
m.newang = Math.atan2(m.newx, m.newy);
m.newzoom = pow((0.995+(0.05*Math.sin((m.q5*m.newang)))), pow(Math.sin((m.newrad*m.newrad)), m.newrad));
m.dx = ((m.dx+(m.newx*m.newzoom))-m.newx);
m.dy = ((m.dy+(m.newy*m.newzoom))-m.newy);
m.newx = (m.x-(0.33*((m.q1+m.q2)+m.q6)));
m.newy = (m.y-(0.33*(((3-m.q2)-m.q6)-m.q7)));
m.newrad = Math.min((sqrt(((m.newx*m.newx)+((0.5625*m.newy)*m.newy)))*2), sqrt(2));
m.newang = Math.atan2(m.newx, m.newy);
m.newzoom = pow((1.04+(0.05*Math.sin(((0.5*(m.q4+m.q5))*m.newang)))), pow(Math.sin((m.newrad*m.newrad)), m.newrad));
m.dx = ((m.dx+(m.newx*m.newzoom))-m.newx);
m.dy = ((m.dy+(m.newy*m.newzoom))-m.newy);
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('warp =0;\n' + 'q8 = oldq8 +0.003*(((pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,6)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,5)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,4)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,3)/fps) + (pow(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att,2)/fps) +(1.2*bass+0.4*bass_att+0.1*treb+0.1*treb_att+0.1*mid+0.1*mid_att)/fps)) + 1/(fps*5);\n' + 'oldq8 = q8;\n' + 'q1 = 0.5 + 0.15*sin(0.416*q8) + 0.15*sin(0.832*q8) + 0.1*sin(1.324*q8);\n' + 'q2 = 0.5 + 0.15*sin(0.341*q8) + 0.15*sin(0.768*q8) + 0.1*sin(1.523*q8);\n' + 'q6 = 0.5 + 0.15*sin(0.287*q8) + 0.15*sin(0.913*q8) + 0.1*sin(1.142*q8);\n' + 'q7 = 0.5 + 0.15*sin(0.531*q8) + 0.15*sin(0.671*q8) + 0.1*sin(1.442*q8);\n' + 'change = if(beat,rand(10)+3,oldchange);\n' + 'oldchange = change;\n' + 'change = 10;\n' + 'q4 = (change + 0.2*sin(q8*0.385) + 0.2*sin(q8*0.641) + 0.2*sin(q8*0.846));\n' + 'zz = if(beat,rand(13)+3,oldzz);\n' + 'oldzz =zz;\n' + 'zz = 6;\n' + 'q5 = (zz + 0.2*sin(q8*0.385) + 0.2*sin(q8*0.641) + 0.2*sin(q8*0.846));\n' + 'q3 = mode;\n' + 'wave_a =0;\n' + 'monitor = mode;\n' + 'decay =0.3;'),
	'pixel_eqs_str' : ('newx = x - q1;\n' + 'newy = y - q6;\n' + 'newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));\n' + 'newang = atan2(newx,newy);\n' + 'newzoom = pow(0.995 + 0.05*sin((q4)*(newang)), pow(sin(newrad*newrad), newrad));\n' + 'dx = (newx)*newzoom - newx;\n' + 'dy = (newy)*newzoom - newy;\n' + 'newx = x - q2;\n' + 'newy = y - q7;\n' + 'newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));\n' + 'newang = atan2(newx,newy);\n' + 'newzoom = pow(0.995 + 0.05*sin((q5)*(newang)), pow(sin(newrad*newrad), newrad));\n' + 'dx = dx + (newx)*newzoom - newx;\n' + 'dy = dy + (newy)*newzoom - newy;\n' + 'newx = x - (0.33*(q1+q2+q6));\n' + 'newy = y - (0.33*(3-q2-q6-q7));\n' + 'newrad = min(sqrt((newx)*(newx)+0.5625*(newy)*(newy))*2,sqrt(2));\n' + 'newang = atan2(newx,newy);\n' + 'newzoom = pow(1.04 + 0.05*sin(0.5*(q4+q5)*(newang)), pow(sin(newrad*newrad), newrad));\n' + 'dx = dx + (newx)*newzoom - newx;\n' + 'dy = dy + (newy)*newzoom - newy;'),
};

return pmap;
});