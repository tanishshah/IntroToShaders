// Playing with Worley noise

// semi-random numbers
float rand (vec2 grid) {
    return fract(sin(dot(grid, vec2(93845422.3248,426262626484.453)))* 8453.483252072);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 grid = fragCoord/iResolution.xy;

    // generate indexes
    vec2 indices[16];
    for (int i = 0; i < 16; i++) {
        float j = float(i);
        if (i < 8) {
            indices[i] = vec2(abs(sin(rand(vec2(0.24234,0.94358))*iTime))
            *rand(vec2(j/532450.0, j/22342340.0)),
            rand(vec2(j/80325793425.0, j/232534570.0)));
        } else {
            indices[i] = vec2(rand(vec2(j/323450.0, j/67554820.0)),
            abs(cos(iTime*rand(vec2(0.9342345,0.13614))))
            *rand(vec2(j/9572634.0, j/2486345.0)));
        }
    }
    
    // determine the minimum distance
    float minDist = 2.0;
    for (int i = 0; i < 16; i++) {
        minDist = min(minDist, distance(grid, indices[i]));
    }
    
    // colour stuff
    vec3 col = vec3(0.98,0.50,0.44) - minDist;

    // Output to screen
    fragColor = vec4(col,1.0);
}