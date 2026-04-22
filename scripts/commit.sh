#! /usr/bin/env zsh

type=$1
description=$2

case $1 in
  s)
    type="solve"
    ;;
  d)
    type="description"
    ;;
esac

untrackedFiles=$(git ls-files -o --exclude-standard --directory)
echo "Untracked Files는 다음과 같습니다.\n$untrackedFiles\n"
read "answer?모든 변경 사항을 커밋하시겠습니까? [Y/n] "
if [[ $answer != "Y" ]]; then
  exit
fi

git add .
scope=$(git diff --name-only --cached)
commitMessage="$type($scope)"
if [[ -z $description ]]; then
  git commit -m "$commitMessage"
else
  git commit -m "$commitMessage: $description"
fi
echo "\n성공적으로 커밋했습니다."

# if [[ ( $type == "solve" ) || ( $type == "solving" ) ]]; then
#   touch "$scope:r.md"
# fi