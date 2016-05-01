angular.module('app.services', [])

.factory('BlankFactory', [function(){

  /*
  getCategories = function($scope){
    $scope.categories = [
      {
        "id": 1,
        "category": "Aging"
      },
      {
        "id": 2,
        "category": "Angels"
      },
      {
        "id": 3,
        "category": "Anger"
      },
      {
        "id": 4,
        "category": "Announcement"
      },
      {
        "id": 5,
        "category": "Asking for Help"
      },
      {
        "id": 6,
        "category": "Attitude"
      },
      {
        "id": 7,
        "category": "Beginning With Him"
      },
      {
        "id": 8,
        "category": "Best in Others"
      },
      {
        "id": 9,
        "category": "Bible"
      },
      {
        "id": 10,
        "category": "Blessings"
      },
      {
        "id": 11,
        "category": "Breast Cancer Awareness"
      },
      {
        "id": 12,
        "category": "Burdens"
      },
      {
        "id": 13,
        "category": "Choices"
      },
      {
        "id": 14,
        "category": "Christmas"
      },
      {
        "id": 15,
        "category": "Church Life"
      },
      {
        "id": 16,
        "category": "Commitment"
      },
      {
        "id": 17,
        "category": "Communion"
      },
      {
        "id": 18,
        "category": "Compassion"
      },
      {
        "id": 19,
        "category": "Computer"
      },
      {
        "id": 20,
        "category": "Control"
      },
      {
        "id": 21,
        "category": "Courage"
      },
      {
        "id": 22,
        "category": "Criticism"
      },
      {
        "id": 23,
        "category": "Cross"
      },
      {
        "id": 24,
        "category": "Crucifixion"
      },
      {
        "id": 25,
        "category": "Death"
      },
      {
        "id": 26,
        "category": "Differences in People"
      },
      {
        "id": 27,
        "category": "Discipleship"
      },
      {
        "id": 28,
        "category": "Discrimination"
      },
      {
        "id": 29,
        "category": "Drunk Driving"
      },
      {
        "id": 30,
        "category": "Easter"
      },
      {
        "id": 31,
        "category": "Evangelism"
      },
      {
        "id": 32,
        "category": "Existance of God"
      },
      {
        "id": 33,
        "category": "Faith"
      },
      {
        "id": 34,
        "category": "Family"
      },
      {
        "id": 35,
        "category": "Fathers Day"
      },
      {
        "id": 36,
        "category": "Forgiveness"
      },
      {
        "id": 37,
        "category": "Free Choice"
      },
      {
        "id": 38,
        "category": "Friends"
      },
      {
        "id": 39,
        "category": "Giving"
      },
      {
        "id": 40,
        "category": "Gods Love"
      },
      {
        "id": 41,
        "category": "Gods Protection"
      },
      {
        "id": 42,
        "category": "Gods Will"
      },
      {
        "id": 43,
        "category": "Good Friday"
      },
      {
        "id": 44,
        "category": "Good vs. Evil"
      },
      {
        "id": 45,
        "category": "Grace"
      },
      {
        "id": 46,
        "category": "Graduation"
      },
      {
        "id": 47,
        "category": "Grief"
      },
      {
        "id": 48,
        "category": "Halloween"
      },
      {
        "id": 49,
        "category": "Happiness"
      },
      {
        "id": 50,
        "category": "Hardships"
      },
      {
        "id": 51,
        "category": "Heaven"
      },
      {
        "id": 52,
        "category": "Hell"
      },
      {
        "id": 53,
        "category": "Help"
      },
      {
        "id": 54,
        "category": "Helping Others"
      },
      {
        "id": 55,
        "category": "Honesty"
      },
      {
        "id": 56,
        "category": "Hope"
      },
      {
        "id": 58,
        "category": "Integrity"
      },
      {
        "id": 59,
        "category": "Jesus"
      },
      {
        "id": 60,
        "category": "Judging Others"
      },
      {
        "id": 61,
        "category": "Justice"
      },
      {
        "id": 62,
        "category": "Kids"
      },
      {
        "id": 63,
        "category": "Kindness"
      },
      {
        "id": 64,
        "category": "Life"
      },
      {
        "id": 65,
        "category": "Listening to God"
      },
      {
        "id": 66,
        "category": "Living Your Faith"
      },
      {
        "id": 67,
        "category": "Lost Faith"
      },
      {
        "id": 68,
        "category": "Love"
      },
      {
        "id": 69,
        "category": "Marriage"
      },
      {
        "id": 70,
        "category": "Martin Luther King, Jr."
      },
      {
        "id": 71,
        "category": "Memorial Day"
      },
      {
        "id": 72,
        "category": "Ministry"
      },
      {
        "id": 73,
        "category": "Miracles"
      },
      {
        "id": 74,
        "category": "Mission"
      },
      {
        "id": 75,
        "category": "Mother Day"
      },
      {
        "id": 77,
        "category": "New Year"
      },
      {
        "id": 78,
        "category": "Parenting"
      },
      {
        "id": 79,
        "category": "Patience"
      },
      {
        "id": 80,
        "category": "Peace"
      },
      {
        "id": 81,
        "category": "Perseverance"
      },
      {
        "id": 82,
        "category": "Perspective"
      },
      {
        "id": 83,
        "category": "Pets"
      },
      {
        "id": 84,
        "category": "Pornography"
      },
      {
        "id": 85,
        "category": "Prayer"
      },
      {
        "id": 86,
        "category": "Prejudice"
      },
      {
        "id": 87,
        "category": "Priorities"
      },
      {
        "id": 88,
        "category": "Problems"
      },
      {
        "id": 89,
        "category": "Promises"
      },
      {
        "id": 90,
        "category": "Puzzle"
      },
      {
        "id": 91,
        "category": "Reaction To Others"
      },
      {
        "id": 92,
        "category": "Redemption"
      },
      {
        "id": 93,
        "category": "Relationships"
      },
      {
        "id": 94,
        "category": "Relying on God"
      },
      {
        "id": 95,
        "category": "Resolutions"
      },
      {
        "id": 96,
        "category": "Resurrection"
      },
      {
        "id": 97,
        "category": "Revival"
      },
      {
        "id": 98,
        "category": "Salvation"
      },
      {
        "id": 99,
        "category": "Satan"
      },
      {
        "id": 100,
        "category": "School"
      },
      {
        "id": 101,
        "category": "Searching for God"
      },
      {
        "id": 102,
        "category": "Seize the Moment"
      },
      {
        "id": 103,
        "category": "Self-Esteem"
      },
      {
        "id": 104,
        "category": "Service"
      },
      {
        "id": 105,
        "category": "Serving God"
      },
      {
        "id": 106,
        "category": "Set Backs"
      },
      {
        "id": 107,
        "category": "Sex"
      },
      {
        "id": 108,
        "category": "Sin"
      },
      {
        "id": 111,
        "category": "Speeding"
      },
      {
        "id": 112,
        "category": "Strength"
      },
      {
        "id": 113,
        "category": "Stress"
      },
      {
        "id": 114,
        "category": "Success"
      },
      {
        "id": 115,
        "category": "Suicide"
      },
      {
        "id": 116,
        "category": "Sympathy"
      },
      {
        "id": 117,
        "category": "Temptation"
      },
      {
        "id": 120,
        "category": "Testimonial"
      },
      {
        "id": 121,
        "category": "Thanksgiving"
      },
      {
        "id": 122,
        "category": "Time"
      },
      {
        "id": 123,
        "category": "Tithe"
      },
      {
        "id": 124,
        "category": "Tolerance"
      },
      {
        "id": 125,
        "category": "Treating Others"
      },
      {
        "id": 126,
        "category": "Trust"
      },
      {
        "id": 131,
        "category": "Vacation"
      },
      {
        "id": 132,
        "category": "Valentine"
      },
      {
        "id": 133,
        "category": "Veteran Day"
      },
      {
        "id": 134,
        "category": "Violence"
      },
      {
        "id": 135,
        "category": "Wealth"
      },
      {
        "id": 136,
        "category": "Work"
      },
      {
        "id": 137,
        "category": "Worry"
      },
      {
        "id": 138,
        "category": "Worship"
      }
    ];
  }
},
getMessages = function($scope){
  $scope.messages = [
    {
      "id": 1,
      "title": "10 Little Christians",
      "text": "10 LITTLE CHRISTIANS\n\n10 Little Christians standing in line\n1 disliked the preacher, then there were 9\n\n9 little Christians stayed up very late\n1 overslept Sunday, then there were 8\n\n8 little Christians on their way to Heaven\n1 took the low road and then"
    },
    {
      "id": 2,
      "title": "10 Rules For A Blessed Day",
      "text": "10 RULES FOR A BLESSED DAY\n\n1. TODAY I WILL NOT STRIKE BACK . . . \nIf someone is rude, if someone is impatient, if someone is unkind, I will not respond in a like manner. \n\n2. TODAY I WILL ASK GOD TO BLESS MY 'ENEMY' \nIf I come across someone who treats m"
    },
    {
      "id": 3,
      "title": "16 Bible Books Puzzle",
      "text": "16 BIBLE BOOKS PUZZLE:\n\nThere are names of 16 books of the Bible mentioned in the paragraph below. See how many you can find.  HINT: The names be part of a word or part of two words put together.\n\n\n\"I once made a remark about the hidden books of the bible"
    },
    {
      "id": 5,
      "title": "19 Horses",
      "text": "19 HORSES\n\nOne rich man owned 19 horses when he died. In his last will and testament he had written that upon his death, half the horses he owned should go to his only son; one fourth to the village temple and one fifth to the faithful servant. The villag"
    },
    {
      "id": 6,
      "title": "27 Indications That We Need Revival",
      "text": "27 INDICATIONS THAT WE NEED REVIVAL\n\n1.. When we do not love Him as we once did.\n\n2.. When earthly interests and occupations are more important to us than eternal ones.\n\n3.. When we would rather watch TV and read secular books and magazines than read the"
    },
    {
      "id": 7,
      "title": "36 Stress Reducers",
      "text": "36 STRESS REDUCERS\n\n1. Pray\n2. Go to bed on time.\n3. Get up on time so you can start the day unrushed.\n4. Say No to projects that won't fit into your time schedule or that \nwill compromise your mental health.\n5. Delegate tasks to capable others.\n6. Simpli"
    },
    {
      "id": 8,
      "title": "A Big God",
      "text": "A BIG GOD\n\nThis is a story about a little girl who, on the way home from church, turned to her mother and said, \"Mommy, the Preacher's sermon this morning confused me.\"\n\nThe mother said, \"Oh! Why is that?\n\nThe girl replied, \"Well, he said that God is bigg"
    },
    {
      "id": 9,
      "title": "A Child Prayer",
      "text": "A CHILD'S PRAYER\n\nDear God, are You still awake?\nHave You got a minute or two?\nYou're pretty good at understanding,\nAnd I really need to talk to You.\n\nYou see, Mommy came to tuck me in,\nLike she does every night.\nI was trying to play a trick on her,\nSince"
    },
    {
      "id": 10,
      "title": "A Childs Angel",
      "text": "A CHILD'S ANGEL\n\nOnce upon a time there was a child ready to be born.  So one day he asked God:\n\nThey tell me you are sending me to earth tomorrow but how am I going to live there being so small and helpless?\n\nAmong the many angels, I chose one for you."
    },
    {
      "id": 13,
      "title": "A Christian Way To Reduce Stress",
      "text": "A CHRISTIAN'S WAY TO REDUCE STRESS\n\nAn Angel says, \"Never borrow from the future. If you worry about what may happen tomorrow and it doesn't happen, you have worried in vain. Even if it does happen, you have to worry twice.\" \n\n1. Pray\n\n2. Go to bed on tim"
    },
    {
      "id": 14,
      "title": "A Customer Service Call",
      "text": "A CUSTOMER SERVICE CALL:\n\nCustomer Service Rep: Hello, you have reached the Heart Systems Software Company help desk. How may I help you?\n\nCustomer: I just received your latest program, LOVEv4.0...you know...the freeware. I don't understand it. Can you te"
    },
    {
      "id": 15,
      "title": "A Date With The Other Woman",
      "text": "A DATE WITH THE OTHER WOMAN\n\nAfter 21 years of marriage, I discovered a new way of keeping alive the spark of love. A little while ago I started to go out with another woman. It was really my wife's idea.\n\n\"I know you love her,\" she said one day, taking m"
    },
    {
      "id": 16,
      "title": "A Different Kind of Prayer",
      "text": "A DIFFERENT TYPE OF PRAYER\n\nHeavenly Father, Help us remember that the jerk who cut us off in traffic last night is a single mother who worked nine hours that day and was rushing home to cook dinner, help with homework, do the laundry and spend a few prec"
    },
    {
      "id": 17,
      "title": "A Glass of Milk",
      "text": "A GLASS OF MILK\n\nOne day, a poor boy who was selling goods from door to door to pay his way through school, found he had only one thin dime left, and he was hungry.\n\nHe decided he would ask for a meal at the next house. However, he lost his nerve when a l"
    },
    {
      "id": 18,
      "title": "A Good Thing",
      "text": "A GOOD THING\n\nMay today there be peace within\n\nMay you trust your highest power that you are exactly where you are\n   meant to be\n\nMay you not forget the infinite possibilities that are born of faith\n\nMay you use those gifts that you have received, and pa"
    },
    {
      "id": 19,
      "title": "A Letter To A Friend",
      "text": "This was written by an 83-year-old woman to her friend.\n\nDear Friend, \n\nI'm reading more and dusting less. I'm sitting in the yard and admiring\nthe view without fussing about the weeds in the garden. I'm spending\nmore time with my family and friends and l"
    },
    {
      "id": 20,
      "title": "A Little Girls Prayer",
      "text": "A LITTLE GIRLS PRAYER\n\nHelen Roseveare, a missionary doctor from England to Zaire Africa, told\nthis as it happened to her in Africa.\n\n\"One night I had worked hard to help a mother in the labor ward; but in\nspite of all we could do she died leaving us with"
    },
    {
      "id": 22,
      "title": "A Love Letter",
      "text": "A LOVE LETTER\n\nMy Dear Child,\n\nYou had not come into this world by accident. I had created you in your mother�s womb with a great purpose for you. You were fearfully and wonderfully made. I had covered you in your mother�s womb. I clothed you with skin an"
    },
    {
      "id": 24,
      "title": "A Mother",
      "text": "A MOTHER'S WALK\n\nThe young mother set her foot on the path of life. \"Is this the long\nway?\" she asked. And the guide said: \"Yes, and the way is hard. And you\nwill be old before you reach the end of it. But the end will be better\nthan the beginning.\" But t"
    },
    {
      "id": 25,
      "title": "A New Version of Footprints",
      "text": "NEW VERSION OF FOOTPRINTS\n\nImagine you and the Lord Jesus are walking down the road together. For much of the way, the Lord's footprints go along steadily, consistently, rarely varying the pace. But your footprints are a disorganized stream of zigzags, st"
    },
    {
      "id": 26,
      "title": "A Pillow and a Blanket",
      "text": "A PILLOW AND A BLANKET\n\nA long time ago, a young, wealthy girl was getting ready for bed. She was saying her prayers when she heard a muffled crying coming through her window. A little frightened, she went over to the window and leaned out.\n\nAnother girl,"
    },
    {
      "id": 27,
      "title": "A Pink Ribbon",
      "text": "A NOTE FROM doug:  I realize this is a different type of message from E-Mail Ministry, but I thought it was important.\n\nA PINK RIBBON\n\nA handsome, middle-aged man walked quietly into the cafe and sat down.\nBefore he ordered, he couldn't help but notice a"
    },
    {
      "id": 28,
      "title": "A Prayer",
      "text": "A PRAYER\n\nDear Lord:\n\nEvery single evening\nAs I'm lying here in bed\nThis tiny little prayer\nKeeps running through my head.\n\nGod bless my mom and dad,\nAnd other family.\nKeep them warm and safe from harm\nFor they're so close to me.\n\nAnd God, there is one mo"
    },
    {
      "id": 29,
      "title": "A Simple Lesson",
      "text": "AM I MY BROTHER'S KEEPER? \n...THE HAND YOU PULL UP, MAY BE THE HAND THAT SAVES YOU! \n\nA SIMPLE LESSON: \n\nA rat looked through a crack in the wall to see the farmer and his wife opening a package. What food might it contain? He was aghast to discover that"
    },
    {
      "id": 30,
      "title": "A Story To Make Us Think",
      "text": "A STORY TO MAKE US THINK\n\nTwo men, both seriously ill, occupied the same hospital room. One man was allowed to sit up in his bed for an hour each afternoon to help drain the fluid from his lungs. His bed was next to the room's only window.\n\nThe other man"
    },
    {
      "id": 31,
      "title": "A Thousand Marbles",
      "text": "A THOUSAND MARBLES\n\nThe older I get, the more I enjoy Saturday mornings. Perhaps it's the quiet solitude that comes with being the first to rise, or maybe it's the unbounded joy of not having to be at work.  Either way, the first few hours of a Saturday m"
    },
    {
      "id": 32,
      "title": "A Trick",
      "text": "A TRICK\n\nA young man, a student in one of our universities, was one day taking a walk with a professor, who was commonly called the students' friend, from his kindness to those who waited on his instructions.\n\nAs they went along, they saw lying in the pat"
    },
    {
      "id": 33,
      "title": "A Walk In The Rain",
      "text": "A WALK IN THE RAIN\n\nShe must have been 6 years old, this beautiful brown haired, freckled-faced Image of innocence. Her Mom looked like someone from the Walton's or a moment captured by Norman Rockwell. Not that she was old-fashioned. Her brown hair was e"
    },
    {
      "id": 34,
      "title": "A Wonderful Remindere",
      "text": "A WONDERFUL REMINDER\n\nWhile praying one day a little girl asked,\n\"Who are you, Lord?\"\nHe answered, \"I Am\"\nBut, Who is I Am?\" she said.\nAnd He replied...\"I Am Love, I Am Peace,\nI Am Grace, I Am Joy,\nI Am the Way, Truth, and the Light\nI Am the Comforter,\nI"
    },
    {
      "id": 35,
      "title": "ABC of Being a Father",
      "text": "ABC OF BEING A FATHER\n\nA - Always trust them to God's care\nB - Bring them to church\nC - Challenge them to high goals\nD - Delight in their achievements\nE - Exalt the lord in their presence\nF - Frown on evil\nG - Give them love\nH - Hear their problems\nI - Ig"
    },
    {
      "id": 36,
      "title": "ABC of Multiculture",
      "text": "ABC's of MULTICULTURE\n\nA is for AWARENESS of those around us\nB is for BEAUTY for all people\nC is for CARING about each other\nD is for DIGNITY that we all possess\nE is for ETHNICITY ow which we would be proud\nF is for FEELING, important to us all\nG is for"
    },
    {
      "id": 37,
      "title": "Advice to Fathers About Children",
      "text": "ADVICE TO FATHERS ABOUT CHILDREN\n\nA - Always trust them to God's care\nB - Bring them to church\nC - Challenge them to high goals\nD - Delight in their achievements\nE - Exalt the lord in their presence\nF - Frown on evil\nG - Give them love\nH - Hear their prob"
    },
    {
      "id": 38,
      "title": "Advice to Parents About Children",
      "text": "ADVICE TO PARENTS ABOUT CHILDREN\n\nA - Always trust them to God's care\nB - Bring them to church\nC - Challenge them to high goals\nD - Delight in their achievements\nE - Exalt the Lord in their presence\nF - Frown on evil\nG - Give them love\nH - Hear their prob"
    },
    {
      "id": 39,
      "title": "All He Had To Offer",
      "text": "ALL HE HAD TO OFFER \n\nHere is a story, about a nine year old boy who lived in a rural town in Tennessee. His house was in a poor area of the community.  A church there had a bus ministry that came knocking on his door one Saturday afternoon.\n\nThe child ca"
    },
    {
      "id": 40,
      "title": "All We Really Need To Know We Learned From Noahs Ark",
      "text": "ALL WE REALLY NEED TO KNOW WE LEARNED FROM NOAH'S ARK\n\n1. Plan ahead. It wasn't raining when Noah built the ark.\n\n2. Stay fit. When you're 600 years old, someone might ask you to do \nsomething REALLY big.\n\n3. Don't listen to critics -- do what has to be d"
    },
    {
      "id": 41,
      "title": "Alphabet",
      "text": "ALPHABET\n\nA lthough things are not perfect\n\nB ecause of trial or pain\n\nC ontinue in thanksgiving\n\nD o not begin to blame\n\nE ven when the times are hard\n\nF ierce winds are bound to blow\n\nG od is forever able\n\nH old on to what you know\n\nI magine life withou"
    },
    {
      "id": 42,
      "title": "Alphabets of Happiness",
      "text": "ALPHABETS OF HAPPINESS\n\n* A--Accept *\nAccept others for who they are and for the choices they've made even if you have difficulty understanding their beliefs, motives, or actions.\n\n*B--Break Away *\nBreak away from everything that stands in the way of what"
    },
    {
      "id": 43,
      "title": "Always Look On The Inside",
      "text": "ALWAYS LOOK ON THE INSIDE\n\nI remember reading a story once about a man who was exploring some caves by the seashore. In one of the caves he found a canvas bag with a bunch of hardened clay balls. It was like someone had rolled up some clay and left them o"
    },
    {
      "id": 44,
      "title": "Always There",
      "text": "ALWAYS THERE\n  \n  Hello God, I called tonight\n  To talk a little while..\n  I need a friend who'll listen\n  To my anxiety and trial...\n  \n  You see, I can't quite make it\n  Through a day just on my own...\n  I need your love to guide me,\n  So I'll never fee"
    },
    {
      "id": 45,
      "title": "Amazing Grace",
      "text": "AMAZING GRACE\n\n\"Amazing Grace, how sweet the sound,\nThat saved a wretch like me....\nI once was lost but now am found,\nWas blind, but now, I see.\n\nT'was Grace that taught...\nmy heart to fear.\nAnd Grace, my fears relieved.\nHow precious did that Grace appear"
    },
    {
      "id": 46,
      "title": "An Angel Wrote",
      "text": "AN ANGEL WROTE:\n\nMany people will walk in and out or your life,\nbut only true friends will leave footprints in your heart.\n\nTo handle yourself, use your head,\nTo handle others, use your heart.\n\nAnger is only one letter short of danger.\n\nIf someone betrays"
    },
    {
      "id": 47,
      "title": "An Everyday Survival Kit",
      "text": "AN EVERYDAY SURVIVAL KIT\n\nToothpick\nRubber band\nBand aid\nPencil\nEraser\nChewing gum\nMint\nCandy Kiss\nTea Bag\n\nHere's why:\n\nToothpick - to remind you to pick out the good qualities in others...Matt 7:1\n\nRubber band - to remind you to be flexible, things migh"
    },
    {
      "id": 48,
      "title": "An Interview With God",
      "text": "AN INTERVIEW WITH GOD\n\nCome in,\" God said to me, \"So, you would like to interview Me?\"\n\n\"If you have the time,\" I said.\n\nHe smiled through His beard and said: \"My time is called Eternity and is enough to do everything.  What questions do you have in mind"
    },
    {
      "id": 49,
      "title": "And the Little Child Shall Lead Them",
      "text": "AND THE LITTLE GIRL SHALL LEAD THEM\n\nThere was an atheist couple who had a child. The couple never told their daughter about the Lord. One night when the little girl was 5 years old, the parents fought with each other and the dad shot the Mom, right in fr"
    },
    {
      "id": 50,
      "title": "And The Little Girl Shall Lead Them",
      "text": "AND THE LITTLE GIRL SHALL LEAD THEM\n\nThere was an atheist couple who had a child. The couple never told their daughter about the Lord. One night when the little girl was 5 years old, the parents fought with each other and the dad shot the Mom, right in fr"
    },
    {
      "id": 51,
      "title": "Angel In The Classroom",
      "text": "ANGEL IN THE CLASSROOM\n\nA pastor read a letter from an elementary school teacher who attends East Hill Church.  The gist of the letter was as follows:\n\nLast school year, her classroom was made up of little third graders, every one of which came from eithe"
    },
    {
      "id": 52,
      "title": "Angel Talk",
      "text": "ANGEL TALK\n\nJust inside the Pearly Gates\nUnderneath a gorgeous sky\nTwo angels hovered near a cloud\n(They don't sit like you and I!)\n\n\"I just don't understand it,\"\nSaid angel number one,\n\"I've watched and studied everything\nThose foolish souls have done."
    },
    {
      "id": 53,
      "title": "Angels",
      "text": "ANGELS\n\nTwo traveling angels stopped to spend the night in the home of a wealthy\nfamily. The family was rude and refused to let the angels stay in the\nmansion's guest room. Instead the angels were given a space in the cold\nbasement.\n\nAs they made their be"
    },
    {
      "id": 54,
      "title": "Angels In The Alley",
      "text": "ANGELS IN THE ALLEY\n\nA young Christian university student, was home for the summer. She had\ngone to visit some friends one evening and the time passed quickly as\neach shared their various experiences of the past year. She ended up\nstaying longer than she"
    },
    {
      "id": 55,
      "title": "Another Day",
      "text": "ANOTHER DAY\n\nAnother day is dawning\nanother day's begun\nanother day to turn to God\nand pray, \"Thy will be done\"\n\nA day to slay doubt's dragon,\nTo know within your soul\nThat as you give yourself to Him\nHe'll bless and make you whole.\n\nA day to live with pu"
    },
    {
      "id": 56,
      "title": "Answered Prayer",
      "text": "ANSWERED PRAYER\n\nA voyaging ship was wrecked during a storm at sea and only two of the men on it were able to swim to a small, desert like island. The two survivors, not knowing what else to do, agreed that they had no other recourse but to pray to God. H"
    },
    {
      "id": 57,
      "title": "Apples",
      "text": "APPLES\n\nA few years ago a group of salesmen went to a regional sales convention in Chicago. They had assured their wives that they would be home in plenty of time for Friday night's dinner.\n\nIn their rush, with tickets and brief-cases, one of these salesm"
    },
    {
      "id": 58,
      "title": "Are You Waiting To Be Called?",
      "text": "ARE YOU WAITING TO BE CALLED?\n\nBack when the telegraph was the fastest method of long-distance communication, a young man applied for a job as a Morse Code operator. Answering an ad in the newspaper, he went to the office address that was listed.\n\nWhen he"
    },
    {
      "id": 59,
      "title": "As On Our Way We Go",
      "text": "AS ON OUR WAY WE GO\n\nThere isn't much that I can do, but I can share my bread with you, and sometimes a sorrow too -- as on our way we go. \n \nThere isn't much that I can do, but I can sit an hour with you, and I can share a joke with you, and sometimes sh"
    },
    {
      "id": 60,
      "title": "Attitude",
      "text": "ATTITUDE \n\nThe 92-year-old, petite, well-poised and proud lady, who is fully dressed each morning by eight o'clock, with her hair fashionably coifed and makeup perfectly applied, even though she is legally blind, moved to a nursing home today. Her husband"
    },
    {
      "id": 61,
      "title": "Awesome Resume",
      "text": "AWESOME RESUME\n\nTo Whom It May Concern:\n\nI heard you were considering a new manager in your life. I would like to apply for the job. I believe I am the qualified candidate. I created the heavens and the earth. I AM. I am the only one that has ever done th"
    },
    {
      "id": 62,
      "title": "Bailey Jesus",
      "text": "BAILEY'S JESUS\n\nGod recently allowed me to see Jesus through the eyes of someone seeing \nHim for the first time. Having the advantage of knowing how the story \nends, we can easily forget the cost of our redemption and the love of \nour Savior.\n\nEvery year"
    },
    {
      "id": 63,
      "title": "Beatitudes of Marriage",
      "text": "BEATITUDES OF MARRIAGE\n\nBlessed are the husband and wife who continue to be affectionate,\nconsiderate, and loving after the wedding bells have ceased ringing.\n\nBlessed are the husband and wife who are as polite and courteous to one\nanother as they are to"
    },
    {
      "id": 64,
      "title": "Before I Was A Mom",
      "text": "BEFORE I WAS A MOM\n \nBefore I was a Mom - I made and ate hot meals.  I had unstained clothing.  I had quiet conversations on the phone.\n \nBefore I was a Mom - I slept as late as I wanted and never worried about how late I got into bed.  I brushed my hair"
    },
    {
      "id": 81,
      "title": "Best Friend",
      "text": "BEST FRIEND\n\nLast night you and your best friend had a fight.  You decide not to talk to her the next day.  \n\nShe smiles at you.  You grind your teeth at her.  \n\nShe tells her friends nice things about you.  You spread bad rumors about her.\n\nShe tries to"
    },
    {
      "id": 82,
      "title": "Beyond Death",
      "text": "BEYOND DEATH\n\nA sick man turned to his doctor, as he was leaving the room after paying a visit, and said, \"Doctor, I am afraid to die.  Tell me what lies on the other side.\"\n\nVery quietly the doctor said, \"I don't know.\"\n\n\"You don't know?  You, a Christia"
    },
    {
      "id": 83,
      "title": "B-I-B-L-E",
      "text": "B-I-B-L-E\n\nA father was approached by his small son, who told him proudly, \"I know what the Bible means!\"\n\nHis father smiled and replied, \"What do you mean, you �know' the Bible?\"\n\nThe son replied, \"I do know!\"\n\n\"Okay,\" said his father. \"So, Son, what doe"
    },
    {
      "id": 84,
      "title": "Big Mud Puddles and Yellow Dandelions",
      "text": "BIG MUD PUDDLES AND YELLOW DANDELIONS      \n\nWhen I look at a patch of dandelions, I see a bunch of weeds that are going to take over my yard. My kids see flowers for Mom and blowing white fluff you can wish on. \n\nWhen I look at an old drunk and he smiles"
    },
    {
      "id": 85,
      "title": "Birthday Celebration",
      "text": "BIRTHDAY CELEBRATION\n\nYou Are Cordially Invited To A BIRTHDAY CELEBRATION\n\nGuest of Honor: Jesus Christ\n\nDate:   Every day.  Traditionally December 25, but He's always around, \nso the date is flexible..\n\nTime:   Whenever you're ready, (please don't be too"
    },
    {
      "id": 86,
      "title": "Blessings We May Not Recognize",
      "text": "BLESSINGS WE MAY NOT RECOGNIZE\n\n1.  If you own a Bible, you are abundantly blessed - about 1/3 of the world does not have access to one.\n\n2.  If you wake up each morning with more health than illness, you are blessed to rise and shine, to live and to serv"
    },
    {
      "id": 87,
      "title": "Bring Those Babies to Church",
      "text": "BRING THOSE BABIES TO CHURCH\n\nMy heart goes out to the parents of small children.  I know first hand the kind of problems they face.  Training up a toddler in the way he should go is a constant job, a continuous battle, seven-day-a-week task, not to menti"
    },
    {
      "id": 88,
      "title": "Brownie Crumbs",
      "text": "BROWNIE CRUMBS\n\nMrs. Baughman was my 6th grade Sunday School teacher. One morning, she brought a pan of brownies to our class. As the goodies sat over by her chair, she gave each child a slip of paper marked with a household expense: house payment, utilit"
    },
    {
      "id": 89,
      "title": "Burdens Give Us Wings",
      "text": "BURDENS GIVE US WINGS\n\nAn old legend relates that long ago God had a great many burdens which He wished to have carried from one place to another on earth, so He asked the animals to lend a hand. But all of them began to make excuses for not helping: the"
    },
    {
      "id": 90,
      "title": "Burned Biscuits",
      "text": "BURNED BISCUITS\n\nWhen  I was a little boy, my mom liked to make breakfast food for dinner every now and then. And I remember one night in particular when she had made breakfast after a long, hard day at work. On that evening so long ago, my mom placed a p"
    },
    {
      "id": 91,
      "title": "Butterfly Kisses",
      "text": "BUTTERFLY KISSES\n\nWe often learn the most from our children.  Some time ago, a friend of mine punished his 3-year-old daughter for wasting a roll of gold wrapping paper.  Money was tight, and he became infuriated when the child tried to decorate a box to"
    },
    {
      "id": 92,
      "title": "Butterfly Story",
      "text": "BUTTERFLY STORY\n \nA man found the cocoon of a butterfly.  One day a small opening appeared.  He sat and watched the butterfly for several hours as it struggled to force its body through the little hole.  Then it seemed to stop making any progress.  It app"
    },
    {
      "id": 93,
      "title": "Buying Time",
      "text": "BUYING TIME\n\nA man came home from work late again, tired, irritated, and stressed, to \nfind his 6-year-old son waiting for him at the door.\n\n\"Daddy, may I ask you a question?\"\n\n\"Yeah, sure, what is it?\" replied the man.\n\n\"Daddy, how much money do you make"
    },
    {
      "id": 94,
      "title": "Can You Relate?",
      "text": "CAN YOU RELATE?\n\nI drive into work listening to gospel music or a pre-recorded sermon on the radio. I get out of the car and walk to the building entrance.\n\nAs I open the building door I leave just enough room for me to get in and I leave Jesus standing o"
    },
    {
      "id": 95,
      "title": "Can You Sleep When The Wind Blows",
      "text": "CAN YOU SLEEP WHEN THE WIND BLOWS?\n      \nYears ago a farmer owned land along the Atlantic seacoast.  He constantly advertised for hired hands. Most people were reluctant to work on farms along the Atlantic. They dreaded the awful storms that raged across"
    },
    {
      "id": 96,
      "title": "Candy Cane",
      "text": "CANDY CANE\n\nThe candy cane has long been a Christmas tradition and was said to have been the creation of a fine Christian candy maker in Indiana. Its sweet peppermint taste has been enjoyed by young and old for years.\n\nThe candy maker started with pure wh"
    },
    {
      "id": 97,
      "title": "Carl Garden",
      "text": "CARL'S GARDEN\n\nCarl was a quiet man. He didn't talk much. He would always greet you with a big smile and a firm handshake. Even after living in our neighborhood for over 50 years, no one could really say they knew him very well. \n\nBefore his retirement, h"
    },
    {
      "id": 98,
      "title": "Cast Out The Net",
      "text": "CAST OUT THE NET\n\nVery early in life (almost from birth) we are trained to be successful according to the world's definition of success. We are driven by goals and accomplishments from the day we take our first steps and ride our first bike. As we grow ol"
    },
    {
      "id": 99,
      "title": "Child To Parent",
      "text": "CHILD TO PARENT\n\n* Don't spoil me, I know quite well that I ought not to have all I ask for. I am only testing you. \n\n* Don't be afraid to be firm with me. I prefer it. It makes me feel more secure. \n\n* Don't let me form bad habits. I have to rely on you"
    },
    {
      "id": 100,
      "title": "Choices",
      "text": "CHOICES!\n\nJerry is the kind of guy you love to hate. He is always in a good mood \nand always has something positive to say. When someone would ask him how \nhe was doing, he would reply,\n\n'If I were any better, I would be twins!'\n\nHe was a unique manager b"
    },
    {
      "id": 101,
      "title": "Chores",
      "text": "CHORES\n\nMonday - Wash Day Lord, help me to wash away all my selfishness and vanity, so I may serve you with perfect humility through the week ahead.\n\nTuesday - Ironing Day Dear Lord, help me to iron out all the wrinkles of prejudice I have collected throu"
    },
    {
      "id": 102,
      "title": "Church Football",
      "text": "CHURCH FOOTBALL\n\nQuarterback Sneak - Church members quietly leaving during the invitation.\n\nDraw Play - What many children do with the bulletin during worship. \n\nHalf-time -  The period between Sunday School and worship when many choose to leave.\n\nBenchwa"
    },
    {
      "id": 103,
      "title": "Clean Blood",
      "text": "CLEAN BLOOD\n\nThe day is over, you are driving home. You tune in your radio. You hear a little blurb about a little village in India where some villagers have died suddenly, strangely, of a flu that has never been seen before. It's not influenza, but three"
    },
    {
      "id": 104,
      "title": "Cleaning",
      "text": "CLEANING\n\nDear Lord Jesus\n\nAs I go about my housework\nLet me see each job I do,\nAs a service for my King\nAnd a way of loving You.\n\nLet me wash away my judgments\nOf others right or wrong,\nAs I wash up the dishes\nPlace within my heart a song.\n\nAs I clean up"
    },
    {
      "id": 105,
      "title": "Closed Doors",
      "text": "CLOSED DOORS\n\nWe need to learn to praise the Lord as much for a closed door as we do an open door. The reason God closes doors is because He has not prepared anything over there for us. If he didn't close the wrong door, we would never find the right door"
    },
    {
      "id": 106,
      "title": "Come As You Are, No Jacket Required",
      "text": "COME AS YOU ARE. NO JACKET REQUIRED\n\nI shook my head in disbelief. This couldn't be the right place. After all, I couldn't possibly be welcome here. I had been given an invitation several times, by several different people, and I had finally decided to se"
    },
    {
      "id": 107,
      "title": "Come As You Are. No Jacket Required",
      "text": "COME AS YOU ARE. NO JACKET REQUIRED\n\nI shook my head in disbelief. This couldn't be the right place. After all, I couldn't possibly be welcome here. I had been given an invitation several times, by several different people, and I had finally decided to se"
    },
    {
      "id": 108,
      "title": "Coping With Stress",
      "text": "COPING WITH STRESS\n\nA lecturer, when explaining stress management to an audience, raised a glass of water and asked, \"How heavy is this glass of water?\"   Answers called out ranged from 20g to 500g.\n\nThe lecturer replied, \"The absolute weight doesn't matt"
    },
    {
      "id": 109,
      "title": "Daddy From Heaven",
      "text": "DADDY FROM HEAVEN\n\nHer hair up in a pony tail,\nher favorite dress tied with a bow.\nToday was Daddy's Day at school,\nand she couldn't wait to go.\n\nBut her mommy tried to tell her,\nthat she probably should stay home.\nWhy the kids might not understand,\nif sh"
    },
    {
      "id": 110,
      "title": "Dear Child",
      "text": "Dear Child:\n\nI just wanted to remind you today of how beautiful you are because there is a father of lies who will try to deceive you. He will try to tell you that you are not good enough, not attractive enough, not thin enough, not strong enough, not sma"
    },
    {
      "id": 111,
      "title": "Dear Fool",
      "text": "Dear Fool,\n\nI saw you yesterday as you began your daily chores.  You awoke without kneeling to pray.  As a matter of fact, you didn't even bless your meals or pray before going to bed last night.  You are so unthankful.  I like that about you!\n\nI cannot t"
    },
    {
      "id": 112,
      "title": "Dear Friend",
      "text": "Dear Friend,\n\nAs you got up this morning, I watched you and hoped you would talk to me, even if it was just a few words, asking my opinion, or thanking me for something good that happened in your life yesterday.  But I noticed you were too busy trying to"
    },
    {
      "id": 113,
      "title": "Develop The Right (Self) Attitude",
      "text": "DEVELOP THE RIGHT (SELF) ATTITUDE\n\nHere are 10 suggestions to help you develop and maintain a healthy self-image. Read them slowly.  Meditate on them regularly.\n\n1. Hate your sin, but never hate yourself.\n\n2. Be quick to repent.\n\n3. When God gives you lig"
    },
    {
      "id": 114,
      "title": "Did God Make Everything?",
      "text": "DID GOD MAKE EVERYTHING?\n\nThe college professor challenged the class with this question.\n\"Did God make everything there is?\"\nOne student bravely answered, \"Yes!\"\n\"Everything, young man?\"\n\"Yes, he did, sir,\" the young man replied.\nThe professor responded,"
    },
    {
      "id": 115,
      "title": "Did Jesus Use A Modem At The Sermon On The Mount?",
      "text": "DID JESUS USE A MODEM AT THE SERMON ON THE MOUNT?\n\nDid Jesus use a modem, At the Sermon on the Mount?\nDid He ever try a broadcast fax, To send his message out?\nDid the disciples carry beepers, As they went about their route?\nDid Jesus use a modem, At the"
    },
    {
      "id": 116,
      "title": "Directions to His House",
      "text": "DIRECTIONS TO HIS HOUSE\n\nMake a Right onto \"Believeth Blvd.\"\n\nKeep straight and go through the Green Light, which is Jesus Christ.\n\nFrom there, you must turn onto the \"Bridge of Faith,\" which is over troubled water.\n\nWhen you get off the bridge, make a Ri"
    },
    {
      "id": 117,
      "title": "Do Not Disappoint God",
      "text": "DO NOT DISAPPOINT GOD\n \nGOD:  Angels, do you know what I was just thinking about?\n \nANGELS:  What were you thinking about?\n \nGOD:  Christians seem to have forgotten what kind of power they have available and the devil keeps on deceiving them!\n \nANGELS: Go"
    },
    {
      "id": 118,
      "title": "Do Not Forget To Smile",
      "text": "DON'T FORGET TO SMILE\n\nA little girl walked to and from school daily. Though the weather that morning was questionable and clouds were forming, she made her daily trek to the elementary school. As the afternoon progressed, the winds whipped up, along with"
    },
    {
      "id": 119,
      "title": "Do Not Look Back",
      "text": "DON'T LOOK BACK\n\nAs you travel through life there are always those times\nWhen decisions just have to be made,\nWhen the choices are hard, and solutions seem scarce,\nAnd the rain seems to soak your parade.\n\nThere are some situations where all you can do\nIs"
    },
    {
      "id": 120,
      "title": "Do Not We All",
      "text": "DON'T WE ALL\n\nI was parked in front of the mall wiping off my car. I had just come\nfrom the car wash and was waiting for my wife to get out of work. Coming\nmy way from across the parking lot was what society would consider a\nbum. From the looks of him, he"
    },
    {
      "id": 121,
      "title": "Do You Believe In Easter?",
      "text": "DO YOU BELIEVE IN EASTER?\n\nEdith Burns was a wonderful Christian who lived in San Antonio, Texas.\nShe was the patient of doctor by the name of Will Phillips. Dr. Phillips\nwas a gentle doctor who saw patients as people.\n\nHis favorite patient was Edith Burn"
    },
    {
      "id": 122,
      "title": "Do You Carry Your Umbrella",
      "text": "DO YOU CARRY YOUR UMBRELLA?\n\nWe all have something to learn from this young girl.\n\nAs a drought continued for what seemed an eternity, a small community of farmers was in a quandary as to what to do. Rain was important to keep their crops healthy and sust"
    },
    {
      "id": 123,
      "title": "Do You Carry Your Umbrella?",
      "text": "DO YOU CARRY YOUR UMBRELLA?\n\nWe all have something to learn from this young girl.\n\nAs a drought continued for what seemed an eternity, a small community of farmers was in a quandary as to what to do. Rain was important to keep their crops healthy and sust"
    },
    {
      "id": 124,
      "title": "Does God Still Speak to His People?",
      "text": "DOES GOD STILL SPEAK TO HIS PEOPLE?\n\nA young man had been to Wednesday night Bible Study.  The Pastor had shared about listening to God and obeying the Lord's voice.\n\nThe young man couldn't help but wonder, \"Does God still speak to His people?\"\n\nAfter ser"
    },
    {
      "id": 125,
      "title": "Does Prayer Change Things?",
      "text": "DOES PRAYER CHANGE THINGS?\n\nThey say that prayer changes things, but does it REALLY change anything? \nOh yes! It really does!\n\nDoes prayer change your present situation or sudden circumstances?\nNo, not always, but it does change the way you look at those"
    },
    {
      "id": 126,
      "title": "Don't Forget To Smile",
      "text": "DON'T FORGET TO SMILE\n\nA little girl walked to and from school daily. Though the weather that morning was questionable and clouds were forming, she made her daily trek to the elementary school. As the afternoon progressed, the winds whipped up, along with"
    },
    {
      "id": 127,
      "title": "Donuts",
      "text": "DONUTS\n\nThere was a boy by the name of Steve who was attending school in Utah.\nBrother Christianson taught at this particular school. He had an\nopen-door policy and would take in any student that had been thrown out\nof another class as long as they would"
    },
    {
      "id": 128,
      "title": "Drink, Steal, Swear and Lie",
      "text": "DRINK, STEAL, SWEAR & LIE (Not what you think, so read on)!\n\n(FOUR RULES TO LIVE BY)\n\nI met this guy while I was in Albuquerque and he has a motto he lives by everyday. He said listen carefully and live by these 4 rules: Drink, Steal, Swear, & Lie. I was"
    },
    {
      "id": 129,
      "title": "Drinking From My Saucer",
      "text": "DRINKING FROM MY SAUCER\n\nI've never made a fortune and it's probably too late now,\nBut I don't worry about that much 'cause I'm happy anyhow.\n\nAnd as I go along life's way I'm reaping better than I sow,\nI'm drinking from my saucer 'cause my cup has overfl"
    },
    {
      "id": 130,
      "title": "Easy - Difficult",
      "text": "EASY - DIFFICULT\n\nEasy is to judge the mistakes of others\n - Difficult is to recognize our own mistakes...\n\nEasy is to talk without thinking\n - Difficult is to refrain the tongue...\n\nEasy is to hurt someone who loves us.\n - Difficult is to heal the wound."
    },
    {
      "id": 131,
      "title": "E-Mail Ministry Announcement",
      "text": "- - - - ANNOUNCEMENT - - - - \n\nWEB SITE REDESIGN LAUNCHED\nAs you may have already noticed, the new E-Mail Ministry web site has\nbeen launched.\n\nThe web site has been totally redesigned.  Here are the main aspects of\nthe new layout:\n\n * Subscription Servi"
    },
    {
      "id": 132,
      "title": "E-Mail Ministry is Thirteen Years Old",
      "text": "E-MAIL MINISTRY IS THIRTEEN YEARS OLD\n\nTomorrow (December 3, 2011) is the 13th birthday for E-Mail Ministry.  This ministry started with 15 \"volunteer\" subscribers.  Today, by God�s grace, E-Mail Ministry reaches around the world!\n\nOver the past twelve ye"
    },
    {
      "id": 133,
      "title": "Emergency Numbers",
      "text": "EMERGENCY NUMBERS\n\nEmergency numbers may be dialed direct. No operator assistance is\nnecessary.\n\nEMERGENCY PHONE NUMBERS\nWhen in sorrow, ......................................... call John 14\nWhen men fail you, ..................................... call P"
    },
    {
      "id": 134,
      "title": "Entertaining Angels",
      "text": "ENTERTAINING ANGELS\n \nIt was fifty years ago, on a hot summer day, in the deep south. We lived on a dirt road, on a sand lot. We were, what was known as \"dirt poor\". I had been playing outside all morning in the sand. \n\nSuddenly, I heard a sharp clanking"
    },
    {
      "id": 135,
      "title": "Every Day Is Christmas",
      "text": "EVERY DAY IS CHRISTMAS\n\nEvery day is Christmas when you have the kind of mind,\nThat stores up all the goodness and the sweetness it can find.\nWhen you don't need an occasion, to spread a bit of cheer,\nBut just keep on a-giving, of yourself throughout the"
    },
    {
      "id": 136,
      "title": "Every Day Is Easter",
      "text": "EVERY DAY IS EASTER\n\n\"Easter comes but once a year,\" \nSo many people say, \nBut, to a person saved from sin, \nIt's Easter every day!                  \n\nA man, when saved or \"born again\" \nHis life, to Christ, will give, \nAnd, as a new-born babe in Christ,"
    },
    {
      "id": 137,
      "title": "Eye Opener",
      "text": "EYE OPENER\n\nI saw him in the church building for the first time on Wednesday. He was in his mid-70's, with thinning silver hair and a neat brown suit. Many times in the past I had invited him to come. Several other Christian friends had talked to him abou"
    },
    {
      "id": 138,
      "title": "Faith Of A Child",
      "text": "FAITH OF A CHILD\n\nThe father, a well digger,\nstrong was he,\nAnd as loving and kind\nas a father could be.\n\nAnd Mary his daughter, \nJust five years old,\nWas very much dearer\nthan millions in gold.\n\nTo Mary her father\nwas big, grand and nice,\nSo each had a t"
    },
    {
      "id": 139,
      "title": "Fall Resolutions",
      "text": "How about FALL Resolutions?\n(After 9 months of not keeping the new year's ones)\n\nGive up complaining . . . focus on gratitude.\nGive up pessimism . . . become an optimist.\nGive up harsh judgments . . . think kind thoughts.\nGive up worry . . . trust divine"
    },
    {
      "id": 140,
      "title": "Family",
      "text": "FAMILY\n\nI ran into a stranger as he passed by. \"Oh, excuse me please\" was my \n  reply.\nHe said, \"Please excuse me too; wasn't even watching for you.\"\nWe were very polite, this stranger and I.\nWe went on our way and we said good-bye.\n\nBut at home a  differ"
    },
    {
      "id": 142,
      "title": "Fit Me In Somewhere",
      "text": "FIT ME IN SOMEWHERE\n\nFit me in somewhere \nin this giant jigsaw, God,\nsomewhere in this work of art\nyou're working, \nselect a space my shape can fill\nand with a puzzle maker's skill\nlet my contours find their fit without contortion. \nTeach me which patch I"
    },
    {
      "id": 143,
      "title": "Five Great Lessons",
      "text": "FIVE GREAT LESSONS\n\n1 - Most Important Lesson\n\nDuring my second month of nursing school, our professor gave us a pop\nquiz. I was a conscientious student and had breezed through the\nquestions, until I read the last one: \"What is the first name of  the\nwoma"
    },
    {
      "id": 144,
      "title": "Flame of Love",
      "text": "FLAME OF LOVE\n\n\"I can master it,\" said the Ax. His blows fell heavy on the hard, strong steel. But each blow only made his edge more blunt until he ceased to strike. \n\n\"Leave it to me,\" said the Saw. With his relentless teeth, he worked back and forth. Bu"
    },
    {
      "id": 145,
      "title": "Forgiveness",
      "text": "FORGIVENESS\n\nOnce upon a time two brothers who lived on adjoining farms fell into\nconflict. It was the first serious rift in 40 years of farming side by\nside, sharing machinery, and trading labor and goods as needed without a\nhitch.\n\nThen the long collabo"
    },
    {
      "id": 146,
      "title": "Forrest Gump",
      "text": "FORREST GUMP\n\nForrest Gump dies and goes to Heaven. He is met at the Pearly Gate by St. Peter himself. The gates are closed, however, and Forrest approaches the gatekeeper. St. Peter says \"Well, Forrest, it's certainly good to see you. We have heard so ma"
    },
    {
      "id": 147,
      "title": "Four Wives",
      "text": "FOUR WIVES\n\nThere was a rich merchant who had 4 wives. He loved the 4th wife the most and adorned her with rich robes and treated her to delicacies.  He took great care of her and gave her nothing but the best.  He also loved the 3rd wife very much.  He's"
    },
    {
      "id": 148,
      "title": "Frogs",
      "text": "FROGS\n\nA group of frogs was traveling through the woods, and two of them fell into a deep pit.  All the other frogs gathered around the pit. \n\nWhen they saw how deep the pit was, they told the unfortunate frogs they would never get out.  \n\nThe two frogs i"
    },
    {
      "id": 149,
      "title": "Funny How",
      "text": "FUNNY HOW....\n\nFunny how a $100 bill \"looks\" so big when you take it to church, but so \nsmall when you take it to the mall.\n\nFunny how long it takes to serve God for an hour, but how quickly a team \nplays 60 minutes of basketball.\n\nFunny how long a couple"
    },
    {
      "id": 150,
      "title": "Garbage Truck",
      "text": "GARBAGE TRUCK\n\nHow often do you let other people's nonsense change your mood?  Do you let a bad driver, rude waiter, curt boss, or an insensitive employee ruin your day?  Unless you're the Terminator, for an instant you're probably set back on your heels."
    },
    {
      "id": 151,
      "title": "God Answers Prayer",
      "text": "GOD ANSWERS PRAYER\n\nI know not by what methods rare,\nBut this I know - God answers prayer,\nI know not when He sends the word\nThat tells us fervent prayer is heard.\nI know it cometh -- soon or late:\nTherefore we need to pray and wait.\nI know not if the ble"
    },
    {
      "id": 152,
      "title": "God Cake",
      "text": "GOD'S CAKE\n\nSometimes we wonder,\n\"What did I do to deserve this?\" or\n\"Why did God have to do this to me?\"\nHere is a wonderful explanation!\n\nA daughter is telling her Mother how everything is going wrong, she's \nfailing algebra, her boyfriend broke up with"
    },
    {
      "id": 153,
      "title": "God Can Use You",
      "text": "GOD CAN USE YOU!!\n\nThere are many reasons why God shouldn't have called you.\n\nBut don't worry. You're in good company . . .\n\nMoses stuttered.\nDavid's armor didn't fit.\nJohn Mark was rejected by Paul.\nTimothy had ulcers.\nHosea's wife was a prostitute.\nAmos"
    },
    {
      "id": 154,
      "title": "God Embroidery",
      "text": "GOD'S EMBROIDERY\n\nWhen I was a little boy, my mother used to embroider a great deal. I would sit at her knee and look up from the floor and ask what she was doing. She informed me that she was embroidering. I told her that it looked like a mess from where"
    },
    {
      "id": 155,
      "title": "God Is Always Near",
      "text": "GOD IS ALWAYS NEAR\n\nOne thing can always cheer me\nWhen I'm feeling sad and low\nWhen I tired of daily trials\nThat I have to undergo,\nWhen those who should\nSeem closest, seem like\nPeople I don't know,\nOne thing can always cheer me\nI know that God is near me"
    },
    {
      "id": 156,
      "title": "God Is Under The Bed",
      "text": "GOD IS UNDER THE BED\n\nMy brother Kevin thinks God lives under his bed. At least that's what I heard him say one night. He was praying out loud in his dark bedroom, and I stopped outside his closed door to listen. Are you there, God?\" he said. Where are yo"
    },
    {
      "id": 157,
      "title": "God Knows",
      "text": "GOD KNOWS\n\n* When you are tired and discouraged from fruitless efforts...\n* God knows how hard you have tried.\n\n* When you've cried so long and your heart is in anguish...\n* God has counted your tears.\n\n* If you feel that your life is on hold and time has"
    },
    {
      "id": 158,
      "title": "God Knows Just What We Need",
      "text": "GOD KNOWS JUST WHAT WE NEED\n\nA woman was at work when she received a phone call that her daughter was\nvery sick with a fever. She left her work and stopped by the pharmacy to\nget some medication for her daughter.\n\nUpon returning to her car she found that"
    },
    {
      "id": 159,
      "title": "God Lives In The Post Office - E-Mail Ministry",
      "text": "GOD LIVES IN THE POST OFFICE\n \nOur 14 year old dog, Abbey, died last month. The day after she died, my 4 year old daughter Meredith was crying and talking about how much she missed Abbey. She asked if we could write a letter to God so that when Abbey got"
    },
    {
      "id": 160,
      "title": "God Said",
      "text": "GOD SAID\n\nIf you never felt pain, then how would you know that I'm a Healer?\n\nIf you never went through difficulties, how would you know that I'm a Deliverer?\n\nIf you never had a trial, how could you call yourself an overcomer?\n\nIf you never felt sadness,"
    },
    {
      "id": 162,
      "title": "God Wont Ask",
      "text": "GOD WON'T ASK\n\n1. God won't ask what kind of fancy car you drove.\n   He will ask how many people you took to church who didn't have transportation.\n\n2. God won't ask the square footage of your house.\n   He will ask how many people you helped who didn't ha"
    },
    {
      "id": 164,
      "title": "Gods Word: A Shield For Me",
      "text": "GOD'S WORD: A SHIELD FOR ME\n\n\"I'm not supposed to give these away,\" the young man said, handing me a\ndisplay Bible, \"but I sense you should have this.\" I shrugged and\nabsently tucked it away. We had a Bible at home. I'd only stopped by the\nGideons table b"
    },
    {
      "id": 165,
      "title": "Good Advice To Live By",
      "text": "GOOD ADVICE TO LIVE BY\n\nIf you want your dreams to come true, don't oversleep.  \n\nThe smallest good deed is better than the grandest intention.  \n\nOf all the things you wear, your expression is the most important.  \n\nThe best vitamin for making friends..."
    },
    {
      "id": 167,
      "title": "Good Way To Start The Day",
      "text": "GOOD WAY TO START THE DAY\n\nDear God,\n\nI'm writing to say I'm sorry\nFor being angry yesterday\nWhen you seemed to ignore my prayer\nAnd things didn't go my way\n\nFirst, my car broke down\nI was very late for work\nBut I missed that awful accident\nWas that your"
    },
    {
      "id": 168,
      "title": "Grace",
      "text": "GRACE\n\nThe boy stood with back arched, head cocked back and hands clenched\ndefiantly.  \"Go ahead, give it to me.\"\n\nThe principal looked down at the young rebel.  \"How many times have you\nbeen here?\"\n\nThe child sneered rebelliously, \"Apparently not enough."
    },
    {
      "id": 169,
      "title": "Grandma and the Cake",
      "text": "GRANDMA AND THE CAKE\n\nA little boy is telling his Grandma how \"everything\" is going wrong. School, family problems, severe health problems, etc.   Meanwhile, Grandma is baking a cake.  She asks her grandson if he would like a snack, which of course he doe"
    },
    {
      "id": 170,
      "title": "Grandmas Hands",
      "text": "GRANDMA'S HANDS\n\nThis is good; I'll never look at my hands the same!\n\nGrandma, some ninety plus years, sat feebly on the patio bench.  She didn't move, just sat with her head down staring at her hands. When I sat down beside her she didn't acknowledge my"
    },
    {
      "id": 171,
      "title": "Guidance",
      "text": "GUIDANCE\n\nWhen I meditated on the word guidance, I kept seeing \"dance\" at the end of the word. I remember reading that doing God's will is a lot like dancing. When two people try to lead, nothing feels right. The movement doesn't flow with the music, and"
    },
    {
      "id": 172,
      "title": "Happiness Is The Way",
      "text": "HAPPINESS IS THE WAY\n\nWe convince ourselves that life will be better after we get married, have a baby, then another. Then we are frustrated that the kids aren't old enough and we'll be more content when they are.\n\nAfter that, we're frustrated that we hav"
    },
    {
      "id": 173,
      "title": "Happy Thanksgiving",
      "text": "TO BE THANKFUL FOR:\n\nThe mess to clean after a party because it means I have been surrounded by friends.\n\nThe taxes I pay because it means that I'm employed.\n\nThe clothes that fit a little too snug because it means I have enough to eat.\n\nMy shadow who wat"
    },
    {
      "id": 174,
      "title": "Have You Sharpened Your Axe?",
      "text": "HAVE YOU SHARPENED YOUR AXE?\n\nA young man approached the foreman of a logging crew and asked for a job.\n\n\"That depends,\" replied the foreman. \"Let's see you fell this tree.\" The young man stepped forward and skillfully felled a great tree.  Impressed, the"
    },
    {
      "id": 175,
      "title": "He Is Risen",
      "text": "HE IS RISEN\n\nToday's message is a little different and a continuation from\nWednesday's message.\nPlease go to the following new web page added to the E-Mail Ministry web\nsite:  http://www.emailministry.org/content/risen.html\n\nIt takes a little while to loa"
    },
    {
      "id": 176,
      "title": "He is the Great I AM",
      "text": "HE IS THE GREAT I AM!\n\nHe is the First and Last, the Beginning and the End!\nHe is the keeper of Creation and the Creator of all!\nHe is the Architect of the universe and the Manager of all times.\nHe always was, He always is, and He always will be...\nUnmove"
    },
    {
      "id": 177,
      "title": "Healed and Whole",
      "text": "HEALED AND WHOLE\n\nOne day I dug a little hole, \nand put my hurt inside\nI thought that I could just forget \nI'd put it there to hide.\nBut that little hurt began to grow, \nI covered it every day\nI couldn't leave it and go on \nIt seemed the price I had to pa"
    },
    {
      "id": 178,
      "title": "Health Check-Up By God",
      "text": "HEALTH CHECK-UP BY GOD\n\nI went to the Lord's Clinic to have my routine check-up and I confirmed I was ill.\n\nWhen Jesus took my blood pressure, He saw I was low in tenderness.\n\nWhen He read my temperature, the thermometer registered 40 degrees of anxiety."
    },
    {
      "id": 179,
      "title": "Heaven & Hell",
      "text": "HEAVEN & HELL\n\nA holy man was having a conversation with the Lord one day and said, \"Lord, I would like to know what Heaven and Hell are like. \"\n\nThe Lord led the holy man to two doors. He opened one of the doors and the holy man looked in. In the middle"
    },
    {
      "id": 180,
      "title": "Heaven Grocery Store",
      "text": "HEAVEN'S GROCERY STORE\n\nAs I was walking down life's\nhighway many years ago\nI came upon a sign that read\nHeavens Grocery  Store.\n\nWhen I got a little closer\nthe doors swung open wide\nAnd when I came to myself\nI was standing inside.\n\nI saw a host of angels"
    },
    {
      "id": 181,
      "title": "Heaven's Grocery Store",
      "text": "HEAVEN'S GROCERY STORE\n\nAs I was walking down life's\nhighway many years ago\nI came upon a sign that read\nHeavens Grocery  Store.\n\nWhen I got a little closer\nthe doors swung open wide\nAnd when I came to myself\nI was standing inside.\n\nI saw a host of angels"
    },
    {
      "id": 182,
      "title": "Hello God",
      "text": "HELLO GOD,\n\nI called tonight -\nTo talk a little while...\nI need a friend who'll listen\nTo my anxiety and my trial.\nYou see, I can't quite make it\nThrough a day just on my own...\nI need your love to guide me,\nSo I'll never feel alone.\nI want to ask you ple"
    },
    {
      "id": 183,
      "title": "Holding Pattern",
      "text": "HOLDING PATTERN\n\nMany times God will allow a painful situation or a painful circumstance in our life to \"swallow us up.\" This season in our spiritual growth is a holding pattern. We can't move to the left or the right. All we can do is sit, like Jonah sat"
    },
    {
      "id": 184,
      "title": "House for Sale",
      "text": "HOUSE FOR SALE\n\nADDRESS:  Heaven\n\nFEATURES:\n     Many rooms with a master suite\n     Spacious love\n     Open floor plan for peace\n     Large eat-in grace\n     Fenced in mercy with room for expansion\n     Son room with a marvelous view of salvation\n     Po"
    },
    {
      "id": 185,
      "title": "How Heavy Is Your Bag?",
      "text": "HOW HEAVY IS YOUR BAG?\n\nOne of my teachers had each one of us bring a clear plastic bag and a\nsack of potatoes.  For every person we'd refuse to forgive in our life,\nwe were told to choose a potato, write on it the name and date, and put\nit in the plastic"
    },
    {
      "id": 186,
      "title": "How Life Is Measured",
      "text": "HOW LIFE IS MEASURED \n\nI had a very special teacher in high school many years ago whose husband unexpectedly and suddenly died of a heart attack. \n\nAbout a week after his death, she shared some of her insight with a classroom of students. \n\nAs the late af"
    },
    {
      "id": 187,
      "title": "How Poor or Rich Are We?",
      "text": "HOW POOR OR RICH ARE WE?\n\nDuring the waning years of the depression in a small south eastern Idaho\ncommunity, I used to stop by Brother Miller's roadside stand for\nfarm-fresh produce as the season made it available. Food and money were\nstill extremely sca"
    },
    {
      "id": 189,
      "title": "How To Be A Godly Employee",
      "text": "HOW TO BE A GODLY EMPLOYEE\n(based on the 10 Commandments)\n\n1. Trust in God only.\nTrust in no one but GOD. People will disappoint you. God created you and has a wonderful plan for your life. He is too good to do wrong, and too wise to make a mistake. Let H"
    },
    {
      "id": 190,
      "title": "How to Celebrate Christ Birthday",
      "text": "HOW TO CELEBRATE CHRIST'S BIRTHDAY\n-- from Christ\n\n\nDear children,\n\nIt has come to my attention that many of you are upset that folks are taking My name out of the season. Maybe you've forgotten that I wasn't actually born during this time of the year and"
    },
    {
      "id": 191,
      "title": "How To Know 100% For Sure You Are Going To Heaven",
      "text": "HOW TO KNOW 100% FOR SURE YOU ARE GOING TO HEAVEN\n\nIn one minute, in the privacy of your home, it can be explained how you can know for sure that you will receive the gift of Heaven.\n\n\"These things have I written unto you that believe on the name of the S"
    },
    {
      "id": 192,
      "title": "How To Know You Are Going To Heaven",
      "text": "HOW TO KNOW 100% FOR SURE YOU ARE GOING TO HEAVEN\n\nIn one minute, in the privacy of your home, it can be explained how you can know for sure that you will receive the gift of Heaven.\n\n\"These things have I written unto you that believe on the name of the S"
    },
    {
      "id": 193,
      "title": "How to Live Like a True Christian",
      "text": "HOW TO LIVE LIKE A TRUE CHRISTIAN\n\nI want to be a happy Christian\nwear a smile on my face\ndon't want to be a dooms day teacher\nspreading gloom all over the place.\n\nLet's keep praying and trusting\nthat the Lord will make a way\nfor us to be happy Christian"
    },
    {
      "id": 194,
      "title": "How To Pray For Your Child",
      "text": "HOW TO PRAY FOR YOUR CHILD\n\n1. Pray NOTHING hinders your child from accepting Christ as his/her \npersonal Savior early in life. (Matthew 19:14)\n\n2. Pray your child learns to know God and will have a deep desire to do \nGod's will for his/her life. (Psalms"
    },
    {
      "id": 195,
      "title": "Hugs",
      "text": "HUGS\n\nNo moving parts, no batteries.\nNo monthly payments and no fees;\nInflation proof, non-taxable,\nIn fact, it's quite relaxable;\n\nIt can't be stolen, won't pollute,\nOne size fits all, do not dilute.\nIt uses little energy,\nBut yields results enormously."
    },
    {
      "id": 196,
      "title": "I am too Blessed to be Stressed and too Anointed to be Disappointed",
      "text": "I'M TOO BLESSED TO BE STRESSED and TOO ANOINTED TO BE DISAPPOINTED!\n\nI refuse to be discouraged, to be sad or to cry.\nI refuse to be downhearted and here's the reason why:\nI have a God who is almighty; who is sovereign and supreme; \nI have a God who loves"
    },
    {
      "id": 197,
      "title": "I Asked God",
      "text": "I asked God to take away my pride.\nGod said \"No\".\nIt is not for me to take away, but for you to give it up.\n\nI asked God to make my handicapped child whole.\nGod said \"No\".\nHer spirit was whole, her body was only temporary.\n\nI asked God to grant me patienc"
    },
    {
      "id": 198,
      "title": "I Asked, He Gave",
      "text": "I ASKED, HE GAVE\n\nI asked for Strength.....And God gave me Difficulties to make me strong.\n \nI asked for Wisdom.......And God gave me Problems to solve.\n \nI asked for Prosperity...And God gave me a Brain and  Brawn to work.\n \nI asked for Courage......And"
    },
    {
      "id": 199,
      "title": "I Believe",
      "text": "I BELIEVE\n\nI believe in Miracles and dreams that will come true,\nAnd I believe in happiness And friendship, through and through\nI believe that when you cry your tears are not in vain,\nAnd when you're sad and lonely someone knows that you're in pain.\n\nI be"
    },
    {
      "id": 200,
      "title": "I Can Do All Things Through Christ Who Strengthens Me",
      "text": "PHILIPPIANS 4:13\n\nI CAN DO ALL THINGS THROUGH CHRIST WHO STRENGTHENS ME.\n\nThe road to success is not straight. There is a curve called Failure, a loop called Confusion, speed bumps called Friends, red lights called Enemies, caution lights called Family. Y"
    },
    {
      "id": 201,
      "title": "I Found Jesus There",
      "text": "I FOUND JESUS THERE\n\nThe surgeon sat beside the boy's bed; the boy's parents sat across from him. \"Tomorrow morning,\" the surgeon began, \"I'll open up your heart...\"\n\n\"You'll find Jesus there,\" the boy interrupted.\n\nThe surgeon looked up, annoyed. \"I'll c"
    },
    {
      "id": 202,
      "title": "I Have Moved",
      "text": "I HAVE MOVED!!!!!!\n\nCan't remember if I told you all, but:\n\nI have moved out from 1 Beggars Alley, located at 2 Poverty Lane at the corner of Bleak and Buster Circle. As of today, I have a brand new home.\n\nMy new address is: Living Well on 3 Abundance Dri"
    },
    {
      "id": 203,
      "title": "I Know",
      "text": "I KNOW\n\nI know He is the beginning, so why do I worry about the end.\nI know He is the creator, so why do I wonder who will destroy.\nI know He has forgiven me, so why can't I forgive myself.\nI know He is a healer, so why do I speak of sickness.\nI know He c"
    },
    {
      "id": 204,
      "title": "I May Never See Tomorrow",
      "text": "I MAY NEVER SEE TOMORROW\n \nI may never see tomorrow \nThere's no written guarantee \nAnd things that happened yesterday \nBelong to history.\n\nI cannot predict the future \nI cannot change the past \nI have just the present moment \nI must treat it as my last."
    },
    {
      "id": 205,
      "title": "If A Child Lives With Criticism",
      "text": "IF A CHILD LIVES WITH CRITICISM\n \nIf children live with criticism, they learn to condemn\nIf children live with hostility, they learn to fight\nIf children live with fear, they learn to be apprehensive\nIf children live with pity, they learn to feel sorry fo"
    },
    {
      "id": 206,
      "title": "If Tomorrow Never Comes",
      "text": "IF TOMORROW NEVER COMES\n\nIf I knew it would be the last time that I'd see you fall asleep, \nI would tuck you in more tightly and pray the Lord your soul to  keep.\n\nIf I knew it would be the last time that I see you walk out the door, \nI would give you a h"
    },
    {
      "id": 207,
      "title": "Imagine Hearing This",
      "text": "IMAGINE HEARING THIS\n\nImagine praying and hearing this:\n\n\"Thank you for calling My Father's House. Please select one of the following four options:\n\n* Press 1 for requests.\n\n* Press 2 for thanksgiving.\n\n* Press 3 for complaints.\n\n* For all other inquiries"
    },
    {
      "id": 208,
      "title": "Imitating His Voice",
      "text": "IMITATING HIS VOICE\n\nPastor Mark Thompson of Faribault, Minnesota, suffered terrible knife wounds from an assailant in his home, in October 1988.  One of the many consequences of his difficult recovery was being forced to miss watching  his son Chris run"
    },
    {
      "id": 209,
      "title": "Important Recall Notice",
      "text": "IMPORTANT RECALL NOTICE\n\nVital For Your Health and Well-being!\n\nThe maker of all human beings is recalling all units manufactured, regardless of make or year, due to the serious defect in the primary and central component or heart. This is due to a malfun"
    },
    {
      "id": 210,
      "title": "In God We Trust",
      "text": "IN GOD WE TRUST\n\nSeveral years ago, a friend of mine and her husband were invited to\nspend the weekend at the husband's employer's home. My friend, Arlene,\nwas nervous about the weekend. The boss was very wealthy, with a fine\nhome on the water-way, and ca"
    },
    {
      "id": 211,
      "title": "Installing Love",
      "text": "INSTALLING LOVE\n\nTech Support:     Yes, Ma'am.... how can I help you?\n\nCustomer:     Well, after much consideration, I've decided to install Love. Can you guide me though the process?\n\nTech Support:     Yes. I can help you. Are you ready to proceed?\n\nCust"
    },
    {
      "id": 212,
      "title": "Instructions for Life",
      "text": "INSTRUCTIONS FOR LIFE\n\n1.  Give people more than they expect and do it cheerfully.\n2.  Memorize your favorite poem.\n3.  Don't believe all you hear.\n4.  Don't spend all you have.\n5.  Don't sleep all you want.\n6.  When you say, \"I love you\", mean it.\n7.  Wh"
    },
    {
      "id": 213,
      "title": "Irish Blessings",
      "text": "IRISH BLESSINGS!\n\nMay soft gentle breezes brush o'er your face,\nFor each loving touch is God's warm embrace.\nMay you have enough for all that you need,\nAnd never be hurt by another's greed.\nThe Lord keep you safe from terrible things,\nAnd at the end of th"
    },
    {
      "id": 214,
      "title": "Is God Dancing on Your Potato Chips?",
      "text": "IS GOD DANCING ON YOUR POTATO CHIPS?\n\nNot too long ago I had \"one of those days.\" I was feeling pressure from a writing deadline. I had company arriving in a couple days and the toilet was clogged. I went to the bank, and the trainee teller processing my"
    },
    {
      "id": 215,
      "title": "Is Not It Strange",
      "text": "ISN'T IT STRANGE?\n\nIsn't it strange how a 20 dollar bill seems like such a large amount when you donate it to church, but such a small amount when you go shopping?\n\nIsn't it strange how 2 hours seem so long when you're at church, and how short they seem w"
    },
    {
      "id": 216,
      "title": "Is Your Hut Burning",
      "text": "IS YOUR HUT BURNING?\n \nThe only survivor of a shipwreck was washed up on a small, uninhabited island. He prayed feverishly for God to rescue him, and every day he scanned the horizon for help, but none seemed forthcoming.\n \nExhausted, he eventually manage"
    },
    {
      "id": 217,
      "title": "Is Your Hut Burning?",
      "text": "IS YOUR HUT BURNING?\n\nThe only survivor of a shipwreck was washed up on a small, uninhabited island. He prayed feverishly for God to rescue him, and every day he scanned the horizon for help, but none seemed forthcoming.\n\nExhausted, he eventually managed"
    },
    {
      "id": 218,
      "title": "It Is All In The Resumes",
      "text": "IT IS ALL IN THE RESUMES\n\n\nTO:   Jesus, Son of Joseph\n      The Woodrcrafter's Carpenter Shop\n      Nazareth   25922\n\nFROM: Jordan Management Consultants\n      Jerusalem  26544\n\nRE:   Personnel Evaluations\n\nThank you for submitting the resumes of the twel"
    },
    {
      "id": 219,
      "title": "It Is In Your Face",
      "text": "IT'S IN YOUR FACE\n\nYou don't have to tell how you live each day,\nYou don't have to say if you work or play,\nA tried, true barometer serves in the place;\nhowever you live, it will show in your face.\n\nThe false, the deceit you bear in your heart\nWill not st"
    },
    {
      "id": 220,
      "title": "It Is Only A Quarter",
      "text": "IT'S ONLY A QUARTER!\n\nSeveral years ago a preacher moved to Houston, Texas. Some weeks after he arrived, he had occasion to ride the bus from his home to the downtown area.  When he sat down, he discovered that the driver had accidentally given him a quar"
    },
    {
      "id": 221,
      "title": "It Is The Soldier",
      "text": "IT IS THE SOLDIER\n\n�It is the soldier, not the reporter,\nWho has given us freedom of the press.\nIt is the soldier, not the poet,\nWho has given us freedom of speech.\n\nIt is the soldier, not the campus organizer,\nWho has given us the freedom to demonstrate."
    },
    {
      "id": 222,
      "title": "It Must Be Settled Tonight",
      "text": "IT MUST BE SETTLED TONIGHT\n\nThe burly miner blinked as he left the dark interior of the coal mine.\nStopping at a faucet near the mine entrance, he washed the worst of the\ngrime from his face and hands, then headed towards his home on the\noutskirts of the"
    },
    {
      "id": 223,
      "title": "It Takes Guts to Say \"Jesus",
      "text": "IT TAKES GUTS TO SAY 'JESUS'\n\nThis is a true story of something that happened just a few years ago at USC. \n\nThere was a professor of philosophy there who was a deeply committed atheist. His primary goal for one required class was to spend the entire seme"
    },
    {
      "id": 224,
      "title": "J.E.S.U.S. C.H.R.I.S.T.",
      "text": "J.E.S.U.S. C.H.R.I.S.T.\n\n  J esus, Son of God Eternal\n  E verlasting Lord is He,\n  S avior of a world of sinners,\n  U niversal King to be,\n  S ought us, brought us victory.\n\n  C hrist is due all adoration,\n  H umbly born to save our race,\n  R uler of the"
    },
    {
      "id": 225,
      "title": "Jeffie and Grandpa",
      "text": "JEFFIE AND GRANDPA\n\nJeffie was in his playpen and he was crying. Tears were rolling down his little cheeks, his face was red as it could be. He was crying, and he looked pitiful in his little baseball T-shirt and a diaper.\n\nThen Jeffie's Grandpa entered t"
    },
    {
      "id": 226,
      "title": "Jelly Bean Prayer",
      "text": "JELLY BEAN PRAYER\n\nHave you heard the story of the jelly beans?\n\nThe black ones are a symbol of our sinful heart, cold and hard not a good start.\n\nThe red ones would be, the blood shed for you and me.\n\nThe white ones would mean washed white as snow, by th"
    },
    {
      "id": 227,
      "title": "Jesus Has Risen",
      "text": "JESUS HAS RISEN\n \nMatthew 28: 1-8 \n \n1 After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary went to look at the tomb. \n2 There was a violent earthquake, for an angel of the Lord came down from heaven and, going to the"
    },
    {
      "id": 228,
      "title": "Jesus In The House",
      "text": "JESUS IN THE HOUSE\n\nOne day he decided to invite the Lord to come home and stay with him. When the Lord arrived, this young man offered him the very best room in the house.  The room was upstairs and at the end of the hall.  \"This room is yours, Jesus! St"
    },
    {
      "id": 229,
      "title": "Jesus Loves Me",
      "text": "JESUS LOVES ME!\n\nJesus loves me, this I know,\nThough my hair is white as snow.\nThough my sight is growing dim,\nStill He bids me trust in him.\n\n    (CHORUS)\n    YES, JESUS LOVES ME... YES, JESUS LOVES ME...\n    YES. JESUS LOVES ME FOR THE BIBLE TELLS ME SO"
    },
    {
      "id": 230,
      "title": "Jesus Really Loves You",
      "text": "JESUS REALLY LOVES YOU\n\nEvery Sunday afternoon, after the morning service at their church, the \nPastor and his 11-year-old son would go out into their town and hand out \nGospel tracts. This particular Sunday afternoon, as it came time for the \nPastor and"
    },
    {
      "id": 231,
      "title": "John 3:16",
      "text": "JOHN 3:16\n\nIn the city of Chicago, one cold, dark night, a blizzard was setting in. A little boy was selling newspapers on the corner, the people were in and out of the cold.  The little boy was so cold that he wasn't trying to sell many papers.  He walke"
    },
    {
      "id": 232,
      "title": "Joyful Things",
      "text": "JOYFUL THINGS\n\nAt times I'm so discouraged\nwith problems of the day\nI fail to see the joyful things\nthat are along the way\n\nWhen troubles overwhelm me\nIt's then my nerves may fray\nthat's when I need to take the time\nTo simply sit and pray\n\nReflecting on G"
    },
    {
      "id": 233,
      "title": "Judge Gently",
      "text": "JUDGE GENTLY\n\nPray, don't find fault with the man that limps\nOr stumbles along the road.\nUnless you have worn the shoes he wears\nOr struggled beneath his load.\n\nThere may be tacks in his shoes that hurt\nThough hidden away from view.\nOr the burden he bears"
    },
    {
      "id": 234,
      "title": "Just a Box of Crayons",
      "text": "JUST A BOX OF CRAYONS\n\nWhile walking in a toy store\nThe day before today,\nI over heard a Crayon Box\nWith many things to say.\n\n\"I don't like red!\" said Yellow.\nAnd Green said, \"Nor do I!\"\nAnd no one here likes Orange,\nBut no one knows quite why.\n\n\"We are a"
    },
    {
      "id": 235,
      "title": "Just Call Upon Him",
      "text": "JUST CALL UPON HIM\n\nThe boy walked along the ocean shore . . . trying not to stray. \nHe looked up to his father saying, \"Dad, I want to play.\"\n\nHis father looked upon him, with love showing in his eyes. \n\"Do what you want to, my son . . . but do not leave"
    },
    {
      "id": 236,
      "title": "Just Five More Minutes",
      "text": "JUST FIVE MORE MINUTES\n\nWhile at the park one day, a woman sat down next to a man on a bench near a playground. \"That's my son over there,\" she said, pointing to a little boy in a red sweater who was gliding down the slide.\n\n\"He's a fine looking boy\" the"
    },
    {
      "id": 237,
      "title": "Keys For Living",
      "text": "KEYS FOR LIVING\n\n1. The best way to get even is to forget...\n\n2. Feed your faith and your doubts will starve to death...\n\n3. God wants spiritual fruit, not religious nuts...\n\n4. Some folks wear their halos much too tightly...\n\n5. Some marriages are made i"
    },
    {
      "id": 238,
      "title": "Kids Letters To God",
      "text": "KIDS' LETTERS TO GOD\n\nDear God,\nDid you mean for the giraffe to look like that or was it an accident?\nNorma\n\nDear God,\nInstead of letting people die and having to make new ones, why don't you just keep the ones you have now?\nJane\n\nDear God,\nWho draws the"
    },
    {
      "id": 239,
      "title": "Kids, They Give The Truth",
      "text": "KIDS - THEY GIVE THE TRUTH!\n\nOne day a 6 year old girl was sitting in a classroom. The teacher was\ngoing to explain evolution to the children.  The teacher asked a little\nboy:\n\nTommy do you see the tree outside?\n\nTOMMY: Yes.\nTEACHER: Tommy, do you see the"
    },
    {
      "id": 240,
      "title": "Lamb Of God Poem",
      "text": "LAMB OF GOD POEM\n\n    Mary had a little Lamb,\n    His fleece was white as snow.\n    And everywhere that Mary went,\n    The Lamb was sure to go.\n\n    He followed her to school each day,\n    When it wasn't against the rules.\n    He made the children laugh a"
    },
    {
      "id": 241,
      "title": "Leaving the City of Regret",
      "text": "LEAVING THE CITY OF REGRET\n\nI had not really planned on taking a trip this time of year, and yet, I found myself packing rather hurriedly. This trip was going to be unpleasant and I knew in advance that no real good would come of it. I'm talking about my"
    },
    {
      "id": 242,
      "title": "Lessons On Life",
      "text": "LESSONS ON LIFE\n\nThere was a man who had four sons. He wanted his sons to learn not to judge things too quickly. So he sent them each on a quest, in turn, to go and look at a pear tree that was a great distance away.\n\nThe first son went in the winter, the"
    },
    {
      "id": 243,
      "title": "Let Go Of The Past",
      "text": "LET GO OF THE PAST\n\n\nMy child,\n\nGive up! Give up those hurts of the past.  It's time to move on.  satan loves to have you live in the past because that renders you ineffective to live in the present-in the now.\n\nTell Me, child.  What is it that has happen"
    },
    {
      "id": 244,
      "title": "Let Us Face It - God Does Not Care",
      "text": "Let's Face It - GOD DOESN'T CARE!\n\nGod doesn't care what kind of car you drive  - God cares that you are \nwilling to drive people who don't have transportation.\n\nGod doesn't care about the square footage of your house - God cares that \nyou welcome people"
    },
    {
      "id": 245,
      "title": "Letter from God",
      "text": "From:     GOD\nTo:         All those who believe in me\nDate:      Today and Everyday\nSubject:  Life's problems\n\nI am God. Today I will be handling all of your problems. Please remember that I do not need your help. If the devil happens to deliver a situati"
    },
    {
      "id": 246,
      "title": "Letter In The Night",
      "text": "LETTER IN THE NIGHT\n\nThis is pretty deep and definitely worth reading!  You just can't keep\nit to yourself, you've got to tell somebody about the love  of God! Be\nblessed!\n\nOne day a woman named Louise fell asleep in her bed and dreamed a very\nfitful drea"
    },
    {
      "id": 247,
      "title": "Life Is An Echo",
      "text": "LIFE IS AN ECHO\n\nA son and his father were walking in the mountains. Suddenly, his son falls, hurts himself and screams: \"AAAhhhhhhhhhhh!!!\"\n\nTo his surprise, hears the voice repeating, somewhere in the mountain: \"AAAhhhhhhhhhhh!!!\"\n\nCurious, he yells: \"W"
    },
    {
      "id": 248,
      "title": "Life Storms",
      "text": "LIFE�S STORMS\n\nA pastor had been on a long flight between church conferences. The first warning of the approaching problems came when the sign on the airplane flashed on: Fasten Your Seat Belts. Then, after a while, a calm voice said, \"We shall not be ser"
    },
    {
      "id": 249,
      "title": "Listen To Me",
      "text": "LISTEN TO ME\n\nEffective immediately, please be aware that there are changes YOU need to make in YOUR life. These changes need to be completed in order that I may fulfill My promises to you to grant you peace, joy and happiness in this life. I apologize fo"
    },
    {
      "id": 250,
      "title": "Living Your Life Without Sin",
      "text": "LIVING YOUR LIFE WITHOUT SIN\n\nThere was a little girl, who's father was a pastor.\n\nOne day, she came to her father and said, \"Daddy, can a person go their whole life without sinning?\"\n\nThe father answered, \"No, honey, I'm sorry, but that's just not possib"
    },
    {
      "id": 251,
      "title": "Look Up",
      "text": "LOOK UP\n\nIf you put a buzzard in a pen six or eight feet square and entirely open\nat the top, the bird, in spite of his ability to fly, will be an\nabsolute prisoner. The reason is that a buzzard always begins a flight\nfrom the ground with a run of ten or"
    },
    {
      "id": 252,
      "title": "Lord Prop Us Up",
      "text": "LORD, PROP US UP \n\nEvery time I am asked to pray, I think of the old deacon who always prayed, Lord, prop us up on our leanin' side.' \n\nAfter hearing him pray that prayer many times, someone asked him why he prayed that prayer so fervently. \n\nHe answered,"
    },
    {
      "id": 253,
      "title": "Lucky",
      "text": "LUCKY\n\nAnyone who has pets will really like this. You'll like it even if you don't and may decide you need one. Mary and her husband Jim had a dog, Lucky. Lucky was a real character. Whenever Mary and Jim had company come for a weekend visit they would wa"
    },
    {
      "id": 254,
      "title": "Make a Difference",
      "text": "MAKE A DIFFERENCE\n\nA teacher in New York decided to honor each of her seniors in high school by telling them the difference they each made. She called each student to the front of the class, one at a time. First she told each of them how they had made a d"
    },
    {
      "id": 255,
      "title": "May You Always Feel Loved",
      "text": "MAY YOU ALWAYS FEEL LOVED  \n\nMay you find serenity and tranquility in a world you may not always understand.\n\nMay the pain you have known and the conflict you have experienced give you the strength to walk through life facing each new situation with optim"
    },
    {
      "id": 256,
      "title": "Maybe",
      "text": "MAYBE\n\nMaybe God wanted us to meet the wrong people before meeting the right one so that when we finally meet the right person, we will know how to be grateful for that gift.\n\nMaybe when the door of happiness closes, another opens, but often times we look"
    },
    {
      "id": 257,
      "title": "Meeting God",
      "text": "MEETING GOD\n\nThere once was a little boy who wanted to meet God.  He knew it was a long trip to where God lived, so he packed his suitcase with Twinkies and a six-pack of root beer, and he started his journey.  When he had gone about three blocks, he met"
    },
    {
      "id": 258,
      "title": "Memo from God",
      "text": "MEMO FROM GOD\n\nI am God. Today I will be handling all of your problems. Please remember that I do not need your help. If life happens to deliver a situation to you that you cannot handle, do not attempt to resolve it. Kindly put it in the SFGTD (something"
    },
    {
      "id": 259,
      "title": "Missions",
      "text": "MISSIONS\n\nI have been contacted by a lot of E-Mail Ministry subscribers who are \nworking in the mission field.  They have told me how they use the E-Mail Ministry messages to help teach the Gospel.\n\nI asked a friend of my parents, who has worked in the mi"
    },
    {
      "id": 260,
      "title": "Moses and the New Computerized Ten Commandments",
      "text": "MOSES AND THE \"NEW COMPUTERIZED TEN COMMANDMENTS\"\n\nMOSES: \"Excuse me, Sir.\"\n\nGOD: \"Is that you again, Moses?\"\n\nMOSES: \"I'm afraid it is, Sir.\"\n\nGOD: \"What is it this time, Moses; more computer problems?\"\n\nMOSES: \"How did you guess?\"\n\nGOD: \"I don't have to"
    },
    {
      "id": 261,
      "title": "Mother Day",
      "text": "A note from doug: For parts of the world, today marks a special day.  A day we say \"Thanks\" to our Moms for all they have done for us over the years.  After a little research, I discovered that Mother's Day is celebrated at all different times during the"
    },
    {
      "id": 262,
      "title": "Mountain Moving Faith",
      "text": "MOUNTAIN MOVING FAITH\n\nO, to have such faith!\n\nFaith to Move Mountains....\n\nA small congregation in the foothills of the Great Smokies built a new\nsanctuary on a piece of land willed to them by a church member.  Ten\ndays before the new church was to open,"
    },
    {
      "id": 263,
      "title": "Move Closer",
      "text": "MOVE CLOSER\n\nNot long ago I heard a story about a young man and an old preacher.\n\nThe young man had lost his job and didn't know which way to turn. So he went to see the old preacher.\n\nPacing about the preacher's study, the young man ranted about his prob"
    },
    {
      "id": 264,
      "title": "My 10 Resolutions for 2008",
      "text": "MY 10 RESOLUTIONS FOR 2008\n\nThis coming year, I have decided that with God's help, I shall:-\n\nGive up complaining . . . focus on gratitude.\n\nGive up harsh judgments . . . think kind thoughts.\n\nGive up worry . . . trust divine providence.\n\nGive up discoura"
    },
    {
      "id": 268,
      "title": "Never Alone",
      "text": "NEVER ALONE\n\nDo you know the legend of the Cherokee Indian youth's rite of passage? His dad takes him into the forest..blindfolded...and leaves him....alone.  \n\nHe is required to sit on a stump the whole night...and not take off the blindfold until the ra"
    },
    {
      "id": 269,
      "title": "Never Give Up",
      "text": "NEVER GIVE UP \n \nOne day a young lady was driving along with her father. \n\nThey came upon a storm, and the young lady asked her father, What should I do?\"\n\nHe said \"keep driving\".  Cars began to pull over to the side, the storm was getting worse.   \n\n\n\"Wh"
    },
    {
      "id": 270,
      "title": "New Version of Footprints",
      "text": "NEW VERSION OF FOOTPRINTS\n\nImagine you and the Lord Jesus are walking down the road together. For much of the way, the Lord's footprints go along steadily, consistently, rarely varying the pace. But your footprints are a disorganized stream of zigzags, st"
    },
    {
      "id": 271,
      "title": "New Year Resolutions",
      "text": "Hello.\nI'm John Ferree, an 18 year old senior at Zionsville High School, however unfortunate that may be. In the fall I will most likely be going to the University of Montana located in Missoula. I have one brother, Chris, who goes to the Indiana Academy"
    },
    {
      "id": 272,
      "title": "Nineteen Somethings To Say To Children",
      "text": "NINETEEN SOMETHINGS TO SAY TO CHILDREN\n\n1. I love you! There is nothing that will make me stop loving you. Nothing you could do or say or think will ever change that.\n\n2. You are amazing!  I look at you with wonder! Not just at what you can do, but who yo"
    },
    {
      "id": 273,
      "title": "No Excuse Sunday",
      "text": "NO EXCUSE SUNDAY\n\nTo make it possible for everyone to attend church next Sunday, we are going to have a special \"No Excuse Sunday\".\n\nCots will be placed in the foyer for those who say, \"Sunday is my only \nday to sleep in.\"\n\nThere will be a special section"
    },
    {
      "id": 274,
      "title": "No More With Me",
      "text": "NO MORE WITH ME\n\n\"I'm sorry. Please forgive me! I don't mean to hold you up,\" he said as he struggled to get off the escalator.\n\nI'll admit to it. There have been times when walking or driving behind an older person I've gotten impatient and upset.  I've"
    },
    {
      "id": 275,
      "title": "No Time",
      "text": "NO TIME\n\nI knelt to pray but not for long,\nI had too much to do.\nI had to hurry and get to work\nFor bills would soon be due.\n\nSo I knelt and said a hurried prayer,\nAnd jumped up off my knees.\nMy christian duty was now done\nMy soul could rest at ease.\n\nAll"
    },
    {
      "id": 276,
      "title": "Noah Ark",
      "text": "ALL WE REALLY NEED TO KNOW WE LEARNED FROM NOAH'S ARK\n\n1. Plan ahead. It wasn't raining when Noah built the ark.\n\n2. Stay fit. When you're 600 years old, someone might ask you to do something REALLY big.\n\n3. Don't listen to critics -- do what has to be do"
    },
    {
      "id": 277,
      "title": "Not Home Yet",
      "text": "NOT HOME YET\n\nAn old missionary couple had been working in Africa for years and was returning to New York to retire. They had no pension; their health was broken; they were defeated, discouraged, and afraid. They discovered they were booked on the same sh"
    },
    {
      "id": 278,
      "title": "Now Can We Pray?",
      "text": "NOW CAN WE PRAY?\n\nNOW \n   that the PRESIDENT has called us to PRAYER..... \nNOW \n   that CONGRESS has called us to PRAYER..... \nNOW \n   that our GOVERNOR has called us to PRAYER.... \nNOW \n   that the city MAYOR has called us to PRAYER.... \nNOW \n   that the"
    },
    {
      "id": 279,
      "title": "Now I Sit Me Down In School",
      "text": "NOW I SIT ME DOWN IN SCHOOL\n\n( Written by a 12 year-old girl in Boston)\n\nNow I sit me down in school\nWhere praying is against the rule.\nFor this great nation under God\nFinds mention of Him very odd.\nIf Scripture now the class recites\nIt violates the Bill"
    },
    {
      "id": 280,
      "title": "Nudge The Balance",
      "text": "NUDGE THE BALANCE\n\nA 91-year-old woman died after living a very long dignified life. When she met God, she asked Him something that had really bothered her for a very long time. \"If Man was created in God's image, and if all men are created equal, why do"
    },
    {
      "id": 281,
      "title": "Oh, God, Make Me A Better Parent",
      "text": "OH, GOD, MAKE ME A BETTER PARENT\n\nOh, God, make me a better parent.\nHelp me to understand my children,\nto listen patiently to what they have to say\nand to answer all their questions kindly.\nKeep me from interrupting them,\ntalking back to them and contradi"
    },
    {
      "id": 283,
      "title": "On The Other Side",
      "text": "ON THE OTHER SIDE\n\nA sick man turned to his doctor, as he was preparing to leave the examination room and said, \"Doctor, I am afraid to die.  Tell me what lies on the other side.\"\n\nVery quietly, the doctor said, \"I don't know.\"\n\n\"You don't know?  You, a C"
    },
    {
      "id": 284,
      "title": "One Guy Did Not",
      "text": "ONE GUY DIDN'T\n\nThree guys were tried for crimes against humanity.\nTwo guys committed crimes.\nOne guy didn't.\n\nThree guys were given government trials.\nTwo guys had fair trials.\nOne guy didn't.\n\nThree guys were whipped and beaten.\nTwo guys had it coming."
    },
    {
      "id": 285,
      "title": "One Solitary Life",
      "text": "ONE SOLITARY LIFE\n\nHe was born in an obscure village, the child of a peasant woman.\nHe grew up in still another village, where he worked in a carpenter shop\nuntil he was 30.\nThen for three years he was an itinerant preacher.\nHe never wrote a book.\nHe neve"
    },
    {
      "id": 286,
      "title": "One Thing To Never Forget",
      "text": "ONE THING TO NEVER FORGET\n\nYour presence, is a present to the world.\nYou're unique and one of a kind.\nYour life can be, what you want it to be.\nTake the days, just one at a time.\n\nCount your blessings, not your troubles.\nYou'll make it through, whatever c"
    },
    {
      "id": 287,
      "title": "One Worth",
      "text": "ONE'S WORTH\n\nA well known speaker started off his seminar by holding up a $20 bill. In the room of 200, he asked, \"Who would like this $20 bill?\" Hands started going up.  He said, \"I am going to give this $20 to one of you, but first, let me do this.\"  He"
    },
    {
      "id": 288,
      "title": "Only One Childhood",
      "text": "ONLY ONE CHILDHOOD\n\nI stopped to watch my little girl\nbusy playing in her room.\nIn one hand was a plastic phone;\nin the other a toy broom.\n\nI listened as she was speaking\nto her make believe little friend\nand I'll never forget the words she said,\neven tho"
    },
    {
      "id": 289,
      "title": "Our Lives",
      "text": "OUR LIVES\n\nAs we look back over our lives, it is not too difficult to see that what we went through was for a purpose and helped to prepare us for some valuable work in life.  Everything in our lives can help make us of some use in the world.  Each person"
    },
    {
      "id": 290,
      "title": "Out of Bondage",
      "text": "OUT OF BONDAGE\n\nOne of the biggest mathematical miracles in the world centers around\nMoses and the people of Israel. Moses and the people of Israel were in\nthe desert, but what was he going to do with them? They had to be fed,\nand feeding 3 or 3 1/2 milli"
    },
    {
      "id": 291,
      "title": "P.U.S.H.",
      "text": "P.U.S.H.\n\nA man was sleeping at night in his cabin when suddenly his room filled with light and the Savior appeared.  The Lord told the man he had work for him to do, and showed him a large rock in front of his cabin.  The Lord explained that the man was"
    },
    {
      "id": 292,
      "title": "Paid In Full",
      "text": "PAID IN FULL\n\nYour day in court will come one day, so make sure that you have good representation.\n\nAfter living a \"decent\" life my time on earth came to an end.  The first thing I remember is sitting on a bench in the waiting room of what I thought to be"
    },
    {
      "id": 293,
      "title": "Pancakes and Love",
      "text": "PANCAKES AND LOVE\n\nSix year old Brandon decided one Saturday morning to fix his parents pancakes. He found a big bowl and spoon, pulled a chair to the counter, opened the cupboard and pulled out the heavy flour canister, spilling it on the floor. He scoop"
    },
    {
      "id": 294,
      "title": "Pappy",
      "text": "PAPPY\n\nPappy was a pleasant-looking old fellow. He had the whitest hair which he kept neatly cut and combed. His eyes were blue, though faded with age, and they seemed to emit a warmth from within. His face was quite drawn, but when he smiled, even his wr"
    },
    {
      "id": 295,
      "title": "Parable Of The Pencil",
      "text": "PARABLE OF THE PENCIL\n\nThe Pencil Maker took the pencil aside, just before putting him into the box. There are 5 things you need to know, he told the pencil, before I send you out into the world. Always remember them and never forget, and you will become"
    },
    {
      "id": 296,
      "title": "Pearls",
      "text": "PEARLS\n\nThe cheerful girl with bouncy golden curls was almost five.  Waiting with her mother at the checkout stand, she saw them:  a circle of glistening white pearls in a pink foil box.  \"Oh please,  Mommy, can I have them?  Please, Mommy, please?\"\n\nQuic"
    },
    {
      "id": 297,
      "title": "Pedal",
      "text": "PEDAL\n\nI used to think of God as my observer, my judge, keeping track of the things I did wrong, so as to know whether I merited heaven or hell when I die.  He was out there, sort of like a president.  I recognized His picture when I saw it, but I didn't"
    },
    {
      "id": 298,
      "title": "Pennies From Heaven",
      "text": "PENNIES FROM HEAVEN\n\n  I found a penny today\n  just laying on the ground\n  But it's not just a penny\n  this little coin I've found\n\n  \"Found\" pennies come from heaven\n  that's what my Grandpa told me\n  He said angels toss them down\n  oh, how I loved that"
    },
    {
      "id": 299,
      "title": "Perspectives",
      "text": "PERSPECTIVES!\n\nOne day, a financially comfortable father decided to take his son to the country, with the purpose of showing him how poor people live, and that the son could understand the value of things, and realize how fortunate they were.\n\nThey stayed"
    },
    {
      "id": 300,
      "title": "Piano Concert",
      "text": "PIANO CONCERT\n\nWishing to encourage her young son's progress on the piano, a mother took her boy to a Paderewski concert. After they were seated, the mother spotted a friend in the audience and walked down the aisle to greet her.\n\nSeizing the opportunity"
    },
    {
      "id": 302,
      "title": "Pinewood Derby",
      "text": "PINEWOOD DERBY (The wisdom of a child)\n\nMy son Gilbert was eight years old and had been in Cub Scouts only a short time. During one of his meetings he was handed a sheet of paper, a block of wood and four tires and told to return home and give all to \"dad"
    },
    {
      "id": 303,
      "title": "Plant Four Rows",
      "text": "PLANT FOUR ROWS\n\nPlant four rows of peas.\n     Prayer\n     Penitence\n     Patience\n     Preparation\n\nPlant four rows of squash.\n     Squash gossip\n     Squash indifference\n     Squash criticism\n     Squash negative thinking\n\nPlant four rows of turnips."
    },
    {
      "id": 305,
      "title": "Prayer For Guidance and Protection to Those I Love",
      "text": "PRAYER FOR GUIDANCE AND PROTECTION TO THOSE I LOVE\n\nO heavenly Father, our protector and guide, You are the greatest Friend and joy we have! To be able to come to You in prayer like this is the most beautiful part of our lives!\n\nIt is not for myself that"
    },
    {
      "id": 306,
      "title": "Prints of Elbows on My Bed",
      "text": "PRINTS OF ELBOWS ON MY BED\n\nI was but a youth and thoughtless, \nAs all youths are apt to be; \nThough I had a Christian mother \nWho had taught me carefully. \n\nThere came a time when pleasure \nOf the world came to allure, \nAnd I no more sought the guidance"
    },
    {
      "id": 307,
      "title": "Psalm 23",
      "text": "PSALM 23\n\nThere once was a Shakespearean actor who was known everywhere for his\none-man shows of readings and recitations from the classics. He would\nalways end his performance with a reading of Psalm 23. \n\nEach night, without exception, as the actor bega"
    },
    {
      "id": 308,
      "title": "Psalm 23 (For the Workplace)",
      "text": "PSALM 23 (FOR THE WORKPLACE)\n\nThe Lord is my boss, and I shall not want.\nHe gives me peace, when chaos is all around me.\nHe reminds me to pray, before I speak in anger.\nHe restores my sanity.\nHe guides my decisions that I might honor Him in all I do.\nEven"
    },
    {
      "id": 309,
      "title": "Puppy Size",
      "text": "PUPPY SIZE\n\n\"Danielle keeps repeating it over and over again. We've been back to this animal shelter at least five times. It has been weeks now since we started all of this,\" the mother told the volunteer.\n\n\"What is it she keeps asking for?\" the volunteer"
    },
    {
      "id": 310,
      "title": "Quiet My Heart, Lord",
      "text": "QUIET MY HEART, LORD\n\nQuiet my heart, Lord,\nand show me a Christmas\nas peaceful and calm as\nan old cattle shed...\n\nSlow down my pace, Lord,\nand help me seek Jesus,\nthe Son of Your Love,\nin a humble straw bed...\n\nSteady my spirit, Lord,\ncall me from chaos"
    },
    {
      "id": 311,
      "title": "Real Friend Test",
      "text": "REAL FRIEND TEST\n\nA simple friend, when visiting, acts like a guest. A real friend opens your refrigerator and helps himself (and doesn't feel even the least bit weird shutting your 'beer/Pepsi drawer' with her foot!)\n\nA simple friend has never seen you c"
    },
    {
      "id": 312,
      "title": "Recipe for Kindness",
      "text": "RECIPE FOR KINDNESS\n\nFold two hands together\nAnd express a dash of sorrow\nMarinate it overnight\nAnd work on it tomorrow.\n\nChop one grudge in tiny pieces\nAdd several cups of love\nDredge with a large  sized smile\nMix with the ingredients above.\n\nDissolve th"
    },
    {
      "id": 313,
      "title": "Recipe For Miracles",
      "text": "RECIPE FOR MIRACLES\n\nIngredients:\n\n1 part of knowing who you are\n1 part of knowing who you aren't\n1 part of knowing what you want\n1 part of knowing who you wish to be\n1 part of knowing what you already have\n1 part of choosing wisely from what you have\n1 p"
    },
    {
      "id": 314,
      "title": "Remember",
      "text": "REMEMBER\n\n* Remember that your presence is a present to the world.\n* Remember that you are a unique and unrepeatable creation.\n* Remember that your life can be what you want it to be.\n* Remember to take the days just one at a time.\n* Remember to count you"
    },
    {
      "id": 315,
      "title": "Remember My Birthday",
      "text": "REMEMBER MY BIRTHDAY?\n\nAs you well know, we are getting closer to my birthday. Every year there is a celebration in my honor and I think that this year the celebration will be repeated. During this time there are many people shopping for gifts, there are"
    },
    {
      "id": 317,
      "title": "Remember the Duck",
      "text": "REMEMBER THE DUCK\n\nThere was a little boy visiting his grandparents on their farm. He was given a slingshot to play with, out in the woods.  He practiced in the woods, but he could never hit the target. Getting a little discouraged, he headed back to dinn"
    },
    {
      "id": 318,
      "title": "Remembering Memorial Day",
      "text": "REMEMBERING MEMORIAL DAY\n\nA Memorial Day Message:\n\nStaying Faithful to the End\nby Colonel Don Martin, Jr., AUS (Ret)\nDeputy Executive Director, Officers' Christian Fellowship\n\nIn January of 1968, while serving as the executive officer of the 2nd Squadron,"
    },
    {
      "id": 319,
      "title": "Request for Transfer",
      "text": "REQUEST FOR TRANSFER\n\nTO: Commander and Chief Spiritual Armed Forces, Jesus Christ\n\nDear Lord;\n\nI am writing this to You to request a transfer to a desk job. I herewith present my reasons: I began my career as a private, because of the intensity of the ba"
    },
    {
      "id": 320,
      "title": "Resurrection Sunday Story Cookies",
      "text": "RESURRECTION SUNDAY STORY COOKIES\n \n You need:\n 1 c. whole pecans\n 1 tsp. vinegar\n 3 egg whites\n pinch salt\n 1 c. sugar\n zipper baggie\n wooden spoon\n tape\n Bible\n\nPreheat oven to 300 F. (this in important - don't wait till you are half way done with the r"
    },
    {
      "id": 321,
      "title": "Rose",
      "text": "ROSE\n\nThe first day of school our professor introduced himself and challenged us to get to know someone we didn't already know. I stood up to look around when a gentle hand touched my shoulder.\n \nI turned around to find a wrinkled, little old lady beaming"
    },
    {
      "id": 322,
      "title": "Roses and Thorns",
      "text": "ROSES AND THORNS \n\nA certain man planted a rose and watered it faithfully, and before it blossomed, he examined it.  He saw the bud that would soon blossom and also the thorns.  And he thought, \"How can any beautiful flower come from a plant burdened with"
    },
    {
      "id": 323,
      "title": "Rosie Johnson Birthday",
      "text": "ROSIE JOHNSON'S BIRTHDAY\n\nImagine you get an invitation to Rosie Johnson's birthday! You have heard people mention Rosie, but you have never met her. But it sounds\nfestive. So you began preparing for her birthday. It will be celebrated\nat your home. So yo"
    },
    {
      "id": 324,
      "title": "Rudys Angel",
      "text": "RUDY'S ANGEL\n\nI walked into the grocery store not particularly interested in buying groceries. I wasn't hungry. The pain of losing my husband of 37 years was still too raw. And this grocery store held so many sweet memories.\n\nRudy often came with me and a"
    },
    {
      "id": 326,
      "title": "Rules from God for 2009",
      "text": "RULES FROM GOD FOR 2009\n\n1. Wake Up !! \nDecide to have a good day. \n'Today is the day the Lord hath made; let us rejoice and be glad in it' Psalms 118:24 \n\n2. Dress Up !! \nThe best way to dress up is to put on a smile. A smile is an inexpensive way to imp"
    },
    {
      "id": 327,
      "title": "Sand and Stone",
      "text": "SAND AND STONE\n\nTwo friends were walking through the desert. In a specific point of  the journey, they had an argument, and one friend slapped the other one in  the face. The one who got slapped was hurt, but...without saying anything,  wrote in the sand:"
    },
    {
      "id": 328,
      "title": "Sandbox Rock",
      "text": "SANDBOX ROCK\n\nA little boy was spending his Saturday morning playing in his sandbox.  He had with him his box of cars and trucks, his plastic pail, and a shiny, red plastic shovel. In the process of creating roads and tunnels in the soft sand, he discover"
    },
    {
      "id": 329,
      "title": "Santa, Can You Visit My Granddaughter",
      "text": "SANTA, CAN YOU VISIT MY GRANDDAUGHTER?\n\nThree years ago, a little boy and his grandmother came to see Santa at Mayfair Mall in Wisconsin. The child climbed up on his lap, holding a picture of a little girl.\n\n\"Who is this?\" asked Santa, smiling. \"Your frie"
    },
    {
      "id": 330,
      "title": "Savor The Coffee",
      "text": "SAVOR THE COFFEE\n\nA group of alumni, highly established in their careers, were talking at a reunion and decided to go visit their old university professor, now retired. During their visit the conversation soon turned into complaints about stress in their"
    },
    {
      "id": 331,
      "title": "Scars",
      "text": "SCARS\n\nSome years ago on a hot summer day in south Florida a little boy decided to go for a swim in the old swimming hole behind his house.\n\nIn a hurry to dive into the cool water, he ran out the back door, leaving behind shoes, socks, and shirt as he wen"
    },
    {
      "id": 332,
      "title": "Searching For A Vessel",
      "text": "SEARCHING FOR A VESSEL\n\nThe Master was searching for a vessel to use;\nOn the shelf there were many - which one would He choose?\nTake me, cried the gold one, I'm shiny and bright,\nI'm of great value and I do things just right.\nMy beauty and lustre will out"
    },
    {
      "id": 333,
      "title": "Season Meetings",
      "text": "SEASON'S MEETINGS\n\nEach year we ring in the holiday season by attending dozens of holiday meetings. This Christmas committee, that planning event. Then we still have to make the rounds to every store in the metro-plex. 'Tis the season for weeks of ulcer i"
    },
    {
      "id": 334,
      "title": "Second Chance",
      "text": "SECOND CHANCE\n\nIf we might have a second chance\nTo live the day once more,\nAnd rectify mistakes we've made\nTo even up the score.\n\nIf we might have a second chance\nto use the knowledge gained,\nPerhaps we might become at last\nAs fine as God ordained.\n\nBut t"
    },
    {
      "id": 335,
      "title": "Seven Wonders of the World",
      "text": "SEVEN WONDERS OF THE WORLD\n\n\nA group of students studied the Seven Wonders of the Modern World. At the end of that section, the students were asked to list what they considered to be the Seven:\n\n\n1. Suez Canal \n2. Dneproges Dam on the Dnepr River (USSR)"
    },
    {
      "id": 336,
      "title": "SFGTD Box",
      "text": "SFGTD Box\n\nTo: YOU \nDate: TODAY \nFrom: GOD \nSubject: YOURSELF \nReference: LIFE \n\nThis is God. Today I will be handling All of your problems for you. I do Not need your help. So, have a nice day.\n\nI love you.. And, remember... If life happens to deliver a"
    },
    {
      "id": 337,
      "title": "Shake It Off",
      "text": "SHAKE IT OFF\n\nA parable is told of a farmer who owned an old mule. The mule fell into\nthe farmer's well. The farmer heard the mule 'braying' - or - whatever\nmules do when they fall into wells. After carefully assessing the\nsituation, the farmer sympathize"
    },
    {
      "id": 338,
      "title": "Siberia / Littleton",
      "text": "SIBERIA / LITTLETON\n\nSince capturing of American soldiers in Serbia and the tragic events in Littleton, Colorado I have received several e-mails. I pass these along to you in hopes that, if you aren't all ready, you will add the captive solders and the fa"
    },
    {
      "id": 339,
      "title": "Side by Side",
      "text": "SIDE BY SIDE\n\nThey lie on the table side by side,\nThe Holy Bible and the TV guide.\n\nOne is well worn and cherished with pride,\nNot the Bible . . . but the TV guide.\n\nOne is used daily to help folks decide,\nNo, not the Bible . . . but the TV guide.\n\nAs the"
    },
    {
      "id": 340,
      "title": "Since the Shooting in Fort Worth, Texas",
      "text": "SINCE THE SHOOTING IN FT. WORTH, TEXAS\n\nNOTE: A subscriber forwarded this information concerning the message below-\n\n\"I JUST HAD TO SHARE THIS!  And I called Wedgewood Baptist  and talked with the receptionist who corrected  just two points, but verified"
    },
    {
      "id": 341,
      "title": "Six Year Old Prayer",
      "text": "SIX YEAR OLD'S PRAYER\n\nLast week I took my children to a restaurant. My six-year-old son had asked if he could say grace. As we bowed our heads he said,  \"God is good. God is great. Thank you for the food, and I would even thank you more if Mom gets us ic"
    },
    {
      "id": 342,
      "title": "Small, Unseen Miracle",
      "text": "SMALL, UNSEEN MIRACLE\n\nLife's a little thing! Robert Browning once wrote. But a little thing\ncan mean a life. Even two lives. How well I remember. Two years ago in\ndowntown Denver my friend, Scott Reasoner, and I saw something tiny and\ninsignificant chang"
    },
    {
      "id": 343,
      "title": "Some Talk The Talk, But May Stumble Walking The Talk",
      "text": "SOME TALK THE TALK, BUT MAY STUMBLE WALKING THE TALK\n\nA man was being tailgated by a stressed-out woman on a busy boulevard. Suddenly, the light turned yellow, just in front of him.  He did the right thing, stopping at the crosswalk, even though he could"
    },
    {
      "id": 344,
      "title": "Something To Think About As The New Year Begins",
      "text": "SOMETHING TO THINK ABOUT AS THE NEW YEAR BEGINS:\n\nThere are two days in every week about which we should not worry, two\ndays which should be kept from fear and apprehension.\n\nOne of these days is \"YESTERDAY\" with its mistakes and cares, its faults\nand blu"
    },
    {
      "id": 345,
      "title": "Speak Gently",
      "text": "SPEAK GENTLY\n\nSpeak gently. It is better by far\nto rule by love than fear.\nSpeak gently. Let no harsh word mar\nthe good you may do here.\n\nSpeak gently to the young, for they\nwill have enough to bear;\npass through this life as best they may,\n'tis full of a"
    },
    {
      "id": 346,
      "title": "Special Beatitudes",
      "text": "SPECIAL BEATTUTUDES for those who work with special people\n\nBLESSED ARE YOU who take time to listen to difficult speech\nFOR YOU help us know that if we persevere, we can be understood.\n\nBLESSED ARE YOU who walk with us in public places and ignore the star"
    },
    {
      "id": 347,
      "title": "Spiritual Housekeeping",
      "text": "SPIRITUAL HOUSEKEEPING\n\nI do not know about you but I don�t like cockroaches.  We had them in a house that we bought in Long Island.  I did not know anything about hiring exterminators so I decided to get rid of them myself.  I bought a sprayer and bought"
    },
    {
      "id": 348,
      "title": "Spiritual Vitamins A to Z",
      "text": "SPIRITUAL VITAMINS A TO Z\n\nRemember to take your vitamins every day!\n\nAnxious?  Take Vitamin A.  \"All things work together for good for those who love God, who are called according to his purpose.\"  (Romans 8:28) \n\nBlue?  Take Vitamin B.  \"Bless the Lord,"
    },
    {
      "id": 349,
      "title": "Standing In My Stadium",
      "text": "STANDING IN MY STADIUM\n\nIf You've Ever Been In Love... \n\nThink back (for some of you this will take longer than others) to when you met that man/woman that you just knew would be the one. Remember when you realized/admitted to yourself that you loved him/"
    },
    {
      "id": 350,
      "title": "Stepping Stone",
      "text": "STEPPING STONES\n\nThe Lord came to me like a dream one day and asked, \"why do you sorrow?\"\nI answered, \"Lord my life is so full of pain, I can't face one more tomorrow.\"\n\nThe Lord sat down beside me, and gently took my hand.\nHe said, \"Let Me explain to you"
    },
    {
      "id": 351,
      "title": "Stepping Stones",
      "text": "STEPPING STONES\n\nThe Lord came to me like a dream one day and asked, \"why do you sorrow?\"\nI answered, \"Lord my life is so full of pain, I can't face one more tomorrow.\"\n\nThe Lord sat down beside me, and gently took my hand.\nHe said, \"Let Me explain to you"
    },
    {
      "id": 352,
      "title": "Still He Walked",
      "text": "STILL HE WALKED\n\nHe could hear the crowds screaming \"crucify\" \"crucify\"...\nHe could hear the hatred in their voices,\nThese were his chosen people.\nHe loved them,\nAnd they were going to crucify him.\nHe was beaten, bleeding and weakened... his heart was bro"
    },
    {
      "id": 353,
      "title": "Success",
      "text": "SUCCESS\n\nAn American businessman was at the pier of a small coastal Mexican\nvillage when a small boat with just one fisherman docked.  Inside the\nsmall boat were several large yellow fin tuna.  The American\ncomplimented the Mexican on the quality of his f"
    },
    {
      "id": 354,
      "title": "Summer Resolutions",
      "text": "How about SUMMER Resolutions?\n(After 6 months of not keeping the new year's ones)\n\nGive up complaining . . . focus on gratitude.\nGive up pessimism . . . become an optimist.\nGive up harsh judgments . . . think kind thoughts.\nGive up worry . . . trust divin"
    },
    {
      "id": 355,
      "title": "Symptoms of Inner Peace",
      "text": "SYMPTOMS OF INNER PEACE\n\n* A tendency to think and act spontaneously rather than on fears based on past experiences.\n\n* An unmistakable ability to enjoy each moment.\n\n* A loss of interest in judging other people.\n\n* A loss of interest in judging self.\n\n*"
    },
    {
      "id": 356,
      "title": "Take My Hand",
      "text": "TAKE MY HAND\n\nAre you troubled, burdened, blue?\nTake my hand.\nI've been troubled, too,\nI understand.\nWhere you've fallen, once I fell --\nLet me help the clouds dispel --\nTake my hand.\n\nOthers helped when I was weak,\nTook my hand,\nHelped me face toward the"
    },
    {
      "id": 357,
      "title": "Taking Aim",
      "text": "TAKING AIM\n\nA young lady named Sally, relates an experience she had in a seminary class, given by her teacher, Dr. Smith.  She says Dr. Smith was known for his elaborate object lessons.\n\nOne particular day, Sally walked into the seminary and knew they wer"
    },
    {
      "id": 358,
      "title": "Tax Assessor",
      "text": "TAX ASSESSOR\n\nA tax assessor came one day to a poor pastor to determine the amount of taxes the pastor would have to pay.  The following conversation took place;\n\n\"What property do you possess?\" asked the assessor.\n\n\"I am a very wealthy man,\" replied the"
    },
    {
      "id": 359,
      "title": "Tea Cup",
      "text": "TEACUP STORY\n \nThere was a couple who took a trip to England to shop in a beautiful antique store to celebrate their 25th wedding anniversary. They both liked antiques and pottery, and especially teacups.  Spotting an exceptional cup, they asked \"May we s"
    },
    {
      "id": 360,
      "title": "Teach the Children",
      "text": "(better viewed with a non-proportional font such as courier)\n\n.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.\n\n        -  TEACH THE CHILDREN  -\n                                   \n        _\n    (__/_)"
    },
    {
      "id": 361,
      "title": "Teacup Story",
      "text": "TEACUP STORY\n \nThere was a couple who took a trip to England to shop in a beautiful antique store to celebrate their 25th wedding anniversary. They both liked antiques and pottery, and especially teacups.  Spotting an exceptional cup, they asked \"May we s"
    },
    {
      "id": 362,
      "title": "Ten Inches of Water",
      "text": "TEN INCHES OF WATER\n\nA boy was sitting in a park bench with one hand resting on an open Bible. He was loudly exclaiming his praise to God. Hallelujah! Hallelujah! God is great!  he yelled without worrying whether anyone heard him or not.\n\nShortly after, a"
    },
    {
      "id": 363,
      "title": "Ten Little Christians",
      "text": "TEN LITTLE CHRISTIANS\n\nTen little Christians standing in a line,\nOne disliked the pastor, then there were nine.\nNine little Christians stayed up very late,\nOne slept in on Sunday, then there were eight.\n\nEight little Christians on their way to heaven,\nOne"
    },
    {
      "id": 365,
      "title": "Thank You Father",
      "text": "THANK YOU FATHER\n\nDear God:\n\nI want to thank You for what you have already done.\n\nI am not going to wait until I see results or receive rewards, I am thanking you right now.\n\nI am not going to wait until I feel better or things look better, I am thanking"
    },
    {
      "id": 366,
      "title": "Thank You Lord",
      "text": "THANK YOU LORD\n\nLord, thank you for this sink of dirty dishes; we have plenty of food to eat.\n\nThank you for this pile of dirty, stinky laundry; we have plenty of nice clothes to wear.\n\nAnd I would like to thank you, Lord, for those unmade beds; they were"
    },
    {
      "id": 367,
      "title": "Thank You, Lord",
      "text": "THANK YOU, LORD\n\nA newly arrived soul in Heaven was met by St. Peter. The saint toured the soul around Heaven. Both of them walked side by side inside a large workroom filled with angels.\n\nSt. Peter stopped in front of the first section and said, \"This is"
    },
    {
      "id": 368,
      "title": "Thanks For Your Time",
      "text": "THANKS FOR YOUR TIME\n\nA young man learns what's most important in life from the guy next door. It had been some time since Jack had seen the old man. College, girls, career, and life itself got in the way. In fact, Jack moved clear across the country in p"
    },
    {
      "id": 369,
      "title": "The \"Our Father\" Prayer",
      "text": "THE \"OUR FATHER\" PRAYER:\nDo I Really Mean What I Pray?\n\nExamine how well you live what you pray as you meditate on the following:\n\nI cannot say OUR if I keep my faith only to myself and never share it with others.\n\nI cannot say FATHER if I do not trust in"
    },
    {
      "id": 370,
      "title": "The 10 Most Important Things Are",
      "text": "THE 10 MOST IMPORTANT THINGS ARE...\n\nLOVE\nThe Special Feeling That Makes You Feel\nAll Warm And Wonderful.\n\nRESPECT\nTreating Others As Well\nAs You Would Like To Be Treated.\n\nAPPRECIATION\nTo Be Grateful For All The Good Things\nLife Has To Offer.\n\nHAPPINESS"
    },
    {
      "id": 371,
      "title": "The 11th - 20th Commandments",
      "text": "THE 11th - 20th COMMANDMENTS\n\n11th. Thou shalt not worry, for worry is the most unproductive of all\n      human activities.\n12th. Thou shalt not be fearful, for most of the things we fear never\n      come to pass.\n13th. Thou shalt not cross bridges before"
    },
    {
      "id": 372,
      "title": "The Ant and the Grasshopper",
      "text": "THE ANT AND THE GRASSHOPPER\n\nA mother of a 9 year old boy, Mark, received a phone call in the middle of the afternoon. It was the teacher from her son's school.\n\n\"Mrs. Smith, something unusual happened today in your son's third grade class. Your son did s"
    },
    {
      "id": 373,
      "title": "The Apple Basket",
      "text": "THE APPLE BASKET\n\nOne day an elderly man entered into a hospital. He was grumpy from being on medication and the nurses thought him to be insane, as he yelled for his wife to get the apple basket. By the time they had checked him into his room the nurses"
    },
    {
      "id": 374,
      "title": "The Awakening",
      "text": "THE AWAKENING\n\nA time comes in your life when you finally get it...when, in the midst of all your fears and insanity, you stop dead in your tracks and somewhere the voice inside your head cries out - ENOUGH!\n\nEnough fighting and crying or struggling to ho"
    },
    {
      "id": 375,
      "title": "The Baby and the Old Man",
      "text": "THE BABY AND THE OLD MAN\n\nThis is a first-person account from a mother about her family as they ate dinner on Christmas Day in a small restaurant many miles from their home. Nancy, the mother, relates:\n\nWe were the only family with children in the restaur"
    },
    {
      "id": 376,
      "title": "The Barber",
      "text": "THE BARBER\n\nAfter twenty years of shaving himself every morning, a man in a small Southern town decided he had enough. He told his wife that he intended to let the local barber shave him each day.  He put on his hat and coat and went to the barber shop, w"
    },
    {
      "id": 377,
      "title": "The Baseball Player",
      "text": "THE BASEBALL PLAYER\n\nAlmighty Father, you who are called the �Mighty Umpire� in this game of life, we are not sure what uniforms we should wear.  While we may be Angels in spirit, in reality we are Giants in pride, Dodgers of responsibility and Tigers in"
    },
    {
      "id": 378,
      "title": "The Beautiful Colour of LOVE",
      "text": "THE BEAUTIFUL COLOUR OF LOVE\n \nWhat colour is God,\nAsked the child with skin so fair\nIs he white like me,\nDoes he have light hair?\n \nIs God dark like me,\nAsked the child with skin of golden hue,\nHas he hair that's dark and curly,\nAre his eyes black or blu"
    },
    {
      "id": 379,
      "title": "The Best Gifts This Season",
      "text": "THE BEST GIFTS THIS SEASON:\n\nTo a Friend - Loyalty\nTo an Enemy - Forgiveness\nTo your Boss - Service\nTo your Child - A good example\nTo your Father - Honor\nTo your Mother - Gratitude and Devotion\nTo your Spouse - Love and Faithfulness\nTo Yourself - Respect"
    },
    {
      "id": 380,
      "title": "The Bible & the Coal Basket",
      "text": "THE BIBLE & THE COAL BASKET\n\nThe story is told of an old man who lived on a farm in the mountains of eastern Kentucky with his young grandson. Each morning, Grandpa was up early sitting at the kitchen table reading from his old worn-out Bible.\n\nHis grands"
    },
    {
      "id": 381,
      "title": "The Bible in 50 Words",
      "text": "THE BIBLE IN 50 WORDS\n\n       God made\n       Adam bit\n       Noah arked\n       Abraham split\n       Joseph ruled\n       Jacob fooled\n       Bush talked\n       Moses balked\n       Pharaoh plagued\n       People walked\n       Sea divided\n       Tablets guid"
    },
    {
      "id": 382,
      "title": "The Bird Cage",
      "text": "THE BIRD CAGE\n\nThere once was a man named George Thomas, a pastor in a small New\nEngland town.  One Easter Sunday morning he came to the Church carrying\na rusty, bent, old bird cage, and set it by the pulpit. Several eyebrows\nwere raised and, as if in res"
    },
    {
      "id": 383,
      "title": "The Birth of Jesus",
      "text": "THE BIRTH OF JESUS\n \nIn those days Caesar Augustus issued a decree that a census should be taken of the entire Roman world.  (This was the first census that took place while Quirinius was governor of Syria).  And everyone went to his own town to register"
    },
    {
      "id": 384,
      "title": "The Boxes",
      "text": "THE BOXES\n\nI have in my hands two boxes\nWhich God gave me to hold.\nHe said, \"Put all your sorrows in the black,\nAnd all your joys in the gold.\"\nI heeded His words, and in the two boxes\nBoth my joys and sorrows I store,\nBut though the gold became heavier e"
    },
    {
      "id": 385,
      "title": "The Breath of God",
      "text": "THE BREATH OF GOD\n\nLife's a little thing!  Robert Browning once wrote.  But a little thing can mean a life.  Even two lives.  How well I remember.  Two years ago in downtown Denver my friend, Scott Reasoner, and I saw something tiny and insignificant chan"
    },
    {
      "id": 386,
      "title": "The Brick of Life",
      "text": "THE BRICKS OF LIFE\n\nAbout ten years ago, a young and very successful executive named Josh was traveling down a Chicago neighborhood street. He was going a bit too fast in his sleek, black, 12 cylinder Jaguar XKE, which was only two months old. He was watc"
    },
    {
      "id": 387,
      "title": "The Bricks of Life",
      "text": "THE BRICKS OF LIFE\n\nAbout ten years ago, a young and very successful executive named Josh was traveling down a Chicago neighborhood street. He was going a bit too fast in his sleek, black, 12 cylinder Jaguar XKE, which was only two months old. He was watc"
    },
    {
      "id": 388,
      "title": "The Burden",
      "text": "THE BURDEN\n\n\"Why was my burden so heavy?\"  I slammed the bedroom door and leaned against it.  Is there no rest from this life? I wondered.  I stumbled to my bed and dropped onto it, pressing my pillow around my ears to shut out the noise of my existence."
    },
    {
      "id": 389,
      "title": "The Buzzard, The Bat, The Bumblebee",
      "text": "THE BUZZARD, THE BAT & THE BUMMBLEBEE\n\nThe Buzzard:\nIf you put a buzzard in a pen that is 6 feet by 8 feet and is entirely open at the top, the bird, in spite of its ability to fly, will be an absolute prisoner. The reason is that a buzzard always begins"
    },
    {
      "id": 390,
      "title": "The Cab Ride",
      "text": "THE CAB RIDE\n\nTwenty years ago, I drove a cab for a living. It was a cowboy's life, a life for someone who wanted no boss. What I didn't realize was that it was also a ministry. Because I drove the night shift, my cab became a moving confessional. Passeng"
    },
    {
      "id": 391,
      "title": "The Carpenter",
      "text": "THE CARPENTER\n\nAn elderly carpenter was ready to retire. He told his\nemployer-contractor of his plans to leave the house-building business\nand live a more leisurely life with his wife enjoying his extended\nfamily. He would miss the paycheck, but he needed"
    },
    {
      "id": 392,
      "title": "The Carpenter Tools",
      "text": "THE CARPENTER'S TOOLS  \n \nBrother Hammer served as the chairman. The other members of the tool belt informed him that he must leave, because he was too noisy. But brother Hammer said, \"If I have to leave this carpenter's shop, then brother Gimlet must go"
    },
    {
      "id": 393,
      "title": "The Christmas Ten Commandments",
      "text": "THE CHRISTMAS TEN COMMANDMENTS\n\n1. Thou shalt give thy heart to Christ. Let Him be at the top of thy Christmas list\n\n2. Thou shalt prepare thy soul for Christmas. Spend not so much on gifts that thy soul is forgotten.\n\n3. Thou shalt not let Santa Claus re"
    },
    {
      "id": 394,
      "title": "The Cliff Hanger",
      "text": "THE CLIFF HANGER\n\nA man named Jack was walking along a steep cliff one day when he accidentally got too close to the edge and fell. On the way down he grabbed a branch, which temporarily stopped his fall. He looked down and, to his horror, saw that the ca"
    },
    {
      "id": 395,
      "title": "The Color of Friendship",
      "text": "THE COLOR OF FRIENDSHIP\n\nOnce upon a time the colors of the world started to quarrel. All claimed that they were the best. The most important. The most useful. The favorite. \n\nGreen said:\n\"Clearly I am the most important. I am the sign of life and of hope"
    },
    {
      "id": 396,
      "title": "The Cracked Pot",
      "text": "THE CRACKED POT\n\nA Water Bearer in India had two large pots; each hung on each end of a pole, which he carried across his neck.  One of the pots had a crack in it, and while the other pot was perfect and always delivered a full portion of water at the end"
    },
    {
      "id": 397,
      "title": "The Cross",
      "text": "In 1967 while taking a class in photography at the University of\nCincinnati, I became acquainted with a young man named Charles Murray\nwho also was a student at the school and training for the summer\nOlympics of 1968 as a high diver. Charles was very pati"
    },
    {
      "id": 398,
      "title": "The Cross In My Pocket",
      "text": "THE CROSS IN MY POCKET\n \nI carry a cross in my pocket,\nA simple reminder to me\nThat I am a Christian,\nNo matter where I may be.\nThis little cross isn't magic,\nNor is it a good luck charm.\nIt isn't meant to protect me\nFrom every physical harm.\n \nIt's not f"
    },
    {
      "id": 399,
      "title": "The Daffodil Principle",
      "text": "THE DAFFODIL PRINCIPLE\n\nSeveral times my daughter had telephoned to say, \"Mother, you must come see the daffodils before they are over.\" I wanted to go, but it was a two-hour drive from Laguna to Lake Arrowhead.\n\n\"I will come next Tuesday,\" I promised, a"
    },
    {
      "id": 400,
      "title": "The Devils Beatitudes",
      "text": "THE DEVIL'S BEATITUDES\n \nIf the Devil were to write his Beatitudes, they would probably go something like this:\n \nBlessed are those who are too tired, too busy, too distracted to spend an hour once a week with their fellow Christians in Church - they are"
    },
    {
      "id": 401,
      "title": "The Difference Between Strength and Courage",
      "text": "THE DIFFERENCE BETWEEN STRENGTH AND COURAGE\n\nIt takes strength to be firm.\nIt takes courage to be gentle.\n\nIt takes strength to stand guard.\nIt takes courage to let down your guard.\n\nIt takes strength to conquer\nIt takes courage to surrender.\n\nIt takes st"
    },
    {
      "id": 402,
      "title": "The Dime",
      "text": "THE DIME\n\nBobby was getting cold sitting out in his back yard in the snow. Bobby didn't wear boots; he didn't like them and anyway he didn't own any. The thin sneakers he wore had a few holes in them and they did a poor job of keeping out the cold. Bobby"
    },
    {
      "id": 403,
      "title": "The Empty Egg",
      "text": "THE EMPTY EGG\n\nJeremy was born with a twisted body and a slow mind.  At the age of 12\nhe was still in second grade, seemingly unable to learn. His teacher,\nDoris Miller, often became exasperated with him.  He would squirm in his\nseat, drool, and make grun"
    },
    {
      "id": 404,
      "title": "The Family Bible",
      "text": "THE FAMILY BIBLE\n\nOld brother Higgins built a shelf\nfor the family bible to rest itself\nlest a sticky finger or grimy thumb\nmight injure the delicate pages some.\n\nHe cautioned his children to touch it not\nand it rested there with never a blot\nthough the H"
    },
    {
      "id": 405,
      "title": "The Fence",
      "text": "THE FENCE\n\nThere was a little boy with a bad temper. His father gave him a bag of nails and told him that every time he lost his temper, to hammer a nail in the back fence.  The first day the boy had driven 37 nails into the fence.  Then it gradually dwin"
    },
    {
      "id": 406,
      "title": "The Fern and the Bamboo",
      "text": "THE FERN AND THE BAMBOO\n\nOne day I decided to quit...I quit my job, my relationship, my spirituality.... I wanted to quit my life. I went to the woods to have one last talk with God.\n\n\"God\", I said. \"Can you give me one good reason not to quit?\"\n\nHis answ"
    },
    {
      "id": 407,
      "title": "The Fishing Pole",
      "text": "THE FISHING POLE\n\nHoward County Sheriff Jerry Marr got a disturbing call one Saturday\nafternoon a few months ago. His 6-year-old grandson Mikey had been hit\nby a car while fishing in Greentown with his dad. The father and son\nwere near a bridge by the Kok"
    },
    {
      "id": 408,
      "title": "The Four Candles",
      "text": "THE FOUR CANDLES\n\nThe Four Candles burned slowly.  Their Ambiance was so soft you could hear them speak...\n\nThe first candle said, \"I Am Peace, but these days, nobody wants to keep me lit.\"\n\nThen Peace's flame slowly diminishes and goes out completely.\n\nT"
    },
    {
      "id": 409,
      "title": "The Gift",
      "text": "THE GIFT\n\nA young man was getting ready to graduate from college.  For many months he had admired a beautiful sports car in a dealer's showroom, and knowing his father could well afford it, he told him that was all he wanted.\n\nAs Graduation Day approached"
    },
    {
      "id": 410,
      "title": "The Girl in the Pink Dress",
      "text": "THE GIRL IN THE PINK DRESS\n\nThere was this little girl sitting by herself in the park. Everyone passed by her and never stopped to see why she looked so sad. Dressed in a worn pink dress, barefoot and dirty, the girl just sat and watched the people go by."
    },
    {
      "id": 411,
      "title": "The Grandfather Table",
      "text": "THE GRANDFATHER'S TABLE\n\nA frail old man went to live with his son, daughter-in-law, and four-year old grandson. The old man's hands trembled, his eyesight was blurred, and his step faltered. The family ate together at the table, but the elderly grandfath"
    },
    {
      "id": 412,
      "title": "The Grandfathers Table",
      "text": "THE GRANDFATHER'S TABLE\n\nA frail old man went to live with his son, daughter-in-law, and four-year old grandson. The old man's hands trembled, his eyesight was blurred, and his step faltered. The family ate together at the table, but the elderly grandfath"
    },
    {
      "id": 413,
      "title": "The Greatest",
      "text": "THE GREATEST...\n\nThe highest aim in life - To know God and do His will!\nThe most enriching good habit - Complimenting others\nThe most destructive bad habit - Worry\nThe greatest joy - Giving\nThe greatest loss - Loss of self-respect\n\nThe most satisfying wor"
    },
    {
      "id": 414,
      "title": "The Greatest Gift of All",
      "text": "THE GREATEST GIFT OF ALL\n\nIt's just a small, white envelope stuck among the branches of our Christmas tree. No name, no identification, no inscription. It has peeked through the branches of our tree for the past 10 years or so. It all began because my hus"
    },
    {
      "id": 415,
      "title": "The Hand",
      "text": "THE HAND\n\nThe first grade teacher gave her class a fun assignment -- to draw a picture of something for which they were thankful.\n\nMost of the class might be considered economically disadvantaged, but still many would celebrate the holiday with turkey and"
    },
    {
      "id": 416,
      "title": "The Homeless Man",
      "text": "THE HOMELESS MAN\n\nIt was a cold winter's day that Sunday. The parking lot to the church was filling up quickly. I noticed as I got out of my car that fellow church members were whispering among themselves as they walked to the church. As I got closer I sa"
    },
    {
      "id": 417,
      "title": "The House Behind The Weeds",
      "text": "THE HOUSE BEHIND THE WEEDS\n\nJust two little boys walking down a dusty lane\nThey came upon this old white house\nWith broken window panes.\n\nThe paint was faded, the shine was gone\nThe grass had grown so high\nStill they made their little feet\nTo see what was"
    },
    {
      "id": 418,
      "title": "The Integrity of Ugly",
      "text": "THE INTEGRITY OF \"UGLY\"\n\nEveryone in the apartment complex that I that lived in knew who Ugly\nwas.\n\nUgly was the resident tomcat.  Ugly loved three things in this world:\nfighting, eating garbage, and, shall we say, love. The combination of\nthese things co"
    },
    {
      "id": 419,
      "title": "The Jars",
      "text": "THE JARS\n\nThe preacher placed two identical jars on the table next to the pulpit.  He quoted 1 Samuel 16:7 'The Lord does not look at the things man looks at. Man looks at the outward appearance, but the Lord looks at the heart\"\n\nThese jars came from the"
    },
    {
      "id": 420,
      "title": "The King Highway",
      "text": "THE KING'S HIGHWAY\n\nOnce upon a time, a king had a great highway built for the people who lived in his kingdom. After it was completed, but before it was opened to the public, the king decided to have a contest. He invited as many of his subjects as desir"
    },
    {
      "id": 421,
      "title": "The Kings Insurance Company",
      "text": "THE KING'S INSURANCE COMPANY\n\nThe King's Insurance Company guarantees :\n\nLIFE\nFor God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. (John 3:16)\n\nHEALTH\nWho forgives all you"
    },
    {
      "id": 423,
      "title": "The Lesson of the Coffee Bean",
      "text": "THE LESSON OF THE COFFEE BEAN\n\nA daughter complained to her father about how hard things were for her.\"As soon as I solve one problem,\" she said, \"another one comes up. I'm tired of struggling.\"\n\nHer father, a chef, took her to the kitchen where he filled"
    },
    {
      "id": 424,
      "title": "The Letter",
      "text": "THE LETTER\n\nRuth went to her mail box and there was only one letter. She picked it up and looked at it before opening, but then she looked at the envelope again.   There was no stamp, no postmark, only her name and address.\n\nShe read the letter:\n\nDear Rut"
    },
    {
      "id": 425,
      "title": "The Little Firefighter",
      "text": "THE LITTLEST FIREFIGHTER\n\nThe 26-year-old mother stared down at her son who was dying of terminal leukemia.  Although her heart was filled with sadness, she also had a strong feeling of determination.  Like any parent she wanted her son to grow up and ful"
    },
    {
      "id": 426,
      "title": "The Littlest Firefighter",
      "text": "THE LITTLEST FIREFIGHTER\n\nThe 26-year-old mother stared down at her son who was dying of terminal leukemia.  Although her heart was filled with sadness, she also had a strong feeling of determination.  Like any parent she wanted her son to grow up and ful"
    },
    {
      "id": 427,
      "title": "The Lord Baseball Game",
      "text": "THE LORD'S BASEBALL GAME\n\nBob and the Lord stood by to observe a baseball game. The Lord's team was playing Satan's team. The Lord's team was at bat, the score was tied zero to zero, and it was the bottom of the 9th inning with two outs.\n\nThey continued t"
    },
    {
      "id": 428,
      "title": "The Lord Test",
      "text": "THE LORD'S TEST\n\nI woke up this morning and knew that today,\nThe sun would not be shining and the clouds would be gray.\nAs I stepped outside, rain fell upon my head.\nMy car wouldn't start so I walked to school instead.\nI forgot all of my assignments\nI fai"
    },
    {
      "id": 429,
      "title": "The Lords Baseball Game",
      "text": "THE LORD'S BASEBALL GAME\n\nBob and the Lord stood by to observe a baseball game. The Lord's team was playing Satan's team. The Lord's team was at bat, the score was tied zero to zero, and it was the bottom of the 9th inning with two outs.\n\nThey continued t"
    },
    {
      "id": 430,
      "title": "The Lords Prayer",
      "text": "THE LORD'S PRAYER\n\nI cannot pray \"OUR,\" if my faith has no room for others and their need.\n\nI  cannot pray \"FATHER,\" if I do not demonstrate this relationship to\nGod in my daily living.\n\nI cannot pray \"WHO ART IN HEAVEN,\" if all of my interests and pursui"
    },
    {
      "id": 431,
      "title": "The Many Names of Christ",
      "text": "THE MANY NAMES OF CHRIST\n\nTo the ARTIST He is the One Altogether Lovely. \nTo the ARCHITECT He is the Chief Corner Stone. \nTo the BAKER He is the Living Bread. \nTo the BANKER He is the Hidden Treasure. \nTo the BIOLOGIST He is the Life. \nTo the BUILDER He i"
    },
    {
      "id": 432,
      "title": "The Masters Card",
      "text": "THE MASTER'S CARD\n\nBy now you have probably seen the catchy television commercials for MasterCard. They start by identifying some things that people can buy with their MasterCard, then show a moment that is priceless and end by saying, \"There are some thi"
    },
    {
      "id": 433,
      "title": "The Master's Card",
      "text": "THE MASTER'S CARD\n\nBy now you have probably seen the catchy television commercials for MasterCard. They start by identifying some things that people can buy with their MasterCard, then show a moment that is priceless and end by saying, \"There are some thi"
    },
    {
      "id": 435,
      "title": "The Missionary",
      "text": "THE MISSIONARY\n\nHave you ever felt the urge to pray for someone and then just put it on a list and said, \"I'll pray for them later?\"  Or has anyone ever called you and said, \"I need you to pray for me, I have this need?\"\n\nRead the following story that was"
    },
    {
      "id": 436,
      "title": "The Monkey With The Wooden Apples",
      "text": "THE MONKEY WITH THE WOODEN APPLES\n\nThere once was a happy monkey wandering the jungle, eating delicious fruit when hungry, and resting when tired.  One day he came upon a house, where he saw a bowl of the most beautiful apples.  He took one in each hand a"
    },
    {
      "id": 437,
      "title": "The Most Beautiful Flower",
      "text": "THE MOST BEAUTIFUL FLOWER\n\nThe park bench was deserted as I sat down to read\nBeneath the long, straggly branches of an old willow tree\nDisillusioned by life with good reason to frown\nFor the world was intent on dragging me down\n\nAnd if that weren't enough"
    },
    {
      "id": 438,
      "title": "The Most Important Body Part",
      "text": "THE MOST IMPORTANT BODY PART\n\nMy mother used to ask me what is the most important part of the body and through the years I would take a guess at what I thought was the correct answer. When I was younger I thought sound was very important to us as humans s"
    },
    {
      "id": 439,
      "title": "The Mountain Climber",
      "text": "THE MOUNTAIN CLIMBER\n\nThey tell the story of a mountain climber, who desperate to conquer the Aconcagua, initiated his climb after years of preparation.  But he wanted the glory to himself,  therefore, he went up alone.  He started climbing and it was bec"
    },
    {
      "id": 440,
      "title": "The Mouse Trap",
      "text": "THE MOUSE TRAP\n\nA mouse looked through a crack in the wall to see the farmer and his wife opening a package. What food might it contain? He was aghast to discover that it was a mouse trap. Retreating to the farmyard the mouse proclaimed the warning: \"Ther"
    },
    {
      "id": 441,
      "title": "The Nail",
      "text": "THE NAIL\n\nAs the story goes, they built a new church building and people came from far and wide to see it. They admired its beauty! Up on the roof, a little nail heard the people praising everything about the lovely structure-except the nail! No one even"
    },
    {
      "id": 442,
      "title": "The Old Fisherman",
      "text": "THE OLD FISHERMAN\n\nOur house was directly across the street from the clinic Entrance Hopkins Hospital in Baltimore. We lived downstairs and rented the upstairs rooms to out patients at the clinic. One summer evening as I was fixing supper, there was a kno"
    },
    {
      "id": 443,
      "title": "The Old Man and the Sea",
      "text": "THE OLD MAN AND THE SEA\n\nAfter a few of the usual Sunday evening hymns, the church's pastor once again slowly stood up, walked over to the pulpit, and gave a very brief introduction of his childhood friend.  With that, an elderly man stepped up to the pul"
    },
    {
      "id": 444,
      "title": "The Onion",
      "text": "THE ONION\n\nI was an onion before Christ set me free.\nLayers upon layers of iniquity.\nAn ugly old onion whose fragrance was strong;\nThat my Jesus bought and loved all along.\n\nUnknown to me what He was going to do.\nOf what He was planning, I had not a clue."
    },
    {
      "id": 445,
      "title": "The Painter",
      "text": "THE PAINTER\n\nOnce upon a time there was a painter who had just completed his course under disciple hood of a great painter. This young artist decided to assess his skills of skills so he decided to give his best strokes on the canvass. He took 3 days and"
    },
    {
      "id": 446,
      "title": "The Parachute",
      "text": "THE PARACHUTE\n\nCharles Plum, a U.S. Naval Academy graduate, was a jet fighter pilot in Vietnam. After 75 combat missions, his plane was destroyed by a surface-to-air missile. Plumb ejected & parachuted into enemy hands. He was captured & spent six years i"
    },
    {
      "id": 447,
      "title": "The Pebble",
      "text": "THE PEBBLE\n\nDrop a pebble in the water: just a splash, and it is gone; \nBut there's half-a-hundred ripples circling on and on and on, \nSpreading, spreading from the center, flowing on out to the sea. \nAnd there is no way of telling where the end is going"
    },
    {
      "id": 448,
      "title": "The Perfect Heart",
      "text": "THE PERFECT HEART\n\nOne day a young man was standing in the middle of the town proclaiming that he had the most beautiful heart in the whole valley. A large crowd gathered and they all admired his heart for it was perfect. There was not a mark or a flaw in"
    },
    {
      "id": 449,
      "title": "The Perfect Mistake",
      "text": "THE PERFECT MISTAKE\n\nMy Mother's father worked as a carpenter. On this particular day, he was building some crates for the clothes his church was sending to orphanages in China. On his way home, he reached into his shirt pocket to find his glasses, but th"
    },
    {
      "id": 450,
      "title": "The Power of God",
      "text": "THE POWER OF GOD \n\nHave you ever been down and out and nobody seems to be around for you to talk to...THAT'S GOD...he wants you to talk to him.\n\nHave you ever been just sitting there and all of a sudden you feel like doing something nice for someone you c"
    },
    {
      "id": 451,
      "title": "The Power of Prayer",
      "text": "THE POWER OF PRAYER\n\nWhen you receive this, say a prayer.  That's all you have to do. There is nothing attached.  This is powerful.  Just send this to four people and do not break this, please.  Prayer is one of the best free gifts we can receive.  There"
    },
    {
      "id": 452,
      "title": "The Power of Three Little Words",
      "text": "THE POWER OF THREE LITTLE WORDS\n\nSome of the most significant messages people deliver to one another often come in just three words. When spoken or conveyed, those statements have the power to forge new friendships, deepen old ones and restore relationshi"
    },
    {
      "id": 453,
      "title": "The Quilt",
      "text": "THE QUILT\n\nAs I faced my Maker at the last judgment, I knelt before the Lord along\nwith all the other souls. Before each of us laid our lives like the\nsquares of a quilt in many piles.\n\nAn Angel sat before each of us sewing our quilt squares together into"
    },
    {
      "id": 454,
      "title": "The Race",
      "text": "THE RACE\n\nDefeat!  He lay there silently, a tear dropped from his eye, \"\nThere's no sense running anymore- three strikes and I'm out- why try?\"  \nThe will to rise has disappeared, all hope had fled away, \nso far behind, so error prone, closer all the way."
    },
    {
      "id": 455,
      "title": "The Resume of Jesus Christ",
      "text": "THE RESUME OF JESUS CHRIST\n\nAddress: Ephesians 1:20\nPhone: Romans 10:13\n\nWebsite: The Bible. Keywords: Christ, Lord, Savior and Jesus\n\nHello. My name is Jesus -The Christ. Many call me Lord! I've sent you my resume because I'm seeking the top management p"
    },
    {
      "id": 456,
      "title": "The River",
      "text": "THE RIVER\n\nWalking through the forest, a seasoned hiker came upon a broad, slowly moving river. He stopped to gaze over the waters, appreciating the beauty, when suddenly he heard a faint cry coming from upstream. \n\nLooking in the direction of the noise,"
    },
    {
      "id": 457,
      "title": "The Rose",
      "text": "THE ROSE\n\nRed roses were her favorites,\nHer name was also Rose,\nAnd every year her husband sent them,\ntied with pretty bows.\n\nThe year he died,\nthe roses were delivered to her door.\nThe card said, \"Be my Valentine,\"\nlike all the years before.\n\nEach year h"
    },
    {
      "id": 458,
      "title": "The Secret",
      "text": "THE SECRET\n\nA woman named Frances once knew a young person at church named Debbie.  Debbie always seemed effervescent and happy, although Frances knew she had faced struggles in her life. \n\nHer long-awaited marriage had quickly ended in divorce. She had s"
    },
    {
      "id": 459,
      "title": "The Seed",
      "text": "THE SEED\n\nIn the Far East the emperor was growing old and knew it was time to choose his successor. Instead of choosing one of his assistants or his children, he decided to do something different. He called young people in the kingdom together one day. He"
    },
    {
      "id": 460,
      "title": "The Silversmith",
      "text": "THE SILVERSMITH\n\nSome time ago, a few ladies met in a certain city to study the scriptures.  While reading the third chapter of Malachi, they came upon a remarkable expression in the third verse:\n\n\"And He shall sit as a refiner and purifier of silver (Mal"
    },
    {
      "id": 461,
      "title": "The Smell Of Rain",
      "text": "THE SMELL OF RAIN\n\nA cold March wind danced around the dead of night in Dallas as the doctor walked into the small hospital room of Diana Blessing.  Still groggy from surgery, her husband David held her hand as they braced themselves for the latest news."
    },
    {
      "id": 462,
      "title": "The Sneeze",
      "text": "THE SNEEZE\n\nThey walked in tandem, each of the ninety-three students filing into the\nalready crowded auditorium. With rich maroon gowns flowing and the\ntraditional caps, they looked almost as grown up as they felt.\n\nDads swallowed hard behind broad smiles"
    },
    {
      "id": 463,
      "title": "The Son",
      "text": "THE SON\n\nYears ago, there was a very wealthy man who, with his devoted young son, shared a passion for art collecting. Together they traveled around the world, adding only the finest art treasures to their collection.  Priceless works by Picasso, Van Gogh"
    },
    {
      "id": 464,
      "title": "The Starfish",
      "text": "THE STARFISH\n\nOnce upon a time there was a wise man who used to go to the ocean to do his writing.   He had a habit of walking on the beach before he began his work.  One day he was walking along the shore.  As he looked down the beach, he saw a human fig"
    },
    {
      "id": 465,
      "title": "The Story Behind the Picture of the Praying Hands",
      "text": "THE STORY BEHIND THE PICTURE OF THE PRAYING HANDS\n\nBack in the fifteenth century, in a tiny village near Nuremberg, lived a family with eighteen children. Eighteen! In order merely to keep food on the table for this mob, the father and head of the househo"
    },
    {
      "id": 466,
      "title": "The Story of Pearls",
      "text": "THE STORY OF PEARLS\n\nPearls are a product of pain. When a grain of sand pierces the shell of an oyster, all the otherwise dormant resources within the tiny oyster respond to the foreign irritant by caring for that sensitive spot. Over time, the sand parti"
    },
    {
      "id": 467,
      "title": "The Story of Soul",
      "text": "THE STORY OF SOUL\n\nThere once was a man named Soul who was walking in a garden. He was whistling a real sweet tune for he was saved and had the joy of the Lord, but he was a baby Christian. As Soul was walking, a beautiful and seductive woman came out fro"
    },
    {
      "id": 468,
      "title": "The Teacup",
      "text": "THE TEACUP\n\nThere was a couple who used to go to England to shop in the beautiful stores.  They both liked antiques and pottery and especially teacups.  This was their twenty-fifth wedding anniversary.\n\nOne day in this beautiful shop they saw a beautiful"
    },
    {
      "id": 469,
      "title": "The Three Things in Life",
      "text": "THE THREE THINGS IN LIFE\n\nThree things in life that, once gone, never come back -\n 1. Time\n 2. Words\n 3. Opportunity\n\nThree things in life that may never be lost -\n 1.  Peace\n 2.  Hope\n 3.  Honesty\n\nThree things in life that are most valuable -\n 1.  Love"
    },
    {
      "id": 470,
      "title": "The Top 10 Things You Wont Have to Worry About With The Y2K Bug",
      "text": "THE TOP 10 THINGS YOU WON'T HAVE TO WORRY ABOUT WITH THE Y2K BUG\n\n10. The Bible will still have the answers.\n9. Prayer will still work.\n8. The Holy Spirit will still move.\n7. God will still inhabit praise.\n6. There will still be anointed preaching.\n5. The"
    },
    {
      "id": 473,
      "title": "The Two Wolves",
      "text": "THE TWO WOLVES\n\nOne evening an old Cherokee told his grandson about a battle that was going on inside himself.\n\nHe said, \"My son, it is between 2 wolves.  One is evil: Anger, envy, sorrow, regret, greed, arrogance, self-pity, guilt, resentment, inferiorit"
    },
    {
      "id": 474,
      "title": "The U In JesUs",
      "text": "THE \"U\" IN JESUS \n\nBefore U were thought of or time had begun, \nGod even stuck U in the name of His Son. \nAnd each time U pray, you'll see it's true \nYou can't spell out JesUs and not include U. \n\nYou're a pretty big part of His wonderful name, \nFor U, He"
    },
    {
      "id": 475,
      "title": "The Visitor",
      "text": "THE VISITOR\n\nOne day, a man went to visit a church. He arrived early, parked his car, and got out.  Another car pulled up near him, and the driver told him, \"I always park there. You took my place!\"\n\nThe visitor went inside for Sunday School, found an emp"
    },
    {
      "id": 476,
      "title": "The Walk",
      "text": "THE WALK\n\nToday's message is a little different.\nPlease go to the following new web page added to the E-Mail Ministry web\nsite:  http://www.emailministry.org/content/walk20.html\n\nIt takes a little while to load, but it is well worth it.\nIf you only get a"
    },
    {
      "id": 477,
      "title": "The Water",
      "text": "THE WATER\n\nIt was one of the hottest days of the dry season.  We had not seen rain in almost a month.  The crops were dying.  Cows had stopped giving milk.  The creeks and streams were long gone back into the earth.  It was a dry season that would bankrup"
    },
    {
      "id": 478,
      "title": "The Weathered Barn",
      "text": "THE WEATHERED OLD BARN\n\nA stranger came by the other day with an offer that set me to thinking. \nHe wanted to buy the old barn that sits out by the highway.. I told him \nright off he was crazy. He was a city type, you could tell by his \nclothes, his car,"
    },
    {
      "id": 479,
      "title": "The Weathered Old Barn",
      "text": "THE WEATHERED OLD BARN\n\nA stranger came by the other day with an offer that set me to thinking. He wanted to buy the old barn that sits out by the highway. I told him right off he was crazy. He was a city type, you could tell by his clothes, his car, his"
    },
    {
      "id": 480,
      "title": "The Whipping",
      "text": "THE WHIPPING\n\nThere was a class of young people that no teacher was able to handle.  Two or three teachers had been run off from school this year by these young people.  Finally a young man out of college heard about the class and applied to the school."
    },
    {
      "id": 481,
      "title": "The Will of God",
      "text": "THE WILL OF GOD\n\nThe will of God will never take you,\nWhere the grace of God cannot keep you.\nWhere the arms of God cannot support you,\nWhere the riches of God cannot supply your needs,\nWhere the power of God cannot endow you. \n\nThe will of God will never"
    },
    {
      "id": 482,
      "title": "The Winner",
      "text": "THE WINNER\n\nI was watching some little kids play soccer. These kids were only five or six years old, but they were playing a real game - - a serious game _ two teams, complete with coaches, uniforms, and parents. I didn't know any of them, so I was able t"
    },
    {
      "id": 483,
      "title": "The Yellow Shirt",
      "text": "THE YELLOW SHIRT\n\nThe baggy yellow shirt had long sleeves, four extra-large pockets trimmed in black thread and snaps up the front. It was faded from years of wear, but still in decent shape. I found it in 1963 when I was home from college on Christmas br"
    },
    {
      "id": 484,
      "title": "Themes of the 66 Books of the Bible",
      "text": "THEMES OF THE SIXTY-SIX BOOKS OF THE BIBLE\n\nConsider the themes of the sixty-six books:\n\nIn Genesis, He is the Creator God.\nIn Exodus, He is the Redeemer.\nIn Leviticus, He is your sanctification.\nIn Numbers, He is your guide.\nIn Deuteronomy, He is your te"
    },
    {
      "id": 485,
      "title": "Then Why Dont We Pray?",
      "text": "THEN WHY DON'T WE PRAY?\n\nThe highest privilege ever afforded to man is the power of prayer.\n  ...then why don't we pray?\n\nThe right to talk to the highest potentate in all the universe...\n  ...then why don't we pray?\n\nThe most powerful force accessible to"
    },
    {
      "id": 486,
      "title": "They Missed Him",
      "text": "THEY MISSED HIM!\n\nThey were looking for A Lion, He came as a Lamb, and they missed him.\n\nThey were looking for a Warrior, He came as a Peace maker, and they missed him.\n\nThey were looking for a King, He came as a Servant, and they missed him.\n\nThey were l"
    },
    {
      "id": 487,
      "title": "Think of Jesus",
      "text": "THINK OF JESUS\n\nThink of JESUS\nthere beside you,\nlike a friend\nwho is glad to know you-\nFeel the comfort\nof HIS presence\nand the kindness.\n\nThink of JESUS\nwarmly smiling,\ntelling stories,\nsharing laughter,\nBringing joy\nthat lights the moment,\npeacefulness"
    },
    {
      "id": 488,
      "title": "Thinking of You",
      "text": "THINKING OF YOU\n\nHave you ever been just sitting there and all of a sudden you feel like doing something nice for someone you care for?\nTHAT'S GOD talking to you through the Holy Spirit.\n\nHave you ever been down and out and nobody seems to be around for y"
    },
    {
      "id": 490,
      "title": "This Is Good!",
      "text": "THIS IS GOOD!\n\nThe story is told of a king in Africa who had a close friend with whom he grew up.  The friend had a habit of looking at every situation that ever occurred in his life (positive or negative) and remarking, \"This is good!\"\n\nOne day the king"
    },
    {
      "id": 491,
      "title": "This Is What Love Is All About",
      "text": "THIS IS WHAT LOVE IS ALL ABOUT\n\nIt was a busy morning, approximately 8:30 am, When an elderly gentleman in his 80's, arrived to have stitches removed from his thumb. He stated that he was in a hurry as he had an appointment at 9:00 am. I took his vital si"
    },
    {
      "id": 492,
      "title": "Those Who Walk With God Will Not Run From People Needs",
      "text": "THOSE WHO WALK WITH GOD WON'T RUN FROM PEOPLE'S NEEDS.\n\nRight before the jetway door closed, I scrambled aboard the plane going from LA to Chicago, lugging my laptop and overstuffed briefcase.  It was the first leg of an important business trip a few week"
    },
    {
      "id": 493,
      "title": "Three Bullets",
      "text": "THREE BULLETS\n \nThere once was a man who had nothing for his family to eat. He had an old rifle and three bullets. So, he decided that he would go out hunting and kill some wild game for dinner.\n\nAs he went down the road, he saw a rabbit. He shot at the r"
    },
    {
      "id": 494,
      "title": "Three Great Lessons of Life",
      "text": "THREE GREAT LESSONS OF LIFE - The Turtle, The Frogs & The Pretty Lady\n\nWe learn a lot through our experiences in life. The following 3 examples of TURTLES, FROGS and THE PRETTY LADY teach us some lesson. \n\nEnjoy reading the same and do ponder over them."
    },
    {
      "id": 495,
      "title": "Three Strangers",
      "text": "THREE STRANGERS\n\nA woman came out of her house and saw 3 old men with long white beards sitting in her front yard. She did not recognize them.\n\nShe said \"I don't think I know you, but you must be hungry. Please come in and have something to eat.\"\n\n\"Is the"
    },
    {
      "id": 496,
      "title": "Time Management",
      "text": "TIME MANAGEMENT\n\nOne day, an expert in time management was speaking to a group of business students and, to drive home a point, used an illustration those students will never forget.  As he stood in front of the group of high-powered overachiever s he sai"
    },
    {
      "id": 497,
      "title": "To Be Thankful For",
      "text": "TO BE THANKFUL FOR:\n\nThe mess to clean after a party because it means I have been surrounded by friends.\n\nThe taxes I pay because it means that I'm employed.\n\nThe clothes that fit a little too snug because it means I have enough to eat.\n\nMy shadow who wat"
    },
    {
      "id": 498,
      "title": "To Each His Own",
      "text": "TO EACH HIS OWN\n\nI cannot change the way I am,\nI never really try,\nGod made me different and unique,\nI never ask him why.\n\nIf I appear peculiar,\nThere's nothing I can do,\nYou must accept me as I am,\nAs I've accepted you.\n\nGod made a casting of each life,"
    },
    {
      "id": 499,
      "title": "To My Child",
      "text": "TO MY CHILD . . .\n\nJust for this morning, I am going to smile when I see your face and laugh when I feel like crying.\n\nJust for this morning, I will let you choose what  you want to wear, and smile and say how perfect it is.\n\nJust for this morning, I am g"
    },
    {
      "id": 500,
      "title": "Today I Taught My Child",
      "text": "TODAY I TAUGHT MY CHILD\n\nWhen I got mad today and hit my child\n\"For his own good, \" I reconciled, \nand then I realized my plight... \nToday, I taught my child to fight. \n\nWhen interrupted by the phone, \nI said, \"tell them I'm not home.\" \nAnd then I thought"
    },
    {
      "id": 501,
      "title": "Tomorrow Is Not Promised",
      "text": "TOMORROW IS NOT PROMISED\n\nSometimes people come into your life\nand you know right away that they were meant to be there,\nthey serve some sort of purpose,\nteach you a lesson\nor help figure out who you are\nand who you want to become.\n\nYou never know who the"
    },
    {
      "id": 502,
      "title": "Top Ten Predictions for 2008",
      "text": "TOP TEN PREDICTIONS FOR 2008 \n\n1. The Bible will still have all the answers. \n\n2. Prayer will still work.\n\n3. The Holy Spirit will still move.\n\n4. God will still inhabit the praises of His people.\n\n5. There will still be God-anointed preaching. \n\n6. There"
    },
    {
      "id": 503,
      "title": "Top Ten Reasons To Believe In The Christian Faith",
      "text": "TOP TEN REASONS TO BELIEVE IN THE CHRISTIAN FAITH\n\n1.  The Credibility of Its Founder:   Peter spoke for Jesus' closest followers when he said, \"Lord, to whom shall we go?  You have the words of eternal life.  We believe and know that You are the Holy One"
    },
    {
      "id": 504,
      "title": "Traffic Ticket",
      "text": "TRAFFIC TICKET\n\nJack took a long look at his speedometer before slowing down: 73 in a 55 zone.  Fourth time in as many months.  How could a guy get caught so often?  \n\nWhen his car had slowed to 10 miles an hour, Jack pulled over, but only partially.  Let"
    },
    {
      "id": 505,
      "title": "Trouble Tree",
      "text": "TROUBLE TREE\n\nThe carpenter I hired to help me restore an old farmhouse had just finished a rough first day on the job.  A flat tire made him lose an hour of work, his electric saw quit, and now his ancient pickup truck refused to start.\n\nWhile I drove hi"
    },
    {
      "id": 506,
      "title": "Turn Your Security System On",
      "text": "TURN YOUR SECURITY SYSTEM ON!\n\nA horrible thing happened to me today.....a thief broke into my house.\nIt happened shortly after I awoke this morning. I got up and began\nrushing about. I had a thousand things on my list and was already\nrunning behind. Quic"
    },
    {
      "id": 507,
      "title": "Twas The Night Jesus Came",
      "text": "TWAS THE NIGHT JESUS CAME\n\nTwas' the night Jesus came and all through the house,\nNot a person was praying, not one in the house.\n\nThe Bible was left on the shelf without care,\nfor no one thought Jesus would come there.\nThe children were dressing to crawl"
    },
    {
      "id": 508,
      "title": "Twenty Truths to Remember",
      "text": "TWENTY TRUTHS TO REMEMBER\n\n1. Faith is the ability to not panic.\n\n2. If you worry, you didn't pray. If you pray, don't worry.\n\n3. As a child of God, prayer is kind of like calling home every day.\n\n4. Blessed are the flexible, for they shall not be bent ou"
    },
    {
      "id": 509,
      "title": "Two Babes in a Manger",
      "text": "TWO BABES IN A MANGER\n\nIn 1994, two Americans answered an invitation from the Russian Department of  Education to teach morals and ethics (based on biblical principles) in the public schools. They were invited to teach at prisons, businesses, the fire and"
    },
    {
      "id": 510,
      "title": "Two Horses in a Field",
      "text": "TWO HORSES IN A FIELD\n\nJust up the road from my home is a field, with two horses in it. From a distance, each looks like every other horse. But if one stops the car, or is walking by, one will notice something quite amazing. Looking into the eyes of one h"
    },
    {
      "id": 511,
      "title": "U Turns",
      "text": "U TURNS\n\n\"Thanks for inviting me to go to church with you next Sunday, Uncle Al.\" Tim and his uncle were on their way to Bonny Lake. They had heard the fishing there was great. \"I . . . I don't want to hurt your feelings,\" continued Tim, \"but . . . well ."
    },
    {
      "id": 512,
      "title": "Unanswered Letters",
      "text": "UNANSWERED LETTERS\n\nThere are many times when we begin a certain task that God lays on our hearts and because we think our efforts are minimal and not making a difference, we quit the job that God told us to pursue.\n\nThe enemy loves to plant seeds of doub"
    },
    {
      "id": 513,
      "title": "Uncommon Courtesy (Adapted)",
      "text": "NOTE:  The following message is an adaptation of the \"Family\" message\nsent on 13-Oct-00.  The original message can be found in the E-Mail\nMinistry archives at: http://www.emailministry.org/stories2.asp?id=267\n\nUNCOMMON COURTESY (Adapted)\n\nI ran into a str"
    },
    {
      "id": 514,
      "title": "Unconditional Acceptance",
      "text": "UNCONDITIONAL ACCEPTANCE\n\nI am a mother of three (ages 14, 12, 3) andhave recently completed my college degree. The last class I had to take was Sociology. The teacher was absolutely inspiring with the qualities that I wish every human being had been grac"
    },
    {
      "id": 515,
      "title": "Unconditional Love",
      "text": "UNCONDITIONAL LOVE\n\nA story is told about a soldier who was finally coming home after having fought in Vietnam. He called his parents from San Francisco. \"Mom and Dad, I'm coming home, but I've a favor to ask. I have a friend I'd like to bring home with m"
    },
    {
      "id": 516,
      "title": "Unfolding The Rosebud",
      "text": "UNFOLDING THE ROSEBUD - GOD'S WILL FOR OUR LIVES\n\nA young, new preacher was walking with an older, more seasoned preacher\nin the garden one day and feeling a bit insecure about what God had for\nhim to do, he was inquiring of the older preacher. The older"
    },
    {
      "id": 517,
      "title": "Uplifting Things To Do Today",
      "text": "UPLIFTING THINGS TO DO TODAY\n\n* Smile at a stranger\n\n* Drop a coin where a child can find it\n\n* Learn something new and teach it to someone\n\n* Tell someone you love them\n\n* Hug someone\n\n* Forgive someone who has wronged you\n\n* Try saying \"I'm sorry\" when"
    },
    {
      "id": 518,
      "title": "Vacation Travel Prayer",
      "text": "VACATION TRAVEL PRAYER\n\nLet us pray:\nO God, we entrust ourselves to you as we begin our journey.  Keep us safe, and give us the grace to be generous to one another and to be courteous and kind to everyone we meet along the way.  Help us to recognize when"
    },
    {
      "id": 519,
      "title": "Valentine Day",
      "text": "VALENTINE'S DAY\n\nA time of giving, remembering, loving.\n\nA time for friends, family, spouses.\n\nA time to stop\n\n ...pause a moment...\n\n                   and look at the beauty that surrounds life.\n\n Look not only at the obvious beauty of the sun, sea and"
    },
    {
      "id": 520,
      "title": "Valentines Day",
      "text": "VALENTINE'S DAY\n\nA time of giving, remembering, loving.\n\nA time for friends, family, spouses.\n\nA time to stop\n\n ...pause a moment...\n\n                   and look at the beauty that surrounds life.\n\n Look not only at the obvious beauty of the sun, sea and"
    },
    {
      "id": 521,
      "title": "Visiting Day",
      "text": "VISITING DAY\n\nHe was looking forward to this moment all day long, after 6 days of labor and it finally arrived - Visiting Day!\n\nThe man with the keys arrived to swing open the large, heavy doors. The cold gray hall springs to life in the warm glow of ligh"
    },
    {
      "id": 522,
      "title": "Wanna Be A Pumpkin? - Pumpkin & Jesus",
      "text": "WANNA BE A PUMPKIN?\n\nA woman was asked by a coworker, \"What is it like to be a Christian?\"\n\nThe coworker replied, \"It is like being a pumpkin. God picks you from\nthe patch, brings you in, and washes all the dirt off of you. Then he\ncuts off the top and sc"
    },
    {
      "id": 523,
      "title": "WARNING!!! Advent Virus",
      "text": "WARNING....WARNING....ADVENT VIRUS IS GOING OUT\n\nBe on the alert for symptoms of inner HOPE, PEACE, JOY and LOVE.  The hearts of a great many have already been exposed to this virus, and it is possible that people everywhere could come down with it in epi"
    },
    {
      "id": 524,
      "title": "Wash Day",
      "text": "WASH DAY\n\nMonday\nWash Day\nLord, help me wash away all my selfishness and vanity, so I may serve you with perfect humility through the week ahead.\n\nTuesday\nIroning Day\nDear Lord, help me iron out all the wrinkles of prejudice I have collected through the y"
    },
    {
      "id": 526,
      "title": "What About Abstinence?",
      "text": "WHAT ABOUT ABSTINENCE?\n\nI was holding a notice from my 13-year-old son's school announcing a\nmeeting to preview the new course in sexuality. Parents could examine\nthe curriculum and take part in an actual lesson presented exactly as it\nwould be given to t"
    },
    {
      "id": 527,
      "title": "What Do Angels Look Like?",
      "text": "WHAT DO ANGELS LOOK LIKE?\n\nLike the little old lady who returned your wallet yesterday.\n\nLike the taxi driver who told you that your eyes light up the world,\nwhen you smile.\n\nLike the small child who showed you the wonder in simple things.\n\nLike the poor"
    },
    {
      "id": 528,
      "title": "What Do You Hear?",
      "text": "WHAT DO YOU HEAR?\n\nA Native American and his friend were in downtown New York City, walking near Times Square in Manhattan.  It was during the noon lunch hour and the streets were filled with people. Cars were honking their horns, taxicabs were squealing"
    },
    {
      "id": 529,
      "title": "What Do You Want for Christmas?",
      "text": "WHAT DO YOU WANT FOR CHRISTMAS?\n\nA poem sent to Dear Abby from a couple who have too much stuff.\n\nSo many of you asked us (since Yuletide's drawing near)\n\"What do you want for Christmas? What can we give you this year?\nIf we say, \"We want nothing!\" you bu"
    },
    {
      "id": 530,
      "title": "What Goes Around Comes Around",
      "text": "The man slowly looked up. This was a woman clearly accustomed to the finer things of life. Her coat was new.  She looked like that she had never missed a meal in her life. \n \nHis first thought was that she wanted to make fun of him, like so many others ha"
    },
    {
      "id": 531,
      "title": "What Guide Do You Read?",
      "text": "What Guide Do You Read?\n\nThey lie on the table side by side\nThe Holy Bible and TV guide.\nOne is well worn and cherished with pride.\nNot the Bible, but the TV guide.\nOne is used daily to help folks decide.\nNo, not the Bible, but the TV guide.\nAs the pages"
    },
    {
      "id": 532,
      "title": "What Is In Your Sponge?",
      "text": "WHAT'S IN YOUR SPONGE?\n\nThere are 5 sponges laying on your kitchen counter top.  Each member of\nyour family has been cleaning up different areas of your home, but all\nthe sponges look the same. You are curious as to what was cleaned in\nyour home, but you"
    },
    {
      "id": 533,
      "title": "What Matters Most",
      "text": "What Matters Most\n\nIn the mid 1970's, Ed Roberts created the world's first commercially\nsuccessful personal computer (PC). He hired a 19 year old named Bill\nGates to write software for him.\n\nRoberts sold his computer business in 1977 and bought a farm. Se"
    },
    {
      "id": 534,
      "title": "What T.J. Drew",
      "text": "WHAT T.J. DREW\n\nA weary mother returned from the store,\nLugging groceries through the kitchen door.\nAwaiting her arrival was her 8 year old son,\nAnxious to relate what his younger brother had done.\n\n\"While I was out playing and Dad was on a call,\nT.J. too"
    },
    {
      "id": 535,
      "title": "What You Will Be",
      "text": "WHAT YOU WILL BE\n\nAs I gazed up at the mountains, I was awed by their majesty;\nI bowed my head and asked myself, \"Why should He care for me?\nI am not great like the mountains that tower so high above,\nWhat is there about me that God can find to love?\"\n\n\"F"
    },
    {
      "id": 536,
      "title": "Whats In Your Sponge?",
      "text": "WHAT'S IN YOUR SPONGE?\n\nThere are 5 sponges laying on your kitchen counter top.  Each member of\nyour family has been cleaning up different areas of your home, but all\nthe sponges look the same. You are curious as to what was cleaned in\nyour home, but you"
    },
    {
      "id": 537,
      "title": "When I Say I Am A Christian",
      "text": "WHEN I SAY I AM A CHRISTIAN\n\nWhen I say ... I am a Christian\nI'm not shouting \"I am saved.\"\nI'm whispering \"I get lost\"\nThat is why I chose this way.\n\nWhen I say ... I am a Christian\nI don't speak of this with pride.\nI'm confessing that I stumble\nand need"
    },
    {
      "id": 538,
      "title": "When You Thought I Was Not Looking",
      "text": "WHEN YOU THOUGHT I WASN'T LOOKING\n\nWhen you thought I wasn't looking, by a Child\n\nA message every parent should read, because your children are watching and doing as you do, not as you say.\n \n\"When you thought I wasn't looking, I saw you hang my first pai"
    },
    {
      "id": 539,
      "title": "When You Thought I Wasnt Looking",
      "text": "WHEN YOU THOUGHT I WASN'T LOOKING\n\nWhen you thought I wasn't looking, by a Child\n\nA message every parent should read, because your children are watching and doing as you do, not as you say.\n \n\"When you thought I wasn't looking, I saw you hang my first pai"
    },
    {
      "id": 540,
      "title": "Where is God?",
      "text": "WHERE IS GOD?\n\nHe was just a little boy, on a week's first day.\nHe was wandering home from Sunday School, and dawdling on the way.\nHe scuffed his shoes into the grass; he found a caterpillar.\nHe found a fluffy milkweed pod, and blew out all the \"filler."
    },
    {
      "id": 541,
      "title": "Where U Are Needed",
      "text": "WHERE \"U\" ARE NEEDED...\n\n\"U\" are needed in Bible ST_DY, but not in IGNORANCE.\n\n\"U\" are needed in S_PPORT, but not in NEGLECT.\n\"U\" are needed in _NITY, but not in DIVISION.\n\"U\" are needed in D_TY, but not in IRRESPONSIBILITY.\n\n\"U\" are needed in B_ILDING, b"
    },
    {
      "id": 543,
      "title": "Who Should Read The Bible",
      "text": "WHO SHOULD READ THE BIBLE?\n\nThe Young - To learn how to live.\nThe Old - To know how to die.\nThe Ignorant - For wisdom.\nThe Learned - For humility.\nThe Rich - For compassion.\nThe Poor - For comfort.\nThe Dreamer - For enchantment.\nThe Practical - For counse"
    },
    {
      "id": 544,
      "title": "Who Should Read the Bible?",
      "text": "WHO SHOULD READ THE BIBLE?\n\nThe Young - To learn how to live.\nThe Old - To know how to die.\nThe Ignorant - For wisdom.\nThe Learned - For humility.\nThe Rich - For compassion.\nThe Poor - For comfort.\nThe Dreamer - For enchantment.\nThe Practical - For counse"
    },
    {
      "id": 545,
      "title": "Who Started Christmas?",
      "text": "WHO STARTED CHRISTMAS?\n\nThis morning I heard a story on the radio of a woman who was out Christmas shopping with her two children. After many hours of looking at row after row of toys and everything else imaginable. And after hours of hearing both her chi"
    },
    {
      "id": 546,
      "title": "Whose Hands",
      "text": "WHOSE HANDS\n\nA basketball in my hands is worth about $19.\nA basketball in Michael Jordan's hands is worth about $33 million.\nIt depends on whose hands it's in.\n\nA baseball in my hands is worth about $6.\nA baseball in Mark Mcquire's hands is worth $19 mill"
    },
    {
      "id": 547,
      "title": "Why Did Jesus Fold The Napkin?",
      "text": "WHY DID JESUS FOLD THE NAPKIN?\n\nWhy did Jesus fold the linen burial cloth after His resurrection? I never noticed this....\n\nThe Gospel of John (20:7) tells us that the napkin, which was placed over the face of Jesus, was not just thrown aside like the gra"
    },
    {
      "id": 548,
      "title": "Why Do We Crucify Him Again?",
      "text": "WHY DO WE CRUCIFY HIM AGAIN?\n\nI say something rude\nto someone who's lost,\nAnd I've ruinded my witness,\nBut they will pay the cost.\n\t--So I nail in the nails.\n\nCan anyone see the Lord through me,\nOr do they simply see my sins?\nAm I living the life Christ w"
    },
    {
      "id": 549,
      "title": "Why God Gave Us Friends",
      "text": "WHY GOD GAVE US FRIENDS\n\nGOD knew that everyone needs\ncompanionship and cheer,\nHe knew that people need someone\nwhose thoughts are always near.\n\nHe knew they need someone kind\nto lend a helping hand.\nSomeone to gladly take the time\nto care and understand."
    },
    {
      "id": 550,
      "title": "Why Jesus",
      "text": "WHY JESUS?\n\nJESUS was born,\n      that I might be born twice.\n\nHE became poor,\n      that I might possess wealth.\n\nHE became homeless,\n      that I might have mansions.\n\nHE was stripped,\n      that I always should have clothes.\n\nHE was forsaken,\n      tha"
    },
    {
      "id": 551,
      "title": "Why Jesus Is Better Than Santa Claus",
      "text": "WHY JESUS IS BETTER THAN SANTA CLAUS\n\nSanta lives at the North Pole ...\nJESUS is everywhere.\n\nSanta rides in a sleigh ...\nJESUS rides on the wind and walks on the water.\n\nSanta comes but once a year ...\nJESUS is an ever present help.\n\nSanta fills your sto"
    },
    {
      "id": 552,
      "title": "Why Jesus?",
      "text": "WHY JESUS?\n\nJESUS was born,\n      that I might be born twice.\n\nHE became poor,\n      that I might possess wealth.\n\nHE became homeless,\n      that I might have mansions.\n\nHE was stripped,\n      that I always should have clothes.\n\nHE was forsaken,\n      tha"
    },
    {
      "id": 553,
      "title": "Window Through Which We Look",
      "text": "WINDOW THROUGH WHICH WE LOOK\n\nA young couple moved into a new neighborhood. The next morning while they were eating breakfast, the young woman watched her neighbor hanging wash outside. \"That laundry is not very clean,� she said. \"She doesn't know how to"
    },
    {
      "id": 554,
      "title": "Windshield Wiper Lesson from a Child",
      "text": "WINDSHIELD WIPER LESSON FROM A CHILD\n\nOne rainy afternoon I was driving along one of the main streets of town,\ntaking those extra precautions necessary when the roads are wet and\nslick.\n\nSuddenly, my son Matthew spoke up from his relaxed position in the f"
    },
    {
      "id": 555,
      "title": "Words",
      "text": "WORDS\n\nI have always had a special love for words. Words have such power in them. The right words can uplift, inspire, heal, and create endless joy and love in our lives. The wrong words can depress, discourage, hurt, and bring us endless misery and pain."
    },
    {
      "id": 556,
      "title": "World Greatest Chef",
      "text": "WORLD'S GREATEST CHEF\n \nI love the taste of T-bone steak, \nDelicious every bite, \nBut there's nothing like the Word of God, \nFor my spiritual appetite. \n\nThe Word of God has milk and meat, \nAnd even ice cream and cake. \nTake a slice of the Bread of Life,"
    },
    {
      "id": 557,
      "title": "Y2K Bug",
      "text": "Y2K BUG\n\n*********************************************************\n* Due to widespread panic about the Y2K bug, Internet\n* News has obtained an EXCLUSIVE interview with the one\n* person most to blame for the situation.\n************************************"
    },
    {
      "id": 558,
      "title": "You Ask Why I Follow This Jesus?",
      "text": "YOU ASK WHY I FOLLOW THIS JESUS?\n\nYou ask why I follow this Jesus?\nWhy I love Him the way I do?\nWhen the world's turned away from His teachings\nAnd the people who serve Him are few.\n\nIt's not the rewards I'm after\nOr gifts that I hope to receive\nIt's the"
    },
    {
      "id": 559,
      "title": "You Just Do Not Want To Know",
      "text": "YOU JUST DON'T WANT TO KNOW\n\nMy receptionist told me a story, Monday, about her 4 year old grandson, Bryan.\n\nBryan was returning from Sunday School/Nursery with a rather grim countenance.\n\n\"What's the problem, sport?\" his mother asked.\n\n\"Well\", Bryan resp"
    },
    {
      "id": 560,
      "title": "You Shall",
      "text": "You Shall \n \nYou shall not worry, for worry is the most unproductive of all human activities. \n \nYou shall not be fearful, for most of the things we fear never come to pass. \n \nYou shall not carry grudges, for they are the heaviest of all life's burdens."
    },
    {
      "id": 561,
      "title": "You Will Never Be Sorry",
      "text": "YOU WILL NEVER BE SORRY...\n\n...for thinking before acting.\n...for hearing before judging.\n\n...for forgiving your enemies.\n...for being candid and frank.\n\n...for helping a fallen brother.\n...for being honest in business.\n\n...for thinking before speaking.\n."
    },
    {
      "id": 562,
      "title": "Your Actions May Change A Life",
      "text": "YOUR ACTIONS MAY CHANGE A LIFE\n\nOne day, when I was a freshman in high school, I saw a kid from my class was walking home from school. His name was Kyle. It looked like he was carrying all of his books. I thought to myself, \"Why would anyone bring home al"
    },
    {
      "id": 563,
      "title": "Your Cross",
      "text": "YOUR CROSS\n\nThe young man was at the end of his rope. Seeing no way out, he dropped to his knees in prayer. \"Lord, I can't go on,\" he said. \"I have too heavy a cross to bear.\" \n\nThe Lord replied, \"My son, if you can't bear its weight, just place your cros"
    },
    {
      "id": 564,
      "title": "Your Hand in Prayer",
      "text": "YOUR HAND IN PRAYER\n\n1. Your thumb is nearest to you. So begin your prayers by praying for\nthose closest to you. They are the easiest to ones to remember. To pray\nfor our  loved ones is, as C.S. Lewis once said, a \"sweet duty.\"\n\n2. The next finger is the"
    },
    {
      "id": 565,
      "title": "Your Invitation To A Birthday Party!",
      "text": "YOUR INVITATION TO A BIRTHDAY PARTY!\n\nHello dear friend! Well, as you know, it's time for my birthday again.\nLast year, they had a real big party for me and it seems like they will\nagain this year. After all, they've been shopping and preparing for it\nfor"
    }
  ];
}*/
}])

.service('BlankService', [function(){

}]);
