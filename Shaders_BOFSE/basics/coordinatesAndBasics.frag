#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_mouse; // the uniform associated with the mouse position (x,y)
uniform vec2 u_resolution; // the uniform associated with the resolution
uniform float u_time; // the time the shader has been on

void main() {
    vec2 normalized_mouse = u_mouse/u_resolution;
    vec2 normalized_coord = gl_FragCoord.xy/u_resolution;
    gl_FragColor = vec4((normalized_coord[0] + normalized_mouse[0])/2.0, 
                        (normalized_coord[1] + normalized_mouse[1])/2.0,
                        abs(sin(u_time)), 1.0);
}