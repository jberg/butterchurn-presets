define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.5,
		ib_g : 0.3,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 0.0,
		mv_y : 9.0,
		wave_scale : 1.001775,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 0.9998,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 0.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.8802,
		mv_dx : 0.59891,
		mv_dy : 0.978744,
		mv_a : 0.0,
		fshader : 1.0,
		wave_r : 0.5,
		ib_r : 0.0,
		mv_b : 0.461879,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.9,
		warpanimspeed : 1.0,
		wave_dots : 0.0,
		mv_g : 0.490016,
		wave_x : 0.5,
		wave_y : 0.5,
		zoom : 0.9998,
		solarize : 0.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 0.0,
		cy : 0.5,
		ob_b : 0.0,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.96,
		wave_a : 0.001,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.296168,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.q1 = 0;
m.q2 = 0;
m.wx = 0;
m.q3 = 0;
m.wy = 0;
m.dbass = 0;
m.q4 = 0;
m.q5 = 0;
m.interval = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.rotval = 0;
m.myrot = 0;
m.force = 0;
m.am = 0;
m.lastbeat = 0;
m.pbass = 0;
m.lockinterval = 0;
m.avgbass = 0;
m.fx = 0;
m.pdbass = 0;
m.sure = 0;
m.beat = 0;
m.avginterval = 0;
m.phase = 0;
m.bpm = 0;
m.maxdbass = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.sure = ifcond(equal(m.sure, 0), 0.75, m.sure);
m.interval = ifcond(equal(m.interval, 0), (0.7*m.fps), m.interval);
m.avginterval = ifcond(equal(m.avginterval, 0), (0.7*m.fps), m.avginterval);
m.lockinterval = ifcond(equal(m.lockinterval, 0), (0.7*m.fps), m.lockinterval);
m.lastbeat = ifcond(equal(m.lastbeat, 0), (m.frame-m.fps), m.lastbeat);
m.dbass = ((m.bass-m.pbass)*m.fps);
m.beat = (((below(m.dbass, 0)*above(m.pdbass, 0))*above(m.bass, (0.95*m.avgbass)))*above((m.frame-m.lastbeat), div(m.fps,3)));
m.sure = ifcond((m.beat*below(Math.abs((m.frame-(m.interval+m.lastbeat))), div(m.fps,5))), Math.min((0.095+m.sure), 1), ((m.beat*(m.sure-0.095))+(((1-m.beat)*m.sure)*0.9996)));
m.sure = Math.max(0.5, m.sure);
m.avgbass = ((0.995*m.avgbass)+(0.005*m.bass));
m.maxdbass = Math.max((m.maxdbass*0.999), m.dbass);
m.maxdbass = Math.min(200, m.maxdbass);
m.maxdbass = Math.max(0.02, m.maxdbass);
m.interval = ifcond((m.beat*below((m.frame-m.lastbeat), (1.8*m.interval))), (((m.frame-m.lastbeat)*0.25)+(0.75*m.interval)), m.interval);
m.lastbeat = ifcond((((1-m.force)*m.beat)+equal((m.lastbeat+m.interval), m.frame)), m.frame, m.lastbeat);
m.avginterval = ifcond(m.beat, ((0.9*m.avginterval)+(0.1*m.interval)), m.avginterval);
m.lockinterval = ifcond(m.beat, ((0.9*m.lockinterval)+(0.1*m.avginterval)), m.lockinterval);
m.pbass = m.bass;
m.pdbass = m.dbass;
m.bpm = (((60*m.fps)*0.3333)*((div((2*(1-m.sure)),m.interval)+div((2*m.sure),m.avginterval))+div(1,m.lockinterval)));
m.phase = Math.min(div((m.frame-m.lastbeat),(0.333*((((2*m.sure)*m.avginterval)+((2*(1-m.sure))*m.interval))+m.lockinterval))), 1);
m.beat = ifcond(equal(m.phase, 0), 1, m.beat);
m.interval = Math.min(m.interval, (0.7*m.fps));
m.avginterval = Math.min(m.avginterval, (0.7*m.fps));
m.lockinterval = Math.min(m.lockinterval, (0.7*m.fps));
m.warp = 0;
m.zoom = (1+(div(m.fps,85)*0.002));
m.q8 = m.beat;
m.q7 = m.phase;
m.q6 = m.bpm;
m.decay = (0.95+div((0.01*75),m.fps));
m.wx = (((1-m.beat)*m.wx)+(m.beat*(-5+div((10*rand(1000)),1000))));
m.wx = (((1-m.beat)*m.wx)+(m.beat*(m.wx+(4*sign(m.wx)))));
m.wy = (((1-m.beat)*m.wy)+(m.beat*(-10+div((20*rand(1000)),1000))));
m.fx = (((1-m.beat)*m.fx)+(m.beat*(-1+rand(5))));
m.am = (((1-m.beat)*m.am)+(m.beat*div((1.5*rand(100)),100)));
m.am = (((1-m.beat)*m.am)+(m.beat*(((equal(m.fx, -1)*(0.5+m.am))*sign(-m.wx))+(above(m.fx, -1)*m.am))));
m.rotval = (((1-m.beat)*m.rotval)+((m.beat*div((0.02*m.q6),140))*(-1+div((2*rand(100)),100))));
m.myrot = (((1-m.beat)*(m.myrot+m.rotval))+(m.beat*0));
m.q1 = m.wx;
m.q2 = m.wy;
m.q3 = m.fx;
m.q4 = m.am;
m.q5 = m.myrot;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : "",
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999994,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.sc = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.x1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.abs(Math.cos((((m.time*3.243)+0.434)+Math.sin(((m.time*1.23)+4.324)))));
m.g = Math.abs(Math.cos((((m.time*2.03)+1.546)+Math.cos(((m.time*3.01)+1.98)))));
m.b = Math.abs(Math.sin((((m.time*2.54)+0.65)+Math.sin(((m.time*3.77)+8)))));
m.t8 = (-30+(40*m.q7));
m.v = (((1-m.q8)*m.v)+div(((m.q8*(-1+(2*mod(m.frame,2))))*m.q6),50));
m.t2 = Math.max(1, m.v);
m.sc = (((1-m.q8)*m.sc)+(m.q8*(20*((m.bass+m.mid)+m.treb))));
m.t3 = Math.min(m.sc, 100);
		return m;
	},
		'point_eqs' : function(m) {
m.x1 = (0.5*m.value1);
m.z1 = (m.t8+(2.5*(m.sample+0)));
m.y1 = ((below(m.q3, 3)*3)*Math.sin(((1.5708*m.z1)-(m.time*2))));
m.t1 = ((m.z1*m.q6)*0.0083);
m.t7 = Math.cos(m.t1);
m.t6 = Math.sin(m.t1);
m.t5 = Math.cos((100*m.t1));
m.t4 = Math.sin((100*m.t1));
m.x1 = (m.x1-((0.05*below(m.q3, 1))*Math.sin(((4.1887*m.y1)+m.time))));
m.x1 = (m.x1+(((equal(m.q3, -1)*sign(m.q3))*m.q4)*((m.y1*m.y1)*0.1111)));
m.x1 = (m.x1+(((equal(m.q3, 0)*2)*(m.q4+1))*m.t7));
m.y1 = (m.y1+(((equal(m.q3, 0)*(m.q4+1))*1.2)*m.t6));
m.x1 = (m.x1+((equal(m.q3, 2)*0.1)*(m.t5-m.t4)));
m.y1 = (m.y1+((equal(m.q3, 2)*0.12)*(m.t5+m.t4)));
m.x1 = (m.x1+(equal(m.q3, 1)*((m.x1-(0.5*m.value1))+(0.1*Math.cos((209.4367*m.y1))))));
m.x1 = (m.x1+((equal(m.q3, 3)*((m.q4*0.5)+m.value2))*Math.cos((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.y1 = (m.y1+((equal(m.q3, 3)*((m.q4*0.5)+m.value1))*Math.sin((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.ox = m.x1;
m.oy = m.y1;
m.x1 = (m.x1+(below(m.q3, 3)*((-m.x1+(m.ox*Math.cos(m.q5)))-(m.oy*Math.sin(m.q5)))));
m.y1 = (m.y1+(below(m.q3, 3)*((-m.y1+(m.ox*Math.sin(m.q5)))+(m.oy*Math.cos(m.q5)))));
m.x1 = (m.x1-m.q1);
m.y1 = (m.y1-m.q2);
m.x = (0.5*(1+div(m.x1,(m.z1-10))));
m.y = (0.5*(1+div(m.y1,(m.z1-10))));
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.025)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+0);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.025,2.5);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999994,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.sc = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.x1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.abs(Math.cos((((m.time*3.243)+0.434)+Math.sin(((m.time*1.23)+4.324)))));
m.g = Math.abs(Math.cos((((m.time*2.03)+1.546)+Math.cos(((m.time*3.01)+1.98)))));
m.b = Math.abs(Math.sin((((m.time*2.54)+0.65)+Math.sin(((m.time*3.77)+8)))));
m.t8 = (-30+(40*m.q7));
m.v = (((1-m.q8)*m.v)+div(((m.q8*(-1+(2*mod(m.frame,2))))*m.q6),50));
m.t2 = Math.max(1, m.v);
m.sc = (((1-m.q8)*m.sc)+(m.q8*(20*((m.bass+m.mid)+m.treb))));
m.t3 = Math.min(m.sc, 100);
		return m;
	},
		'point_eqs' : function(m) {
m.x1 = (0.5*m.value1);
m.z1 = (m.t8+(2.5*(m.sample+1)));
m.y1 = ((below(m.q3, 3)*3)*Math.sin(((1.5708*m.z1)-(m.time*2))));
m.t1 = ((m.z1*m.q6)*0.0083);
m.t7 = Math.cos(m.t1);
m.t6 = Math.sin(m.t1);
m.t5 = Math.cos((100*m.t1));
m.t4 = Math.sin((100*m.t1));
m.x1 = (m.x1-((0.05*below(m.q3, 1))*Math.sin(((4.1887*m.y1)+m.time))));
m.x1 = (m.x1+(((equal(m.q3, -1)*sign(m.q3))*m.q4)*((m.y1*m.y1)*0.1111)));
m.x1 = (m.x1+(((equal(m.q3, 0)*2)*(m.q4+1))*m.t7));
m.y1 = (m.y1+(((equal(m.q3, 0)*(m.q4+1))*1.2)*m.t6));
m.x1 = (m.x1+((equal(m.q3, 2)*0.1)*(m.t5-m.t4)));
m.y1 = (m.y1+((equal(m.q3, 2)*0.12)*(m.t5+m.t4)));
m.x1 = (m.x1+(equal(m.q3, 1)*((m.x1-(0.5*m.value1))+(0.1*Math.cos((209.4367*m.y1))))));
m.x1 = (m.x1+((equal(m.q3, 3)*((m.q4*0.5)+m.value2))*Math.cos((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.y1 = (m.y1+((equal(m.q3, 3)*((m.q4*0.5)+m.value1))*Math.sin((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.ox = m.x1;
m.oy = m.y1;
m.x1 = (m.x1+(below(m.q3, 3)*((-m.x1+(m.ox*Math.cos(m.q5)))-(m.oy*Math.sin(m.q5)))));
m.y1 = (m.y1+(below(m.q3, 3)*((-m.y1+(m.ox*Math.sin(m.q5)))+(m.oy*Math.cos(m.q5)))));
m.x1 = (m.x1-m.q1);
m.y1 = (m.y1-m.q2);
m.x = (0.5*(1+div(m.x1,(m.z1-10))));
m.y = (0.5*(1+div(m.y1,(m.z1-10))));
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.025)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+1);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.025,2.5);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999994,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.sc = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.x1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.abs(Math.cos((((m.time*3.243)+0.434)+Math.sin(((m.time*1.23)+4.324)))));
m.g = Math.abs(Math.cos((((m.time*2.03)+1.546)+Math.cos(((m.time*3.01)+1.98)))));
m.b = Math.abs(Math.sin((((m.time*2.54)+0.65)+Math.sin(((m.time*3.77)+8)))));
m.t8 = (-30+(40*m.q7));
m.v = (((1-m.q8)*m.v)+div(((m.q8*(-1+(2*mod(m.frame,2))))*m.q6),50));
m.t2 = Math.max(1, m.v);
m.sc = (((1-m.q8)*m.sc)+(m.q8*(20*((m.bass+m.mid)+m.treb))));
m.t3 = Math.min(m.sc, 100);
		return m;
	},
		'point_eqs' : function(m) {
m.x1 = (0.5*m.value1);
m.z1 = (m.t8+(2.5*(m.sample+2)));
m.y1 = ((below(m.q3, 3)*3)*Math.sin(((1.5708*m.z1)-(m.time*2))));
m.t1 = ((m.z1*m.q6)*0.0083);
m.t7 = Math.cos(m.t1);
m.t6 = Math.sin(m.t1);
m.t5 = Math.cos((100*m.t1));
m.t4 = Math.sin((100*m.t1));
m.x1 = (m.x1-((0.05*below(m.q3, 1))*Math.sin(((4.1887*m.y1)+m.time))));
m.x1 = (m.x1+(((equal(m.q3, -1)*sign(m.q3))*m.q4)*((m.y1*m.y1)*0.1111)));
m.x1 = (m.x1+(((equal(m.q3, 0)*2)*(m.q4+1))*m.t7));
m.y1 = (m.y1+(((equal(m.q3, 0)*(m.q4+1))*1.2)*m.t6));
m.x1 = (m.x1+((equal(m.q3, 2)*0.1)*(m.t5-m.t4)));
m.y1 = (m.y1+((equal(m.q3, 2)*0.12)*(m.t5+m.t4)));
m.x1 = (m.x1+(equal(m.q3, 1)*((m.x1-(0.5*m.value1))+(0.1*Math.cos((209.4367*m.y1))))));
m.x1 = (m.x1+((equal(m.q3, 3)*((m.q4*0.5)+m.value2))*Math.cos((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.y1 = (m.y1+((equal(m.q3, 3)*((m.q4*0.5)+m.value1))*Math.sin((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.ox = m.x1;
m.oy = m.y1;
m.x1 = (m.x1+(below(m.q3, 3)*((-m.x1+(m.ox*Math.cos(m.q5)))-(m.oy*Math.sin(m.q5)))));
m.y1 = (m.y1+(below(m.q3, 3)*((-m.y1+(m.ox*Math.sin(m.q5)))+(m.oy*Math.cos(m.q5)))));
m.x1 = (m.x1-m.q1);
m.y1 = (m.y1-m.q2);
m.x = (0.5*(1+div(m.x1,(m.z1-10))));
m.y = (0.5*(1+div(m.y1,(m.z1-10))));
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.025)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+2);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.025,2.5);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999994,
			samples : 512.0,
			additive : 1.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 0.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.q1 = 0;
m.t4 = 0;
m.q2 = 0;
m.t5 = 0;
m.q3 = 0;
m.t6 = 0;
m.q4 = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.q6 = 0;
m.q7 = 0;
m.q8 = 0;
m.ox = 0;
m.oy = 0;
m.sc = 0;
m.v = 0;
m.z1 = 0;
m.y1 = 0;
m.x1 = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r = Math.abs(Math.cos((((m.time*3.243)+0.434)+Math.sin(((m.time*1.23)+4.324)))));
m.g = Math.abs(Math.cos((((m.time*2.03)+1.546)+Math.cos(((m.time*3.01)+1.98)))));
m.b = Math.abs(Math.sin((((m.time*2.54)+0.65)+Math.sin(((m.time*3.77)+8)))));
m.t8 = (-30+(40*m.q7));
m.v = (((1-m.q8)*m.v)+div(((m.q8*(-1+(2*mod(m.frame,2))))*m.q6),50));
m.t2 = Math.max(1, m.v);
m.sc = (((1-m.q8)*m.sc)+(m.q8*(20*((m.bass+m.mid)+m.treb))));
m.t3 = Math.min(m.sc, 100);
		return m;
	},
		'point_eqs' : function(m) {
m.x1 = (0.5*m.value1);
m.z1 = (m.t8+(2.5*(m.sample+3)));
m.y1 = ((below(m.q3, 3)*3)*Math.sin(((1.5708*m.z1)-(m.time*2))));
m.t1 = ((m.z1*m.q6)*0.0083);
m.t7 = Math.cos(m.t1);
m.t6 = Math.sin(m.t1);
m.t5 = Math.cos((100*m.t1));
m.t4 = Math.sin((100*m.t1));
m.x1 = (m.x1-((0.05*below(m.q3, 1))*Math.sin(((4.1887*m.y1)+m.time))));
m.x1 = (m.x1+(((equal(m.q3, -1)*sign(m.q3))*m.q4)*((m.y1*m.y1)*0.1111)));
m.x1 = (m.x1+(((equal(m.q3, 0)*2)*(m.q4+1))*m.t7));
m.y1 = (m.y1+(((equal(m.q3, 0)*(m.q4+1))*1.2)*m.t6));
m.x1 = (m.x1+((equal(m.q3, 2)*0.1)*(m.t5-m.t4)));
m.y1 = (m.y1+((equal(m.q3, 2)*0.12)*(m.t5+m.t4)));
m.x1 = (m.x1+(equal(m.q3, 1)*((m.x1-(0.5*m.value1))+(0.1*Math.cos((209.4367*m.y1))))));
m.x1 = (m.x1+((equal(m.q3, 3)*((m.q4*0.5)+m.value2))*Math.cos((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.y1 = (m.y1+((equal(m.q3, 3)*((m.q4*0.5)+m.value1))*Math.sin((m.t2*((6.2831*m.sample)+(m.time*75))))));
m.ox = m.x1;
m.oy = m.y1;
m.x1 = (m.x1+(below(m.q3, 3)*((-m.x1+(m.ox*Math.cos(m.q5)))-(m.oy*Math.sin(m.q5)))));
m.y1 = (m.y1+(below(m.q3, 3)*((-m.y1+(m.ox*Math.sin(m.q5)))+(m.oy*Math.cos(m.q5)))));
m.x1 = (m.x1-m.q1);
m.y1 = (m.y1-m.q2);
m.x = (0.5*(1+div(m.x1,(m.z1-10))));
m.y = (0.5*(1+div(m.y1,(m.z1-10))));
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.025)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+3);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.025,2.5);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.05,
			a : 1.0,
			enabled : 1.0,
			b : 0.01,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.01,
			textured : 1.0,
			g2 : 0.05,
			tex_zoom : 0.7345,
			additive : 1.0,
			border_a : 1.0,
			border_b : 0.2,
			b2 : 0.05,
			a2 : 1.0,
			r : 0.01,
			border_g : 0.2,
			rad : 1.512626,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 4.0,
			border_r : 0.2,
			},
		'init_eqs' : function(m) {
m.r3 = 0;
m.g3 = 0;
m.coef = 0;
m.b3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.r3 = (1-Math.abs(Math.cos((((m.time*3.243)+0.434)+Math.sin(((m.time*1.23)+4.324))))));
m.g3 = (1-Math.abs(Math.cos((((m.time*2.03)+1.546)+Math.cos(((m.time*3.01)+1.98))))));
m.b3 = (1-Math.abs(Math.sin((((m.time*2.54)+0.65)+Math.sin(((m.time*3.77)+8))))));
m.coef = (0.1+(0.05*div(75,m.fps)));
m.r = (m.coef*m.b3);
m.g = (m.coef*m.r3);
m.b = (m.coef*m.g3);
m.r2 = (0.05*m.g);
m.g2 = (0.05*m.b);
m.b2 = (0.05*m.r);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r3=1-abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g3=1-abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b3=1-abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 'coef=.1+.05*(75/FPS);\n' + 'r=coef*b3;\n' + 'g=coef*r3;\n' + 'b=coef*g3;\n' + 'r2=.05*g;\n' + 'g2=.05*b;\n' + 'b2=.05*r;'),

		},
		{
		'baseVals' : {
			r2 : 0.21,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.21,
			tex_zoom : 0.999995,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.21,
			a2 : 1.0,
			r : 0.0,
			border_g : 0.0,
			rad : 0.808122,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rr = 0;
m.xx = 0;
m.yy = 0;
m.sw = 0;
m.var = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.sw = mod(m.frame,2);
m.xx = 0.5;
m.yy = ((m.sw*0.325)+((1-m.sw)*0.8));
m.rr = ((m.sw*1)+((1-m.sw)*0.5));
m.var = ((m.sw*m.mid)+((1-m.sw)*m.treb));
m.r = 0;
m.g = m.r;
m.b = m.r;
m.r2 = (0.15+(0.03*m.var));
m.g2 = m.r2;
m.b2 = m.r2;
m.r = ((m.sw*m.r)+((1-m.sw)*(m.r+0.1)));
m.g = ((m.sw*m.g)+((1-m.sw)*(m.g+0.1)));
m.b = ((m.sw*m.b)+((1-m.sw)*(m.b+0.1)));
m.r2 = ((m.sw*m.r2)+((1-m.sw)*(m.r2+0.1)));
m.g2 = ((m.sw*m.g2)+((1-m.sw)*(m.g2+0.1)));
m.b2 = ((m.sw*m.b2)+((1-m.sw)*(m.b2+0.1)));
m.rad = ((0.6667*m.rr)*(0.8+(0.04*m.var)));
m.a = 0.6;
m.a2 = m.a;
m.border_a = m.a;
m.x = m.xx;
m.y = m.yy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('sw=frame%2;\n' + 'xx=.5;\n' + 'yy=sw*.325+(1-sw)*.8;\n' + 'rr=sw*1+(1-sw)*.5;\n' + 'var=sw*mid+(1-sw)*treb;\n' + 'r=0;\n' + 'g=r;\n' + 'b=r;\n' + 'r2=.15+.03*var;\n' + 'g2=r2;\n' + 'b2=r2;\n' + 'r=sw*r+(1-sw)*(r+.1);\n' + 'g=sw*g+(1-sw)*(g+.1);\n' + 'b=sw*b+(1-sw)*(b+.1);\n' + 'r2=sw*r2+(1-sw)*(r2+.1);\n' + 'g2=sw*g2+(1-sw)*(g2+.1);\n' + 'b2=sw*b2+(1-sw)*(b2+.1);\n' + 'rad=.6667*rr*(.8+.04*var);\n' + 'a=.6;\n' + 'a2=a;\n' + 'border_a=a;\n' + 'x=xx;\n' + 'y=yy;'),

		},
		{
		'baseVals' : {
			r2 : 0.05,
			a : 1.0,
			enabled : 1.0,
			b : 0.13,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.13,
			textured : 0.0,
			g2 : 0.05,
			tex_zoom : 1.0,
			additive : 0.0,
			border_a : 1.0,
			border_b : 0.0,
			b2 : 0.05,
			a2 : 1.0,
			r : 0.13,
			border_g : 0.0,
			rad : 0.221666,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rr = 0;
m.xx = 0;
m.yy = 0;
m.sw = 0;
m.var = 0;
m.ssw = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ssw = below(mod(m.frame,4), 2);
m.sw = mod(m.frame,2);
m.xx = 0.5;
m.yy = ((m.sw*0.325)+((1-m.sw)*0.8));
m.rr = ((m.sw*1)+((1-m.sw)*0.75));
m.var = ((m.ssw*m.bass)+((1-m.ssw)*m.treb));
m.rad = ((0.6667*m.rr)*(0.2+(0.02*m.var)));
m.rad = ((m.sw*m.rad)+(((1-m.sw)*m.rad)*0.85));
m.r = (0.13+(0.02*m.var));
m.g = m.r;
m.b = m.r;
m.r = (((1-m.sw)*(m.r+0.2))+(m.sw*m.r));
m.g = (((1-m.sw)*(m.g+0.2))+(m.sw*m.g));
m.b = (((1-m.sw)*(m.b+0.2))+(m.sw*m.b));
m.a = 0.6;
m.a2 = m.a;
m.border_a = m.a;
m.x = m.xx;
m.y = m.yy;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ssw=below(frame%4,2);\n' + 'sw=frame%2;\n' + 'xx=.5;\n' + 'yy=sw*.325+(1-sw)*.8;\n' + 'rr=sw*1+(1-sw)*.75;\n' + 'var=ssw*bass+(1-ssw)*treb;\n' + 'rad=.6667*rr*(.2+.02*var);\n' + 'rad=sw*rad+(1-sw)*rad*.85;\n' + 'r=.13+.02*var;\n' + 'g=r;\n' + 'b=r;\n' + 'r=(1-sw)*(r+.2)+sw*r;\n' + 'g=(1-sw)*(g+.2)+sw*g;\n' + 'b=(1-sw)*(b+.2)+sw*b;\n' + 'a=.6;\n' + 'a2=a;\n' + 'border_a=a;\n' + 'x=xx;\n' + 'y=yy;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.23,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.23,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 0.23,
			border_g : 0.0,
			rad : 0.166107,
			x : 0.52,
			y : 0.53,
			ang : 0.0,
			sides : 100.0,
			border_r : 0.0,
			},
		'init_eqs' : function(m) {
m.rr = 0;
m.xx = 0;
m.yy = 0;
m.sw = 0;
m.var = 0;
m.ssw = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ssw = below(mod(m.frame,4), 2);
m.sw = mod(m.frame,2);
m.xx = 0.5;
m.yy = ((m.ssw*0.325)+((1-m.ssw)*0.8));
m.rr = ((m.ssw*1)+((1-m.ssw)*0.5));
m.var = ((m.ssw*m.bass)+((1-m.ssw)*m.treb));
m.x = ((m.sw*(m.xx+(m.rr*(0.02+(0.005*m.var)))))+((1-m.sw)*(m.xx-(m.rr*(0.1-(0.01*m.var))))));
m.y = ((m.sw*(m.yy+(m.rr*(0.03+(0.005*m.var)))))+((1-m.sw)*(m.yy-(m.rr*(0.2-(0.01*m.var))))));
m.rad = (m.rr*((m.sw*0.16)+((1-m.sw)*0.5)));
m.rad = ((m.rad*m.ssw)+(((1-m.ssw)*m.rad)*0.6));
m.r = ((m.sw*0.23)+((1-m.sw)*0.15));
m.g = m.r;
m.b = m.r;
m.x = (((m.x-m.xx)*0.667)+m.xx);
m.y = (((m.y-m.yy)*0.667)+m.yy);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ssw=below(frame%4,2);\n' + 'sw=frame%2;\n' + 'xx=.5;\n' + 'yy=ssw*.325+(1-ssw)*.8;\n' + 'rr=ssw*1+(1-ssw)*.5;\n' + 'var=ssw*bass+(1-ssw)*treb;\n' + 'x=sw*(xx+rr*(.02+.005*var))+(1-sw)*(xx-rr*(.1-.01*var));\n' + 'y=sw*(yy+rr*(.03+.005*var))+(1-sw)*(yy-rr*(.2-.01*var));\n' + 'rad=rr*(sw*.16+(1-sw)*.5);\n' + 'rad=rad*ssw+(1-ssw)*rad*.6;\n' + 'r=sw*.23+(1-sw)*.15;\n' + 'g=r;\n' + 'b=r;\n' + 'x=(x-xx)*.667+xx;\n' + 'y=(y-yy)*.667+yy;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('sure=if(equal(sure,0),.75,sure);\n' + 'interval=if(equal(interval,0),.7*FPS,interval);\n' + 'avginterval=if(equal(avginterval,0),.7*FPS,avginterval);\n' + 'lockinterval=if(equal(lockinterval,0),.7*FPS,lockinterval );\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)*FPS;\n' + 'beat=below(dbass,0)*above(pdbass,0)*above(bass,.95*avgbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'avgbass=.995*avgbass+.005*bass;\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=min(200,maxdbass);\n' + 'maxdbass=max(.02,maxdbass);\n' + 'interval=if(beat*below(frame-lastbeat,1.8*interval), ((frame-lastbeat)*.25+.75*interval),interval);\n' + 'lastbeat=if((1-force)*beat+equal(lastbeat+interval,frame),frame,lastbeat);\n' + 'avginterval=if(beat,.9*avginterval+.1*interval, avginterval);\n' + 'lockinterval=if(beat,.9*lockinterval+.1*avginterval,lockinterval);\n' + 'pbass=bass;\n' + 'pdbass=dbass;\n' + 'bpm=60*FPS*.3333*( ((2*(1-sure))/interval)+((2*sure)/avginterval)+(1/lockinterval) );\n' + 'phase=min( (frame-lastbeat)/(.333*(2*sure*avginterval+2*(1-sure)*interval+lockinterval)), 1 );\n' + 'beat=if(equal(phase,0),1,beat);\n' + 'interval=min(interval,.7*FPS);\n' + 'avginterval=min(avginterval,.7*FPS);\n' + 'lockinterval=min(lockinterval,.7*FPS);\n' + 'warp=0;\n' + 'zoom=1+(FPS/85)*.002;\n' + 'q8=beat;\n' + 'q7=phase;\n' + 'q6=bpm;\n' + 'decay=.95+.01*75/FPS;\n' + 'wx=(1-beat)*wx+beat*(-5+10*rand(1000)/1000);\n' + 'wx=(1-beat)*wx+beat*(wx+4*sign(wx));\n' + 'wy=(1-beat)*wy+beat*(-10+20*rand(1000)/1000);\n' + 'fx=(1-beat)*fx+beat*(-1+rand(5));\n' + 'am=(1-beat)*am+beat*(1.5*rand(100)/100);\n' + 'am=(1-beat)*am+beat*(equal(fx,-1)*(.5+am)*sign(-wx)+above(fx,-1)*am);\n' + 'rotval=(1-beat)*rotval+beat*(.02*q6/140)*(-1+2*rand(100)/100);\n' + 'myrot=(1-beat)*(myrot+rotval)+beat*0;\n' + 'q1=wx;\n' + 'q2=wy;\n' + 'q3=fx;\n' + 'q4=am;\n' + 'q5=myrot;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});