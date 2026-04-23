import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    }
  ]
})
export class FormComponent implements ControlValueAccessor {
  @Input() 
  isDisabled: boolean = false;

  @Input()
  placeholder: string = '';

  value: string = '';

  /**
   * @ignore
   * 这是内部使用的私有属性，不对外暴露
   */
  private onChange = (value: string | null) => { };

  /**
   * @ignore
   * 这是内部使用的私有属性，不对外暴露
   */
  private onTouched = () => { };

  writeValue(value: string | null): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);  
    this.onTouched();         
  }
}
