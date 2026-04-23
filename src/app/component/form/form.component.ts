import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
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
  set isDisabled(value: boolean) {
    this.fIsDisabled = value;
    this.cdr.markForCheck();
  }

  get isDisabled(): boolean {
    return this.fIsDisabled;
  }

  @Input() 
  set placeholder(value: string) {
    this.fPlaceholder = value;
    this.cdr.markForCheck();
  }

  get placeholder(): string {
    return this.fPlaceholder || '请输入姓名';
  }

  fIsDisabled: boolean = false;

  fPlaceholder: string = '';

  value: string = '';

  constructor(private cdr: ChangeDetectorRef) {

  }

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
