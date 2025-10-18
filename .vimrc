command Build !node build.js
function! s:Publish()
  " 1) Montrer le status
  execute '!git status'

  " 2) Confirmation (1=Yes, 2=No)
  let l:ask = confirm("Publier sur GitHub ?", "&Oui\n&Non", 2)

  if l:ask == 1
    " 3) Commit auto avec timestamp
    let l:msg = "auto: " . strftime("%Y-%m-%d %H:%M:%S")
    execute '!git add -A && git commit -m "' . l:msg . '" && git push'
  else
    echo "Annulé."
  endif
endfunction

command! Publish call s:Publish()
