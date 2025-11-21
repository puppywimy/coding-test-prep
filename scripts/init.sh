#! /usr/bin/env zsh

git config --global alias.c "!zsh $PWD/scripts/commit.sh"
echo "이제 \"git c (type)\" 또는 \"git c (type) (메모)\"를 통해 풀이를 빠르게 커밋할 수 있습니다."