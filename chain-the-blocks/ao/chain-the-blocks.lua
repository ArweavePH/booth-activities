local json = require("json")

-- Players = { { DiscordName = "theointech", TimeInMs = 10000 } }
Players = Players or {}

Questions = {
    {
        Question = "What is a blockchain?",
        Answer = 3,
        Options = {
            "A type of chain used in mechanical devices.",
            "A social media platform.",
            "A decentralized, distributed ledger that records transactions across many computers.",
            "A database controlled by a single entity."
        }
    },
    {
        Question = "Which of the following is a key characteristic of blockchain technology?",
        Answer = 4,
        Options = {
            "Centralized control.",
            "High transaction fees.",
            "Slow transaction times.",
            "Immutability."
        }
    },
    {
        Question = "True or False: Data stored on a blockchain can be easily altered or deleted.",
        Answer = 1, -- False is the correct answer
        Options = {
            "False.",
            "True."
        }
    },
    {
        Question = "What is a 'node' in a blockchain network?",
        Answer = 1,
        Options = {
            "A computer that maintains a copy of the blockchain and processes transactions.",
            "A smart contract.",
            "A type of cryptocurrency.",
            "A user account."
        }
    },
    {
        Question = "What does 'decentralization' mean in blockchain technology?",
        Answer = 2,
        Options = {
            "Control is centralized in one authority.",
            "Control is distributed across multiple nodes with no single point of failure.",
            "Control is only in the hands of developers.",
            "Control is limited to miners only."
        }
    },
    {
        Question = "What is 'mining' in blockchain?",
        Answer = 3,
        Options = {
            "Creating new cryptocurrencies illegally.",
            "Deleting old transactions from the blockchain.",
            "The process of adding new transactions to the blockchain and securing the network.",
            "Extracting minerals from the earth."
        }
    },
    {
        Question = "What does 'immutability' mean in blockchain?",
        Answer = 2,
        Options = {
            "Data is encrypted.",
            "Data cannot be changed once it's recorded.",
            "Data is public.",
            "Data can be changed or altered at any time."
        }
    },
    {
        Question = "Which of the following is the first cryptocurrency to use blockchain technology?",
        Answer = 2,
        Options = {
            "Arweave.",
            "Bitcoin.",
            "Ethereum.",
            "Dogecoin."
        }
    },
    {
        Question = "What is a 'smart contract'?",
        Answer = 4,
        Options = {
            "A legal contract that is smarter than usual.",
            "An agreement between miners.",
            "A feature that allows for faster transactions.",
            "Self-executing code with the terms of the agreement directly written into code."
        }
    },
    {
        Question = "True or False: All blockchains require mining to function.",
        Answer = 2, -- False is the correct answer
        Options = {
            "True.",
            "False."
        }
    },
    -- Arweave Questionss
    {
        Question = "What is Arweave?",
        Answer = 2,
        Options = {
            "A blockchain protocol for temporary data storage.",
            "A decentralized storage network that aims to provide permanent data storage.",
            "A new social media platform.",
            "A cryptocurrency exchange."
        }
    },
    {
        Question = "What makes Arweave different from other blockchains?",
        Answer = 2,
        Options = {
            "It uses a Proof of Work consensus mechanism.",
            "It offers permanent data storage with a single upfront fee.",
            "It is faster than the speed of light.",
            "It supports smart contracts written in Solidity."
        }
    },
    {
        Question = "What consensus mechanism does Arweave use?",
        Answer = 4,
        Options = {
            "Proof of Work.",
            "Proof of Stake.",
            "Proof of History.",
            "Proof of Access."
        }
    },
    {
        Question = "What is the 'Permaweb' in Arweave?",
        Answer = 2,
        Options = {
            "A web browser.",
            "A collection of apps and websites that live on Arweave's blockchain and are permanently available.",
            "A temporary file storage system.",
            "A web hosting company."
        }
    },
    {
        Question = "True or False: Data stored on Arweave can be altered or deleted.",
        Answer = 1, -- False is the correct answer
        Options = {
            "False.",
            "True."
        }
    },
    {
        Question = "What is the native token of the Arweave network?",
        Answer = 1,
        Options = {
            "AR.",
            "WEAVE.",
            "AW.",
            "ARW."
        }
    },
    {
        Question = "What is 'Proof of Access' in Arweave?",
        Answer = 3,
        Options = {
            "A password protection method.",
            "A way to access your account.",
            "A consensus mechanism that requires miners to provide proof of storing a randomly selected previous block.",
            "A method for verifying identity."
        }
    },
    {
        Question = "Which programming language is primarily used to develop applications on Arweave?",
        Answer = 1,
        Options = {
            "JavaScript.",
            "Solidity.",
            "Python.",
            "C++."
        }
    },
    {
        Question = "What problem does Arweave aim to solve?",
        Answer = 2,
        Options = {
            "Slow transaction speeds in cryptocurrencies.",
            "The high cost and impermanence of data storage.",
            "The need for centralized servers.",
            "The lack of mobile wallets."
        }
    },
    {
        Question = "True or False: Arweave allows users to pay once to store data forever.",
        Answer = 1, -- True is the correct answer
        Options = {
            "True.",
            "False."
        }
    },
    -- AO (Actor-Oriented) Questionss
    {
        Question = "What does 'AO' stand for in the context of Arweave?",
        Answer = 2,
        Options = {
            "Autonomous Organization.",
            "Actor-Oriented.",
            "Arweave Oracle.",
            "Access Optimization."
        }
    },
    {
        Question = "What is 'AO' on Arweave?",
        Answer = 2,
        Options = {
            "A consensus algorithm used by Arweave.",
            "A framework for building decentralized applications using the actor model.",
            "A type of smart contract written in Solidity.",
            "A cryptocurrency exchange platform."
        }
    },
    {
        Question = "In the context of AO on Arweave, what is an 'actor'?",
        Answer = 3,
        Options = {
            "A person performing in a movie.",
            "A cryptocurrency trader.",
            "An independent process that communicates by sending and receiving messages.",
            "A node that validates transactions."
        }
    },
    {
        Question = "How do AO actors communicate with each other?",
        Answer = 2,
        Options = {
            "Through centralized servers.",
            "By sending and receiving messages stored on the Arweave network.",
            "Via email.",
            "Through direct database connections."
        }
    },
    {
        Question = "Which programming paradigm does AO on Arweave utilize?",
        Answer = 3,
        Options = {
            "Functional programming.",
            "Object-oriented programming.",
            "Actor model programming.",
            "Procedural programming."
        }
    },
    {
        Question = "True or False: AO allows developers to write distributed applications as a collection of independent actors.",
        Answer = 1, -- True is the correct answer
        Options = {
            "True.",
            "False."
        }
    },
    {
        Question = "What is a key advantage of using AO on Arweave?",
        Answer = 2,
        Options = {
            "It allows for centralized control over data.",
            "It enables applications to scale efficiently by distributing workload among actors.",
            "It reduces the need for encryption.",
            "It makes applications run offline."
        }
    },
    {
        Question = "Which language is commonly used to write AO applications on Arweave?",
        Answer = 1,
        Options = {
            "Lua.",
            "Solidity.",
            "Python.",
            "Rust."
        }
    },
    {
        Question = "What is the main purpose of the actor model in AO on Arweave?",
        Answer = 2,
        Options = {
            "To create more complex smart contracts.",
            "To manage concurrent operations and communication in decentralized applications.",
            "To improve mining efficiency.",
            "To enhance user interface design."
        }
    },
    {
        Question = "True or False: In AO on Arweave, actors share state directly with each other.",
        Answer = 2, -- False is the correct answer
        Options = {
            "True.",
            "False."
        }
    },
    {
        Question = "What is the benefit of actors not sharing state directly in AO on Arweave?",
        Answer = 3,
        Options = {
            "It slows down the system.",
            "It increases storage costs.",
            "It simplifies concurrency and avoids issues with shared state.",
            "It makes the system less secure."
        }
    },
    {
        Question = "How are messages between actors stored in AO on Arweave?",
        Answer = 2,
        Options = {
            "In temporary memory.",
            "As transactions on the Arweave blockchain.",
            "On centralized servers.",
            "In off-chain databases."
        }
    },
    {
        Question = "Which of the following best describes the actor model used in AO on Arweave?",
        Answer = 2,
        Options = {
            "A design pattern for databases.",
            "A concurrency model where actors are the fundamental units of computation.",
            "A user interface framework.",
            "A mining algorithm."
        }
    },
    {
        Question = "True or False: Actors in AO on Arweave can create new actors.",
        Answer = 1, -- True is the correct answer
        Options = {
            "True.",
            "False."
        }
    },
    {
        Question = "What is a potential use case for AO on Arweave?",
        Answer = 1,
        Options = {
            "Building decentralized applications that require complex coordination between components.",
            "Hosting centralized web servers.",
            "Developing hardware drivers.",
            "Creating standalone desktop applications."
        }
    },
    {
        Question = "Which of the following is NOT a characteristic of AO on Arweave?",
        Answer = 2,
        Options = {
            "Actors communicate via message passing.",
            "Actors share state directly.",
            "Actors are independent processes.",
            "Actors' messages are stored on the blockchain."
        }
    },
    {
        Question = "True or False: The actor model helps in avoiding issues related to concurrency in distributed applications.",
        Answer = 1, -- True is the correct answer
        Options = {
            "True.",
            "False."
        }
    },
    {
        Question = "How does AO on Arweave handle the execution of actors?",
        Answer = 4,
        Options = {
            "Actors are executed by miners as part of block validation.",
            "Actors are executed locally by users.",
            "Actors are scheduled and run on centralized servers.",
            "Actors execute automatically when their messages are processed."
        }
    },
    {
        Question = "What advantage does Arweave's permanent storage offer to AO applications?",
        Answer = 2,
        Options = {
            "It allows actors to have temporary storage.",
            "It enables actors to rely on data being always available, enhancing reliability.",
            "It reduces the security of the application.",
            "It increases the cost of running the application."
        }
    },
    {
        Question = "Which of the following is true about messages in AO on Arweave?",
        Answer = 2,
        Options = {
            "Messages are lost if not immediately processed.",
            "Messages are stored permanently on Arweave, ensuring they can be processed at any time.",
            "Messages are stored off-chain to save space.",
            "Messages are encrypted and unreadable to actors."
        }
    },
    {
        Question = "What is the primary benefit of using blockchain technology?",
        Answer = 2,
        Options = {
            "Increased paperwork.",
            "Secure, transparent, and tamper-proof record-keeping.",
            "Slower transaction times.",
            "Higher costs for data storage."
        }
    },
    {
        Question = "What does 'tokenization' mean in blockchain?",
        Answer = 1,
        Options = {
            "Representing real-world assets as digital tokens on the blockchain.",
            "Collecting tickets at an arcade.",
            "Exchanging emails for tokens.",
            "Converting text into code."
        }
    },
    {
        Question = "Which term describes a system where data is not stored on a central server?",
        Answer = 2,
        Options = {
            "Centralized.",
            "Decentralized.",
            "Synchronized.",
            "Organized."
        }
    },
    {
        Question = "What is 'consensus' in blockchain networks?",
        Answer = 1,
        Options = {
            "Agreement among network participants on the state of the ledger.",
            "A disagreement over data.",
            "A feature that slows down the network.",
            "A method for encrypting data."
        }
    },
    {
        Question = "True or False: Arweave's storage solution is temporary.",
        Answer = 2, -- False is the correct answer
        Options = {
            "True.",
            "False."
        }
    }
}

