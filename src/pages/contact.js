import { useState } from "react";


export const Contact = () => {
    const [contactData, setContactData] = useState({name:"",email:"",message:""});

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    return (
        <main>
            <form>
            <h2>お問い合わせ</h2>
            <p>楽曲の制作依頼、使用許可等についてはこちらから</p>
            <div className="contactBackColor">
                <div className="form-group">
                    <label>名前</label><br/>
                    <input type="text" name="name" value={contactData.name} onChange={handleChange} placeholder='名前' required style={{ width: "30%" }}/><br/>
                </div>
                <div className="form-group">
                    <label>メールアドレス</label><br/>
                    <input type="email" name="email" value={contactData.email} onChange={handleChange} placeholder="メールアドレス" required style={{ width: "50%" }} /><br/>
                </div>
                <div className="form-group">
                    <label>メッセージ</label><br/>
                    <textarea name="message" value={contactData.message} onChange={handleChange} placeholder="メッセージ" required className="message-box" />
                </div>
            </div>
            
            <button type="submit">送信</button>
        </form>
        </main>
        
    );
};

export default Contact;