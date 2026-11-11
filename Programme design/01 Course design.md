# One-day advanced course for alumni: design, draft 3

Each delegate spends the day turning one prompt into one finished tool, in five rounds. Everything else on your list is a demonstration with something to take home.

The tool is a folder of files, like your Excel model builder: a start-here file, prompts, an HTML template and a small Python program. It works in Claude and in ChatGPT because it is only files.

## Why one build is the right centre for the day

This section is my judgement from how AI adoption usually goes. It is not data from your alumni.

**Executives will not become tool builders, and the day should not pretend they will.** The lasting value is that they learn what one non-technical person can build in a day. After that, they ask different things of their teams and suppliers, and they can judge what comes back.

**A prompt and a tool differ in four ways, and delegates should feel each one.** A prompt gives a different answer every time. A tool gives the same layout, the same sums and the same checks every time, and somebody else can run it. Each round of the build fixes one of those gaps, straight after the delegate has seen it go wrong.

**The rule under all your advanced tools can be taught in one sentence.** Anything that must be the same every time is taken away from the AI and put in a file. The look goes in the template, the sums go in the program, and the AI keeps only the judgement.

**Tools get good through versions, which is why Git belongs in the day.** Your Excel model builder has nine version folders, from v1.0 to v3.3, kept by hand. Git does that for delegates automatically. I was wrong in draft 1 to hide it.

**A tool built in a workshop is usually dead by Monday.** It survives when it is tied to something that recurs, such as a monthly report or a weekly meeting. So each delegate picks a real recurring job at 08:30 and names the date of its first real run at the close.

## What they build

Every delegate builds the same shape of tool: files go in, and one finished page comes out. They choose before the day from the thirty tools in `04 Tool ideas.md`, and each tool goes to one delegate only.

Each of the thirty needs only a small input, such as one document or a page of notes. You and RJ think through the functions of all thirty in advance, so that you can prompt each delegate as they build.

Every tool also follows one of three patterns: it scores something, reports on figures or drafts a document. You rehearse one worked example of each pattern in full, so you know every way each one fails.

| Pattern and worked example | What goes in | What comes out | What the program does |
|---|---|---|---|
| Score: a scorecard | A document and the criteria to judge it by | A scored one-page evaluation | Weighted totals and ranking |
| Report: a monthly review | A spreadsheet export and a few notes | A one-page review with commentary | Changes against budget and last period |
| Draft: a proposal or quote | Meeting notes and a price list | A proposal in house style | The priced table and totals |

The scorecard is the default for anyone who arrives without a choice. Alumni already wrote an evaluation prompt on the first course (the BMC business plan evaluation), so they start from something they know.

A finished copy of each worked example exists at every round. A delegate who falls behind copies the finished round for their pattern and asks the AI to adapt it to their own tool. Nobody is left stuck.

## The five rounds

| Round | What the delegate does | What they see go wrong first | Saved as |
|---|---|---|---|
| 1. The prompt | Writes an RCTIO prompt and runs it twice on the same input | The two answers differ | Version 1 |
| 2. The AI improves it | The AI tests the prompt on three real inputs, reports where it failed, interviews the delegate and rewrites it. A "before you deliver" checklist is added. | The first prompt missed things the delegate never thought to say | Version 2 |
| 3. The template | The AI turns the best output into an HTML template. The prompt now says "fill this, change nothing else". | The layout drifted between runs | Version 3 |
| 4. The program | The AI moves every sum, score and sort into a small Python program and tests it | The AI's arithmetic cannot be trusted | Version 4 |
| 5. Safe to hand over | A start-here file, a README and sample inputs are added. A second AI reviews the tool. A neighbour runs it with no help. | The neighbour gets stuck where the delegate assumed too much | Version 5, sent to GitHub |

The checking habits I called the largest gap in draft 2 are now built into the rounds. Round 2 adds the checklist. In round 4 delegates trace three figures by hand. Round 5 uses a second AI, ideally the other vendor's.

## Long jobs run in the breaks

| Break | Job started before it | What is waiting afterwards |
|---|---|---|
| Morning coffee | Run my prompt on three real inputs and write up where it failed | The evidence for round 2 |
| Lunch | Move the sums into a program and test it on the three inputs | A tested program for round 4 |
| Afternoon coffee | A second AI reviews the whole tool and lists what to fix | The fix list for the neighbour test |

## Git and GitHub

Delegates learn three actions and no commands. They ask the AI in plain English and watch the result in Zed's Git panel.

- **Save a version.** Every round ends with one.
- **Go back.** In round 3, each delegate tells the AI to wreck the tool on purpose, then restores version 2. This is the moment they stop being afraid.
- **Send it to GitHub.** At the end they open the tool on github.com on their phone, which proves the work is off the laptop.

Git does two more jobs. The pack arrives by copying it from GitHub at 09:15, and later updates arrive the same way.

Two rules protect delegates. Every GitHub copy is private. Company documents sit in a folder that is kept off GitHub unless the delegate chooses otherwise. The workspace should also sit outside OneDrive, iCloud and Dropbox folders, because those can damage a Git folder.

## The day

