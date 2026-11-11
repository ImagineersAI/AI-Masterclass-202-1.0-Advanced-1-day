# One-day advanced course for alumni: course design

The course page in `../docs/index.html` is the source of truth for the programme, setup and delegate promises.

Each delegate spends the day turning one prompt into one finished tool, in five steps. Everything else on your list is a demonstration with something to take home.

The tool is a folder of files, like your Excel model builder: a start-here file, prompts, an HTML template and a small Python program. Delegates build and run it in Claude Cowork, our main platform for the entire day. Claude Pro is the minimum subscription: US$20 per month when billed monthly, before applicable tax.

We chose Cowork because it is well suited to working with files, running programs and completing multi-step business tasks. Everyone uses the same platform so demonstrations, instructions and support are consistent. That keeps the day moving and gives delegates more time to build.

## Why one build is the right centre for the day

This section is my judgement from how AI adoption usually goes. It is not data from your alumni.

**Delegates learn to build, test and improve reusable business tools.** This may be the only advanced AI skill they need for business. They leave with their own tested tool, our latest tools and every tool built by the group.

**A prompt and a tool differ in four ways, and delegates should feel each one.** A prompt gives a different answer every time. A tool gives the same layout, the same sums and the same checks every time, and somebody else can run it. Each step of the build fixes one of those gaps, straight after the delegate has seen it go wrong.

**The rule under all your advanced tools can be taught in one sentence.** Anything that must be the same every time is taken away from the AI and put in a file. The look goes in the template, the sums go in the program, and the AI keeps only the judgement.

**Tools get good through versions.** Every step ends with a numbered copy of the tool saved from Cowork into the working folder. Delegates practise restoring one of those copies, then upload the finished tool to the course Dropbox folder. Do not rely on the conversation alone as the saved tool.

**A tool built in a workshop is usually dead by Monday.** It survives when it is tied to something that recurs, such as a monthly report or a weekly meeting. So each delegate picks a real recurring job at 08:30 and names the date of its first real run at the close.

## What they build

Every delegate builds a tool with input and result pages, reusable instructions and a small Python program. They choose before the day from the thirty tools in `04 Tool ideas.md`. Each tool is built by one delegate, then shared with the group at 15:30.

Each of the thirty needs only a small input, such as one document or a page of notes. You and RJ think through the functions of all thirty in advance, so that you can prompt each delegate as they build.

Every tool also follows one of three patterns: it scores something, reports on figures or drafts a document. You rehearse one worked example of each pattern in full, so you know every way each one fails.

| Pattern and worked example | What goes in | What comes out | What the program does |
|---|---|---|---|
| Score: a scorecard | A document and the criteria to judge it by | A scored one-page evaluation | Weighted totals and ranking |
| Report: a monthly review | A spreadsheet export and a few notes | A one-page review with commentary | Changes against budget and last period |
| Draft: a proposal or quote | Meeting notes and a price list | A proposal in house style | The priced table and totals |

Management accounts commentary is the safe choice highlighted on the course page. Confidentiality agreement triage is described as the simplest tool to build. Confirm each delegate's choice before the day.

A finished copy of each worked example exists at every step. A delegate who falls behind copies the finished step for their pattern and asks the AI to adapt it to their own tool. Nobody is left stuck.

## The five steps

| Step | What the delegate does | What they see go wrong first | Saved as |
|---|---|---|---|
| 1. Write the prompt | Writes the expert's method as a sequence, requires evidence and flags missing facts. Runs it twice on the same input | The two answers differ | Version 1 |
| 2. Have the AI interview you and improve it | Reviews three real inputs, challenges assumptions and interviews the delegate. Agrees business rules, functions, evidence and exceptions. Rewrites the prompt, adds a delivery checklist and reruns the examples. | The first prompt missed things the delegate never thought to say | Version 2 |
| 3. Create the template | Builds HTML input and result pages with required fields, consistent headings, evidence and warnings. Saves, damages and restores a version. | The layout drifted between runs | Version 3 |
| 4. Add the Python program | Moves exact calculations, sorting and checks into Python. Checks inputs, output and evidence, reducing repeated model calls. Compares three results with answers worked out by hand. | The AI's arithmetic cannot be trusted | Version 4 |
| 5. Test it and prepare it for handover | Generates ordinary, difficult and broken inputs with checked expected answers. Runs batch tests and reruns after fixes. Adds start-here instructions and sample inputs. A separate Cowork task reviews it; a neighbour runs it without help. | The neighbour gets stuck where the delegate assumed too much | Version 5, uploaded to the course Dropbox folder |

