# daviddiener


Symlinked via

### Windows
```bash
C:\DATEN\10_Projects\daviddiener-quartz>mklink /J "content" "C:\Users\david\Meine Ablage\Dokumente\Obsidian\daviddiener\50_Public"
Verbindung erstellt für content <<===>> C:\Users\david\Meine Ablage\Dokumente\Obsidian\daviddiener\50_Public
```

### Ubuntu (Linux)
Git on Linux doesn't follow symlinks for tracking files. To make your Obsidian folder appear as a real directory to Git, use a **bind mount**.

#### Temporary (until reboot)
```bash
sudo mount --bind "/home/daviddiener/Insync/daviddiener1@gmail.com/Dokumente/Obsidian/daviddiener/50_Public" content
```

#### Permanent (via /etc/fstab)
To keep the mount after a restart, add this line to your `/etc/fstab` file:
1. Open the file: `sudo nano /etc/fstab`
2. Add the following line at the end (adjusting for absolute paths):
   ```text
   /home/daviddiener/Insync/daviddiener1@gmail.com/Dokumente/Obsidian/daviddiener/50_Public /home/daviddiener/Daten/10_Projects/daviddiener-quartz/content none bind 0 0
   ```
3. Test it: `sudo mount -a`

Build with 

```
npx quartz build --serve
```

Push by commiting and pushing (the default quartz sync script has issues with how we mount the content folder)

# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
