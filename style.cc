:root {
  --blue: #447ACB;
  --teal: #1E8E89;
  --amber: #C7922A;
  --red: #B54A3A;
  --steel: #5B78A5;

  --ink: #000000;
  --ink-2: #1D2630;
  --ink-3: #56606E;

  --page: #F4F6F9;
  --panel: #FFFFFF;
  --panel-2: #EEF3F8;
  --line: #D3DAE3;
  --line-2: #C2CBD7;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background: var(--page);
}

p {
  color: var(--ink);
}

.btn-primary {
  background: var(--blue);
  color: #fff;
  border: 1px solid var(--blue);
  border-radius: 6px;
}

