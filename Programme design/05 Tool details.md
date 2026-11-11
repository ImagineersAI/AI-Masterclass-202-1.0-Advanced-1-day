# Thirty tools: facilitator crib notes

All five steps take place in Claude Cowork, including Python execution, batch tests and a separate review task. Delegates need Claude Desktop and at least an active Claude Pro subscription (US$20/month billed monthly, before applicable tax).

These notes tell you what to push each delegate towards at each of the five steps. They follow the same order and numbers as `04 Tool ideas.md`.

## The five steps, and the push that works for any tool

1. **Prompt.** The delegate writes a simple prompt with several steps. If they stall, ask: "What would an expert do first, second and third with this input?"
2. **Interview.** The AI interviews the delegate and adds the advanced functions. If the interview stays shallow, ask: "What would make you reject this output if a junior handed it to you?"
3. **Template.** The AI builds one HTML page to enter the input and one to view the result. If the page drifts, ask: "What must be in the same place every time?"
4. **Program.** The AI writes Python for everything that must be exactly right. Make the delegate work out three figures by hand and compare them with the program.
5. **Tests.** The AI invents cases and runs the tool on them. Insist that each case has an answer known in advance, and that some cases are built to break the tool.

Under every tool below, the five numbered items match these five steps.

## Board and big decisions

### 1. Board paper writer

1. **Prompt.** Push for four steps: pull the facts and figures from the notes, state the decision sought in one sentence, build the options, then write the paper. Ask the delegate to paste their board's real headings as the format.
2. **Interview.** The AI should ask who approves what and up to which amount. It should ask whether "do nothing" must always be an option, and how risks are rated. Push for a rule that the paper lists what the manager's notes did not say.
3. **Template.** The input page takes the notes, the figures and the name of the approving body. The result page puts the decision sought in a box at the top, then the options table, money table and risks. It should print cleanly on A4.
4. **Program.** The program adds up the money table by option and by year. It then finds every rand figure in the text and compares it with the table. If one differs, it stops and names the sentence.
5. **Tests.** Ask for notes where the text says R4.2 million and the table adds up to R4.5 million. Add notes with only one option, notes with no figures, and figures that mix thousands and millions.

### 2. Decision table with a flip test

1. **Prompt.** Push for these steps: list the options and criteria, score each option on each criterion with a reason, apply the weights, rank. The delegate must write down what a score of 1 and a score of 5 mean.
2. **Interview.** The AI should ask which criteria are must-haves that remove an option, and which criteria overlap and so count twice. Ask whether cost is a criterion or is handled apart from the scores.
3. **Template.** The input page is a grid of options against criteria, with a weight for each criterion. The result page shows the ranked table, then one sentence such as "Option B wins if the weight on cost drops from 30 to 22".
4. **Program.** The program makes the weights add to 100 and works out the totals. For each weight, it finds the smallest change that produces a new winner, and it shares the difference across the other weights. It reports the most fragile weight first.
5. **Tests.** Ask for a tie, one option that wins on every criterion, weights that do not add to 100, and a single criterion. Add a case where no change of weight can change the winner, so the tool must say so.

### 3. Negotiation prep sheet

1. **Prompt.** Push for these steps: list each side's interests, then your best alternative if there is no deal, then your walk-away point, then the other side's likely walk-away point. The last step is the plan of concessions.
2. **Interview.** The AI should ask what the delegate will do if the talks fail, because the walk-away point comes from that. It should ask what is cheap for them to give and valuable for the other side to get.
3. **Template.** The input page takes the deal notes and a short list of items that can be traded. The result page is one page: two columns of interests, a bar showing the range where a deal is possible, and the concession order.
4. **Program.** The program values each concession in rands for both sides, using figures the delegate supplies. It sorts concessions by cost to you against value to them, and it checks whether the two walk-away points overlap.
5. **Tests.** Ask for a deal with no overlap, where the tool must say no deal is possible. Add a deal on price only, a deal with six items to trade, and notes that give no alternative at all.

