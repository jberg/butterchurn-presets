define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.700001,
		wave_g : 0.5,
		ib_g : 0.3,
		mv_x : 12.0,
		warpscale : 1.0,
		brighten : 1.0,
		mv_y : 9.0,
		wave_scale : 1.001775,
		echo_alpha : 0.5,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.8,
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
		solarize : 1.0,
		modwavealphabyvolume : 0.0,
		dx : 0.0,
		cx : 0.5,
		dy : 0.0,
		ob_a : 0.0,
		darken_center : 1.0,
		cy : 0.5,
		ob_b : 0.8,
		mv_l : 0.5,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.955,
		wave_a : 0.001,
		ob_g : 0.8,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 0.296168,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 1.0,
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
m.zoom = (1-(div(m.fps,85)*0.002));
m.q8 = m.beat;
m.q7 = (1-(2*m.phase));
m.q7 = ifcond(below(m.q7, -1), 1, m.q7);
m.q6 = m.bpm;
m.decay = (0.955+div((0.005*40),m.fps));
m.wx = (((1-m.beat)*m.wx)+(m.beat*(-5+div((10*rand(1000)),1000))));
m.wx = (((1-m.beat)*m.wx)+(m.beat*(m.wx+(3*sign(m.wx)))));
m.wy = (((1-m.beat)*m.wy)+(m.beat*(-5+div((10*rand(1000)),1000))));
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
m.monitor = m.bpm;
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
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.0125)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+0);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.0125,2.5);'),

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
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.0125)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+1);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.0125,2.5);'),

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
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.0125)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+2);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.0125,2.5);'),

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
m.a = (below(m.z1, 9)*pow((1-(Math.abs((m.z1-9))*0.0125)), 2.5));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r=abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g=abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b=abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 't8= -30+40*q7;\n' + 'v=(1-q8)*v+q8*(-1+2*(frame%2))*q6/50;\n' + 't2=max(1,v);\n' + 'sc=(1-q8)*sc+q8*(20*(bass+mid+treb));\n' + 't3=min(sc,100);'),
		'point_eqs_str' : ('x1=.5*value1;\n' + 'z1=t8+2.5*(sample+3);\n' + 'y1=below(q3,3)*3*sin(1.5708*z1-time*2);\n' + 't1=z1*q6*.0083;\n' + 't7=cos(t1);\n' + 't6=sin(t1);\n' + 't5=cos(100*t1);\n' + 't4=sin(100*t1);\n' + 'x1=x1-.05*below(q3,1)*sin(4.1887*y1+time);\n' + 'x1=x1+equal(q3,-1)*sign(q3)*q4*(y1*y1*.1111);\n' + 'x1=x1+equal(q3,0)*2*(q4+1)*t7;\n' + 'y1=y1+equal(q3,0)*(q4+1)*1.2*t6;\n' + 'x1= x1+equal(q3,2)*.1*(t5-t4);\n' + 'y1= y1+equal(q3,2)*.12*(t5+t4);\n' + 'x1=x1+equal(q3,1)*(x1-.5*value1+.1*cos(209.4367*y1));\n' + 'x1=x1+equal(q3,3)*(q4*.5+value2)*cos(t2*(6.2831*sample+time*75));\n' + 'y1=y1+equal(q3,3)*(q4*.5+value1)*sin(t2*(6.2831*sample+time*75));\n' + 'ox=x1;\n' + 'oy=y1;\n' + 'x1=x1+below(q3,3)*(-x1+ox*cos(q5)-oy*sin(q5));\n' + 'y1=y1+below(q3,3)*(-y1+ox*sin(q5)+oy*cos(q5));\n' + 'x1=x1-q1;\n' + 'y1=y1-q2;\n' + 'x=.5*(1+x1/(z1-10));\n' + 'y=.5*(1+y1/(z1-10));\n' + 'a=below(z1,9)*pow(1-abs(z1-9)*.0125,2.5);'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 0.1,
			a : 1.0,
			enabled : 1.0,
			b : 0.01,
			tex_ang : 0.0,
			thickoutline : 0.0,
			g : 0.01,
			textured : 1.0,
			g2 : 0.1,
			tex_zoom : 0.601952,
			additive : 1.0,
			border_a : 0.0,
			border_b : 0.2,
			b2 : 0.1,
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
m.coef = (0.1+(0.05*div(45,m.fps)));
m.r = (m.coef*m.b3);
m.g = (m.coef*m.r3);
m.b = (m.coef*m.g3);
m.r2 = (0.33*m.g);
m.g2 = (0.33*m.b);
m.b2 = (0.33*m.r);
m.ang = (mod(m.frame,12)*0.5236);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('r3=1-abs(cos(time*3.243+.434+sin(time*1.23+4.324)));\n' + 'g3=1-abs(cos(time*2.03+1.546+cos(time*3.01+1.98)));\n' + 'b3=1-abs(sin(time*2.54+.65+sin(time*3.77+8)));\n' + 'coef=.1+.05*(45/FPS);\n' + 'r=coef*b3;\n' + 'g=coef*r3;\n' + 'b=coef*g3;\n' + 'r2=.33*g;\n' + 'g2=.33*b;\n' + 'b2=.33*r;\n' + 'ang=(frame%12)*.5236;'),

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
			},
		'init_eqs' : function(m) {
m.be = 0;
m.ssw = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ssw = m.be;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ssw=be;'),

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
			},
		'init_eqs' : function(m) {
m.be = 0;
m.ssw = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.ssw = m.be;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('ssw=be;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('sure=if(equal(sure,0),.75,sure);\n' + 'interval=if(equal(interval,0),.7*FPS,interval);\n' + 'avginterval=if(equal(avginterval,0),.7*FPS,avginterval);\n' + 'lockinterval=if(equal(lockinterval,0),.7*FPS,lockinterval );\n' + 'lastbeat=if(equal(lastbeat,0),frame-FPS,lastbeat);\n' + 'dbass=(bass-pbass)*FPS;\n' + 'beat=below(dbass,0)*above(pdbass,0)*above(bass,.95*avgbass)*above(frame-lastbeat,FPS/3);\n' + 'sure=if(beat*below(abs(frame-(interval+lastbeat)),FPS/5),min(.095+sure,1),beat*(sure-.095)+(1-beat)*sure*.9996);\n' + 'sure=max(.5,sure);\n' + 'avgbass=.995*avgbass+.005*bass;\n' + 'maxdbass=max(maxdbass*.999,dbass);\n' + 'maxdbass=min(200,maxdbass);\n' + 'maxdbass=max(.02,maxdbass);\n' + 'interval=if(beat*below(frame-lastbeat,1.8*interval), ((frame-lastbeat)*.25+.75*interval),interval);\n' + 'lastbeat=if((1-force)*beat+equal(lastbeat+interval,frame),frame,lastbeat);\n' + 'avginterval=if(beat,.9*avginterval+.1*interval, avginterval);\n' + 'lockinterval=if(beat,.9*lockinterval+.1*avginterval,lockinterval);\n' + 'pbass=bass;\n' + 'pdbass=dbass;\n' + 'bpm=60*FPS*.3333*( ((2*(1-sure))/interval)+((2*sure)/avginterval)+(1/lockinterval) );\n' + 'phase=min( (frame-lastbeat)/(.333*(2*sure*avginterval+2*(1-sure)*interval+lockinterval)), 1 );\n' + 'beat=if(equal(phase,0),1,beat);\n' + 'interval=min(interval,.7*FPS);\n' + 'avginterval=min(avginterval,.7*FPS);\n' + 'lockinterval=min(lockinterval,.7*FPS);\n' + 'warp=0;\n' + 'zoom=1-(FPS/85)*.002;\n' + 'q8=beat;\n' + 'q7=1-2*(phase);\n' + 'q7=if(below(q7,-1),1,q7);\n' + 'q6=bpm;\n' + 'decay=.955+.005*40/FPS;\n' + 'wx=(1-beat)*wx+beat*(-5+10*rand(1000)/1000);\n' + 'wx=(1-beat)*wx+beat*(wx+3*sign(wx));\n' + 'wy=(1-beat)*wy+beat*(-5+10*rand(1000)/1000);\n' + 'fx=(1-beat)*fx+beat*(-1+rand(5));\n' + 'am=(1-beat)*am+beat*(1.5*rand(100)/100);\n' + 'am=(1-beat)*am+beat*(equal(fx,-1)*(.5+am)*sign(-wx)+above(fx,-1)*am);\n' + 'rotval=(1-beat)*rotval+beat*(.02*q6/140)*(-1+2*rand(100)/100);\n' + 'myrot=(1-beat)*(myrot+rotval)+beat*0;\n' + 'q1=wx;\n' + 'q2=wy;\n' + 'q3=fx;\n' + 'q4=am;\n' + 'q5=myrot;\n' + 'monitor=bpm;'),
	'pixel_eqs_str' : (''),
};

return pmap;
});