| Time | Session | What happens |
|---|---|---|
| 08:00 | Doors open | Help for any laptop that did not pass the check in `03 Pre-installs.md`. |
| 08:30 | Welcome back | Each delegate names the tool they chose before the day and the real recurring job it will serve. |
| 08:50 | Where this is going | You run the dashboard builder and the Excel model builder, then open their folders. Delegates see the start-here file, prompts, template, program, samples and nine versions. |
| 09:15 | Workspace and first save | Delegates open Zed, copy the pack from GitHub and make their first saved version. |
| 09:45 | Round 1: the prompt | The first long job starts before coffee. |
| 10:15 | Coffee | |
| 10:30 | Round 2: the AI improves it | |
| 11:10 | Demonstration: a folder that knows your business | The memory system and RJ's query index, shown on a real set of documents. Delegates take the starter folder home. |
| 11:35 | Round 3: the template | Includes the wreck-and-restore moment. The second long job starts before lunch. |
| 12:25 | Lunch | From 12:45, a demonstration of the always-on agents: Grok bot, Duet and Dot. |
| 13:10 | Round 4: the program | |
| 13:50 | Why you got cut off | Token costs in 15 minutes: cache expiry, change effort and not model, the 5-hour window. Delegates keep a one-page card. |
| 14:05 | Round 5: safe to hand over | The third long job starts before coffee. |
| 14:45 | Coffee | |
| 15:00 | The neighbour test | Swap, run, fix, save version 5, send to GitHub. |
| 15:30 | Show and tell | Three tools shown on the main screen. |
| 15:50 | From you to your company | The playbook, applied to what they built. This session starts at 15:50 whatever has happened before it. |
| 16:30 | The rest of the pack | A fast showing of the other tools they take home, and how updates arrive. |
| 16:45 | First real run date, and survey | Each delegate names the date their tool is first used for real. |
| 17:00 | End | Ten minutes of slack before the 17:10 finish of the current course. |

## Where the rest of your list went

| Your item | Where it is now |
|---|---|
| Advanced tools: making one | The five rounds |
| Vibe coding in the IDE, create a tool | The five rounds |
| Skills and plugins | The tool is a folder of files, and so is everything in the pack |
| IDE: why, which, setup | Setup is done before the day. The "why" is shown at 08:50 and felt all day. |
| Dashboard, Excel | Shown at 08:50 as the destination, and taken home |
| RJ storyline and presentation, explainer video | Taken home, shown at 16:30 |
| Memory system, RJ query index | One demonstration at 11:10, with a starter folder to take home |
| Grok bot, Duet, Dot | Lunch demonstration |
| Token costs | 15 minutes at 13:50 |
| AI Transformation Playbook | 15:50, with a fixed start |
| Create a website | Left out. It is a second build, and one build is the limit. |
| Advanced pictures and video, browser control | Left out of the day. The prompts can go in the pack. |

## The playbook session

The link to the playbook is the tool they have just built. Training every member of staff to prompt does not spread, but handing staff a tool with the method inside does.

Delegates answer three questions for their own company. Which five recurring jobs deserve a tool like this one? Who owns each tool and its versions? What must never be put into one? Their answers become the first page of their 100-day plan.

## Before the day

- **Setup.** Zed, Git, a GitHub account and Python. Zed fetches Claude and Codex itself, so delegates install no separate AI programs. The steps and the check for delegates are in `03 Pre-installs.md`.
- **A chosen tool.** Each delegate sends two choices from `04 Tool ideas.md`, and you confirm one tool per delegate so that no two are the same.
- **Material.** Three real examples of the input for their chosen tool, and one example of a good finished output if they have one.
- **GitHub usernames.** Delegates send theirs ahead, so that you can give them access to the private pack.
- **A fallback.** Sample material for each worked example, for delegates who cannot bring company documents.

## The pack

The pack is one private GitHub folder. Each tool inside it is its own folder of files, laid out like `05 Excel model creation/Pipeline versions/v3.3 Better charts/inputs`.

- **The three worked examples**, each with a finished copy at every round.
- **The tool ideas list**, for the next tools they build.
- **Finished tools:** Excel model builder, Dashboard builder, and the Navigants tools you choose to move across.
- **Starters:** the workspace layout, the memory folder and the query index.
- **Everyday prompts as files:** Handoff, Humanise, RCTIO, Confirm.
- **Cards:** token costs, the three Git actions, the checking habits.
- **Company material:** the playbook and the First 100 Days page.

## What I am not sure about

- **Whether five rounds fit.** The times above are estimates. I would rehearse the day once with three friendly alumni and time each round.
- **Python on delegates' laptops.** Round 4 needs it to run on Windows and Mac, inside both Claude and ChatGPT. I would test all four combinations before the first course.
- **Zed for a brand-new user on Windows.** Zed's documents confirm the steps, but I have not watched a new user sign in to Claude or ChatGPT there. I would test it on a clean Windows laptop.
- **A different tool for every delegate.** Each delegate gets a tool they want, but each tool fails in its own way. The build notes for all thirty are what make this workable. If the rehearsal runs slow, offer fewer tools.
- **Class size.** I would still cap the class at twelve, or add a helper at the tables.

## What has to be built, largest first

1. The three worked examples, each with a finished copy at all five rounds and sample material.
2. Build notes for each of the thirty tools: what the template shows, what the program works out, and what to push the delegate towards.
3. The pack folder on GitHub, with the Navigants tools moved across as folders of files.
4. The setup guide in `03 Pre-installs.md`, tested on a clean Mac and a clean Windows laptop.
5. The memory starter and query index, with RJ.
6. The three cards and the playbook worksheet.
7. The 08:50 demonstration and the always-on agents demonstration.
