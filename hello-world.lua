local pretty = require(".pretty")
local json = require("json")

Participants = Participants or {}
Logs = Logs or {}

Handlers.add(
    "HelloWorld",
    Handlers.utils.hasMatchingTag("Action", "HelloWorld"),
    function(msg)
        table.insert(Participants, {
            message = msg.Message,
            name = msg.Codename
        })

        local message = "\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n\n" ..
            "Hello, " ..
            Colors.blue .. msg.Codename .. Colors.reset ..
            "! Welcome to Arweave PH!\n" ..
            "Congrats! You just successfully sent your very first blockchain message in ao! 🎉\n\n" ..
            Colors.red ..
            "Next steps: " .. Colors.reset .. "\n1. Scan the QR to follow our socials and join our discord.\n" ..
            "2. Start spinning the wheel to claim your prize! 🎁\n" ..
            "\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n"

        ao.send({
            Target = msg.From,
            Action = "Listen",
            Data = message,
        })
    end
)

Handlers.add(
    "CountParticipants",
    Handlers.utils.hasMatchingTag("Action", "CountParticipants"),
    function(msg)
        local count = 0
        for _ in pairs(Participants) do count = count + 1 end
        ao.send({
            Target = msg.From,
            Action = "Listen",
            Data = "No. of Participants: " .. count,
        })
    end
)

Handlers.add(
    "ListParticipants",
    Handlers.utils.hasMatchingTag("Action", "ListParticipants"),
    function(msg)
        ao.send({
            Target = msg.From,
            Action = "Listen",
            Data = pretty.tprint(Participants, 2),
        })
    end
)

Handlers.add(
    "ClearParticipants",
    Handlers.utils.hasMatchingTag("Action", "ClearParticipants"),
    function(msg)
        Participants = {}
        ao.send({
            Target = msg.From,
            Action = "Listen",
            Data = "Participants list cleared!",
        })
    end
)
