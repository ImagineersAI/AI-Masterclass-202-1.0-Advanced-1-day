# Before the course: set up your laptop and check it

Complete this guide at least three days before the course. Follow the Mac or Windows instructions, then complete the two shared steps below them. Allow extra time for downloads.

Zed is where you will work. You choose Claude Agent or Codex inside Zed, and Zed installs that agent for you. Python still needs a separate installation. Zed has Git controls, but your AI also needs the `git` command to save versions. The checks below confirm it is available.

## 1. Get your accounts and material ready

- **GitHub:** open [github.com/signup](https://github.com/signup), create a free account and verify your email. If you already have an account, sign in. Send us your GitHub username so we can give you the course pack.
- **Your AI:** bring a paid Claude subscription with Claude Code access, or a paid ChatGPT subscription with Codex access. Open [Claude](https://claude.ai) or [ChatGPT](https://chatgpt.com), sign in and check your subscription in Settings. If you have both, you can use both. A paid Zed subscription is not required for these agents.
- **Your tool:** send your first and second choice from [the tool list](#tools). Earlier bookings get first priority. Bring three real input examples and, if you have one, a good finished output. Remove confidential names and use material you are allowed to share.

Have access to your sign-in email and any verification codes on the laptop you will bring. If your company controls software installation, ask its IT team to help before the day.

If you need a new AI account, choose **Sign up** on Claude or ChatGPT and complete the email check. Then choose a paid plan that includes the agent you will use. Check access by signing in from Zed in step 3.

## 2. Set up your computer

Follow only the section for your computer. If a program is already installed and its check works, keep it.

### Mac

#### Download and install Zed

1. Open [zed.dev/download](https://zed.dev/download) and download the stable version for Mac.
2. In Finder, open Downloads and double-click the downloaded `.dmg` file.
3. Drag Zed into Applications. Open Applications, then double-click Zed. If macOS asks whether to open it, choose Open.
4. Leave Zed open. You will connect your AI in step 3 below.

#### Install Git, Python and the GitHub helper

Press Command and Space, type `Terminal`, then press Return. This opens the window where you paste commands. Paste one command at a time and press Return.

First check whether Homebrew, the installer we use for these programs, is already there:

```
brew --version
```

If it prints a version, skip the Homebrew installation below. If it says `command not found`, paste:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow its prompts. Your Mac may ask for its login password; nothing appears while you type it. At the end, follow the installer's **Next steps** commands. They make Homebrew available in Terminal and differ between Intel and Apple Silicon Macs. Then run `brew --version` again.

Install Git to save versions, Python to run calculations, and the GitHub helper to connect your account:

```
brew install git python gh
```

If Homebrew says your macOS version is unsupported, send us that message before continuing.

#### Create your course folder and add the Excel reader

Use this folder in your home directory, outside OneDrive, iCloud and Dropbox:

```
mkdir -p ~/ai-masterclass
cd ~/ai-masterclass
```

Create a separate Python environment for your course tools:

```
python3 -m venv .venv
.venv/bin/python -m pip install openpyxl
```

`openpyxl` lets your tools read and write Excel files. This installs it for your course folder without changing the Mac's other Python programs.

#### Check the installations

Run each command separately. Git should report `git version`, Python should report `Python 3`, and the GitHub helper should report `gh version`, each followed by numbers.

```
git --version
python3 --version
```

```
gh --version
.venv/bin/python -m pip show openpyxl
```

The last command should show `Name: openpyxl` and a version. If any command fails, send us the message. Then continue with step 3 below.

### Windows

#### Download and install Zed

1. Open [zed.dev/download](https://zed.dev/download) and download the stable Windows installer.
2. Open Downloads in File Explorer and double-click the installer. Follow its prompts. If Windows asks for permission, check the installer is from Zed before accepting.
3. Press the Windows key, type `Zed` and open it. Leave it open; you will connect your AI in step 3 below.

#### Install Git, Python and the GitHub helper

Press the Windows key, type `PowerShell`, then press Enter. Paste one command at a time and press Enter. These commands use Windows' installer, called WinGet. Accept its installation prompts.

```
winget install -e --id Git.Git
winget install -e --id GitHub.cli
```

Install Python 3.13, the version used for this setup guide:

```
winget install -e --id Python.Python.3.13
```

If `winget` is not recognised, open Microsoft Store, find **App Installer** by Microsoft Corporation, and install or update it. Close PowerShell, open it again, then retry.

When the installations finish, close PowerShell and open a fresh window so it can find the new programs.

#### Create your course folder and add the Excel reader

Create the folder in your user directory, outside OneDrive, iCloud and Dropbox:

```
New-Item -ItemType Directory -Force "$HOME\ai-masterclass"
Set-Location "$HOME\ai-masterclass"
```

Create a separate Python environment for your course tools and install the Excel reader:

```
py -3.13 -m venv .venv
.\.venv\Scripts\python.exe -m pip install openpyxl
```

You do not need to change PowerShell's script permissions. The command runs Python directly.

#### Check the installations

Run each command separately. Git should report `git version`, Python should report `Python 3.13`, and the GitHub helper should report `gh version`, each followed by numbers.

```
git --version
py -3.13 --version
```

```
gh --version
.\.venv\Scripts\python.exe -m pip show openpyxl
```

The last command should show `Name: openpyxl` and a version. If any command fails, send us the message. Then continue with step 3 below.

## 3. Connect your AI inside Zed

1. Close Zed and open it again so it can find the programs you just installed.
2. Choose **File → Open Folder**, then open `ai-masterclass` inside your home or user folder.
3. Open Zed's command search: Command, Shift and P on Mac, or Control, Shift and P on Windows. Type `zed: acp registry` and select it.
4. Install **Claude Agent** for your Claude subscription, or **Codex** for your ChatGPT subscription. Zed downloads the selected agent. If you have both subscriptions, you may install both.
5. Open the Agent Panel using the agent icon in Zed's status bar. Use its new-thread menu to choose the agent you installed.
6. For **Claude Agent**, type `/login` in that thread and choose the Claude Code sign-in option. For **Codex**, choose **Sign in with ChatGPT** when prompted. Complete the sign-in in your browser, then return to Zed.
7. Type `Say hello` and send it. Check that your chosen agent answers.

Use the subscription sign-in route. You do not need to buy separate API credits for this course setup. If your company account blocks the sign-in, ask its administrator to enable access before the day.

## 4. Connect GitHub and do the final check

In the Terminal or PowerShell window you used earlier, tell Git your name and GitHub email. Replace the examples inside the quotes with your own details:

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Connect the GitHub helper:

```
gh auth login --web --git-protocol https
```

If asked whether to authenticate Git, choose yes. Follow the sign-in instructions. You may see a short code and a browser page where you enter it.

Check the connection:

```
gh auth status
```

You should see a message confirming that you are logged in to github.com as your username.

Finally, paste this request into your Claude Agent or Codex thread in Zed:

> Check this laptop for the course. Report the Git and Python versions, whether gh is signed in to GitHub, and whether openpyxl is installed in this folder's .venv. Do not install or change anything. Tell me what passed and what needs fixing.

You are ready when the agent answers and all four checks pass. Send us your GitHub username if you have not already done so.

## If a check fails

Send us a screenshot of the failed step and its message, without passwords or sign-in codes. We will help you before the day. Doors open at 08:00 for any remaining laptop problems.

Setup references: [Zed installation](https://zed.dev/docs/installation), [agents in Zed](https://zed.dev/docs/ai/external-agents), [Python in Zed](https://zed.dev/docs/languages/python), [GitHub helper installation](https://github.com/cli/cli#installation).
