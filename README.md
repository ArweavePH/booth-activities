# Booth Activities for Arweave Philippines

## Hello world!

#### Processes

`WihndUtElpPZFHAZ97GXhLnLIYl82RpVP9tYrvIECeU`

#### How to use?

1. Enter an ao process.
2. HelloWorld = "`WihndUtElpPZFHAZ97GXhLnLIYl82RpVP9tYrvIECeU`"
3. Open the `.editor` and type in:

```
Handlers.add(
    "Listener",
    Handlers.utils.hasMatchingTag("Action", "Listen"),
    function(msg)
        print(msg.Data)
    end
)
```

Once done, do `.done` and submit. 4. For participants:

```
Send({ Target = HelloWorld, Action = "HelloWorld", Codename = "<insert name>", Message = "<insert message>" })
```

5. List the Participants:

```
Send({ Target = HelloWorld, Action = "ListParticipants" })
```

6. Count the Participants:

```
Send({ Target = HelloWorld, Action = "CountParticipants" })
```

7. Clear the Participants:

```
Send({ Target = HelloWorld, Action = "ClearParticipants" })
```
