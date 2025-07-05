import {Component, DestroyRef} from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {HelloworldService} from "./services/helloworld.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime, switchMap} from "rxjs";

@Component({
  selector: 'o11y-root',
  standalone: true,
    imports: [
        MenuModule,
        ReactiveFormsModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'O11y\'s Handbook';

  formControl = new FormControl('', Validators.required);
  greeting = '';

  constructor(
      private readonly helloworldService: HelloworldService,
      private readonly destroyRef: DestroyRef
  ) {

      this.formControl.valueChanges.pipe(
          debounceTime(500),
          switchMap((value) => value
                  ? this.helloworldService.getGreetings(value)
                  : this.helloworldService.getGreetings()
          ),
          takeUntilDestroyed(this.destroyRef),
      ).subscribe(res => this.greeting = res.text);
  }
}
