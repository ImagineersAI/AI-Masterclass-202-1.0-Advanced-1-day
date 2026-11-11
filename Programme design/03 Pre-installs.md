# Before the course: what to set up and bring

Please do three things before the day: choose your tool, set up your laptop, and send us your GitHub username. The setup takes about 30 minutes, and the course cannot start for you without it.

Do this at least three days before the course, so there is time to fix anything that fails.

## Choose your tool and bring your material

You will spend the day building one tool. Each tool in `04 Tool ideas.md` goes to one delegate only, so send us your first, second and third choice. We will confirm which one is yours.

Bring three real examples of what goes into your tool, such as three CVs, three quotes or three months of accounts. If you have a finished output that you were pleased with, bring that too.

## Set up your laptop

| What | Why you need it |
|---|---|
| Zed | The workspace where you will build your tool |
| Git | Saves every version of your work, so you can always go back |
| Python | Runs the small programs inside the tools |
| A GitHub account | Keeps a private copy of your work off your laptop |
| Claude or ChatGPT inside Zed | The AI you will work with, using your existing subscription. Zed fetches it for you, so there is nothing extra to install. |

Keep your work folder out of OneDrive, iCloud and Dropbox. On the day we will create it in your home folder.

## Accounts you need

Set these up first, and bring the usernames and passwords with you. Check that you can sign in to each website on the laptop you will bring.

| Account | Website | What to do |
|---|---|---|
| GitHub | [github.com/signup](https://github.com/signup) | Create a free account. Note the email address you use, because Git needs the same one below. |
| Claude | [claude.ai](https://claude.ai) | Sign in with your existing subscription. |
| ChatGPT | [chatgpt.com](https://chatgpt.com) | Sign in with your existing subscription. |

You need GitHub, plus Claude or ChatGPT. If you have both Claude and ChatGPT, bring both.

Once you have a GitHub account, send us your GitHub username. We use it to give you access to the course pack.

## Mac

### 1. Open Terminal

Press Command and Space, type `Terminal`, and press Return. Paste each command below into that window and press Return.

### 2. Install Homebrew (the installer that fetches the rest)

Your Mac will ask for your password. Nothing shows as you type it, which is normal.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

When it finishes, paste these two lines so that your Mac can find Homebrew:

```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 3. Install Zed, Git and Python

```
brew install git python gh
brew install --cask zed
```

### 4. Add the Excel add-on to Python

```
python3 -m pip install --user --break-system-packages openpyxl
```

The long word in the middle only allows the add-on for your own user account.

### 5. Tell Git who you are

Put your own name between the first quote marks, and your GitHub email address between the second.

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 6. Connect Git to your GitHub account

```
gh auth login --web --git-protocol https
```

If it asks whether to authenticate Git, press Return for yes. It then shows a short code and opens your browser. Sign in to GitHub and type the code.

### 7. Check that everything works

```
python3 --version && git --version && gh auth status
python3 -c "import openpyxl; print('Python add-ons work')"
```

You should see two version numbers, a line saying you are logged in to github.com, then the words `Python add-ons work`.

## Windows

### 1. Open PowerShell

Press the Windows key, type `PowerShell`, and press Enter. Paste each command below into that window and press Enter. If Windows asks whether you agree to the terms, type `Y` and press Enter.

### 2. Install Zed, Git and Python

```
winget install -e --id ZedIndustries.Zed
winget install -e --id Git.Git
winget install -e --id GitHub.cli
winget install -e --id Python.Python.3.12
```

Now close PowerShell and open it again. Windows only finds the new programs in a fresh window.

### 3. Add the Excel add-on to Python

```
python -m pip install openpyxl
```

### 4. Tell Git who you are

Put your own name between the first quote marks, and your GitHub email address between the second.

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 5. Connect Git to your GitHub account

```
gh auth login --web --git-protocol https
```

If it asks whether to authenticate Git, press Enter for yes. It then shows a short code and opens your browser. Sign in to GitHub and type the code.

### 6. Check that everything works

```
python --version; git --version; gh auth status
python -c "import openpyxl; print('Python add-ons work')"
```

You should see two version numbers, a line saying you are logged in to github.com, then the words `Python add-ons work`.

## Mac and Windows: add your AI to Zed

1. Open Zed.
2. Press Command, Shift and P on a Mac, or Control, Shift and P on Windows. A search box opens at the top.
3. Type `acp registry` and press Return. A list of AI agents opens.
4. Install **Claude Agent** if you have a Claude subscription, and **Codex** if you have a ChatGPT subscription. If you have both, install both.
5. Open the Agent Panel and start a new thread with the agent you installed.
6. Sign in with your subscription:
   - **Claude Agent:** type `/login`, press Return, and choose to log in with Claude Code. Your browser opens so that you can sign in to Claude.
   - **Codex:** follow the sign-in prompt and choose to sign in with ChatGPT.
7. Type `Say hello` and check that it answers.

## If something fails

Take a photo of the screen showing the message, and send it to us with the step number. We will sort it out with you before the day.

Doors open at 08:00 on the day for anyone who still has a step that does not work.
