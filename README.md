# fcc-drum-machine

## Acceptance Criteria
1. Outer container with #drum-machine containing all other elements
2. Within #drum-machine there should be a #display element
3. Within #drum-machine there should be 9 clickable drum pad elements, each
with a class name of 'drum-pad', a unique id that describes the audio
that will be triggered, and an inner text corresponding to each of the
following keys: Q, W, E, A, S, D, Z, X, C, in this order
4. Each .drum-pad element should have an HTML5 <audio> element with a src
attribute pointing to an audio clip, a class name of 'clip', and an id
that corresponds to the inner text of it's parent .drum-pad (ie: the
key that triggers it like 'Q')
5. When a .drum-pad is clicked, the audio clip should be triggered
6. When the trigger key is pressed, the audio clip should be triggered
7. When a .drum-pad is triggered, a string describing the associated audio
clip is displayed as the inner text of the #display element
