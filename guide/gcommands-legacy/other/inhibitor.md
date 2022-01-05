# Inhibitor

Inhibitors always run before the command itself.  
Here is a blacklist example:

```js
let blacklist = (await client.database.get("blacklist")) || [];

client.dispatcher.addInhibitor((client, { respond, message, interaction, author }) => {
  if ((message) && blacklist.includes(author.id)) {
    respond({
      content: "You are blacklisted from using this bot!",
      ephemeral: true,
    });
    return false;
  } else if (
    interaction &&
    interaction.isMessageComponent() &&
    blacklist.includes(author.id)
  ) {
    interaction.reply.send({
      content: "You are blacklisted from interacting with this bot!",
      ephemeral: true,
    });
    return false;
  }

  return true;
});
```

```js
let blacklist = (await client.database.get("blacklist")) || [];

client.dispatcher.addInhibitor((client, { respond, interaction, message, author }) => {
  if (
    interaction &&
    interaction.isMessageComponent() &&
    blacklist.includes(author.id)
  ) {
    respond({
      content: `You are blacklisted from ${
        interaction.isButton() ? "pressing buttons" : "filling select menus"
      } from this bot!`,
      ephemeral: true,
    });
    return false;
  }

  return true;
});
```