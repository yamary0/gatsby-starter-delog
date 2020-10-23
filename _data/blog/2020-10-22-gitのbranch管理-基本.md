---
template: BlogPost
path: /gitのbranch管理基本
date: 2020-10-22T08:38:08.123Z
title: gitのbranch管理|基本
metaDescription: gitのbranchをとりあえず使えるようになります。複数のブランチを扱うなどな別ページへ。
thumbnail: /assets/git_branch.gif
---
1. `git init`で下準備をする
2. `git add .`
   変更を一時保存にする
3. `git commit -m 'commit message'`\
   addしたローカルリポジトリに保存する\
   これはmasterブランチに追加される
4. `git checkout -b <branch>`\
   新たなブランチを作成し、移動する
5. 2と3を繰り返し作成したbranchにコミットしていく
6. `git checkout master`\
   masterブランチに移動する\
   branchでの変更は反映されていない
7. `git merge <branch>`\
   branchの変更をmasterに統合する\
   今masterとbranchの中身は同じ
8. `git branch -d <branch>`\
   branchを削除
9. `git branch`\
    branch一覧を表示
  
