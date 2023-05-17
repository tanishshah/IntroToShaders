#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_mouse; // the uniform associated with the mouse position (x,y)
uniform vec2 u_resolution; // the uniform associated with the resolution
uniform float u_time; // the time the shader has been on

vec3 plot(vec2 grid, float func, vec3 col, float c) {
    float thickness = smoothstep(func-0.01, func, grid.y) - smoothstep(func, func+0.01, grid.y);
    float tmp = smoothstep(func, func, grid.y);
    vec3 tmp2 = col;
    tmp2[1] = c;
    return col + tmp2*thickness;
}

void main() {
    vec3 color = vec3(0.0,0.0,0.0);
    vec2 grid = gl_FragCoord.xy/u_resolution;

    float stepFunc = step(0.1, grid.x);
    float smoothStepFunc = smoothstep(0.2, 0.9, grid.x);
    float powerFunc = pow(grid.x, 2.0);

    color = plot(grid, stepFunc, color, 0.9);
    color = plot(grid, smoothStepFunc, color, 0.7);
    color = plot(grid, powerFunc, color, 0.5);
    
    gl_FragColor = vec4(color,1.0);
}