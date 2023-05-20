#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_mouse; // the uniform associated with the mouse position (x,y)
uniform vec2 u_resolution; // the uniform associated with the resolution
uniform float u_time; // the time the shader has been on

void main() {
    gl_FragColor = vec4(1.0,1.0,1.0,1.0);
}