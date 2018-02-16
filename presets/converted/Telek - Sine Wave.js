define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.0,
		wave_g : 0.65,
		ib_g : 0.25,
		mv_x : 33.152,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 28.799997,
		wave_scale : 0.430333,
		echo_alpha : 0.0,
		additivewave : 1.0,
		sx : 1.0,
		ob_r : 0.0,
		sy : 1.0,
		ib_size : 0.26,
		warp : 0.001,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 1.0,
		zoomexp : 1.0,
		mv_dx : 0.006,
		mv_dy : 0.0,
		mv_a : 0.4,
		fshader : 0.0,
		wave_r : 0.65,
		ib_r : 0.25,
		mv_b : 0.0,
		echo_zoom : 1.0,
		ob_size : 0.005,
		wave_smoothing : 0.63,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 1.0,
		wave_x : 0.97,
		wave_y : 0.5,
		zoom : 1.0,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 1.0,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 1.0,
		modwavealphaend : 1.3,
		wave_mystery : 1.0,
		decay : 0.98,
		wave_a : 4.099998,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.65,
		ib_b : 0.25,
		mv_r : 1.0,
		rating : 2.0,
		modwavealphastart : 0.71,
		darken : 0.0,
		echo_orient : 3.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.q3 = 0;
m.wang = 0;
m.amp = 0;
m.in = 0;
m.beat = 0;
m.trebcap = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.mv_g = (1-(m.bass_att*0.4));
m.beat = ifcond(above((m.bass*m.bass_att), 4.5), (1-m.beat), m.beat);
m.q1 = ((m.beat*2)-1);
m.amp = ((m.amp*0.8)+((0.2*((m.bass_att+m.mid_att)+m.treb_att))*0.3));
m.q2 = Math.min(m.amp, 1);
m.trebcap = ((m.trebcap*0.7)+(0.16*m.treb));
m.q3 = (m.trebcap*2);
m.monitor = m.q3;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.wang = ((((3+m.q3)*m.x)+(m.time*1.7))+(m.bass*0.1));
m.in = 0;
m.in = (m.in+(below(Math.abs((m.x-0.25)), 0.05)*below(Math.abs((m.y-0.5)), 0.25)));
m.in = below(Math.abs((m.y-(0.5+((0.5*Math.sin(m.wang))*m.q2)))), 0.1);
m.in = bnot(bnot(m.in));
m.dx = (0.02*m.in);
m.dy = (((0.08*Math.cos(m.wang))*m.q2)*m.in);
m.dx = (m.dx+((bnot(m.in)*0.005)*m.q1));
m.dy = (m.dy+(((bnot(m.in)*Math.cos(m.wang))*-0.01)*m.q1));
		return m;
	},
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('mv_g=1-bass_att*.4;\n' + 'beat=if(above(bass*bass_att,4.5),1-beat,beat);\n' + 'q1=beat*2-1;\n' + 'amp =amp*.8+.2*(bass_att+mid_att+treb_att)*.3;\n' + 'q2 = min(amp,1);\n' + 'trebcap=trebcap*.7+.16*treb;\n' + 'q3=trebcap*2;\n' + 'monitor = q3;'),
	'pixel_eqs_str' : ('wang = (3+q3)*x+time*1.7+bass*.1;\n' + 'in = 0;\n' + 'in = in + below(abs(x-.25),.05)*below(abs(y-.5),.25);\n' + 'in = below(abs(y-(.5+.5*sin(wang)*q2)),.1);\n' + 'in=bnot(bnot(in));\n' + 'dx = .02*in;\n' + 'dy = .08*cos(wang)*q2*in;\n' + 'dx = dx+bnot(in)*.005*q1;\n' + 'dy = dy+bnot(in)*cos(wang)*-.01*q1;'),
};

return pmap;
});