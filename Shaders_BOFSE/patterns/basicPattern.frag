#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 grid = gl_FragCoord.xy/u_resolution;
    grid *= 5.0;
    grid = fract(grid);
	vec3 a = vec3(0.5,0.40*abs(sin(u_time)),0.010*abs(cos(2.0*u_time)));
    
    float func = sqrt(pow(grid.x - 0.5,2.0) + pow(grid.y -0.5,2.0)) - 0.2;
    vec3 color = vec3(smoothstep(func, func+0.005,0.02)) - a;
    gl_FragColor = vec4(color,1.0);
}
