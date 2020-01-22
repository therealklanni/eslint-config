bold () {
  printf "$(tput bold)$*$(tput sgr 0)"
}
red () {
  printf "$(tput setaf 1)$*$(tput sgr 0)"
}
ltred () {
  printf "$(tput setaf 13)$*$(tput sgr 0)"
}
ltblue () {
  printf "$(tput setaf 12)$*$(tput sgr 0)"
}

echo
echo $(ltred $(bold === IMPORTANT INFORMATION === PLEASE READ ===))
echo
echo Thank you for using $(ltblue @therealklanni/eslint-config)!
echo
echo "Don't forget to install the $(ltred required devDependencies)..."
echo
echo If you would like these devDependencies installed automatically now,
echo simply type or copy the command below and replace the word $(bold CONFIG_NAME)
echo with the $(bold name) of the config you intend to use. E.g. \"typescript\"
echo
echo "\t$(bold npm explore @therealklanni/eslint-config -- npm run @deps CONFIG_NAME \$\(pwd\))"
echo
echo Docs @ https://github.com/therealklanni/eslint-config/blob/master/README.md
echo
