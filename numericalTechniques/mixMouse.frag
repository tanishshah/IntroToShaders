#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_mouse; // the uniform associated with the mouse position (x,y)
uniform vec2 u_resolution; // the uniform associated with the resolution
uniform float u_time; // the time the shader has been on

vec3 plot(vec2 grid, float func, vec3 col, float c) {
    float thickness = smoothstep(func, func, grid.y);
    float tmp = smoothstep(func, func, grid.y);
    vec3 tmp2 = col;
    tmp2[2] = c;
    return mix(col,tmp2*thickness, 0.2);
}

void main() {
    vec2 norm_mouse = u_mouse/u_resolution;
    vec3 color = vec3(0.4,0.97,1.0);
    vec2 grid = gl_FragCoord.xy/u_resolution;

    float smoothStepFunc = smoothstep(0.1, 1.0, grid.x + norm_mouse.x);

    color = plot(grid, smoothStepFunc, color, 0.9);
	color = mix(color, vec3(abs(sin(u_time)), abs(cos(u_time)), 2), 0.2);
    gl_FragColor = vec4(color,1.0);
}