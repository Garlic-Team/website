# Mentions

Toggling certain mentions on/off.  
You can parse specific mention types in `allowedMentions.parse`

Here's the list:

- users
- roles
- everyone

You can also whitelist specific User/Role ID's in `allowedMentions.users` and `allowedMentions.roles`.

Example:

```js
await channel.send({
  content: `1 Pong, <@491999008106217473>!`,
  allowedMentions: { parse: [], users: ["491999008106217473"] },
});
await channel.send({
  content: `2 Pong, <@491999008106217473>!`,
  allowedMentions: { parse: [] },
});
await channel.send({
  content: `3 Pong, <@491999008106217473>!`,
  allowedMentions: { parse: ["users"] },
});
```
