**_2021 年 5 月の設定なので､各種パッケージのバージョン上げたり eslint や prettier の推奨設定を確認したりと適宜修正が必要_**

### GitHub から clone する際の手順

1. clone した内容を展開したいディレクトリの作成及びそのディレクトリへの移動

1. `git clone https://github.com/sakanobu/react-study-repository.git .`

1. `git remote -v`

1. `git remote rm origin`

1. `git remote -v`

1. `yarn`

### ゼロから構築の際の手順

1. `npx create-react-app . --template typescript`

1. .gitignore のコピペ

1. .eslintignore のコピペ

1. .prettierignore のコピペ

1. `yarn add -D @types/prettier @types/testing-library__jest-dom @types/testing-library__react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-testing-library prettier typesync husky lint-staged`
   注)最後とその 1 つ前のの husky と lint-staged は加えなくてもいいかも…
   毎回のコミット毎にこれら 2 つを走らせるの遅くてストレス溜まるし､普通はエディター内で保存ごとに prettier かけてるだろうし､大丈夫…なはず…

1. .package.json のコピペ(ただし､まるごと Gist をコピペすると上の yarn でのバージョンと競合するので部分ごとにコピペする)

1. `yarn`をコマンドラインで実行(typesync が型を追加してくれたり､もしかしたらパッケージのインストールでエラーが出たりするかもなので)

1. tsconfig.json のコピペ

1. .eslintrc.js のコピペ

1. .prettierrc のコピペ

1. `rm -rf src/ public/`

1. `mkdir src public`

1. src ディレクトリに App.test.tsx と App.tsx と index.tsx と setupTests.ts をコピペ

1. public ディレクトリに index.html をコピペ

1. 動作確認
   1. `yarn start`をして Hello React が`http://localhost:3000`に表示されるのか確かめる
   1. App.tsx で行を沢山増やしてみて ESLint がエラーを報告してくれるのか確かめる
   1. (上記ではまだ説明していない､VSCode への ESLint 拡張や Pretiier 拡張の導入&VSCode の設定での Pretiier を保存時に自動実行などの設定をした上で､)保存時に 1 つ上で増やした改行が消えるのか(自動整形が行われるのか)確かめる
   1. 不正な型を入力して ts-server がエラーを報告してくれるのか確かめる
   1. `yarn test`をして間違った値を入れてみるなどする

### 保留

- .env
  - <https://create-react-app.dev/docs/adding-custom-environment-variables/>
- stylelint
- storybook
- cypress
- eslint-plugin-eslint-comments
- eslint-plugin-graphql
- components ディレクトリと test ディレクトリの作成､及び､ファイルの移動