## Money

### 4. Management accounts commentary

1. **Prompt.** Push for these steps: read the accounts, list every line against budget and last year, pick the changes above the set size, then explain each one. The explanation must come from the delegate's notes, never from guesswork.
2. **Interview.** The AI should ask for the size that counts, in rands and in percent, and whether both must be met. It should ask what the reader already knows, and what to write when no reason is given.
3. **Template.** The input page takes the accounts export, the threshold and the month's notes. The result page shows three headline figures, a chart of what moved profit from budget to actual, and the commentary table.
4. **Program.** The program works out every change in rands and percent, and marks each one as good or bad for profit. A cost above budget is bad and income above budget is good. The chart's steps must add up to the total change in profit.
5. **Tests.** Ask for a budget line of zero, a negative budget, a line that exists this year but not last year, and a month with nothing above the threshold. Add an account where a total row is mistaken for a line.

### 5. Investor update with runway

1. **Prompt.** Push for the standard order: highlights, problems, figures, requests. The delegate should tell the AI that problems come before figures, and that every request names one person or one action.
2. **Interview.** The AI should ask which five to eight figures investors see every month, and how runway is defined. It should ask what was promised last month, so the update can report against it.
3. **Template.** The input page is a small table of this month's figures plus free notes. The result page is one email-length page with the figures table, month-on-month arrows and the runway in months, shown in large type.
4. **Program.** The program works out the monthly changes and the runway. Runway is the cash balance divided by the average net cash spent over the last three months. If the company made cash, it says so instead of printing a number.
5. **Tests.** Ask for a month with positive cash flow, a month with a one-off large payment, the first month with no history, and a month where the notes claim growth but the figures fell.

### 6. Annual accounts red-flag reader

1. **Prompt.** Push for these steps: find the income statement, balance sheet and cash flow, pull each figure with its page number, work out the ratios, then write the flags. Notes on going concern and the audit opinion must be read too.
2. **Interview.** The AI should ask whether the company is listed or private, and whether it manufactures. The Altman Z score has a different version for each. The Beneish M score needs two years of figures, so the tool must check both are present.
3. **Template.** The input page takes the PDF and the company type. The result page shows the two scores on a red, amber and green scale, a ratio table with last year beside it, and each flag with its page number.
4. **Program.** The program works out the ratios and both scores from the pulled figures. It first checks that assets equal liabilities plus equity. If they do not, a figure was misread and the program stops.
5. **Tests.** Ask for accounts in thousands and accounts in millions, a company with negative equity, a bank (where the scores do not apply) and a first-year company. Trace three figures back to their pages by hand.

### 7. Timesheet and bill from your week

1. **Prompt.** Push for these steps: read the calendar entries and sent emails, match each one to a client, estimate the time, draft the timesheet, then draft the invoice lines. Anything unmatched goes in a list for the delegate to place.
2. **Interview.** The AI should ask how clients are recognised, for example by email domain or project code. It should ask the billing unit, the rate per client, what is never billed and how travel is treated.
3. **Template.** The input page takes the calendar file, the sent-email list and the rate card. The result page shows the week by client and day, the unmatched items at the top, then invoice lines ready to copy.
4. **Program.** The program rounds time to the billing unit, applies each client's rate and totals each invoice with VAT. It also catches two entries that overlap, so the same hour is never billed twice.
5. **Tests.** Ask for two meetings at the same time, an all-day event, a meeting with two clients, a client with no rate and an entry that runs past midnight. Check one invoice total by hand.

### 8. Fee and scope page

1. **Prompt.** Push for these steps: list the deliverables, group them into phases, estimate hours by role, price them, then set payment dates. The page must also list what is out of scope and what the fee assumes.
2. **Interview.** The AI should ask how many rounds of changes are included, and what the client must supply and by when. It should ask about discounts, expenses, VAT, and what happens to the fee if the scope grows.
3. **Template.** The input page takes the call notes and the rate card. The result page shows the scope, a phase table with hours and fees, the payment schedule, and the exclusions and assumptions. It should look ready to sign.
4. **Program.** The program multiplies hours by rates, totals each phase, applies any discount and adds VAT. It checks that the payment schedule adds up to exactly the total fee, to the cent.
5. **Tests.** Ask for a role missing from the rate card, a fixed-fee phase mixed with hourly phases, a discount on one phase only and payments that add to 95 percent. Add call notes with no deliverables named.

