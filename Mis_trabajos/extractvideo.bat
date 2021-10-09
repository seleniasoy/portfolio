rmdir thumbs /S /Q
mkdir thumbs
forfiles /M *.* /C "cmd /c ffmpeg -i @PATH -vframes 1 -vf scale='if(gte(iw,ih),min(720,iw),-2):if(lt(iw,ih),min(720,ih),-2)' -q:v 10 thumbs\\@FILE.jpg"