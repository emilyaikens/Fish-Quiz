const quesAns = [
    {
        "question": "What does it mean if a fish is described as 'pelagic'?",
        "answer": [
            "It lives mid-water or open ocean",
            "It lives near the bottom",
            "It lives in seaweed",
            "It lives in coral"
        ]
    },
    {
        "question": "What is an otolith?",
        "answer": [
            "A sedimentary marine rock",
            "A species of fish described as a 'living fossil'",
            "The inner ear bone of a fish",
            "A coral-like structure created by cold-water fish"
        ]
    },    
    {
        "question": "What do fish use swim bladders for?",
        "answer": [
            "Maintaining buoyancy",
            "Storing nitrogenous waste",
            "A defense mechanism",
            "Reproduction"
        ]
    },    
    {
        "question": "Approximately how many described fish species are there in the world?",
        "answer": [
            "10,000",
            "30,000",
            "50,000",
            "80,000"
        ]
    },    
    {
        "question": "How can the age of a fish be determined?",
        "answer": [
            "Otoliths",
            "Scales",
            "Fin rays",
            "All of the above"
        ]
    },    
    {
        "question": "What does it mean if a fish is anadromous?",
        "answer": [
            "It migrates from the freshwater to the ocean to spawn",
            "It migrates from the ocean to freshwater to spawn",
            "It migrates from the Southern Hemisphere to the Northern Hemisphere to spawn",
            "It migrates from the Northern Hemisphere to the Southern Hemisphere to spawn"
        ]
    },    
    {
        "question": "Which of these fish has a cartilaginous skeleton??",
        "answer": [
            "Yellowtail Rockfish",
            "Swordfish",
            "Leopard Shark",
            "Hagfish"
        ]
    },    
    {
        "question": "How do fish communicate?",
        "answer": [
            "Swimming patterns",
            "Color changes",
            "Sound",
            "All of the above"
        ]
    },    
    {
        "question": "What are barbels?",
        "answer": [
            "Modified ganoid scales used as armor",
            "Small fatty fins located between the dorsal and caudal fin",
            "Fleshy projections often found on the chins and noses of certain fish",
            "External reproductive appendages found on male sharks, skates and rays"
        ]
    },    
    {
        "question": "Global fish stocks are at ____% of their historic numbers",
        "answer": [
            "70%",
            "50%",
            "30%",
            "10%"
        ]
    },    
    {
        "question": "What type of fish is this?",
        "answer": [
            "salmon",
            "cod",
            "rockfish",
            "sculpin"
        ]
    },    
    {
        "question": "Where is the operculum?",
        "answer": [
            "a",
            "b",
            "c",
            "d"
            ]
    },
]

const correctAnswers = [
    "It lives mid-water or open ocean",
    "The inner ear bone of a fish",
    "Maintaining buoyancy",
    "30,000",
    "All of the above",
    "It migrates from the ocean to freshwater to spawn",
    "Leopard Shark",
    "All of the above",
    "a",
    "10%",
    "rockfish",
    "b",
]

const explanations = [
    "Some examples of pelagic fish are tuna, mackerel, herring, and sunfish. Pelagic fish are often migratory and many pelagic fish species form schools. Conversely, a fish that lives near the bottom would be described as benthic. The terms pelagic and benthic are not specific to fish; these words are just descriptors for zones in the ocean or other body of water. ",
    "Fish use otoliths for hearing and vestibular function (a sense of equilibrium). Only bony fish have otoliths; sharks, rays and their relatives have a different anatomical paradigm for sensory input. Biologists can count layers of an otolith and determine the age of the fish, similar to counting rings in a tree! The size and shape of otoliths vary immensely between fish species.",
    "A swim bladder is a gas-filled organ that fish primarily use to control their buoyancy (maintain their position in the water column). Some fish also use their swim bladders to communicate. When a fish is pulled to the surface too quickly, the air in their swim bladders expands and can cause barotrauma. Cartilaginous fish, like sharks and rays, do not have swim bladders. ",
    "30,000 is a lot of species (more than reptiles, birds, and mammals combined!), but those are just the ones that have been documented! Some scientists estimate that we’ve only discovered about half of the fish species that exist on earth. Only about 20% of the ocean has been well observed and documented, not to mention the unexplored freshwater systems. With over 200 fish species described every year, there is so much left to learn and discover!",
    "Yup, all of those methods can be used to age a fish! Scales are the most common aging method, since collecting them is non-lethal. Scale growth rings can be counted to determine age, but this method is less reliable as the fish gets older. Otoliths are also common and more accurate, but the otolith aging can usually only be used if the fish is deceased. Some fish species have predictable linear relationships between age and fish rays, but that method does not work for all fish. ",
    "Salmon are the best known example of anadromy, although lamprey and surgeons are also anadromous. These fish are born in freshwater but migrate to the ocean to mature. They then travel back to freshwater to reproduce. The opposite of this is catadromy. ",
    "Sharks, rays, skates, sawfish, and ratfish are all examples of cartilaginous fish. Cartilaginous fish are all in a class called Chondrichthyes and share a number of features, including a skeleton made mostly out of cartilage rather than bone.",
    "Fish can communicate in so many ways! It varies immensely from species to species, but fish can have incredibly complex communication methods. Some cool examples: Rockfish grunt to one another and have a variation in grunt tones and frequencies that correlate to a huge number of different meanings. When herring school, they communicate by farting. Many deep sea species glow in the dark with different patterns to communicate. Perch males dance to impress females. And that’s just a few!",
    "Barbels are sensory filaments that can look a like whiskers. In fact, the word comes from the Latin word for Little Beard. Fish use them to smell, taste, and feel their surroundings. Barbels are often found on bottom-feeding fish or fish that live in water with low visibility. Some examples of fish with barbels: cod, carp, sturgeon, and catfish.",
    "Globally, fish stocks are estimated to be at only 10% of their historic numbers. Sadly, the vast majority of commercially targeted fish are considered to be overexploited. This number is difficult to calculate, as it can be hard to document illegal fishing operations, but even with often unreliable catch data, scientists can compare current species population numbers to historical numbers and get a fairly good sense of how overharvesting has affected them. Fishing is not inherently bad, but when fish populations decline too much, there are serious ecological implications with long-term effects. ",
    "Rockfish, Sebastidae, are a diverse group of fish with amazing life histories. Many species can live to around 200 years. They grow slowly and get better at reproducing the older and bigger they get (some don’t start reproducing until they are in their 20’s!). Unfortunately most rockfish populations are only a fraction of their historical size and face substantial fishing pressure. Rockfish are sometimes incorrectly called Rock Cod, Snapper, or Sea Bass.",
    "An operculum is a bony flap that protects the gills of a fish. The nostrils of a fish (a) are called nares. c is the adipose fin, d is the lateral line.",
]

const images = [
    "https://i.imgur.com/ELPsbB0.png",
    "https://i.imgur.com/7kALN1w.png",
    "https://i.imgur.com/BtSXY7F.png",
    "https://i.imgur.com/RTAJ4Zw.png",
    "https://i.imgur.com/uOE3aHY.png",
    "https://i.imgur.com/vbBOGnp.png",
    "https://i.imgur.com/7e2qO3e.png",
    "samplehtml",
    "samplehtml",
    "samplehtml",
    "https://i.imgur.com/3qgMlT2.png",
    "samplehtml",
]

module.exports = {
    quesAns,
    correctAnswers,
    explanations,
    images,
}

