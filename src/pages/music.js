import React from 'react';
import Track from '../compornents/track'

export const Home = () => {
    return (
        <>
            <main>
                <section>
                <div className="container">
                    <div className="content">
                        <h2>東方アレンジ一覧</h2>
                        {/* トラックの雛形 */}
                        {/* <Track 
                            title={``}
                            original={``}
                            youtubeUrl={``}
                            soundcloudUrl={``}
                            id={``}
                        /> */}
                        <Track 
                            title={`Phantom Boundary`}
                            original={`憑坐は夢と現の間に　〜 Necro-Fantasia`}
                            youtubeUrl={`https://youtu.be/KHxhybg9M_A?si=YQe58a2kBLWq9TJy`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/phantom-boundary-necro-fantasia`}
                            id={`KHxhybg9M_A`}
                        />
                        <Track 
                            title={`静かの海`}
                            original={`故郷の星が映る海`}
                            youtubeUrl={`https://youtu.be/RrVXIS-2JSE?si=DCG1k_gMblHjJA6d`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/60f7c106-2d64-45bc-962c-ee6796e8e342`}
                            id={`RrVXIS-2JSE`}
                        />
                    </div>
                </div>
                    
                </section>
            </main>
        </>
    )
}

export default Home;