Handlers.add( -- Add a new message handler
  "Fetch-Questions", -- Name of the handler
  { Action = "Fetch-Questions" }, -- Pattern to match incoming messages
  function(msg) -- Handler function that receives the message
    local numQuestions = #Questions -- Get total number of questions
    local randomQuestions = {} -- Initialize array to store random questions
    local used = {} -- Track which questions have been used

    for i = 1, 3 do -- Loop 3 times to get 3 random questions
      local randomIndex -- Will store the random index
      repeat
        randomIndex = math.random(1, numQuestions) -- Get random number between 1 and total questions
      until not used[randomIndex] -- Keep trying until we get an unused question
      
      used[randomIndex] = true -- Mark this question as used
      randomQuestions[i] = Questions[randomIndex] -- Add the random question to our array
    end

    local res = json.encode({
        Success = true,
        Message = "Fetched questions.",
        Data = randomQuestions
    })

    Handlers.utils.reply(res)(msg) -- Send back JSON string of random questions
  end
)

-- Log the players after they've finished the quiz
Handlers.add(
    "Log-Player",
    { Action = "Log-Player" },
    function(msg)
        local data = json.decode(msg.Data)

        table.insert(Players, {
            DiscordName = data.DiscordName,
            TimeInMs = data.TimeInMs
        })

        local res = json.encode({
            Success = true,
            Message = "Player logged.",
            Data = data
        })
        Handlers.utils.reply(res)(msg)
    end
)

-- List the players for admin stats
Handlers.add(
    "List-Players",
    { Action = "List-Players" },
    function(msg)
        local res = json.encode({
            Success = true,
            Message = "Listed players.",
            Data = Players
        })
        Handlers.utils.reply(res)(msg)
    end
)