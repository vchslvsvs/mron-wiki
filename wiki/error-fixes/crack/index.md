# 1.20 crack fixes

## E-TACT CLIENT ERROR E_STORAGE_INT (25)
> Game opens and closes instantly

Stop game torrent seeding. Fully disable torrent. Set/Unset Read-only in properties of game folder.

## 22 FPS, no HUD/UI and weird noises in Battle Royale

Open console and use command `exec br_core.cfg`. Always do it before starting match, or just put it to `autoexec.cfg`.


## Not enough space to launch the game

Make sure you have at least 1Gb on system disk. Create folder `Call of Duty Modern Warfare` in documents.


## DX_UNKNOWN_ERROR [Critial DirectX Error]

Update your graphic card drivers/reinstall them. 2. If doesn't help, press Win+R, type in regedit, hit enter, go to `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography`, double click `MachineGuild`, press `Edit` or `Modify` and paste random UUID code generated from this [generator](https://www.uuidgenerator.net) to `Value Data`. Save and reboot PC.


## Unknown Function crash

Download latest `discord_game_sdk.dll` and put it to game folder with replacement. If doesn't help, download and install latest MRON version. If still doesn't work, delete `script.gscbin` and `donetsk` from your game folder.