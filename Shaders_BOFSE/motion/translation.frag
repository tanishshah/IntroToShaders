#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 grid = gl_FragCoord.xy/u_resolution;
   
	vec3 a = vec3(1.0) - vec3(0.131,0.850,0.010);
    // side to side
    vec2 translate_horizontal = vec2(sin(u_time)*0.2,0.0);
    // vertical
    //vec2 translate_vertical = vec2(0.0, sin(u_time)*0.2);
    grid += translate_horizontal;
    float func = sqrt(pow(grid.x - 0.5,2.0) + pow(grid.y-0.5,2.0)) -0.2;
    vec3 color = vec3(smoothstep(func, func+0.005,0.02)) - a;
    gl_FragColor = vec4(color,1.0);
}