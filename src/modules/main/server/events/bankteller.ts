import { RpgEvent, EventData, RpgPlayer} from '@rpgjs/server'
import defaultGui from '@rpgjs/default-gui' 
import fetch from 'node-fetch';
const FormData = require('form-data');

@EventData({
    name: 'Bank Teller', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class BankEvent extends RpgEvent {
    onInit() {
        this.setGraphic('hudsun')
    }
    async onAction(player: RpgPlayer) {

        await player.showText("Aha, welcome smirk, I’m glad you made it! Here you will find the answers to all of the financial questions you have to help get started on your life. Feel free to ask me anything!", {
            talkWith: this
        })

        await player.showText("First thing’s first, you’ll need a reliable and consistent source of income to be able to afford a home. Most purchasers will need some sort of loan to purchase a home, and without a stable income, lenders will be worried to offer you a loan.", {
            talkWith: this
        })

        await player.showText("Lenders are the people or institutions that offer you a loan, making it possible for you to purchase a house! In terms of purchasing a home, based off your income and other financial history, they’ll offer you a mortgage.", {
            talkWith: this
        })

        await player.showText("This is the agreement that you and your lender make in order for you to purchase your house. It’s essentially a loan, where once you are able to afford your house with the loan, you’ll make monthly payments back to the lender. Since you need to borrow money, the lender will also add an interest rate known as an annual percentage rate, or APR for short.", {
            talkWith: this
        })

        await player.showText("It’s not that simple, there are many factors to consider. One of the most important aspects is having a good credit score. The higher the credit score, usually results in a lower interest rate! Another important factor is how much your down payment on the house is, which simply put is the percentage of the home’s purchase you pay up front. The more you put down, the less you need to pay back. It’s also less risky on the lender’s side to offer money if you put enough money down. You should aim to put roughly 20% of the home’s total value down. There’s more that goes into an interest rate, but those are the key points you should know.", {
            talkWith: this
        })
        await player.showText("That’s when things get a little nasty. Usually if it’s your first offense, you’ll be given a late fee, where you have to pay even more to the lender. But if it’s a reoccurring issue, the lender has the right to take your home away!", {
            talkWith: this
        })
        await player.showText("Think of a credit score as the likelihood of a person is able to pay back the money they’ve borrowed from a lender. Your score can range from 300 - 850, with a higher score being better. ", {
            talkWith: this
        })


        



        player.gold += 100
    }
} 