## Deals and funding

### 9. First-look deal screen

1. **Prompt.** Push for these steps: pull the key facts, test them against the mandate, check the automatic rejections, do the rough returns sum, then write ten questions. The delegate must write their mandate out in full first.
2. **Interview.** The AI should ask for the mandate limits: sector, size, country, stake and stage. It should ask which facts cause instant rejection, and which assumptions the returns sum may use when the document is silent.
3. **Template.** The input page takes the document and the mandate. The result page puts a verdict at the top: pass, reject or look closer. Below it sit the mandate fit table, the returns sum with its assumptions and the ten questions.
4. **Program.** The program applies the rejection rules and works out the rough return. It uses the entry price, the debt, the growth and the exit multiple to give a money multiple and a yearly return. Every assumed figure is marked as assumed.
5. **Tests.** Ask for a teaser with no price, a deal that fails one rejection rule by a small amount, a deal in the wrong currency and a deal with losses. The questions must differ between cases, which shows they are not stock questions.

### 10. Term sheet comparison with exit payouts

1. **Prompt.** Push for these steps: pull every term from both sheets into the same list, mark the differences, explain each difference in plain words, then model the payouts. A term that appears in one sheet only is a difference.
2. **Interview.** The AI should ask for the current share table and the option pool. It should ask which sale prices to model, and whether investors take their money back first and then share in the rest as well.
3. **Template.** The input page takes the two sheets, the share table and the sale prices. The result page shows the terms side by side with differences marked, then a payout table and chart for each sheet.
4. **Program.** The program works out who gets what at each sale price. Each investor class takes the better of its preferred amount or its share as ordinary shares, subject to any cap. The payouts at each price must add up to the sale price.
5. **Tests.** Ask for a sale below the amount invested, a sale at exactly the point where investors switch to ordinary shares, and two classes with different ranks. Work out one sale price by hand with the delegate.

### 11. Data room check

1. **Prompt.** Push for these steps: read the file list, match each file to a checklist item, mark each item present, partial or missing, then write the request list. Matching must use folder names as well as file names.
2. **Interview.** The AI should ask which checklist items are critical, and what counts as partial, such as two of three years. It should ask how to treat files that match nothing, because those are often the interesting ones.
3. **Template.** The input page takes the file list and the checklist. The result page shows a bar per area with the percentage complete, the missing critical items in red, and a request list ready to paste into an email.
4. **Program.** The AI does the matching, and the program does the counting. It works out the percentage by area and in total, lists unmatched files and duplicates, and checks that every checklist item got a status.
5. **Tests.** Ask for an empty folder, file names such as "Scan001.pdf", the same file in two folders and a checklist item covered by five files. Add a data room with nothing missing.

### 12. Impact report

1. **Prompt.** Push for these steps: read the results and targets, compare them, work out the cost per person reached, write the story of what changed, then draw the link from money to outcomes. Shortfalls must be reported as plainly as successes.
2. **Interview.** The AI should ask how the funder defines "reached", and whether one person can be counted in two activities. It should ask which costs are included, and what evidence sits behind each outcome claim.
3. **Template.** The input page is a small table of activities, targets, results and cost. The result page shows results against targets as bars, the cost per person, and a diagram running from money to activities to outcomes.
4. **Program.** The program works out the percentage of each target reached and the cost per person, by activity and in total. It checks that activity costs add up to the grant, and flags any result above 150 percent of target as a likely data error.
5. **Tests.** Ask for a target of zero, a result with no target, people counted twice across activities and spending above the grant. Add a project that missed every target, to see whether the report stays honest.

### 13. Funding application builder

