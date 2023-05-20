#ifdef GL_ES
precision lowp float;
#endif


uniform vec2 u_resolution; // the uniform associated with the resolution
uniform float u_time; // the time the shader has been on

// semi-random numbers
float rand (vec2 grid) {
    return fract(sin(dot(grid, vec2(93845422.3248,426262626484.453)))* 8453.483252072);
}

void main() {
    vec2 grid = gl_FragCoord.xy/u_resolution;
    
    // translation
    grid += vec2(0.0,u_time*0.3);

    float f = rand(grid);
    vec3 color = vec3(0.682,1.000,0.933) - vec3(f);

    gl_FragColor = vec4(color,1.0);
}