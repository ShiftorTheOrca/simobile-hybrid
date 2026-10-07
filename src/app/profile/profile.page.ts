import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  fadeInAvatar() {
    const avatarElement = document.querySelector('#member_1') as
      HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(1000)
      .iterations(3)
      .keyframes([
        { offset: 0, opacity: '1' },
        { offset: 0.5, opacity: '0' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }

  growShrinkAvatar_1() {
    const avatarElement = document.querySelector('#member_3') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(1000) // Animation duration in milliseconds
      .iterations(3) // do animation 3 times
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(0.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);
    animation.play();
  }

  growShrinkAvatar_2() {
    const avatarElement = document.querySelector('#member_4') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(1000) // Animation duration in milliseconds
      .iterations(3) // do animation 3 times
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(0.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);
    animation.play();
  }

  rotateAvatar() {
    const avatarElement = document.querySelector('#member_2') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(500)
      .iterations(6)
      .keyframes([
        { offset: 0, transform: 'rotate(0deg)' },
        { offset: 1, transform: 'rotate(3240deg)' },

      ]);
    animation.play();
  }

  ionViewDidEnter() {
    this.fadeInAvatar();
    this.rotateAvatar();
    this.growShrinkAvatar_1();
    this.growShrinkAvatar_2();
  }

}
