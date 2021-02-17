import axios from 'axios';
import Phaser from 'phaser';

export default class Leaderboard extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text) {
    super(scene, x, y, text, { color: 'white', fontSize: '18px' });
    scene.add.existing(this);
    this.scene = scene;
    this.uri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdi/scores';
  }

  async getScores() {
    try {
      this.results = await axios(`https://cors-anywhere.herokuapp.com/${this.uri}`);
      this.scores = this.results.data.result;
      let display = 'Leaderboard';

      this.scores = [...this.scores].sort((a, b) => b.score - a.score).slice(0, 3);
      this.scores.forEach((score, i) => {
        display += `\n${i + 1}.${score.user} ${score.score}`;
      });
      this.setText(display);
      this.lineSpacing = -20;
    } catch (error) {
      this.results = false;
    }
  }

  async submitScore(score, user = 'unnamed') {
    const data = { user, score };
    this.scene.scoreSubmittedText.setText('Submitting your score...');
    try {
      this.result = await fetch(`https://cors-anywhere.herokuapp.com/${this.uri}`, {
        method: 'post',
        cors: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      this.result = await this.result.json();
      if (this.result) this.scene.scoreSubmittedText.setText('Score submitted');
    } catch (error) {
      this.results = false;
      this.scene.scoreSubmittedText.setText('Server error!');
    }
  }
}
