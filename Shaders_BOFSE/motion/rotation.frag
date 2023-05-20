#ifdef GL_ES
precision lowp float;
#endif

#define PI 3.141519

uniform vec2 u_resolution;
uniform float u_time;

mat2 xy_Rotation(float theta) {
    return mat2(cos(theta), -sin(theta), sin(theta), cos(theta));
}

void main() {
    vec2 grid = gl_FragCoord.xy/u_resolution;
    
    // colour to make the rose curve
	vec3 a = vec3(0.83,0.0,0.44);
    
	//rotate
    grid -= vec2(0.5);
    grid *= xy_Rotation(PI*u_time);
    grid += vec2(0.5);
    // setup the shape
    vec2 l = vec2(0.5, 0.5) - grid;
    float r = length(l)*2.0;
    float theta = atan(l.y, l.x);
    float func = 0.2*cos(16.0*theta);
    
    // display
    vec3 color = vec3(1.0) - (a + vec3(smoothstep(func, func+0.08, 0.5*r)));
    gl_FragColor = vec4(color,1.0);
}

