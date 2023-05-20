#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_mouse; // the uniform associated with the mouse position (x,y)
uniform vec2 u_resolution; // the uniform associated with the resolution
uniform float u_time; // the time the shader has been on

vec3 border(float thickness, vec3 color, vec2 grid) {
    vec2 botL = step(vec2(thickness),grid);
    vec2 topR = step(vec2(thickness), 1.0 - grid);
    float res = botL[0] * botL[1] * topR[0] * topR[1];
    return color + vec3(0.0, res, 0.0);
}

void main() {
    vec2 grid = gl_FragCoord.xy/u_resolution;
	vec3 color = vec3(0.95,0.37,0.0);
    color = border(0.2, color, grid);
    gl_FragColor = vec4(color,1.0);
}