# scraping-node-traning

```
# 開発環境に最低必要なもの
xcode-select --install || true
# HOMEbrewのインストール
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)";
# HOMEbrewが正常に入ってるかどうかのチェック
brew doctor

# pkgconfigを入れるために必要なもの
sudo chown -R $(whoami) /usr/local/lib/pkgconfig
# 開発に必要なものをHOMEbrewでまとめて入れる
brew install 'git' \
'coreutils' \
'zsh' \
'tree' \
'nkf' \
'nmap' \
'wget' \
'peco' \
'readline' \
'jq' \
'nodebrew' \
'rbenv' \
'docker-compose' \
'docker-completion' \
'autoconf' \
'automake' \
'freetype' \
'pkg-config' \
'libyaml' \
'libssh'
# HOMEBrewでGUIアプリケーションを入れる
brew cask install 'google-japanese-ime' \
'iterm2' \
'docker' \
'skitch' \
'visual-studio-code' \
'appcleaner' \
'spectacle'
# ディレクトリを作る
mkdir -p $HOME/Projects/eversense-develop/synced
# ディレクトリを移動する
cd $HOME/Projects/eversense-develop/synced
# gitをクローンする
git clone https://github.com/masayukiabe02/scraping-node-traning.git
```

