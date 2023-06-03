// Playing with Worley & Voronoi

#define SIZE 128

// semi-random numbers
float rand (vec2 grid) {
    return fract(sin(dot(grid, vec2(93845422.3248,426262626484.453)))* 8453.483252072);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 grid = fragCoord/iResolution.xy;

    // generate indexes
    vec2 indices[SIZE];
    for (int i = 0; i < SIZE/2; i++) {
        float j = float(i);
        indices[i] = vec2(abs(sin(rand(vec2(0.24234,0.94358))*iTime))
        *rand(vec2(j/532450.0, j/22342340.0)),
        abs(sin(rand(vec2(0.824714,0.6485816))*iTime))
        *rand(vec2(j/80325793425.0, j/232534570.0)));
       
        indices[i+SIZE/2] = reflect(indices[i],normalize(indices[i]));
    }
    
    // determine the minimum distance
    float minDist = 2.0;
    vec2 minPoint = vec2(0.0,0.0);
    for (int i = 0; i < SIZE; i++) {
        float tmp =  distance(grid, indices[i]);
        if (tmp < minDist) {
            minDist = tmp;
            minPoint = indices[i];
        }
    }
    
    // colour stuff
    vec3 col = vec3(minPoint,0.9) + minDist;

    // Output to screen
    fragColor = vec4(col,1.0);
}