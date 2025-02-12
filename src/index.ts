interface MysteryBoxOptions {
  showResultDelay?: number;
  roundResetDelay?: number;
  roundsTotal?: number;
  onRoundStart?: (round: number) => void;
  onGameEnd?: () => void;
  onRoundEnd?: (round: number) => void;
}

class MysteryBox {
  private readonly container: HTMLElement | null;
  private options: MysteryBoxOptions;
  private isPlaying: boolean;
  private roundCounter: number;

  constructor(options?: MysteryBoxOptions) {
    this.options = {
      showResultDelay: 1000,
      roundResetDelay: 1000,
      roundsTotal: 2,
      ...options,
    };

    this.container = document.querySelector('.mystery-box');
    this.isPlaying = false;
    this.roundCounter = 0;
  }

  public init(): void {
    if (!this.container) {
      return;
    }

    const items = Array.from(this.container.querySelectorAll('.mystery-box__item')).map(
      (item) => item as HTMLElement,
    );

    items.forEach((item) => {
      item.addEventListener('click', () => this.handleItemClick(item, items));
    });
  }

  private handleItemClick(item: HTMLElement, items: HTMLElement[]): void {
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.roundCounter++;

    if (typeof this.options.onRoundStart === 'function') {
      this.options.onRoundStart(this.roundCounter);
    }

    this.container!.classList.add('game-started');

    item.classList.add('box-selected');

    setTimeout(() => {
      items.forEach((i) => {
        if (i === item) {
          i.classList.add('box-won');
        } else if (!i.classList.contains('box-won')) {
          i.classList.add('box-loss');
        }
      });

      setTimeout(() => {
        this.resetGame();

        if (typeof this.options.onRoundEnd === 'function') {
          this.options.onRoundEnd(this.roundCounter);
        }

        if (this.roundCounter >= (this.options.roundsTotal ?? 3)) {
          if (typeof this.options.onGameEnd === 'function') {
            this.options.onGameEnd();
          }
        } else {
          this.isPlaying = false;
        }
      }, this.options.roundResetDelay);
    }, this.options.showResultDelay);
  }

  private resetGame(): void {
    if (!this.container) return;

    this.container.classList.remove('game-started');

    const items = this.container.querySelectorAll('.mystery-box__item');

    items.forEach((item) => {
      item.classList.remove('box-selected');

      if (!item.classList.contains('box-won')) {
        item.classList.remove('box-loss');
      }
    });
  }
}

export default MysteryBox;