1. **Prompt.** Push for these steps: list every question with its word limit and scoring weight, match the project notes to each question, draft each answer, then build the budget. An answer with no supporting notes must be flagged, never invented.
2. **Interview.** The AI should ask what the funder scores highest, what they will not fund and what words they use for their aims. It should ask whether limits are in words or characters, and whether headings count.
3. **Template.** The input page takes the funder's questions and the project notes. The result page shows each question, its answer and a count such as "243 of 250 words", then the budget table. Gaps in the notes appear in a list at the top.
4. **Program.** The program counts words or characters for every answer and stops if one is over. It checks that every question has an answer, that budget lines add up, and that the total matches the amount named in the text.
5. **Tests.** Ask for a limit of 50 words, a limit in characters, a two-part question, a budget that is R100 out and a question the notes cannot answer. Check one word count by hand in Word.

## Bids and buying

### 14. Bid evaluation sheet

1. **Prompt.** Push for these steps: check each bid against the mandatory requirements, score functionality with reasons and page references, apply the minimum functionality score, then score price and preference. Bidders who fail a stage go no further.
2. **Interview.** The AI should ask for the published criteria and weights word for word, and the minimum functionality score. It should ask whether 80/20 or 90/10 applies, and how the preference points are awarded.
3. **Template.** The input page takes the criteria, the bids and each price. The result page shows the ranking, a score table for each bidder with reasons, and a clear list of who was removed and why.
4. **Program.** The program applies the price formula: points equal 80 times one minus the difference from the lowest price, divided by the lowest price. It adds preference points, ranks, and uses 90 where 90/10 applies. Only bids that passed functionality count as the lowest price.
5. **Tests.** Ask for two equal prices, a bid more than double the lowest (negative points), a bidder who fails functionality with the lowest price and a single bidder. Work out one price score by hand.

### 15. Bid CVs in one format

1. **Prompt.** Push for these steps: pull every fact from the CV, map each fact to the tender's headings, work out the experience, then write the CV. The AI must never add a skill or project that is not in the original.
2. **Interview.** The AI should ask for the tender's exact format, page limit and the experience it scores. It should ask what to cut first when a CV runs over, and how to treat gaps between jobs.
3. **Template.** The input page takes the CV and the tender format. The result page is the CV in that format, with a small panel showing years of relevant experience, the page count and anything that was cut.
4. **Program.** The program works out years of experience from the start and end dates. Two jobs held at the same time count once. It treats "present" as today's date and estimates the page count against the limit.
5. **Tests.** Ask for overlapping jobs, a job with years but no months, a ten-page CV for a two-page limit, a CV with a career gap and a scanned CV. Check one person's years by hand.

### 16. Request for quotation drafter

1. **Prompt.** Push for these steps: turn the notes into a specification, split must-haves from nice-to-haves, write the reply form, then build the scoring sheet. Every line of the specification must be something a supplier can price.
2. **Interview.** The AI should ask for quantities, delivery place and date, quality standards and the closing date. It should ask how replies will be scored, because suppliers must be told and the reply form must collect it.
3. **Template.** The input page takes the notes and the closing date. The result page has three parts that print apart: the request itself, the supplier's reply form and the scoring sheet for the delegate's own use.
4. **Program.** The program checks that scoring weights add to 100 and that every scored item has a field on the reply form. It also checks that the closing date is a working day and falls after the question deadline.
5. **Tests.** Ask for notes with no quantity, a service in place of goods, a closing date on a public holiday and a scoring item with nothing to collect it. Hand the reply form to a neighbour to fill in.

### 17. Supplier quote comparison

