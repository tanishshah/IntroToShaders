#ifdef GL_ES
precision lowp float;
// precision mediump, highp
#endif

// the uniform associated with the time since the shader began
uniform float u_time;

void main() {
    gl_FragColor = vec4(abs(cos(u_time)), abs(sin(u_time)), 1, 1.0);
}