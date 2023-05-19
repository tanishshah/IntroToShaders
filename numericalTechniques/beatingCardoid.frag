#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 grid = gl_FragCoord.xy/u_resolution;
    vec2 l = vec2(0.55, 0.6) - grid;
    float r = length(l)*2.0;
    float theta = atan(l.y, l.x);
    float func = 0.2*abs(sin(u_time)) + 0.3*sin(theta);
    vec3 color = vec3(1.0 - abs(cos(u_time))/8.0, 0.0, 0.0 + abs(sin(u_time))/3.0) - vec3(smoothstep(func, func+0.02, r));
    gl_FragColor = vec4(color,1.0);
}