Checking is built into all five steps. Step 2 adds the checklist. In step 4 delegates trace three figures by hand. Step 5 uses batch tests and a separate Cowork review task. A fresh task does not replace known-answer tests.

## Long jobs run in the breaks

| Break | Job started before it | What is waiting afterwards |
|---|---|---|
| Morning coffee | Run my prompt on three real inputs and write up where it failed | The evidence for step 2 |
| Lunch | Move the sums into a program and test it on the three inputs | A tested program for step 4 |
| Afternoon coffee | A separate Cowork task reviews the whole tool and runs its tests | The fix list for the neighbour test |

## Saved versions and Dropbox

Delegates use Cowork for the build and a browser to download the course pack and hand in their finished tool. Teach three actions without terminal commands:

- **Save a version.** Ask Cowork to save a numbered copy of the complete tool into the connected working folder after every step. Check the files in Finder or File Explorer.
- **Go back.** Keep version 2, deliberately damage a later copy in step 3, then restore the saved version. Check the restored files before continuing.
- **Hand in the finished tool.** Download the course pack from the course Dropbox link in a browser. At the end, zip the finished tool and upload it to the course Dropbox folder in the browser. We set up the Dropbox folder and its space; delegates need no Dropbox account or app. Check the upload is complete. Rehearse the download, unzip and upload before the course.

Keep company documents out of the course Dropbox folder unless the delegate chooses otherwise. Use sample inputs for handover. Keep the course working folder outside OneDrive, iCloud and Dropbox; use the course Dropbox folder in the browser only.

## The day

| Time | Session | What happens |
|---|---|---|
| 08:00 | Doors open | Help with Claude installation, updates and paid sign-in, following `03 Pre-installs.md`. |
| 08:30 | Welcome back | Each delegate names the tool they chose before the day and the real recurring job it will serve. |
| 08:50 | Where this is going | You run the dashboard builder and the Excel model builder, then open their folders. Delegates see the start-here file, prompts, template, program, samples and nine versions. |
| 09:15 | Core skill: working with Claude Cowork | Delegates open Claude Desktop, connect their working folder, load the course pack and save their first version. Cowork is used throughout all five steps. |
| 09:45 | Step 1: the prompt | The first long job starts before coffee. |
| 10:15 | Coffee | |
| 10:30 | Step 2: the AI improves it | |
| 11:10 | Demonstration: a folder that knows your business | The memory system and RJ's query index, shown on a real set of documents. Delegates take the starter folder home. |
| 11:35 | Step 3: the template | Includes the wreck-and-restore moment. The second long job starts before lunch. |
| 12:25 | Lunch | Cowork writes and tests the calculation program through the break. |
| 12:45 | Always-on agents | Demonstrate Grok bot, Duet and Dot over lunch. |
| 13:10 | Step 4: the program | |
| 13:50 | Make your AI subscription go further | Key-value (KV) cache in 15 minutes: reuse stable context, recognise cache expiry and reduce repeated processing where supported. Explain token spend and usage limits. Delegates keep a one-page card. |
| 14:05 | Step 5: safe to hand over | The third long job starts before coffee. |
| 14:45 | Coffee | |
| 15:00 | The neighbour test | Swap, run, fix, save version 5, upload to the course Dropbox folder. |
| 15:30 | Show and share | Three tools shown on the main screen. Every delegate's finished tool is added to the shared course pack, so everyone takes home every tool built by the group. Share sample inputs, without company documents. |
| 15:50 | From you to your company | The playbook, applied to what they built. This session starts at 15:50 whatever has happened before it. |
| 16:30 | The rest of the pack | A fast showing of the other tools they take home, and how updates arrive. |
| 16:45 | First real run date, and survey | Each delegate names the date their tool is first used for real. |
| 17:00 | End | A working tool on the laptop and a copy in the course Dropbox folder. |
| 17:10 | Final questions end | Allow until 17:10 for final questions. |

