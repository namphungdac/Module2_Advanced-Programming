export class TennisGame {
    score: string = '';

    private readonly LOVE_SCORE = 0;
    private readonly FIFTEEN_SCORE = 1;
    private readonly THIRTY_SCORE = 2;
    private readonly FORTY_SCORE = 3;

    getScore(player1Name: string,
             player2Name: string,
             player1Score: number,
             player2Score: number) {
        let tempScore = 0;

        if (player1Score == player2Score) {
            this.equalScore(player1Score);
        } else if (player1Score >= 4 || player2Score >= 4) {
            this.winScore(player1Score, player2Score);
        } else {
            this.showScore(tempScore, player1Score, player2Score);
        }
    }

    private showScore(tempScore: number, player1Score: number, player2Score: number) {
        for (let i = 1; i < 3; i++) {
            if (i == 1) tempScore = player1Score;
            else {
                this.score += "-";
                tempScore = player2Score;
            }
            switch (tempScore) {
                case this.LOVE_SCORE:
                    this.score += "Love";
                    break;
                case this.FIFTEEN_SCORE:
                    this.score += "Fifteen";
                    break;
                case this.THIRTY_SCORE:
                    this.score += "Thirty";
                    break;
                case this.FORTY_SCORE:
                    this.score += "Forty";
                    break;
            }
        }
    }

    private winScore(player1Score: number, player2Score: number) {
        let minusResult = player1Score - player2Score;
        if (minusResult == 1) this.score = "Advantage player1";
        else if (minusResult == -1) this.score = "Advantage player2";
        else if (minusResult >= 2) this.score = "Win for player1";
        else this.score = "Win for player2";
    }

    private equalScore(player1Score: number) {
        switch (player1Score) {
            case this.LOVE_SCORE:
                this.score = "Love-All";
                break;
            case this.FIFTEEN_SCORE:
                this.score = "Fifteen-All";
                break;
            case this.THIRTY_SCORE:
                this.score = "Thirty-All";
                break;
            case this.FORTY_SCORE:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;
        }
    }
}