# Draupnir news

:::info

This guide explains:

1. Editing and viewing news items locally.
2. What the style guidelines are for news items.
3. What should be included in the pull request to release news items.
4. The review process for news items.

:::

## Where does Draupnir news come from?

Draupnir news is requested from the github repository main branch version of
`src/protections/DraupnirNews/draupnir_news.json`. Additionally, the local
source version of this file is also used to source news. Editing news involves
editing the local copy of the news file.

## Editing and viewing news items locally

The process for editing news items goes as follows:

1. Use a Matrix client of your choice to format a Matrix message announcing the
   news. This is just the same as writing a message, use markdown to structure
   the message however you like, within the style guidelines. You are probably
   better off just copying the markdown from a similar event if that is easier.

2. Once you are happy you can send the event to a test room.

3. View the event source and copy the event content into your local
   `draupnir_news.json`.

4. Create a UUID v4 for the news item. This can be done just by using
   `node -e "console.log(crypto.randomUUID())"` or an equivalent command.

Your Draupnir news should look something like this:

<!-- cspell:ignore msgtype -->

```json
{
  "news": [
    {
      "news_id": "cd1881d2-60d0-49ad-9951-321205efa64b",
      "matrix_event_content": {
        "msgtype": "m.notice",
        "body": "#### 📰 Draupnir Assembly: Call for Participation\n\nThe Longhouse Assembly is determining the next direction for the project.\n\nReview the current cycle and cast your vote:\n\n➡️ [Join the Assembly Discussion](https://matrix.to/#/!DtwZFWORUIApKsOVWi:matrix.org?via=matrix.org&via=feline.support&via=asgard.chat)",
        "format": "org.matrix.custom.html",
        "formatted_body": "<h4>📰 Draupnir Assembly: Call for Participation</h4>\n<p>The Longhouse Assembly is determining the next direction for the project.</p>\n<p>Review the current cycle and cast your vote:</p>\n<p>➡️ <a href=\"https://matrix.to/#/!DtwZFWORUIApKsOVWi:matrix.org?via=matrix.org&amp;via=feline.support&amp;via=asgard.chat\">Join the Assembly Discussion</a></p>\n"
      }
    }
  ]
}
```

## Style Guidelines

1. Use a small header (`<h4>`) with boldface and an emoji to make it look
   professional e.g. `#### 📰 Draupnir Assembly: Call for Participation`.

2. Keep the message 1-2 sentences long and link directly to the subject matter.

3. Try to base your message off of previous events.

## Creating a pull request for a news item

The pull request should contain the following:

- `DraupnirNews` in the title.
- A screenshot of the news content in the description.
- Any context of the news.
- The client used to design the message.

The pull request should remain a draft until you are sure that it is ready to
merge. This prevents accidents.

Here is an example pull request:
https://github.com/the-draupnir-project/Draupnir/pull/984

## Reviewing a pull request for a news item

Reviewers should take care to verify that draupnir actually sends the content as
depicted in the screenshot or in any part of the pull request.
