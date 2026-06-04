import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post implements OnInit {
  @Input() post!: { title: string; body: string };
  randomPhotoUrl!: string;

  ngOnInit(): void {
    this.generateRandomPhoto();
  }

  private generateRandomPhoto(): void {
    const randomSeed = this.generateRandomNumber(1000);
    this.randomPhotoUrl = `https://picsum.photos/seed/${randomSeed}/50`;
  }

  private generateRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
