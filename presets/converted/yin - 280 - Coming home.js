define([], function() {

"use strict;"

var pmap = {
	'baseVals' : {
		gammaadj : 1.35,
		wave_g : 0.45,
		ib_g : 0.3,
		mv_x : 0.0,
		warpscale : 0.01,
		brighten : 0.0,
		mv_y : 0.0,
		wave_scale : 2.452974,
		echo_alpha : 0.0,
		additivewave : 0.0,
		sx : 0.9999,
		ob_r : 0.0,
		sy : 0.9998,
		ib_size : 0.0,
		warp : 0.01,
		red_blue : 0.0,
		wave_mode : 6.0,
		wave_brighten : 0.0,
		wrap : 0.0,
		zoomexp : 0.8802,
		mv_dx : 0.0,
		mv_dy : 0.0,
		mv_a : 0.0,
		fshader : 0.8,
		wave_r : 1.0,
		ib_r : 0.0,
		mv_b : 1.0,
		echo_zoom : 1.0,
		ob_size : 0.0,
		wave_smoothing : 0.0,
		warpanimspeed : 0.01,
		wave_dots : 0.0,
		mv_g : 0.0,
		wave_x : 0.63,
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
		mv_l : 0.05,
		invert : 0.0,
		rot : 0.0,
		wave_thick : 0.0,
		modwavealphaend : 1.0,
		wave_mystery : 0.0,
		decay : 0.9,
		wave_a : 0.002815,
		ob_g : 0.0,
		ib_a : 0.0,
		wave_b : 0.5,
		ib_b : 0.0,
		mv_r : 1.0,
		rating : 0.0,
		modwavealphastart : 0.5,
		darken : 0.0,
		echo_orient : 0.0,
	},
	'init_eqs' : function(m) {
m.c = 0;
m.q4 = 0;
m.q5 = 0;
m.q6 = 0;
m.q7 = 0;
m.cont_vol = 0;
m.q8 = 0;
m.cont_treb = 0;
m.sunx = 0;
m.cont_bass = 0;
m.max_cont_treb = 0;
m.max_cont_bass = 0;
m.s = 0;
m.max_cont_mid = 0;
m.cont_mid = 0;

		return m;
	},
	'frame_eqs' : function(m) {
m.cont_bass = ((m.cont_bass*0.93)+(m.bass_att*0.07));
m.cont_mid = ((m.cont_mid*0.93)+(m.mid_att*0.07));
m.cont_treb = ((m.cont_treb*0.93)+(m.treb_att*0.07));
m.cont_vol = ((0.993*m.cont_vol)+(0.0023*((m.bass+m.mid)+m.treb)));
m.max_cont_bass = Math.max(m.cont_bass, (m.max_cont_bass*0.9999));
m.max_cont_mid = Math.max(m.cont_mid, m.max_cont_mid);
m.max_cont_treb = Math.max(m.cont_treb, m.max_cont_treb);
m.q4 = m.cont_vol;
m.decay = Math.min(1, (0.8+(0.05*pow(m.q4, 3))));
m.q5 = (-0.31415*Math.sin((((m.time*0.23)+0.423)+Math.cos(((m.time*0.21)+1.54)))));
m.c = Math.cos(m.q5);
m.s = Math.sin(m.q5);
m.q6 = ((0.5+((0.2-0.5)*m.s))+((0.05-0.5)*m.c));
m.q7 = ((0.5+((0.5-0.5)*m.s))+((0.1-0.5)*m.c));
m.q8 = ((0.5+((0.8-0.5)*m.s))+((0.05-0.5)*m.c));
m.sunx = ifcond(equal(m.sunx, 0), (0.25+div(rand(50),100)), m.sunx);
m.sunx = (m.sunx+((0.001*m.s)*m.q4));
m.sunx = ifcond(equal(m.sunx, 0), (sign(m.s)*0.001), m.sunx);
m.q5 = m.sunx;
		m.rkeys = [];
		return m;
	},
	'pixel_eqs' : function(m) {
m.warp = (below((sqr((m.x-m.q5))+sqr((m.y-0.05))), 0.01)*0.15);
		return m;
	},
	'waves' : [
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 0.999998,
			samples : 512.0,
			additive : 1.0,
			usedots : 1.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 0.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.c = 0;
m.q4 = 0;
m.q5 = 0;
m.t8 = 0;
m.viz = 0;
m.ox = 0;
m.oy = 0;
m.viz2 = 0;
m.fx = 0;
m.fy = 0;
m.ax = 0;
m.ay = 0;
m.az = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.t5 = (-0.31415*Math.sin((((m.time*0.23)+0.423)+Math.cos(((m.time*0.21)+1.54)))));
m.t1 = Math.cos(-m.t5);
m.t2 = Math.sin(-m.t5);
m.t3 = Math.cos(m.t5);
m.t4 = Math.sin(m.t5);
m.t8 = (2*((m.q4+(0.2*m.time))-Math.floor((m.q4+(0.2*m.time)))));
		return m;
	},
		'point_eqs' : function(m) {
m.ax = Math.cos((((100*m.sample)+43.35)+Math.sin(((231.54*m.sample)+0.543))));
m.ay = Math.sin((((431*m.sample)+2.34)+Math.cos(((443.54*m.sample)+4.23))));
m.az = (Math.sin((((546*m.sample)+74.24)+Math.sin(((524.54*m.sample)+23.987))))+m.t8);
m.az = ifcond(above(m.az, 1), (m.az-2), m.az);
m.c = div(1,(1-m.az));
m.fx = (0.5*(1+(m.ax*m.c)));
m.ox = ((-0.6366*m.t5)+m.fx);
m.oy = (0.5*(1+(m.ay*m.c)));
m.x = ((0.5+((m.ox-0.5)*m.t1))-((m.oy-0.5)*m.t2));
m.y = ((0.5+((m.ox-0.5)*m.t2))+((m.oy-0.5)*m.t1));
m.r = (1-div((0.5*rand(100)),100));
m.g = (1-div((0.5*rand(100)),100));
m.b = (1-div((0.5*rand(100)),100));
m.fx = (0.5+(0.9*m.t4));
m.fy = (0.5-(1.32*m.t3));
m.viz = above((sqr((m.x-m.fx))+sqr((m.y-m.fy))), 1.2);
m.fx = (((m.q5-0.5)*0.2)+0.5);
m.viz2 = above((sqr((m.x-m.fx))+sqr((m.y-0.5))), 0.002);
m.a = ((m.viz*m.viz2)*pow(div((m.az+1),2), 3));
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('t5=-.31415*sin(time*.23+.423+cos(time*.21+1.54));\n' + 't1=cos(-t5);\n' + 't2=sin(-t5);\n' + 't3=cos(t5);\n' + 't4=sin(t5);\n' + 't8=2*(q4+.2*time-int(q4+.2*time));'),
		'point_eqs_str' : ('ax=cos(100*sample+43.35+sin(231.54*sample+.543));\n' + 'ay=sin(431*sample+2.34+cos(443.54*sample+4.23));\n' + 'az=sin(546*sample+74.24+sin(524.54*sample+23.987))+ t8;\n' + 'az=if(above(az,1),az-2,az);\n' + 'c=1/(1-az);\n' + 'fx = .5*(1+ax*c);\n' + 'ox=-.6366*t5+fx;\n' + 'oy = .5*(1+ay*c);\n' + 'x=.5+(ox-.5)*t1-(oy-.5)*t2;\n' + 'y=.5+(ox-.5)*t2+(oy-.5)*t1;\n' + 'r=1-.5*rand(100)/100;\n' + 'g=1-.5*rand(100)/100;\n' + 'b=1-.5*rand(100)/100;\n' + 'fx=.5+.9*t4;\n' + 'fy=.5-1.32*t3;\n' + 'viz=above( sqr(x-fx)+sqr(y-fy), 1.2 );\n' + 'fx=(q5-.5)*.2+.5;\n' + 'viz2=above( sqr(x-fx)+sqr(y-.5), .002 );\n' + 'a=viz*viz2*pow((az+1)/2,3);'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 256.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.c = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.lastclip = 0;
m.ox = 0;
m.oy = 0;
m.sw0 = 0;
m.sw1 = 0;
m.c1 = 0;
m.sw2 = 0;
m.c2 = 0;
m.sw3 = 0;
m.c3 = 0;
m.sw4 = 0;
m.clip = 0;
m.c4 = 0;
m.sw5 = 0;
m.c5 = 0;
m.sw6 = 0;
m.c6 = 0;
m.s = 0;
m.angle = 0;
m.bass_vol = 0;
m.lastcip = 0;
m.phase = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.bass_vol = ((0.93*m.bass_vol)+(0.07*m.bass_att));
m.t4 = Math.min(m.bass_vol, 1.351);
m.clip = ifcond(above(m.bass_vol, 1.1), 1, 0);
m.phase = ((((m.clip*(1-m.lastcip))*m.frame)+((m.clip*m.lastclip)*m.phase))+(((1-m.clip)*m.lastclip)*0));
m.t4 = ifcond(m.clip, (m.t4*(0.97+div(rand(20),1000))), m.t4);
m.t3 = m.clip;
m.t2 = m.phase;
m.lastclip = m.clip;
m.t5 = (-0.31415*Math.sin((((m.time*0.23)+0.423)+Math.cos(((m.time*0.21)+1.54)))));
m.t6 = 0.0068;
m.t7 = 0.2;
m.t8 = 0.05;
		return m;
	},
		'point_eqs' : function(m) {
m.sw0 = below(m.sample, 0.1429);
m.sw1 = ((1-m.sw0)*below(m.sample, 0.2858));
m.sw2 = (((1-m.sw0)*(1-m.sw1))*below(m.sample, 0.4286));
m.sw3 = ((((1-m.sw0)*(1-m.sw1))*(1-m.sw2))*below(m.sample, 0.5718));
m.sw4 = (above(m.sample, 0.5717)*below(m.sample, 0.7143));
m.sw5 = (above(m.sample, 0.7142)*below(m.sample, 0.8571));
m.sw6 = above(m.sample, 0.8570);
m.a = ((((below(m.sample, 0.14)+above(m.sample, 0.15))*(below(m.sample, 0.56)+above(m.sample, 0.58)))*(below(m.sample, 0.71)+above(m.sample, 0.72)))*(below(m.sample, 0.85)+above(m.sample, 0.87)));
m.sample = ((((((((m.sw0*m.sample)+(m.sw1*(m.sample-0.1429)))+(m.sw2*(m.sample-0.2858)))+(m.sw3*(m.sample-0.4286)))+(m.sw4*(m.sample-0.5717)))+(m.sw5*(m.sample-0.7142)))+(m.sw6*(m.sample-0.8570)))*7);
m.x = ((m.sw0*11)*Math.cos(((((6.2831*m.sample)+4.7715)-((m.q5-0.5)*0.86))-m.t5)));
m.y = ((m.sw0*11)*Math.sin(((((6.2831*m.sample)+4.7715)-((m.q5-0.5)*0.86))-m.t5)));
m.x = (m.x+(m.sw1*(-1+(10*m.sample))));
m.y = (m.y+(m.sw1*(-1+m.sample)));
m.x = (m.x+(m.sw2*(9-(10*m.sample))));
m.y = (m.y+(m.sw2*m.sample));
m.x = (m.x-m.sw3);
m.y = (m.y+(m.sw3*(1-(2*m.sample))));
m.t1 = (0.5*Math.cos((6.2831*m.sample)));
m.t2 = (0.5*Math.sin((6.2831*m.sample)));
m.x = (m.x+(m.sw4*(-6.8+m.t1)));
m.y = (m.y+(m.sw4*(-5.8+m.t2)));
m.x = (m.x+(m.sw5*(8.5+m.t1)));
m.y = (m.y+(m.sw5*(-3.5+m.t2)));
m.angle = ((1.26-m.t4)*3.14);
m.t1 = Math.cos(m.angle);
m.t2 = Math.sin(m.angle);
m.ox = m.x;
m.oy = m.y;
m.x = ((((m.sw0+m.sw4)+m.sw5)*m.x)+(((m.sw1+m.sw2)+m.sw3)*((m.ox*m.t1)-(m.oy*m.t2))));
m.y = ((((m.sw0+m.sw4)+m.sw5)*m.y)+(((m.sw1+m.sw2)+m.sw3)*((m.ox*m.t2)+(m.oy*m.t1))));
m.x = (m.x+(m.sw6*(10*Math.cos(((1.5*(1-m.sample))*3.1415)))));
m.y = (m.y+(m.sw6*(10*Math.sin(((1.5*(1-m.sample))*3.1415)))));
m.x = ((m.x*m.t6)+m.t7);
m.y = ((m.y*m.t6)+m.t8);
m.ox = m.x;
m.oy = m.y;
m.c = Math.cos(m.t5);
m.s = Math.sin(m.t5);
m.x = ((0.5+((m.ox-0.5)*m.c))-((m.oy-0.5)*m.s));
m.y = ((0.5+((m.ox-0.5)*m.s))+((m.oy-0.5)*m.c));
m.t2 = ((0.5+((m.t7-0.5)*m.s))+((m.t8-0.5)*m.c));
m.y = (((m.y-m.t2)*1.38)+m.t2);
m.c1 = 1;
m.c2 = (below(m.sample, 0.6)+((above(m.sample, 0.6)*div((1-m.sample),0.4))*0.5));
m.c3 = div((((above(m.sample, 0.6)*below(m.sample, 0.8))*(m.sample-0.6))*0.25),0.2);
m.c4 = pow(m.sample, 4);
m.c5 = (0.15+(0.85*pow((1-div(Math.abs((m.sample-0.5)),0.5)), 3)));
m.c6 = Math.abs(Math.cos(div((6.2831*(m.frame-m.t2)),90)));
m.r = ((((((m.sw1+m.sw2)+m.sw3)*0.8)+((m.sw4+m.sw5)*0.5))+(m.sw0*m.c5))+(m.sw6*m.c1));
m.g = ((((((m.sw1+m.sw2)+m.sw3)*0.4)+((m.sw4+m.sw5)*0.5))+((m.sw0*m.c5)*(1+(m.t3*(m.c6-1)))))+(m.sw6*m.c2));
m.b = ((((((m.sw1+m.sw2)+m.sw3)*0.2)+((m.sw4+m.sw5)*0.5))+((m.sw0*m.c5)*(1+(m.t3*(m.c6-1)))))+(m.sw6*m.c3));
m.a = ((m.sw6*(m.c4-m.a))+m.a);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('bass_vol=.93*bass_vol+.07*bass_att;\n' + 't4=min(bass_vol,1.351);\n' + 'clip=if(above(bass_vol,1.1),1,0);\n' + 'phase=(clip)*(1-lastcip)*frame+clip*lastclip*phase+(1-clip)*lastclip*0;\n' + 't4=if(clip,t4*(.97+rand(20)/1000),t4);\n' + 't3=clip;\n' + 't2=phase;\n' + 'lastclip=clip;\n' + 't5=-.31415*sin(time*.23+.423+cos(time*.21+1.54));\n' + 't6=.0068;\n' + 't7=.2;\n' + 't8=.05;'),
		'point_eqs_str' : ('sw0=below(sample,.1429);\n' + 'sw1=(1-sw0)*below(sample,.2858);\n' + 'sw2=(1-sw0)*(1-sw1)*below(sample,.4286);\n' + 'sw3=(1-sw0)*(1-sw1)*(1-sw2)*below(sample,.5718);\n' + 'sw4=above(sample,.5717)*below(sample,.7143);\n' + 'sw5=above(sample,.7142)*below(sample,.8571);\n' + 'sw6=above(sample,.8570);\n' + 'a=(below(sample,.14)+above(sample,.15))*(below(sample,.56)+ above(sample,.58))*( below(sample,.71)+above(sample,.72) )*(below(sample,.85)+above(sample,.87));\n' + 'sample=(sw0*sample+sw1*(sample-.1429) + sw2*(sample-.2858)+sw3*(sample-.4286)+ sw4*(sample-.5717)+sw5*(sample-.7142)+sw6*(sample-.8570))*7;\n' + 'x=sw0*11*cos(6.2831*sample+4.7715-(q5-.5)*.86-t5);\n' + 'y=sw0*11*sin(6.2831*sample+4.7715-(q5-.5)*.86-t5);\n' + 'x=x+sw1*(-1+10*sample);\n' + 'y=y+sw1*(-1+sample);\n' + 'x=x+sw2*(9-10*sample);\n' + 'y=y+sw2*(sample);\n' + 'x=x-sw3;\n' + 'y=y+sw3*(1-2*sample);\n' + 't1=.5*cos(6.2831*sample);\n' + 't2=.5*sin(6.2831*sample);\n' + 'x=x+sw4*(-6.8+t1);\n' + 'y=y+sw4*(-5.8+t2);\n' + 'x=x+sw5*(8.5+t1);\n' + 'y=y+sw5*(-3.5+t2);\n' + 'angle=(1.26-t4)*3.14;\n' + 't1=cos(angle);\n' + 't2=sin(angle);\n' + 'ox=x;\n' + 'oy=y;\n' + 'x=(sw0+sw4+sw5)*x+(sw1+sw2+sw3)*(ox*t1-oy*t2);\n' + 'y=(sw0+sw4+sw5)*y+(sw1+sw2+sw3)*(ox*t2+oy*t1);\n' + 'x=x+sw6*(10*cos(1.5*(1-sample)*3.1415));\n' + 'y=y+sw6*(10*sin(1.5*(1-sample)*3.1415));\n' + 'x=x*t6 +t7;\n' + 'y=y*t6 +t8;\n' + 'ox=x;\n' + 'oy=y;\n' + 'c=cos(t5);\n' + 's=sin(t5);\n' + 'x=.5+(ox-.5)*c-(oy-.5)*s;\n' + 'y=.5+(ox-.5)*s+(oy-.5)*c;\n' + 't2=.5+(t7-.5)*s+(t8-.5)*c;\n' + 'y=(y-t2)*1.38+t2;\n' + 'c1=1;\n' + 'c2=below(sample,.6)+above(sample,.6)*((1-sample)/.4)*.5;\n' + 'c3=above(sample,.6)*below(sample,.8)*(sample-.6)*.25/.2;\n' + 'c4=pow(sample,4);\n' + 'c5=.15+.85*pow(1-abs(sample-.5)/.5,3);\n' + 'c6=abs(cos(6.2831*(frame-t2)/90));\n' + 'r=(sw1+sw2+sw3)*.8+(sw4+sw5)*.5+sw0*c5+sw6*c1;\n' + 'g=(sw1+sw2+sw3)*.4+(sw4+sw5)*.5+sw0*c5*(1+t3*(c6-1))+sw6*c2;\n' + 'b=(sw1+sw2+sw3)*.2+(sw4+sw5)*.5+sw0*c5*(1+t3*(c6-1))+sw6*c3;\n' + 'a=sw6*(c4-a)+a;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 256.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.c = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.lastclip = 0;
m.ox = 0;
m.oy = 0;
m.sw0 = 0;
m.sw1 = 0;
m.c1 = 0;
m.sw2 = 0;
m.c2 = 0;
m.sw3 = 0;
m.c3 = 0;
m.sw4 = 0;
m.clip = 0;
m.c4 = 0;
m.sw5 = 0;
m.c5 = 0;
m.sw6 = 0;
m.c6 = 0;
m.s = 0;
m.angle = 0;
m.lastcip = 0;
m.phase = 0;
m.mid_vol = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.mid_vol = ((0.93*m.mid_vol)+(0.07*m.mid_att));
m.t4 = Math.min(m.mid_vol, 1.351);
m.clip = ifcond(above(m.mid_vol, 1.1), 1, 0);
m.phase = ((((m.clip*(1-m.lastcip))*m.frame)+((m.clip*m.lastclip)*m.phase))+(((1-m.clip)*m.lastclip)*0));
m.t4 = ifcond(m.clip, (m.t4*(0.97+div(rand(20),1000))), m.t4);
m.t3 = m.clip;
m.t2 = m.phase;
m.lastclip = m.clip;
m.t5 = (-0.31415*Math.sin((((m.time*0.23)+0.423)+Math.cos(((m.time*0.21)+1.54)))));
m.t6 = 0.008;
m.t7 = 0.5;
m.t8 = 0.1;
		return m;
	},
		'point_eqs' : function(m) {
m.sw0 = below(m.sample, 0.1429);
m.sw1 = ((1-m.sw0)*below(m.sample, 0.2858));
m.sw2 = (((1-m.sw0)*(1-m.sw1))*below(m.sample, 0.4286));
m.sw3 = ((((1-m.sw0)*(1-m.sw1))*(1-m.sw2))*below(m.sample, 0.5718));
m.sw4 = (above(m.sample, 0.5717)*below(m.sample, 0.7143));
m.sw5 = (above(m.sample, 0.7142)*below(m.sample, 0.8571));
m.sw6 = above(m.sample, 0.8570);
m.a = ((((below(m.sample, 0.14)+above(m.sample, 0.15))*(below(m.sample, 0.56)+above(m.sample, 0.58)))*(below(m.sample, 0.71)+above(m.sample, 0.72)))*(below(m.sample, 0.85)+above(m.sample, 0.87)));
m.sample = ((((((((m.sw0*m.sample)+(m.sw1*(m.sample-0.1429)))+(m.sw2*(m.sample-0.2858)))+(m.sw3*(m.sample-0.4286)))+(m.sw4*(m.sample-0.5717)))+(m.sw5*(m.sample-0.7142)))+(m.sw6*(m.sample-0.8570)))*7);
m.x = ((m.sw0*11)*Math.cos(((((6.2831*m.sample)+4.7715)-((m.q5-0.5)*0.86))-m.t5)));
m.y = ((m.sw0*11)*Math.sin(((((6.2831*m.sample)+4.7715)-((m.q5-0.5)*0.86))-m.t5)));
m.x = (m.x+(m.sw1*(-1+(10*m.sample))));
m.y = (m.y+(m.sw1*(-1+m.sample)));
m.x = (m.x+(m.sw2*(9-(10*m.sample))));
m.y = (m.y+(m.sw2*m.sample));
m.x = (m.x-m.sw3);
m.y = (m.y+(m.sw3*(1-(2*m.sample))));
m.t1 = (0.5*Math.cos((6.2831*m.sample)));
m.t2 = (0.5*Math.sin((6.2831*m.sample)));
m.x = (m.x+(m.sw4*(-6.8+m.t1)));
m.y = (m.y+(m.sw4*(-5.8+m.t2)));
m.x = (m.x+(m.sw5*(8.5+m.t1)));
m.y = (m.y+(m.sw5*(-3.5+m.t2)));
m.angle = ((1.26-m.t4)*3.14);
m.t1 = Math.cos(m.angle);
m.t2 = Math.sin(m.angle);
m.ox = m.x;
m.oy = m.y;
m.x = ((((m.sw0+m.sw4)+m.sw5)*m.x)+(((m.sw1+m.sw2)+m.sw3)*((m.ox*m.t1)-(m.oy*m.t2))));
m.y = ((((m.sw0+m.sw4)+m.sw5)*m.y)+(((m.sw1+m.sw2)+m.sw3)*((m.ox*m.t2)+(m.oy*m.t1))));
m.x = (m.x+(m.sw6*(10*Math.cos(((1.5*(1-m.sample))*3.1415)))));
m.y = (m.y+(m.sw6*(10*Math.sin(((1.5*(1-m.sample))*3.1415)))));
m.x = ((m.x*m.t6)+m.t7);
m.y = ((m.y*m.t6)+m.t8);
m.ox = m.x;
m.oy = m.y;
m.c = Math.cos(m.t5);
m.s = Math.sin(m.t5);
m.x = ((0.5+((m.ox-0.5)*m.c))-((m.oy-0.5)*m.s));
m.y = ((0.5+((m.ox-0.5)*m.s))+((m.oy-0.5)*m.c));
m.t2 = ((0.5+((m.t7-0.5)*m.s))+((m.t8-0.5)*m.c));
m.y = (((m.y-m.t2)*1.38)+m.t2);
m.c1 = 1;
m.c2 = (below(m.sample, 0.6)+((above(m.sample, 0.6)*div((1-m.sample),0.4))*0.5));
m.c3 = div((((above(m.sample, 0.6)*below(m.sample, 0.8))*(m.sample-0.6))*0.25),0.2);
m.c4 = pow(m.sample, 4);
m.c5 = (0.15+(0.85*pow((1-div(Math.abs((m.sample-0.5)),0.5)), 3)));
m.c6 = Math.abs(Math.cos(div((6.2831*(m.frame-m.t2)),90)));
m.r = ((((((m.sw1+m.sw2)+m.sw3)*0.8)+((m.sw4+m.sw5)*0.5))+(m.sw0*m.c5))+(m.sw6*m.c1));
m.g = ((((((m.sw1+m.sw2)+m.sw3)*0.4)+((m.sw4+m.sw5)*0.5))+((m.sw0*m.c5)*(1+(m.t3*(m.c6-1)))))+(m.sw6*m.c2));
m.b = ((((((m.sw1+m.sw2)+m.sw3)*0.2)+((m.sw4+m.sw5)*0.5))+((m.sw0*m.c5)*(1+(m.t3*(m.c6-1)))))+(m.sw6*m.c3));
m.a = ((m.sw6*(m.c4-m.a))+m.a);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('mid_vol=.93*mid_vol+.07*mid_att;\n' + 't4=min(mid_vol,1.351);\n' + 'clip=if(above(mid_vol,1.1),1,0);\n' + 'phase=(clip)*(1-lastcip)*frame+clip*lastclip*phase+(1-clip)*lastclip*0;\n' + 't4=if(clip,t4*(.97+rand(20)/1000),t4);\n' + 't3=clip;\n' + 't2=phase;\n' + 'lastclip=clip;\n' + 't5=-.31415*sin(time*.23+.423+cos(time*.21+1.54));\n' + 't6=.008;\n' + 't7=.5;\n' + 't8=.1;'),
		'point_eqs_str' : ('sw0=below(sample,.1429);\n' + 'sw1=(1-sw0)*below(sample,.2858);\n' + 'sw2=(1-sw0)*(1-sw1)*below(sample,.4286);\n' + 'sw3=(1-sw0)*(1-sw1)*(1-sw2)*below(sample,.5718);\n' + 'sw4=above(sample,.5717)*below(sample,.7143);\n' + 'sw5=above(sample,.7142)*below(sample,.8571);\n' + 'sw6=above(sample,.8570);\n' + 'a=(below(sample,.14)+above(sample,.15))*(below(sample,.56)+ above(sample,.58))*( below(sample,.71)+above(sample,.72) )*(below(sample,.85)+above(sample,.87));\n' + 'sample=(sw0*sample+sw1*(sample-.1429) + sw2*(sample-.2858)+sw3*(sample-.4286)+ sw4*(sample-.5717)+sw5*(sample-.7142)+sw6*(sample-.8570))*7;\n' + 'x=sw0*11*cos(6.2831*sample+4.7715-(q5-.5)*.86-t5);\n' + 'y=sw0*11*sin(6.2831*sample+4.7715-(q5-.5)*.86-t5);\n' + 'x=x+sw1*(-1+10*sample);\n' + 'y=y+sw1*(-1+sample);\n' + 'x=x+sw2*(9-10*sample);\n' + 'y=y+sw2*(sample);\n' + 'x=x-sw3;\n' + 'y=y+sw3*(1-2*sample);\n' + 't1=.5*cos(6.2831*sample);\n' + 't2=.5*sin(6.2831*sample);\n' + 'x=x+sw4*(-6.8+t1);\n' + 'y=y+sw4*(-5.8+t2);\n' + 'x=x+sw5*(8.5+t1);\n' + 'y=y+sw5*(-3.5+t2);\n' + 'angle=(1.26-t4)*3.14;\n' + 't1=cos(angle);\n' + 't2=sin(angle);\n' + 'ox=x;\n' + 'oy=y;\n' + 'x=(sw0+sw4+sw5)*x+(sw1+sw2+sw3)*(ox*t1-oy*t2);\n' + 'y=(sw0+sw4+sw5)*y+(sw1+sw2+sw3)*(ox*t2+oy*t1);\n' + 'x=x+sw6*(10*cos(1.5*(1-sample)*3.1415));\n' + 'y=y+sw6*(10*sin(1.5*(1-sample)*3.1415));\n' + 'x=x*t6 +t7;\n' + 'y=y*t6 +t8;\n' + 'ox=x;\n' + 'oy=y;\n' + 'c=cos(t5);\n' + 's=sin(t5);\n' + 'x=.5+(ox-.5)*c-(oy-.5)*s;\n' + 'y=.5+(ox-.5)*s+(oy-.5)*c;\n' + 't2=.5+(t7-.5)*s+(t8-.5)*c;\n' + 'y=(y-t2)*1.38+t2;\n' + 'c1=1;\n' + 'c2=below(sample,.6)+above(sample,.6)*((1-sample)/.4)*.5;\n' + 'c3=above(sample,.6)*below(sample,.8)*(sample-.6)*.25/.2;\n' + 'c4=pow(sample,4);\n' + 'c5=.15+.85*pow(1-abs(sample-.5)/.5,3);\n' + 'c6=abs(cos(6.2831*(frame-t2)/90));\n' + 'r=(sw1+sw2+sw3)*.8+(sw4+sw5)*.5+sw0*c5+sw6*c1;\n' + 'g=(sw1+sw2+sw3)*.4+(sw4+sw5)*.5+sw0*c5*(1+t3*(c6-1))+sw6*c2;\n' + 'b=(sw1+sw2+sw3)*.2+(sw4+sw5)*.5+sw0*c5*(1+t3*(c6-1))+sw6*c3;\n' + 'a=sw6*(c4-a)+a;'),

		},
		{
		'baseVals' : {
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			g : 1.0,
			scaling : 1.0,
			samples : 256.0,
			additive : 0.0,
			usedots : 0.0,
			spectrum : 0.0,
			r : 1.0,
			smoothing : 1.0,
			thick : 1.0,
			sep : 0.0,
			},
		'init_eqs' : function(m) {
m.t4 = 0;
m.t5 = 0;
m.t6 = 0;
m.c = 0;
m.t7 = 0;
m.q5 = 0;
m.t8 = 0;
m.lastclip = 0;
m.ox = 0;
m.oy = 0;
m.sw0 = 0;
m.sw1 = 0;
m.c1 = 0;
m.sw2 = 0;
m.c2 = 0;
m.treb_vol = 0;
m.sw3 = 0;
m.c3 = 0;
m.sw4 = 0;
m.clip = 0;
m.c4 = 0;
m.sw5 = 0;
m.c5 = 0;
m.sw6 = 0;
m.c6 = 0;
m.s = 0;
m.angle = 0;
m.lastcip = 0;
m.phase = 0;
m.t1 = 0;
m.t2 = 0;
m.t3 = 0;

			m.rkeys = ['sample'];
			return m;
		},
		'frame_eqs' : function(m) {
m.treb_vol = ((0.93*m.treb_vol)+(0.07*m.treb_att));
m.t4 = Math.min(m.treb_vol, 1.351);
m.clip = ifcond(above(m.treb_vol, 1.1), 1, 0);
m.phase = ((((m.clip*(1-m.lastcip))*m.frame)+((m.clip*m.lastclip)*m.phase))+(((1-m.clip)*m.lastclip)*0));
m.t4 = ifcond(m.clip, (m.t4*(0.97+div(rand(20),1000))), m.t4);
m.t3 = m.clip;
m.t2 = m.phase;
m.lastclip = m.clip;
m.t5 = (-0.31415*Math.sin((((m.time*0.23)+0.423)+Math.cos(((m.time*0.21)+1.54)))));
m.t6 = 0.0068;
m.t7 = 0.8;
m.t8 = 0.05;
		return m;
	},
		'point_eqs' : function(m) {
m.sw0 = below(m.sample, 0.1429);
m.sw1 = ((1-m.sw0)*below(m.sample, 0.2858));
m.sw2 = (((1-m.sw0)*(1-m.sw1))*below(m.sample, 0.4286));
m.sw3 = ((((1-m.sw0)*(1-m.sw1))*(1-m.sw2))*below(m.sample, 0.5718));
m.sw4 = (above(m.sample, 0.5717)*below(m.sample, 0.7143));
m.sw5 = (above(m.sample, 0.7142)*below(m.sample, 0.8571));
m.sw6 = above(m.sample, 0.8570);
m.a = ((((below(m.sample, 0.14)+above(m.sample, 0.15))*(below(m.sample, 0.56)+above(m.sample, 0.58)))*(below(m.sample, 0.71)+above(m.sample, 0.72)))*(below(m.sample, 0.85)+above(m.sample, 0.87)));
m.sample = ((((((((m.sw0*m.sample)+(m.sw1*(m.sample-0.1429)))+(m.sw2*(m.sample-0.2858)))+(m.sw3*(m.sample-0.4286)))+(m.sw4*(m.sample-0.5717)))+(m.sw5*(m.sample-0.7142)))+(m.sw6*(m.sample-0.8570)))*7);
m.x = ((m.sw0*11)*Math.cos(((((6.2831*m.sample)+4.7715)-((m.q5-0.5)*0.86))-m.t5)));
m.y = ((m.sw0*11)*Math.sin(((((6.2831*m.sample)+4.7715)-((m.q5-0.5)*0.86))-m.t5)));
m.x = (m.x+(m.sw1*(-1+(10*m.sample))));
m.y = (m.y+(m.sw1*(-1+m.sample)));
m.x = (m.x+(m.sw2*(9-(10*m.sample))));
m.y = (m.y+(m.sw2*m.sample));
m.x = (m.x-m.sw3);
m.y = (m.y+(m.sw3*(1-(2*m.sample))));
m.t1 = (0.5*Math.cos((6.2831*m.sample)));
m.t2 = (0.5*Math.sin((6.2831*m.sample)));
m.x = (m.x+(m.sw4*(-6.8+m.t1)));
m.y = (m.y+(m.sw4*(-5.8+m.t2)));
m.x = (m.x+(m.sw5*(8.5+m.t1)));
m.y = (m.y+(m.sw5*(-3.5+m.t2)));
m.angle = ((1.26-m.t4)*3.14);
m.t1 = Math.cos(m.angle);
m.t2 = Math.sin(m.angle);
m.ox = m.x;
m.oy = m.y;
m.x = ((((m.sw0+m.sw4)+m.sw5)*m.x)+(((m.sw1+m.sw2)+m.sw3)*((m.ox*m.t1)-(m.oy*m.t2))));
m.y = ((((m.sw0+m.sw4)+m.sw5)*m.y)+(((m.sw1+m.sw2)+m.sw3)*((m.ox*m.t2)+(m.oy*m.t1))));
m.x = (m.x+(m.sw6*(10*Math.cos(((1.5*(1-m.sample))*3.1415)))));
m.y = (m.y+(m.sw6*(10*Math.sin(((1.5*(1-m.sample))*3.1415)))));
m.x = ((m.x*m.t6)+m.t7);
m.y = ((m.y*m.t6)+m.t8);
m.ox = m.x;
m.oy = m.y;
m.c = Math.cos(m.t5);
m.s = Math.sin(m.t5);
m.x = ((0.5+((m.ox-0.5)*m.c))-((m.oy-0.5)*m.s));
m.y = ((0.5+((m.ox-0.5)*m.s))+((m.oy-0.5)*m.c));
m.t2 = ((0.5+((m.t7-0.5)*m.s))+((m.t8-0.5)*m.c));
m.y = (((m.y-m.t2)*1.38)+m.t2);
m.c1 = 1;
m.c2 = (below(m.sample, 0.6)+((above(m.sample, 0.6)*div((1-m.sample),0.4))*0.5));
m.c3 = div((((above(m.sample, 0.6)*below(m.sample, 0.8))*(m.sample-0.6))*0.25),0.2);
m.c4 = pow(m.sample, 4);
m.c5 = (0.15+(0.85*pow((1-div(Math.abs((m.sample-0.5)),0.5)), 3)));
m.c6 = Math.abs(Math.cos(div((6.2831*(m.frame-m.t2)),90)));
m.r = ((((((m.sw1+m.sw2)+m.sw3)*0.8)+((m.sw4+m.sw5)*0.5))+(m.sw0*m.c5))+(m.sw6*m.c1));
m.g = ((((((m.sw1+m.sw2)+m.sw3)*0.4)+((m.sw4+m.sw5)*0.5))+((m.sw0*m.c5)*(1+(m.t3*(m.c6-1)))))+(m.sw6*m.c2));
m.b = ((((((m.sw1+m.sw2)+m.sw3)*0.2)+((m.sw4+m.sw5)*0.5))+((m.sw0*m.c5)*(1+(m.t3*(m.c6-1)))))+(m.sw6*m.c3));
m.a = ((m.sw6*(m.c4-m.a))+m.a);
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('treb_vol=.93*treb_vol+.07*treb_att;\n' + 't4=min(treb_vol,1.351);\n' + 'clip=if(above(treb_vol,1.1),1,0);\n' + 'phase=(clip)*(1-lastcip)*frame+clip*lastclip*phase+(1-clip)*lastclip*0;\n' + 't4=if(clip,t4*(.97+rand(20)/1000),t4);\n' + 't3=clip;\n' + 't2=phase;\n' + 'lastclip=clip;\n' + 't5=-.31415*sin(time*.23+.423+cos(time*.21+1.54));\n' + 't6=.0068;\n' + 't7=.8;\n' + 't8=.05;'),
		'point_eqs_str' : ('sw0=below(sample,.1429);\n' + 'sw1=(1-sw0)*below(sample,.2858);\n' + 'sw2=(1-sw0)*(1-sw1)*below(sample,.4286);\n' + 'sw3=(1-sw0)*(1-sw1)*(1-sw2)*below(sample,.5718);\n' + 'sw4=above(sample,.5717)*below(sample,.7143);\n' + 'sw5=above(sample,.7142)*below(sample,.8571);\n' + 'sw6=above(sample,.8570);\n' + 'a=(below(sample,.14)+above(sample,.15))*(below(sample,.56)+ above(sample,.58))*( below(sample,.71)+above(sample,.72) )*(below(sample,.85)+above(sample,.87));\n' + 'sample=(sw0*sample+sw1*(sample-.1429) + sw2*(sample-.2858)+sw3*(sample-.4286)+ sw4*(sample-.5717)+sw5*(sample-.7142)+sw6*(sample-.8570))*7;\n' + 'x=sw0*11*cos(6.2831*sample+4.7715-(q5-.5)*.86-t5);\n' + 'y=sw0*11*sin(6.2831*sample+4.7715-(q5-.5)*.86-t5);\n' + 'x=x+sw1*(-1+10*sample);\n' + 'y=y+sw1*(-1+sample);\n' + 'x=x+sw2*(9-10*sample);\n' + 'y=y+sw2*(sample);\n' + 'x=x-sw3;\n' + 'y=y+sw3*(1-2*sample);\n' + 't1=.5*cos(6.2831*sample);\n' + 't2=.5*sin(6.2831*sample);\n' + 'x=x+sw4*(-6.8+t1);\n' + 'y=y+sw4*(-5.8+t2);\n' + 'x=x+sw5*(8.5+t1);\n' + 'y=y+sw5*(-3.5+t2);\n' + 'angle=(1.26-t4)*3.14;\n' + 't1=cos(angle);\n' + 't2=sin(angle);\n' + 'ox=x;\n' + 'oy=y;\n' + 'x=(sw0+sw4+sw5)*x+(sw1+sw2+sw3)*(ox*t1-oy*t2);\n' + 'y=(sw0+sw4+sw5)*y+(sw1+sw2+sw3)*(ox*t2+oy*t1);\n' + 'x=x+sw6*(10*cos(1.5*(1-sample)*3.1415));\n' + 'y=y+sw6*(10*sin(1.5*(1-sample)*3.1415));\n' + 'x=x*t6 +t7;\n' + 'y=y*t6 +t8;\n' + 'ox=x;\n' + 'oy=y;\n' + 'c=cos(t5);\n' + 's=sin(t5);\n' + 'x=.5+(ox-.5)*c-(oy-.5)*s;\n' + 'y=.5+(ox-.5)*s+(oy-.5)*c;\n' + 't2=.5+(t7-.5)*s+(t8-.5)*c;\n' + 'y=(y-t2)*1.38+t2;\n' + 'c1=1;\n' + 'c2=below(sample,.6)+above(sample,.6)*((1-sample)/.4)*.5;\n' + 'c3=above(sample,.6)*below(sample,.8)*(sample-.6)*.25/.2;\n' + 'c4=pow(sample,4);\n' + 'c5=.15+.85*pow(1-abs(sample-.5)/.5,3);\n' + 'c6=abs(cos(6.2831*(frame-t2)/90));\n' + 'r=(sw1+sw2+sw3)*.8+(sw4+sw5)*.5+sw0*c5+sw6*c1;\n' + 'g=(sw1+sw2+sw3)*.4+(sw4+sw5)*.5+sw0*c5*(1+t3*(c6-1))+sw6*c2;\n' + 'b=(sw1+sw2+sw3)*.2+(sw4+sw5)*.5+sw0*c5*(1+t3*(c6-1))+sw6*c3;\n' + 'a=sw6*(c4-a)+a;'),

		}
],
	'shapes' : [
		{
		'baseVals' : {
			r2 : 1.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.7,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 1.0,
			textured : 0.0,
			g2 : 0.8,
			tex_zoom : 1.0,
			additive : 1.0,
			border_a : 0.0,
			border_b : 1.0,
			b2 : 0.0,
			a2 : 0.0,
			r : 1.0,
			border_g : 1.0,
			rad : 0.159626,
			x : 0.5,
			y : 0.95,
			ang : 0.0,
			sides : 60.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = m.q5;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=q5;'),

		},
		{
		'baseVals' : {
			r2 : 0.3,
			a : 1.0,
			enabled : 1.0,
			b : 1.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.2,
			textured : 0.0,
			g2 : 0.3,
			tex_zoom : 6.622948,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 1.0,
			a2 : 0.0,
			r : 0.2,
			border_g : 1.0,
			rad : 0.11042,
			x : 0.5,
			y : 0.66,
			ang : 0.0,
			sides : 60.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (((m.q5-0.5)*0.2)+0.5);
m.y = 0.5;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=(q5-.5)*.2+.5;\n' + 'y=.5;'),

		},
		{
		'baseVals' : {
			r2 : 0.0,
			a : 1.0,
			enabled : 1.0,
			b : 0.0,
			tex_ang : 0.0,
			thickoutline : 1.0,
			g : 0.0,
			textured : 0.0,
			g2 : 0.0,
			tex_zoom : 6.622948,
			additive : 0.0,
			border_a : 0.0,
			border_b : 0.0,
			b2 : 0.0,
			a2 : 0.9,
			r : 0.0,
			border_g : 1.0,
			rad : 0.11042,
			x : 0.51,
			y : 0.64,
			ang : 0.0,
			sides : 60.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.q5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.x = (((m.q5-0.5)*0.18)+0.5);
m.y = 0.49;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('x=(q5-.5)*.18+.5;\n' + 'y=.49;'),

		},
		{
		'baseVals' : {
			r2 : 0.05,
			a : 1.0,
			enabled : 1.0,
			b : 0.23,
			tex_ang : 3.141593,
			thickoutline : 1.0,
			g : 0.23,
			textured : 0.0,
			g2 : 0.05,
			tex_zoom : 0.550443,
			additive : 0.0,
			border_a : 1.0,
			border_b : 1.0,
			b2 : 0.05,
			a2 : 1.0,
			r : 0.23,
			border_g : 1.0,
			rad : 2.320343,
			x : 0.5,
			y : 0.5,
			ang : 0.0,
			sides : 100.0,
			border_r : 1.0,
			},
		'init_eqs' : function(m) {
m.c5 = 0;

			m.rkeys = [];
			return m;
		},
		'frame_eqs' : function(m) {
m.rad = 2.2;
m.c5 = (-0.31415*Math.sin((((m.time*0.23)+0.423)+Math.cos(((m.time*0.21)+1.54)))));
m.x = ((0.3+(0.9*Math.sin(m.c5)))+0.2);
m.y = ((0.44-(1.32*Math.cos(m.c5)))+0.06);
m.ang = -m.c5;
		return m;
	},
		'init_eqs_str' : (''),
		'frame_eqs_str' : ('rad=2.2;\n' + 'c5=-.31415*sin(time*.23+.423+cos(time*.21+1.54));\n' + 'x=.3+.9*sin(c5)+.2;\n' + 'y=.44-1.32*cos(c5)+.06;\n' + 'ang=-c5;'),

		}
],
	'warp' : (''),
	'comp' : (''),
	'init_eqs_str' : (''),
	'frame_eqs_str' : ('cont_bass=cont_bass*.93+bass_att*.07;\n' + 'cont_mid=cont_mid*.93+mid_att*.07;\n' + 'cont_treb=cont_treb*.93+treb_att*.07;\n' + 'cont_vol=.993*cont_vol+.0023*(bass+mid+treb);\n' + 'max_cont_bass=max(cont_bass,max_cont_bass*.9999);\n' + 'max_cont_mid=max(cont_mid,max_cont_mid);\n' + 'max_cont_treb=max(cont_treb,max_cont_treb);\n' + 'q4=cont_vol;\n' + 'decay=min(1,.8+.05*pow(q4,3));\n' + 'q5=-.31415*sin(time*.23+.423+cos(time*.21+1.54));\n' + 'c=cos(q5);\n' + 's=sin(q5);\n' + 'q6=.5+(.2-.5)*s+(.05-.5)*c;\n' + 'q7=.5+(.5-.5)*s+(.1-.5)*c;\n' + 'q8=.5+(.8-.5)*s+(.05-.5)*c;\n' + 'sunx=if(equal(sunx,0),.25+rand(50)/100,sunx);\n' + 'sunx=sunx+.001*s*q4;\n' + 'sunx=if(equal(sunx,0),sign(s)*.001,sunx);\n' + 'q5=sunx;'),
	'pixel_eqs_str' : ('warp=below(sqr(x-q5)+sqr(y-.05),.01)*.15;'),
};

return pmap;
});