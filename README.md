# Card.io

## Notes

There's a couple of pretty straightforward things I'd probably improve if this
were a production app:

- CSS, I wrote it for ease of positioning and targeting and could use a cleanup.
- The App component should probably be converted into a class component, the
  `disableCardClicked` function is going to be redefined on every re-render.
- I'd probably make it so that ongoing api calls between transitions are
  cancelled.
- Tests would be nice.

![Card.io screenshot](/media/screenshot.png)
