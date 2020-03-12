import { Component, Prop, h } from "@stencil/core";
import photo from "../local-assets/endless.svg";
@Component({
  tag: "pwc-simple-card",
  styleUrl: "pwc-simple-card.scss",
  shadow: false
})
export class PwcSimpleCard {
  @Prop() source: any = photo;
  @Prop() cardTitle: string;
  @Prop() cardDetails: string;

  render() {
    return (
      <div class="card-container">
        <div class="img-container">
          <img class="img-style" src={this.source} />
        </div>
        <div class="text-container">
          <div class="title-style">{this.cardTitle}</div>
          <div class="details-style">{this.cardDetails}</div>
        </div>
      </div>
    );
  }
}
