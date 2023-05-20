#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_mouse; // the uniform associated with the mouse position (x,y)
uniform vec2 u_resolution; // the uniform associated with the resolution

void main() {
    vec2 normalized_mouse = u_mouse/u_resolution;
    gl_FragColor = vec4(normalized_mouse[0], normalized_mouse[1], 1, 1.0);
}