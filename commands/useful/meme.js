const {
    MessageEmbed
} = require('discord.js');
require('dotenv').config()

module.exports = {
    name: 'meme',
    category: 'Useful',
    description: 'Generates a Unchecked nitro code',
    aliases: [''],
    usage: 'meme',
    userperms: [],
    botperms: [],
    run: async (client, message, args) => {
        var images = ["https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg", "https://metro.co.uk/wp-content/uploads/2019/03/SEC_57712924.jpg?quality=90&strip=all", "https://i0.wp.com/canfasdblog.com/wp-content/uploads/2020/04/covid4-1.jpg?fit=691%2C361&ssl=1", "https://record.goshen.edu/wp-content/uploads/2020/08/meme6-640x530.jpg", "https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s800-c85.jpg", "https://i.chzbgr.com/full/4035845/hB03D02F6/funny-memes-the-best-of-em", "https://i.chzbgr.com/full/9517451776/h8843E9DB/person-my-girl-wants-be-flash-halloween-thebedaz-zledunicorn", "https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png", "https://i.ytimg.com/vi/9oKvqdgiN-0/maxresdefault.jpg", "https://s3.india.com/wp-content/uploads/2019/02/valentines.jpg", "https://slapwank.com/wp-content/uploads/2019/08/mom-life-meme.jpg", "https://3.bp.blogspot.com/-AvsQ1qUC50Q/Vt-ghnzuNSI/AAAAAAAABck/TmwUV3ImSzo/s640/Funny-memes-1.jpg", "https://timesofindia.indiatimes.com/thumb/msid-78679348,width-1200,height-900,resizemode-4/.jpg", "https://e3.365dm.com/20/04/2048x1152/skynews-cat-meme-coronavirus_4967171.jpg", "https://images.squarespace-cdn.com/content/v1/5a34b5b8914e6bb1202b97d8/1582261874600-PHD872PQQVY20OPWQOBS/ke17ZwdGBToddI8pDm48kBnaVw4txs4HIvTmFW7CqnF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaHJ0CCIp0h94CjFWATtzuuQKdHi7dmyAa81KvzhUF1ZDsIMEtXATr_0s0D_0nLV0/all+this+chemo+made+me+emo.JPG", "https://theawesomedaily.com/wp-content/uploads/2018/07/funny-love-memes-feat-1.jpg", "https://www.blackenterprise.com/wp-content/blogs.dir/1/files/2014/11/black-enterprise-funniest-business-memes-you-should-see.jpg", "https://resources.centrav.com/wp-content/uploads/2020/06/TGIF-500x500.jpg", "https://images.squarespace-cdn.com/content/v1/5c0ad6d9e749408c1f54d697/1588305122152-LG4PX1AV328WECHPGTGT/ke17ZwdGBToddI8pDm48kGzF-z4DfxQPhfps1Lkl80QUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKct6bMr5_jhg2DEVey1n5SoicEcV5hebQtl8lgZG2eVxZbffsUbEQeo1kWccqKK4pO/Screen+Shot+2020-04-30+at+10.51.39+PM.png", "https://i.pinimg.com/736x/ab/a9/38/aba9387f620b0ef5aca639a385a46814.jpg", "https://google.com", "https://bing.com", "https://www.readersdigest.com.au/wp-content/uploads/2020/07/08-Opener-Meme-770.jpg", "http://.cnn.com", "http://new.com", "http://cnet.com", "http://yahoo.com", "http://lycos.com", "http://www.webcrwler.com", "http://com", "https://youtube.com", "https://bing.com", "https://bing.com", "https://bing.com"];
        var image = Math.floor(Math.random() * images.length);


        let random = new MessageEmbed()
            .setTitle('Here is a meme')
            .setAuthor('LOL')
            .setImage(String([images[image]]))
            .setColor("BLUE")
            .setURL(String([images[image]]))

        message.channel.send(random);


    }
}