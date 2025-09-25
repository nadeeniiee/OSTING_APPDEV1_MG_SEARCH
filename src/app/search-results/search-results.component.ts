import { Component, Input, OnChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'search-results',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnChanges {
  @Input() query: string = '';
  filteredResults: any[] = [];

  websites = [
    { title: 'Facebook', url: 'https://www.facebook.com/', description: 'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.' },
    { title: 'Messenger', url: 'https://www.messenger.com/', description: 'Messenger helps you connect with your Facebook friends and family, build your community, and deepen your interests.' },
    { title: 'Instagram', url: 'https://www.instagram.com/', description: 'Connect with friends, find other fans, and see what people around you are up to and into.' },
    { title: 'Linkedin', url: 'https://www.linkedin.com/login', description: 'A platform that helps you to keep in touch with people you know, share ideas, and build your career.' },
    { title: 'X', url: 'https://x.com/i/flow/login?lang=en', description: 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.' },
    { title: 'Twitch', url: 'https://www.twitch.tv/', description: 'Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more.' },
    { title: 'Reddit', url: 'https://www.reddit.com/', description: 'Reddit is where millions of people gather for conversations about the things they care about' },
    { title: 'Netflix', url: 'https://www.netflix.com/ph-en/', description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, PC,  mobile, tablet and more.' }
  ];

  ngOnChanges() {
    this.filterResults();
  }

  filterResults() {
    if (!this.query) {
      this.filteredResults = this.websites;
      return;
    }

    const lowerQuery = this.query.toLowerCase();
    this.filteredResults = this.websites.filter(site =>
      site.title.toLowerCase().includes(lowerQuery) ||
      site.description.toLowerCase().includes(lowerQuery)
    );
  }
}
