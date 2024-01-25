import { ChangeEvent, useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css'

function App() {

  const [text, setText] = useState('')
  const [qrText, setQrText] = useState('')


  const downloadQRCode = () => {
    const canvas: any = document.getElementById('qr')
    if (canvas) {
      const qrCodeURL = canvas?.toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let aEl = document.createElement("a");
      aEl.href = qrCodeURL;
      aEl.download = "QR_Code.png";
      document.body.appendChild(aEl);
      aEl.click();
      document.body.removeChild(aEl);
    }
  }

  return (
    <div className="container">
      <h1>Get QR of everything!</h1>
      <div className='actions'>
        <textarea placeholder='Get QR of your text...' rows={3} value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} />
        <button onClick={() => { setQrText(text), setText('') }} className={text ? '' : 'disabled'}>Get QR</button>
      </div>
      <p>{qrText}</p>
      {qrText && <div className='qr_div'>
        <QRCode value={qrText} className='qr' id='qr' />
        <img src="/qrrr.png" alt="" onClick={downloadQRCode} />
      </div>}
    </div>
  );
}

export default App;

