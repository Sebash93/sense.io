# Sense.io

Sense Io provides realtime data of your connected sensors

## Run the project

Go to the client folder

```bash
cd ./client
```

Make sure the server is running previously, then run

```bash
yarn install && yarn start
```

## Questions

### What aspect of this exercise did you find most interesting?

I found interesting that this was a scenario where the data doesn't work in a conventional way, it's event based data that needs to be parsed and requires an special data-flow approach. It was a challenge identifying what was the best and most performant way to set the data to flow.

### What did you find most cumbersome to do?

Same response as above, because of the quantity of events, having a conventional object-like data structure was that was passed down from parents to children was not a good approach, since the entire object was changing with every new event, so i had to think a different aproach where i could listen to the values of the sensors inside each sensor component instead of drilling down that data. It was also cumbersome because i also had to keep the parent components updated with the connection status of the sensors so i could do the filtering.

### How can we further improve the user experience?

Because of the time constrain i wasn't able to do much in terms of UI, however i would have included:

- Loading and connecting states
- Error states and connection lost states
- Allow the user to restart the socket connection
- More visually appealing "0 sensors" state
- Incase of adding many sensors we could use a way to visualize them through categories
