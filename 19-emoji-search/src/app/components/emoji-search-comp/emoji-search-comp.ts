import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Emoji } from '../../models/emoji.model';
import { EmojiService } from '../../services/emoji.service';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-emoji-search-comp',
  styleUrl: './emoji-search-comp.scss',
  templateUrl: './emoji-search-comp.html',
})
export class EmojiSearchComp implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = '';
  emojis: Emoji[] = [];
  filteredEmojis: Emoji[] = [];
  categories: string[] = [];
  clipboardNotification: string | null = null;

  constructor(
    private emojiService: EmojiService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.emojiService.getEmojis().subscribe((emojis: Emoji[]) => {
      this.emojis = emojis;
      this.filteredEmojis = [...this.emojis];
      this.categories = this.emojiService.getCategories(emojis);
      this.changeDetectorRef.detectChanges();
    });
  }

  filterEmojis(): void {
    this.filteredEmojis = [];

    for (let emoji of this.emojis) {
      const isSearchMatch = emoji.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      let isCategoryMatch = true;
      if (this.selectedCategory) {
        if (emoji.category !== this.selectedCategory) {
          isCategoryMatch = false;
        }
      }

      if (isSearchMatch && isCategoryMatch) {
        this.filteredEmojis.push(emoji);
      }
    }
  }

  onCategoryChange(): void {
    this.filterEmojis();
  }

  copyToClipboard(symbol: string): void {
    navigator.clipboard.writeText(symbol);
    this.clipboardNotification = `Copied "${symbol}" to clipboard`;
    setTimeout(() => {
      this.clipboardNotification = null;
    }, 3000);
  }
}
