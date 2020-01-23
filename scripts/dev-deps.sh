# base peer deps
base=(
  eslint@6.x
  eslint-plugin-import@2.x
)
# Prettier peer deps
prettier=(
  prettier@1.x
  eslint-plugin-prettier
  eslint-config-prettier
)
# TypeScript peer deps
ts=(
  @typescript-eslint/parser@2.x
  @typescript-eslint/eslint-plugin@2.x
)
tsprettier=( ${ts[*]} ${prettier[*]} )
# Jest peer deps
jest=( eslint-plugin-jest )
# create-react-app peer deps
jsxcra=(
  ${ts[*]}
  eslint-config-react-app
  babel-eslint@10.x
  eslint-plugin-flowtype@3.x
  eslint-plugin-jsx-a11y@6.x
  eslint-plugin-react@7.x
  eslint-plugin-react-hooks@1.x
)
prettierjsx=( ${prettier[*]} )
prettierjsxcra=( ${prettierjsx[*]} ${jsxcra[*]} )

install_pkgs() {
  pkgs=(${base[*]} $*)
  echo The following devDependencies will be installed:
  printf "\t%s\n" "${pkgs[@]}"
  echo
  read -rn1 -p "Continue? (y/n) " ans
  echo

  if [ $ans == 'y' ]; then
    $(npx @therealklanni/has-yarn-cli -q && echo yarn add || echo npm install) -D ${pkgs[*]}
  fi

  exit $?
}

# Change to the given working dir
cd $2

# Install required devDependencies packages
case "$1" in
  ts|typescript)
    install_pkgs "${ts[@]}" ;;

  ts-prettier|typescript-prettier|prettier-ts|prettier-typescript)
    install_pkgs "${tsprettier[@]}" ;;

  prettier-node|node-prettier|node-cli-prettier|prettier-node-cli|prettier)
    install_pkgs "${base[@]}" "${prettier[@]}" ;;

  jsx-cra|cra)
    install_pkgs "${jsxcra[@]}" ;;

  jsx-cra-prettier|cra-prettier|prettier-cra|jsx-prettier-cra|prettier-cra|prettier-jsx-cra)
    install_pkgs "${prettierjsxcra}" ;;

  jest)
    install_pkgs "${jest[@]}" ;;

  node|node-cli|jsx|*)
    install_pkgs ;;
esac
