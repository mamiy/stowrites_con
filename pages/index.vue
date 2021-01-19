<template>
  <div>
    <Navigation />
    <div class="header grain">
      <h2>STOWRITES</h2>
      <hr>
      <p class="copy1">BRAND NEW EDITER</p>
      <p class="copy2">『STOWRITES』（ストライツ）は<br>ストーリーを書くための、新しいエディタです。</p>
      <NuxtLink to="/dashboard">はじめる</NuxtLink>
    </div>
    <div class="about">
      <p>今まで、物語を書くための<br>スタンダードなツールがありませんでした。</p>
      <p>物語のプロット作りから、<br>本にするためのデータ作りまで。</p>
      <p>長く険しい道のりを<br>トータルにサポートしてくれるツールがあれば、<br>物語はもっと楽しくなる。</p>
      <p>めざすのは、<br>Webアプリケーションでありながら、お気に入りの文房具であること。</p>
      <p>使いやすく、好きでいられる<br>新しいスタンダードを作ります。</p>
    </div>
    <div class="tasks">
      <p>今後の実装アイデア：</p>
      <ul>
        <li>本文のテキストエリアのスクロールの挙動を調整</li>
        <li>章分け（本文をブロックで分割）機能</li>
        <li>章の順序入れ替え（ドラガブル）</li>
        <li>バージョン管理（コミットのみ・ブランチはしんどいのでなし）</li>
        <li>diff</li>
        <li>アイデアメモ機能</li>
        <li>プロット作成機能</li>
        <li>ドラフト作成機能</li>
        <li>コメント、メモ機能</li>
        <li>資料収集・イメージボード機能</li>
        <li>タグまたはカテゴリ機能</li>
        <li>PDF出力</li>
        <li>印刷用データ作成（組版）</li>
        <li>進捗データ記録</li>
        <li>進捗の共有機能</li>
        <li>フィードバック機能</li>
        <li>タスク管理？</li>
        <li>認証</li>
        <li>データベースへ移行（NoSQL？）</li>
        <li>マルチデバイス対応</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page'
}
</script>

<style lang="scss">
@import "/scss/destyle.scss";
@import "/scss/common.scss";
.header {
  min-width: 800px;
  padding: 6rem;
  background: url('../assets/gl_background_image.jpg');
  background-color: #bcf3cc;
  background-blend-mode: normal;
  background-repeat: no-repeat;
  background-position: 50vw 0;
  background-size: 50%;
  font-family: baskerville, YuMincho, Yu Mincho, serif;
  font-feature-settings: "palt";
  letter-spacing: .05rem;
  h2 {
    margin-bottom: 1rem;
    color: $color_stowrites;
    font-size: 9rem;
    line-height: 1;
    letter-spacing: .5rem;
  }
  .copy1 {
    font-size: 3rem;
  }
  .copy2 {
    margin: 2rem 0;
    font-size: 1.25rem;
  }
  hr {
    height: 8px;
    border: 0;
    background: #f44336;
    width: 31rem;
  }
  a {
    display: inline-block;
    border: 1px solid $color_stowrites;
    border-radius: 10rem;
    padding: .75rem 7rem;
    font-size: 2rem;
    color: $color_stowrites;
    font-feature-settings: normal;
    transition: .5s;
  }
}
.about {
  padding: 10rem calc((100vw - 800px) / 2);
  background: $color_stowrites;
  color: #FFF;
  font-family: "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
  font-feature-settings: "palt";
  letter-spacing: 0.1rem;
  p {
    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
    font-size: 1.25rem;
    line-height: 2;
  }
}
.tasks {
  padding: 10rem calc((100vw - 800px) / 2);
  color: $color_stowrites;
  p {
    margin-bottom: 2rem;
    font-weight: bold;
  }
  ul {
    margin-left: 1rem;
    list-style-type: disc;
  }
}

@keyframes grain {
  0%, 100% {transform: translate(0, 0);}
  50% {transform: translate(-15%, -15%);}
}
.grain {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 150%;
    background: url('../assets/gl_background.png');
    mix-blend-mode: overlay;
    background-repeat: repeat;
    animation: grain 2s steps(6) infinite;
  }
  & > * {
    position: relative;
  }
}
</style>