1. **Prompt.** Push for these steps: pull the same list of facts from each quote, put all three on the same basis, work out the cost over the life of the purchase, then recommend. Anything a quote leaves out must be listed, never assumed.
2. **Interview.** The AI should ask how long the item will be used, the running and service costs, and what the delegate's money costs per year. It should ask how much weight non-price factors such as warranty carry.
3. **Template.** The input page takes the three quotes and the years of use. The result page shows one column per supplier with the same rows, the lifetime cost in large type and a list of what each quote left out.
4. **Program.** The program puts every price on the same VAT basis, adds delivery and running costs, and values the payment terms. Paying in 60 days is worth more than paying upfront. It converts any foreign price at a stated rate.
5. **Tests.** Ask for one quote without VAT and two with, a quote in dollars, a cheaper item with a short life and a quote with a 50 percent deposit. Add a quote that leaves out delivery.

## People

### 18. CV shortlister

1. **Prompt.** Push for these steps: turn the job description into must-haves and scored criteria, check each CV against the must-haves, score the rest with evidence, then rank. Each score must quote the line in the CV behind it.
2. **Interview.** The AI should ask which requirements are true must-haves and how each criterion is weighted. Push for names, ages, photos and addresses to be removed before scoring, so the shortlist can be defended.
3. **Template.** The input page takes the job description, the weights and the CVs. The result page shows the ranked list, a card per candidate with scores and quoted evidence, and a list of those removed with the reason.
4. **Program.** The program removes anyone who fails a must-have, applies the weights, totals and ranks. It reports ties as ties. It also checks that every score has a quote behind it and rejects any score without one.
5. **Tests.** Ask for a strong CV that misses one must-have, two near-identical CVs, a CV in a different layout and a CV stuffed with words copied from the job description. Run the same CVs twice and compare the ranking.

### 19. Interview pack and panel score

1. **Prompt.** Push for these steps: compare the CV with the job description, list the gaps and unproven claims, write questions aimed at each one, then build the scoring sheet. Each question needs a note on what a good answer sounds like.
2. **Interview.** The AI should ask how many panel members there are, how long the interview is and which scale they use. It should ask which questions every candidate must get, so candidates can be compared fairly.
3. **Template.** There are two pages. The first is the pack: questions, what to listen for and a blank scoring sheet per panel member. The second takes each member's scores and shows the combined result.
4. **Program.** The program combines the panel's scores into an average per criterion and in total. It flags any criterion where members differ by two points or more, because those are what the panel must discuss.
5. **Tests.** Ask for a panel that agrees fully, one member who scores everyone low, a missing score and a CV with no gaps at all. Add a panel of one.

### 20. Roster checker

1. **Prompt.** Push for these steps: read the roster into a list of person, date, start and end, state the rules, check each rule, then report the breaks by person. The delegate must write their rules as numbers.
2. **Interview.** The AI should ask for the rules in force: rest between shifts, weekly rest, hours per week and nights in a row. In South Africa the law sets 12 hours of daily rest and 36 hours of weekly rest. Ask what "fair" means for weekends.
3. **Template.** The input page takes the roster file and the rule settings. The result page shows the roster as a grid with breaks marked in red, a list of breaks by person, and a fairness table of nights and weekends.
4. **Program.** The program does all the checking here, because every rule is a sum with dates and times. It works out the rest between shifts, hours per week and runs of nights. It counts weekends and nights per person against the average.
5. **Tests.** Ask for a shift that crosses midnight, a shift that crosses month end, one person on two shifts at once and a public holiday. Add a clean roster, where the tool must report no breaks.

### 21. Organisation chart reader

1. **Prompt.** Push for these steps: read the list, link each person to their manager, build the chart, count the layers and direct reports, then comment on the shape. The comment should name specific managers.
2. **Interview.** The AI should ask what counts as too many and too few direct reports for this company. It should ask how to show vacancies, contractors and people with two managers, and whether cost per layer matters.
3. **Template.** The input page takes the list as a pasted table. The result page shows a chart where each box opens and closes when clicked, with flagged managers coloured, and a summary of layers and average team size.
4. **Program.** The program builds the tree, counts the layers from top to bottom and counts each manager's direct reports. It catches errors in the list: a manager who is not listed, a loop and more than one person at the top.
5. **Tests.** Ask for a manager whose name is spelt two ways, a loop where A reports to B and B to A, a team of one and a manager with 25 reports. Add a list of 300 people to test speed.

