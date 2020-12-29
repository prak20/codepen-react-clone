import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocal from '../hooks/useLocal';

const App = () => {
  const [html, setHtml] = useLocal('html', '')
  const [css, setCss] =   useLocal('css', '')

  const [js, setJs] =useLocal('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
    <div className="coder">🤠 CODE EDITOR 🧐
    </div>
    <div className="pane top-pane">
      <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
      <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
      <Editor language="Javacript" displayName="Javascript" value={js} onChange={setJs}/>
    </div>
    <div className="output">📺 OUTPUT 💻
    </div>
    <div className="pane">
      <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      width="100%"
      height="100%"
      />
    </div>
    </>
  )
}

export default App;
