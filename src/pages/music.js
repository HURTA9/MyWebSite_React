import React from 'react';
import Track from '../compornents/track'

export const Music = () => {
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
                        <Track 
                            title={`Monkey Ascendant`}
                            original={`タイニーシャングリラ`}
                            youtubeUrl={`https://youtu.be/oL5gwP6EbIw?si=uTXu9MI71JEJ0wpg`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/monkey-ascendant`}
                            id={`oL5gwP6EbIw`}
                        />
                        <Track 
                            title={`Unknown Night Bird`}
                            original={`平安のエイリアン`}
                            youtubeUrl={`https://youtu.be/nQunWoepkeQ?si=YRRluMpXEG-XE43N`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/unknown-night-bird`}
                            id={`nQunWoepkeQ`}
                        />
                        <Track 
                            title={`Moonlit Bamboo`}
                            original={`満月の竹林`}
                            youtubeUrl={`https://youtu.be/I1hGb1G8DnM?si=F-Z5dGTFAC-_JF3j`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/moonlit-bamboo`}
                            id={`I1hGb1G8DnM`}
                        />
                        <Track 
                            title={`Wandering Hellway`}
                            original={`旧地獄街道を行く`}
                            youtubeUrl={`https://youtu.be/u8L5vfvEwRo?si=YXKxN3vvjLfD7c_h`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/wandering-hellway`}
                            id={`u8L5vfvEwRo`}
                        />
                        <Track 
                            title={`L - S Bullet`}
                            original={`狂気の瞳 ～ Invisible Full Moon`}
                            youtubeUrl={`https://youtu.be/VCGl4xAG-Wk?si=bRemj8eZJuNUiOWW`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/l-s-bullet-invisible-full-moon`}
                            id={`VCGl4xAG-Wk`}
                        />
                        <Track 
                            title={`Dream Tapir`}
                            original={`永遠の春夢`}
                            youtubeUrl={`https://youtu.be/iKn8DBZHY-o?si=LSwDdEki9alNHroY`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/dream-tapir`}
                            id={`iKn8DBZHY-o`}
                        />
                        <Track 
                            title={`_ lil _`}
                            original={`ピュアヒューリーズ`}
                            youtubeUrl={`https://youtu.be/UFn_uPqnLgY?si=XVwYLWo68HcIXzYP`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/lil`}
                            id={`UFn_uPqnLgY`}
                        />
                        <Track 
                            title={`SIDE OF HELL♥`}
                            original={`パンデモニックプラネット`}
                            youtubeUrl={`https://youtu.be/mVz_dIjr78Y?si=2fDK-2hqWzbZrtyB`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/side-of-hell`}
                            id={`mVz_dIjr78Y`}
                        />
                        <Track 
                            title={`EnD Of CatAstRophE`}
                            original={`U.N.オーエンは彼女なのか?`}
                            youtubeUrl={`https://youtu.be/pqeau2sufDE?si=haqC_SFKP4BveCvQ`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/end-of-catastropheun`}
                            id={`pqeau2sufDE`}
                        />
                        <Track 
                            title={`Twin Tek`}
                            original={`クレイジーバックダンサーズ`}
                            youtubeUrl={`https://youtu.be/p4xVbXALDEo?si=rkEiPgWaY0bzxW6O`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/twin-tek`}
                            id={`p4xVbXALDEo`}
                        />
                        <Track 
                            title={`Hidden Star`}
                            original={`秘神マターラ～ Hidden Star in All Seasons.`}
                            youtubeUrl={`https://youtu.be/jKXu4xRvZo4?si=VAe0m26Dy3xLSvTZ`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/hidden-star`}
                            id={`jKXu4xRvZo4`}
                        />
                        <Track 
                            title={`心焔`}
                            original={`法界の火`}
                            youtubeUrl={`https://youtu.be/1GHDCRouMyw?si=ca33DAoE4UR-bl0U`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/nud9vpsprtzk`}
                            id={`1GHDCRouMyw`}
                        />
                        <Track 
                            title={`Yakujin Psy`}
                            original={`厄神様の通り道`}
                            youtubeUrl={`https://youtu.be/ExqnctiJsks?si=vKV4ZwBe_Hih7Xxf`}
                            soundcloudUrl={`https://soundcloud.com/hurta910/yakujin-psy`}
                            id={`ExqnctiJsks`}
                        />
                    </div>
                </div>
                    
                </section>
            </main>
        </>
    )
}

export default Music;