### 22. Procedure from a voice note

1. **Prompt.** Push for these steps: turn the recording into text, put the steps in order, name the owner of each step, write the checklist, then write the quiz. People explain jobs out of order, so the ordering step matters most.
2. **Interview.** The AI should ask what goes wrong most often and what the worker does then. It should ask what must be true before step 1, who signs off and which steps carry a safety or money risk.
3. **Template.** The input page takes the transcript. The result page shows the numbered steps with owners, a checklist that prints on one page and a quiz with answers hidden until clicked.
4. **Program.** The program checks that every step has exactly one owner and that step numbers run without gaps. It checks that every checklist line and quiz question points to a real step number.
5. **Tests.** Ask for a transcript told backwards, one where two people share a step, one with a decision ("if the stock is short...") and one that rambles off the subject. Give the quiz to a neighbour.

## Operations and projects

### 23. Process map with the bottleneck

1. **Prompt.** Push for these steps: list the steps in order, name who does each, record the working time and waiting time for each, draw the diagram, then find the limiting step. Working time and waiting time must be kept apart.
2. **Interview.** The AI should ask how many people or machines work on each step and how many items arrive per day. It should ask which steps the customer would pay for, because only those add value.
3. **Template.** The input page is a table of steps, owners, working time, waiting time and staff. The result page shows a diagram with one row per person or team, the limiting step in red and the value-adding share as a figure.
4. **Program.** The program works out how many items each step can handle per hour, and the lowest is the limiting step. The longest step is not always the limiting one. It then divides value-adding time by total time from start to finish.
5. **Tests.** Ask for a long step with many staff and a short step with one person, two steps that run side by side, a step with no time given and a loop for rework. Add a process with only one step.

### 24. Project money check

1. **Prompt.** Push for these steps: read the task list, work out the value of work done, compare it with the spend and with the plan, forecast the final cost, then write the verdict. The verdict must come first on the page.
2. **Interview.** The AI should ask how percentage complete is measured, because guesses of "90 percent done" ruin the method. Push the delegate to add where each task should be by today. Without that figure the tool cannot judge the schedule.
3. **Template.** The input page is a table of tasks with budget, spend, percentage complete and planned percentage. The result page shows two dials for cost and time, the forecast final cost and the three worst tasks.
4. **Program.** The program works out earned value as budget times percentage complete. It divides earned value by spend for cost, and by planned value for time. The forecast final cost is the total budget divided by the cost figure.
5. **Tests.** Ask for a task with spend but no progress, a task over 100 percent, a finished project and a project that has not started. Work out one project by hand on paper.

### 25. WhatsApp group to action list

1. **Prompt.** Push for these steps: read the chat into dated messages by person, find the decisions, find the requests and who they were for, find the questions with no reply, then write the page. Each item must carry the date of its message.
2. **Interview.** The AI should ask what counts as a decision in this group, and how nicknames map to real people. It should ask which period to cover, and whether jokes and greetings are dropped.
3. **Template.** The input page takes the exported text file and a date range. The result page shows decisions, actions grouped by person and unanswered questions, each with its date and the number of days it has waited.
4. **Program.** The program reads each line into date, time, sender and message. Android and iPhone exports use different layouts, and it must handle both. It counts the days each request waited and sorts the longest wait first.
5. **Tests.** Ask for a message that runs over several lines, a voice note or photo with no text, a person who changed their name and a question answered three days later. Add a chat in two languages.

## Documents

### 26. Contract dates and duties

1. **Prompt.** Push for these steps: find every duty and who owes it, find every date and time limit, link each time limit to its starting event, work out the real dates, then build the page. Each entry must give its clause number.
2. **Interview.** The AI should ask for the date the contract started, because most deadlines count from it. It should ask whether days are calendar or business days, and how many days of warning the delegate wants before each deadline.
3. **Template.** The input page takes the contract and the start date. The result page shows a table of duties by party and a timeline of dates, with a button to download the calendar file.
4. **Program.** The program works out each real date from its rule, such as 90 days before the renewal date. It skips weekends and public holidays where the contract counts business days. It writes the calendar file with a reminder on each entry.
5. **Tests.** Ask for a notice period that ends on a Sunday, a renewal on 29 February, a deadline counted from an event that has not happened and a contract with no dates. Check the last day to give notice by hand.

