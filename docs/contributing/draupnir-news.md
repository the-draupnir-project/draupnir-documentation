# Draupnir news

:::info

This guide explains how to:

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
   the message however you like, within the style guidelines.

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
      "news_id": "59e0dd6e-87da-4459-98ae-627c0f2a7d8b",
      "matrix_event_content": {
        "body": "Announcing the Draupnir Longhouse Assembly! https://matrix.to/#/!DtwZFWORUIApKsOVWi:matrix.org/%24GdBN1XqoOnAfc5tJgxhoXNoAdW2YUbS1Mtsb8LbzIJ4?via=matrix.org&via=feline.support&via=asgard.chat",
        "msgtype": "m.notice"
      }
    }
  ]
}
```

## Style Guidelines

TODO: We haven't really decided yet or if we need any.

## Creating a pull request for a news item

The pull request should contain the following:

- `DraupnirNews` in the title.
- A screenshot of the news content in the description.
- Any context of the news.

TODO: Link to an example.

## Reviewing a pull request for a news item

Reviewers should take care to verify that draupnir actually sends the content as
depicted in the screenshot or in any part of the pull request.
