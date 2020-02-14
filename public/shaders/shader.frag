#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
	gl_FragColor = vec4(st.x * (sin(u_time) * 0.5 + 0.5), st.y * (cos(u_time) * 0.5 + 0.5), 1.0, 1.0);
}