### 27. Confidentiality agreement triage

1. **Prompt.** Push for these steps: find each key clause, compare it with the standard terms, rate each one green, amber or red, then give the verdict. A clause that is missing altogether must be rated too.
2. **Interview.** The AI should ask for the delegate's limits clause by clause: the longest term, the acceptable law and courts, and what must never be signed. Push for a list of clauses that do not belong, such as a ban on hiring.
3. **Template.** The input page takes the agreement and the standard terms. The result page shows the verdict in large type, then a table of clauses with the rating, the agreement's wording and the standard wording.
4. **Program.** The program applies the verdict rules, so the same ratings always give the same verdict. One red means refer to a lawyer, and any amber means negotiate. It also checks that every clause on the standard list received a rating.
5. **Tests.** Ask for an agreement that binds one side only, a term with no end date, a foreign court and a penalty clause hidden in the definitions. Add the delegate's own standard agreement, which must come back as "sign".

### 28. Case timeline

1. **Prompt.** Push for these steps: pull every dated event from every document, record the source and page for each, merge and sort them, then look for gaps and contradictions. The date a letter was written and the date of the event it describes are different things.
2. **Interview.** The AI should ask which gaps matter, such as more than 30 days with no action. It should ask how to treat vague dates such as "early March", and which people's accounts are likely to conflict.
3. **Template.** The input page takes the bundle. The result page shows a timeline running down the page, each entry with its source, long gaps marked and contradicting entries joined by a red line.
4. **Program.** The program sorts the entries by date and measures the days between them. It flags two entries that describe the same event with different dates. Undated and vague entries go in their own list and are never guessed.
5. **Tests.** Ask for a date written 03/04/2026 that could be March or April, an email chain in reverse order, the same event in two documents with different dates and an undated note. Check three entries against their sources.

### 29. Evidence brief with checked quotes

1. **Prompt.** Push for these steps: read each report, pull the passages that bear on the question, group them into claims, write the note, then attach a quote and page to each claim. Where reports disagree, the note must say so.
2. **Interview.** The AI should ask what question the brief answers and for whom. It should ask how to weigh a strong source against a weak one, and whether a claim backed by one report only is allowed.
3. **Template.** The input page takes the reports and the question. The result page shows the note with numbered claims. A click on a claim opens the quote, the report name and the page, with a green tick once checked.
4. **Program.** The program searches each source for each quote, word for word. It ignores differences in spacing, line breaks and the style of quotation marks. If a quote is not found, the program stops and names it.
5. **Tests.** Ask for a quote with one word changed, a quote that runs across two pages, a correct quote with the wrong page number and a scanned report. Plant one false quote and confirm that the tool refuses to deliver.

### 30. Claims checker

1. **Prompt.** Push for these steps: list every statement that can be checked, sort them into figures, facts and quotes, redo the sums, then name the source each claim needs. Opinions are left out, and the prompt must say how to tell the difference.
2. **Interview.** The AI should ask what kind of publication this is and how strict the standard is. It should ask which sources count as good enough, and whether the tool may look claims up or only list them.
3. **Template.** The input page takes the draft. The result page shows the draft with each claim highlighted in a colour for its status, beside a table of claims, the source needed and any sum that is wrong.
4. **Program.** The program recalculates every percentage, total and difference where the draft gives the figures behind it. It reports the draft's figure next to the correct one, and it flags percentages that should add to 100 but do not.
5. **Tests.** Ask for "rose 50 percent from 20 to 25", a mix-up of percent and percentage points, a total that is out by rounding only and a draft with no figures. Plant five errors and count how many the tool finds.
