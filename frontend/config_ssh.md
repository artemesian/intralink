# Config SSH keys on github

## Gen keys
```
$ ssh-keygen -t ed25519 -C "netcodeteam2020@gmail.com"
```

## start ssh-agent
```
$ eval "$(ssh-agent -s)"
```

## copy pub into clipboard
```
$ sudo apt-get install xclip
$ xclip -selection clipboard < ~/.ssh/id_ed25519_netcodeteam.pub 

```

## Go configure on github
```
In settings > SSH Keys

```



