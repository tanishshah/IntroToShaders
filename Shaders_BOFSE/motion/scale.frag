#ifdef GL_ES
precision lowp float;
#endif

#define PI 3.141519

uniform vec2 u_resolution;
uniform float u_time;

vec2 scale(float factor, vec2 grid) {
    grid -= vec2(0.5);
    grid *= mat2(factor, 0, 0, factor);
    grid += vec2(0.5);
    return grid;
}

void main() {
    vec2 grid = gl_FragCoord.xy/u_resolution;
    
    // colour to torpedo
	vec3 a = vec3(0.166,0.814,0.830);

    // scale the torpedo
    grid = scale((abs(sin(u_time))+0.5), grid);
    // setup the shape
    vec2 l = vec2(0.5, 0.5) - grid;
    float r = length(l)*2.0;
    float theta = atan(l.y, l.x);
    float func = cos(theta)*-1.0*cos(2.0*theta);
    
    // display
    vec3 color = vec3(1.0) - (a + vec3(smoothstep(func, func+0.02, 13.0*r)));
    gl_FragColor = vec4(color,1.0);
}