## Where the rest of your list went

| Your item | Where it is now |
|---|---|
| Advanced tools: making one | The five steps |
| Create a tool in Claude Cowork | The five steps |
| Skills and plugins | The tool is a folder of files, and so is everything in the pack |
| Cowork: why, setup and file access | Install, update and sign in before the day. Connect the folder at 09:15 and practise throughout all five steps. |
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

- **Setup.** Install or update Claude Desktop and sign in to an active Claude Pro subscription (US$20/month billed monthly, before tax). Higher Claude plans with Cowork access also qualify. The subscription is separate from the course fee. No advance folder or code test is required. Connect the working folder during the 09:15 session.
- **Computer confidence.** Delegates must meet the everyday computer skills checklist in `03 Pre-installs.md`. No coding experience is required.
- **A chosen tool.** Each delegate sends two choices from `04 Tool ideas.md`, and you confirm one tool per delegate so that no two are the same.
- **Material.** Three real examples of the input for their chosen tool, and one example of a good finished output if they have one.
- **Course pack link.** Email each delegate the course Dropbox link before the day. They download and upload in a browser, with no Dropbox account.
- **A fallback.** Sample material for each worked example, for delegates who cannot bring company documents.

## The pack

The pack is one Dropbox folder, opened from a link. Each tool inside it is its own folder of files, laid out like `05 Excel model creation/Pipeline versions/v3.3 Better charts/inputs`.

- **The three worked examples**, each with a finished copy at every step.
- **Every delegate's finished tool**, collected at 15:30 and shared with the group. Include instructions and sample inputs. Keep company documents out of the shared pack.
- **The tool ideas list**, for the next tools they build.
- **Our latest finished tools:** Excel model builder, board pack reader, dashboard builder, Gantt creator, hand-drawn slide, slide script builders, explainer video and issue tree. Supply current versions, including improvements since earlier courses.
- **Starters:** the workspace layout, the memory folder and the query index.
- **Everyday prompts as files:** Handoff, Humanise, RCTIO, Confirm.
- **Cards:** token costs, saving and restoring versions, handing in to the course Dropbox folder, the checking habits.
- **Company material:** the playbook and the First 100 Days page.

## What I am not sure about

- **Whether five steps fit.** The times above are estimates. I would rehearse the day once with three friendly alumni and time each step.
- **Cowork code execution and saved files.** Rehearse all three worked examples on Mac and Windows. Confirm Python execution, required libraries and outputs saved to the connected folder. Do not assume a program exists on the laptop because it ran in Cowork.
- **First-time Cowork setup.** Rehearse desktop installation, updates and paid sign-in on a clean Mac and Windows laptop. Rehearse connecting the working folder for the 09:15 session.
- **Claude Pro usage allowance.** Rehearse the full day on Pro, including batch tests and review tasks. Pro has usage limits; do not promise unlimited use or assume cached processing guarantees the day will fit.
- **A different tool for every delegate.** Each delegate gets a tool they want, but each tool fails in its own way. The build notes for all thirty are what make this workable. If the rehearsal runs slow, offer fewer tools.
- **Class size.** I would still cap the class at twelve, or add a helper at the tables.

## What has to be built, largest first

1. The three worked examples, each with a finished copy at all five steps and sample material.
2. Build notes for each of the thirty tools: what the template shows, what the program works out, and what to push the delegate towards.
3. The course Dropbox folder, with the Navigants tools moved across as folders of files.
4. The setup guide in `03 Pre-installs.md`, tested on a clean Mac and a clean Windows laptop.
5. The memory starter and query index, with RJ.
6. The three cards and the playbook worksheet.
7. The 08:50 demonstration and the always-on agents demonstration.
