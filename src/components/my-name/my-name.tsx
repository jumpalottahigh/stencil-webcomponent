import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {
  @Prop() fullname: string
  @Prop() description: string
  @Prop() location: string

  render() {
    return (
      <section>
        <p>{this.fullname}</p>
        <p>{this.description}</p>
        <p>{this.location}</p>
      </section>
    )
  }
}
