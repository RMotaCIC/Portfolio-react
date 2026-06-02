import "../styles/CodeWindow.css";

function CodeWindow() {
  return (
    <div className="code-window">

      {/* Titlebar */}
      <div className="code-titlebar">
        <span className="dot-r"></span>
        <span className="dot-y"></span>
        <span className="dot-g"></span>
        <span className="code-filename">rnd.dev.ts</span>
      </div>

      {/* Code body */}
      <div className="code-body">
        <div className="code-line">
          <span className="ln">01</span>
          <span className="kw">class </span>
          <span className="cls">RndDev </span>
          <span className="prop">{"{"}</span>
        </div>

        <div className="code-line">
          <span className="ln">02</span>
          <span className="prop">  name</span>
          <span className="txt">: </span>
          <span className="cls">string </span>
          <span className="txt">= </span>
          <span className="str">"RND.DEV"</span>
          <span className="txt">;</span>
        </div>

        <div className="code-line empty">
          <span className="ln">03</span>
        </div>

        <div className="code-line">
          <span className="ln">04</span>
          <span className="fn">  constructor</span>
          <span className="txt">() {"{"}</span>
        </div>

        <div className="code-line">
          <span className="ln">05</span>
          <span className="prop">    this</span>
          <span className="txt">.</span>
          <span className="fn">speed </span>
          <span className="txt">= </span>
          <span className="str">"99.9%"</span>
          <span className="txt">;</span>
        </div>

        <div className="code-line">
          <span className="ln">06</span>
          <span className="prop">    this</span>
          <span className="txt">.</span>
          <span className="fn">edge </span>
          <span className="txt">= </span>
          <span className="bool">true</span>
          <span className="txt">;</span>
        </div>

        <div className="code-line">
          <span className="ln">07</span>
          <span className="txt">  {"}"}</span>
        </div>

        <div className="code-line empty">
          <span className="ln">08</span>
        </div>

        <div className="code-line">
          <span className="ln">09</span>
          <span className="fn">  ship</span>
          <span className="txt">(</span>
          <span className="prop">project</span>
          <span className="txt">: </span>
          <span className="cls">Project</span>
          <span className="txt">) {"{"}</span>
        </div>

        <div className="code-line">
          <span className="ln">10</span>
          <span className="cm">    {"// always on time, always precise"}</span>
        </div>

        <div className="code-line">
          <span className="ln">11</span>
          <span className="kw">    return </span>
          <span className="prop">this</span>
          <span className="txt">.</span>
          <span className="fn">build</span>
          <span className="txt">(project);</span>
          <span className="cursor"></span>
        </div>

        <div className="code-line">
          <span className="ln">12</span>
          <span className="txt">  {"}"}</span>
        </div>

        <div className="code-line">
          <span className="ln">13</span>
          <span className="prop">{"}"}</span>
        </div>
      </div>

    </div>
  );
}

export default CodeWindow;
