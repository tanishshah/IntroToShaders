// Porting this shader to shader toy
#define PI 3.141519

vec2 xy_Rotation(float theta, vec2 grid) {
    grid -= vec2(0.5);
    grid *= mat2(cos(theta), -sin(theta), sin(theta), cos(theta));
    grid += vec2(0.5);
    return grid;
}

vec2 scale(float factor, vec2 grid) {
    grid -= vec2(0.5);
    grid *= mat2(factor, 0, 0, factor);
    grid += vec2(0.5);
    return grid;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // setup grid
    vec2 grid = fragCoord/iResolution.xy;

    // make a pattern
    grid = fract(grid*2.0);
    

    // do the grid rotation
    grid = xy_Rotation(PI*iTime, grid);

    // translation
    grid += vec2(sin(iTime)*0.2,cos(iTime)*0.2);
    
    //scale
    grid = scale(abs(sin(iTime) + 1.8), grid);
    
    // create the shape
    vec2 l = vec2(0.5, 0.5) - grid;
    float r = length(l)*2.0;
    float theta = atan(l.y, l.x);
    float func = 0.2*cos(16.0*theta);
    
    // modify the colours
	vec3 a = vec3(0.0,0.60, 0.9*abs(sin(iTime)));
    vec3 color = vec3(1.0) - (a + vec3(smoothstep(func, func+0.08, 0.5*r)));

    // export
    fragColor = vec4(color,1.0);

}