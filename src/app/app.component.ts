import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {

    // ✅ Default Title
    this.title.setTitle('Electrocine Industries | LED Lighting Manufacturer in Ghaziabad');

    // ✅ Meta Tags
    this.meta.addTags([
      {
        name: 'description',
        content: 'Electrocine Industries is a leading LED lighting manufacturer in Ghaziabad offering industrial, outdoor and architectural lighting solutions across India.'
      },
      {
        name: 'keywords',
        content: 'LED lights, industrial lighting, outdoor lighting, Ghaziabad lighting company, Electrocine Industries'
      },
      {
        name: 'author',
        content: 'Electrocine Industries'
      },

      // ✅ Open Graph
      {
        property: 'og:title',
        content: 'Electrocine Industries | LED Lighting Experts'
      },
      {
        property: 'og:description',
        content: 'High-performance LED lighting solutions for industries and infrastructure.'
      },
      {
        property: 'og:image',
        content: 'https://electrocineindustries.com/assets/og-image.jpg'
      },
      {
        property: 'og:url',
        content: 'https://electrocineindustries.com/'
      },
      {
        property: 'og:type',
        content: 'website'
      },

      // ✅ Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Electrocine Industries'
      },
      {
        name: 'twitter:description',
        content: 'Industrial & architectural LED lighting solutions.'
      },
      {
        name: 'twitter:image',
        content: 'https://electrocineindustries.com/assets/og-image.jpg'
      }
    ]);
  }
}